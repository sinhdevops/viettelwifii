import type { Metadata } from "next";
import type { PageContent } from "@/lib/content-schema";
import { approvedRoutes as productRoutes } from "@/lib/approved-routes";
import { siteConfig } from "@/lib/site-config";
import { siteRoutes } from "@/lib/site-routes";
import {
  normalizeSeoDescription,
  normalizeSeoTitle,
} from "./metadata-normalize";

/**
 * The registry-backed SEO allowlist includes the original product routes plus
 * Lead-owned support routes. It never admits arbitrary caller-provided paths.
 */
export const seoApprovedRoutes: readonly string[] = Object.freeze([
  ...new Set([...productRoutes, ...siteRoutes]),
]);
const seoApprovedRouteSet = new Set(seoApprovedRoutes);

const blockedRobots = { index: false, follow: false } as const;

const LOOPBACK_HOSTNAMES = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "[::1]",
]);

/** Loopback and *.local origins cannot ever be the public canonical of a deploy. */
export function isLoopbackOrigin(origin: string): boolean {
  try {
    const { hostname } = new URL(origin);
    return (
      LOOPBACK_HOSTNAMES.has(hostname) ||
      /^127\./.test(hostname) ||
      hostname.endsWith(".localhost") ||
      hostname.endsWith(".local")
    );
  } catch {
    return false;
  }
}

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
  Partial<
    Pick<
      PageContent,
      | "kind"
      | "heading"
      | "article"
      | "source"
      | "intro"
      | "sections"
      | "product"
    >
  >;

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

  if (url.origin !== siteConfig.origin) {
    throw new Error(
      "Publication origin must match the configured NEXT_PUBLIC_SITE_URL origin",
    );
  }

  return url;
}

/**
 * Returns the validated configured origin for canonical, Open Graph, robots,
 * and sitemap URLs, or `null` when the build must not advertise itself.
 *
 * A production build configured with a loopback/non-https origin yields `null`
 * so every caller fails closed (noindex, empty sitemap, `Disallow: /`) instead
 * of publishing `http://localhost` canonicals to search engines. Local
 * development and tests keep working with a loopback origin.
 */
export function getPublicationOrigin(siteUrl?: string): URL | null {
  if (!isPublicationEnabled()) return null;
  const origin = validatePublicationOrigin(
    siteUrl ?? process.env.NEXT_PUBLIC_SITE_URL,
  );
  const production = process.env.NODE_ENV === "production";
  if (
    production &&
    (origin.protocol !== "https:" || isLoopbackOrigin(origin.origin))
  ) {
    return null;
  }
  return origin;
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
    images: ["/opengraph-image"],
  };
  const twitter: NonNullable<Metadata["twitter"]> = {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  };

  return { openGraph, twitter };
}

/** Metadata title/description normalised to the display-length gates. */
function seoCopy(page: SeoPage): { title: string; description: string } {
  const normalisable = {
    title: page.title,
    description: page.description,
    heading: page.heading ?? page.title,
    kind: page.kind ?? "collection",
    intro: page.intro,
    sections: page.sections,
    product: page.product,
    article: page.article,
  };
  return {
    title: normalizeSeoTitle(normalisable),
    description: normalizeSeoDescription(normalisable),
  };
}

