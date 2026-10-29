#!/usr/bin/env node
// Local-only browser verification of approved preview navigation. Never submit forms.
import { mkdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";
import { chromium } from "@playwright/test";

const origin = new URL(process.argv[2] || "http://localhost:4191/");
if (
  origin.protocol !== "http:" ||
  !["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname)
) {
  throw new Error(
    "The navigation verifier accepts only local development URLs.",
  );
}
const root = resolve(import.meta.dirname, "../..");
const checks = [];
const errors = [];
const browser = await chromium.launch({ headless: true });
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: width === 390 ? 844 : 900 },
    });
    const page = await context.newPage();
    page.on("pageerror", (e) =>
      errors.push({ width, type: "pageerror", message: e.message }),
    );
    page.on("console", (m) => {
      if (m.type() === "error" && !m.text().includes("/_next/hmr"))
        errors.push({
          width,
          type: "console",
          message: m.text().slice(0, 400),
        });
    });
    const visit = async (path) => {
      const response = await page.goto(new URL(path, origin).href, {
        waitUntil: "domcontentloaded",
      });
      if (response?.status() !== 200)
        throw new Error(`${path}: HTTP ${response?.status()}`);
      await page
        .locator("h1")
        .first()
        .waitFor({ state: "visible", timeout: 20000 });
    };
    const assertPath = (path, step) => {
      const current = page.url();
      if (new URL(current).pathname !== path)
        throw new Error(`${step}: expected ${path}, received ${current}`);
      checks.push({ width, step, path, result: "pass" });
    };

    await visit("/");
    if (width === 390) {
      await page.getByRole("button", { name: "Mở menu" }).click();
      const newsNav = page.locator('[role="dialog"] a[href="/tin-tuc"]');
      await newsNav.waitFor({ state: "visible" });
      await newsNav.click();
      await page.waitForURL("**/tin-tuc");
      assertPath("/tin-tuc", "mobile menu news");
    } else {
      await page.locator('nav a[href="/tin-tuc"]:visible').click();
      await page.waitForURL("**/tin-tuc");
      assertPath("/tin-tuc", "desktop nav news");
    }

    await page.locator("img").last().scrollIntoViewIfNeeded();
    const newsAssets = await page
      .locator(
        'img[src*="c842cb99847910a15f8f07d2"],img[src*="9c7f40eb51aa115e109e7319"],img[src*="1u3BHeC7tdjlpn6fm9mR1F"]',
      )
      .evaluateAll((images) =>
        images.map((img) => ({
          src: img.getAttribute("src"),
          complete: img.complete,
          width: img.naturalWidth,
        })),
      );
    if (!newsAssets.length || newsAssets.some((img) => img.width === 0)) {
      throw new Error(
        `News local image validation failed at ${width}: ${JSON.stringify(newsAssets)}`,
      );
    }
    checks.push({
      width,
      step: "news localized images",
      result: "pass",
      newsAssets,
    });

    await visit("/");
    await page.getByRole("link", { name: "Xem tất cả" }).click();
    await page.waitForURL("**/tin-tuc");
    assertPath("/tin-tuc", "home news index");

    await visit("/");
    const articleLink = page
      .locator('a[href="/tin-tuc/so-sanh-roaming"]')
      .first();
    await articleLink.click();
    await page.waitForURL("**/tin-tuc/so-sanh-roaming");
    assertPath("/tin-tuc/so-sanh-roaming", "home news article");

    if (width === 1440) {
      await visit("/");
      const details = page
        .locator("a:visible")
        .filter({ hasText: "CHI TIẾT" })
        .first();
      const href = await details.getAttribute("href");
      if (!href?.startsWith("/goi-cuoc-viettel/"))
        throw new Error(`Package detail is not local: ${href}`);
      await details.click();
      await page.waitForURL(new RegExp(`/goi-cuoc-viettel/`));
      assertPath(href, "home package details");
    }
    await context.close();
  }
} finally {
  await browser.close();
}
const result = {
  checkedAt: new Date().toISOString(),
  origin: origin.href,
  checks,
  errors,
};
const out = join(root, "reports", "integration", "preview-navigation.json");
await mkdir(join(root, "reports", "integration"), { recursive: true });
await writeFile(out, JSON.stringify(result, null, 2));
console.log(
  `Preview navigation: ${checks.length} passed; ${errors.length} runtime/console errors. Evidence: ${out}`,
);
if (errors.length) process.exitCode = 1;
