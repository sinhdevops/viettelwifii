/**
 * ARCHIVED: the source pages are now authored TSX with typed records.
 * This historical converter is retained for reference only. Its original
 * output paths would overwrite the maintained route mapping and page bodies.
 * Edit article-records.ts, card-records.ts, listing-records.ts and the named
 * source-pages/*.tsx sections instead. There is deliberately no force flag.
 */
throw new Error(
  "Archived news converter is disabled: edit authored news components and records; automatic regeneration would overwrite the refactor.",
);

/**
 * One-way offline conversion of the 36 approved archived news documents.
 * Output is reviewable, route-specific TSX; the browser/DOM parser is never
 * included in the Next.js runtime. Run: node scripts/news/generate-source-news.cjs
 */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("@playwright/test");

const cwd = process.cwd();
const approved = require(path.join(cwd, "data/approved-routes.json")).routes;
const assets = require(path.join(cwd, "src/generated/viettelup-assets.json"));
const routes = new Set(approved);
const dest = path.join(cwd, "src/features/news/source-pages");
const selfClosing = new Set([
  "img",
  "br",
  "hr",
  "input",
  "source",
  "area",
  "wbr",
  "embed",
]);
const safeAttrs = new Set([
  "class",
  "id",
  "href",
  "alt",
  "title",
  "width",
  "height",
  "loading",
  "decoding",
  "role",
  "target",
  "rel",
  "type",
  "name",
  "value",
  "scope",
  "colspan",
  "rowspan",
  "itemprop",
  "itemscope",
  "itemtype",
  "datetime",
  "lang",
  "dir",
  "tabindex",
  "style",
  "download",
]);
const attrName = {
  class: "className",
  colspan: "colSpan",
  rowspan: "rowSpan",
  itemprop: "itemProp",
  itemscope: "itemScope",
  itemtype: "itemType",
  datetime: "dateTime",
  tabindex: "tabIndex",
};
const stats = {
  pages: 0,
  articlePages: 0,
  listingPages: 0,
  sourceImages: 0,
  outputImages: 0,
  sourceTables: 0,
  outputTables: 0,
  missingAssets: [],
  unlinkedButtons: [],
  offscopeLinks: [],
  sourceText: {},
  headings: {},
  distinctBodies: 0,
};

