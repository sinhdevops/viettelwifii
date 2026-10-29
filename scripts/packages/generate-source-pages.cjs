throw new Error(
  "Archived SOURCE-TSX-PACKAGES-01 generator: output is now authored PackagePage/typed records and per-route TSX. Edit those files directly; this script must never overwrite them.",
);

/**
 * One-way SOURCE-TSX-PACKAGES-01 conversion from archived HTML to authored JSX.
 * Run: node src/features/packages/generate-source-pages.cjs
 * This generator alone reads captured DOM; the Next.js runtime imports only TSX.
 * Do not run against network/live pages. Generated TSX is intentionally reviewable.
 */
const { chromium } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const approved = require(path.join(root, "data/approved-routes.json")).routes;
const allowed = new Set(approved);
const assets = require(path.join(root, "src/generated/viettelup-assets.json"));
const output = path.join(root, "src/features/packages/source-pages");
const voids = new Set(["img", "br", "hr", "input", "source", "area", "embed", "wbr"]);
const attrs = new Set(["class", "href", "alt", "title", "id", "role", "target", "rel",
  "width", "height", "loading", "decoding", "scope", "colspan", "rowspan",
  "itemprop", "itemscope", "itemtype", "datetime", "name", "type", "value", "dir", "lang"]);
const jsxAttr = { class: "className", colspan: "colSpan", rowspan: "rowSpan",
  itemprop: "itemProp", itemscope: "itemScope", itemtype: "itemType",
  datetime: "dateTime" };
const summary = { converted: 0, prepaid: 0, postpaid: 0, sourceTables: 0,
  jsxTables: 0, unknownImageAssets: [], unknownButtons: [], ctaExamples: {},
  sourceTags: {}, embeddedIframes: [], offManifestLinks: [], sourceMissing: [] };

function imgAsset(src) {
  const href = new URL(src, "https://viettelwifii.vn").href;
  if (!assets[href] && !src.startsWith("/assets/viettelup/")) summary.unknownImageAssets.push(src);
  return `sourceAsset(${JSON.stringify(src)})`;
}
function hrefFor(value, pagePath) {
  if (!value) return value;
  const u = new URL(value, "https://viettelwifii.vn");
  if ((u.hostname === "viettelwifii.vn" || u.hostname === "viettelwifii.vn")
    && allowed.has(u.pathname)) return u.pathname + u.search + u.hash;
  if (u.hostname === "viettelwifii.vn" && !allowed.has(u.pathname))
    summary.offManifestLinks.push([pagePath, value]);
  return value;
}
function findCta(node, root, pagePath) {
  if (node.tag !== "button") return null;
  if (node.attrs?.["aria-haspopup"] === "dialog") return null;
  const txt = plainText(node).trim().toLocaleLowerCase("vi");
  if (txt === "chi tiết") {
    const card = ancestor(node, x => x.attrs?.class?.includes("data-card relative"));
    const name = card && plainText(card.children?.find(x => x.tag === "div") || card)
      .trim().split(/\s+/)[0];
    const post = pagePath.includes("/tra-sau/");
    for (const route of [post && `/goi-cuoc-viettel/tra-sau/${name}`, `/goi-cuoc-viettel/${name}`]) {
      if (route && allowed.has(route)) return route;
    }
    return null;
  }
  if (/đăng ký|liên hệ/.test(txt)) {
    const card = ancestor(node, x => x.attrs?.class?.includes("data-card relative"));
    const direct = card && walk(card).find(x => x.tag === "a" && /^(sms:|tel:)/.test(x.attrs?.href || ""));
    if (direct) return direct.attrs.href;
    const sticky = root.children?.at(-1);
    const stickyAnchor = sticky && walk(sticky).find(x => x.tag === "a" && /^(sms:|tel:)/.test(x.attrs?.href || ""));
    if (stickyAnchor) return stickyAnchor.attrs.href;
  }
  summary.unknownButtons.push([pagePath, txt.slice(0, 70)]);
  return null;
}
function walk(n) { return [n, ...(n.children || []).flatMap(walk)]; }
function plainText(n) { return n?.text !== undefined ? n.text : (n?.children || []).map(plainText).join(""); }
function ancestor(n, predicate) { for (let a=n.parent; a; a=a.parent) if (predicate(a)) return a; return null; }
function attachParents(n, parent=null) {
  n.parent=parent;
  for (const child of n.children || []) attachParents(child,n);
  return n;
}

