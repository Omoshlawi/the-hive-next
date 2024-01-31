import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export function requireAuth(request: NextRequest) {
  // return NextResponse.redirect(
  //   new URL(`/api/auth?callbackUrl=${request.nextUrl.pathname}`, request.url)
  // );
  console.log("--------------------------------------------");

  console.log(request.cookies);

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
