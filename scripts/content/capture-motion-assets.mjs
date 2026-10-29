import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { inflateRawSync } from "node:zlib";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../../", import.meta.url));
const directory = path.join(root, "public/assets/viettelup-motion");
const sources = [
  ["travel.lottie", "/goi-cuoc-roaming"],
  ["ruler.lottie", "/goi-cuoc-gic"],
  ["plane.lottie", "/goi-cuoc-nine"],
  ["gift.lottie", "/internet"],
  ["dotlottie-player.wasm", null],
];
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");
function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit++)
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

// Inspect in memory only: keep the downloaded ZIP byte-for-byte unchanged.
function inspectArchive(buffer) {
  let end = buffer.length - 22;
  while (
    end >= Math.max(0, buffer.length - 65557) &&
    buffer.readUInt32LE(end) !== 0x06054b50
  )
    end--;
  if (end < 0) throw new Error("Missing ZIP end record");
  const count = buffer.readUInt16LE(end + 10);
  let cursor = buffer.readUInt32LE(end + 16);
  const files = new Map();
  for (let index = 0; index < count; index++) {
    if (buffer.readUInt32LE(cursor) !== 0x02014b50)
      throw new Error("Invalid ZIP directory");
    const method = buffer.readUInt16LE(cursor + 10);
    const compressed = buffer.readUInt32LE(cursor + 20);
    const size = buffer.readUInt32LE(cursor + 24);
    const nameLength = buffer.readUInt16LE(cursor + 28);
    const extraLength = buffer.readUInt16LE(cursor + 30);
    const commentLength = buffer.readUInt16LE(cursor + 32);
    const offset = buffer.readUInt32LE(cursor + 42);
    const name = buffer
      .subarray(cursor + 46, cursor + 46 + nameLength)
      .toString();
    if (buffer.readUInt32LE(offset) !== 0x04034b50)
      throw new Error("Invalid ZIP local record");
    const start =
      offset +
      30 +
      buffer.readUInt16LE(offset + 26) +
      buffer.readUInt16LE(offset + 28);
    const payload = buffer.subarray(start, start + compressed);
    if (method !== 0 && method !== 8)
      throw new Error(`Unsupported ZIP method ${method}`);
    const data = method === 8 ? inflateRawSync(payload) : payload;
    if (data.length !== size)
      throw new Error(`Invalid uncompressed size: ${name}`);
    if (crc32(data) !== buffer.readUInt32LE(cursor + 16))
      throw new Error(`Invalid CRC32: ${name}`);
    files.set(name, data);
    cursor += 46 + nameLength + extraLength + commentLength;
  }
  const manifest = JSON.parse(files.get("manifest.json").toString());
  const animations = [];
  const unresolved = [];
  for (const [name, data] of files) {
    if (!/^(animations|a)\/.*\.json$/.test(name)) continue;
    const animation = JSON.parse(data.toString());
    const images = [];
    for (const asset of animation.assets ?? []) {
      if (typeof asset.p !== "string") continue;
      const reference = `${asset.u ?? ""}${asset.p}`;
      const embedded = reference.startsWith("data:");
      const candidates = [
        reference,
        path.posix.normalize(
          path.posix.join(path.posix.dirname(name), reference),
        ),
        `images/${asset.p}`,
        `i/${asset.p}`,
      ];
      const archivePath = candidates.find((candidate) => files.has(candidate));
      const item = {
        id: asset.id,
        width: asset.w,
        height: asset.h,
        reference,
        embedded,
        archivePath: archivePath ?? null,
      };
      images.push(item);
      if (!embedded && !archivePath)
        unresolved.push({ animation: name, reference });
    }
    const fonts = animation.fonts?.list ?? [];
    for (const font of fonts) {
      if (
        font.fPath &&
        !font.fPath.startsWith("data:") &&
        !files.has(font.fPath)
      )
        unresolved.push({ animation: name, font });
      else if (!font.fPath && !(animation.chars?.length > 0))
        unresolved.push({
          animation: name,
          font,
          reason: "Font has no bundled path or glyph outlines",
        });
    }
    animations.push({
      path: name,
      version: animation.v,
      width: animation.w,
      height: animation.h,
      frameRate: animation.fr,
      inPoint: animation.ip,
      outPoint: animation.op,
      durationSeconds: (animation.op - animation.ip) / animation.fr,
      layerCount: animation.layers?.length,
      images,
      fonts,
      glyphCount: animation.chars?.length ?? 0,
    });
  }
  if (!animations.length) throw new Error("No animation JSON found");
  return {
    manifest,
    crc32Verified: true,
    entries: [...files].map(([name, data]) => ({
      name,
      bytes: data.length,
      sha256: hash(data),
      magicHex: data.subarray(0, 12).toString("hex"),
    })),
    animations,
    unresolvedDependencies: unresolved,
    selfContained: unresolved.length === 0,
  };
}

