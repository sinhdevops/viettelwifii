/**
 * Read-only SEO audit crawler for the local production build.
 * Usage: node scripts/seo/audit-site.mjs [--base=http://localhost:3100] [--out=path]
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const args = Object.fromEntries(
  process.argv
    .slice(2)
    .filter((a) => a.startsWith("--"))
    .map((a) => {
      const [k, ...v] = a.slice(2).split("=");
      return [k, v.join("=") || "true"];
    }),
);

const BASE = (args.base || "http://localhost:3100").replace(/\/$/, "");
const OUT = resolve(
  args.out || "reports/seo-performance/audit-2026-11-11.json",
);
const CONCURRENCY = Number(args.concurrency || 8);

const str = (s) => (s == null ? "" : String(s));
const decode = (s) =>
  str(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));

function stripTags(html) {
  return decode(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
      .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
      .replace(/<noscript\b[\s\S]*?<\/noscript>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function matchAll(re, s) {
  const out = [];
  let m;
  while ((m = re.exec(s))) out.push(m);
  return out;
}

function attr(tag, name) {
  const m = new RegExp(
    `\\b${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`,
    "i",
  ).exec(tag);
  return m ? decode(m[2] ?? m[3] ?? m[4] ?? "") : null;
}

function analyzeHtml(html, path) {
  const head = (/<head\b[^>]*>([\s\S]*?)<\/head>/i.exec(html) || [, ""])[1];
  const bodyHtml = (/<body\b[^>]*>([\s\S]*)<\/body>/i.exec(html) || [
    ,
    html,
  ])[1];

  const title = decode(
    (/<title[^>]*>([\s\S]*?)<\/title>/i.exec(head) || [, ""])[1],
  ).trim();

  const metaTags = matchAll(/<meta\b[^>]*>/gi, head);
  const meta = {};
  for (const tag of metaTags) {
    const name = attr(tag, "name") || attr(tag, "property");
    const content = attr(tag, "content");
    if (name) (meta[name.toLowerCase()] ??= []).push(content ?? "");
  }
  const metaOne = (k) => meta[k]?.[0] ?? null;

  const linkTags = matchAll(/<link\b[^>]*>/gi, head);
  const linkRels = {};
  for (const tag of linkTags) {
    const rel = (attr(tag, "rel") || "").toLowerCase();
    if (!rel) continue;
    (linkRels[rel] ??= []).push({
      href: attr(tag, "href"),
      hreflang: attr(tag, "hreflang"),
      as: attr(tag, "as"),
      sizes: attr(tag, "sizes"),
    });
  }

  const canonical = linkRels.canonical?.[0]?.href ?? null;
  const alternates = (linkRels.alternate || []).filter((l) => l.hreflang);

  const jsonLd = [];
  const jsonLdErrors = [];
  for (const m of matchAll(
    /<script\b[^>]*type\s*=\s*"application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
    html,
  )) {
    const raw = m[1].trim();
    if (!raw) continue;
    try {
      const parsed = JSON.parse(raw);
      const list = Array.isArray(parsed) ? parsed : [parsed];
      for (const item of list) {
        jsonLd.push({
          type: item?.["@type"] ?? null,
          context: item?.["@context"] ?? null,
          keys: item && typeof item === "object" ? Object.keys(item) : [],
          id: item?.["@id"] ?? null,
          url: item?.url ?? null,
        });
      }
    } catch (e) {
      jsonLdErrors.push(str(e.message).slice(0, 200));
    }
  }

  const h1s = matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, bodyHtml).map((m) =>
    stripTags(m[1]),
  );
  const h2s = matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, bodyHtml).map((m) =>
    stripTags(m[1]),
  );
  const h3Count = matchAll(/<h3\b[^>]*>/gi, bodyHtml).length;

  const imgTags = matchAll(/<img\b[^>]*>/gi, bodyHtml);
  const images = imgTags.map((tag) => ({
    src: attr(tag, "src"),
    alt: attr(tag, "alt"),
    width: attr(tag, "width"),
    height: attr(tag, "height"),
    loading: attr(tag, "loading"),
    fetchpriority: attr(tag, "fetchpriority"),
    srcset: attr(tag, "srcset") ? true : false,
    remote: /^https?:\/\//i.test(attr(tag, "src") || ""),
  }));

  const anchorTags = matchAll(/<a\b[^>]*>/gi, bodyHtml);
  const anchors = anchorTags.map((tag) => ({
    href: attr(tag, "href"),
    rel: attr(tag, "rel"),
    target: attr(tag, "target"),
    text: "",
  }));
  const aHrefs = anchors.map((a) => a.href).filter(Boolean);

  const scriptTags = matchAll(/<script\b[^>]*>/gi, html);
  const scriptSrcs = scriptTags.map((t) => attr(t, "src")).filter(Boolean);

  const text = stripTags(bodyHtml);
  const words = text ? text.split(/\s+/).filter(Boolean).length : 0;

  const htmlMeta = {
    lang: (/<html\b[^>]*\blang\s*=\s*"([^"]*)"/i.exec(html) || [, null])[1],
    charset: /<meta\b[^>]*charset/i.test(head),
    viewport: metaOne("viewport"),
  };

  return {
    path,
    title,
    titleLength: title.length,
    description: metaOne("description"),
    descriptionLength: (metaOne("description") || "").length,
    keywords: metaOne("keywords"),
    robots: metaOne("robots"),
    googlebot: metaOne("googlebot"),
    canonical,
    hreflang: alternates,
    og: {
      title: metaOne("og:title"),
      description: metaOne("og:description"),
      image: metaOne("og:image"),
      imageAlt: metaOne("og:image:alt"),
      url: metaOne("og:url"),
      type: metaOne("og:type"),
      siteName: metaOne("og:site_name"),
      locale: metaOne("og:locale"),
    },
    twitter: {
      card: metaOne("twitter:card"),
      title: metaOne("twitter:title"),
      description: metaOne("twitter:description"),
      image: metaOne("twitter:image"),
    },
    metaOther: Object.keys(meta).filter(
      (k) =>
        !/^(description|viewport|robots|googlebot|keywords|og:|twitter:)/.test(
          k,
        ),
    ),
    jsonLd,
    jsonLdErrors,
    h1: h1s,
    h2: h2s,
    h3Count,
    words,
    htmlMeta,
    icons: (linkRels.icon || []).map((i) => i.href),
    manifest: (linkRels.manifest || [])[0]?.href ?? null,
    preloads: (linkRels.preload || []).map((l) => ({ href: l.href, as: l.as })),
    scripts: {
      total: scriptTags.length,
      external: scriptSrcs,
      inline: scriptTags.length - scriptSrcs.length,
    },
    stylesheetCount: (linkRels.stylesheet || []).length,
    images,
    counts: {
      img: images.length,
      imgMissingAlt: images.filter((i) => i.alt === null).length,
      imgEmptyAlt: images.filter((i) => i.alt === "").length,
      imgNoDimensions: images.filter((i) => !i.width || !i.height).length,
      imgRemote: images.filter((i) => i.remote).length,
      imgLazy: images.filter((i) => (i.loading || "").toLowerCase() === "lazy")
        .length,
      anchors: anchors.length,
      internalAnchors: aHrefs.filter((h) => h.startsWith("/")).length,
      hashOnlyAnchors: aHrefs.filter((h) => h.startsWith("#")).length,
      externalAnchors: aHrefs.filter((h) => /^https?:\/\//i.test(h)).length,
      jsonLdBlocks: jsonLd.length,
      h2: h2s.length,
      h3: h3Count,
    },
    anchors,
  };
}

async function fetchPage(path, { retried = false } = {}) {
  const url = `${BASE}${path}`;
  const started = Date.now();
  try {
    const res = await fetch(url, {
      redirect: "manual",
      headers: { "user-agent": "seo-audit-local/1.0", accept: "text/html,*/*" },
    });
    const buf = Buffer.from(await res.arrayBuffer());
    const ms = Date.now() - started;
    const contentType = res.headers.get("content-type") || "";
    if (res.status >= 500 && !retried) {
      await new Promise((r) => setTimeout(r, 500));
      return fetchPage(path, { retried: true });
    }
    return {
      path,
      status: res.status,
      location: res.headers.get("location"),
      ms,
      bytes: buf.length,
      contentType,
      cacheControl: res.headers.get("cache-control"),
      xNextCache: res.headers.get("x-nextjs-cache"),
      html: contentType.includes("text/html") ? buf.toString("utf8") : null,
    };
  } catch (e) {
    return {
      path,
      status: 0,
      error: str(e.message),
      ms: Date.now() - started,
      bytes: 0,
    };
  }
}

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  const workers = Array.from(
    { length: Math.min(limit, items.length) },
    async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx], idx);
      }
    },
  );
  await Promise.all(workers);
  return out;
}

