import type { MetadataRoute } from "next";
import { getIndexablePages } from "@/lib/server/page-repository";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.SITE_LIVE !== "true") return [];
  return getIndexablePages().map(({ path }) => ({ url: siteConfig.url(path) }));
}
