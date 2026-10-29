import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { approvedRoutes } from "../src/lib/approved-routes";
import { pageContents } from "../src/lib/page-content-registry";
import { siteConfig } from "../src/lib/site-config";
import { buildMetadata } from "../src/lib/seo/metadata";
import {
  buildPageJsonLd,
  buildPageMetadata,
} from "../src/features/seo/page-seo";
import robots from "../src/app/robots";
import sitemap from "../src/app/sitemap";

afterEach(() => vi.unstubAllEnvs());

describe("OPT-SEO-01: current-source policy for every approved route", () => {
  it("covers exactly 175 paths, preserves authored metadata and blocks all drafts", () => {
    expect(approvedRoutes).toHaveLength(175);
    expect(Object.keys(pageContents).sort()).toEqual(
      [...approvedRoutes].sort(),
    );
    // All approved routes are published as ready.
    expect(
      approvedRoutes.filter((path) => pageContents[path].status === "ready"),
    ).toEqual([...approvedRoutes]);

    for (const path of approvedRoutes) {
      const page = pageContents[path];
      expect(page.title.trim(), `${path}: title`).not.toBe("");
      expect(page.description.trim(), `${path}: description`).not.toBe("");
      expect(page.heading.trim(), `${path}: heading`).not.toBe("");

      const legacy = buildMetadata(path, page);
      expect(legacy.title, `${path}: title preserved`).toBe(page.title);
      expect(legacy.description, `${path}: description preserved`).toBe(
        page.description,
      );
      expect(legacy.alternates?.canonical, `${path}: canonical path`).toBe(
        path,
      );

      for (const siteLive of [false, true]) {
        const context = {
          path,
          page,
          approvedRoutes,
          siteUrl: siteConfig.origin,
          siteLive,
        };
        const metadata = buildPageMetadata(context);
        if (page.status === "draft" || !siteLive) {
          expect(metadata.robots, `${path}: noindex`).toEqual({
            index: false,
            follow: false,
          });
          expect(
            metadata.alternates,
            `${path}: no published canonical`,
          ).toBeUndefined();
          expect(
            buildPageJsonLd(context),
            `${path}: no draft schema`,
          ).toBeNull();
        } else {
          expect(metadata.robots, `${path}: ready index`).toEqual({
            index: true,
            follow: true,
          });
          expect(
            metadata.alternates?.canonical,
            `${path}: live canonical`,
          ).toBe(siteConfig.url(path));
          expect(buildPageJsonLd(context)?.url, `${path}: schema URL`).toBe(
            siteConfig.url(path),
          );
        }
      }
      if (page.status === "draft") {
        expect(legacy.robots, `${path}: legacy draft guard`).toEqual({
          index: false,
          follow: false,
        });
      }
    }
  });

  it("keeps sitemap empty in preview and limits live entries to authored ready paths", () => {
    vi.stubEnv("SITE_LIVE", "false");
    expect(sitemap()).toEqual([]);
    expect(robots().rules).toEqual({ userAgent: "*", disallow: "/" });

    vi.stubEnv("SITE_LIVE", "true");
    const readyPaths = approvedRoutes.filter(
      (path) => pageContents[path].status === "ready",
    );
    expect(sitemap().map((entry) => entry.url)).toEqual(
      readyPaths.map((path) => siteConfig.url(path)),
    );
    expect(new Set(sitemap().map((entry) => entry.url)).size).toBe(
      readyPaths.length,
    );
  });

  it("rejects unapproved canonical candidates despite supplied page data", () => {
    const example = pageContents[approvedRoutes[0]];
    const readyExample = { ...example, status: "ready" as const };
    for (const path of [
      "/not-approved",
      "/internet/netvt01",
      "//external.invalid",
      "/internet/NETVT01\\wrong",
    ]) {
      expect(buildMetadata(path, readyExample)).toEqual({
        robots: { index: false, follow: false },
      });
      const context = {
        path,
        page: readyExample,
        approvedRoutes: [path],
        siteUrl: siteConfig.origin,
        siteLive: true,
      };
      if (path.includes("\\") || path.startsWith("//")) {
        expect(buildPageMetadata(context).robots).toEqual({
          index: false,
          follow: false,
        });
        expect(buildPageJsonLd(context)).toBeNull();
      }
    }
  });
});
