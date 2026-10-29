#!/usr/bin/env node
// HTTP preview for build-local.mjs output; --raw previews captures in memory.
// No proxying, tracking, external network access or form/API side effects.

import http from "node:http";
import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  DEFAULT_OUTPUT,
  createCloneContext,
  createRewriteStats,
  normalizedAssetUrl,
  outputFileForRoute,
  renderCapture,
  rewriteCss,
} from "./build-local.mjs";

const ORIGIN = "https://viettelwifii.vn";
const MIME = new Map(
  Object.entries({
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".map": "application/json; charset=utf-8",
    ".wasm": "application/wasm",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".otf": "font/otf",
    ".eot": "application/vnd.ms-fontobject",
    ".png": "image/png",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".bmp": "image/bmp",
    ".mp4": "video/mp4",
    ".m4v": "video/x-m4v",
    ".webm": "video/webm",
    ".mov": "video/quicktime",
    ".mp3": "audio/mpeg",
    ".m4a": "audio/mp4",
    ".ogg": "audio/ogg",
    ".wav": "audio/wav",
    ".vtt": "text/vtt; charset=utf-8",
    ".riv": "application/octet-stream",
    ".sog": "application/octet-stream",
    ".buf": "application/octet-stream",
    ".bin": "application/octet-stream",
    ".glb": "model/gltf-binary",
    ".gltf": "model/gltf+json",
    ".ktx2": "image/ktx2",
    ".basis": "application/octet-stream",
    ".hdr": "application/octet-stream",
    ".exr": "image/x-exr",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml",
    ".webmanifest": "application/manifest+json",
    ".m3u8": "application/vnd.apple.mpegurl",
    ".ts": "video/mp2t",
    ".pdf": "application/pdf",
  }),
);

const CSP = [
  "default-src 'self' data: blob:",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' 'wasm-unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "media-src 'self' data: blob:",
  "connect-src 'self'",
  "worker-src 'self' blob:",
  "frame-src 'none'",
  "form-action 'none'",
  "object-src 'none'",
  "base-uri 'self'",
].join("; ");

export function mimeType(file) {
  return (
    MIME.get(path.extname(file).toLowerCase()) || "application/octet-stream"
  );
}

function headers(type, length) {
  const out = {
    "Content-Type": type,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store",
    "Referrer-Policy": "no-referrer",
    "X-Robots-Tag": "noindex, nofollow",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Content-Security-Policy": CSP,
  };
  if (length !== undefined) out["Content-Length"] = length;
  return out;
}

function send(res, request, status, body, type = "text/plain; charset=utf-8") {
  const buffer = Buffer.isBuffer(body) ? body : Buffer.from(body);
  res.writeHead(status, headers(type, buffer.length));
  res.end(request.method === "HEAD" ? undefined : buffer);
}

function safeRoute(pathname) {
  if (pathname === "/" || pathname === "/index.html") return "/";
  let route = pathname.replace(/\/+$/, "");
  if (route.endsWith("/index.html")) route = route.slice(0, -11);
  return route || "/";
}

function safeAssetPath(pathname) {
  let relative;
  try {
    relative = decodeURIComponent(pathname.replace(/^\/+/, ""));
  } catch {
    return null;
  }
  if (
    !relative ||
    relative.includes("\\") ||
    relative.includes("\0") ||
    relative
      .split("/")
      .some(
        (segment) =>
          !segment ||
          segment === "." ||
          segment === ".." ||
          segment.startsWith("."),
      )
  )
    return null;
  return relative;
}

function mappedSourceAsset(requestUrl, context) {
  // Include the entire query: /_next/image?url=...&w=32 and w=64 are different files.
  const original = normalizedAssetUrl(
    `${requestUrl.pathname}${requestUrl.search}`,
    ORIGIN,
  );
  const local = original && context.assetUrlToLocal.get(original);
  return local ? `/assets/${encodeURIComponent(local)}` : null;
}

async function verifiedFile(root, relative) {
  const candidate = path.join(root, relative);
  const actualRoot = await fsp.realpath(root).catch((error) => {
    if (error.code === "ENOENT") return null;
    throw error;
  });
  if (!actualRoot) return null;
  const actual = await fsp.realpath(candidate).catch((error) => {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") return null;
    throw error;
  });
  if (!actual) return null;
  const check = path.relative(actualRoot, actual);
  if (check.startsWith("..") || path.isAbsolute(check) || !check) return null;
  const stat = await fsp.stat(actual);
  return stat.isFile() ? { actual, stat } : null;
}

