#!/usr/bin/env node
/**
 * Compare the public-source HTML mirror with the Next.js migration in real Chromium.
 * Read-only browser actions only: navigation, scroll, screenshots, DOM inspection.
 * Does not activate CTAs, submit forms, or make outbound requests intentionally.
 * This measures sampled route/viewport fidelity, not acceptance of all 171 routes.
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";

const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};
const source = new URL(arg("--source", "http://127.0.0.1:4182"));
// Next dev's HMR websocket expects its configured localhost origin. Browsing
// the preview by 127.0.0.1 can succeed over HTTP while failing its WS upgrade.
const candidate = new URL(arg("--next", "http://localhost:3211"));
const fullPage = args.includes("--full-page");
for (const url of [source, candidate]) {
  if (
    url.protocol !== "http:" ||
    !["127.0.0.1", "localhost", "[::1]"].includes(url.hostname)
  ) {
    throw new Error("Only loopback HTTP preview URLs are allowed.");
  }
}
const root = resolve(import.meta.dirname, "../..");
const reportDir = resolve(
  root,
  arg(
    "--out",
    fullPage
      ? "reports/integration/true-clone-next-full-page"
      : "reports/integration/true-clone-next-visual",
  ),
);
const screensDir = join(reportDir, "screenshots");
const routes = arg("--route", "")
  ? [arg("--route", "")]
  : [
      "/",
      "/goi-cuoc-viettel/5G20",
      "/goi-cuoc-viettel/tra-sau/MXH120",
      "/internet/NETVT01",
      "/tin-tuc",
      "/tin-tuc/so-sanh-roaming",
    ];
const viewports = arg("--width", "")
  ? [Number(arg("--width", "1440"))]
  : [390, 768, 1440];
const height = (width) => (width === 390 ? 844 : 900);
const sleep = (ms) => new Promise((done) => setTimeout(done, ms));
const errors = [];
const rows = [];
const browser = await chromium.launch({ headless: true });
await mkdir(screensDir, { recursive: true });

async function capture(origin, route, width, side) {
  const context = await browser.newContext({
    viewport: { width, height: height(width) },
    deviceScaleFactor: 1,
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const failedLocal = [];
  page.on("pageerror", (err) => consoleErrors.push(err.message.slice(0, 400)));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text().slice(0, 400));
  });
  page.on("requestfailed", (request) => {
    if (request.url().startsWith(origin.origin))
      failedLocal.push(request.url().slice(0, 400));
  });
  page.on("response", (response) => {
    if (response.url().startsWith(origin.origin) && response.status() >= 400)
      failedLocal.push(`${response.status()} ${response.url().slice(0, 330)}`);
  });
  let status = null;
  let navigationError = null;
  const url = new URL(route, origin);
  try {
    const response = await page.goto(url.href, {
      waitUntil: "domcontentloaded",
      timeout: 45000,
    });
    status = response?.status() ?? null;
    await page.evaluate(() => document.fonts.ready);
    // Source slider/content changes with time. Fix capture interval for both sides.
    await sleep(850);
    if (fullPage) {
      // Reveal lazy-loaded images/sections before comparing the entire document.
      // Cap the scroll passes so broken infinite pages do not stall the audit.
      for (let step = 1; step <= 24; step++) {
        const atBottom = await page.evaluate((index) => {
          const distance = Math.max(500, Math.floor(innerHeight * 0.8));
          scrollTo(
            0,
            Math.min(index * distance, document.documentElement.scrollHeight),
          );
          return (
            scrollY + innerHeight >= document.documentElement.scrollHeight - 2
          );
        }, step);
        await sleep(110);
        if (atBottom) break;
      }
      await page.evaluate(() => scrollTo(0, 0));
      await sleep(250);
    }
  } catch (err) {
    navigationError = String(err).slice(0, 500);
  }
  const dom = await page
    .evaluate(() => ({
      title: document.title,
      h1: [...document.querySelectorAll("h1")].map((x) => x.innerText.trim()),
      textLength: document.querySelector("main")?.innerText.length ?? 0,
      missingImages: [...document.images]
        .filter((x) => x.complete && x.naturalWidth === 0)
        .map((x) => x.currentSrc || x.src)
        .slice(0, 25),
      overflow: document.documentElement.scrollWidth > innerWidth,
      documentHeight: document.documentElement.scrollHeight,
      classCounts: {
        header: document.querySelectorAll("header").length,
        footer: document.querySelectorAll("footer").length,
        article: document.querySelectorAll("article").length,
      },
    }))
    .catch(() => null);
  const label =
    route === "/"
      ? "home"
      : route.replace(/^\/+/, "").replace(/[^a-z0-9-]/gi, "_");
  const screenshot = join(screensDir, `${label}-${width}-${side}.png`);
  if (dom && status === 200)
    await page.screenshot({
      path: screenshot,
      animations: "disabled",
      fullPage,
    });
  await context.close();
  return {
    status,
    navigationError,
    dom,
    consoleErrors: [...new Set(consoleErrors)].slice(0, 20),
    failedLocal: [...new Set(failedLocal)].slice(0, 25),
    screenshot: status === 200 ? screenshot : null,
  };
}

async function imageDifference(left, right) {
  if (!left || !right) return null;
  const [leftMeta, rightMeta] = await Promise.all([
    sharp(left).metadata(),
    sharp(right).metadata(),
  ]);
  if (leftMeta.width !== rightMeta.width) return null;
  const overlapHeight = Math.min(leftMeta.height, rightMeta.height);
  const [a, b] = await Promise.all([
    sharp(left)
      .extract({
        left: 0,
        top: 0,
        width: leftMeta.width,
        height: overlapHeight,
      })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true }),
    sharp(right)
      .extract({
        left: 0,
        top: 0,
        width: rightMeta.width,
        height: overlapHeight,
      })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true }),
  ]);
  let sum = 0;
  let changed = 0;
  const pixels = a.info.width * a.info.height;
  for (let i = 0; i < pixels * 3; i += 3) {
    const diff =
      (Math.abs(a.data[i] - b.data[i]) +
        Math.abs(a.data[i + 1] - b.data[i + 1]) +
        Math.abs(a.data[i + 2] - b.data[i + 2])) /
      3;
    sum += diff;
    if (diff > 25) changed++;
  }
  return {
    meanAbsolutePixelDifference: Number((sum / pixels).toFixed(2)),
    changedPixelsPct: Number(((changed * 100) / pixels).toFixed(2)),
    sourceHeight: leftMeta.height,
    nextHeight: rightMeta.height,
    comparedHeight: overlapHeight,
    heightDifference: rightMeta.height - leftMeta.height,
  };
}

try {
  for (const route of routes) {
    for (const width of viewports) {
      const original = await capture(source, route, width, "html");
      const next = await capture(candidate, route, width, "next");
      const image = await imageDifference(original.screenshot, next.screenshot);
      const row = { route, width, original, next, image };
      rows.push(row);
      console.log(
        `${route} @${width}: HTML=${original.status} NEXT=${next.status}` +
          (image
            ? ` MAE=${image.meanAbsolutePixelDifference} changed=${image.changedPixelsPct}%`
            : " no comparison"),
      );
      if (
        original.status !== 200 ||
        next.status !== 200 ||
        !next.dom ||
        next.dom.overflow ||
        next.dom.missingImages.length ||
        next.consoleErrors.length ||
        next.failedLocal.length
      )
        errors.push({ route, width });
    }
  }
} finally {
  await browser.close();
}
const report = {
  createdAt: new Date().toISOString(),
  source: source.href,
  candidate: candidate.href,
  routeCount: routes.length,
  viewportCount: viewports.length,
  fullPage,
  samples: rows.length,
  problematicSamples: errors.length,
  rows,
};
await writeFile(
  join(reportDir, "RESULTS.json"),
  JSON.stringify(report, null, 2),
);
const markdown = [
  "# HTML source → Next.js TSX browser comparison",
  "",
  `- Source: ${source.href}`,
  `- Next preview: ${candidate.href}`,
  `- Samples: ${rows.length}; samples needing review: ${errors.length}`,
  fullPage
    ? "- Full-page comparison scrolls to load content, then compares overlapping pixels; differing document heights are reported separately."
    : "- Measurements are first viewport only; animated banners, runtime timing, text and responsive differences must be reviewed visually.",
  "",
  "| Route | Width | Source HTTP | Next HTTP | Next H1 | Overflow | Missing images | Runtime errors | MAE | Changed pixels | Height delta |",
  "| --- | ---: | ---: | ---: | --- | --- | ---: | ---: | ---: | ---: | ---: |",
  ...rows.map(
    (row) =>
      `| ${row.route} | ${row.width} | ${row.original.status ?? "-"} | ${row.next.status ?? "-"} | ${row.next.dom?.h1.join("; ").replaceAll("|", "/") || "-"} | ${row.next.dom?.overflow ?? "-"} | ${row.next.dom?.missingImages.length ?? "-"} | ${row.next.consoleErrors.length} | ${row.image?.meanAbsolutePixelDifference ?? "-"} | ${row.image?.changedPixelsPct ?? "-"}% | ${row.image?.heightDifference ?? "-"} |`,
  ),
  "",
  "Full console/network evidence and PNG paths: `RESULTS.json` and `screenshots/`.",
];
await writeFile(join(reportDir, "RESULTS.md"), markdown.join("\n"));
console.log(`Saved ${join(reportDir, "RESULTS.md")}`);
if (errors.length) process.exitCode = 1;