/** Safe even if a caller/root layout is accidentally configured to allow indexing. */
export function buildPageMetadata(context: PageSeoContext): Metadata {
  if (!approvedPage(context)) return { robots: blockedRobots };

  const { page } = context;
  const copy = seoCopy(page);
  const social = socialMetadata(copy.title, copy.description);
  const blocked: Metadata = {
    title: copy.title,
    description: copy.description,
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

type JsonLdNode = Record<string, unknown> & {
  "@context": "https://schema.org";
  "@type": string;
};

type StructuredPage = JsonLdNode & {
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

const SITE_NAME = "ViettelWiFii.vn";
/**
 * Site-wide identity nodes for root-layout integration; no inferred search action.
 * Nothing here is inferred beyond the configured origin and site name.
 */
export function buildSiteJsonLd(siteUrl?: string): JsonLdNode[] {
  const origin = getPublicationOrigin(siteUrl);
  if (!origin) return [];
  const root = new URL("/", origin).href;
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${root}#website`,
      url: root,
      name: SITE_NAME,
      inLanguage: "vi",
      publisher: { "@id": `${root}#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${root}#organization`,
      name: SITE_NAME,
      url: root,
    },
  ];
}

/** Breadcrumb trail derived only from the route path; labels reuse page copy. */
export function buildBreadcrumbJsonLd(
  context: PageSeoContext,
): JsonLdNode | null {
  if (!indexablePage(context) || context.path === "/") return null;
  const origin = getPublicationOrigin(context.siteUrl);
  if (!origin) return null;

  const { page } = context;
  const segments = context.path.split("/").filter(Boolean);
  const items: Record<string, unknown>[] = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Trang chủ",
      item: new URL("/", origin).href,
    },
  ];

  const parentPath = `/${segments[0]}`;
  if (
    segments.length > 1 &&
    isSeoRouteAllowed(parentPath) &&
    (context.approvedRoutes === undefined ||
      context.approvedRoutes.includes(parentPath))
  ) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name:
        parentPath === "/tin-tuc"
          ? "Tin tức"
          : parentPath === "/goi-cuoc-viettel"
            ? "Gói cước Viettel"
            : "Internet",
      item: new URL(parentPath, origin).href,
    });
  }

  const leafName = (page.heading ?? page.title).trim();
  items.push({
    "@type": "ListItem",
    position: items.length + 1,
    name: leafName,
    item: new URL(context.path, origin).href,
  });

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${new URL(context.path, origin).href}#breadcrumb`,
    itemListElement: items,
  };
}

function isVerifiedIsoDate(value: string | undefined): value is string {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = Date.parse(`${value}T00:00:00.000Z`);
  return (
    Number.isFinite(parsed) &&
    new Date(parsed).toISOString().slice(0, 10) === value
  );
}

/** Article identity requires independently verified authored fields. */
function getVerifiedArticleDetails(
  page: SeoPage,
): { author: string; datePublished: string } | null {
  const author = page.article?.author?.trim();
  const datePublished = page.article?.publishedLabel?.trim();
  const verified = page.source?.verifiedFields ?? [];
  if (
    !author ||
    !verified.includes("article.author") ||
    !isVerifiedIsoDate(datePublished) ||
    !verified.includes("article.publishedLabel")
  )
    return null;
  return { author, datePublished };
}

function buildProductNode(page: SeoPage, url: string): JsonLdNode | null {
  const product = page.product;
  if (
    !product ||
    product.id !== new URL(url).pathname ||
    (page.kind !== "package" && page.kind !== "internet")
  )
    return null;
  // Captures alone cannot establish a current offer, availability or seller.
  // No current-offer verification exists in the content contract: omit offers.
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": url + "#product",
    name: (page.heading ?? page.title).trim(),
    description: seoCopy(page).description,
    sku: product.code,
    url,
  };
}

/**
 * Approved, ready pages only; Article requires verified author and ISO date.
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
  const copy = seoCopy(page);
  const name = (page.heading ?? copy.title).trim();

  const verifiedArticle = getVerifiedArticleDetails(page);
  if (page.kind === "news-article" && verifiedArticle) {
    const article: StructuredPage = {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${url}#article`,
      url,
      headline: name,
      description: copy.description,
      inLanguage: "vi",
      mainEntityOfPage: url,
      author: { "@type": "Person", name: verifiedArticle.author },
      datePublished: verifiedArticle.datePublished,
    };
    return article;
  }

  const isCollection = page.kind === "news-list" || page.kind === "collection";
  return {
    "@context": "https://schema.org",
    "@type": isCollection ? "CollectionPage" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description: copy.description,
    inLanguage: "vi",
  };
}

/** All page-level nodes (page + breadcrumb + optional product) for one URL. */
export function buildPageJsonLdGraph(context: PageSeoContext): JsonLdNode[] {
  const nodes: JsonLdNode[] = [];
  const page = buildPageJsonLd(context);
  if (page) nodes.push(page as JsonLdNode);
  const breadcrumb = buildBreadcrumbJsonLd(context);
  if (breadcrumb) nodes.push(breadcrumb);
  if (approvedPage(context) && context.page.status === "ready") {
    const origin = getPublicationOrigin(context.siteUrl);
    if (origin) {
      const url = new URL(context.path, origin).href;
      const product = buildProductNode(context.page, url);
      if (product) nodes.push(product);
    }
  }
  return nodes;
}

/** Use in a native application/ld+json script in a Server Component. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
