import { useState } from "react";
import { BASE_URL } from "../constants";

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

export const useApiClient = <T = any>(defaultValue?: T) => {
  const [state, setState] = useState<ApiResponse<T>>({
    data: defaultValue,
    loading: false,
  });

  const request = async (options: RequestOptions) => {
    try {
      setState({ loading: true });

      const response = await fetch(`${BASE_URL}/${options.url}`, options);
      const status = response.status;
      if (response.ok) {
        const data = await response.json();
        setState((value) => ({ ...value, data, error: undefined }));
      } else {
        const errors = await response.json();
        setState((value) => ({
          ...value,
          error: { status, errors },
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
  };

  return { ...state, request };
};
