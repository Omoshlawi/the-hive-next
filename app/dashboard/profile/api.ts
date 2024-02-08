import { Token } from "@/app/lib/types/base";

export const viewProfile = async (token: Token) => {
  var myHeaders = new Headers();
  myHeaders.append("x-access-token", token.accessToken);

  try {
    const response = await fetch(`/api/proxy/users/profile`, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });
    const responseData = await response.json()
    
  } catch (error) {}
};