await mkdir(directory, { recursive: true });
const assets = await Promise.all(
  sources.map(async ([name, page]) => {
    const url = page
      ? `https://viettelwifii.vn/${name}`
      : "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web@0.58.1/dist/dotlottie-player.wasm";
    const item = {
      name,
      sourceUrl: url,
      pageUrl: page ? `https://viettelwifii.vn${page}` : null,
      localPath: `public/assets/viettelup-motion/${name}`,
      frontendUrl: `/assets/viettelup-motion/${name}`,
      rights: page
        ? "Public source; reuse rights not independently established"
        : "Exact public npm runtime artifact; package license not independently reviewed",
      fetchedAt: new Date().toISOString(),
    };
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      Object.assign(item, {
        httpStatus: response.status,
        responseUrl: response.url,
        contentType: response.headers.get("content-type"),
        contentLength: response.headers.get("content-length"),
        contentEncoding: response.headers.get("content-encoding"),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      Object.assign(item, {
        bytes: buffer.length,
        sha256: hash(buffer),
        magicHex: buffer.subarray(0, 8).toString("hex"),
      });
      if (name.endsWith(".lottie")) {
        if (buffer.readUInt32LE(0) !== 0x04034b50)
          throw new Error("Not a ZIP/dotLottie");
        item.inspection = inspectArchive(buffer);
      } else {
        if (buffer.subarray(0, 8).toString("hex") !== "0061736d01000000")
          throw new Error("Not WASM v1");
        item.wasmValidated = WebAssembly.validate(buffer);
        if (!item.wasmValidated) throw new Error("WASM validation failed");
      }
      const target = path.join(directory, name);
      let previous;
      try {
        previous = await readFile(target);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (previous && hash(previous) !== item.sha256)
        throw new Error("Existing asset differs; refusing silent replacement");
      if (!previous) await writeFile(target, buffer, { flag: "wx" });
      item.savedFileHashVerified = hash(await readFile(target)) === item.sha256;
      item.status = "verified-binary";
    } catch (error) {
      item.status = "failed";
      item.error = error.message;
    }
    return item;
  }),
);
const inventory = {
  taskId: "MOTION-ASSETS-01",
  capturedAt: new Date().toISOString(),
  runtime: {
    package: "@lottiefiles/dotlottie-web",
    version: "0.58.1",
    evidence: "public/assets/viettelup/59d5a49e6e3d181f82e2004f.js",
  },
  assets,
};
await writeFile(
  path.join(directory, "inventory.json"),
  `${JSON.stringify(inventory, null, 2)}\n`,
);
for (const asset of assets)
  console.log(
    `${asset.name}: ${asset.status}, ${asset.bytes ?? 0} bytes, ${asset.sha256 ?? asset.error}`,
  );
if (
  assets.some(
    (asset) =>
      asset.status === "failed" || asset.inspection?.selfContained === false,
  )
)
  process.exitCode = 1;