const baseUrl = new URL(BASE);
const startedAt = new Date().toISOString();

const robotsRes = await fetch(`${BASE}/robots.txt`);
const robotsText = await robotsRes.text();
const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
const sitemapText = await sitemapRes.text();
const sitemapPaths = [...sitemapText.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
  (m) => new URL(decode(m[1])).pathname,
);
const sitemapHosts = [
  ...new Set(
    [...sitemapText.matchAll(/<loc>([\s\S]*?)<\/loc>/g)].map(
      (m) => new URL(decode(m[1])).host,
    ),
  ),
];

// Crawl the exact approved manifest even when a draft is excluded from sitemap.
let crawlPaths = sitemapPaths;
if (args.all === "true") {
  const raw = JSON.parse(await readFile("data/approved-routes.json", "utf8"));
  const contentPaths = (Array.isArray(raw) ? raw : raw.routes).map((entry) =>
    typeof entry === "string" ? entry : entry.path,
  );
  const siteRegistry = await readFile("src/lib/site-routes.ts", "utf8");
  const supportPaths = [...siteRegistry.matchAll(/\bpath:\s*"(\/[^"]+)"/g)].map(
    (match) => match[1],
  );
  crawlPaths = [...new Set([...contentPaths, ...supportPaths])];
  if (
    contentPaths.length !== 175 ||
    supportPaths.length !== 5 ||
    crawlPaths.length !== 180
  ) {
    throw new Error(
      `Approved route inventory changed: ${contentPaths.length} + ${supportPaths.length}`,
    );
  }
}

