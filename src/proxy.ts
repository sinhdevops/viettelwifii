import { NextResponse, type NextRequest } from "next/server";
import { approvedRoutes } from "@/lib/approved-routes";

const contentPaths = new Set<string>(approvedRoutes);

/** Reject unknown dynamic content paths before loading.tsx can stream HTTP 200.
 * Exact matching also prevents case-variant 404 cache entries from colliding
 * with approved paths on case-insensitive filesystems.
 */
export function proxy(request: NextRequest) {
  if (contentPaths.has(request.nextUrl.pathname)) return NextResponse.next();
  // The package index is a separately registered support page.
  if (request.nextUrl.pathname === "/goi-cuoc-viettel") {
    return NextResponse.next();
  }
  return NextResponse.rewrite(new URL("/_not-found", request.url), {
    status: 404,
  });
}

export const config = {
  matcher: ["/internet/:path+", "/tin-tuc/:path+", "/goi-cuoc-viettel/:path+"],
};
