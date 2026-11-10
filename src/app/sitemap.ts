import type { MetadataRoute } from "next";
import { approvedRoutes } from "@/lib/approved-routes";
import { getPage } from "@/lib/server/page-repository";
import { indexableSiteRoutes } from "@/lib/site-routes";
import {
  getPublicationOrigin,
  isPublicationEnabled,
  isSeoRouteAllowed,
} from "@/features/seo/page-seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublicationEnabled()) return [];

  // A missing/invalid NEXT_PUBLIC_SITE_URL must not emit a bogus sitemap.
  let origin: URL | null;
  try {
    origin = getPublicationOrigin();
  } catch {
    return [];
  }
  if (!origin) return [];

  // Every approved product route is listed; page status is no longer a filter.
  const productPaths = approvedRoutes.filter((path) => getPage(path) !== null);

  // Support routes are allowlist-checked against the same SEO union.
  const supportPaths = indexableSiteRoutes.filter(isSeoRouteAllowed);

  const paths = new Set([...productPaths, ...supportPaths]);
  return [...paths].map((path) => ({ url: new URL(path, origin).href }));
}
