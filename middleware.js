import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  let therapist_token = await request.cookies.get("therapist_token");

  if (
    request.cookies.get("token")?.value == undefined &&
    request.nextUrl.pathname != "/therapists" &&
    request.nextUrl.pathname != "/therapists/dashboard" &&
    request.nextUrl.pathname != "/therapists/edit-profile"
  ) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/therapists/:path*",
    "/questionnaire/:path*",
    "/user/dashboard",
    "/therapist-review/:path*",
  ],
};
