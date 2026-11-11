const fs = require("node:fs");
const { chromium } = require("@playwright/test");
const assert = require("node:assert/strict");
let browser;
function normalize(html) {
  return html
    .replace(/_[Rr]_[A-Za-z0-9]+_/g, "_REACT_ID_")
    .replace(
      /package-content-module__[A-Za-z0-9_-]+?__/g,
      "package-content-module__CSS_ID__",
    )
    .replace(/<!--[^]*?-->/g, "");
}
(async () => {
  browser = await chromium.launch();
  const before = JSON.parse(
    fs.readFileSync("reports/integration/package-template/before.json", "utf8"),
  );
  const rows = [];
  for (const width of [1440, 390]) {
    const p = await browser.newPage({ viewport: { width, height: 900 } });
    await p.route("**/*", (route) => {
      const url = new URL(route.request().url());
      return url.hostname === "localhost" ? route.continue() : route.abort();
    });
    const errors = [];
    p.on("pageerror", (e) => errors.push(e.message));
    for (const route of Object.keys(before)) {
      console.log(width, route);
      await p.goto("http://localhost:3000" + route, {
        waitUntil: "networkidle",
      });
      const article = p.locator("main article");
      const actual = await article.evaluate((e) => ({
        html: e.innerHTML,
        text: e.textContent,
      }));
      assert.equal(actual.text, before[route].text, "Content changed " + route);
      if (width === 1440)
        assert.equal(
          normalize(actual.html),
          normalize(before[route].html),
          "DOM changed " + route,
        );
      assert.equal(await article.locator("h1").count(), 1);
      if (width === 1440) {
        const trigger = article
          .getByRole("button")
          .filter({ hasText: /đăng ký|liên hệ/i })
          .first();
        await trigger.click({ noWaitAfter: true });
        await p.getByRole("dialog").waitFor({ state: "visible" });
        await p.keyboard.press("Escape");
        await p.getByRole("dialog").waitFor({ state: "hidden" });
      } else {
        assert.ok(
          await article.locator('a[href^="sms:"],a[href^="tel:"]').count(),
        );
      }
      rows.push({
        route,
        width,
        content: true,
        dom: width === 1440 ? "unchanged" : "not compared",
        cta: true,
      });
    }
    assert.deepEqual(errors, []);
    for (const route of [
      "/goi-cuoc-viettel/NOT_A_PACKAGE",
      "/goi-cuoc-viettel/v120b",
      "/goi-cuoc-viettel/tra-sau/NOT_A_PACKAGE",
    ]) {
      await p.goto("http://localhost:3000" + route, {
        waitUntil: "networkidle",
      });
      await p
        .getByRole("heading", { name: "Liên kết không tồn tại" })
        .waitFor();
    }
    await p.close();
  }
  fs.writeFileSync(
    "reports/integration/package-template/VERIFY.json",
    JSON.stringify(rows, null, 2),
  );
  console.log(
    "PASS:5 package pages at390/1440;desktopDOM unchanged,CTAs,unknown/lowercase404",
  );
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => browser?.close());
