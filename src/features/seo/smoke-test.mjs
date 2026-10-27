/** Direct Node 24 smoke checks, independent of the shared Vitest/Vite config loader. */
import assert from "node:assert/strict";
import { buildPageJsonLd, buildPageMetadata, serializeJsonLd } from "./page-seo.ts";

const path = "/goi-cuoc-viettel/5G20";
const draft = {
  status: "draft",
  kind: "package",
  title: "Gói 5G20 Viettel",
  heading: "Gói cước Viettel 5G20",
  description: "Thông tin gói 5G20",
  sections: [],
  source: { url: "https://www.viettelup.vn/goi-cuoc-viettel/5G20" },
};
const base = { path, approvedRoutes: [path], siteUrl: "https://deploy.example" };
let assertions = 0;
const check = (actual, expected) => { assert.deepEqual(actual, expected); assertions++; };

for (const siteLive of [false, true]) {
  const ctx = { ...base, page: draft, siteLive };
  check(buildPageMetadata(ctx).robots, { index: false, follow: false });
  check(buildPageMetadata(ctx).alternates, undefined);
  check(buildPageJsonLd(ctx), null);
}

const ready = { ...draft, status: "ready" };
check(buildPageMetadata({ ...base, page: ready, approvedRoutes: [], siteLive: true }).robots, { index: false, follow: false });
check(buildPageMetadata({ ...base, page: null, siteLive: true }).robots, { index: false, follow: false });
check(buildPageMetadata({ ...base, page: ready, siteLive: true }).alternates, { canonical: "https://deploy.example/goi-cuoc-viettel/5G20" });
for (const siteUrl of [undefined, "http://localhost:4191", "https://www.viettelup.vn"]) {
  assert.throws(() => buildPageMetadata({ ...base, page: ready, siteLive: true, siteUrl }));
  assertions++;
}

const articlePage = {
  ...ready,
  kind: "news-article",
  heading: "Chủ đề <script>",
  article: { blocks: [{ type: "paragraph", text: "Thông tin nguồn" }] },
};
const article = buildPageJsonLd({ ...base, page: articlePage, siteLive: true });
check(article["@type"], "Article");
assert.match(serializeJsonLd(article), /\\u003cscript>/);
assert.doesNotMatch(serializeJsonLd(article), /datePublished|author|offers|aggregateRating|price/);
assertions += 2;
check(buildPageJsonLd({ ...base, page: { ...ready, kind: "news-list" }, siteLive: true })["@type"], "CollectionPage");
check(buildPageJsonLd({ ...base, page: { ...ready, kind: "internet" }, siteLive: true })["@type"], "WebPage");
console.log(`SEO helper smoke: ${assertions} assertions passed`);
