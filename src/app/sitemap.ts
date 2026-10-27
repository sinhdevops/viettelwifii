import type { MetadataRoute } from "next";
import { getIndexablePages } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  if (process.env.SITE_LIVE !== "true") return [];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) throw new Error("NEXT_PUBLIC_SITE_URL is required to publish sitemap");
  return getIndexablePages().map(({ path }) => ({ url: new URL(path, siteUrl).toString() }));
}
