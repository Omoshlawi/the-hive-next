import { BASE_URL } from "@/app/lib/constants";
import { ValidationError } from "@/app/lib/exceptions";
import { LoginSchema, RegisterSchema } from "@/app/lib/schema";
import { wait } from "@/app/lib/utils";
import { z } from "zod";

export const login = async (params: z.infer<typeof LoginSchema>) => {
  // await wait(5000);
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const response = await fetch(`${BASE_URL}/api/auth/signin/credentials`, {
    method: "POST",
    body: JSON.stringify(params),
    redirect: "follow",
    headers: myHeaders,
  });
  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else if (response.status === 400) {
    throw new ValidationError(responseData.errors);
  } else {
    throw new Error(responseData.detail);
  }
};

export const register = async (params: z.infer<typeof RegisterSchema>) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const response = await fetch(`${BASE_URL}/api/auth/signup`, {
    method: "POST",
    body: JSON.stringify(params),
    redirect: "follow",
    headers: myHeaders,
  });
  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else if (response.status === 400) {
    throw new ValidationError(responseData.errors);
  } else {
    throw new Error(responseData.detail);
  }
};
