import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  console.log(request.cookies.get("token"));
  if (
    request.cookies.get("token")?.value == undefined &&
    request.nextUrl.pathname != "/therapy" &&
    request.nextUrl.pathname != "/therapy/dashboard" &&
    request.nextUrl.pathname != "/therapy/register" &&
    !request.nextUrl.pathname.includes("/therapy/notes") &&
    request.nextUrl.pathname != "/therapy/edit-profile"
  ) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }

  if (
    !request.cookies.get("admin_token") &&
    request?.nextUrl?.pathname.includes("admin")
  ) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/therapy/:path*",
    "/questionnaire/:path*",
    "/user/dashboard",
    "/therapist-review/:path*",
    "/cart/:path*",
  ],
};
