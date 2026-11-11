import { afterEach, describe, expect, it, vi } from "vitest";
import type { PageContent } from "@/lib/content-schema";
import { siteConfig } from "../../lib/site-config";
import {
  buildPageJsonLd,
  buildPageMetadata,
  isPublicationEnabled,
  serializeJsonLd,
} from "./page-seo";

const path = "/goi-cuoc-viettel/5G20";

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

function expectUnindexed(context: Parameters<typeof buildPageMetadata>[0]) {
  const metadata = buildPageMetadata(context);
  expect(metadata.robots).toEqual({ index: false, follow: false });
  expect(metadata.alternates).toBeUndefined();
  expect(buildPageJsonLd(context)).toBeNull();
}

afterEach(() => vi.unstubAllEnvs());

describe("page SEO indexing policy", () => {
  it("serves and indexes every approved route without environment flags", () => {
    expect(isPublicationEnabled()).toBe(true);
    expect(isPublicationEnabled()).toBe(true);
  });

  it("keeps draft content out of the index even though it still renders", () => {
    expectUnindexed({ ...base, page: draft });
  });

  it("protects unapproved, absent and unknown pages", () => {
    expectUnindexed({ ...base, approvedRoutes: [], page: ready });
    expectUnindexed({ ...base, page: null });
    for (const unknownPath of [
      "/not-approved",
      "/internet/netvt01",
      "//external.invalid",
    ]) {
      expectUnindexed({ ...base, path: unknownPath, page: ready });
    }
  });

  it("canonicalises ready pages on the configured deployment origin", () => {
    const metadata = buildPageMetadata({ ...base, page: ready });
    expect(metadata.alternates).toEqual({ canonical: siteConfig.url(path) });
    expect(metadata.robots).toEqual({ index: true, follow: true });
    expect(metadata.openGraph?.url).toBe(siteConfig.url(path));
    expect(buildPageJsonLd({ ...base, page: ready })?.url).toBe(
      siteConfig.url(path),
    );
  });

  it("rejects a stale context origin and a mismatched deployment origin", () => {
    for (const siteUrl of [
      "http://localhost:4191",
      "https://mismatch.invalid",
    ]) {
      expect(() =>
        buildPageMetadata({ ...base, page: ready, siteUrl }),
      ).toThrow(/configured/);
      expect(() => buildPageJsonLd({ ...base, page: ready, siteUrl })).toThrow(
        /configured/,
      );
    }
  });

  it("blocks canonical output when the configured origin is missing", () => {
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

  it("follows a custom deployment origin from env", () => {
    vi.stubEnv(
      "NEXT_PUBLIC_SITE_URL",
      "https://custom-deployment.example:8443/",
    );
    const context = { ...base, page: ready };
    expect(buildPageMetadata(context).alternates).toEqual({
      canonical: siteConfig.url(path),
    });
    expect(buildPageJsonLd(context)?.url).toBe(siteConfig.url(path));
  });

  it("uses conservative structured data and requires verified author/date for Article", () => {
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

  it("keeps a draft article out of structured data", () => {
    const draftArticle: PageContent = {
      ...ready,
      status: "draft",
      kind: "news-article",
      article: { blocks: [{ type: "paragraph", text: "Thông tin nguồn" }] },
    };
    expect(buildPageJsonLd({ ...base, page: draftArticle })).toBeNull();
  });
});
