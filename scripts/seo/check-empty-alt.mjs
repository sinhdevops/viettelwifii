const base = "http://127.0.0.1:3100";
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
const paths = [...sitemap.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
  (m) => new URL(m[1]).pathname,
);
let total = 0;
let ariaHidden = 0;
const bad = [];
for (let i = 0; i < paths.length; i += 12) {
  const batch = await Promise.all(
    paths.slice(i, i + 12).map((p) => fetch(base + p).then((r) => r.text())),
  );
  for (const h of batch) {
    for (const m of h.matchAll(/<img\b[^>]*>/g)) {
      if (!/\balt=""/.test(m[0])) continue;
      total++;
      if (/aria-hidden="true"/.test(m[0])) ariaHidden++;
      else if (bad.length < 5) bad.push(m[0].slice(0, 200));
    }
  }
}
console.log({ totalEmptyAlt: total, withAriaHidden: ariaHidden, bad });
