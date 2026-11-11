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
  isIndexablePage,
} from "../src/lib/server/page-repository";
import { pathFromSegment, metadataForPage } from "../src/lib/page-routing";

const root = resolve(import.meta.dirname, "..");

const draftRoutes = approvedRoutes.filter(
  (path) => pageContents[path].status === "draft",
);
const readyRoutes = approvedRoutes.filter(
  (path) => pageContents[path].status === "ready",
);

afterEach(() => vi.unstubAllEnvs());

describe("explicit App Router migration", () => {
  it("covers exactly the 175 approved routes with valid authored content", () => {
    expect([...approvedRoutes]).toEqual(
      JSON.parse(
        readFileSync(resolve(root, "data/approved-routes.json"), "utf8"),
      ).routes,
    );
    expect(Object.keys(pageContents).sort()).toEqual(
      [...approvedRoutes].sort(),
    );

    for (const path of approvedRoutes) {
      const page = pageContents[path];
      // Every registry record must remain schema-valid.
      expect(pageSchema.safeParse(page).success, `${path}: schema`).toBe(true);
      expect(page.title.trim(), `${path}: title`).not.toBe("");
      expect(page.description.trim(), `${path}: description`).not.toBe("");
      expect(page.heading.trim(), `${path}: heading`).not.toBe("");
      // Product identity is the full route, never the display code.
      if (page.kind === "package" || page.kind === "internet") {
        expect(page.product?.id, `${path}: product id`).toBe(path);
      }
    }
  });

  it("renders every approved route in every environment while indexing only ready ones", () => {
    for (const env of ["development", "test", "production"]) {
      for (const preview of [undefined, "0", "1"]) {
        vi.stubEnv("NODE_ENV", env);
        vi.stubEnv("SITE_PREVIEW_DRAFTS", preview);
        for (const path of approvedRoutes) {
          const page = pageContents[path];
          // Rendering is ungated: drafts stay reachable so internal links work.
          expect(getPage(path)).toEqual(page);
          expect(getRenderablePage(path)).toEqual(page);
          // Indexing follows content readiness, not the environment.
          expect(isIndexablePage(path), `${path}: indexable`).toBe(
            page.status === "ready",
          );
        }
        expect(getIndexablePages()).toEqual(
          readyRoutes.map((path) => ({ path, page: pageContents[path] })),
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

  it("keeps draft routes noindex while ready routes carry a canonical", () => {
    for (const path of draftRoutes) {
      expect(metadataForPage(path).robots, `${path}: draft noindex`).toEqual({
        index: false,
        follow: false,
      });
      expect(
        metadataForPage(path).alternates,
        `${path}: no draft canonical`,
      ).toBeUndefined();
    }
    for (const path of readyRoutes) {
      expect(metadataForPage(path).robots, `${path}: ready indexable`).toEqual({
        index: true,
        follow: true,
      });
      expect(
        metadataForPage(path).alternates?.canonical,
        `${path}: canonical`,
      ).toBe(siteConfig.url(path));
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
      readFileSync(resolve(root, "src/lib/server/page-repository.ts"), "utf8"),
    ).not.toMatch(/readFileSync|generated\/viettelup-source-pages|pages\.json/);
  });
});
