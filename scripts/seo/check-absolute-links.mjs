const base = "http://127.0.0.1:3100";
const sm = await (await fetch(base + "/sitemap.xml")).text();
const paths = [...sm.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
);
const found = [];
for (let i = 0; i < paths.length; i += 12) {
  const batch = await Promise.all(
    paths
      .slice(i, i + 12)
      .map(async (p) => ({ p, h: await (await fetch(base + p)).text() })),
  );
  for (const { p, h } of batch) {
    const n = (h.match(/<a\b[^>]*href="http:\/\/localhost:3000[^"]*"/g) || [])
      .length;
    if (n) found.push({ path: p, count: n });
  }
}
console.log("pages with absolute internal links:", found.length);
console.log(found.slice(0, 20));
console.log(
  "total:",
  found.reduce((n, f) => n + f.count, 0),
);

// header/footer absolute?
const home = await (await fetch(base + "/")).text();
const header = home.match(/<header[\s\S]*?<\/header>/)?.[0] ?? "";
console.log(
  "header absolute links:",
  (header.match(/http:\/\/localhost:3000/g) || []).length,
);
console.log(header.slice(0, 300));