const pages = await mapLimit(crawlPaths, CONCURRENCY, async (path) => {
  const res = await fetchPage(path);
  const analysis = res.html ? analyzeHtml(res.html, path) : null;
  return { ...res, html: undefined, analysis };
});

const linkTargets = new Set();
for (const page of pages) {
  for (const href of page.analysis?.anchors?.map((a) => a.href) || []) {
    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    )
      continue;
    if (/^https?:\/\//i.test(href)) {
      try {
        const u = new URL(href);
        if (u.host === baseUrl.host) linkTargets.add(u.pathname + u.search);
      } catch {}
      continue;
    }
    if (href.startsWith("/")) linkTargets.add(href.split("#")[0]);
  }
}

const linkResults = await mapLimit(
  [...linkTargets],
  CONCURRENCY,
  async (target) => {
    const res = await fetch(`${BASE}${target}`, {
      redirect: "manual",
      headers: { "user-agent": "seo-audit-local/1.0" },
    });
    await res.body?.cancel?.();
    return {
      target,
      status: res.status,
      location: res.headers.get("location"),
      contentType: res.headers.get("content-type"),
    };
  },
);
const brokenLinks = linkResults.filter(
  (l) => l.status >= 400 || (l.status >= 300 && l.status < 400),
);

const assetUrls = new Set();
for (const page of pages) {
  if (!page.analysis) continue;
  for (const s of page.analysis.scripts.external) assetUrls.add(s);
  for (const p of page.analysis.preloads)
    if (p.href?.startsWith("/")) assetUrls.add(p.href);
}
const assetResults = await mapLimit([...assetUrls], CONCURRENCY, async (u) => {
  try {
    const res = await fetch(`${BASE}${u}`, {
      headers: { "user-agent": "seo-audit-local/1.0" },
    });
    const buf = Buffer.from(await res.arrayBuffer());
    return {
      url: u,
      status: res.status,
      bytes: buf.length,
      type: res.headers.get("content-type"),
    };
  } catch (e) {
    return { url: u, status: 0, bytes: 0, error: str(e.message) };
  }
});

