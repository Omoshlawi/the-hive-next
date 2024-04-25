import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authCookieConfig } from "./app/lib/constants";
import { decode } from "jsonwebtoken";
import { TokenPayload } from "./app/lib/types/base";
import { serialize } from "cookie";

const redirectToAuth = (request: NextRequest) => {
  const authCookie = request.cookies.get(authCookieConfig.name)?.value;
  const callbackUrl = request.nextUrl.pathname;

  const serializedCookieToken = serialize(
    authCookieConfig.name,
    authCookie ?? "",
    {
      ...authCookieConfig.config,
      maxAge: -1,
    }
  );

  const headers = new Headers();
  headers.append("Set-Cookie", serializedCookieToken);
  return NextResponse.redirect(
    new URL(
      `/api/auth?callbackUrl=${encodeURIComponent(callbackUrl)}`,
      request.url
    ),
    { headers }
  );
};

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get(authCookieConfig.name)?.value;
  const isAuthenticated = decode(authCookie ?? "") as TokenPayload | null;
  const isProtected = request.nextUrl.pathname.startsWith("/dashboard");

  // TODO Specify protected routes
  if (!isAuthenticated && isProtected) {
    return redirectToAuth(request);
  }

  const response = NextResponse.next();
  if (response.status === 401) {
    console.log(
      "----------------------------------------------------------",
      "Redirect user to auth screen",
      "----------------------------------------------------------"
    );

    return redirectToAuth(request);
  }
  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
