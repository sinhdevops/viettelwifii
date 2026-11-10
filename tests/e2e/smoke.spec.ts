import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "@playwright/test";
import type { PageContent } from "../../src/lib/content-schema";
import { homePageContent } from "../../src/constants/home/page-content";
import { packagePageContents } from "../../src/constants/packages/page-content";
import { newsPageContents } from "../../src/constants/news/page-content";
import { internetDetailPageContents } from "../../src/content/internet/page-content";
import { collectionPageContents } from "../../src/features/collections/page-content";

const repo = process.cwd();
const approved = JSON.parse(
  readFileSync(resolve(repo, "data/approved-routes.json"), "utf8"),
) as {
  routes: string[];
};
const pages: Record<string, PageContent> = Object.assign(
  {},
  homePageContent,
  packagePageContents,
  newsPageContents,
  internetDetailPageContents,
  collectionPageContents,
);
const mode = process.env.VIETTELUP_E2E_MODE;
const extraCollections = [
  "/internet",
  "/goi-cuoc-gic",
  "/goi-cuoc-nine",
  "/goi-cuoc-roaming",
];
const expectedDraftRoutes = [
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
];

// Run preview against an isolated dev server with SITE_PREVIEW_DRAFTS=1.
// Run production against a separate build/start server with drafts disabled.
// Neither mode submits a lead or changes authored status.
test("E2E mode is explicit", () => {
  expect(["preview", "production"]).toContain(mode);
});

test.describe("175 approved routes: authored content identities in preview", () => {
  test.skip(mode !== "preview", "Requires isolated draft preview mode");

  test("authored route data covers the manifest with only explicitly stale routes drafted", () => {
    expect(approved.routes).toHaveLength(175);
    expect(new Set(approved.routes).size).toBe(175);
    for (const route of extraCollections)
      expect(approved.routes).toContain(route);
    expect(Object.keys(pages).sort()).toEqual([...approved.routes].sort());
    expect(
      approved.routes
        .filter((route) => pages[route]?.status === "draft")
        .sort(),
    ).toEqual([...expectedDraftRoutes].sort());
    for (const [route, content] of Object.entries(pages)) {
      expect(["draft", "ready"], route).toContain(content.status);
      if (content.product) {
        expect(content.product.id, route).toBe(route);
        expect(content.product.code, route).toBe(route.split("/").at(-1));
      }
    }
  });

  for (const route of approved.routes) {
    test(`${route} serves its own authored page, H1 and metadata`, async ({
      page,
    }) => {
      const content = pages[route];
      expect(content, `Missing authored record for ${route}`).toBeDefined();

      const response = await page.goto(route, {
        waitUntil: "domcontentloaded",
      });
      expect(response?.status()).toBe(200);
      expect(new URL(page.url()).pathname).toBe(route);
      await expect(page.locator("main")).toBeVisible();
      await expect(page.locator("h1")).toHaveCount(1);
      const headingText = await page.locator("h1").textContent();
      expect(
        headingText?.replace(/\s+/g, "").toLocaleLowerCase("vi"),
        route,
      ).toBe(content.heading.replace(/\s+/g, "").toLocaleLowerCase("vi"));
      await expect(page).toHaveTitle(content.title);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        content.description,
      );
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/i,
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
      if (content.product) {
        // A correct title alone can hide a different product's rendered body.
        await expect(page.locator("main h1")).toContainText(
          content.product.code,
        );
      }
      await expect(page.locator("main")).not.toContainText(
        "Next.js Core — bản chờ nhập liệu",
      );
    });
  }
});

test.describe("shared package codes have different direct and postpaid content", () => {
  test.skip(mode !== "preview", "Requires isolated draft preview mode");
  for (const code of ["MXH120", "MXH150"]) {
    const direct = `/goi-cuoc-viettel/${code}`;
    const postpaid = `/goi-cuoc-viettel/tra-sau/${code}`;

    test(`${code} has distinct visible page content in each family`, async ({
      page,
    }) => {
      expect(pages[direct]).toBeDefined();
      expect(pages[postpaid]).toBeDefined();
      await page.goto(direct, { waitUntil: "domcontentloaded" });
      const directText = (await page.locator("main").innerText()).trim();
      await page.goto(postpaid, { waitUntil: "domcontentloaded" });
      const postpaidText = (await page.locator("main").innerText()).trim();
      expect(directText).not.toBe(postpaidText);
    });
  }
});

test.describe("unknown paths and case-sensitive namespaces", () => {
  const invalidPaths = [
    "/goi-cuoc-viettel/not-a-plan-qa",
    "/goi-cuoc-viettel/tra-sau/not-a-plan-qa",
    "/internet/not-a-plan-qa",
    "/tin-tuc/not-an-article-qa",
    "/tin-tuc/cap-nhat-goi-cuoc-gic", // approved slug ends in uppercase GIC
    "/internet/netvt1", // approved slug is uppercase NETVT1
  ];

  for (const route of invalidPaths) {
    test(`${route} is a real 404`, async ({ request }) => {
      const response = await request.get(route, { maxRedirects: 0 });
      expect(response.status()).toBe(404);
    });
  }
});

test.describe("production draft guard across the approved manifest", () => {
  test.skip(
    mode !== "production",
    "Requires VIETTELUP_E2E_MODE=production and a separate build/start server",
  );

  test("authored status inventory matches the approved manifest", () => {
    expect(Object.keys(pages).sort()).toEqual([...approved.routes].sort());
    expect(
      approved.routes
        .filter((route) => pages[route]?.status === "draft")
        .sort(),
    ).toEqual([...expectedDraftRoutes].sort());
  });

  for (const route of approved.routes.filter((path) => path !== "/")) {
    test(`${route} renders only when its authored status is ready`, async ({
      request,
    }) => {
      const response = await request.get(route, { maxRedirects: 0 });
      expect(response.status()).toBe(
        pages[route]?.status === "ready" ? 200 : 404,
      );
    });
  }

  test("ready home content remains noindex while publication gates are closed", async ({
    page,
  }) => {
    expect(pages["/"]?.status).toBe("ready");
    const response = await page.goto("/", { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/i,
    );
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  });

  test("drafts are absent from the sitemap and crawling is blocked", async ({
    request,
  }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.status()).toBe(200);
    const xml = await sitemap.text();
    for (const route of approved.routes) {
      expect(xml, route).not.toContain(`<loc>${route}</loc>`);
    }
    expect(xml).not.toContain("<loc>");
    const robots = await request.get("/robots.txt");
    expect(robots.status()).toBe(200);
    expect(await robots.text()).toMatch(/Disallow:\s*\//i);
  });
});
