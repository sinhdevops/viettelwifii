import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it, vi } from "vitest";
import { approvedRoutes } from "../../lib/approved-routes";
import { pageContents } from "../../lib/page-content-registry";
import { siteRouteDefinitions } from "../../lib/site-routes";
import {
  buildPageJsonLdGraph,
  buildPageMetadata,
  seoApprovedRoutes,
  serializeJsonLd,
  type SeoPage,
} from "./page-seo";
import robots from "../../app/robots";
import sitemap from "../../app/sitemap";

vi.mock("server-only", () => ({}));

const FIXTURE_ORIGIN = "https://seo-audit.example";

function duplicates(values: string[]) {
  const counts = new Map<string, number>();
  for (const value of values) counts.set(value, (counts.get(value) ?? 0) + 1);
  return [...counts.entries()].filter(([, count]) => count > 1);
}

afterEach(() => vi.unstubAllEnvs());

describe("SEO metadata inventory — 175 content and 5 support URLs", () => {
  it("audits every route using current source data and the shared SEO helpers", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", FIXTURE_ORIGIN);
    vi.stubEnv("NODE_ENV", "production");

    const sources: { path: string; page: SeoPage; group: string }[] = [
      ...approvedRoutes.map((path) => ({
        path,
        page: pageContents[path],
        group: pageContents[path]?.kind ?? "missing",
      })),
      ...siteRouteDefinitions.map(({ path, title, description, status }) => ({
        path,
        page: { title, description, status },
        group: "support",
      })),
    ];
    expect(approvedRoutes).toHaveLength(175);
    expect(siteRouteDefinitions).toHaveLength(5);
    expect(sources).toHaveLength(180);
    expect(new Set(sources.map(({ path }) => path)).size).toBe(180);
    expect(seoApprovedRoutes).toHaveLength(180);

    const rows = sources.map(({ path, page, group }) => {
      expect(page, `missing content: ${path}`).toBeDefined();
      const metadata = buildPageMetadata({ path, page });
      const graph = buildPageJsonLdGraph({ path, page });
      const title = String(metadata.title ?? "");
      const description = String(metadata.description ?? "");
      const canonical = metadata.alternates?.canonical;
      const expected = new URL(path, FIXTURE_ORIGIN).href;
      const indexable = page.status === "ready";
      expect(metadata.robots, path).toEqual({
        index: indexable,
        follow: indexable,
      });
      expect(canonical, path).toBe(indexable ? expected : undefined);
      expect(graph.length > 0, path).toBe(indexable);
      if (indexable) {
        expect(JSON.stringify(graph), path).not.toMatch(
          /"(offers|aggregateRating|priceValidUntil)"/,
        );
        expect(serializeJsonLd(graph), path).not.toContain("</script>");
        expect(metadata.openGraph?.url, path).toBe(expected);
      }
      return {
        path,
        group,
        status: page.status,
        originalTitle: page.title,
        originalDescription: page.description,
        title,
        description,
        titleLength: title.length,
        descriptionLength: description.length,
        canonical: canonical ?? null,
        jsonLdTypes: graph.map((node) => node["@type"]),
      };
    });

    const sitemapUrls = sitemap().map(({ url }) => url);
    const readyRows = rows.filter(({ status }) => status === "ready");
    expect(new Set(sitemapUrls).size).toBe(sitemapUrls.length);
    expect(new Set(sitemapUrls)).toEqual(
      new Set(readyRows.map(({ canonical }) => canonical)),
    );
    expect(robots().sitemap).toBe(`${FIXTURE_ORIGIN}/sitemap.xml`);

    const report = {
      fixtureOrigin: FIXTURE_ORIGIN,
      note: "Source-helper audit only; not rendered HTML, browser crawl or field measurement.",
      inventory: {
        content: approvedRoutes.length,
        support: siteRouteDefinitions.length,
        total: rows.length,
        ready: readyRows.length,
        draft: rows.length - readyRows.length,
        sitemapEntries: sitemapUrls.length,
      },
      counts: {
        sourceTitleOver60: rows.filter(
          ({ originalTitle }) => originalTitle.length > 60,
        ).length,
        sourceDescriptionOver160: rows.filter(
          ({ originalDescription }) => originalDescription.length > 160,
        ).length,
        sourceDescriptionUnder120: rows.filter(
          ({ originalDescription }) => originalDescription.length < 120,
        ).length,
        finalTitleOver60: rows.filter(({ titleLength }) => titleLength > 60)
          .length,
        finalDescriptionOver160: rows.filter(
          ({ descriptionLength }) => descriptionLength > 160,
        ).length,
        finalDescriptionUnder120: rows.filter(
          ({ descriptionLength }) => descriptionLength < 120,
        ).length,
        finalTitleUnder30: rows.filter(({ titleLength }) => titleLength < 30)
          .length,
        finalDescriptionEqualsTitle: rows.filter(
          ({ title, description }) => title === description,
        ).length,
        sourceDuplicateTitles: duplicates(
          rows.map(({ originalTitle }) => originalTitle),
        ).length,
        sourceDuplicateDescriptions: duplicates(
          rows.map(({ originalDescription }) => originalDescription),
        ).length,
        finalDuplicateTitles: duplicates(rows.map(({ title }) => title)).length,
        finalDuplicateDescriptions: duplicates(
          rows.map(({ description }) => description),
        ).length,
      },
      duplicateTitles: duplicates(rows.map(({ title }) => title)),
      duplicateDescriptions: duplicates(
        rows.map(({ description }) => description),
      ),
      rows,
    };

    const snapshot = process.env.SEO_AUDIT_SNAPSHOT;
    if (snapshot === "before" || snapshot === "after") {
      const file = fileURLToPath(
        new URL(
          `../../../reports/seo-performance/core-metadata180-${snapshot}.json`,
          import.meta.url,
        ),
      );
      writeFileSync(file, JSON.stringify(report, null, 2) + "\n", "utf8");
    }
    console.log(
      "SEO-180 source audit:",
      JSON.stringify({ inventory: report.inventory, counts: report.counts }),
    );
    console.log(
      "SEO-180 samples:",
      JSON.stringify(
        rows.filter(({ path }) =>
          [
            "/",
            "/goi-cuoc-viettel/5G20",
            "/internet/NETVT01",
            "/tin-tuc",
            "/goi-cuoc-viettel",
            "/gioi-thieu",
          ].includes(path),
        ),
      ),
    );
  });
});