const extraChecks = {};
for (const path of [
  "/llms.txt",
  "/favicon.ico",
  "/manifest.webmanifest",
  "/opengraph-image",
  "/sitemap-index.xml",
]) {
  const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
  await res.body?.cancel?.();
  extraChecks[path] = {
    status: res.status,
    location: res.headers.get("location"),
    contentType: res.headers.get("content-type"),
  };
}

const summary = {
  base: BASE,
  startedAt,
  finishedAt: new Date().toISOString(),
  sitemap: {
    status: sitemapRes.status,
    contentType: sitemapRes.headers.get("content-type"),
    count: sitemapPaths.length,
    hosts: sitemapHosts,
    hasLastmod: /<lastmod>/.test(sitemapText),
    hasPriority: /<priority>/.test(sitemapText),
    hasChangefreq: /<changefreq>/.test(sitemapText),
  },
  inspectedApprovedPaths: crawlPaths.length,
  robots: {
    status: robotsRes.status,
    contentType: robotsRes.headers.get("content-type"),
    text: robotsText.trim(),
    hasSitemap: /^sitemap:/im.test(robotsText),
    hasHost: /^host:/im.test(robotsText),
  },
  totals: {
    pages: pages.length,
    status2xx: pages.filter((p) => p.status >= 200 && p.status < 300).length,
    nonIndexable: pages.filter((p) => /noindex/i.test(p.analysis?.robots || ""))
      .length,
    missingTitle: pages.filter((p) => !p.analysis?.title).length,
    missingDescription: pages.filter((p) => !p.analysis?.description).length,
    missingCanonical: pages.filter((p) => !p.analysis?.canonical).length,
    canonicalMismatch: pages.filter((p) => {
      const c = p.analysis?.canonical;
      if (!c) return false;
      try {
        return (
          new URL(c).pathname.replace(/\/$/, "") !== p.path.replace(/\/$/, "")
        );
      } catch {
        return true;
      }
    }).length,
    multipleH1: pages.filter((p) => (p.analysis?.h1.length || 0) > 1).length,
    noH1: pages.filter((p) => (p.analysis?.h1.length || 0) === 0).length,
    missingOgImage: pages.filter((p) => !p.analysis?.og.image).length,
    missingTwitterImage: pages.filter((p) => !p.analysis?.twitter.image).length,
    missingJsonLd: pages.filter(
      (p) => (p.analysis?.counts.jsonLdBlocks || 0) === 0,
    ).length,
    jsonLdParseErrors: pages.filter(
      (p) => (p.analysis?.jsonLdErrors.length || 0) > 0,
    ).length,
    thinContent: pages.filter((p) => (p.analysis?.words || 0) < 300).length,
    veryThinContent: pages.filter((p) => (p.analysis?.words || 0) < 150).length,
    imgMissingAlt: pages.reduce(
      (n, p) => n + (p.analysis?.counts.imgMissingAlt || 0),
      0,
    ),
    imgNoDimensions: pages.reduce(
      (n, p) => n + (p.analysis?.counts.imgNoDimensions || 0),
      0,
    ),
    imgRemote: pages.reduce(
      (n, p) => n + (p.analysis?.counts.imgRemote || 0),
      0,
    ),
    brokenInternalLinks: brokenLinks.length,
  },
  extraChecks,
};

