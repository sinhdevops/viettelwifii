import { expect, test } from "@playwright/test";

const mode = process.env.VIETTELUP_E2E_MODE;
const templates = [
  "/",
  "/goi-cuoc-viettel/5G20",
  "/goi-cuoc-viettel/tra-sau/MXH120",
  "/internet/NETVT1",
  "/tin-tuc",
  "/tin-tuc/so-sanh-roaming",
  "/internet",
  "/goi-cuoc-gic",
  "/goi-cuoc-nine",
  "/goi-cuoc-roaming",
];
const viewports = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
];

// The full 175-route identity and publishing checks live in smoke.spec.ts.
// This matrix samples distinct layouts at fixed sizes in isolated preview mode.
test.describe("preview template viewport matrix", () => {
  test.skip(
    mode !== "preview",
    "Requires isolated SITE_PREVIEW_DRAFTS=1 server",
  );

  for (const route of templates) {
    for (const viewport of viewports) {
      test(`${route} at ${viewport.width}x${viewport.height}`, async ({
        page,
      }) => {
        await page.setViewportSize(viewport);
        const response = await page.goto(route, {
          waitUntil: "domcontentloaded",
        });
        expect(response?.status()).toBe(200);
        await expect(page.locator("main")).toBeVisible();
        await expect(page.locator("h1")).toHaveCount(1);
        await expect(page.locator("h1")).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        const dimensions = await page.evaluate(() => ({
          pageWidth: document.documentElement.scrollWidth,
          viewportWidth: window.innerWidth,
        }));
        expect(
          dimensions.pageWidth,
          `${route} at ${viewport.width}px overflows horizontally`,
        ).toBeLessThanOrEqual(dimensions.viewportWidth + 1);
      });
    }
  }
});