function render(n, pagePath, root) {
  if (n.text !== undefined) return `{${JSON.stringify(n.text)}}`;
  if (!n.tag || ["script", "style", "noscript"].includes(n.tag)) return "";
  let tag = n.tag;
  const dialogTrigger = n.tag === "button" && n.attrs?.["aria-haspopup"] === "dialog";
  if (dialogTrigger) tag = "PackageSourceDialogTrigger";
  const picked = [];
  const convert = findCta(n, root, pagePath);
  if (n.tag === "button" && convert) tag = "a";
  for (const [name, value] of Object.entries(n.attrs || {})) {
    if (dialogTrigger && name !== "class") continue;
    if (!attrs.has(name) && !name.startsWith("aria-") && !name.startsWith("data-")) continue;
    if (name === "data-nimg" || name === "data-state" || name === "data-reactroot"
      || ["aria-haspopup","aria-controls","aria-expanded"].includes(name) && n.tag === "button") continue;
    if (name === "type" && n.tag === "button" && convert) continue;
    if (name === "href" && convert) continue;
    if (name === "src") continue;
    if (name === "itemscope") { picked.push("itemScope"); continue; }
    if (name === "href") { picked.push(`href={${JSON.stringify(hrefFor(value, pagePath))}}`); continue; }
    const key = jsxAttr[name] || name;
    picked.push(`${key}={${JSON.stringify(value)}}`);
  }
  if (n.tag === "img" && n.attrs.src) picked.push(`src={${imgAsset(n.attrs.src)}}`);
  if (n.tag === "iframe" && n.attrs.src) {
    picked.push(`src={${JSON.stringify(n.attrs.src)}}`);
    if (!n.attrs.title) picked.push(`title={${JSON.stringify("Video nguồn ViettelUp")}}`);
    summary.embeddedIframes.push([pagePath, n.attrs.src]);
  }
  if (convert) picked.push(`href={${JSON.stringify(hrefFor(convert,pagePath))}}`);
  if (dialogTrigger) {
    const card = ancestor(n, x => x.attrs?.class?.includes("data-card relative"));
    const name = card && plainText(card.children?.find(x => x.tag === "div") || card).trim().split(/\s+/)[0];
    const post = pagePath.includes("/tra-sau/");
    const candidates = name ? [post && `/goi-cuoc-viettel/tra-sau/${name}`, `/goi-cuoc-viettel/${name}`] : [];
    const itemPath = candidates.find(x => x && allowed.has(x)) || pagePath;
    picked.push(`itemPath={${JSON.stringify(itemPath)}}`);
  }
  // Tailwind's original background URL was public-root-relative; point to the
  // captured asset while retaining the original selector/classes.
  if ((n.attrs?.class || "").includes("data-card relative")) {
    picked.push('style={{ backgroundImage: `url(${sourceAsset("/images/bg-data.png")})` }}');
  }
  const attributes = picked.length ? " " + picked.join(" ") : "";
  if (voids.has(tag)) return `<${tag}${attributes} />`;
  const children = (n.children || []).map(child => render(child,pagePath,root)).join("");
  if (tag === "table") {
    summary.jsxTables++;
    return `<div className="source-package-table-scroll" tabIndex={0} role="region" aria-label="Bảng thông tin gói cước"><table${attributes}>${children}</table></div>`;
  }
  return `<${tag}${attributes}>${children}</${tag}>`;
}
function serialize(node) {
  if (node.nodeType === Node.TEXT_NODE) return { text: node.textContent };
  if (node.nodeType !== Node.ELEMENT_NODE) return null;
  return { tag: node.tagName.toLowerCase(),
    attrs: Object.fromEntries([...node.attributes].map(a => [a.name,a.value])),
    children: [...node.childNodes].map(serialize).filter(Boolean) };
}
async function main() {
  fs.mkdirSync(output,{recursive:true});
  const browser = await chromium.launch({ headless:true });
  const page = await browser.newPage();
  const lines = [
    '/* Auto-converted from original captured package DOM by generate-source-pages.cjs. */',
    'import type { ComponentType } from "react";'
  ];
  const entries=[];
  try {
    for (let i=2;i<118;i++) {
      const route=approved[i];
      if (!route?.startsWith("/goi-cuoc-viettel/")) throw new Error("Manifest index mismatch "+i);
      await page.goto("file:///" + root.replace(/\\/g, "/") + "/work/web-clone-benchmark/raw/html/"
        + String(i).padStart(4,"0") + ".html");
      const captured=await page.evaluate(() => {
        const article=document.querySelector("main > article");
        const element=article && [...article.children].find(e => e.tagName === "DIV" && e.querySelector("h1"));
        if (!element) return null;
        const walk = node => {
          if (node.nodeType === Node.TEXT_NODE) return {text:node.textContent};
          if (node.nodeType !== Node.ELEMENT_NODE) return null;
          return {tag:node.tagName.toLowerCase(),
            attrs:Object.fromEntries([...node.attributes].map(a=>[a.name,a.value])),
            children:[...node.childNodes].map(walk).filter(Boolean)};
        };
        return {root:walk(element),tables:element.querySelectorAll("table").length,
          h1:element.querySelector("h1")?.textContent,
          cta:[...element.querySelectorAll('a[href^="sms:"],a[href^="tel:"]')].map(a=>a.getAttribute("href"))};
      });
      if (!captured) { summary.sourceMissing.push([route,i]); continue; }
      const rootNode=attachParents(captured.root);
      summary.sourceTables+=captured.tables;
      const post=route.includes("/tra-sau/");
      const name= (post ? "postpaid" : "general") + "-" + route.split("/").at(-1);
      const identifier=`SourcePackage${i}`;
      const jsx=render(rootNode,route,rootNode);
      const content=`/* Capture ${String(i).padStart(4,"0")}.html: ${route} */\n`
        + '/* eslint-disable @next/next/no-img-element */\n'
        + 'import { sourceAsset } from "@/lib/viettelup-source-assets";\n'
        + (jsx.includes("<PackageSourceDialogTrigger") ? 'import { PackageSourceDialogTrigger } from "../package-source-dialog-trigger";\n' : '')
        + `export default function ${identifier}() {\n  return (\n    ${jsx}\n  );\n}\n`;
      fs.writeFileSync(path.join(output,name+".tsx"), content, "utf8");
      lines.push(`import ${identifier} from "./source-pages/${name}";`);
      entries.push(`  ${JSON.stringify(route)}: ${identifier},`);
      summary.converted++;
      if (post) summary.postpaid++; else summary.prepaid++;
      if (i===2||i===103) summary.ctaExamples[route]=captured.cta.slice(0,8);
    }
    lines.push('export const sourcePackageRoutes: Record<string, ComponentType> = {',...entries,'};',"");
    fs.writeFileSync(path.join(root,"src/features/packages/source-pages.ts"),lines.join("\n"),"utf8");
  } finally {await browser.close();}
  summary.unknownButtons=summary.unknownButtons.slice(0,80);
  summary.offManifestLinks=summary.offManifestLinks.slice(0,20);
  console.log(JSON.stringify(summary,null,2));
  if (summary.sourceMissing.length || summary.unknownImageAssets.length) process.exitCode=1;
}
main().catch(e=>{console.error(e);process.exitCode=1;});

