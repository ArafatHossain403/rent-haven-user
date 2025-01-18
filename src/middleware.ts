import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const path = url.pathname;

  // Intercept routes starting with /admin
  if (path.startsWith("/admin")) {
    // Retrieve the authentication token (e.g., JWT) from cookies
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      // Redirect to login if no token is present
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }

    try {
      // Decode the JWT token to extract user information
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map((char) => `%${`00${char.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join("")
      );
      const { role } = JSON.parse(jsonPayload);

      // Check if the user's role is admin
      if (role !== "admin") {
        // Redirect to a 403 page if the user is not an admin
        url.pathname = "/403";
        return NextResponse.redirect(url);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      // Redirect to login in case of a decoding error
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  // Allow the request to continue if all checks pass
  return NextResponse.next();
}

// Configure the matcher to apply middleware only to /admin and its sub-routes
export const config = {
  matcher: ["/admin/:path*"], // Match /admin and all nested routes
};
