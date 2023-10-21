import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  let therapist_token = await request.cookies.get("therapist_token");
  let token = await request.cookies.get("token");

  if (request.nextUrl.pathname != "/therapists" && !token) {
    return NextResponse.redirect(new URL("/user/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/therapists/:path*", "/questionnaire/:path*", "/user/dashboard"],
};