const groupBy = (key, fn) => {
  const map = new Map();
  for (const p of pages) {
    if (!p.analysis) continue;
    const k = fn(p.analysis);
    if (k == null) continue;
    map.set(k, (map.get(k) || 0) + 1);
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
};

const dupTitles = groupBy("title", (a) => a.title).filter(([, n]) => n > 1);
const dupDescriptions = groupBy("description", (a) => a.description).filter(
  ([, n]) => n > 1,
);
const longTitles = pages
  .filter((p) => (p.analysis?.titleLength || 0) > 60)
  .map((p) => ({
    path: p.path,
    len: p.analysis.titleLength,
    title: p.analysis.title,
  }));
const shortTitles = pages
  .filter((p) => (p.analysis?.titleLength || 0) < 30)
  .map((p) => ({
    path: p.path,
    len: p.analysis.titleLength,
    title: p.analysis.title,
  }));
const longDescriptions = pages
  .filter((p) => (p.analysis?.descriptionLength || 0) > 160)
  .map((p) => ({ path: p.path, len: p.analysis.descriptionLength }));
const shortDescriptions = pages
  .filter((p) => p.analysis?.description && p.analysis.descriptionLength < 70)
  .map((p) => ({ path: p.path, len: p.analysis.descriptionLength }));

const report = {
  summary,
  distribution: {
    titleLength: groupBy("titleLength", (a) => a.titleLength),
    descriptionLength: groupBy("descriptionLength", (a) => a.descriptionLength),
    words: groupBy("words", (a) => a.words),
    jsonLdTypes: pages
      .flatMap((p) => p.analysis?.jsonLd.map((j) => j.type) || [])
      .reduce((m, t) => ((m[t] = (m[t] || 0) + 1), m), {}),
    robotsValues: groupBy("robots", (a) => a.robots || "(none)"),
    htmlLang: groupBy("lang", (a) => a.htmlMeta.lang),
  },
  duplicates: {
    titles: dupTitles,
    descriptions: dupDescriptions,
  },
  titleIssues: { long: longTitles, short: shortTitles },
  descriptionIssues: { long: longDescriptions, short: shortDescriptions },
  brokenLinks,
  assets: assetResults.sort((a, b) => b.bytes - a.bytes).slice(0, 40),
  pages: pages.map((p) => ({
    path: p.path,
    status: p.status,
    bytes: p.bytes,
    ms: p.ms,
    cacheControl: p.cacheControl,
    title: p.analysis?.title,
    titleLength: p.analysis?.titleLength,
    description: p.analysis?.description,
    descriptionLength: p.analysis?.descriptionLength,
    robots: p.analysis?.robots,
    canonical: p.analysis?.canonical,
    h1: p.analysis?.h1,
    h2Count: p.analysis?.counts.h2,
    words: p.analysis?.words,
    jsonLd: p.analysis?.jsonLd,
    jsonLdErrors: p.analysis?.jsonLdErrors,
    ogImage: p.analysis?.og.image,
    twitterCard: p.analysis?.twitter.card,
    images: p.analysis?.counts,
    scriptsTotal: p.analysis?.scripts.total,
    stylesheetCount: p.analysis?.stylesheetCount,
  })),
};

await mkdir(dirname(OUT), { recursive: true });
await writeFile(OUT, JSON.stringify(report, null, 2), "utf8");

console.log(`SEO audit: ${OUT}`);
console.log(`Pages: ${summary.totals.pages} (2xx ${summary.totals.status2xx})`);
console.log(
  `Missing title/desc/canonical: ${summary.totals.missingTitle}/${summary.totals.missingDescription}/${summary.totals.missingCanonical}`,
);
console.log(
  `H1 issues (0 / >1): ${summary.totals.noH1}/${summary.totals.multipleH1}`,
);
console.log(
  `JSON-LD missing/parse errors: ${summary.totals.missingJsonLd}/${summary.totals.jsonLdParseErrors}`,
);
console.log(
  `Thin <300 words: ${summary.totals.thinContent} (<150: ${summary.totals.veryThinContent})`,
);
console.log(`Broken internal links: ${summary.totals.brokenInternalLinks}`);
