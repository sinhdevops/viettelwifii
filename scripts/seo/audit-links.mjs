/**
 * Internal link graph, orphan detection, heading order and entity/schema gap checks.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const BASE = process.env.AUDIT_BASE || "http://127.0.0.1:3100";
const OUT = resolve(
  process.env.AUDIT_OUT ||
    "reports/seo-performance/audit-links-2026-11-11.json",
);

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
let paths = [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
);
if (process.env.AUDIT_ALL === "1") {
  const raw = JSON.parse(await readFile("data/approved-routes.json", "utf8"));
  const contentPaths = (Array.isArray(raw) ? raw : raw.routes).map((entry) =>
    typeof entry === "string" ? entry : entry.path,
  );
  const registry = await readFile("src/lib/site-routes.ts", "utf8");
  const supportPaths = [...registry.matchAll(/\bpath:\s*"(\/[^"]+)"/g)].map(
    (m) => m[1],
  );
  paths = [...new Set([...contentPaths, ...supportPaths])];
  if (
    contentPaths.length !== 175 ||
    supportPaths.length !== 5 ||
    paths.length !== 180
  )
    throw new Error("Expected all 175+5 approved paths");
}

const pages = new Map();
const fetchAll = async (batch) =>
  Promise.all(
    batch.map(async (path) => {
      const html = await (await fetch(`${BASE}${path}`)).text();
      const body = (/<body\b[^>]*>([\s\S]*)<\/body>/i.exec(html) || [
        ,
        html,
      ])[1];
      const anchors = [
        ...body.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi),
      ].map((m) => ({
        href: m[1],
        text: m[2]
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim(),
      }));
      const headingSeq = [
        ...body.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi),
      ].map((m) => ({
        level: Number(m[1]),
        text: m[2]
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 80),
      }));
      return { path, anchors, headingSeq, html };
    }),
  );

for (let i = 0; i < paths.length; i += 10) {
  const batch = await fetchAll(paths.slice(i, i + 10));
  for (const p of batch) pages.set(p.path, p);
}

const known = new Set(paths);
const siteHosts = new Set([
  new URL(BASE).host,
  ...[...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
    (m) => new URL(m[1]).host,
  ),
]);
function internalPath(href, from) {
  if (!href || href.startsWith("#")) return null;
  try {
    const url = new URL(href, `${BASE}${from}`);
    if (!siteHosts.has(url.host) || !/^https?:$/.test(url.protocol))
      return null;
    const path = url.pathname === "/" ? "/" : url.pathname.replace(/\/$/, "");
    return known.has(path) ? path : null;
  } catch {
    return null;
  }
}
const edgeMap = new Map();

for (const [from, page] of pages) {
  for (const a of page.anchors) {
    const target = internalPath(a.href, from);
    if (!target) continue;
    if (target === from) continue;
    if (!edgeMap.has(target)) edgeMap.set(target, new Set());
    edgeMap.get(target).add(from);
  }
}

const orphans = paths.filter((p) => !edgeMap.has(p) && p !== "/");
const weak = paths
  .map((p) => ({ path: p, inbound: edgeMap.get(p)?.size ?? 0 }))
  .sort((a, b) => a.inbound - b.inbound);

// BFS click depth from home
const outMap = new Map();
for (const [from, page] of pages) {
  const set = new Set();
  for (const a of page.anchors) {
    const target = internalPath(a.href, from);
    if (target && target !== from) set.add(target);
  }
  outMap.set(from, set);
}
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const cur = queue.shift();
  for (const next of outMap.get(cur) || []) {
    if (!depth.has(next)) {
      depth.set(next, depth.get(cur) + 1);
      queue.push(next);
    }
  }
}
const unreachable = paths.filter((p) => !depth.has(p));
const depthHistogram = {};
for (const d of depth.values())
  depthHistogram[d] = (depthHistogram[d] || 0) + 1;
const deepPages = [...depth.entries()]
  .filter(([, d]) => d >= 4)
  .map(([p, d]) => ({ path: p, depth: d }));

const headingIssues = [];
for (const [path, page] of pages) {
  let prev = 0;
  for (const h of page.headingSeq) {
    if (prev && h.level > prev + 1) {
      headingIssues.push({
        path,
        skippedFrom: prev,
        to: h.level,
        text: h.text,
      });
    }
    prev = h.level;
  }
}

const genericAnchorText = new Map();
for (const [from, page] of pages) {
  for (const a of page.anchors) {
    const t = a.text.toLowerCase();
    if (
      [
        "xem thêm",
        "chi tiết",
        "đọc thêm",
        "xem chi tiết",
        "tìm hiểu thêm",
        "here",
        "click here",
        "xem ngay",
        "",
      ].includes(t)
    ) {
      genericAnchorText.set(from, (genericAnchorText.get(from) || 0) + 1);
    }
  }
}

const entitySignals = {
  organizationSchema: [...pages.values()]
    .filter((p) => /"@type"\s*:\s*"Organization"/.test(p.html))
    .map((p) => p.path),
  websiteSchema: [...pages.values()]
    .filter((p) => /"@type"\s*:\s*"WebSite"/.test(p.html))
    .map((p) => p.path),
  breadcrumbSchema: [...pages.values()]
    .filter((p) => /"@type"\s*:\s*"BreadcrumbList"/.test(p.html))
    .map((p) => p.path),
  articleSchema: [...pages.values()]
    .filter((p) => /"@type"\s*:\s*"Article"/.test(p.html))
    .map((p) => p.path),
  faqSchema: [...pages.values()]
    .filter((p) => /"@type"\s*:\s*"FAQPage"/.test(p.html))
    .map((p) => p.path),
  productSchema: [...pages.values()]
    .filter((p) => /"@type"\s*:\s*"Product"/.test(p.html))
    .map((p) => p.path),
  localBusiness: [...pages.values()]
    .filter((p) => /"@type"\s*:\s*"LocalBusiness"/.test(p.html))
    .map((p) => p.path),
};
const pagesWithFaqMarkup = [...pages.values()].filter((p) =>
  /<h[23][^>]*>[^<]*\?/i.test(p.html),
).length;

const report = {
  base: BASE,
  generatedAt: new Date().toISOString(),
  totals: {
    pages: paths.length,
    orphans: orphans.length,
    unreachableFromHome: unreachable.length,
    maxDepth: Math.max(...depth.values()),
    pagesDepth4Plus: deepPages.length,
    headingSkipIssues: headingIssues.length,
  },
  orphans,
  unreachable,
  depthHistogram,
  deepPages,
  weakInbound: weak.slice(0, 30),
  headingIssues: headingIssues.slice(0, 25),
  genericAnchorText: [...genericAnchorText.entries()].map(([path, n]) => ({
    path,
    count: n,
  })),
  entitySignals: Object.fromEntries(
    Object.entries(entitySignals).map(([k, v]) => [
      k,
      { count: v.length, sample: v.slice(0, 3) },
    ]),
  ),
  pagesWithFaqMarkup,
};

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(report, null, 2), "utf8");
console.log(`Link audit: ${OUT}`);
console.log(JSON.stringify(report.totals, null, 2));
console.log("depth:", depthHistogram);
console.log("schema:", JSON.stringify(report.entitySignals));
