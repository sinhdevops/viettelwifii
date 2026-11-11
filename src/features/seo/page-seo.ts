import type { Metadata } from "next";
import type { PageContent } from "@/lib/content-schema";
import { approvedRoutes as productRoutes } from "@/lib/approved-routes";
import { siteConfig } from "@/lib/site-config";
import { siteRoutes } from "@/lib/site-routes";

/**
 * The registry-backed SEO allowlist includes the original product routes plus
 * Lead-owned support routes. It never admits arbitrary caller-provided paths.
 */
export const seoApprovedRoutes: readonly string[] = Object.freeze([
  ...new Set([...productRoutes, ...siteRoutes]),
]);
const seoApprovedRouteSet = new Set(seoApprovedRoutes);

const blockedRobots = { index: false, follow: false } as const;

/**
 * Publication is no longer gated by environment flags: every approved route is
 * served in every environment. Content-level readiness still
 * matters — a `draft` page renders but stays `noindex, nofollow` and stays out
 * of the sitemap. Keep the function so every caller keeps one shared answer.
 */
export function isPublicationEnabled(): boolean {
  return true;
}

/** Minimal SEO fields accepted from PageContent or the Lead-owned site-route registry. */
export type SeoPage = Pick<PageContent, "title" | "description" | "status"> &
  Partial<Pick<PageContent, "kind" | "heading" | "article" | "source">>;

export type PageSeoContext = {
  path: string;
  page: SeoPage | null;
  /** Optional caller-owned allowlist can narrow, but never expand, seoApprovedRoutes. */
  approvedRoutes?: readonly string[];
  /** Optional origin supplied by the server route; must match NEXT_PUBLIC_SITE_URL. */
  siteUrl?: string;
  /** @deprecated Ignored; indexing follows the page's readiness status. */
  siteLive?: boolean;
};

function isSafeLocalPath(path: string): boolean {
  return (
    path.startsWith("/") &&
    !path.startsWith("//") &&
    !path.includes("\\") &&
    !/[?#]/.test(path)
  );
}

/** Exact, case-sensitive membership check for the product + site-route registries. */
export function isSeoRouteAllowed(path: string): boolean {
  return isSafeLocalPath(path) && seoApprovedRouteSet.has(path);
}

function approvedPage(
  context: PageSeoContext,
): context is PageSeoContext & { page: SeoPage } {
  return (
    context.page !== null &&
    isSeoRouteAllowed(context.path) &&
    (context.approvedRoutes === undefined ||
      context.approvedRoutes.includes(context.path))
  );
}

/** Only `ready` content may be indexed; drafts render but stay out of search. */
function indexablePage(
  context: PageSeoContext,
): context is PageSeoContext & { page: SeoPage } {
  return approvedPage(context) && context.page.status === "ready";
}

function validatePublicationOrigin(rawUrl: string | undefined): URL {
  if (!rawUrl?.trim()) {
    throw new Error(
      "NEXT_PUBLIC_SITE_URL is required when publication is enabled",
    );
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
    throw new Error(
      "NEXT_PUBLIC_SITE_URL must be an http(s) origin without path or credentials",
    );
  }

  // Publication is ungated, so a local http://localhost origin must also be
  // accepted; otherwise every page would throw during local development.
  if (url.origin !== siteConfig.origin) {
    throw new Error(
      "Publication origin must match the configured NEXT_PUBLIC_SITE_URL origin",
    );
  }

  return url;
}

/**
 * Returns the validated configured origin for canonical, Open Graph, robots,
 * and sitemap URLs. Publication does not depend on legacy environment flags.
 */
export function getPublicationOrigin(siteUrl?: string): URL | null {
  if (!isPublicationEnabled()) return null;
  return validatePublicationOrigin(siteUrl ?? process.env.NEXT_PUBLIC_SITE_URL);
}

type SocialMetadata = {
  openGraph: NonNullable<Metadata["openGraph"]>;
  twitter: NonNullable<Metadata["twitter"]>;
};

function socialMetadata(title: string, description: string): SocialMetadata {
  const openGraph: NonNullable<Metadata["openGraph"]> = {
    type: "website",
    title,
    description,
  };
  const twitter: NonNullable<Metadata["twitter"]> = {
    card: "summary",
    title,
    description,
  };

  return { openGraph, twitter };
}

/** Safe even if a caller/root layout is accidentally configured to allow indexing. */
export function buildPageMetadata(context: PageSeoContext): Metadata {
  if (!approvedPage(context)) return { robots: blockedRobots };

  const { page } = context;
  const social = socialMetadata(page.title, page.description);
  const blocked: Metadata = {
    title: page.title,
    description: page.description,
    robots: blockedRobots,
    ...social,
  };

  // Draft pages render so links keep working, but they must never be indexed.
  if (!indexablePage(context)) return blocked;

  if (!isPublicationEnabled()) return blocked;

  const origin = getPublicationOrigin(context.siteUrl);
  if (!origin) return blocked;

  const canonical = new URL(context.path, origin).href;
  return {
    ...blocked,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: { ...social.openGraph, url: canonical },
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
  author?: { "@type": "Person"; name: string };
  datePublished?: string;
};

function isVerifiedIsoDate(value: string | undefined): value is string {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = Date.parse(`${value}T00:00:00.000Z`);
  return (
    Number.isFinite(parsed) &&
    new Date(parsed).toISOString().slice(0, 10) === value
  );
}

function getVerifiedArticleDetails(
  page: SeoPage,
): { author: string; datePublished: string } | null {
  const author = page.article?.author?.trim();
  const datePublished = page.article?.publishedLabel?.trim();
  const verifiedFields = page.source?.verifiedFields ?? [];

  if (
    !author ||
    !verifiedFields.includes("article.author") ||
    !isVerifiedIsoDate(datePublished) ||
    !verifiedFields.includes("article.publishedLabel")
  ) {
    return null;
  }

  return { author, datePublished };
}

/**
 * Emits JSON-LD only for an approved, ready page. Articles without verified
 * author + ISO publication date remain WebPage.
 */
export function buildPageJsonLd(
  context: PageSeoContext,
): StructuredPage | null {
  if (!indexablePage(context) || !isPublicationEnabled()) {
    return null;
  }

  const origin = getPublicationOrigin(context.siteUrl);
  if (!origin) return null;

  const page = context.page;
  const url = new URL(context.path, origin).href;
  const name = page.heading ?? page.title;

  if (page.kind === "news-article") {
    const verifiedArticle = getVerifiedArticleDetails(page);
    if (verifiedArticle) {
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline: name,
        description: page.description,
        inLanguage: "vi",
        mainEntityOfPage: url,
        author: { "@type": "Person", name: verifiedArticle.author },
        datePublished: verifiedArticle.datePublished,
      };
    }
  }

  const isCollection = page.kind === "news-list" || page.kind === "collection";
  return {
    "@context": "https://schema.org",
    "@type": isCollection ? "CollectionPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description: page.description,
    inLanguage: "vi",
  };
}

/** Use in a native application/ld+json script in a Server Component. */
export function serializeJsonLd(data: StructuredPage): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
