const base = "http://127.0.0.1:3100";
const h = await (await fetch(base + "/goi-cuoc-viettel/5G20")).text();
const ext = [
  ...h.matchAll(
    /<a\b[^>]*href="https?:\/\/(?:viettel|km\.vtmoney|viettelmoney|tv360|mydio)[^"]*"[^>]*>/g,
  ),
].map((m) => m[0]);
console.log("outbound:", ext.length);
for (const t of ext.slice(0, 4)) console.log(t.slice(0, 230));

const mi = await (await fetch(base + "/goi-cuoc-viettel/MI50K")).text();
const eu = await (
  await fetch(
    base + "/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360",
  )
).text();
console.log(
  "\nMI50K desc:",
  mi.match(/<meta name="description" content="([^"]*)"/)?.[1],
);
console.log(
  "EURO desc :",
  eu.match(/<meta name="description" content="([^"]*)"/)?.[1],
);
console.log("MI50K title:", mi.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1]);
console.log(
  "MI50K h1:",
  (mi.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "")
    .replace(/<[^>]+>/g, "")
    .trim(),
);

const anySrcset = await (await fetch(base + "/internet")).text();
console.log(
  "\nsrcset on /internet:",
  (anySrcset.match(/srcset=/g) || []).length,
);
console.log(
  "/_next/image on /internet:",
  (anySrcset.match(/\/_next\/image/g) || []).length,
);
