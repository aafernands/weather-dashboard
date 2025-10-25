// middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard/:path*", // protect dashboard and subroutes
    "/settings/:path*",  // protect settings
  ],
};
