const { chromium } = require("@playwright/test");
const fs = require("fs");
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  const routes = JSON.parse(
    fs.readFileSync("data/approved-routes.json", "utf8"),
  ).routes;
  const agg = {
    roots: {},
    htmlTags: {},
    bad: [],
    cta: {},
    assets: {},
    richTags: {},
    extras: [],
    links: [],
  };
  for (let i = 2; i < 118; i++) {
    await p.goto(
      "file:///" +
        process.cwd().replace(/\\/g, "/") +
        "/work/web-clone-benchmark/raw/html/" +
        String(i).padStart(4, "0") +
        ".html",
    );
    const s = await p.evaluate(() => {
      let article = document.querySelector("main>article");
      let root = article?.firstElementChild;
      let k =
        root?.tagName +
        "|" +
        root?.children.length +
        "|" +
        [...(root?.children || [])]
          .map((e) => e.tagName + ":" + e.children.length)
          .join("|");
      let tags = [...article.querySelectorAll("*")].reduce(
        (m, e) => ((m[e.tagName] = (m[e.tagName] || 0) + 1), m),
        {},
      );
      let links = [...article.querySelectorAll("a")]
        .map((a) => a.getAttribute("href"))
        .filter(Boolean);
      let imgs = [...article.querySelectorAll("img")].map((e) =>
        e.getAttribute("src"),
      );
      return {
        k,
        tags,
        links,
        imgs,
        htmlLength: article.outerHTML.length,
        rootTag: root?.tagName,
        rootHtml: root?.outerHTML.slice(0, 180),
        bodyHtml: article.innerHTML.slice(0, 120),
      };
    });
    agg.roots[s.k] = (agg.roots[s.k] || 0) + 1;
    if (s.rootTag !== "DIV" || !s.k.includes("DIV|3|DIV:"))
      agg.bad.push([i, routes[i], s.k, s.rootHtml]);
    for (let tag in s.tags)
      agg.htmlTags[tag] = (agg.htmlTags[tag] || 0) + s.tags[tag];
    for (let href of s.links) {
      if (/^(sms:|tel:)/.test(href)) agg.cta[href] = (agg.cta[href] || 0) + 1;
      else if (!href.startsWith("/") && !href.startsWith("#"))
        agg.links.push([i, href]);
    }
    for (let src of s.imgs) agg.assets[src] = (agg.assets[src] || 0) + 1;
    if (s.htmlLength < 3000) agg.extras.push([i, routes[i], s.htmlLength]);
  }
  console.log(
    JSON.stringify(
      {
        roots: agg.roots,
        tags: agg.htmlTags,
        bad: agg.bad.slice(0, 30),
        badCount: agg.bad.length,
        ctaCounts: [
          Object.keys(agg.cta).length,
          Object.values(agg.cta).reduce((a, b) => a + b, 0),
        ],
        assetList: Object.keys(agg.assets).slice(0, 50),
        uniqueAssets: Object.keys(agg.assets).length,
        short: agg.extras,
        otherLinks: agg.links.slice(0, 30),
      },
      null,
      2,
    ),
  );
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
