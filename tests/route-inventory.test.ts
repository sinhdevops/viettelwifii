import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { parseApprovedRoutes } from "../src/lib/scope";

const repo = resolve(import.meta.dirname, "..");

function approvedPaths(): string[] {
  const raw: unknown = JSON.parse(
    readFileSync(resolve(repo, "data/approved-routes.json"), "utf8"),
  );
  return parseApprovedRoutes(raw);
}

function appendixPaths(): string[] {
  const master = readFileSync(
    resolve(repo, "docs/MASTER_PROMPT_VIETTELUP.md"),
    "utf8",
  );
  const appendix = master.split(
    "## Phụ lục — Danh sách 171 route do tôi cung cấp",
  )[1];
  expect(
    appendix,
    "Master prompt must retain the user-approved route appendix",
  ).toBeDefined();
  const match = appendix.match(/```json\s*([\s\S]*?)\s*```/);
  expect(
    match,
    "Master prompt appendix must contain a JSON route list",
  ).not.toBeNull();
  const source: { referenceOrigin: string; routes: string[] } = JSON.parse(
    match![1],
  );
  expect(source.referenceOrigin).toBe("https://viettelwifii.vn");
  return source.routes;
}

describe("175 approved route inventory (offline; not content QA)", () => {
  it("matches the approved master-prompt appendix path-for-path, including order and case", () => {
    expect(approvedPaths().slice(0, 171)).toEqual(appendixPaths());
    expect(approvedPaths().slice(171)).toEqual([
      "/internet",
      "/goi-cuoc-gic",
      "/goi-cuoc-nine",
      "/goi-cuoc-roaming",
    ]);
  });

  it("partitions every path into exactly one required route family", () => {
    const routes = approvedPaths();
    const groups = {
      home: routes.filter((p) => p === "/"),
      prepaid: routes.filter((p) => /^\/goi-cuoc-viettel\/[^/]+$/.test(p)),
      postpaid: routes.filter((p) =>
        /^\/goi-cuoc-viettel\/tra-sau\/[^/]+$/.test(p),
      ),
      newsList: routes.filter((p) => p === "/tin-tuc"),
      newsArticle: routes.filter((p) => /^\/tin-tuc\/[^/]+$/.test(p)),
      internet: routes.filter((p) => /^\/internet\/[^/]+$/.test(p)),
      collections: routes.filter((p) =>
        [
          "/internet",
          "/goi-cuoc-gic",
          "/goi-cuoc-nine",
          "/goi-cuoc-roaming",
        ].includes(p),
      ),
    };

    expect(
      Object.fromEntries(
        Object.entries(groups).map(([name, values]) => [name, values.length]),
      ),
    ).toEqual({
      home: 1,
      prepaid: 101,
      postpaid: 15,
      newsList: 1,
      newsArticle: 35,
      internet: 18,
      collections: 4,
    });
    expect(Object.values(groups).flat().length).toBe(175);
    expect(new Set(Object.values(groups).flat()).size).toBe(175);
  });

  it("keeps nested postpaid paths distinct from their prepaid namesakes", () => {
    const routes = approvedPaths();
    const regularSlugs = new Set(
      routes
        .filter((p) => /^\/goi-cuoc-viettel\/[^/]+$/.test(p))
        .map((p) => p.split("/").at(-1)),
    );
    const postpaidSlugs = routes
      .filter((p) => p.startsWith("/goi-cuoc-viettel/tra-sau/"))
      .map((p) => p.split("/").at(-1)!);

    expect(
      postpaidSlugs.filter((slug) => regularSlugs.has(slug)).sort(),
    ).toEqual(["MXH120", "MXH150"]);
    for (const slug of ["MXH120", "MXH150"]) {
      expect(routes).toContain(`/goi-cuoc-viettel/${slug}`);
      expect(routes).toContain(`/goi-cuoc-viettel/tra-sau/${slug}`);
    }
  });

  it("preserves exact spelling without case-fold collisions, query strings or trailing slash variants", () => {
    const routes = approvedPaths();
    expect(routes).toContain("/tin-tuc/cap-nhat-goi-cuoc-GIC");
    expect(routes).not.toContain("/tin-tuc/cap-nhat-goi-cuoc-gic");
    expect(routes).toContain("/internet/NETVT1_CAM1");
    expect(routes).not.toContain("/internet/netvt1_cam1");
    expect(new Set(routes.map((p) => p.toLowerCase())).size).toBe(175);
    for (const route of routes) {
      expect(route).not.toMatch(/[?#]/);
      if (route !== "/") expect(route).not.toMatch(/\/$/);
    }
  });

  it("covers distinct Internet base, camera and entertainment path variants", () => {
    const internet = approvedPaths().filter((p) => p.startsWith("/internet/"));
    expect(internet.filter((p) => p.endsWith("_CAM1"))).toHaveLength(4);
    expect(internet.filter((p) => p.endsWith("_GIAITRI"))).toHaveLength(3);
    expect(
      internet.filter((p) => !p.endsWith("_CAM1") && !p.endsWith("_GIAITRI")),
    ).toHaveLength(11);
  });
});
