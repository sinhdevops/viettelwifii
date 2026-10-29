#!/usr/bin/env node
// Read-only inventory of rendered source HTML. Indexes follow approved-routes.json order.
import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const manifestFile = join(root, "data/approved-routes.json");
const htmlDirectory = join(root, "work/web-clone-benchmark/raw/html");
const categories = ["css", "script", "font", "image", "media", "other"];
const criticalCategories = new Set(["css", "script", "font", "image"]);

function decodeEntities(value) {
  return value.replace(
    /&(#(?:x[\da-f]+|\d+)|amp|quot|apos|lt|gt);/gi,
    (match, entity) => {
      const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" };
      if (entity[0] !== "#") return named[entity.toLowerCase()] ?? match;
      const hex = entity[1]?.toLowerCase() === "x";
      const number = Number.parseInt(entity.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isInteger(number) && number > 0 && number <= 0x10ffff
        ? String.fromCodePoint(number)
        : match;
    },
  );
}

function attributes(tag) {
  const attrs = new Map();
  const content = tag.replace(/^<\/?[\w:-]+\b/, "").replace(/\/?\s*>$/, "");
  const pattern =
    /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g;
  for (const match of content.matchAll(pattern)) {
    attrs.set(
      match[1].toLowerCase(),
      decodeEntities(match[2] ?? match[3] ?? match[4] ?? ""),
    );
  }
  return attrs;
}

function inferCategory(url, hint = "other") {
  if (hint !== "other") return hint;
  const pathname = url.split(/[?#]/, 1)[0].toLowerCase();
  if (/\.css$/.test(pathname)) return "css";
  if (/\.(?:m?js|cjs)$/.test(pathname)) return "script";
  if (/\.(?:woff2?|ttf|otf|eot)$/.test(pathname)) return "font";
  if (/\.(?:png|jpe?g|webp|avif|gif|svg|ico|bmp)$/.test(pathname))
    return "image";
  if (/\.(?:mp4|webm|ogg|mp3|m4a|wav|mov|vtt)$/.test(pathname)) return "media";
  return "other";
}

function extractAssetReferences(html, route, origin) {
  const references = [];
  const base = new URL(route, origin);
  const add = (raw, category = "other") => {
    if (!raw || /^(?:data:|blob:|javascript:|#)/i.test(raw.trim())) return;
    try {
      const url = new URL(raw.trim(), base);
      if (url.protocol !== "http:" && url.protocol !== "https:") return;
      url.hash = "";
      references.push({
        category: inferCategory(url.pathname, category),
        url: url.href,
      });
    } catch {
      // An unparseable value in a captured attribute is not a fetchable asset URL.
    }
  };
  const addSrcset = (value, type) => {
    // Browser srcset candidates are comma-separated; data URLs are skipped by add().
    for (const candidate of value.split(","))
      add(candidate.trim().split(/\s+/)[0], type);
  };
  const addCssUrls = (css) => {
    for (const match of css.matchAll(
      /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*?))\s*\)/gi,
    )) {
      add(match[1] ?? match[2] ?? match[3], "other");
    }
  };

  for (const match of html.matchAll(
    /<(?:link|script|img|source|video|audio|track|embed|object)\b[^>]*>/gi,
  )) {
    const tag = match[0];
    const kind = /^<([\w-]+)/.exec(tag)[1].toLowerCase();
    const attrs = attributes(tag);
    if (kind === "link") {
      const rel = (attrs.get("rel") ?? "").toLowerCase().split(/\s+/);
      if (rel.includes("stylesheet")) add(attrs.get("href"), "css");
      else if (rel.includes("icon") || rel.includes("apple-touch-icon"))
        add(attrs.get("href"), "image");
      else if (
        rel.includes("preload") ||
        rel.includes("modulepreload") ||
        rel.includes("prefetch")
      ) {
        const as = attrs.get("as")?.toLowerCase();
        const category =
          {
            style: "css",
            script: "script",
            font: "font",
            image: "image",
            video: "media",
            audio: "media",
          }[as] ?? (rel.includes("modulepreload") ? "script" : "other");
        add(attrs.get("href"), category);
        if (attrs.has("imagesrcset"))
          addSrcset(attrs.get("imagesrcset"), "image");
      }
    } else if (kind === "script") add(attrs.get("src"), "script");
    else if (kind === "img") {
      add(attrs.get("src"), "image");
      add(attrs.get("data-src"), "image");
      if (attrs.has("srcset")) addSrcset(attrs.get("srcset"), "image");
      if (attrs.has("data-srcset"))
        addSrcset(attrs.get("data-srcset"), "image");
    } else if (kind === "source") {
      const mime = (attrs.get("type") ?? "").toLowerCase();
      const type = mime.startsWith("image/")
        ? "image"
        : mime.startsWith("video/") || mime.startsWith("audio/")
          ? "media"
          : "other";
      add(attrs.get("src"), type);
      if (attrs.has("srcset")) addSrcset(attrs.get("srcset"), type);
    } else if (kind === "video") {
      add(attrs.get("src"), "media");
      add(attrs.get("poster"), "image");
    } else if (kind === "audio" || kind === "track")
      add(attrs.get("src"), "media");
    else add(attrs.get("src") ?? attrs.get("data"), "other");
  }
  // Background images and font URLs may be on arbitrary HTML elements, not just asset tags.
  for (const match of html.matchAll(
    /<[a-z][\w:-]*\b[^>]*\bstyle\s*=\s*(?:"[^"]*"|'[^']*')[^>]*>/gi,
  )) {
    const style = attributes(match[0]).get("style");
    if (style) addCssUrls(style);
  }
  for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style\s*>/gi))
    addCssUrls(match[1]);
  return references;
}

function groupedDuplicates(rows, key, view) {
  const groups = new Map();
  for (const row of rows) {
    const value = key(row);
    if (value == null) continue;
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(view(row));
  }
  return [...groups.entries()]
    .filter(([, matches]) => matches.length > 1)
    .map(([value, matches]) => ({ value, matches }));
}

function counts(refs) {
  const byCategory = Object.fromEntries(
    categories.map((category) => [category, { references: 0, uniqueUrls: 0 }]),
  );
  const unique = new Map();
  for (const { category, url } of refs) {
    byCategory[category].references++;
    if (!unique.has(`${category}\0${url}`)) {
      unique.set(`${category}\0${url}`, { category, url });
      byCategory[category].uniqueUrls++;
    }
  }
  const critical = refs.filter((entry) =>
    criticalCategories.has(entry.category),
  );
  const criticalUnique = new Set(
    critical.map((entry) => `${entry.category}\0${entry.url}`),
  );
  return {
    references: refs.length,
    uniqueUrls: unique.size,
    criticalReferences: critical.length,
    uniqueCriticalUrls: criticalUnique.size,
    byCategory,
  };
}

function inventory() {
  const parsed = JSON.parse(readFileSync(manifestFile, "utf8"));
  const items = Array.isArray(parsed) ? parsed : parsed.routes;
  if (!Array.isArray(items))
    throw new Error("Expected approved routes array or {routes: array}");
  const routes = items.map((item) =>
    typeof item === "string" ? item : item?.path,
  );
  if (
    routes.some((route) => typeof route !== "string" || !route.startsWith("/"))
  ) {
    throw new Error("Approved route manifest contains an invalid path");
  }
  const origin = parsed.referenceOrigin ?? "https://viettelwifii.vn";
  const fileNames = existsSync(htmlDirectory) ? readdirSync(htmlDirectory) : [];
  const names = new Set(fileNames);
  const captures = [];
  const missing = [];
  const unusable = [];
  const allReferences = [];
  let homeFallbackUsed = false;

  routes.forEach((route, index) => {
    const indexed = `${String(index).padStart(4, "0")}.html`;
    const name = names.has(indexed)
      ? indexed
      : index === 0 && names.has("home.html")
        ? "home.html"
        : null;
    if (!name) {
      missing.push({ index, route, expectedFile: indexed });
      return;
    }
    if (name === "home.html") homeFallbackUsed = true;
    try {
      const html = readFileSync(join(htmlDirectory, name), "utf8");
      if (!/<html\b/i.test(html) || !/<\/html\s*>/i.test(html)) {
        unusable.push({
          index,
          route,
          file: name,
          reason: "missing opening or closing html element",
        });
        return;
      }
      const refs = extractAssetReferences(html, route, origin);
      allReferences.push(...refs);
      const canonicalTag = [...html.matchAll(/<link\b[^>]*>/gi)].find((match) =>
        /(?:^|\s)rel\s*=\s*["']?canonical(?:["'\s>]|$)/i.test(match[0]),
      );
      const canonicalHref = canonicalTag
        ? attributes(canonicalTag[0]).get("href")
        : null;
      let canonical = null;
      try {
        if (canonicalHref)
          canonical = new URL(canonicalHref, new URL(route, origin)).href;
      } catch {
        /* malformed source */
      }
      const title = /<title\b[^>]*>([\s\S]*?)<\/title\s*>/i.exec(html)?.[1];
      captures.push({
        index,
        route,
        file: name,
        bytes: statSync(join(htmlDirectory, name)).size,
        sha256: createHash("sha256").update(html).digest("hex"),
        title: title ? decodeEntities(title.replace(/\s+/g, " ").trim()) : null,
        canonical,
        assets: counts(refs),
      });
    } catch (error) {
      unusable.push({
        index,
        route,
        file: name,
        reason: `read error: ${error.code ?? error.message}`,
      });
    }
  });

  const indexedFileNames = new Set(
    routes.map((_, index) => `${String(index).padStart(4, "0")}.html`),
  );
  const manifestRows = routes.map((route, index) => ({ index, route }));
  const routeView = ({ index, route }) => ({ index, route });
  return {
    taskId: "CLONE-QA-TOOLS-01",
    mode: "read-only raw HTML inventory; no browser or acceptance checks",
    manifest: relative(root, manifestFile).replaceAll("\\", "/"),
    htmlDirectory: relative(root, htmlDirectory).replaceAll("\\", "/"),
    approvedCount: routes.length,
    capturedCount: captures.length,
    missingCount: missing.length,
    unusableCount: unusable.length,
    homeFallbackUsed,
    homeAliasPresent: names.has("home.html") && names.has("0000.html"),
    sourceAssetReferences: {
      ...counts(allReferences),
      method:
        "HTML src/srcset, asset link href, inline CSS url(); counts are references, not downloaded files or network successes",
    },
    routeDuplicates: {
      exactManifest: groupedDuplicates(
        manifestRows,
        (row) => row.route,
        routeView,
      ),
      caseInsensitiveManifest: groupedDuplicates(
        manifestRows,
        (row) => row.route.toLowerCase(),
        routeView,
      ).filter(
        (group) => new Set(group.matches.map((item) => item.route)).size > 1,
      ),
      identicalCapturedHtml: groupedDuplicates(
        captures,
        (row) => row.sha256,
        routeView,
      ),
      sharedCapturedCanonical: groupedDuplicates(
        captures,
        (row) => row.canonical,
        routeView,
      ),
    },
    canonicalPathMismatches: captures
      .filter(
        (row) =>
          row.canonical &&
          new URL(row.canonical).pathname.replace(/\/$/, "") !==
            new URL(row.route, origin).pathname.replace(/\/$/, ""),
      )
      .map(({ index, route, canonical }) => ({ index, route, canonical })),
    unexpectedIndexedFiles: fileNames
      .filter(
        (name) => /^\d{4,}\.html$/.test(name) && !indexedFileNames.has(name),
      )
      .sort(),
    captures,
    missing,
    unusable,
  };
}

try {
  console.log(JSON.stringify(inventory(), null, 2));
} catch (error) {
  console.log(
    JSON.stringify({ taskId: "CLONE-QA-TOOLS-01", error: error.message }),
  );
  process.exitCode = 1;
}
