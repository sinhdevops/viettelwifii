import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const origin = "https://viettelwifii.vn";
const root = process.cwd();
const sourceDir = join(root, "work", "web-clone-benchmark", "raw", "html");
const manifestPath = join(root, "work", "web-clone-benchmark", "ASSETS.json");
const routeNames = JSON.parse(
  readFileSync(join(root, "data", "approved-routes.json"), "utf8"),
).routes;
const entries = new Map();
const external = new Set();
const extensions =
  /\.(?:css|js|mjs|woff2?|ttf|otf|eot|png|jpe?g|gif|svg|webp|avif|ico|mp4|webm|json|wasm|riv|bin|glb|gltf)(?:$|\?)/i;

function candidate(value, route) {
  if (!value) return;
  const decoded = value
    .replaceAll("&amp;", "&")
    .replaceAll("&#38;", "&")
    .trim();
  if (/^(?:data:|blob:|javascript:|mailto:|tel:|#)/i.test(decoded)) return;
  let resolved;
  try {
    resolved = new URL(decoded, origin + route);
  } catch {
    return;
  }
  if (resolved.hostname !== "viettelwifii.vn") {
    if (/^(?:https?:)/.test(resolved.protocol)) external.add(resolved.origin);
    return;
  }
  if (
    !extensions.test(resolved.pathname) &&
    !resolved.pathname.startsWith("/_next/image")
  )
    return;
  resolved.hash = "";
  const url = resolved.href;
  const ext = resolved.pathname.startsWith("/_next/image")
    ? ".webp"
    : (resolved.pathname.match(/\.[a-z0-9]+$/i)?.[0] ?? ".bin");
  const digest = createHash("sha256").update(url).digest("hex").slice(0, 24);
  const file = `${digest}${ext.toLowerCase()}`;
  if (!entries.has(url))
    entries.set(url, {
      url,
      file,
      localPath: `assets/${file}`,
      status: "pending",
      foundOn: [],
    });
  const entry = entries.get(url);
  if (entry.foundOn.length < 8 && !entry.foundOn.includes(route))
    entry.foundOn.push(route);
}

let htmlCount = 0;
const missingHtml = [];
for (let i = 0; i < routeNames.length; i++) {
  const route = routeNames[i];
  const file = join(sourceDir, String(i).padStart(4, "0") + ".html");
  if (!existsSync(file)) {
    missingHtml.push(route);
    continue;
  }
  htmlCount++;
  const html = readFileSync(file, "utf8");
  const attrs =
    /\b(?:src|href|srcset|poster|data-src|data-poster)\s*=\s*(["'])(.*?)\1/gi;
  for (const match of html.matchAll(attrs)) {
    const value = match[2];
    if (/\bsrcset\s*=/i.test(match[0])) {
      for (const part of value.split(","))
        candidate(part.trim().split(/\s+/)[0], route);
    } else candidate(value, route);
  }
  const cssUrls = /url\(\s*["']?([^\)"']+)["']?\s*\)/gi;
  for (const match of html.matchAll(cssUrls)) candidate(match[1], route);
  const literalUrls =
    /https?:\/\/www\.viettelup\.vn\/(?:_next\/(?:static|image)|images|assets|uploads|public|media)\/[^\s"'<>\\\)]+/gi;
  for (const match of html.matchAll(literalUrls)) candidate(match[0], route);
}

mkdirSync(join(root, "work", "web-clone-benchmark"), { recursive: true });
const manifest = {
  source: origin,
  generatedAt: new Date().toISOString(),
  routesTotal: routeNames.length,
  capturedHtml: htmlCount,
  missingHtml,
  status: "download_pending",
  downloaded: 0,
  blocked: 0,
  failed: 0,
  externalOrigins: [...external].sort(),
  assets: [...entries.values()],
};
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log(
  JSON.stringify(
    {
      htmlCount,
      total: routeNames.length,
      missingHtml,
      assets: manifest.assets.length,
      externalOrigins: manifest.externalOrigins,
    },
    null,
    2,
  ),
);
