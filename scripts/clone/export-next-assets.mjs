#!/usr/bin/env node
// Copies original, captured ViettelUp binaries without rasterizing or recreating them.
// Rewrites URL references in original CSS to local, byte-preserved binary files.
import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { normalizedAssetUrl } from "./build-local.mjs";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const sourceDir = path.join(root, "work/web-clone-benchmark/raw/assets");
const destinationDir = path.join(root, "public/assets/viettelup");
const cssDestination = path.join(root, "src/styles/viettelup-source.css");
const registryDestination = path.join(
  root,
  "src/generated/viettelup-assets.json",
);
const reportDestination = path.join(
  root,
  "work/web-clone-benchmark/next-assets-report.json",
);
const origin = "https://viettelwifii.vn";

// Browser code only needs path/query keys for origin assets. External CDN
// source keys remain absolute so distinct hosts cannot collide.
function browserAssetKey(value) {
  const url = new URL(value);
  url.hash = "";
  return url.origin === origin ? `${url.pathname}${url.search}` : url.href;
}

const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");
const manifest = JSON.parse(
  await fs.readFile(
    path.join(root, "work/web-clone-benchmark/ASSETS.json"),
    "utf8",
  ),
);
if (!Array.isArray(manifest.assets) || manifest.assets.length < 591) {
  throw new Error(
    "Expected the original 591-resource inventory plus newly captured resources",
  );
}

const registry = Object.create(null);
const byUrl = new Map();
let copied = 0,
  preserved = 0,
  bytes = 0;
await fs.mkdir(destinationDir, { recursive: true });
for (const item of manifest.assets) {
  if (
    !/^[a-f0-9]{24}\.[a-z0-9]+$/i.test(item.file) ||
    item.localPath !== `assets/${item.file}`
  ) {
    throw new Error(`Bad original asset manifest path: ${item.url}`);
  }
  const normalized = normalizedAssetUrl(item.url);
  if (!normalized || !item.url.startsWith("https://"))
    throw new Error(`Bad source URL ${item.url}`);
  const inputPath = path.join(sourceDir, item.file);
  const outputPath = path.join(destinationDir, item.file);
  const input = await fs.readFile(inputPath);
  if (input.length !== item.bytes)
    throw new Error(`Source asset size changed: ${item.file}`);
  try {
    const previous = await fs.readFile(outputPath);
    if (hash(previous) !== hash(input))
      throw new Error(`Output collision: ${outputPath}`);
    preserved++;
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await fs.writeFile(outputPath, input, { flag: "wx" });
    copied++;
  }
  const destination = `/assets/viettelup/${item.file}`;
  byUrl.set(normalized, destination);
  const key = browserAssetKey(item.url);
  if (registry[key] && registry[key] !== destination)
    throw new Error(`Conflicting local assets for ${key}`);
  registry[key] = destination;
  bytes += input.length;
}

const styles = manifest.assets.filter((item) =>
  new URL(item.url).pathname.endsWith(".css"),
);
if (styles.length !== 2)
  throw new Error(`Unexpected source CSS count: ${styles.length}`);
let rewrittenCssUrls = 0;
const sourceStyles = [];
for (const stylesheet of styles) {
  const css = await fs.readFile(path.join(sourceDir, stylesheet.file), "utf8");
  const localized = css.replace(
    /url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/gi,
    (full, quote, reference) => {
      if (/^(?:data:|blob:|#)/i.test(reference)) return full;
      const original = normalizedAssetUrl(reference, stylesheet.url);
      const destination = byUrl.get(original);
      if (!destination)
        throw new Error(
          `CSS dependency not captured: ${reference} from ${stylesheet.url}`,
        );
      rewrittenCssUrls++;
      return `url("${destination}")`;
    },
  );
  sourceStyles.push(
    `/* Captured CSS: ${new URL(stylesheet.url).pathname} */\n${localized}`,
  );
}

await fs.mkdir(path.dirname(cssDestination), { recursive: true });
await fs.mkdir(path.dirname(registryDestination), { recursive: true });
await fs.writeFile(cssDestination, sourceStyles.join("\n"), "utf8");
await fs.writeFile(
  registryDestination,
  JSON.stringify(registry, null, 2) + "\n",
  "utf8",
);
const report = {
  source: origin,
  assets: manifest.assets.length,
  copied,
  preserved,
  byteCount: bytes,
  originalStylesheets: styles.map((s) => s.url),
  rewrittenCssUrls,
  assetPath: path.relative(root, destinationDir),
  cssPath: path.relative(root, cssDestination),
  registryPath: path.relative(root, registryDestination),
};
await fs.writeFile(
  reportDestination,
  JSON.stringify(report, null, 2) + "\n",
  "utf8",
);
console.log(JSON.stringify(report, null, 2));
