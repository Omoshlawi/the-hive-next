import { useEffect, useState } from "react";
interface RequestOptions extends RequestInit {
  url: string;
}

interface ApiResponse<T> {
  loading: boolean;
  data?: T;
  error?: { status: number; errors: any };
}

export const getQueryPramas = (params: Record<string, any>) => {
  const queryParams = new URLSearchParams(params);
  return `?${queryParams.toString()}`;
};

/**
 *
 * @param defaultValue
 * @returns
 */
export const useApiClient = <T = any>(defaultValue?: T) => {
  const [state, setState] = useState<ApiResponse<T>>({
    data: defaultValue,
    loading: false,
  });
  const request = async (options: RequestOptions) => {
    let response;
    try {
      setState({ loading: true });

      response = await fetch(`/api/proxy/${options.url}`, options);
      const data = await response.json();
      const status = response.status;
      // console.log(data);

      if (response.ok) {
        setState((value) => ({ ...value, data, error: undefined }));
      } else {
        setState((value) => ({
          ...value,
          error: { status, errors: data },
          data: undefined,
        }));
      }
    } catch (error) {
      console.error("Error parsing response: ", error);
    } finally {
      setState((value) => ({
        ...value,
        loading: false,
      }));
    }
    return response;
  };

  return {
    ...state,
    request,
    setData: (data?: T) => setState((d) => ({ ...d, data })),
  };
};
