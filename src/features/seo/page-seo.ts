import type { Metadata } from "next";
import type { PageContent } from "@/lib/content-schema";

/** Lead resolves the page and the exact 171-path allowlist before calling this helper. */
export type PageSeoContext = {
  path: string;
  page: PageContent | null;
  approvedRoutes: readonly string[];
  siteUrl?: string;
  siteLive?: boolean;
};

const blockedRobots = { index: false, follow: false } as const;

function getConfiguredOrigin(rawUrl: string | undefined, siteLive: boolean): URL | null {
  if (!rawUrl?.trim()) {
    if (siteLive) throw new Error("NEXT_PUBLIC_SITE_URL is required when SITE_LIVE=true");
    return null;
  }

  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an absolute http(s) origin");
  }

  if (
    !["https:", "http:"].includes(url.protocol) ||
    !url.hostname ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be an http(s) origin without path or credentials");
  }

  if (
    siteLive &&
    (url.hostname === "localhost" ||
      url.hostname.endsWith(".localhost") ||
      url.hostname.endsWith(".local") ||
      url.hostname === "0.0.0.0" ||
      url.hostname === "127.0.0.1" ||
      url.hostname === "[::1]")
  ) {
    throw new Error("SITE_LIVE=true requires a public NEXT_PUBLIC_SITE_URL origin");
  }

  return url;
}

function approvedPage(context: PageSeoContext): context is PageSeoContext & { page: PageContent } {
  return (
    context.page !== null &&
    context.approvedRoutes.includes(context.path) &&
    context.path.startsWith("/") &&
    !context.path.startsWith("//") &&
    !/[?#]/.test(context.path)
  );
}

function rejectSourceOrigin(origin: URL, page: PageContent): void {
  if (page.source?.url && new URL(page.source.url).origin === origin.origin) {
    throw new Error("NEXT_PUBLIC_SITE_URL must point to the deployment, not the reference website");
  }
}

/** Safe even when the root layout is accidentally configured to allow indexing. */
export function buildPageMetadata(context: PageSeoContext): Metadata {
  if (!approvedPage(context)) return { robots: blockedRobots };

  const live = context.siteLive === true;
  const origin = getConfiguredOrigin(context.siteUrl, live);
  const indexable = live && context.page.status === "ready";
  if (indexable && origin) rejectSourceOrigin(origin, context.page);
  const canonical = indexable && origin ? new URL(context.path, origin).href : undefined;

  return {
    title: context.page.title,
    description: context.page.description,
    robots: indexable ? { index: true, follow: true } : blockedRobots,
    ...(canonical ? { alternates: { canonical } } : {}),
  };
}

type StructuredPage = {
  "@context": "https://schema.org";
  "@type": "WebPage" | "CollectionPage" | "Article";
  "@id": string;
  url: string;
  name?: string;
  headline?: string;
  description: string;
  inLanguage: "vi";
  mainEntityOfPage?: string;
};

/** No synthesized prices, ratings, authors, publication dates, or publisher claims. */
export function buildPageJsonLd(context: PageSeoContext): StructuredPage | null {
  if (!approvedPage(context) || context.siteLive !== true || context.page.status !== "ready") {
    return null;
  }

  const origin = getConfiguredOrigin(context.siteUrl, true);
  if (!origin) return null;
  rejectSourceOrigin(origin, context.page);
  const url = new URL(context.path, origin).href;
  const isArticle = context.page.kind === "news-article" && Boolean(context.page.article?.blocks.length);

  if (isArticle) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      url,
      headline: context.page.heading,
      description: context.page.description,
      inLanguage: "vi",
      mainEntityOfPage: url,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": context.page.kind === "news-list" ? "CollectionPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: context.page.heading,
    description: context.page.description,
    inLanguage: "vi",
  };
}

/** Use in a native application/ld+json script in a Server Component. */
export function serializeJsonLd(data: StructuredPage): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
