#!/usr/bin/env node
// Independent, read-only HTTP/HTML inspection of the offline clone.
// GETs only HTML and CSS; HEADs other resources and navigation destinations.
// No browser interaction, script execution, POST, or form submission.

import { createHash } from "node:crypto";
import { readFile, open } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const ROUTES_FILE = join(ROOT, "data/approved-routes.json");
const VERIFY_FILE = join(ROOT, "work/web-clone-benchmark/VERIFY.json");
const MAX_HTML_BYTES = 12 * 1024 * 1024;
const MAX_CSS_BYTES = 6 * 1024 * 1024;
const MAX_SAMPLES = 35;
const attrsRe =
  /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g;

function options(argv) {
  const parsed = {
    base: "http://127.0.0.1:4179/",
    concurrency: 6,
    write: true,
  };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--base" && argv[i + 1]) parsed.base = argv[++i];
    else if (argv[i] === "--concurrency" && argv[i + 1])
      parsed.concurrency = Number(argv[++i]);
    else if (argv[i] === "--no-write") parsed.write = false;
    else throw new Error(`Invalid option: ${argv[i]}`);
  }
  const url = new URL(parsed.base);
  if (
    url.protocol !== "http:" ||
    !["127.0.0.1", "localhost", "[::1]"].includes(url.hostname)
  ) {
    throw new Error(
      "--base must be a loopback HTTP address; this checker only inspects local servers",
    );
  }
  if (
    !Number.isInteger(parsed.concurrency) ||
    parsed.concurrency < 1 ||
    parsed.concurrency > 24
  ) {
    throw new Error("--concurrency must be 1..24");
  }
  parsed.base = url.href;
  return parsed;
}

