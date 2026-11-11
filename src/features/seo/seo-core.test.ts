import { afterEach, describe, expect, it, vi } from "vitest";
import {
  buildBreadcrumbJsonLd,
  buildPageJsonLdGraph,
  buildPageMetadata,
  buildSiteJsonLd,
  getPublicationOrigin,
  isLoopbackOrigin,
} from "./page-seo";
import {
  normalizeSeoDescription,
  normalizeSeoTitle,
  toIsoDate,
} from "./metadata-normalize";
import type { PageContent } from "@/lib/content-schema";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";

vi.mock("server-only", () => ({}));

const path = "/goi-cuoc-viettel/5G20";
const page = {
  status: "ready",
  kind: "package",
  title: "Gói 5G20 Viettel",
  heading: "Gói cước Viettel 5G20",
  description: "Thông tin gói 5G20",
  sections: [],
  product: {
    id: path,
    code: "5G20",
    subscription: "general",
    price: {
      amountVND: 120000,
      sourceLabel: "120.000đ",
      cycle: { quantity: 12, unit: "month", label: "12 tháng" },
    },
  },
  source: {
    url: "https://example.com",
    capturedAt: "2026-10-27",
    verifiedFields: ["price and cycle"],
    unverifiedFields: [],
    notes: [],
    evidencePaths: [],
  },
} satisfies PageContent;
afterEach(() => vi.unstubAllEnvs());

describe("SEO core regressions", () => {
  it("never substitutes capture or publication dates for sitemap modification dates", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://seo-test.example");
    for (const entry of sitemap())
      expect(entry).not.toHaveProperty("lastModified");
  });
  it("uses explicit social images and a large Twitter card", () => {
    const meta = buildPageMetadata({ path, page });
    expect(meta.openGraph).toMatchObject({ images: ["/opengraph-image"] });
    expect(meta.twitter).toMatchObject({
      images: ["/opengraph-image"],
      card: "summary_large_image",
    });
  });
  it("emits product identity but never turns an old price capture into an offer", () => {
    const graph = buildPageJsonLdGraph({ path, page });
    expect(graph.find((node) => node["@type"] === "Product")).toMatchObject({
      sku: "5G20",
    });
    expect(JSON.stringify(graph)).not.toMatch(
      /offers|InStock|seller|priceValidUntil/,
    );
    const breadcrumb = buildBreadcrumbJsonLd({ path, page });
    expect(breadcrumb?.itemListElement).toContainEqual({
      "@type": "ListItem",
      position: 2,
      name: "Gói cước Viettel",
      item: new URL("/goi-cuoc-viettel", process.env.NEXT_PUBLIC_SITE_URL).href,
    });
    const narrowed = buildBreadcrumbJsonLd({
      path,
      page,
      approvedRoutes: [path],
    });
    expect(narrowed?.itemListElement).toEqual([
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: new URL("/", process.env.NEXT_PUBLIC_SITE_URL).href,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.heading,
        item: new URL(path, process.env.NEXT_PUBLIC_SITE_URL).href,
      },
    ]);
    expect(
      buildPageJsonLdGraph({ path, page: { ...page, status: "draft" } }),
    ).toEqual([]);
  });
  it("does not hide invalid configured origins in new graph APIs", () => {
    expect(() => buildSiteJsonLd("not an origin")).toThrow();
    expect(() =>
      buildPageJsonLdGraph({ path, page, siteUrl: "https://wrong.example" }),
    ).toThrow();
  });
  it("fails closed in production for all 127/8 and insecure public origins", () => {
    vi.stubEnv("NODE_ENV", "production");
    for (const origin of [
      "https://127.42.0.9",
      "https://127.255.255.254",
      "http://public.example",
      "https://localhost",
    ]) {
      vi.stubEnv("NEXT_PUBLIC_SITE_URL", origin);
      expect(getPublicationOrigin()).toBeNull();
      expect(buildPageMetadata({ path, page }).robots).toEqual({
        index: false,
        follow: false,
      });
      expect(buildPageJsonLdGraph({ path, page })).toEqual([]);
      expect(buildSiteJsonLd()).toEqual([]);
      expect(sitemap()).toEqual([]);
      expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });
    }
    expect(isLoopbackOrigin("https://127.1")).toBe(true);
    expect(isLoopbackOrigin("https://128.0.0.1")).toBe(false);
  });
  it("uses factual prose without padding or losing cycle quantity and identity", () => {
    const description = normalizeSeoDescription(page);
    expect(description).toContain("Gói 5G20 Viettel");
    expect(description).not.toContain("Xem thông tin chi tiết về");
    expect(description).toContain("12 tháng");
    expect(normalizeSeoTitle(page).length).toBeLessThanOrEqual(60);
    const other = {
      ...page,
      title: "Gói ABC",
      heading: "Gói ABC",
      description: "Thông tin gói cước",
      product: {
        ...page.product,
        id: "/goi-cuoc-viettel/ABC",
        code: "ABC",
      },
    };
    expect(normalizeSeoDescription(other)).toContain("Gói ABC");
    expect(normalizeSeoDescription(other)).toContain("12 tháng");
    expect(normalizeSeoDescription(other)).not.toBe(description);
    const staleProduct = { ...other, product: page.product };
    const staleDescription = normalizeSeoDescription(staleProduct);
    expect(staleDescription).not.toContain("5G20");
    expect(staleDescription).not.toContain("120.000đ");
    expect(staleDescription).not.toContain("12 tháng");
    expect(
      normalizeSeoDescription({
        ...other,
        product: { ...other.product, code: "ABCD" },
      }),
    ).not.toContain("ABCD");
    expect(toIsoDate("2026-02-31")).toBeNull();
  });
});
