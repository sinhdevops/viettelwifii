import { writeFile } from "node:fs/promises";

const base = "http://127.0.0.1:3100";
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
);

// 1. compressed HTML size + og/twitter specifics
const compression = [];
for (const path of [
  "/",
  "/tin-tuc",
  "/internet",
  "/goi-cuoc-viettel/5G20",
  "/tin-tuc/goi-cuoc-data-4g-viettel-2026",
]) {
  const res = await fetch(`${base}${path}`, {
    headers: { "accept-encoding": "gzip, br" },
  });
  const buf = Buffer.from(await res.arrayBuffer());
  compression.push({
    path,
    gzipKB: Math.round(buf.length / 1024),
    encoding: res.headers.get("content-encoding"),
  });
}

// 2. external links
const external = new Map();
for (let i = 0; i < paths.length; i += 10) {
  const batch = await Promise.all(
    paths
      .slice(i, i + 10)
      .map(async (p) => ({
        p,
        html: await (await fetch(`${base}${p}`)).text(),
      })),
  );
  for (const { html } of batch) {
    for (const m of html.matchAll(/<a\b[^>]*href="(https?:\/\/[^"]+)"/gi)) {
      const host = new URL(m[1]).host;
      if (!external.has(host)) external.set(host, new Set());
      external.get(host).add(m[1].slice(0, 160));
    }
  }
}
const externalList = [...external.entries()].map(([host, urls]) => ({
  host,
  count: urls.size,
  sample: [...urls].slice(0, 3),
}));

// 3. image offenders on a few heavy pages
const heavy = ["/", "/tin-tuc", "/internet", "/goi-cuoc-roaming"];
const imageReport = [];
for (const p of heavy) {
  const html = await (await fetch(`${base}${p}`)).text();
  const srcs = [
    ...new Set(
      [...html.matchAll(/<img\b[^>]*src="([^"]+)"/gi)].map((m) => m[1]),
    ),
  ];
  const sizes = [];
  for (const src of srcs) {
    try {
      const r = await fetch(`${base}${src}`);
      const b = Buffer.from(await r.arrayBuffer());
      sizes.push({
        src,
        KB: Math.round(b.length / 1024),
        type: r.headers.get("content-type"),
      });
    } catch {}
  }
  sizes.sort((a, b) => b.KB - a.KB);
  imageReport.push({
    path: p,
    uniqueImages: sizes.length,
    totalKB: sizes.reduce((n, s) => n + s.KB, 0),
    largest: sizes.slice(0, 8),
    pngCount: sizes.filter((s) => /png/.test(s.type)).length,
    jpgCount: sizes.filter((s) => /jpeg/.test(s.type)).length,
    webpCount: sizes.filter((s) => /webp/.test(s.type)).length,
    svgCount: sizes.filter((s) => /svg/.test(s.type)).length,
  });
}

// 4. OG tags of home
const homeHtml = await (await fetch(`${base}/`)).text();
const ogTags = [
  ...homeHtml.matchAll(
    /<meta\b[^>]*(?:property|name)="((?:og|twitter):[^"]+)"[^>]*>/gi,
  ),
].map((m) => m[0]);
const linkTags = [...homeHtml.matchAll(/<link\b[^>]*>/gi)]
  .map((m) => m[0])
  .filter((t) => /canonical|alternate|icon|manifest/.test(t));

await writeFile(
  "reports/seo-performance/audit-extra-2026-11-11.json",
  JSON.stringify(
    {
      compression,
      externalList,
      imageReport,
      ogTags,
      linkTags,
      generatedAt: new Date().toISOString(),
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify(
    {
      compression,
      externalList,
      imageReport: imageReport.map((i) => ({
        path: i.path,
        totalKB: i.totalKB,
        largest: i.largest[0],
        png: i.pngCount,
        jpg: i.jpgCount,
        webp: i.webpCount,
        svg: i.svgCount,
      })),
    },
    null,
    2,
  ),
);
console.log("ogTags", ogTags);
console.log("linkTags", linkTags);