function cleanUrl(value) {
  const parsed = new URL(value, "https://viettelwifii.vn");
  parsed.hash = "";
  const pairs = [...parsed.searchParams.entries()].sort(
    ([k, v], [k2, v2]) => k.localeCompare(k2) || v.localeCompare(v2),
  );
  parsed.search = "";
  for (const [k, v] of pairs) parsed.searchParams.append(k, v);
  return parsed.href;
}
const registered = new Set(Object.keys(assets).map(cleanUrl));
function imageUrl(value, route) {
  try {
    if (
      !value.startsWith("/assets/viettelup/") &&
      !registered.has(cleanUrl(value))
    )
      stats.missingAssets.push([route, value]);
  } catch {
    stats.missingAssets.push([route, value]);
  }
  return `sourceAsset(${JSON.stringify(value)})`;
}
function href(value, route) {
  if (!value) return value;
  try {
    const url = new URL(value, "https://viettelwifii.vn");
    if (["viettelwifii.vn", "viettelwifii.vn"].includes(url.hostname)) {
      if (routes.has(url.pathname)) return url.pathname + url.search + url.hash;
      stats.offscopeLinks.push([route, value]);
    }
  } catch {
    /* Retain unusual source link without inferring destination. */
  }
  return value;
}
function walk(root) {
  return [root, ...(root.children || []).flatMap(walk)];
}
function textOf(root) {
  return root.text !== undefined
    ? root.text
    : (root.children || []).map(textOf).join("");
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- Retained historical converter helper; converter execution is disabled above.
function closest(root, test) {
  for (let n = root.parent; n; n = n.parent) if (test(n)) return n;
  return null;
}
function descendants(root, test) {
  return walk(root).filter(test);
}
function addParents(node, parent = null) {
  node.parent = parent;
  for (const n of node.children || []) addParents(n, node);
  return node;
}
function findButtonDestination(node, route) {
  if (node.tag !== "button") return null;
  const label = textOf(node).trim().toLocaleLowerCase("vi");
  if (label === "chi tiết") {
    // The button's companion mobile CTA identifies this specific card.
    for (let n = node.parent, i = 0; n && i < 6; n = n.parent, i++) {
      const links = descendants(
        n,
        (x) => x.tag === "a" && /^sms:/.test(x.attrs?.href || ""),
      );
      if (links.length === 1) {
        const code = new URL(links[0].attrs.href).searchParams
          .get("body")
          ?.match(/^[A-Z0-9_]+/)?.[0];
        if (code)
          for (const candidate of [
            `/goi-cuoc-viettel/${code}`,
            `/goi-cuoc-viettel/tra-sau/${code}`,
          ])
            if (routes.has(candidate)) return candidate;
      }
      if (links.length > 1) break;
    }
  }
  if (/đăng ký/i.test(label)) {
    // Mobile source CTA in the same product cell/card already exposes the
    // actual sms:290 action. Use that observed destination for desktop too.
    for (let n = node.parent, i = 0; n && i < 6; n = n.parent, i++) {
      const links = descendants(
        n,
        (x) => x.tag === "a" && /^(sms:|tel:)/.test(x.attrs?.href || ""),
      );
      if (links.length === 1) return links[0].attrs.href;
      if (links.length > 1) break;
    }
  }
  stats.unlinkedButtons.push([route, label]);
  return null;
}
function styleObject(value) {
  const obj = {};
  for (const decl of value.split(";")) {
    const split = decl.indexOf(":");
    if (split < 0) continue;
    const prop = decl.slice(0, split).trim(),
      val = decl.slice(split + 1).trim();
    if (!prop || !val || /url\s*\(/i.test(val)) continue;
    obj[prop.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())] = val;
  }
  return Object.keys(obj).length ? `style={${JSON.stringify(obj)}}` : null;
}
function jsx(node, route) {
  if (node.text !== undefined) return `{${JSON.stringify(node.text)}}`;
  if (
    !node.tag ||
    ["script", "style", "noscript", "iframe", "svg"].includes(node.tag)
  )
    return "";
  const originalTag = node.tag;
  const destination = findButtonDestination(node, route);
  const tag = originalTag === "button" && destination ? "a" : originalTag;
  const props = [];
  for (const [key, val] of Object.entries(node.attrs || {})) {
    if (
      key === "src" ||
      key === "srcset" ||
      key === "sizes" ||
      key === "data-nimg" ||
      key === "data-state" ||
      key.startsWith("on")
    )
      continue;
    if (
      !safeAttrs.has(key) &&
      !key.startsWith("aria-") &&
      !key.startsWith("data-")
    )
      continue;
    if (
      key.startsWith("aria-") &&
      originalTag === "button" &&
      destination &&
      ["aria-haspopup", "aria-controls", "aria-expanded"].includes(key)
    )
      continue;
    if (key === "type" && destination) continue;
    if (key === "href" && destination) continue;
    if (key === "itemscope") {
      props.push("itemScope");
      continue;
    }
    if (key === "style") {
      const st = styleObject(val);
      if (st) props.push(st);
      continue;
    }
    props.push(
      `${attrName[key] || key}={${JSON.stringify(key === "href" ? href(val, route) : val)}}`,
    );
  }
  if (originalTag === "img") {
    if (node.attrs?.src) props.push(`src={${imageUrl(node.attrs.src, route)}}`);
    stats.outputImages++;
  }
  if (destination)
    props.push(`href={${JSON.stringify(href(destination, route))}}`);
  else if (originalTag === "button") {
    // No source action is known. Keep the original UI accessible, but do not
    // pretend that a registration or pagination operation succeeded.
    props.push('type="button"', "disabled", 'aria-disabled="true"');
  }
  const attributes = props.length ? " " + props.join(" ") : "";
  if (selfClosing.has(tag)) return `<${tag}${attributes} />`;
  const children = (node.children || [])
    .map((child) => jsx(child, route))
    .join("");
  if (tag === "table") {
    stats.outputTables++;
    return `<div className="source-news-table-scroll" role="region" aria-label="Bảng nội dung bài viết" tabIndex={0}><table${attributes}>${children}</table></div>`;
  }
  return `<${tag}${attributes}>${children}</${tag}>`;
}

async function main() {
  fs.mkdirSync(dest, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const browserPage = await browser.newPage();
  const imports = [];
  const entries = [];
  const distinctBodyHashes = new Set();
  try {
    for (const index of [1, ...Array.from({ length: 35 }, (_, i) => 118 + i)]) {
      const route = approved[index];
      if (index === 1 ? route !== "/tin-tuc" : !route?.startsWith("/tin-tuc/"))
        throw Error(`Unexpected route index ${index}: ${route}`);
      const input = path.join(
        cwd,
        "work/web-clone-benchmark/raw/html",
        String(index).padStart(4, "0") + ".html",
      );
      const html = fs.readFileSync(input, "utf8");
      const captured = await browserPage.evaluate((source) => {
        const doc = new DOMParser().parseFromString(source, "text/html");
        const root = doc.querySelector("main > article");
        if (!root) return null;
        function serialize(n) {
          if (n.nodeType === 3) return { text: n.textContent };
          if (n.nodeType !== 1) return null;
          return {
            tag: n.tagName.toLowerCase(),
            attrs: Object.fromEntries(
              [...n.attributes].map((a) => [a.name, a.value]),
            ),
            children: [...n.childNodes].map(serialize).filter(Boolean),
          };
        }
        const body = root.querySelector("[itemprop=articleBody]");
        return {
          root: serialize(root),
          title: root.querySelector("h1")?.textContent,
          text: root.textContent,
          body: body?.textContent,
          images: root.querySelectorAll("img").length,
          tables: root.querySelectorAll("table").length,
        };
      }, html);
      if (!captured?.title)
        throw Error(`Missing captured article/H1 for ${route}`);
      stats.sourceImages += captured.images;
      stats.sourceTables += captured.tables;
      stats.sourceText[route] = captured.body?.length ?? captured.text.length;
      stats.headings[route] = captured.title;
      if (index !== 1) {
        stats.articlePages++;
        distinctBodyHashes.add(
          require("node:crypto")
            .createHash("sha256")
            .update(captured.body || "")
            .digest("hex"),
        );
      } else stats.listingPages++;
      const ast = addParents(captured.root);
      const component = `NewsSource${String(index).padStart(4, "0")}`;
      const filename = `${index === 1 ? "listing" : "article"}-${String(index).padStart(4, "0")}`;
      const file =
        `/* Archived source ${String(index).padStart(4, "0")}.html — ${route}. Generated by generate-source-news.cjs. */\n` +
        `/* eslint-disable @next/next/no-img-element */\n` +
        `import { sourceAsset } from "@/lib/viettelup-source-assets";\n` +
        `export default function ${component}() {\n  return (\n${jsx(ast, route)}\n  );\n}\n`;
      fs.writeFileSync(path.join(dest, filename + ".tsx"), file, "utf8");
      imports.push(`import ${component} from "./source-pages/${filename}";`);
      entries.push(`  ${JSON.stringify(route)}: ${component},`);
      stats.pages++;
    }
    stats.distinctBodies = distinctBodyHashes.size;
    fs.writeFileSync(
      path.join(cwd, "src/features/news/source-pages.ts"),
      [
        "/* Explicit compile-time route mapping of the 36 original archived news pages. */",
        'import type { ComponentType } from "react";',
        ...imports,
        "export const sourceNewsRoutes: Record<string, ComponentType> = {",
        ...entries,
        "};",
        "",
      ].join("\n"),
      "utf8",
    );
  } finally {
    await browser.close();
  }
  const report = {
    ...stats,
    unlinkedButtons: stats.unlinkedButtons.slice(0, 35),
    offscopeLinks: stats.offscopeLinks.slice(0, 25),
  };
  console.log(JSON.stringify(report, null, 2));
  if (
    stats.pages !== 36 ||
    stats.distinctBodies !== 35 ||
    stats.sourceImages !== stats.outputImages ||
    stats.sourceTables !== stats.outputTables ||
    stats.missingAssets.length
  )
    process.exitCode = 1;
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