function decode(value) {
  return String(value).replace(
    /&(#(?:x[\da-f]+|\d+)|amp|quot|apos|lt|gt);/gi,
    (whole, entity) => {
      const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" };
      if (!entity.startsWith("#")) return named[entity.toLowerCase()] ?? whole;
      const hex = entity[1]?.toLowerCase() === "x";
      const n = Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isInteger(n) && n > 0 && n <= 0x10ffff
        ? String.fromCodePoint(n)
        : whole;
    },
  );
}

function attributes(tag) {
  const attrs = new Map();
  const body = tag.replace(/^<[\w:-]+\b/, "").replace(/\/?\s*>$/, "");
  for (const match of body.matchAll(attrsRe))
    attrs.set(
      match[1].toLowerCase(),
      decode(match[2] ?? match[3] ?? match[4] ?? ""),
    );
  return attrs;
}

function normalizeRoute(pathname) {
  let route = pathname.replace(/\/+$/, "") || "/";
  if (route.endsWith("/index.html")) route = route.slice(0, -11) || "/";
  return route;
}

function resolveLocal(value, base, origin) {
  if (
    !value ||
    /^(?:#|data:|blob:|javascript:|mailto:|tel:|sms:|about:)/i.test(
      value.trim(),
    )
  )
    return null;
  try {
    const url = new URL(decode(value.trim()), base);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    if (url.origin !== origin) return { external: true, url: url.href };
    url.hash = "";
    return {
      url: url.href,
      pathname: url.pathname,
      path: `${url.pathname}${url.search}`,
    };
  } catch {
    return { invalid: String(value).slice(0, 180) };
  }
}

function inferKind(value) {
  const path = value.split(/[?#]/)[0].toLowerCase();
  if (/\.css$/.test(path)) return "css";
  if (/\.(?:m?js|cjs)$/.test(path)) return "js";
  if (/\.(?:woff2?|ttf|otf|eot)$/.test(path)) return "font";
  if (/\.(?:png|jpe?g|webp|avif|gif|svg|ico|bmp)$/.test(path)) return "image";
  return "other";
}

function splitSrcset(value) {
  // srcset descriptors follow a space; ignore inline data: candidates.
  return value
    .split(/,\s*(?=(?:https?:|\/|\.\.?\/|[\w.-]+\/))/i)
    .map((candidate) => candidate.trim().split(/\s+/)[0])
    .filter(Boolean);
}

function cssRefs(css) {
  const refs = [];
  for (const match of css.matchAll(/url\(\s*(['"]?)(.*?)\1\s*\)/gi))
    refs.push(match[2].trim());
  for (const match of css.matchAll(/@import\s+(['"])(.*?)\1/gi))
    refs.push(match[2].trim());
  return refs;
}

function textContent(value) {
  return decode(value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " "))
    .trim()
    .slice(0, 180);
}

function parseHtml(html, base, origin, approved) {
  const resources = new Map();
  const links = new Map();
  const external = new Set();
  const invalid = new Set();
  const add = (value, kind, targetBase = base, dest = resources) => {
    const item = resolveLocal(value, targetBase, origin);
    if (!item) return;
    if (item.external) {
      external.add(item.url);
      return;
    }
    if (item.invalid) {
      invalid.add(item.invalid);
      return;
    }
    if (dest === links) {
      // Internal site links may point to assets, but should be checked as assets.
      const route = normalizeRoute(item.pathname);
      if (route.startsWith("/assets/") || route.startsWith("/_next/")) {
        resources.set(item.url, { url: item.url, kind: inferKind(item.path) });
      } else
        links.set(item.url, {
          url: item.url,
          path: item.path,
          route,
          approved: approved.has(route),
        });
    } else {
      const old = resources.get(item.url);
      if (!old || old.kind === "other")
        resources.set(item.url, {
          url: item.url,
          kind: kind ?? inferKind(item.path),
        });
    }
  };
  const tagRe = /<([a-z][\w:-]*)\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi;
  for (const tag of html.matchAll(tagRe)) {
    const name = tag[1].toLowerCase();
    const attrs = attributes(tag[0]);
    if (name === "a" && attrs.has("href"))
      add(attrs.get("href"), null, base, links);
    if (name === "script" && attrs.has("src")) add(attrs.get("src"), "js");
    if (name === "link" && attrs.has("href")) {
      const rel = attrs.get("rel")?.toLowerCase() || "";
      if (
        /\b(?:stylesheet|preload|prefetch|modulepreload|icon|manifest|apple-touch-icon)\b/.test(
          rel,
        )
      ) {
        const as = attrs.get("as")?.toLowerCase();
        add(
          attrs.get("href"),
          as === "style"
            ? "css"
            : as === "script"
              ? "js"
              : as === "font"
                ? "font"
                : as === "image"
                  ? "image"
                  : /stylesheet/.test(rel)
                    ? "css"
                    : inferKind(attrs.get("href")),
        );
      }
    }
    if (
      name === "img" ||
      name === "source" ||
      name === "video" ||
      name === "audio" ||
      name === "input"
    ) {
      for (const key of ["src", "data-src", "data-lazy-src", "poster"]) {
        if (attrs.has(key))
          add(
            attrs.get(key),
            name === "img" || name === "input"
              ? "image"
              : inferKind(attrs.get(key)),
          );
      }
      for (const key of ["srcset", "data-srcset", "data-lazy-srcset"]) {
        if (attrs.has(key))
          for (const src of splitSrcset(attrs.get(key))) add(src, "image");
      }
    }
    for (const key of [
      "data-background",
      "data-background-image",
      "data-image",
    ]) {
      if (attrs.has(key)) add(attrs.get(key), "image");
    }
    if (attrs.has("style"))
      for (const src of cssRefs(attrs.get("style"))) add(src, inferKind(src));
  }
  for (const style of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    for (const src of cssRefs(style[1])) add(src, inferKind(src));
  }
  const title = textContent(
    /<title\b[^>]*>([\s\S]*?)<\/title>/i.exec(html)?.[1] || "",
  );
  const h1 = textContent(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i.exec(html)?.[1] || "");
  return { resources, links, external, invalid, title, h1 };
}

async function request(url, method, maxBytes = 0) {
  try {
    const response = await fetch(url, {
      method,
      redirect: "manual",
      signal: AbortSignal.timeout(18000),
    });
    const status = response.status;
    const type = response.headers.get("content-type") || "";
    let body = "";
    if (method === "GET" && status >= 200 && status < 300) {
      const length = Number(response.headers.get("content-length"));
      if (length > maxBytes) {
        await response.body?.cancel();
        return { status, type, error: `body exceeds ${maxBytes} bytes` };
      }
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length > maxBytes)
        return { status, type, error: `body exceeds ${maxBytes} bytes` };
      body = bytes.toString("utf8");
    } else await response.body?.cancel();
    return { status, type, body };
  } catch (error) {
    return { status: 0, type: "", error: error.message };
  }
}

async function pool(items, concurrency, action) {
  const results = new Array(items.length);
  let index = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, items.length) }, async () => {
      while (index < items.length) {
        const current = index++;
        results[current] = await action(items[current], current);
      }
    }),
  );
  return results;
}

function samples(entries) {
  return entries.slice(0, MAX_SAMPLES);
}
function okType(kind, value) {
  const type = value.toLowerCase();
  if (kind === "css") return type.includes("text/css");
  if (kind === "js") return /javascript|ecmascript/.test(type);
  if (kind === "font")
    return /font\/|application\/(?:font|x-font|octet-stream|vnd.ms-fontobject)/.test(
      type,
    );
  if (kind === "image") return type.startsWith("image/");
  return true;
}

async function main() {
  const opts = options(process.argv.slice(2));
  const parsed = JSON.parse(await readFile(ROUTES_FILE, "utf8"));
  const routes = parsed.routes;
  if (
    !Array.isArray(routes) ||
    routes.length !== 175 ||
    new Set(routes).size !== 175 ||
    routes.some((r) => typeof r !== "string" || !r.startsWith("/"))
  ) {
    throw new Error(
      "Expected 175 unique approved routes in data/approved-routes.json",
    );
  }
  const origin = new URL(opts.base).origin;
  const approved = new Set(routes);
  const began = new Date().toISOString();
  const allAssets = new Map();
  const allLinks = new Map();
  const external = new Set();
  const invalid = new Set();
  const pages = await pool(routes, opts.concurrency, async (route) => {
    const url = new URL(route, opts.base).href;
    const response = await request(url, "GET", MAX_HTML_BYTES);
    const page = { route, status: response.status, type: response.type };
    if (response.error) page.error = response.error;
    if (
      response.status !== 200 ||
      response.error ||
      !response.type.toLowerCase().includes("text/html")
    )
      return page;
    const html = response.body;
    const found = parseHtml(html, url, origin, approved);
    page.bytes = Buffer.byteLength(html);
    page.hash = createHash("sha256").update(html).digest("hex").slice(0, 16);
    page.title = found.title;
    page.h1 = found.h1;
    page.assetRefs = found.resources.size;
    page.internalLinks = found.links.size;
    for (const [key, ref] of found.resources) {
      const prior = allAssets.get(key);
      if (!prior) allAssets.set(key, { ...ref, routes: new Set([route]) });
      else {
        prior.routes.add(route);
        if (prior.kind === "other") prior.kind = ref.kind;
      }
    }
    for (const [key, ref] of found.links) {
      const prior = allLinks.get(key);
      if (!prior) allLinks.set(key, { ...ref, routes: new Set([route]) });
      else prior.routes.add(route);
    }
    for (const x of found.external) external.add(x);
    for (const x of found.invalid) invalid.add(x);
    return page;
  });

  const cssSeen = new Set();
  const assetChecks = [];
  // CSS imports and font/image URLs can be nested; inspect until no new CSS remains.
  for (let round = 0; round < 5; round++) {
    const pending = [...allAssets.values()].filter(
      (x) => !assetChecks.some((a) => a.url === x.url),
    );
    if (!pending.length) break;
    const result = await pool(pending, opts.concurrency * 2, async (asset) => {
      const method = asset.kind === "css" ? "GET" : "HEAD";
      const response = await request(asset.url, method, MAX_CSS_BYTES);
      const item = {
        url: asset.url,
        kind: asset.kind,
        status: response.status,
        type: response.type,
        routes: [...asset.routes].slice(0, 3),
      };
      if (response.error) item.error = response.error;
      if (
        asset.kind === "css" &&
        response.status === 200 &&
        !response.error &&
        !cssSeen.has(asset.url)
      ) {
        cssSeen.add(asset.url);
        for (const value of cssRefs(response.body)) {
          const local = resolveLocal(value, asset.url, origin);
          if (!local) continue;
          if (local.external) {
            external.add(local.url);
            continue;
          }
          if (local.invalid) {
            invalid.add(local.invalid);
            continue;
          }
          if (!allAssets.has(local.url))
            allAssets.set(local.url, {
              url: local.url,
              kind: inferKind(local.path),
              routes: new Set(asset.routes),
            });
        }
      }
      return item;
    });
    assetChecks.push(...result);
  }

  const links = await pool(
    [...allLinks.values()],
    opts.concurrency * 2,
    async (link) => {
      const response = await request(link.url, "HEAD");
      return {
        url: link.url,
        route: link.route,
        approved: link.approved,
        status: response.status,
        error: response.error,
        routes: [...link.routes].slice(0, 3),
      };
    },
  );
  const negative = await request(
    new URL("/__clone_qa_missing_route__", opts.base).href,
    "HEAD",
  );
  const failedPages = pages.filter(
    (p) => p.status !== 200 || p.error || !p.type?.includes("text/html"),
  );
  const missingMetadata = pages.filter(
    (p) => p.status === 200 && (!p.title || !p.h1),
  );
  const assetFailures = assetChecks.filter(
    (a) => a.status < 200 || a.status >= 400 || a.error,
  );
  const typeMismatches = assetChecks.filter(
    (a) => a.status >= 200 && a.status < 300 && !okType(a.kind, a.type),
  );
  const internalFailures = links.filter(
    (l) => l.approved && (l.status < 200 || l.status >= 400 || l.error),
  );
  const outOfScope = links.filter(
    (l) => !l.approved && (l.status < 200 || l.status >= 400 || l.error),
  );
  const redirects = [...pages, ...assetChecks, ...links].filter(
    (x) => x.status >= 300 && x.status < 400,
  );
  const hashes = new Map();
  for (const p of pages)
    if (p.hash) hashes.set(p.hash, [...(hashes.get(p.hash) || []), p.route]);
  const duplicateHtml = [...hashes.values()].filter(
    (group) => group.length > 1,
  );
  const report = {
    schemaVersion: 1,
    taskId: "CLONE-QA-02",
    baseUrl: opts.base,
    startedAt: began,
    finishedAt: new Date().toISOString(),
    method:
      "GET approved HTML and referenced CSS; HEAD other local assets and internal links; no browser or forms",
    summary: {
      expectedRoutes: routes.length,
      checkedRoutes: pages.length,
      html200: pages.filter(
        (p) => p.status === 200 && p.type?.includes("text/html") && !p.error,
      ).length,
      failedRoutes: failedPages.length,
      missingTitleOrH1: missingMetadata.length,
      duplicateHtmlGroups: duplicateHtml.length,
      localAssetUrls: allAssets.size,
      checkedAssetUrls: assetChecks.length,
      failedAssets: assetFailures.length,
      wrongAssetMime: typeMismatches.length,
      uniqueInternalLinks: links.length,
      approvedLinkFailures: internalFailures.length,
      outOfScopeLinks4xx: outOfScope.length,
      redirects: redirects.length,
      externalReferencesUnprobed: external.size,
      invalidReferences: invalid.size,
      unknownRouteStatus: negative.status,
    },
    routeChecks: pages,
    defects: {
      failedRoutes: samples(failedPages),
      missingMetadata: samples(missingMetadata),
      duplicateHtml: samples(duplicateHtml),
      failedAssets: samples(assetFailures),
      wrongAssetMime: samples(typeMismatches),
      approvedLinkFailures: samples(internalFailures),
      unknownRoute: negative.status === 404 ? null : negative,
    },
    observations: {
      outOfScopeLinks4xx: samples(outOfScope),
      redirects: samples(redirects),
      unprobedExternal: samples([...external]),
      invalidReferences: samples([...invalid]),
      assetTypes: Object.fromEntries(
        ["css", "js", "font", "image", "other"].map((kind) => [
          kind,
          assetChecks.filter((a) => a.kind === kind).length,
        ]),
      ),
    },
    limitations: [
      "HTML parsing is static; JS-created requests and dynamically opened views are not captured.",
      "No desktop/mobile screenshot, console, interaction, font rendering, CTA or form checks.",
      "Only linked local resources and CSS url()/@import references are probed; external requests are not fetched.",
      "Internal navigation outside the approved 175 routes is reported separately because local server intentionally limits the route scope.",
      "HTML hash duplicates are exact-byte evidence only; page identity and content acceptance require independent review.",
    ],
  };
  let writeStatus = "disabled";
  if (opts.write) {
    try {
      const file = await open(VERIFY_FILE, "wx");
      try {
        await file.writeFile(`${JSON.stringify(report)}\n`, "utf8");
        writeStatus = "created";
      } finally {
        await file.close();
      }
    } catch (error) {
      if (error.code === "EEXIST") writeStatus = "collision_skipped";
      else throw error;
    }
  }
  console.log(
    JSON.stringify({
      taskId: report.taskId,
      verifyFile: VERIFY_FILE,
      writeStatus,
      ...report.summary,
      defectSamples: {
        failedRoutes: samples(failedPages).slice(0, 3),
        failedAssets: assetFailures.slice(0, 5),
        wrongAssetMime: typeMismatches.slice(0, 3),
        approvedLinkFailures: internalFailures.slice(0, 3),
      },
    }),
  );
  if (
    failedPages.length ||
    assetFailures.length ||
    typeMismatches.length ||
    internalFailures.length ||
    negative.status !== 404
  )
    process.exitCode = 2;
}

main().catch((error) => {
  console.error(
    JSON.stringify({ taskId: "CLONE-QA-02", fatal: error.message }),
  );
  process.exitCode = 1;
});
