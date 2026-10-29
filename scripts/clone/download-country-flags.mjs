import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";

// Source-first asset batch only. Never executes the captured source bundle.
const root = new URL("../../", import.meta.url);
const sourcePage = "https://viettelwifii.vn/goi-cuoc-roaming";
const bundlePath = "public/assets/viettelup/fb092449315072b0fa1014ca.js";
const template = "https://hatscripts.github.io/circle-flags/flags/{code}.svg";
const bundle = await readFile(new URL(bundlePath, root), "utf8");
if (!bundle.includes("https://hatscripts.github.io/circle-flags/flags/"))
  throw Error("Source URL changed");
const data = await readFile(
  new URL("src/features/collections/roaming-country-data.ts", root),
  "utf8",
);
const countryJson = data.split(
  "export const roamingCountries: readonly RoamingCountry[] = ",
)[1];
const countries = JSON.parse(
  countryJson.slice(0, countryJson.indexOf("\n];") + 2),
);
const codes = [...new Set(countries.map((c) => c.flag.toLowerCase()))].sort();
const assetDir = "public/assets/viettelup-country-flags/";
const reportBase =
  "reports/agent-handoffs/vt_assets_reference/COLLECTION-FLAGS-02";
await mkdir(new URL(assetDir, root), { recursive: true });
await mkdir(new URL("reports/agent-handoffs/vt_assets_reference/", root), {
  recursive: true,
});
const mapping = {};
const entries = [];
let cursor = 0;
const started = Date.now();
async function worker() {
  while (cursor < codes.length) {
    const code = codes[cursor++];
    const sourceUrl = template.replace("{code}", code);
    const entry = {
      code,
      sourcePage,
      sourceUrl,
      checkedAt: new Date().toISOString(),
      countryIds: countries
        .filter((c) => c.flag.toLowerCase() === code)
        .map((c) => c.id),
    };
    mapping[code] = null;
    try {
      if (!/^[a-z0-9-]+$/.test(code))
        throw Error(
          "Unsafe filename; source code preserved without substitution",
        );
      if (Date.now() - started > 90000)
        throw Error("Batch time budget exhausted; not requested");
      const response = await fetch(sourceUrl, {
        signal: AbortSignal.timeout(7000),
        redirect: "error",
      });
      entry.httpStatus = response.status;
      entry.mime = response.headers.get("content-type");
      if (!response.ok) throw Error(`HTTP ${response.status}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      const svg = bytes.toString("utf8");
      if (
        !/^image\/svg\+xml(?:;|$)/i.test(entry.mime ?? "") ||
        !/<svg\b[^>]*>[\s\S]*<\/svg>\s*$/i.test(svg)
      )
        throw Error("Invalid SVG MIME/content");
      if (
        /<script\b|\bon\w+\s*=|<foreignObject\b|(?:href|src)\s*=\s*["'](?:https?:|javascript:)/i.test(
          svg,
        )
      )
        throw Error("Active or external SVG content rejected");
      entry.bytes = bytes.length;
      entry.sha256 = createHash("sha256").update(bytes).digest("hex");
      entry.viewBox = svg.match(/\bviewBox=["']([^"']+)["']/)?.[1] ?? null;
      entry.width = svg.match(/\bwidth=["']([^"']+)["']/)?.[1] ?? null;
      entry.height = svg.match(/\bheight=["']([^"']+)["']/)?.[1] ?? null;
      entry.localPath = `${assetDir}${code}.svg`;
      const dest = new URL(entry.localPath, root);
      let existing;
      try {
        existing = await readFile(dest);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
      }
      if (existing && !existing.equals(bytes))
        throw Error("Existing asset differs; refusing replacement");
      if (!existing) await writeFile(dest, bytes, { flag: "wx" });
      entry.status = "verified";
      mapping[code] = `/assets/viettelup-country-flags/${code}.svg`;
    } catch (error) {
      entry.status = "failed";
      entry.error = `${error.message}${error.cause?.code ? ` (${error.cause.code})` : ""}`;
    }
    entries.push(entry);
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
entries.sort((a, b) => a.code.localeCompare(b.code));
const verified = entries.filter((e) => e.status === "verified");
const failures = entries.filter((e) => e.status !== "verified");
const duplicateHashes = Object.entries(
  Object.groupBy(verified, (e) => e.sha256),
)
  .filter(([, group]) => group.length > 1)
  .map(([sha256, group]) => ({ sha256, codes: group.map((e) => e.code) }));
const report = {
  task_id: "COLLECTION-FLAGS-02",
  status: failures.length
    ? "ready_for_review_with_source_gaps"
    : "ready_for_review",
  sourcePage,
  bundlePath,
  bundleSha256: createHash("sha256").update(bundle).digest("hex"),
  sourceTemplate: template,
  normalSandboxProbe:
    "fetch vn.svg failed EACCES; authorized network escalation used for batch",
  sourceRecords: countries.length,
  uniqueCodes: codes.length,
  verified: verified.length,
  failures: failures.length,
  concurrency: 4,
  timeoutMs: 7000,
  duplicateHashes,
  rights:
    "Public source reference established; no separate reuse license verified. Public accessibility does not grant reuse rights.",
  entries,
};
await writeFile(
  new URL("src/features/collections/roaming-country-flags.json", root),
  JSON.stringify(
    Object.fromEntries(codes.map((c) => [c, mapping[c]])),
    null,
    2,
  ) + "\n",
);
await writeFile(
  new URL(`${reportBase}.json`, root),
  JSON.stringify(report, null, 2) + "\n",
);
await writeFile(
  new URL(`${reportBase}.md`, root),
  `# COLLECTION-FLAGS-02\n\nStatus: ${report.status}\n\nSource: ${sourcePage}\n\nExact source URL: \`${template}\`; source expression uses \`flag.toLowerCase()\`. Bundle SHA-256: ${report.bundleSha256}.\n\n${countries.length} readonly source records; ${codes.length} unique codes; ${verified.length} verified SVG downloads; ${failures.length} failed. Concurrency 4; bounded request and batch timeouts. Normal sandbox probe failed EACCES; batch uses authorized public-network escalation. Exact downloaded bytes retained with SHA-256, MIME, viewBox and dimensions in companion JSON. Duplicate hash groups: ${duplicateHashes.length}.\n\nFrozen integration contract: import default JSON from \`./roaming-country-flags.json\`; lookup \`flags[country.flag.toLowerCase()]\`. Values are local public URLs or null for failed/source-invalid codes. Do not synthesize or substitute flags. Lead owns picker wiring and missing-asset behavior. Source uses 18×18 rendering.\n\nFailures: ${failures.map((e) => `${e.code}: ${e.error}`).join("; ") || "none"}.\n\nRights: ${report.rights}\n\nSelf-check only: no picker/UI edits, server/build, browser, screenshot or independent QA. No changes to source records, existing asset namespace, registry, Boardroom or generated content. Lead should verify picker rendering after wiring.\n`,
);
console.log(
  JSON.stringify({
    records: countries.length,
    unique: codes.length,
    verified: verified.length,
    failures: failures.map((e) => ({ code: e.code, error: e.error })),
    duplicateHashes,
  }),
);
