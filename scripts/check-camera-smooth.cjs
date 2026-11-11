const fs = require("node:fs"),
  assert = require("node:assert/strict");
const { chromium } = require("@playwright/test");
let browser;
(async () => {
  browser = await chromium.launch({ headless: true });
  const rows = [];
  for (const width of [1024, 1440]) {
    const p = await browser.newPage({
      viewport: { width, height: 1000 },
      reducedMotion: "no-preference",
    });
    const errors = [],
      posts = [];
    p.on("pageerror", (e) => errors.push(e.message));
    p.on("request", (r) => {
      if (r.method() === "POST") posts.push(r.url());
    });
    await p.goto("http://localhost:3000/internet", {
      waitUntil: "networkidle",
    });
    const root = p
      .locator('[data-carousel-engine="embla-dom"]')
      .filter({ hasText: "NETVT1_CAM1" });
    await root.scrollIntoViewIfNeeded();
    assert.equal(await root.count(), 1);
    const track = root.locator(":scope > div > div").first(),
      prev = root.locator('[data-collection-direction="previous"]'),
      next = root.locator('[data-collection-direction="next"]');
    const x = () =>
      track.evaluate(
        (e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41,
      );
    const record = () =>
      track.evaluate((e) => {
        window.__motion = [];
        window.__firstSlide = e.firstElementChild;
        const end = performance.now() + 1450;
        function frame() {
          window.__motion.push({
            t: performance.now(),
            x: new DOMMatrixReadOnly(getComputedStyle(e).transform).m41,
          });
          if (performance.now() < end) requestAnimationFrame(frame);
        }
        frame();
      });
    assert.equal(await prev.isDisabled(), true);
    assert.equal(await next.isDisabled(), false);
    await record();
    await next.click();
    await p.waitForTimeout(1550);
    const buttonMotion = await p.evaluate(() => ({
      unique: new Set(window.__motion.map((f) => Math.round(f.x))).size,
      frames: window.__motion.length,
      start: window.__motion[0].x,
      end: window.__motion.at(-1).x,
    }));
    console.log({ width, buttonMotion });
    assert.ok(buttonMotion.unique > 15);
    assert.ok(buttonMotion.end < buttonMotion.start - 30);
    assert.equal(
      await track.evaluate((e) => e.firstElementChild === window.__firstSlide),
      true,
    );
    assert.equal(await track.evaluate((e) => e.style.transition), "none");
    while (!(await prev.isDisabled())) {
      await prev.click();
      await p.waitForTimeout(1500);
    }
    const box = await root.locator(":scope > div").first().boundingBox(),
      start = box.x + box.width * 0.65,
      y = box.y + 55;
    await p.mouse.move(start, y);
    await p.mouse.down();
    for (let i = 1; i <= 12; i++) {
      await p.mouse.move(start - (160 * i) / 12, y);
      await p.waitForTimeout(10);
    }
    await p.mouse.up();
    const released = await x();
    await p.waitForTimeout(180);
    const coast = await x();
    await p.waitForTimeout(1400);
    assert.ok(
      Math.abs(coast - released) > 5,
      "Track should keep moving after release",
    );
    assert.equal(await p.getByRole("dialog").count(), 0);
    while (!(await prev.isDisabled())) {
      await prev.click();
      await p.waitForTimeout(1500);
    }
    const card = root.locator(".internet-card").first();
    await card.getByRole("button", { name: "Đăng ký", exact: true }).click();
    const dialog = p.getByRole("dialog");
    await dialog.waitFor({ state: "visible" });
    assert.equal(
      await dialog.getAttribute("data-source-product"),
      "NETVT1_CAM1",
    );
    await p.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    await card.getByRole("radio", { name: "Tỉnh/TP khác" }).click();
    assert.match(await card.innerText(), /215.000/);
    await root.screenshot({
      path: `reports/integration/camera-smooth/after-${width}.png`,
    });
    assert.deepEqual(errors, []);
    assert.deepEqual(posts, []);
    rows.push({
      width,
      buttonMotion,
      drag: { released, coast },
      sameSlideNodes: true,
      cssTransition: "none",
      registration: true,
      radio: true,
      errors,
    });
    await p.close();
  }
  const p = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  await p.goto("http://localhost:3000/internet", { waitUntil: "networkidle" });
  const root = p.locator('[data-carousel-engine="embla-dom"]').first();
  await root.scrollIntoViewIfNeeded();
  await root.locator('[data-collection-direction="next"]').click();
  await p.waitForTimeout(60);
  const track = root.locator(":scope > div > div").first();
  const pos = await track.evaluate(
    (e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41,
  );
  await p.waitForTimeout(150);
  assert.ok(
    Math.abs(
      pos -
        (await track.evaluate(
          (e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41,
        )),
    ) < 1,
  );
  rows.push({ reducedMotion: true });
  await p.close();
  fs.writeFileSync(
    "reports/integration/camera-smooth/VERIFY.json",
    JSON.stringify(rows, null, 2),
  );
  console.log(JSON.stringify(rows));
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => browser?.close());
