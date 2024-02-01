import { NextRequest, NextResponse } from "next/server";
import { serialize, CookieSerializeOptions, parse } from "cookie";
import { authCookieConfig } from "@/app/lib/constants";

export const GET = async (request: NextRequest) => {
  const token = request.cookies.get(authCookieConfig.name)?.value;
  const serializedCookieToken = serialize("session-token", token ?? "", {
    ...authCookieConfig.config,
    maxAge: -1,
  });
  const headers = new Headers();
  headers.append("Set-Cookie", serializedCookieToken);

  const response = NextResponse.json(
    { detail: "Logged out succesffully!" },
    { headers: headers }
  );
  return response;
};
