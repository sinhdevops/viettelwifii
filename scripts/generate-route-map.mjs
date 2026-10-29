import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const manifest = JSON.parse(
  readFileSync(resolve(root, "data/approved-routes.json"), "utf8"),
);
const routes = Array.isArray(manifest) ? manifest : manifest.routes;
const pagesFile = resolve(root, "data/pages.json");
const pages = existsSync(pagesFile)
  ? JSON.parse(readFileSync(pagesFile, "utf8"))
  : {};

function classify(path) {
  if (path === "/") return "home";
  if (path === "/tin-tuc") return "news-list";
  if (path.startsWith("/tin-tuc/")) return "news-article";
  if (path.startsWith("/internet/")) return "internet";
  if (path.startsWith("/goi-cuoc-viettel/tra-sau/")) return "package-postpaid";
  return "package-prepaid";
}

const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
const headers = [
  "source_url",
  "local_path",
  "template",
  "data_key",
  "product_identity",
  "code_or_slug",
  "content_status",
  "source_verified",
  "asset_verified",
  "cta_verified",
  "visual_verified",
  "qa_verified",
  "blocking_reason",
];
const rows = routes.map((entry) => {
  const path = typeof entry === "string" ? entry : entry.path;
  const template = classify(path);
  const isProduct = template.startsWith("package-") || template === "internet";
  const record = pages[path];
  return [
    new URL(path, "https://viettelwifii.vn").href,
    path,
    template,
    path,
    isProduct ? path : "",
    path === "/" ? "" : path.split("/").at(-1),
    record?.status ?? "missing",
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
    "",
  ];
});

const outputDir = resolve(root, "reports/integration");
mkdirSync(outputDir, { recursive: true });
const outputPath = resolve(outputDir, "route-map.csv");
writeFileSync(
  outputPath,
  [headers, ...rows].map((row) => row.map(escapeCsv).join(",")).join("\n") +
    "\n",
);
console.log(`Created ${rows.length} route mappings at ${outputPath}`);
