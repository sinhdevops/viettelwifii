import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const projectDir = resolve(import.meta.dirname, "..");
const source = JSON.parse(
  readFileSync(resolve(projectDir, "data/approved-routes.json"), "utf8"),
);
const routes = (Array.isArray(source) ? source : source.routes).map((value) =>
  typeof value === "string" ? value : value.path,
);
const kind = (path) =>
  path === "/"
    ? "home"
    : path.startsWith("/internet/")
      ? "internet"
      : path.startsWith("/goi-cuoc-viettel/")
        ? "package"
        : path === "/tin-tuc"
          ? "news-list"
          : "news-article";
const quote = (value) => `"${String(value).replaceAll('"', '""')}"`;
mkdirSync(resolve(projectDir, "reports"), { recursive: true });
const rows = [
  [
    "route",
    "archetype",
    "desktop_baseline",
    "mobile_baseline",
    "assets_ok",
    "interactions_ok",
    "next_ported",
    "reviewed",
  ],
  ...routes.map((path) => [
    path,
    kind(path),
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
  ]),
];
writeFileSync(
  resolve(projectDir, "reports/clone-checklist.csv"),
  rows.map((row) => row.map(quote).join(",")).join("\n") + "\n",
);
console.log(
  `Created reports/clone-checklist.csv for ${routes.length} approved URLs.`,
);
