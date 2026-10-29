#!/usr/bin/env node
/**
 * Build an auditable, route-specific preview manifest from the captured source.
 * This is metadata for Next.js routing, never a substitute for porting original
 * markup into semantic TSX or a signal that editorial/visual QA is complete.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const readJson = async (name) =>
  JSON.parse(await fs.readFile(path.join(root, name), "utf8"));
const scope = (await readJson("data/approved-routes.json")).routes;
const inventory = await readJson(
  "work/web-clone-benchmark/reports/source-dom-inventory.json",
);
if (scope.length !== 175 || inventory.routes.length !== 171) {
  throw new Error(
    "Expected original 171 source DOM records and four appended collection captures",
  );
}
const kinds = {
  home: "home",
  news_index: "news-list",
  "mobile_detail.prepaid": "package",
  "mobile_detail.postpaid": "package",
  internet_detail: "internet",
  news_article: "news-article",
};
const pages = {};
for (let index = 0; index < 171; index++) {
  const route = inventory.routes[index];
  const pathName = scope[index];
  if (
    route.route !== pathName ||
    !kinds[route.templateId] ||
    !route.rawSha256 ||
    !route.headline
  ) {
    throw new Error(`Missing original source evidence for route ${pathName}`);
  }
  const entry = {
    kind: kinds[route.templateId],
    title: route.title || route.headline,
    description: route.description || route.headline,
    heading: route.headline,
    rawHtmlPath: route.rawHtmlPath,
    rawSha256: route.rawSha256,
    sourceUrl: route.sourceUrl,
    capturedAt: inventory.generatedAt,
    templateId: route.templateId,
  };
  if (entry.kind === "package" || entry.kind === "internet") {
    entry.product = {
      id: pathName,
      code: pathName.split("/").at(-1),
      subscription:
        route.templateId === "mobile_detail.postpaid"
          ? "postpaid"
          : route.templateId === "mobile_detail.prepaid"
            ? "general"
            : "unspecified",
    };
  }
  pages[pathName] = entry;
}
const newCaptures = await readJson(
  "work/web-clone-benchmark/reports/collections-capture.json",
);
for (let index = 0; index < 4; index++) {
  const route = newCaptures.pages[index];
  const pathName = scope[171 + index];
  if (!route || route.route !== pathName || !route.sha256 || !route.title) {
    throw new Error(`Missing collection source capture for ${pathName}`);
  }
  pages[pathName] = {
    kind: "collection",
    title: route.title,
    description: route.title,
    heading: route.heading[0] || route.title,
    rawHtmlPath: `work/web-clone-benchmark/raw/html/${route.filename}`,
    rawSha256: route.sha256,
    sourceUrl: `https://viettelwifii.vn${pathName}`,
    capturedAt: newCaptures.capturedAt,
    templateId: `collection.${pathName.slice(1)}`,
  };
}
const filename = path.join(root, "src/generated/viettelup-source-pages.json");
await fs.mkdir(path.dirname(filename), { recursive: true });
await fs.writeFile(filename, JSON.stringify(pages, null, 2) + "\n", "utf8");
console.log(
  `PASS ${Object.keys(pages).length}/175 route-specific source metadata; no editorial status changed`,
);
