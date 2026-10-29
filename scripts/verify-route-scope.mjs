import { readFileSync, existsSync } from "node:fs";

const filename = new URL("../data/approved-routes.json", import.meta.url);
if (!existsSync(filename)) {
  console.error(
    "BLOCKED: Missing data/approved-routes.json from the user-supplied sitemap. See data/README.md.",
  );
  process.exit(1);
}
const data = JSON.parse(readFileSync(filename, "utf8"));
const entries = Array.isArray(data) ? data : data.routes;
if (!Array.isArray(entries))
  throw new Error("Expected route array or {routes: array}");
const routes = entries.map((item) =>
  typeof item === "string" ? item : item.path,
);
if (
  routes.some(
    (path) =>
      typeof path !== "string" ||
      !path.startsWith("/") ||
      (path !== "/" && path.endsWith("/")),
  )
)
  throw new Error("Invalid paths");
const count = (regex) => routes.filter((path) => regex.test(path)).length;
const counts = [
  count(/^\/$/),
  count(/^\/goi-cuoc-viettel\/(?:[^/]+\/)?[^/]+$/),
  count(/^\/tin-tuc(?:\/[^/]+)?$/),
  count(/^\/internet\/[^/]+$/),
];
const extra = [
  "/internet",
  "/goi-cuoc-gic",
  "/goi-cuoc-nine",
  "/goi-cuoc-roaming",
];
if (
  routes.length !== 175 ||
  new Set(routes).size !== 175 ||
  counts.join(",") !== "1,116,36,18" ||
  !extra.every((p, i) => routes[171 + i] === p)
) {
  console.error(
    `BLOCKED: expected original [1,116,36,18] = 171 plus four category routes, received [${counts}] = ${routes.length}.`,
  );
  process.exit(1);
}

// Category counts alone can miss a swapped path. The master prompt appendix is
// the approved source of truth, including case and position in the list.
const masterPath = new URL(
  "../docs/MASTER_PROMPT_VIETTELUP.md",
  import.meta.url,
);
const master = readFileSync(masterPath, "utf8");
const appendix = master.split(
  "## Phụ lục — Danh sách 171 route do tôi cung cấp",
)[1];
const appendixJson = appendix?.match(/```json\s*([\s\S]*?)\s*```/)?.[1];
if (!appendixJson)
  throw new Error("Missing approved JSON route appendix in master prompt");
const { referenceOrigin, routes: approved } = JSON.parse(appendixJson);
if (referenceOrigin !== "https://viettelwifii.vn" || !Array.isArray(approved)) {
  throw new Error("Invalid approved source origin or route appendix");
}
const mismatch = routes
  .slice(0, 171)
  .findIndex((path, index) => path !== approved[index]);
if (approved.length !== 171 || mismatch >= 0) {
  throw new Error(
    `Manifest differs from master appendix at index ${mismatch >= 0 ? mismatch : Math.min(routes.length, approved.length)}: manifest=${JSON.stringify(routes[mismatch])}, approved=${JSON.stringify(approved[mismatch])}`,
  );
}
console.log(
  "PASS: original 171 exactly match master appendix, plus four user-approved collection URLs (175 total).",
);
