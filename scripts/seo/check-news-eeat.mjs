const base = "http://127.0.0.1:3100";
const sm = await (await fetch(base + "/sitemap.xml")).text();
const paths = [...sm.matchAll(/<loc>([\s\S]*?)<\/loc>/g)]
  .map((m) => new URL(m[1]).pathname)
  .filter((p) => p.startsWith("/tin-tuc/"));

let withDate = 0;
let withMicrodata = 0;
let withDateProp = 0;
let withAuthorProp = 0;
const missing = [];
for (const p of paths) {
  const h = await (await fetch(base + p)).text();
  const text = h.replace(/<script[\s\S]*?<\/script>/g, " ");
  const hasDate = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/.test(text);
  if (hasDate) withDate++;
  else missing.push(p);
  if (/itemType="https:\/\/schema\.org\/NewsArticle"/.test(h)) withMicrodata++;
  if (/itemProp="datePublished"/.test(h)) withDateProp++;
  if (/itemProp="author"/.test(h)) withAuthorProp++;
}
console.log({
  newsPages: paths.length,
  withVisibleDate: withDate,
  missing,
  withMicrodata,
  withDateProp,
  withAuthorProp,
});
