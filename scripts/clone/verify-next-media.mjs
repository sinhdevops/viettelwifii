#!/usr/bin/env node
// Audits local copies and literal media references in the Next.js source.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const registry = JSON.parse(
  fs.readFileSync(
    path.join(root, "src/generated/viettelup-assets.json"),
    "utf8",
  ),
);
const issues = [];
const checked = new Set();

function key(value, sort = false) {
  const absolute = /^https?:\/\//i.test(value);
  const url = new URL(value, "http://localhost");
  url.hash = "";
  if (sort) {
    const pairs = [...url.searchParams.entries()].sort(
      ([a, b], [c, d]) => a.localeCompare(c) || b.localeCompare(d),
    );
    url.search = "";
    for (const [a, b] of pairs) url.searchParams.append(a, b);
  }
  return absolute ? url.href : `${url.pathname}${url.search}`;
}
const sorted = new Map(
  Object.entries(registry).map(([source, local]) => [key(source, true), local]),
);
const localFile = (url) => path.join(root, "public", url.slice(1));

for (const [source, local] of Object.entries(registry)) {
  if (source.includes("viettelwifii.vn"))
    issues.push(`Source domain in client registry: ${source}`);
  if (!local.startsWith("/assets/viettelup/"))
    issues.push(`Nonlocal registry destination: ${local}`);
  else if (
    !fs.existsSync(localFile(local)) ||
    fs.statSync(localFile(local)).size === 0
  )
    issues.push(`Missing or empty local media file: ${local}`);
}

const capturedAsset = /^\/(?:_next\/(?:image|static\/media)|images|icons)\b/i;
const remoteImage =
  /^https?:\/\/[^\s]+\.(?:avif|gif|jpe?g|png|svg|webp)(?:\?.*)?$/i;
function check(value, location) {
  if (value.startsWith("/assets/")) {
    if (!fs.existsSync(localFile(value.split("?")[0])))
      issues.push(`Missing direct asset ${value} in ${location}`);
    checked.add(value);
    return;
  }
  if (!capturedAsset.test(value) && !remoteImage.test(value)) return;
  const result = registry[key(value)] ?? sorted.get(key(value, true));
  if (!result) issues.push(`Unmapped media ${value} in ${location}`);
  checked.add(value);
}

function visit(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      visit(file);
      continue;
    }
    if (!/\.tsx?$/.test(file)) continue;
    const source = fs.readFileSync(file, "utf8");
    const ast = ts.createSourceFile(
      file,
      source,
      ts.ScriptTarget.Latest,
      true,
      file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
    );
    function walk(node) {
      if (
        ts.isStringLiteral(node) ||
        ts.isNoSubstitutionTemplateLiteral(node)
      ) {
        const value = node.text;
        if (
          value.startsWith("/assets/") ||
          capturedAsset.test(value) ||
          remoteImage.test(value)
        )
          check(value, path.relative(root, file));
      }
      ts.forEachChild(node, walk);
    }
    walk(ast);
  }
}
visit(path.join(root, "src"));

const styles = fs.readFileSync(
  path.join(root, "src/styles/viettelup-source.css"),
  "utf8",
);
for (const [, source] of styles.matchAll(
  /url\(\s*["']?([^)'"\s]+)["']?\s*\)/gi,
)) {
  if (/^(?:data:|blob:|#)/i.test(source)) continue;
  if (!source.startsWith("/assets/") || !fs.existsSync(localFile(source)))
    issues.push(`CSS media is not local: ${source}`);
}

console.log(
  `Media audit: ${Object.keys(registry).length} captured files, ${checked.size} source references, ${issues.length} errors`,
);
for (const issue of issues.slice(0, 35)) console.error(`- ${issue}`);
if (issues.length > 35) console.error(`... plus ${issues.length - 35} more`);
if (issues.length) process.exitCode = 1;
