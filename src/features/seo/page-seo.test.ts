import { describe, expect, it } from "vitest";
import type { PageContent } from "@/lib/content-schema";
import { buildPageJsonLd, buildPageMetadata, serializeJsonLd } from "./page-seo";

const path = "/goi-cuoc-viettel/5G20";
const draft: PageContent = {
  status: "draft",
  kind: "package",
  heading: "Gói cước Viettel 5G20",
  title: "Gói 5G20 Viettel",
  description: "Thông tin gói 5G20",
  sections: [],
  source: {
    url: "https://www.viettelup.vn/goi-cuoc-viettel/5G20",
    capturedAt: "2026-10-27",
    evidencePaths: [],
    verifiedFields: [],
    unverifiedFields: [],
    notes: [],
  },
};
const base = { path, approvedRoutes: [path], siteUrl: "https://deploy.example" };

describe("page SEO publish guards", () => {
  it("protects draft and preview even with siteLive explicitly true", () => {
    for (const siteLive of [false, true]) {
      const context = { ...base, page: draft, siteLive };
      expect(buildPageMetadata(context)).toEqual({
        title: draft.title,
        description: draft.description,
        robots: { index: false, follow: false },
      });
      expect(buildPageJsonLd(context)).toBeNull();
    }
  });

  it("protects unapproved, absent and unknown pages", () => {
    const ready = { ...draft, status: "ready" } as PageContent;
    const metadata = buildPageMetadata({ ...base, approvedRoutes: [], page: ready, siteLive: true });
    expect(metadata.robots).toEqual({ index: false, follow: false });
    expect(metadata.alternates).toBeUndefined();
    expect(buildPageJsonLd({ ...base, approvedRoutes: [], page: ready, siteLive: true })).toBeNull();
    expect(buildPageMetadata({ ...base, page: null, siteLive: true }).robots).toEqual({ index: false, follow: false });
  });

  it("requires a real deployment origin for ready pages and preserves case-sensitive paths", () => {
    const ready = { ...draft, status: "ready" } as PageContent;
    const metadata = buildPageMetadata({ ...base, page: ready, siteLive: true });
    expect(metadata.alternates).toEqual({ canonical: "https://deploy.example/goi-cuoc-viettel/5G20" });
    expect(metadata.robots).toEqual({ index: true, follow: true });
    for (const siteUrl of [undefined, "http://localhost:4191", "https://www.viettelup.vn"]) {
      expect(() => buildPageMetadata({ ...base, page: ready, siteLive: true, siteUrl })).toThrow();
    }
  });

  it("creates conservative type-specific JSON-LD without made-up price, rating, author or date", () => {
    const articlePage: PageContent = {
      ...draft,
      status: "ready",
      kind: "news-article",
      article: { blocks: [{ type: "paragraph", text: "Thông tin nguồn" }] },
      heading: "Chủ đề <SEO>",
    };
    const article = buildPageJsonLd({ ...base, page: articlePage, siteLive: true });
    expect(article?.["@type"]).toBe("Article");
    expect(article).toMatchObject({ headline: "Chủ đề <SEO>", mainEntityOfPage: `https://deploy.example${path}` });
    const json = serializeJsonLd(article!);
    expect(json).toContain("\\u003cSEO>");
    expect(json).not.toMatch(/datePublished|author|offers|aggregateRating|price/);

    const list = buildPageJsonLd({ ...base, siteLive: true, page: { ...articlePage, kind: "news-list" } });
    expect(list?.["@type"]).toBe("CollectionPage");
    expect(buildPageJsonLd({ ...base, siteLive: true, page: { ...articlePage, kind: "internet" } })?.["@type"]).toBe("WebPage");
  });
});
