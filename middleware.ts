import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

// export function requireAuth(request: NextRequest) {
//   return NextResponse.redirect(
//     new URL(`/api/auth?callbackUrl=${request.nextUrl.pathname}`, request.url)
//   );
// }

export const config = {
  matcher: ["/dashboard/:path*"],
};
