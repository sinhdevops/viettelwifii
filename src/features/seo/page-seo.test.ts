import { afterEach, describe, expect, it, vi } from "vitest";
import type { PageContent } from "@/lib/content-schema";
import { siteConfig } from "../../lib/site-config";
import {
  buildPageJsonLd,
  buildPageMetadata,
  serializeJsonLd,
} from "./page-seo";

const path = "/goi-cuoc-viettel/5G20";
const publicationFlags = [
  "SITE_LIVE",
  "CONTENT_RIGHTS_CLEARED",
  "SITE_IDENTITY_VERIFIED",
  "PRODUCT_FACTS_VERIFIED",
  "PRIVACY_POLICY_APPROVED",
] as const;

const draft = {
  status: "draft",
  kind: "package",
  heading: "Gói cước Viettel 5G20",
  title: "Gói 5G20 Viettel",
  description: "Thông tin gói 5G20",
  sections: [],
  source: {
    url: siteConfig.url(path),
    capturedAt: "2026-10-27",
    evidencePaths: [],
    verifiedFields: [],
    unverifiedFields: [],
    notes: [],
  },
} satisfies PageContent;
const ready = { ...draft, status: "ready" } satisfies PageContent;
const base = {
  path,
  approvedRoutes: [path],
  get siteUrl() {
    return siteConfig.origin;
  },
};

function enablePublication() {
  for (const flag of publicationFlags) vi.stubEnv(flag, "true");
  vi.stubEnv("PRIVACY_POLICY_VERSION", "v1");
}

function expectClosed(context: Parameters<typeof buildPageMetadata>[0]) {
  const metadata = buildPageMetadata(context);
  expect(metadata.robots).toEqual({ index: false, follow: false });
  expect(metadata.alternates).toBeUndefined();
  expect(buildPageJsonLd(context)).toBeNull();
}

afterEach(() => vi.unstubAllEnvs());

describe("page SEO publish guards", () => {
  it("requires all five publication flags to be the exact string true", () => {
    for (const failedFlag of publicationFlags) {
      enablePublication();
      vi.stubEnv(failedFlag, "TRUE");
      expectClosed({ ...base, page: ready });
    }

    vi.unstubAllEnvs();
    enablePublication();
    vi.stubEnv("SITE_LIVE", "false");
    expectClosed({ ...base, page: ready });
  });

  it("requires a syntactically valid approved privacy-policy version", () => {
    enablePublication();
    for (const version of ["", "unapproved", "bad version", "x".repeat(65)]) {
      vi.stubEnv("PRIVACY_POLICY_VERSION", version);
      expectClosed({ ...base, page: ready });
    }
  });

  it("protects draft pages even after every global flag is open", () => {
    enablePublication();
    const context = { ...base, page: draft };
    const metadata = buildPageMetadata(context);
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.alternates).toBeUndefined();
    expect(buildPageJsonLd(context)).toBeNull();
  });

  it("protects unapproved, absent and unknown pages", () => {
    enablePublication();
    expectClosed({ ...base, approvedRoutes: [], page: ready });
    expectClosed({ ...base, page: null });
  });

  it("requires a real deployment origin for ready pages and preserves case-sensitive paths", () => {
    enablePublication();
    const metadata = buildPageMetadata({ ...base, page: ready });
    expect(metadata.alternates).toEqual({ canonical: siteConfig.url(path) });
    expect(metadata.robots).toEqual({ index: true, follow: true });
    for (const siteUrl of [
      "http://localhost:4191",
      siteConfig.origin.replace("https:", "http:"),
      "https://mismatch.invalid",
    ]) {
      expect(() =>
        buildPageMetadata({ ...base, page: ready, siteUrl }),
      ).toThrow();
      expect(() =>
        buildPageJsonLd({ ...base, page: ready, siteUrl }),
      ).toThrow();
    }
  });

  it("blocks canonical output when the configured origin is missing", () => {
    enablePublication();
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined);
    const context = {
      path,
      approvedRoutes: [path],
      page: ready,
      siteUrl: undefined,
    };
    expect(() => buildPageMetadata(context)).toThrow(/required/);
    expect(() => buildPageJsonLd(context)).toThrow(/required/);
  });

  it("follows a custom deployment origin from env and rejects a stale context origin", () => {
    enablePublication();
    const previousOrigin = siteConfig.origin;
    vi.stubEnv(
      "NEXT_PUBLIC_SITE_URL",
      "https://custom-deployment.example:8443/",
    );
    const context = { ...base, page: ready };
    expect(buildPageMetadata(context).alternates).toEqual({
      canonical: siteConfig.url(path),
    });
    expect(buildPageJsonLd(context)?.url).toBe(siteConfig.url(path));
    expect(() =>
      buildPageMetadata({ ...context, siteUrl: previousOrigin }),
    ).toThrow(/configured/);
    expect(() =>
      buildPageJsonLd({ ...context, siteUrl: previousOrigin }),
    ).toThrow(/configured/);
  });

  it.each([
    "http://public.example",
    "https://localhost",
    "https://preview.localhost",
    "https://preview.local",
    "https://127.0.0.1",
    "https://0.0.0.0",
    "https://[::1]",
  ])("rejects unsafe live origin even when env matches: %s", (siteUrl) => {
    enablePublication();
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", siteUrl);
    expect(() => buildPageMetadata({ ...base, page: ready })).toThrow();
    expect(() => buildPageJsonLd({ ...base, page: ready })).toThrow();
  });

  it("uses conservative structured data and requires verified author/date for Article", () => {
    enablePublication();
    const articlePage = {
      ...ready,
      kind: "news-article",
      article: { blocks: [{ type: "paragraph", text: "Thông tin nguồn" }] },
      heading: "Chủ đề <SEO>",
    } satisfies PageContent;
    const unverified = buildPageJsonLd({ ...base, page: articlePage });
    expect(unverified?.["@type"]).toBe("WebPage");

    const verifiedArticle: PageContent = {
      ...articlePage,
      article: {
        blocks: [{ type: "paragraph", text: "Thông tin nguồn" }],
        author: "Tác giả đã xác minh",
        publishedLabel: "2026-10-27",
      },
      source: {
        ...articlePage.source,
        verifiedFields: ["article.author", "article.publishedLabel"],
      },
    };
    const article = buildPageJsonLd({ ...base, page: verifiedArticle });
    expect(article?.["@type"]).toBe("Article");
    expect(article).toMatchObject({
      headline: "Chủ đề <SEO>",
      mainEntityOfPage: siteConfig.url(path),
      author: { name: "Tác giả đã xác minh" },
      datePublished: "2026-10-27",
    });
    const json = serializeJsonLd(article!);
    expect(json).toContain("\\u003cSEO>");
    expect(json).not.toMatch(/offers|aggregateRating|price/);

    const list = buildPageJsonLd({
      ...base,
      page: { ...articlePage, kind: "news-list" },
    });
    expect(list?.["@type"]).toBe("CollectionPage");
    expect(
      buildPageJsonLd({
        ...base,
        page: { ...articlePage, kind: "internet" },
      })?.["@type"],
    ).toBe("WebPage");
  });
});
