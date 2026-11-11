/**
 * Read-only duplicate-content + asset weight checks for the local build.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const BASE = (process.env.AUDIT_BASE || "http://127.0.0.1:3100").replace(
  /\/$/,
  "",
);
const OUT = resolve("reports/seo-performance/audit-duplicates-2026-11-11.json");

const strip = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const shingles = (text, n = 6) => {
  const words = text
    .toLowerCase()
    .split(" ")
    .filter((w) => w.length > 1);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++)
    set.add(words.slice(i, i + n).join(" "));
  return set;
};

const jaccard = (a, b) => {
  let inter = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const s of small) if (big.has(s)) inter++;
  return inter / (a.size + b.size - inter || 1);
};

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
);

const docs = [];
for (let i = 0; i < paths.length; i += 8) {
  const batch = paths.slice(i, i + 8);
  const results = await Promise.all(
    batch.map(async (path) => {
      const html = await (await fetch(`${BASE}${path}`)).text();
      const text = strip(html);
      return {
        path,
        text,
        shingles: shingles(text),
        words: text.split(" ").length,
      };
    }),
  );
  docs.push(...results);
}

const pairs = [];
for (let i = 0; i < docs.length; i++) {
  for (let j = i + 1; j < docs.length; j++) {
    const sim = jaccard(docs[i].shingles, docs[j].shingles);
    if (sim >= 0.5)
      pairs.push({
        a: docs[i].path,
        b: docs[j].path,
        similarity: Number(sim.toFixed(3)),
      });
  }
}
pairs.sort((x, y) => y.similarity - x.similarity);

const byCode = (path) => {
  const m = /\/(?:goi-cuoc-viettel\/)(?:tra-sau\/)?([^/]+)$/.exec(path);
  return m ? m[1] : null;
};
const traSau = docs.filter((d) =>
  d.path.startsWith("/goi-cuoc-viettel/tra-sau/"),
);
const traSauCompare = traSau.map((d) => {
  const code = byCode(d.path);
  const twin = docs.find((o) => o.path === `/goi-cuoc-viettel/${code}`);
  return {
    path: d.path,
    twin: twin?.path ?? null,
    similarity: twin
      ? Number(jaccard(d.shingles, twin.shingles).toFixed(3))
      : null,
    words: d.words,
    twinWords: twin?.words ?? null,
  };
});

const imgUrls = new Set();
const sample = await (await fetch(`${BASE}/`)).text();
for (const m of sample.matchAll(/<img\b[^>]*src="([^"]+)"/gi)) {
  if (m[1].startsWith("/")) imgUrls.add(m[1]);
}
const imgSizes = [];
for (const url of imgUrls) {
  const res = await fetch(`${BASE}${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  imgSizes.push({
    url,
    bytes: buf.length,
    type: res.headers.get("content-type"),
  });
}
imgSizes.sort((a, b) => b.bytes - a.bytes);

const headers = {};
for (const path of ["/", "/tin-tuc", "/goi-cuoc-viettel/5G20"]) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "accept-encoding": "gzip, deflate, br" },
  });
  await res.body?.cancel();
  headers[path] = Object.fromEntries([...res.headers.entries()]);
}

const report = {
  base: BASE,
  generatedAt: new Date().toISOString(),
  duplicatePairs: pairs,
  duplicatePairCount: pairs.length,
  nearDuplicatePairs: {
    over90: pairs.filter((p) => p.similarity >= 0.9).length,
    over70: pairs.filter((p) => p.similarity >= 0.7).length,
    over50: pairs.length,
  },
  traSauCompare,
  homeImages: {
    count: imgSizes.length,
    totalBytes: imgSizes.reduce((n, i) => n + i.bytes, 0),
    largest: imgSizes.slice(0, 15),
  },
  headers,
};

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(report, null, 2), "utf8");
console.log(`Duplicate audit: ${OUT}`);
console.log(
  `Duplicate pairs >=0.5: ${pairs.length} (>=0.9: ${report.nearDuplicatePairs.over90}, >=0.7: ${report.nearDuplicatePairs.over70})`,
);
console.log(
  "Home images:",
  report.homeImages.count,
  "bytes",
  report.homeImages.totalBytes,
);
