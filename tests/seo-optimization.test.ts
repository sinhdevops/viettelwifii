import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { approvedRoutes } from "../src/lib/approved-routes";
import { pageContents } from "../src/lib/page-content-registry";
import { siteConfig } from "../src/lib/site-config";
import {
  buildPageJsonLd,
  buildPageMetadata,
  isPublicationEnabled,
  isSeoRouteAllowed,
  seoApprovedRoutes,
} from "../src/features/seo/page-seo";
import robots from "../src/app/robots";
import sitemap from "../src/app/sitemap";
import {
  indexableSiteRoutes,
  isSiteRouteRenderable,
  siteRouteDefinitions,
  siteRoutes,
} from "../src/lib/site-routes";
import { metadataForSiteRoute } from "../src/lib/site-page-metadata";
import PackageHubPage from "../src/app/goi-cuoc-viettel/page";
import {
  getIndexablePages,
  getPage,
  getRenderablePage,
  isIndexablePage,
} from "../src/lib/server/page-repository";

const siteOrigin = "https://fixture.example";
const supportRoutePaths = [
  "/goi-cuoc-viettel",
  "/gioi-thieu",
  "/lien-he",
  "/chinh-sach-bao-mat",
  "/dieu-khoan",
] as const;
const draftOnlyRoutes = [
  "/tin-tuc/dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025",
  "/tin-tuc/goi-cuoc-viettel-thang-06-2025",
  "/tin-tuc/goi-cuoc-viettel-thang-4-2025",
  "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025",
  "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025",
  "/tin-tuc/goi-cuoc-5g-viettel-tet5g",
  "/tin-tuc/khuyen-mai-nap-the-viettel-20-7",
  "/tin-tuc/khuyen-mai-nap-the-15-6",
  "/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360",
  "/goi-cuoc-viettel/FB5K",
] as const;

function stubOrigin(origin = siteOrigin) {
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", origin);
  vi.stubEnv("PRIVACY_POLICY_VERSION", "v1");
}

afterEach(() => vi.unstubAllEnvs());

