#!/usr/bin/env node
// Append-only captures for the four additional user-approved category pages.
// Run with network access; no registration, submissions or external navigation.
import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { chromium } from "@playwright/test";

const root = process.cwd();
const origin = "https://viettelwifii.vn";
const extra = [
  "/internet",
  "/goi-cuoc-gic",
  "/goi-cuoc-nine",
  "/goi-cuoc-roaming",
];
const manifest = JSON.parse(
  await fs.readFile("data/approved-routes.json", "utf8"),
).routes;
const assetsPath = path.join(root, "work/web-clone-benchmark/ASSETS.json");
const assetRoot = path.join(root, "work/web-clone-benchmark/raw/assets");
const rawRoot = path.join(root, "work/web-clone-benchmark/raw/html");
const screenshots = path.join(
  root,
  "work/web-clone-benchmark/screenshots/collections",
);
const reportPath = path.join(
  root,
  "work/web-clone-benchmark/reports/collections-capture.json",
);
if (!extra.every((p, i) => manifest.indexOf(p) === 171 + i)) {
  throw new Error(
    "Append the four exact user-approved routes after the original 171 routes first",
  );
}
const assets = JSON.parse(await fs.readFile(assetsPath, "utf8"));
const known = new Set(
  assets.assets.map((a) => normalize(a.url)).filter(Boolean),
);
await fs.mkdir(assetRoot, { recursive: true });
await fs.mkdir(rawRoot, { recursive: true });
await fs.mkdir(screenshots, { recursive: true });
await fs.mkdir(path.dirname(reportPath), { recursive: true });

function normalize(value) {
  try {
    const url = new URL(value, origin);
    if (!["https:", "http:"].includes(url.protocol)) return null;
    url.hash = "";
    const params = [...url.searchParams].sort(
      ([a, av], [b, bv]) => a.localeCompare(b) || av.localeCompare(bv),
    );
    url.search = "";
    for (const [key, val] of params) url.searchParams.append(key, val);
    return url.href;
  } catch {
    return null;
  }
}
function relevant(url) {
  const pathname = new URL(url).pathname;
  return /(?:\.(?:css|m?js|png|jpe?g|webp|avif|gif|svg|woff2?|ttf|otf|ico|mp4|webm|json)$|\/_next\/image)/i.test(
    pathname,
  );
}
const browser = await chromium.launch({ headless: true });
const report = {
  source: origin,
  capturedAt: new Date().toISOString(),
  pages: [],
  assetsAdded: [],
  failed: [],
};
try {
  for (let idx = 0; idx < extra.length; idx++) {
    const route = extra[idx];
    const page = await browser.newPage({
      viewport: { width: 1440, height: 900 },
      deviceScaleFactor: 1,
    });
    const network = new Set();
    const errors = [];
    page.on("request", (request) => {
      const n = normalize(request.url());
      if (n && relevant(n) && new URL(n).hostname === "viettelwifii.vn")
        network.add(n);
    });
    page.on("pageerror", (error) => errors.push(error.message.slice(0, 200)));
    await page.goto(`${origin}${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    await page.waitForTimeout(1000);
    await page.evaluate(async () => {
      const height = Math.min(document.documentElement.scrollHeight, 16000);
      for (let pos = 0; pos < height; pos += 700) {
        window.scrollTo(0, pos);
        await new Promise((done) => setTimeout(done, 60));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(650);
    const html = await page.content();
    const title = await page.title();
    const heading = await page.locator("h1").allTextContents();
    const domAssets = await page.evaluate(() => {
      const urls = new Set(
        performance.getEntriesByType("resource").map((v) => v.name),
      );
      for (const el of document.querySelectorAll(
        "[src],[srcset],[poster],link[href]",
      )) {
        for (const attr of ["src", "poster", "href"]) {
          const value = el.getAttribute(attr);
          if (value) urls.add(new URL(value, location.href).href);
        }
        const srcset = el.getAttribute("srcset");
        if (srcset)
          for (const v of srcset.split(",")) {
            const item = v.trim().split(/\s+/)[0];
            if (item) urls.add(new URL(item, location.href).href);
          }
      }
      return [...urls];
    });
    for (const u of domAssets) {
      const n = normalize(u);
      if (n && relevant(n) && new URL(n).hostname === "viettelwifii.vn")
        network.add(n);
    }
    const filename = `${String(idx + 171).padStart(4, "0")}.html`;
    await fs.writeFile(path.join(rawRoot, filename), html, "utf8");
    const name = route.slice(1).replaceAll("/", "-");
    await page.screenshot({
      path: path.join(screenshots, `${name}-desktop.png`),
      fullPage: true,
      animations: "disabled",
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.waitForTimeout(350);
    await page.screenshot({
      path: path.join(screenshots, `${name}-mobile.png`),
      fullPage: true,
      animations: "disabled",
    });
    const missing = [...network].filter((u) => !known.has(u));
    for (const url of missing) {
      try {
        const response = await page.request.get(url, { timeout: 30000 });
        if (!response.ok()) throw Error(`HTTP ${response.status()}`);
        const bytes = await response.body();
        const ext = path.extname(new URL(url).pathname).toLowerCase() || ".bin";
        const file =
          createHash("sha256").update(url).digest("hex").slice(0, 24) +
          (url.includes("/_next/image?") ? ".webp" : ext);
        const target = path.join(assetRoot, file);
        const existing = await fs.stat(target).catch(() => null);
        if (!existing) await fs.writeFile(target, bytes, { flag: "wx" });
        else if (existing.size !== bytes.length)
          throw Error(`Asset collision: ${file}`);
        known.add(url);
        assets.assets.push({
          url,
          file,
          localPath: `assets/${file}`,
          status: "downloaded",
          foundOn: [route],
          bytes: bytes.length,
        });
        report.assetsAdded.push({ url, file, bytes: bytes.length });
      } catch (error) {
        report.failed.push({ url, route, error: String(error).slice(0, 200) });
      }
    }
    report.pages.push({
      route,
      filename,
      bytes: Buffer.byteLength(html),
      sha256: createHash("sha256").update(html).digest("hex"),
      title,
      heading,
      assetUrls: network.size,
      missingResources: missing.length,
      runtimeErrors: errors,
    });
    console.log(
      `${route}: ${filename}, ${heading[0] ?? "NO H1"}, ${network.size} source resources, ${missing.length} new refs`,
    );
    await page.close();
  }
} finally {
  await browser.close();
}
assets.routesTotal = manifest.length;
assets.capturedHtml = manifest.length;
assets.downloaded = assets.assets.length;
assets.failed = report.failed.length;
assets.assetVerifiedAt = new Date().toISOString();
await fs.writeFile(assetsPath, JSON.stringify(assets, null, 2) + "\n");
await fs.writeFile(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(
  `CAPTURE ${report.pages.length}/4; ${report.assetsAdded.length} new binary resources, ${report.failed.length} failures`,
);
// NINE has no H1 in the original DOM; record this source issue for the Next
// accessibility pass rather than treating a successful capture as failed.
if (
  report.pages.length !== 4 ||
  report.pages.some((x) => !x.title) ||
  report.failed.length
)
  process.exitCode = 1;
