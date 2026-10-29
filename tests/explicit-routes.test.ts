import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it, vi, afterEach } from "vitest";

vi.mock("server-only", () => ({}));
vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NOT_FOUND");
  },
}));

import { approvedRoutes } from "../src/lib/approved-routes";
import { pageSchema } from "../src/lib/content-schema";
import { siteConfig } from "../src/lib/site-config";
import { pageContents } from "../src/lib/page-content-registry";
import {
  getPage,
  getRenderablePage,
  getIndexablePages,
} from "../src/lib/site-data";
import { pathFromSegment, metadataForPage } from "../src/lib/page-routing";

const root = resolve(import.meta.dirname, "..");
function historicalData(file: string) {
  return JSON.parse(
    readFileSync(resolve(root, file), "utf8")
      .replaceAll("https://viettelwifii.vn", siteConfig.origin)
      .replaceAll("viettelwifii.vn", siteConfig.hostname)
      .replace(
        /1800[ .-]?8168(?:\s*\([Mm]iễn phí\))?/g,
        siteConfig.phoneNumber,
      ),
  );
}
const oldPages = historicalData("data/pages.json");
const captures = historicalData("src/generated/viettelup-source-pages.json");
const original = Object.fromEntries(
  approvedRoutes.map((path) => {
    if (oldPages[path]) return [path, pageSchema.parse(oldPages[path])];
    const source = captures[path];
    return [
      path,
      {
        status: "draft",
        kind: source.kind,
        title: source.title,
        description: source.description,
        heading: source.heading,
        sections: [],
        ...(source.product ? { product: source.product } : {}),
        source: {
          url: source.sourceUrl,
          capturedAt: source.capturedAt,
          evidencePaths: [source.rawHtmlPath],
          verifiedFields: ["title", "description", "heading", "path"],
          unverifiedFields: [
            "tsx-content",
            "interaction-parity",
            "visual-parity",
          ],
          notes: [`Original HTML SHA256: ${source.rawSha256}`],
        },
      },
    ];
  }),
);

afterEach(() => vi.unstubAllEnvs());

describe("explicit App Router migration", () => {
  it("preserves every authored value and source fallback for exactly 175 routes", () => {
    expect([...approvedRoutes]).toEqual(
      JSON.parse(
        readFileSync(resolve(root, "data/approved-routes.json"), "utf8"),
      ).routes,
    );
    expect(pageContents).toEqual(original);
  });

  it("keeps draft visibility, published-page and sitemap decisions in every environment", () => {
    for (const env of ["development", "test", "production"]) {
      for (const preview of [undefined, "0", "1"]) {
        vi.stubEnv("NODE_ENV", env);
        vi.stubEnv("SITE_PREVIEW_DRAFTS", preview);
        for (const path of approvedRoutes) {
          const page = original[path];
          expect(getPage(path)).toEqual(page.status === "ready" ? page : null);
          expect(getRenderablePage(path)).toEqual(
            page.status === "ready" || (env !== "production" && preview === "1")
              ? page
              : null,
          );
        }
        expect(getIndexablePages()).toEqual(
          approvedRoutes.flatMap((path) =>
            original[path].status === "ready"
              ? [{ path, page: original[path] }]
              : [],
          ),
        );
      }
    }
  });

  it("rejects unknown and case-changing paths and encoded segment separators", () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("SITE_PREVIEW_DRAFTS", "1");
    for (const path of [
      "/not-approved",
      "/internet/netvt01",
      "/tin-tuc/cap-nhat-goi-cuoc-gic",
      "/internet/NETVT01/extra",
      "/__proto__",
    ])
      expect(getRenderablePage(path)).toBeNull();
    for (const segment of ["", "tra-sau/MXH120", "x\\y", "x?y", "x#y"])
      expect(() => pathFromSegment("/internet/", segment)).toThrow("NOT_FOUND");
    expect(pathFromSegment("/internet/", "NETVT01")).toBe("/internet/NETVT01");
  });

  it("preserves title, description, canonical and noindex in preview", () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("SITE_PREVIEW_DRAFTS", "1");
    for (const path of approvedRoutes) {
      const page = original[path];
      expect(metadataForPage(path)).toEqual({
        title: page.title,
        description: page.description,
        alternates: { canonical: path },
        ...(page.status === "draft"
          ? { robots: { index: false, follow: false } }
          : {}),
      });
    }
  });

  it("provides explicit route files for all families and removes the global catch-all", () => {
    for (const file of [
      "page.tsx",
      "internet/page.tsx",
      "internet/[code]/page.tsx",
      "goi-cuoc-viettel/[code]/page.tsx",
      "goi-cuoc-viettel/tra-sau/[code]/page.tsx",
      "tin-tuc/page.tsx",
      "tin-tuc/[slug]/page.tsx",
      "goi-cuoc-gic/page.tsx",
      "goi-cuoc-nine/page.tsx",
      "goi-cuoc-roaming/page.tsx",
    ])
      expect(existsSync(resolve(root, "src/app", file))).toBe(true);
    expect(existsSync(resolve(root, "src/app/[...segments]/page.tsx"))).toBe(
      false,
    );
    expect(
      readFileSync(resolve(root, "src/lib/site-data.ts"), "utf8"),
    ).not.toMatch(/readFileSync|generated\/viettelup-source-pages|pages\.json/);
  });
});
