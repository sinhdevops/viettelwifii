#!/usr/bin/env node
// Read-only HTTP audit of the complete approved Next.js preview route scope.
// This is a content/routing smoke check, not visual or interaction acceptance.
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { resolve, join } from "node:path";

const root = resolve(import.meta.dirname, "../..");
const origin = new URL(process.argv[2] || "http://127.0.0.1:3211/");
if (
  origin.protocol !== "http:" ||
  !["localhost", "127.0.0.1", "[::1]"].includes(origin.hostname)
) {
  throw new Error("Only loopback development URLs may be audited.");
}
const manifest = JSON.parse(
  await readFile(join(root, "data/approved-routes.json"), "utf8"),
);
const source = JSON.parse(
  await readFile(
    join(root, "src/generated/viettelup-source-pages.json"),
    "utf8",
  ),
);
const routes = Array.isArray(manifest)
  ? manifest
  : (manifest.paths ?? manifest.routes);
if (!Array.isArray(routes) || routes.length !== 175)
  throw new Error("Expected exact 175-route manifest.");
const normalizedRoutes = routes.map((route) =>
  typeof route === "string" ? route : route.path,
);
// Headings captured from nested spans can have different text-node spacing
// while remaining visually and semantically identical.
const normalizeHeading = (value) =>
  String(value).normalize("NFKC").replace(/\s+/g, "").toLocaleLowerCase("vi");
// A full-site audit can otherwise exhaust the Next.js dev bundler's memory by
// compiling several large source-backed pages at the same time.
const concurrency = Math.max(
  1,
  Math.min(4, Number(process.env.NEXT_SMOKE_CONCURRENCY || 1)),
);
const unescapeHtml = (text) =>
  String(text)
    .replace(
      /&(?:amp|quot|apos|lt|gt|nbsp);/g,
      (v) =>
        ({
          "&amp;": "&",
          "&quot;": '"',
          "&apos;": "'",
          "&lt;": "<",
          "&gt;": ">",
          "&nbsp;": " ",
        })[v],
    )
    .replace(/&#(x[\da-f]+|\d+);/gi, (_, n) =>
      String.fromCodePoint(
        Number.parseInt(
          n.startsWith("x") ? n.slice(1) : n,
          n.startsWith("x") ? 16 : 10,
        ),
      ),
    )
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
const extract = (html, tag) =>
  [
    ...html.matchAll(
      new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "gi"),
    ),
  ].map((part) => unescapeHtml(part[1]));
const check = async (path) => {
  try {
    const url = new URL(path, origin);
    const response = await fetch(url, {
      signal: AbortSignal.timeout(60000),
      headers: { Accept: "text/html" },
    });
    const html = await response.text();
    const expected = source[path];
    const title = extract(html, "title")[0] || "";
    const headings = extract(html, "h1");
    const issues = [];
    if (response.status !== 200) issues.push(`HTTP ${response.status}`);
    if (!title) issues.push("missing title");
    if (headings.length !== 1) issues.push(`H1 count ${headings.length}`);
    if (
      expected?.heading &&
      headings.length &&
      !normalizeHeading(headings[0]).includes(
        normalizeHeading(expected.heading),
      )
    ) {
      // Original heading includes nested spans; compare normalized text but preserve differences.
      issues.push(`source H1 mismatch (${headings[0].slice(0, 75)})`);
    }
    if (
      !/name=["']robots["'][^>]*noindex|content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots/i.test(
        html,
      )
    )
      issues.push("noindex absent");
    if (html.length < 1000) issues.push("suspiciously short HTML");
    return {
      path,
      status: response.status,
      title,
      h1: headings,
      bytes: html.length,
      issues,
    };
  } catch (error) {
    return { path, status: null, issues: [String(error).slice(0, 320)] };
  }
};
const results = new Array(normalizedRoutes.length);
let cursor = 0;
await Promise.all(
  Array.from({ length: concurrency }, async () => {
    while (cursor < normalizedRoutes.length) {
      const index = cursor++;
      results[index] = await check(normalizedRoutes[index]);
      if ((index + 1) % 30 === 0)
        console.log(`Checked ${index + 1}/${normalizedRoutes.length}`);
    }
  }),
);
const unknown = await check("/this-route-must-not-exist-true-clone");
const bad = results.filter((entry) => entry.issues.length);
const result = {
  checkedAt: new Date().toISOString(),
  origin: origin.href,
  routeCount: normalizedRoutes.length,
  http200Count: results.filter((x) => x.status === 200).length,
  issueCount: bad.length,
  unknownRouteHttp: unknown.status,
  results,
};
const out = join(root, "reports/integration");
await mkdir(out, { recursive: true });
await writeFile(
  join(out, "true-clone-next-175.json"),
  JSON.stringify(result, null, 2),
);
console.log(
  `Next preview ${result.http200Count}/${routes.length} HTTP 200, ${result.issueCount} flagged; unknown route HTTP ${unknown.status}`,
);
for (const entry of bad.slice(0, 20))
  console.log(`${entry.path}: ${entry.issues.join("; ")}`);
if (bad.length > 20)
  console.log(`... ${bad.length - 20} further flagged routes in report`);
if (bad.length || unknown.status !== 404) process.exitCode = 1;
