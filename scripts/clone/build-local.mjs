#!/usr/bin/env node
// Source-first offline assembler. Only captured HTML is used; no generated UI.
// Normal execution writes new HTML pages to work/web-clone-benchmark/local.
// --dry-run validates and reports without writing any files.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const RAW_HTML = path.join(ROOT, "work/web-clone-benchmark/raw/html");
const RAW_ASSETS = path.join(ROOT, "work/web-clone-benchmark/raw/assets");
const ASSET_MANIFEST = path.join(ROOT, "work/web-clone-benchmark/ASSETS.json");
export const DEFAULT_OUTPUT = path.join(ROOT, "work/web-clone-benchmark/local");
const MANIFEST = path.join(ROOT, "data/approved-routes.json");
const ORIGINAL_ORIGIN = "https://viettelwifii.vn";
const TRACKERS =
  /(?:googletagmanager\.com|google-analytics\.com|googleadservices\.com|googleads\.g\.doubleclick\.net|doubleclick\.net|googlesyndication\.com|connect\.facebook\.net|hotjar\.com|app\.chatwoot\.com)/i;
const RESOURCE_ATTRS = new Set([
  "src",
  "srcset",
  "poster",
  "data-src",
  "data-srcset",
  "data-background",
  "data-background-image",
  "data-image",
  "data-lazy-src",
  "data-lazy-srcset",
]);

function cliArgs(argv) {
  const options = { dryRun: false, json: false, output: DEFAULT_OUTPUT };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--dry-run") options.dryRun = true;
    else if (argv[i] === "--json") options.json = true;
    else if (argv[i] === "--out" && argv[i + 1])
      options.output = path.resolve(argv[++i]);
    else throw new Error(`Unknown or incomplete argument: ${argv[i]}`);
  }
  if (
    options.output !== DEFAULT_OUTPUT &&
    !options.output.startsWith(`${DEFAULT_OUTPUT}${path.sep}`)
  ) {
    throw new Error("Output must be under work/web-clone-benchmark/local");
  }
  return options;
}

function posix(input) {
  return input.replaceAll("\\", "/").replace(/^\/+/, "");
}

export function normalizedAssetUrl(value, base = ORIGINAL_ORIGIN) {
  let url;
  try {
    url = new URL(decodeEntities(value.trim()), base);
  } catch {
    return null;
  }
  if (!["http:", "https:"].includes(url.protocol)) return null;
  url.hash = "";
  // Source markup, stylesheets and incoming requests can order query keys differently.
  // Keep _next/image's url, w and q parameters: each variant is a distinct binary.
  const params = [...url.searchParams.entries()].sort(
    ([a, av], [b, bv]) => a.localeCompare(b) || av.localeCompare(bv),
  );
  url.search = "";
  for (const [key, entry] of params) url.searchParams.append(key, entry);
  return url.href;
}

