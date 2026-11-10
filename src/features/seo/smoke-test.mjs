/** Direct Node smoke checks, independent of the shared Vitest/Vite config loader. */
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const flagNames = [
  "SITE_LIVE",
  "CONTENT_RIGHTS_CLEARED",
  "SITE_IDENTITY_VERIFIED",
  "PRODUCT_FACTS_VERIFIED",
  "PRIVACY_POLICY_APPROVED",
];
const previousEnv = Object.fromEntries(
  [...flagNames, "PRIVACY_POLICY_VERSION", "NEXT_PUBLIC_SITE_URL"].map((name) => [
    name,
    process.env[name],
  ]),
);

const transpile = async (file) =>
  ts.transpileModule(
    await readFile(new URL(file, import.meta.url), "utf8"),
    {
      compilerOptions: {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ES2022,
      },
    },
  ).outputText;
const moduleUrl = (source) =>
  `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;

process.env.NEXT_PUBLIC_SITE_URL = "https://fixture.example";
for (const flag of flagNames) process.env[flag] = "true";
process.env.PRIVACY_POLICY_VERSION = "v1";

try {
  const configUrl = moduleUrl(await transpile("../../lib/site-config.ts"));
  const routesUrl = moduleUrl(await transpile("../../lib/approved-routes.ts"));
  const siteRoutesUrl = moduleUrl(await transpile("../../lib/site-routes.ts"));
  const { siteConfig } = await import(configUrl);
  const seoSource = (await transpile("./page-seo.ts"))
    .replace('"@/lib/approved-routes"', JSON.stringify(routesUrl))
    .replace('"@/lib/site-config"', JSON.stringify(configUrl))
    .replace('"@/lib/site-routes"', JSON.stringify(siteRoutesUrl));
  const { buildPageJsonLd, buildPageMetadata, serializeJsonLd } = await import(
    moduleUrl(seoSource)
  );

  const path = "/goi-cuoc-viettel/5G20";
  const draft = {
    status: "draft",
    kind: "package",
    title: "Gói 5G20 Viettel",
    heading: "Gói cước Viettel 5G20",
    description: "Thông tin gói 5G20",
    sections: [],
    source: { url: siteConfig.url(path), verifiedFields: [] },
  };
  const ready = { ...draft, status: "ready" };
  const base = {
    path,
    approvedRoutes: [path],
    get siteUrl() {
      return siteConfig.origin;
    },
  };
  let assertions = 0;
  const check = (actual, expected) => {
    assert.deepEqual(actual, expected);
    assertions++;
  };
  const expectClosed = (context) => {
    check(buildPageMetadata(context).robots, { index: false, follow: false });
    check(buildPageMetadata(context).alternates, undefined);
    check(buildPageJsonLd(context), null);
  };

  // Every flag must be exact true; drafts remain blocked even when gates are open.
  for (const failedFlag of flagNames) {
    process.env[failedFlag] = "TRUE";
    expectClosed({ ...base, page: ready });
    process.env[failedFlag] = "true";
  }
  process.env.SITE_LIVE = "false";
  expectClosed({ ...base, page: ready });
  process.env.SITE_LIVE = "true";
  for (const version of ["", "unapproved", "bad version", "x".repeat(65)]) {
    process.env.PRIVACY_POLICY_VERSION = version;
    expectClosed({ ...base, page: ready });
  }
  process.env.PRIVACY_POLICY_VERSION = "v1";
  check(buildPageMetadata({ ...base, page: draft }).robots, {
    index: false,
    follow: false,
  });
  check(buildPageJsonLd({ ...base, page: draft }), null);

  expectClosed({ ...base, page: ready, approvedRoutes: [] });
  expectClosed({ ...base, page: null });
  check(
    buildPageMetadata({ ...base, page: ready }).alternates,
    { canonical: siteConfig.url(path) },
  );
  check(buildPageMetadata({ ...base, page: ready }).robots, {
    index: true,
    follow: true,
  });

  for (const siteUrl of [
    "http://localhost:4191",
    "http://public.example",
    "https://localhost",
    "https://preview.localhost",
    "https://preview.local",
    "https://127.0.0.1",
    "https://0.0.0.0",
    "https://[::1]",
    "https://mismatch.invalid",
  ]) {
    assert.throws(() => buildPageMetadata({ ...base, page: ready, siteUrl }));
    assert.throws(() => buildPageJsonLd({ ...base, page: ready, siteUrl }));
    assertions += 2;
  }

  const originBeforeMissingCheck = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    const noOriginContext = {
      path,
      approvedRoutes: [path],
      page: ready,
      siteUrl: undefined,
    };
    assert.throws(() => buildPageMetadata(noOriginContext));
    assert.throws(() => buildPageJsonLd(noOriginContext));
    assertions += 2;
  } finally {
    process.env.NEXT_PUBLIC_SITE_URL = originBeforeMissingCheck;
  }

  const oldOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    process.env.NEXT_PUBLIC_SITE_URL = "https://custom-deployment.example:8443/";
    const context = { ...base, page: ready };
    check(buildPageMetadata(context).alternates, {
      canonical: siteConfig.url(path),
    });
    check(buildPageJsonLd(context).url, siteConfig.url(path));
    assert.throws(() =>
      buildPageMetadata({ ...context, siteUrl: oldOrigin }),
    );
    assert.throws(() => buildPageJsonLd({ ...context, siteUrl: oldOrigin }));
    assertions += 2;
  } finally {
    process.env.NEXT_PUBLIC_SITE_URL = oldOrigin;
  }

  const unverifiedArticle = {
    ...ready,
    kind: "news-article",
    heading: "Chủ đề <SEO>",
    article: { blocks: [{ type: "paragraph", text: "Thông tin nguồn" }] },
  };
  check(
    buildPageJsonLd({ ...base, page: unverifiedArticle })["@type"],
    "WebPage",
  );
  const article = {
    ...unverifiedArticle,
    article: {
      blocks: [{ type: "paragraph", text: "Thông tin nguồn" }],
      author: "Tác giả đã xác minh",
      publishedLabel: "2026-10-27",
    },
    source: {
      url: siteConfig.url(path),
      verifiedFields: ["article.author", "article.publishedLabel"],
    },
  };
  const articleSchema = buildPageJsonLd({ ...base, page: article });
  check(articleSchema["@type"], "Article");
  assert.match(serializeJsonLd(articleSchema), /\\u003cSEO>/);
  assert.doesNotMatch(serializeJsonLd(articleSchema), /offers|aggregateRating|price/);
  assertions += 2;
  check(
    buildPageJsonLd({ ...base, page: { ...ready, kind: "news-list" } })[
      "@type"
    ],
    "CollectionPage",
  );
  check(
    buildPageJsonLd({ ...base, page: { ...ready, kind: "internet" } })[
      "@type"
    ],
    "WebPage",
  );
  console.log(`SEO helper smoke: ${assertions} assertions passed`);
} finally {
  for (const [name, value] of Object.entries(previousEnv)) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
}
