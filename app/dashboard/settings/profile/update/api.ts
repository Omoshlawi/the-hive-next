import { BASE_URL } from "@/app/lib/constants";

export const viewProfile = async () => {
  try {
    const response = await fetch(
      new URL(`/api/proxy/users/profile`, BASE_URL),
      {
        cache: "no-cache",
        redirect: "follow",
      }
    );
    const responseData = await response.json();
    if (response.ok) {
      return responseData;
    }
  } catch (error) {
    console.log(error);
  }
};
