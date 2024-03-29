import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authCookieConfig } from "./app/lib/constants";
import { decode } from "jsonwebtoken";
import { TokenPayload } from "./app/lib/types/base";
import { serialize } from "cookie";

export function middleware(request: NextRequest) {
  const callbackUrl = request.nextUrl.pathname;
  const authCookie = request.cookies.get(authCookieConfig.name)?.value;
  const isAuthenticated = decode(authCookie ?? "") as TokenPayload | null;
  const isProtected = request.nextUrl.pathname.startsWith("/dashboard");
  // TODO Specify protected routes
  if (!isAuthenticated && isProtected) {
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
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