async function assetInventory(root) {
  const assetPaths = new Map();
  const assetUrlToLocal = new Map();
  const originalUrlByLocal = new Map();
  const missingManifestFiles = [];
  const manifest = JSON.parse(await fs.readFile(ASSET_MANIFEST, "utf8"));
  if (!Array.isArray(manifest.assets))
    throw new Error("Invalid ASSETS.json: assets must be an array");
  for (const entry of manifest.assets) {
    const url = typeof entry.url === "string" && normalizedAssetUrl(entry.url);
    const relative =
      typeof entry.localPath === "string" && posix(entry.localPath);
    const filename =
      relative &&
      relative.startsWith("assets/") &&
      relative.slice("assets/".length);
    if (
      !url ||
      !filename ||
      !/^[a-f0-9]{24}\.[a-z0-9]+$/i.test(filename) ||
      filename.includes("/") ||
      entry.file !== filename
    ) {
      throw new Error(
        `Invalid asset manifest entry: ${JSON.stringify(entry).slice(0, 200)}`,
      );
    }
    const fullPath = path.join(root, filename);
    let present = false;
    try {
      const stat = await fs.lstat(fullPath);
      present =
        stat.isFile() &&
        (typeof entry.bytes !== "number" || stat.size === entry.bytes);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    if (!present) {
      missingManifestFiles.push({ url: entry.url, file: filename });
      continue;
    }
    const existing = assetUrlToLocal.get(url);
    if (existing && existing !== filename) {
      // Source optimizer URLs can differ only in query-key order. Keep the
      // original asset path if both captured responses have identical bytes.
      const [previousBytes, currentBytes] = await Promise.all([
        fs.readFile(path.join(root, existing)),
        fs.readFile(fullPath),
      ]);
      if (!previousBytes.equals(currentBytes)) {
        throw new Error(`Conflicting ASSETS.json binaries for ${url}`);
      }
    } else {
      assetUrlToLocal.set(url, filename);
    }
    assetPaths.set(filename.toLowerCase(), filename);
    if (!originalUrlByLocal.has(filename))
      originalUrlByLocal.set(filename, entry.url);
  }
  return {
    assetPaths,
    assetUrlToLocal,
    originalUrlByLocal,
    manifestAssetCount: manifest.assets.length,
    missingManifestFiles,
  };
}

export async function createCloneContext() {
  const parsed = JSON.parse(await fs.readFile(MANIFEST, "utf8"));
  const routes = parsed.routes;
  if (
    !Array.isArray(routes) ||
    routes.length === 0 ||
    routes.some(
      (route) =>
        typeof route !== "string" ||
        !route.startsWith("/") ||
        route.includes(".."),
    ) ||
    new Set(routes).size !== routes.length
  ) {
    throw new Error(
      "Invalid approved-routes.json: expected unique absolute route paths",
    );
  }
  const names = new Set(await fs.readdir(RAW_HTML));
  const captures = new Map();
  for (let index = 0; index < routes.length; index++) {
    const filename =
      index === 0 && names.has("home.html")
        ? "home.html"
        : `${String(index).padStart(4, "0")}.html`;
    if (names.has(filename))
      captures.set(routes[index], path.join(RAW_HTML, filename));
  }
  const inventory = await assetInventory(RAW_ASSETS);
  return { root: ROOT, routes, captures, assetsRoot: RAW_ASSETS, ...inventory };
}

export function outputFileForRoute(output, route) {
  const segments = route.split("/").filter(Boolean);
  if (
    segments.some(
      (part) => part === "." || part === ".." || /[\\:<>|?*]/.test(part),
    )
  ) {
    throw new Error(`Unsafe manifest route: ${route}`);
  }
  return path.join(output, ...segments, "index.html");
}

function decodeEntities(value) {
  return value
    .replace(/&amp;|&#38;|&#x26;/gi, "&")
    .replace(/&quot;|&#34;|&#x22;/gi, '"')
    .replace(/&apos;|&#39;|&#x27;/gi, "'");
}
function encodeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

export function createRewriteStats(route) {
  return {
    route,
    rewrites: 0,
    missing: new Set(),
    unlocalizedExternal: new Set(),
    blockedScripts: new Set(),
    externalNavigation: new Set(),
  };
}

export function assetPathForUrl(value, context, stats, base = ORIGINAL_ORIGIN) {
  const decoded = decodeEntities(value.trim());
  if (
    !decoded ||
    decoded.startsWith("#") ||
    /^(?:data:|blob:|about:|javascript:|mailto:|tel:)/i.test(decoded)
  ) {
    return value;
  }
  const normalized = normalizedAssetUrl(decoded, base);
  if (!normalized) return value;
  const mapped = context.assetUrlToLocal.get(normalized);
  if (mapped) {
    stats.rewrites++;
    return `/assets/${encodeURIComponent(mapped)}`;
  }
  const url = new URL(normalized);
  let assetPath;
  try {
    assetPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  } catch {
    stats.unlocalizedExternal.add(url.href);
    return value;
  }
  if (
    !assetPath ||
    assetPath.split("/").some((part) => part === ".." || part === ".")
  ) {
    stats.unlocalizedExternal.add(url.href);
    return value;
  }
  const own = ["viettelwifii.vn", "viettelwifii.vn"].includes(
    url.hostname.toLowerCase(),
  );
  const intended = own
    ? assetPath
    : `_external/${url.hostname.toLowerCase()}/${assetPath}`;
  // Missing URLs remain visibly missing; never guess a file by its basename or
  // silently use a different optimized image width.
  stats.missing.add(`/${intended} <- ${url.href}`);
  if (!own) stats.unlocalizedExternal.add(url.href);
  stats.rewrites++;
  return `/assets/${intended.split("/").map(encodeURIComponent).join("/")}`;
}

function routeUrl(value, context, stats, base) {
  const decoded = decodeEntities(value.trim());
  if (!decoded || decoded.startsWith("#")) return value;
  if (/^javascript:/i.test(decoded)) return "#";
  if (/^(?:mailto:|tel:|sms:|data:|blob:)/i.test(decoded)) return value;
  let target;
  try {
    target = new URL(decoded, base);
  } catch {
    return value;
  }
  if (!["http:", "https:"].includes(target.protocol)) return value;
  if (
    !["viettelwifii.vn", "viettelwifii.vn"].includes(
      target.hostname.toLowerCase(),
    )
  ) {
    stats.externalNavigation.add(target.href);
    return value; // User-initiated external navigation only; CSP blocks automatic fetches.
  }
  stats.rewrites++;
  return `${target.pathname}${target.search}${target.hash}`;
}

function srcsetUrl(value, context, stats, base) {
  return value
    .split(/,\s*(?=(?:https?:\/\/|\/|\.\/|\.\.\/|[\w-]+\.[\w-]+))/i)
    .map((candidate) =>
      candidate.replace(
        /^(\s*)(\S+)([\s\S]*)$/,
        (_, whitespace, url, descriptor) =>
          whitespace + assetPathForUrl(url, context, stats, base) + descriptor,
      ),
    )
    .join(", ");
}

export function rewriteCss(css, context, stats, base = ORIGINAL_ORIGIN) {
  return css
    .replace(
      /url\(\s*(['"]?)([^'"\)]+)\1\s*\)/gi,
      (whole, quote, value) =>
        `url(${quote}${assetPathForUrl(value, context, stats, base)}${quote})`,
    )
    .replace(
      /(@import\s+)(['"])([^'"]+)\2/gi,
      (_, start, quote, value) =>
        `${start}${quote}${assetPathForUrl(value, context, stats, base)}${quote}`,
    );
}

function rewriteDataJson(value, context, stats, base) {
  let parsed;
  try {
    parsed = JSON.parse(decodeEntities(value));
  } catch {
    return value;
  }
  const visit = (item) => {
    if (Array.isArray(item)) return item.map(visit);
    if (item && typeof item === "object")
      return Object.fromEntries(
        Object.entries(item).map(([key, entry]) => [key, visit(entry)]),
      );
    if (typeof item !== "string" || !/^(?:https?:\/\/|\/|\.\/)/i.test(item))
      return item;
    return assetPathForUrl(item, context, stats, base);
  };
  return JSON.stringify(visit(parsed));
}

function rewriteTag(tag, name, context, stats, base) {
  const lowerName = name.toLowerCase();
  const linkRel =
    /\brel\s*=\s*(['"])(.*?)\1/i.exec(tag)?.[2]?.toLowerCase() || "";
  if (lowerName === "link" && /^(?:preconnect|dns-prefetch)$/i.test(linkRel)) {
    const href = /\bhref\s*=\s*(['"])(.*?)\1/i.exec(tag)?.[2];
    if (href) {
      try {
        if (
          !["viettelwifii.vn", "viettelwifii.vn"].includes(
            new URL(decodeEntities(href), base).hostname.toLowerCase(),
          )
        ) {
          return ""; // Do not open any third-party connections on page load.
        }
      } catch {
        return "";
      }
    }
  }
  if (
    lowerName === "link" &&
    TRACKERS.test(tag) &&
    /^(?:preload|prefetch|modulepreload)$/i.test(linkRel)
  ) {
    return "";
  }
  if (lowerName === "base") return ""; // Absolute captured base breaks local relative routing.
  return tag.replace(
    /([\w:-]+)(\s*=\s*)(["'])([\s\S]*?)\3/g,
    (original, name, equals, quote, value) => {
      const attr = name.toLowerCase();
      let revised = value;
      if (attr === "style")
        revised = rewriteCss(decodeEntities(value), context, stats, base);
      else if (attr === "action" && lowerName === "form")
        revised = "/__blocked__/form";
      else if (attr === "src" && lowerName === "iframe")
        revised = "about:blank";
      else if (attr === "href" && lowerName === "a")
        revised = routeUrl(value, context, stats, base);
      else if (
        attr === "href" &&
        lowerName === "link" &&
        /(?:stylesheet|preload|prefetch|modulepreload|icon|manifest|apple-touch-icon)/i.test(
          linkRel,
        )
      ) {
        revised = assetPathForUrl(value, context, stats, base);
      } else if (
        attr === "href" &&
        lowerName === "link" &&
        /canonical|alternate/i.test(linkRel)
      ) {
        revised = value; // Original canonical is evidence; not fetched by the browser.
      } else if (RESOURCE_ATTRS.has(attr)) {
        revised = /srcset/i.test(attr)
          ? srcsetUrl(decodeEntities(value), context, stats, base)
          : assetPathForUrl(value, context, stats, base);
      } else if (attr === "data-json" || attr === "data-image-urls") {
        revised = rewriteDataJson(value, context, stats, base);
      } else if (
        attr.startsWith("data-") &&
        /^(?:https?:\/\/|\/)/i.test(decodeEntities(value))
      ) {
        revised = assetPathForUrl(value, context, stats, base);
      }
      return revised === value
        ? original
        : `${name}${equals}${quote}${encodeAttribute(revised)}${quote}`;
    },
  );
}

export function renderCapture(html, route, context) {
  const stats = createRewriteStats(route);
  const base = new URL(route, ORIGINAL_ORIGIN).href;
  // Never execute scripts from remote analytics, advertising or chat widgets.
  let rendered = html.replace(
    /<script\b(?:[^>"']|"[^"]*"|'[^']*')*>[\s\S]*?<\/script\s*>/gi,
    (script) => {
      const opening = script.slice(0, script.indexOf(">") + 1);
      const content = script.slice(opening.length, -9).trim();
      if (
        TRACKERS.test(opening) ||
        /\bid=["'](?:gg-tag-manager|google-analytics|gtag|fb-pixel|chatwoot-script)[\w-]*["']/i.test(
          opening,
        ) ||
        (/data-nscript=/i.test(opening) &&
          /\b(?:gtag\(|dataLayer|fbq\()/i.test(content)) ||
        /^(?:window\.dataLayer\s*=|function gtag\s*\(|gtag\s*\(|window\._chatwoot\s*=)/i.test(
          content,
        ) ||
        (/app\.chatwoot\.com|googletagmanager\.com|google-analytics\.com/i.test(
          content,
        ) &&
          !/self\.__next_f\.push\(/.test(content))
      ) {
        stats.blockedScripts.add(opening.slice(0, 150));
        return "";
      }
      return script;
    },
  );
  // Preserve original elements, attributes, class names and inline Next payloads.
  rendered = rendered.replace(
    /<[a-z][\w:-]*\b(?:[^>"']|"[^"]*"|'[^']*')*>/gi,
    (tag) => rewriteTag(tag, /^<([\w:-]+)/.exec(tag)[1], context, stats, base),
  );
  rendered = rendered.replace(
    /<style\b[^>]*>([\s\S]*?)<\/style>/gi,
    (whole, css) => whole.replace(css, rewriteCss(css, context, stats, base)),
  );
  // Restrict active requests to localhost; links/canonical metadata remain inspectable.
  const policy =
    "default-src 'self' data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; media-src 'self' data: blob:; connect-src 'self'; worker-src 'self' blob:; frame-src 'none'; form-action 'none'; object-src 'none'; base-uri 'self'";
  if (/<head\b[^>]*>/i.test(rendered)) {
    rendered = rendered.replace(
      /<head\b[^>]*>/i,
      (head) =>
        `${head}<meta http-equiv="Content-Security-Policy" content="${policy}">`,
    );
  }
  return { html: rendered, stats };
}

export async function buildReport(
  context,
  { output = DEFAULT_OUTPUT, dryRun = true } = {},
) {
  const pages = [];
  const missing = new Set();
  const unlocalizedExternal = new Set();
  const externalNavigation = new Set();
  let blockedScripts = 0,
    rewrites = 0;
  for (const [route, input] of context.captures) {
    const raw = await fs.readFile(input, "utf8");
    const { html, stats } = renderCapture(raw, route, context);
    const destination = outputFileForRoute(output, route);
    let status = "would-write";
    if (!dryRun) {
      await fs.mkdir(path.dirname(destination), { recursive: true });
      try {
        await fs.writeFile(destination, html, { encoding: "utf8", flag: "wx" });
        status = "written";
      } catch (error) {
        if (error.code !== "EEXIST") throw error;
        status = "existing-skipped";
      }
    } else {
      try {
        await fs.access(destination);
        status = "existing-skipped";
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
    }
    pages.push({
      route,
      source: path.relative(ROOT, input).replaceAll("\\", "/"),
      destination: path.relative(ROOT, destination).replaceAll("\\", "/"),
      bytes: Buffer.byteLength(html),
      status,
      rewrittenReferences: stats.rewrites,
      missingAssetReferences: stats.missing.size,
    });
    for (const item of stats.missing) missing.add(item);
    for (const item of stats.unlocalizedExternal) unlocalizedExternal.add(item);
    for (const item of stats.externalNavigation) externalNavigation.add(item);
    blockedScripts += stats.blockedScripts.size;
    rewrites += stats.rewrites;
  }
  const take = (set) => [...set].slice(0, 30);
  return {
    dryRun,
    approvedRoutes: context.routes.length,
    capturedRoutes: context.captures.size,
    uncapturedRoutes: context.routes.filter(
      (route) => !context.captures.has(route),
    ),
    manifestAssetCount: context.manifestAssetCount,
    missingManifestFileCount: context.missingManifestFiles.length,
    missingManifestFiles: context.missingManifestFiles,
    availableLocalAssets: context.assetPaths.size,
    pages,
    rewrittenReferences: rewrites,
    blockedTrackingScripts: blockedScripts,
    missingAssetReferenceCount: missing.size,
    missingAssetExamples: take(missing),
    missingAssetReferences: [...missing],
    unlocalizedExternalAssetCount: unlocalizedExternal.size,
    unlocalizedExternalAssetExamples: take(unlocalizedExternal),
    unlocalizedExternalAssets: [...unlocalizedExternal],
    externalNavigationCount: externalNavigation.size,
    notes: [
      "CSS/JS are direct source references, never React/UI reconstruction.",
      "Local /assets points to raw/assets; missing assets remain local 404s until captured.",
      "Third-party tracking, network APIs and real form submissions are blocked by CSP/server.",
      "Source CDN assets are subject to rights verification before production use.",
    ],
  };
}

async function main() {
  const args = cliArgs(process.argv.slice(2));
  const report = await buildReport(await createCloneContext(), args);
  if (args.json) console.log(JSON.stringify(report, null, 2));
  else {
    console.log(
      `CLONE-TOOLS-01: ${report.capturedRoutes}/${report.approvedRoutes} captured; ${report.availableLocalAssets} local assets`,
    );
    for (const page of report.pages)
      console.log(
        `${page.status}: ${page.route} <- ${page.source} (${page.bytes} bytes)`,
      );
    console.log(
      `${report.rewrittenReferences} references rewritten; ${report.blockedTrackingScripts} tracking scripts blocked`,
    );
    console.log(
      `${report.missingAssetReferenceCount} missing asset refs; ${report.unlocalizedExternalAssetCount} external asset refs not mirrored`,
    );
    for (const url of report.unlocalizedExternalAssetExamples)
      console.log(`UNLOCALIZED: ${url}`);
    if (report.uncapturedRoutes.length)
      console.log(
        `${report.uncapturedRoutes.length} routes have no captured HTML yet`,
      );
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href
) {
  main().catch((error) => {
    console.error(error.stack || error.message);
    process.exitCode = 1;
  });
}
