import type { MetadataRoute } from "next";
import { approvedRoutes } from "@/lib/approved-routes";
import { isIndexablePage } from "@/lib/server/page-repository";
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

  // Draft pages render for internal links but must never be advertised here.
  const productPaths = approvedRoutes.filter(isIndexablePage);

  // Support routes are allowlist-checked against the same SEO union.
  const supportPaths = indexableSiteRoutes.filter(isSeoRouteAllowed);

  const paths = new Set([...productPaths, ...supportPaths]);
  // No verified modification date exists in the content contract. Omit lastModified;
  // neither source.capturedAt nor article publication dates establish a page edit.
  return [...paths].map((path) => ({ url: new URL(path, origin).href }));
}
