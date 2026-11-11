/**
 * Lab perf/rendering check with Playwright chromium against the local prod build.
 * Fresh browser context per URL (cold cache) on an emulated mobile and desktop profile.
 * Reports LCP, CLS, DOM size, JS/CSS/font/image transfer and console errors.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { chromium } from "@playwright/test";

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3100";
const OUT = resolve(
  process.env.AUDIT_OUT || "reports/seo-performance/audit-perf-2026-11-11.json",
);

const targets = [
  "/",
  "/tin-tuc",
  "/goi-cuoc-viettel",
  "/goi-cuoc-viettel/5G20",
  "/goi-cuoc-viettel/SD90",
  "/goi-cuoc-viettel/tra-sau/N400",
  "/internet",
  "/internet/NETVT01",
  "/tin-tuc/goi-cuoc-data-4g-viettel-2026",
  "/gioi-thieu",
  "/lien-he",
  "/goi-cuoc-roaming",
];

const profiles = [
  {
    name: "mobile",
    viewport: { width: 390, height: 844 },
    dpr: 3,
    mob: true,
    ua: "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
  },
  {
    name: "desktop",
    viewport: { width: 1440, height: 900 },
    dpr: 1,
    mob: false,
    ua: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  },
];

const browser = await chromium.launch();
const results = [];

for (const profile of profiles) {
  for (const path of targets) {
    const context = await browser.newContext({
      viewport: profile.viewport,
      deviceScaleFactor: profile.dpr,
      isMobile: profile.mob,
      hasTouch: profile.mob,
      userAgent: profile.ua,
      bypassCSP: true,
    });
    const page = await context.newPage();
    const consoleErrors = [];

    await page.addInitScript(() => {
      window.__lcp = [];
      window.__cls = 0;
      window.__long = [];
      try {
        new PerformanceObserver((list) => {
          for (const e of list.getEntries()) {
            window.__lcp.push({
              time: Math.round(e.startTime),
              size: e.size,
              tag: e.element?.tagName || null,
              src:
                (e.url || e.element?.currentSrc || "").split("/").pop() || null,
            });
          }
        }).observe({ type: "largest-contentful-paint", buffered: true });
        new PerformanceObserver((list) => {
          for (const e of list.getEntries()) {
            if (!e.hadRecentInput) window.__cls += e.value;
          }
        }).observe({ type: "layout-shift", buffered: true });
        new PerformanceObserver((list) => {
          for (const e of list.getEntries())
            window.__long.push(Math.round(e.duration));
        }).observe({ type: "longtask", buffered: true });
      } catch {}
    });

    page.on("console", (m) => {
      if (m.type() === "error") consoleErrors.push(m.text().slice(0, 300));
    });
    page.on("pageerror", (e) =>
      consoleErrors.push(String(e.message).slice(0, 300)),
    );

    const start = Date.now();
    await page.goto(`${BASE}${path}`, { waitUntil: "load", timeout: 90000 });
    const loadMs = Date.now() - start;
    await page.waitForTimeout(1500);

    const metrics = await page.evaluate(() => {
      const nav = performance.getEntriesByType("navigation")[0];
      const paints = Object.fromEntries(
        performance
          .getEntriesByType("paint")
          .map((p) => [p.name, Math.round(p.startTime)]),
      );
      const lcp = (window.__lcp || []).at(-1) || null;
      const resources = performance.getEntriesByType("resource").map((r) => ({
        name: r.name,
        initiatorType: r.initiatorType,
        transferSize: r.transferSize,
        encodedBodySize: r.encodedBodySize,
        duration: Math.round(r.duration),
      }));
      const imgs = [...document.images].map((i) => {
        const rect = i.getBoundingClientRect();
        return {
          src: (i.currentSrc || i.src).split("/").pop(),
          natural: `${i.naturalWidth}x${i.naturalHeight}`,
          displayed: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
          loading: i.loading,
          complete: i.complete && i.naturalWidth > 0,
          oversizeRatio:
            i.naturalWidth > 0 && rect.width > 0
              ? i.naturalWidth / (rect.width * (window.devicePixelRatio || 1))
              : 0,
        };
      });
      return {
        domNodes: document.getElementsByTagName("*").length,
        htmlBytes: document.documentElement.outerHTML.length,
        ttfb: Math.round(nav?.responseStart || 0),
        domContentLoaded: Math.round(nav?.domContentLoadedEventEnd || 0),
        loadEvent: Math.round(nav?.loadEventEnd || 0),
        paints,
        lcpMs: lcp?.time ?? null,
        lcpElement: lcp ? `${lcp.tag} ${lcp.src || ""}`.trim() : null,
        cls: Number((window.__cls || 0).toFixed(4)),
        longTasks: window.__long || [],
        imgs: imgs.length,
        brokenImages: imgs.filter((i) => !i.complete).length,
        oversizedImages: imgs.filter((i) => i.oversizeRatio > 2).length,
        oversizedSamples: imgs
          .filter((i) => i.oversizeRatio > 2)
          .sort((a, b) => b.oversizeRatio - a.oversizeRatio)
          .slice(0, 5)
          .map((i) => ({
            src: i.src,
            natural: i.natural,
            displayed: i.displayed,
            ratio: Number(i.oversizeRatio.toFixed(1)),
          })),
        resources,
        scrollHeight: document.body.scrollHeight,
      };
    });

    const sizeOf = (r) => r.transferSize || r.encodedBodySize || 0;
    const js = metrics.resources.filter((r) =>
      /\/_next\/static\/[^?]+\.js(\?|$)/.test(r.name),
    );
    const css = metrics.resources.filter((r) =>
      /\/_next\/static\/[^?]+\.css(\?|$)/.test(r.name),
    );
    const fonts = metrics.resources.filter((r) =>
      /\.(woff2?|ttf|otf)(\?|$)/.test(r.name),
    );
    const imgsRes = metrics.resources.filter((r) =>
      /\.(png|jpe?g|webp|avif|gif|svg)(\?|$)/.test(r.name),
    );
    const thirdParty = metrics.resources.filter(
      (r) => !r.name.startsWith(BASE) && !r.name.startsWith("/"),
    );

    results.push({
      device: profile.name,
      path,
      loadMs,
      ttfb: metrics.ttfb,
      lcpMs: metrics.lcpMs,
      lcpElement: metrics.lcpElement,
      cls: metrics.cls,
      firstPaint: metrics.paints["first-paint"] ?? null,
      firstContentfulPaint: metrics.paints["first-contentful-paint"] ?? null,
      domNodes: metrics.domNodes,
      htmlKB: Math.round(metrics.htmlBytes / 1024),
      scrollHeight: metrics.scrollHeight,
      longTasks: metrics.longTasks.length,
      longestTaskMs: Math.max(0, ...metrics.longTasks),
      imgs: metrics.imgs,
      brokenImages: metrics.brokenImages,
      oversizedImages: metrics.oversizedImages,
      oversizedSamples: metrics.oversizedSamples,
      summary: {
        requests: metrics.resources.length,
        js: {
          count: js.length,
          KB: Math.round(js.reduce((n, r) => n + sizeOf(r), 0) / 1024),
        },
        css: {
          count: css.length,
          KB: Math.round(css.reduce((n, r) => n + sizeOf(r), 0) / 1024),
        },
        fonts: {
          count: fonts.length,
          KB: Math.round(fonts.reduce((n, r) => n + sizeOf(r), 0) / 1024),
        },
        images: {
          count: imgsRes.length,
          KB: Math.round(imgsRes.reduce((n, r) => n + sizeOf(r), 0) / 1024),
        },
        thirdParty: thirdParty.map((r) => r.name),
        totalKB: Math.round(
          metrics.resources.reduce((n, r) => n + sizeOf(r), 0) / 1024,
        ),
      },
      consoleErrors: consoleErrors.slice(0, 8),
    });

    console.log(
      `${profile.name.padEnd(7)} ${path.padEnd(45)} LCP ${String(results.at(-1).lcpMs).padStart(5)}ms FCP ${String(results.at(-1).firstContentfulPaint).padStart(5)}ms CLS ${results.at(-1).cls} DOM ${String(results.at(-1).domNodes).padStart(4)} JS ${String(results.at(-1).summary.js.KB).padStart(3)}KB/${results.at(-1).summary.js.count} CSS ${results.at(-1).summary.css.KB}KB IMG ${results.at(-1).summary.images.KB}KB/${results.at(-1).summary.images.count} over ${results.at(-1).oversizedImages} HTML ${results.at(-1).htmlKB}KB`,
    );
    await context.close();
  }
}

await browser.close();
await mkdir(dirname(OUT), { recursive: true });
await writeFile(
  OUT,
  JSON.stringify(
    { base: BASE, generatedAt: new Date().toISOString(), results },
    null,
    2,
  ),
  "utf8",
);
console.log(`Perf audit: ${OUT}`);
