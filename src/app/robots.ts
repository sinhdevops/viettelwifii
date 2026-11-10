import type { MetadataRoute } from "next";
import {
  getPublicationOrigin,
  isPublicationEnabled,
} from "@/features/seo/page-seo";

const blockedRobots: MetadataRoute.Robots = {
  rules: { userAgent: "*", disallow: "/" },
};

export default function robots(): MetadataRoute.Robots {
  if (!isPublicationEnabled()) return blockedRobots;

  // A bad/missing public origin must not turn a misconfigured build crawlable.
  let origin: URL | null;
  try {
    origin = getPublicationOrigin();
  } catch {
    return blockedRobots;
  }
  if (!origin) return blockedRobots;

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: new URL("/sitemap.xml", origin).href,
  };
}
