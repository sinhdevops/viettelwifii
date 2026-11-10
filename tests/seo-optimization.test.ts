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
} from "../src/lib/server/page-repository";

const publicationFlags = [
  "SITE_LIVE",
  "CONTENT_RIGHTS_CLEARED",
  "SITE_IDENTITY_VERIFIED",
  "PRODUCT_FACTS_VERIFIED",
  "PRIVACY_POLICY_APPROVED",
] as const;
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

function stubPublication(enabled: boolean) {
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", siteOrigin);
  vi.stubEnv("PRIVACY_POLICY_VERSION", "v1");
  for (const flag of publicationFlags) {
    vi.stubEnv(flag, enabled ? "true" : "false");
  }
}

afterEach(() => vi.unstubAllEnvs());

describe("QA-SEO-READINESS-01: conservative publication policy", () => {
  it("requires exact string true for each of the five publication flags", () => {
    stubPublication(true);
    expect(isPublicationEnabled()).toBe(true);

    for (const flag of publicationFlags) {
      for (const invalidValue of [
        "false",
        "TRUE",
        "1",
        "yes",
        " true",
        "true ",
      ]) {
        vi.stubEnv(flag, invalidValue);
        expect(
          isPublicationEnabled(),
          `${flag}=${JSON.stringify(invalidValue)}`,
        ).toBe(false);
      }
      vi.stubEnv(flag, undefined);
      expect(isPublicationEnabled(), `${flag} unset`).toBe(false);
      vi.stubEnv(flag, "true");
    }
  });

  it("requires a syntactically valid approved privacy-policy version", () => {
    stubPublication(true);
    for (const invalidVersion of [
      undefined,
      "",
      "unapproved",
      "UNAPPROVED",
      "contains spaces",
      "#invalid",
    ]) {
      vi.stubEnv("PRIVACY_POLICY_VERSION", invalidVersion);
      expect(
        isPublicationEnabled(),
        `PRIVACY_POLICY_VERSION=${JSON.stringify(invalidVersion)}`,
      ).toBe(false);
    }
    vi.stubEnv("PRIVACY_POLICY_VERSION", "v1");
    expect(isPublicationEnabled()).toBe(true);
  });

  it("keeps the package hub separate and lists only approved ready package pages", () => {
    expect(siteRoutes).toContain("/goi-cuoc-viettel");
    expect(approvedRoutes).not.toContain("/goi-cuoc-viettel");
    expect(
      siteRouteDefinitions.find(({ path }) => path === "/goi-cuoc-viettel")?.status,
    ).toBe("draft");

    type HubElement = {
      props: {
        sections: Array<{
          content: {
            props: { packages: Array<{ path: string; title: string }> };
          };
        }>;
      };
    };
    const page = (() => {
      const previousNodeEnv = process.env.NODE_ENV;
      const previousPreviewDrafts = process.env.SITE_PREVIEW_DRAFTS;
      vi.stubEnv("NODE_ENV", "development");
      vi.stubEnv("SITE_PREVIEW_DRAFTS", "1");
      try {
        return PackageHubPage() as unknown as HubElement;
      } finally {
        vi.stubEnv("NODE_ENV", previousNodeEnv);
        vi.stubEnv("SITE_PREVIEW_DRAFTS", previousPreviewDrafts);
      }
    })();
    const listedPackages = page.props.sections[0]!.content.props.packages;
    const expectedPackages = approvedRoutes.flatMap((path) => {
      if (!path.startsWith("/goi-cuoc-viettel/")) return [];
      const product = getPage(path);
      if (!product || product.status !== "ready" || product.kind !== "package")
        return [];
      return [{ path, title: product.heading }];
    });

    expect(listedPackages.length).toBeGreaterThan(0);
    expect(listedPackages).toEqual(expectedPackages);
    for (const entry of listedPackages) {
      const product = getPage(entry.path);
      expect(approvedRoutes, `${entry.path}: manifest membership`).toContain(
        entry.path,
      );
      expect(product?.status, `${entry.path}: ready`).toBe("ready");
      expect(product?.kind, `${entry.path}: package`).toBe("package");
    }
    expect(listedPackages.map(({ path }) => path)).not.toContain(
      "/goi-cuoc-viettel/FB5K",
    );
  });

  it("renders draft support routes only in explicit non-production preview", () => {
    const packageHub = siteRouteDefinitions.find(
      ({ path }) => path === "/goi-cuoc-viettel",
    )!;
    expect(packageHub.status).toBe("draft");
    for (const path of siteRoutes) {
      vi.stubEnv("NODE_ENV", "production");
      vi.stubEnv("SITE_PREVIEW_DRAFTS", "1");
      expect(isSiteRouteRenderable(path), `${path}: production hides draft`).toBe(
        false,
      );

      vi.stubEnv("NODE_ENV", "development");
      vi.stubEnv("SITE_PREVIEW_DRAFTS", "0");
      expect(isSiteRouteRenderable(path), `${path}: preview disabled`).toBe(
        false,
      );
      vi.stubEnv("SITE_PREVIEW_DRAFTS", "true");
      expect(isSiteRouteRenderable(path), `${path}: exact preview opt-in`).toBe(
        false,
      );
      vi.stubEnv("SITE_PREVIEW_DRAFTS", "1");
      expect(isSiteRouteRenderable(path), `${path}: preview enabled`).toBe(true);
    }
    expect(isSiteRouteRenderable("/not-a-site-route")).toBe(false);

    const originalStatus = packageHub.status;
    try {
      packageHub.status = "ready";
      vi.stubEnv("NODE_ENV", "production");
      vi.stubEnv("SITE_PREVIEW_DRAFTS", undefined);
      expect(isSiteRouteRenderable(packageHub.path)).toBe(true);
    } finally {
      packageHub.status = originalStatus;
    }
  });

  it("keeps the original 175 product routes separate from five support routes", () => {
    expect(approvedRoutes).toHaveLength(175);
    expect(Object.keys(pageContents).sort()).toEqual([...approvedRoutes].sort());
    expect(siteRoutes).toEqual(supportRoutePaths);
    expect(siteRouteDefinitions).toHaveLength(5);
    expect(
      siteRouteDefinitions.every(({ status }) => status === "draft"),
    ).toBe(true);
    expect(indexableSiteRoutes).toEqual([]);
    expect(approvedRoutes.some((path) => siteRoutes.includes(path))).toBe(false);
    expect(seoApprovedRoutes).toHaveLength(180);
    expect(seoApprovedRoutes).toEqual(
      [...new Set([...approvedRoutes, ...siteRoutes])],
    );
    for (const path of siteRoutes) {
      expect(isSeoRouteAllowed(path)).toBe(true);
    }

    stubPublication(true);
    for (const path of siteRoutes) {
      const metadata = metadataForSiteRoute(path);
      expect(metadata.robots, `${path}: support route remains draft`).toEqual({
        index: false,
        follow: false,
      });
      expect(metadata.alternates, `${path}: no support canonical`).toBeUndefined();
    }
  });

  it("keeps closed-gate metadata noindex with no canonical or structured data", () => {
    stubPublication(false);
    expect(robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
    expect(sitemap()).toEqual([]);

    for (const path of approvedRoutes) {
      const page = pageContents[path];
      const context = { path, page, approvedRoutes: seoApprovedRoutes };
      const metadata = buildPageMetadata(context);
      expect(metadata.title, `${path}: title`).toBe(page.title);
      expect(metadata.description, `${path}: description`).toBe(page.description);
      expect(metadata.robots, `${path}: closed gate`).toEqual({
        index: false,
        follow: false,
      });
      expect(metadata.alternates, `${path}: no canonical`).toBeUndefined();
      expect(metadata.openGraph?.url, `${path}: no Open Graph URL`).toBeUndefined();
      expect(buildPageJsonLd(context), `${path}: no JSON-LD`).toBeNull();
    }

    const readyExample = { ...pageContents["/"], status: "ready" as const };
    const compatibilityContext = {
      path: "/",
      page: readyExample,
      approvedRoutes: seoApprovedRoutes,
      siteLive: true,
    };
    expect(buildPageMetadata(compatibilityContext).robots).toEqual({
      index: false,
      follow: false,
    });
    expect(buildPageJsonLd(compatibilityContext)).toBeNull();
  });

  it("publishes only ready allowlisted pages with absolute self-canonicals", () => {
    stubPublication(true);
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
        expect(metadata.alternates, `${path}: no draft canonical`).toBeUndefined();
        expect(
          metadata.openGraph?.url,
          `${path}: no draft Open Graph URL`,
        ).toBeUndefined();
        expect(buildPageJsonLd(context), `${path}: no draft JSON-LD`).toBeNull();
      }
    }
  });

  it("limits sitemap and robots output to approved, ready routes when every gate is open", () => {
    stubPublication(true);
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
    expect(
      entries.every(({ url }) => url.startsWith(`${siteOrigin}/`)),
    ).toBe(true);
    for (const path of approvedRoutes.filter(
      (candidate) => pageContents[candidate].status === "draft",
    )) {
      expect(entries.some(({ url }) => url === siteConfig.url(path))).toBe(false);
    }
    for (const path of siteRoutes) {
      expect(entries.some(({ url }) => url === siteConfig.url(path))).toBe(false);
    }
  });

  it("fails closed for an invalid live origin and caller-supplied non-manifest paths", () => {
    stubPublication(true);
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://localhost");
    expect(robots()).toEqual({ rules: { userAgent: "*", disallow: "/" } });
    expect(sitemap()).toEqual([]);

    vi.stubEnv("NEXT_PUBLIC_SITE_URL", siteOrigin);
    const knownPage = pageContents["/"];
    for (const path of ["/not-approved", "/internet/netvt01", "//external.invalid"]) {
      expect(isSeoRouteAllowed(path)).toBe(false);
      const context = { path, page: knownPage, approvedRoutes: [path] };
      expect(buildPageMetadata(context).robots).toEqual({
        index: false,
        follow: false,
      });
      expect(buildPageJsonLd(context)).toBeNull();
    }
  });

  it("keeps stale or unverified routes draft-only in production rendering and indexability", () => {
    for (const path of draftOnlyRoutes) {
      expect(getPage(path)?.status, `${path}: draft status`).toBe("draft");
    }

    vi.stubEnv("SITE_PREVIEW_DRAFTS", "1");
    vi.stubEnv("NODE_ENV", "production");
    for (const path of draftOnlyRoutes) {
      expect(getRenderablePage(path), `${path}: production draft hidden`).toBeNull();
    }

    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("SITE_PREVIEW_DRAFTS", "0");
    for (const path of draftOnlyRoutes) {
      expect(getRenderablePage(path), `${path}: preview disabled`).toBeNull();
    }
    vi.stubEnv("SITE_PREVIEW_DRAFTS", "1");
    for (const path of draftOnlyRoutes) {
      expect(getRenderablePage(path), `${path}: dev preview`).toEqual(getPage(path));
    }

    const indexablePaths = getIndexablePages().map(({ path }) => path);
    expect(indexablePaths).toEqual(
      approvedRoutes.filter((path) => pageContents[path].status === "ready"),
    );
    for (const path of draftOnlyRoutes) expect(indexablePaths).not.toContain(path);
  });
});
