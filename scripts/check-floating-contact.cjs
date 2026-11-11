const { chromium } = require("@playwright/test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
let browser;
(async () => {
  browser = await chromium.launch({ headless: true });
  const results = [];
  for (const width of [390, 768, 1440]) {
    const p = await browser.newPage({ viewport: { width, height: 900 } });
    const errors = [];
    p.on("pageerror", (e) => errors.push(e.message));
    await p.goto("http://localhost:3000", { waitUntil: "networkidle" });
    const link = p.getByRole("link", {
      name: "Gọi 0325610016 để lắp đặt mới",
      exact: true,
    });
    assert.equal(await link.getAttribute("href"), "tel:0325610016");
    const metrics = await link.evaluate((e) => {
      const r = e.getBoundingClientRect(),
        s = getComputedStyle(e),
        top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
      return {
        inViewport:
          r.x >= 0 &&
          r.y >= 0 &&
          r.right <= innerWidth &&
          r.bottom <= innerHeight,
        topmost: e.contains(top),
        color: s.backgroundColor,
        position: getComputedStyle(e.parentElement).position,
      };
    });
    assert.equal(metrics.inViewport, true);
    assert.equal(metrics.topmost, true);
    assert.equal(metrics.position, "fixed");
    await link.focus();
    assert.equal(
      await link.evaluate((e) => e === document.activeElement),
      true,
    );
    await link.screenshot({
      path: `reports/integration/floating-contact/button-${width}.png`,
    });
    if (width === 390) {
      await p.getByRole("button", { name: "Mở menu", exact: true }).click();
      assert.equal(await link.count(), 0);
      await p.keyboard.press("Escape");
      await link.waitFor({ state: "visible" });
    }
    assert.deepEqual(errors, []);
    results.push({ width, ...metrics, href: "tel:0325610016", errors });
    await p.close();
  }
  fs.writeFileSync(
    "reports/integration/floating-contact/VERIFY.json",
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results));
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => browser?.close());
