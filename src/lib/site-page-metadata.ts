import type { Metadata } from "next";
import { buildPageMetadata, seoApprovedRoutes } from "@/features/seo/page-seo";
import { siteRouteDefinitions } from "./site-routes";

/** Support pages use the same publication gate and canonical policy as products. */
export function metadataForSiteRoute(path: string): Metadata {
  const route = siteRouteDefinitions.find((entry) => entry.path === path);
  if (!route) return { robots: { index: false, follow: false } };

  return buildPageMetadata({
    path,
    page: {
      title: route.title,
      description: route.description,
      status: route.status,
    },
    approvedRoutes: seoApprovedRoutes,
  });
}
