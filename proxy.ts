import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { UserService } from "./services/userService";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  let isAuthenticated = false;
  let isAdmin = false;
  const { data } = await UserService.getSession();
  if (data) {
    isAuthenticated = true;
    isAdmin = data.user.role === "ADMIN";
  }

  console.log(isAdmin);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdmin && pathName.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (!isAdmin && pathName.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  console.log(pathName);

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/admin-dashboard",
    "/admin-dashboard/:path*",
  ],
};
