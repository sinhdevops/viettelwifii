const { chromium } = require("@playwright/test");
(async () => {
  const b = await chromium.launch({ headless: true });
  const p = await b.newPage();
  for (const i of [2, 32, 103, 117]) {
    await p.goto(
      "file:///" +
        process.cwd().replace(/\\/g, "/") +
        "/work/web-clone-benchmark/raw/html/" +
        String(i).padStart(4, "0") +
        ".html",
    );
    const d = await p.evaluate(() => {
      const a = document.querySelector("main>article"),
        r = a?.firstElementChild,
        d = r?.children[1],
        rich = d?.children[1],
        rel = d?.children[2],
        stick = r?.children[2];
      let tags = rich
        ? [...rich.querySelectorAll("*")].reduce(
            (m, e) => ((m[e.tagName] = (m[e.tagName] || 0) + 1), m),
            {},
          )
        : {};
      return {
        h: a?.querySelector("h1")?.textContent,
        top: [...r.children].map((x) => [
          x.tagName,
          x.className,
          x.children.length,
        ]),
        summary: d?.children[0]?.outerHTML.slice(0, 2600),
        body: rich?.outerHTML.slice(0, 1400),
        related: rel?.outerHTML.slice(0, 4200),
        sticky: stick?.outerHTML.slice(0, 1400),
        tags,
        attrs: [
          ...new Set(
            [...r.querySelectorAll("*")].flatMap((e) =>
              [...e.attributes].map((a) => a.name),
            ),
          ),
        ],
        htmlBytes: r.outerHTML.length,
        headings: rich
          ? [...rich.querySelectorAll("h2,h3,h4")]
              .slice(0, 15)
              .map((x) => x.textContent.slice(0, 90))
          : [],
      };
    });
    console.log(
      "INDEX " + i + "\n" + JSON.stringify(d, null, 2).slice(0, 11000),
    );
  }
  await b.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