async function serveAsset(req, res, context, pathname) {
  const relative = safeAssetPath(pathname.replace(/^\/assets\//, ""));
  if (!relative) return send(res, req, 403, "Blocked asset path");
  if (!context.originalUrlByLocal.has(relative))
    return send(res, req, 404, "Asset absent from capture manifest");
  const match = await verifiedFile(context.assetsRoot, relative);
  if (!match) return send(res, req, 404, "Captured asset missing");
  const mime = mimeType(match.actual);
  if (path.extname(match.actual).toLowerCase() === ".css") {
    const original = await fsp.readFile(match.actual, "utf8");
    const sourceUrl = context.originalUrlByLocal.get(relative);
    const rewritten = rewriteCss(
      original,
      context,
      createRewriteStats(pathname),
      sourceUrl,
    );
    return send(res, req, 200, rewritten, mime);
  }
  let start = 0,
    end = match.stat.size - 1,
    status = 200;
  const range = req.headers.range;
  if (range) {
    const parsed = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!parsed || (!parsed[1] && !parsed[2])) {
      res.writeHead(416, {
        ...headers(mime),
        "Content-Range": `bytes */${match.stat.size}`,
      });
      return res.end();
    }
    if (!parsed[1]) {
      const suffix = Number(parsed[2]);
      if (suffix <= 0) start = match.stat.size;
      else start = Math.max(0, match.stat.size - suffix);
    } else {
      start = Number(parsed[1]);
      if (parsed[2]) end = Math.min(end, Number(parsed[2]));
    }
    if (
      !Number.isSafeInteger(start) ||
      !Number.isSafeInteger(end) ||
      start > end
    ) {
      res.writeHead(416, {
        ...headers(mime),
        "Content-Range": `bytes */${match.stat.size}`,
      });
      return res.end();
    }
    status = 206;
  }
  const responseHeaders = {
    ...headers(mime, end - start + 1),
    "Accept-Ranges": "bytes",
  };
  if (status === 206)
    responseHeaders["Content-Range"] =
      `bytes ${start}-${end}/${match.stat.size}`;
  res.writeHead(status, responseHeaders);
  if (req.method === "HEAD") return res.end();
  const stream = fs.createReadStream(match.actual, { start, end });
  stream.on("error", () => res.destroy());
  stream.pipe(res);
}

export async function createLocalServer({
  raw = false,
  output = DEFAULT_OUTPUT,
} = {}) {
  const context = await createCloneContext();
  const approved = new Set(context.routes);
  const server = http.createServer(async (req, res) => {
    try {
      if (!["GET", "HEAD"].includes(req.method))
        return send(res, req, 405, "Read-only offline server");
      let url;
      try {
        url = new URL(req.url, "http://127.0.0.1");
      } catch {
        return send(res, req, 400, "Malformed URL");
      }
      let pathname = url.pathname;
      if (/^\/(?:api|admin|_next\/data|__blocked__)(?:\/|$)/i.test(pathname)) {
        return send(res, req, 403, "Offline API/tracking disabled");
      }
      if (
        pathname === "/_next/image" ||
        pathname.startsWith("/_next/static/")
      ) {
        pathname = mappedSourceAsset(url, context);
        if (!pathname) return send(res, req, 404, "Uncaptured source asset");
      }
      if (pathname.startsWith("/assets/"))
        return await serveAsset(req, res, context, pathname);
      // Original JS can request an original /icons or /images path at runtime.
      const capturedAsset = mappedSourceAsset(url, context);
      if (capturedAsset)
        return await serveAsset(req, res, context, capturedAsset);
      const route = safeRoute(pathname);
      if (!approved.has(route))
        return send(res, req, 404, "Route outside approved manifest");
      if (raw) {
        const capture = context.captures.get(route);
        if (!capture) return send(res, req, 404, "HTML not captured");
        const original = await fsp.readFile(capture, "utf8");
        const { html } = renderCapture(original, route, context);
        return send(res, req, 200, html, mimeType("page.html"));
      }
      const filename = outputFileForRoute(output, route);
      const relative = path.relative(output, filename);
      const found = await verifiedFile(output, relative);
      if (!found)
        return send(
          res,
          req,
          404,
          "Assembled page missing; run build-local.mjs",
        );
      const html = await fsp.readFile(found.actual);
      return send(res, req, 200, html, mimeType("page.html"));
    } catch (error) {
      console.error(`offline-server: ${error.message}`);
      if (!res.headersSent) send(res, req, 500, "Local server error");
      else res.destroy();
    }
  });
  return { server, context };
}

function args(argv) {
  const opts = { raw: false, port: 4179, check: false, output: DEFAULT_OUTPUT };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--raw") opts.raw = true;
    else if (argv[i] === "--check") opts.check = true;
    else if (argv[i] === "--port" && argv[i + 1]) opts.port = Number(argv[++i]);
    else if (argv[i] === "--out" && argv[i + 1])
      opts.output = path.resolve(argv[++i]);
    else throw new Error(`Unknown or incomplete argument: ${argv[i]}`);
  }
  if (!Number.isInteger(opts.port) || opts.port < 0 || opts.port > 65535)
    throw new Error("Invalid --port");
  if (
    opts.output !== DEFAULT_OUTPUT &&
    !opts.output.startsWith(`${DEFAULT_OUTPUT}${path.sep}`)
  ) {
    throw new Error("Output must be under work/web-clone-benchmark/local");
  }
  return opts;
}

async function main() {
  const options = args(process.argv.slice(2));
  const { server, context } = await createLocalServer(options);
  if (options.check) {
    console.log(
      JSON.stringify({
        status: "ready",
        raw: options.raw,
        approvedRoutes: context.routes.length,
        capturedRoutes: context.captures.size,
        assetCount: context.assetPaths.size,
        manifestAssetCount: context.manifestAssetCount,
        missingManifestFileCount: context.missingManifestFiles.length,
        output: options.output,
        node: process.version,
      }),
    );
    return;
  }
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(options.port, "127.0.0.1", resolve);
  });
  const port = server.address().port;
  console.log(
    `Offline ${options.raw ? "raw" : "assembled"} preview: http://127.0.0.1:${port}/`,
  );
  for (const signal of ["SIGINT", "SIGTERM"])
    process.once(signal, () => server.close());
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
