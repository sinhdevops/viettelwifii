/** Direct Node 24 smoke checks, independent of the shared Vitest/Vite config loader. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

// Test-only default; an explicitly supplied deployment env takes precedence.
process.env.NEXT_PUBLIC_SITE_URL ??= "https://fixture.example";
const transpile = async (file) => ts.transpileModule(await readFile(new URL(file, import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText;
const moduleUrl = (source) => `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const configUrl = moduleUrl(await transpile("../../lib/site-config.ts"));
const { siteConfig } = await import(configUrl);
// Resolve this helper's single runtime dependency in memory, without changing tsconfig.
const seoSource = (await transpile("./page-seo.ts")).replace('"../../lib/site-config"', JSON.stringify(configUrl));
const { buildPageJsonLd, buildPageMetadata, serializeJsonLd } = await import(moduleUrl(seoSource));

const path = "/goi-cuoc-viettel/5G20";
const draft = {
  status: "draft",
  kind: "package",
  title: "Gói 5G20 Viettel",
  heading: "Gói cước Viettel 5G20",
  description: "Thông tin gói 5G20",
  sections: [],
  source: { url: siteConfig.url(path) },
};
const base = { path, approvedRoutes: [path], get siteUrl() { return siteConfig.origin; } };
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
check(buildPageMetadata({ ...base, page: ready, siteLive: true }).alternates, { canonical: siteConfig.url(path) });
for (const siteUrl of [undefined, "http://localhost:4191", siteConfig.origin.replace("https:", "http:"), "https://mismatch.invalid"]) {
  assert.throws(() => buildPageMetadata({ ...base, page: ready, siteLive: true, siteUrl }));
  assert.throws(() => buildPageJsonLd({ ...base, page: ready, siteLive: true, siteUrl }));
  assertions += 2;
}

const originalOrigin = process.env.NEXT_PUBLIC_SITE_URL;
try {
  process.env.NEXT_PUBLIC_SITE_URL = "https://custom-deployment.example:8443/";
  const context = { ...base, page: ready, siteLive: true };
  check(buildPageMetadata(context).alternates, { canonical: siteConfig.url(path) });
  check(buildPageJsonLd(context).url, siteConfig.url(path));
  assert.throws(() => buildPageMetadata({ ...context, siteUrl: originalOrigin }));
  assert.throws(() => buildPageJsonLd({ ...context, siteUrl: originalOrigin }));
  assertions += 2;
  for (const origin of ["http://public.example", "https://localhost", "https://preview.localhost", "https://preview.local", "https://127.0.0.1", "https://0.0.0.0", "https://[::1]"]) {
    process.env.NEXT_PUBLIC_SITE_URL = origin;
    const unsafe = { ...base, page: ready, siteLive: true };
    assert.throws(() => buildPageMetadata(unsafe));
    assert.throws(() => buildPageJsonLd(unsafe));
    assertions += 2;
  }
} finally {
  process.env.NEXT_PUBLIC_SITE_URL = originalOrigin;
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
