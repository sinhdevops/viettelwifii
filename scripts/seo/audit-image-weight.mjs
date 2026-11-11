const base = "http://127.0.0.1:3100";
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
);

const sizeCache = new Map();
async function sizeOf(src) {
  if (sizeCache.has(src)) return sizeCache.get(src);
  try {
    const r = await fetch(base + src);
    const b = Buffer.from(await r.arrayBuffer());
    const v = {
      bytes: b.length,
      type: (r.headers.get("content-type") || "").split(";")[0],
    };
    sizeCache.set(src, v);
    return v;
  } catch {
    const v = { bytes: 0, type: "error" };
    sizeCache.set(src, v);
    return v;
  }
}

const rows = [];
for (let i = 0; i < paths.length; i += 8) {
  const batch = await Promise.all(
    paths.slice(i, i + 8).map(async (p) => {
      const h = await (await fetch(base + p)).text();
      const srcs = [
        ...new Set(
          [...h.matchAll(/<img\b[^>]*src="([^"]+)"/g)]
            .map((m) => m[1])
            .filter((s) => s.startsWith("/")),
        ),
      ];
      const sizes = await Promise.all(srcs.map(sizeOf));
      const total = sizes.reduce((n, s) => n + s.bytes, 0);
      const png = sizes
        .filter((s) => /png/.test(s.type))
        .reduce((n, s) => n + s.bytes, 0);
      const jpg = sizes
        .filter((s) => /jpe?g/.test(s.type))
        .reduce((n, s) => n + s.bytes, 0);
      const webp = sizes
        .filter((s) => /webp/.test(s.type))
        .reduce((n, s) => n + s.bytes, 0);
      const svg = sizes
        .filter((s) => /svg/.test(s.type))
        .reduce((n, s) => n + s.bytes, 0);
      return {
        path: p,
        uniqueImages: srcs.length,
        totalKB: Math.round(total / 1024),
        pngKB: Math.round(png / 1024),
        jpgKB: Math.round(jpg / 1024),
        webpKB: Math.round(webp / 1024),
        svgKB: Math.round(svg / 1024),
      };
    }),
  );
  rows.push(...batch);
}

rows.sort((a, b) => b.totalKB - a.totalKB);
const over1MB = rows.filter((r) => r.totalKB > 1024).length;
const over2MB = rows.filter((r) => r.totalKB > 2048).length;
console.log("pages:", rows.length, ">1MB:", over1MB, ">2MB:", over2MB);
console.log("top 15:");
for (const r of rows.slice(0, 15)) console.log(r);
const median = rows[Math.floor(rows.length / 2)].totalKB;
console.log("median KB:", median);
await import("node:fs/promises").then((fs) =>
  fs.writeFile(
    "reports/seo-performance/audit-image-weight-2026-11-11.json",
    JSON.stringify({ rows, over1MB, over2MB, medianKB: median }, null, 2),
  ),
);
