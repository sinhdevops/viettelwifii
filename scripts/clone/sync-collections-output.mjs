#!/usr/bin/env node
// Append four source-first HTML captures and their binary assets to the
// existing verified 171-route standalone mirror; never overwrite old HTML.
import fs from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const dest = path.join(root, "outputs/viettelup-clone");
const raw = path.join(root, "work/web-clone-benchmark/raw/assets");
const local = path.join(root, "work/web-clone-benchmark/local");
const routes = JSON.parse(
  await fs.readFile(path.join(root, "data/approved-routes.json"), "utf8"),
).routes;
const manifest = JSON.parse(
  await fs.readFile(
    path.join(root, "work/web-clone-benchmark/ASSETS.json"),
    "utf8",
  ),
);
const added = [
  "/internet",
  "/goi-cuoc-gic",
  "/goi-cuoc-nine",
  "/goi-cuoc-roaming",
];
if (
  routes.length !== 175 ||
  !added.every((name, i) => routes[171 + i] === name)
) {
  throw new Error("Approved 175-route manifest mismatch");
}
if (manifest.assets.length !== 699)
  throw new Error(
    `Unexpected captured binary count: ${manifest.assets.length}`,
  );

const hash = (buf) => createHash("sha256").update(buf).digest("hex");
let copied = 0,
  matched = 0;
for (const asset of manifest.assets) {
  if (!/^[a-f0-9]{24}\.[a-z0-9]+$/i.test(asset.file))
    throw new Error(`Unsafe asset: ${asset.file}`);
  const source = await fs.readFile(path.join(raw, asset.file));
  if (source.length !== asset.bytes)
    throw new Error(`Captured asset size mismatch: ${asset.file}`);
  const target = path.join(dest, "assets", asset.file);
  const existing = await fs
    .readFile(target)
    .catch((e) => (e.code === "ENOENT" ? null : Promise.reject(e)));
  if (existing) {
    if (hash(existing) !== hash(source))
      throw new Error(`Original mirror asset changed: ${asset.file}`);
    matched++;
  } else {
    await fs.writeFile(target, source, { flag: "wx" });
    copied++;
  }
}
for (const route of added) {
  const relative = path.join(route.slice(1), "index.html");
  const source = await fs.readFile(path.join(local, relative));
  const target = path.join(dest, relative);
  await fs.mkdir(path.dirname(target), { recursive: true });
  const existing = await fs
    .readFile(target)
    .catch((e) => (e.code === "ENOENT" ? null : Promise.reject(e)));
  if (existing && hash(existing) !== hash(source))
    throw new Error(`Page already differs: ${route}`);
  if (!existing) await fs.writeFile(target, source, { flag: "wx" });
}
// The source route/asset manifests are read by serve.mjs and verify.mjs.
await fs.writeFile(
  path.join(dest, "routes.json"),
  JSON.stringify({ routes }, null, 2) + "\n",
);
await fs.writeFile(
  path.join(dest, "ASSETS.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(
  JSON.stringify(
    {
      routes: routes.length,
      newlyAppendedPages: added,
      assets: manifest.assets.length,
      copiedAssets: copied,
      matchedAssets: matched,
    },
    null,
    2,
  ),
);