describe("QA-SEO-READINESS-01: content-driven indexing policy", () => {
  it("publishes without environment flags but still requires a valid origin", () => {
    expect(isPublicationEnabled()).toBe(true);
    stubOrigin();
    expect(
      buildPageMetadata({ path: "/", page: pageContents["/"] }).robots,
    ).toEqual({ index: true, follow: true });
  });

  it("keeps the package hub separate and lists approved package pages", () => {
    expect(siteRoutes).toContain("/goi-cuoc-viettel");
    expect(approvedRoutes).not.toContain("/goi-cuoc-viettel");

    type HubElement = {
      props: {
        sections: Array<{
          content: {
            props: { packages: Array<{ path: string; title: string }> };
          };
        }>;
      };
    };
    const page = PackageHubPage() as unknown as HubElement;
    const listedPackages = page.props.sections[0]!.content.props.packages;
    const expectedPackages = approvedRoutes.flatMap((path) => {
      if (!path.startsWith("/goi-cuoc-viettel/")) return [];
      const product = getPage(path);
      if (!product || product.kind !== "package") return [];
      return [{ path, title: product.heading }];
    });

    expect(listedPackages.length).toBeGreaterThan(0);
    expect(listedPackages).toEqual(expectedPackages);
    for (const entry of listedPackages) {
      expect(approvedRoutes, `${entry.path}: manifest membership`).toContain(
        entry.path,
      );
      expect(getPage(entry.path)?.kind, `${entry.path}: package`).toBe(
        "package",
      );
    }
  });

  it("renders every registered support route in every environment", () => {
    for (const path of siteRoutes) {
      vi.stubEnv("NODE_ENV", "production");
      expect(isSiteRouteRenderable(path), `${path}: production`).toBe(true);
      vi.stubEnv("NODE_ENV", "development");
      expect(isSiteRouteRenderable(path), `${path}: development`).toBe(true);
    }
    expect(isSiteRouteRenderable("/not-a-site-route")).toBe(false);
  });

  it("keeps the original 175 product routes separate from five support routes", () => {
    expect(approvedRoutes).toHaveLength(175);
    expect(Object.keys(pageContents).sort()).toEqual(
      [...approvedRoutes].sort(),
    );
    expect(siteRoutes).toEqual(supportRoutePaths);
    expect(siteRouteDefinitions).toHaveLength(5);
    expect(seoApprovedRoutes).toHaveLength(180);
    expect(seoApprovedRoutes).toEqual([
      ...new Set([...approvedRoutes, ...siteRoutes]),
    ]);
    for (const path of siteRoutes) {
      expect(isSeoRouteAllowed(path)).toBe(true);
    }
  });

  it("publishes the privacy policy support route", () => {
    const privacy = siteRouteDefinitions.find(
      ({ path }) => path === "/chinh-sach-bao-mat",
    );
    expect(privacy?.status).toBe("ready");
    expect(indexableSiteRoutes).toContain("/chinh-sach-bao-mat");
    stubOrigin();
    expect(metadataForSiteRoute("/chinh-sach-bao-mat").robots).toEqual({
      index: true,
      follow: true,
    });
  });

  it("keeps draft support routes noindex and omits their canonical", () => {
    stubOrigin();
    for (const path of siteRoutes) {
      const metadata = metadataForSiteRoute(path);
      const status = siteRouteDefinitions.find(
        (entry) => entry.path === path,
      )?.status;
      if (status === "ready") {
        expect(metadata.robots, `${path}: ready`).toEqual({
          index: true,
          follow: true,
        });
        expect(metadata.alternates?.canonical, `${path}: canonical`).toBe(
          siteConfig.url(path),
        );
      } else {
        expect(metadata.robots, `${path}: draft`).toEqual({
          index: false,
          follow: false,
        });
        expect(metadata.alternates, `${path}: no canonical`).toBeUndefined();
      }
    }
  });

  it("indexes all formerly draft products with canonical and JSON-LD", () => {
    stubOrigin();
    for (const path of draftOnlyRoutes) {
      expect(getPage(path)?.status, `${path}: ready status`).toBe("ready");
      expect(getRenderablePage(path), `${path}: still renders`).not.toBeNull();
      expect(isIndexablePage(path), `${path}: indexable`).toBe(true);

      const context = {
        path,
        page: pageContents[path],
        approvedRoutes: seoApprovedRoutes,
      };
      const metadata = buildPageMetadata(context);
      expect(metadata.robots, `${path}: index`).toEqual({
        index: true,
        follow: true,
      });
      expect(metadata.alternates?.canonical).toBe(siteConfig.url(path));
      expect(metadata.openGraph?.url).toBe(siteConfig.url(path));
      expect(buildPageJsonLd(context)?.url).toBe(siteConfig.url(path));
    }
  });

  it("publishes only ready allowlisted pages with absolute self-canonicals", () => {
    stubOrigin();
    for (const path of approvedRoutes) {
      const page = pageContents[path];
      const context = { path, page, approvedRoutes: seoApprovedRoutes };
      const metadata = buildPageMetadata(context);

      if (page.status === "ready") {
        const canonical = siteConfig.url(path);
        expect(metadata.robots, `${path}: ready page`).toEqual({
          index: true,
          follow: true,
        });
        expect(metadata.alternates?.canonical, `${path}: canonical`).toBe(
          canonical,
        );
        expect(metadata.openGraph?.url, `${path}: Open Graph URL`).toBe(
          canonical,
        );
        expect(buildPageJsonLd(context)?.url, `${path}: JSON-LD URL`).toBe(
          canonical,
        );
      } else {
        expect(metadata.robots, `${path}: draft page`).toEqual({
          index: false,
          follow: false,
        });
        expect(
          metadata.alternates,
          `${path}: no draft canonical`,
        ).toBeUndefined();
        expect(
          metadata.openGraph?.url,
          `${path}: no draft Open Graph URL`,
        ).toBeUndefined();
        expect(
          buildPageJsonLd(context),
          `${path}: no draft JSON-LD`,
        ).toBeNull();
      }
    }
  });

  it("limits sitemap and robots output to approved, ready routes", () => {
    stubOrigin();
    const readyProducts = approvedRoutes.filter(
      (path) => pageContents[path].status === "ready",
    );
    const expectedPaths = [
      ...new Set([
        ...readyProducts,
        ...indexableSiteRoutes.filter(isSeoRouteAllowed),
      ]),
    ];
    const entries = sitemap();

    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/", disallow: "/api/" },
      sitemap: `${siteOrigin}/sitemap.xml`,
    });
    expect(entries.map(({ url }) => url)).toEqual(
      expectedPaths.map((path) => siteConfig.url(path)),
    );
    expect(new Set(entries.map(({ url }) => url)).size).toBe(entries.length);
    expect(entries.every(({ url }) => url.startsWith(`${siteOrigin}/`))).toBe(
      true,
    );
    for (const path of approvedRoutes.filter(
      (candidate) => pageContents[candidate].status === "draft",
    )) {
      expect(entries.some(({ url }) => url === siteConfig.url(path))).toBe(
        false,
      );
    }
    for (const path of [
      "/chinh-sach-bao-mat",
      "/goi-cuoc-viettel",
      "/gioi-thieu",
      "/lien-he",
      "/dieu-khoan",
    ]) {
      const status = siteRouteDefinitions.find(
        (entry) => entry.path === path,
      )?.status;
      expect(
        entries.some(({ url }) => url === siteConfig.url(path)),
        `${path}: sitemap follows status`,
      ).toBe(status === "ready");
    }
  });

  it("fails closed for an invalid origin and caller-supplied non-manifest paths", () => {
    stubOrigin("https://fixture.example/invalid-path");
    expect(robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
    expect(sitemap()).toEqual([]);

    stubOrigin();
    const knownPage = pageContents["/"];
    for (const path of [
      "/not-approved",
      "/internet/netvt01",
      "//external.invalid",
    ]) {
      expect(isSeoRouteAllowed(path)).toBe(false);
      const context = { path, page: knownPage, approvedRoutes: [path] };
      expect(buildPageMetadata(context).robots).toEqual({
        index: false,
        follow: false,
      });
      expect(buildPageJsonLd(context)).toBeNull();
    }
  });

  it("lists exactly the ready routes as indexable", () => {
    const indexablePaths = getIndexablePages().map(({ path }) => path);
    expect(indexablePaths).toHaveLength(175);
    expect(
      Object.values(pageContents).every((page) => page.status === "ready"),
    ).toBe(true);
    expect(
      siteRouteDefinitions.every((route) => route.status === "ready"),
    ).toBe(true);
    expect(indexableSiteRoutes).toHaveLength(5);
    expect(indexablePaths).toEqual(
      approvedRoutes.filter((path) => pageContents[path].status === "ready"),
    );
    for (const path of draftOnlyRoutes) {
      expect(indexablePaths).toContain(path);
    }
  });
});
