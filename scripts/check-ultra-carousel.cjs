const fs = require("node:fs"),
  assert = require("node:assert/strict");
const { chromium } = require("@playwright/test");
let browser;
(async () => {
  browser = await chromium.launch({ headless: true });
  const results = [];
  for (const width of [390, 768, 1440]) {
    const page = await browser.newPage({
      viewport: { width, height: 1000 },
      hasTouch: true,
    });
    const errors = [],
      posts = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("request", (r) => {
      if (r.method() === "POST") posts.push(r.url());
    });
    await page.goto("http://localhost:3000/internet", {
      waitUntil: "networkidle",
    });
    const root = page.getByRole("region", {
      name: "Gói cước Ultra Speed",
      exact: true,
    });
    await root.scrollIntoViewIfNeeded();
    const next = root.getByRole("button", { name: "Gói cước tiếp theo" }),
      prev = root.getByRole("button", { name: "Gói cước trước" }),
      track = root.locator('[data-slot="carousel-track"]');
    const position = () =>
      track.evaluate(
        (e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41,
      );
    assert.equal(await root.locator('[data-slot="carousel-item"]').count(), 4);
    assert.equal(await root.getAttribute("data-collection-can-next"), null);
    const cards = await root.locator(".internet-card").evaluateAll((es) =>
      es.map((e) => ({
        w: e.getBoundingClientRect().width,
        h: e.getBoundingClientRect().height,
        text: e.textContent,
      })),
    );
    assert.ok(
      cards.every(
        (c) =>
          c.w === (width >= 960 ? 359 : 196) &&
          c.h === (width >= 960 ? 412 : 258),
      ),
    );
    assert.equal(await prev.isDisabled(), true);
    assert.equal(await next.isDisabled(), false);
    const initialPosition = await position();
    await track.evaluate((e) => {
      window.__ultraFrames = [];
      const end = performance.now() + 650;
      function sample() {
        window.__ultraFrames.push(
          new DOMMatrixReadOnly(getComputedStyle(e).transform).m41,
        );
        if (performance.now() < end) requestAnimationFrame(sample);
      }
      requestAnimationFrame(sample);
    });
    await next.click();
    await page.waitForTimeout(850);
    assert.ok((await position()) < -30);
    const frames = await page.evaluate(
      () => new Set(window.__ultraFrames.map((n) => Math.round(n))).size,
    );
    assert.ok(frames > 5, "Animation should have intermediate frames");
    await root.focus();
    await page.keyboard.press("ArrowLeft");
    await page.waitForTimeout(1200);
    assert.ok(Math.abs((await position()) - initialPosition) < 1);
    const box = await root
      .locator('[data-slot="carousel-content"]')
      .boundingBox();
    const startX = box.x + box.width * 0.8,
      endX = box.x + box.width * 0.2,
      y = box.y + 50;
    await page.mouse.move(startX, y);
    await page.mouse.down();
    await page.mouse.move(endX, y, { steps: 20 });
    await page.mouse.up();
    await page.waitForTimeout(850);
    assert.ok((await position()) < -30, "Mouse drag");
    assert.equal(await page.getByRole("dialog").count(), 0);
    for (let i = 0; i < 5 && !(await prev.isDisabled()); i++) {
      await prev.click();
      await page.waitForTimeout(700);
    }
    if (width === 390) {
      const cdp = await page.context().newCDPSession(page);
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [{ x: startX, y }],
      });
      for (let i = 1; i <= 15; i++) {
        await cdp.send("Input.dispatchTouchEvent", {
          type: "touchMove",
          touchPoints: [{ x: startX + ((endX - startX) * i) / 15, y }],
        });
        await page.waitForTimeout(16);
      }
      await cdp.send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
      });
      await page.waitForTimeout(850);
      assert.ok((await position()) < -30, "Touch swipe");
      await cdp.detach();
      for (let i = 0; i < 5 && !(await prev.isDisabled()); i++) {
        await prev.click();
        await page.waitForTimeout(700);
      }
    }
    const radio = root.getByRole("radio").first();
    await radio.focus();
    await page.waitForTimeout(850);
    const beforeRadio = await position();
    await radio.press("ArrowRight");
    await page.waitForTimeout(150);
    assert.ok(
      Math.abs((await position()) - beforeRadio) < 1,
      "Radio keyboard must not move carousel",
    );
    await root
      .getByRole("button", { name: "Đăng ký", exact: true })
      .first()
      .click();
    const dialog = page.getByRole("dialog");
    await dialog.waitFor({ state: "visible" });
    assert.equal(await dialog.getAttribute("data-source-product"), "GIGA1");
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    for (let i = 0; i < 5 && !(await next.isDisabled()); i++) {
      await next.click();
      await page.waitForTimeout(700);
    }
    assert.equal(await next.isDisabled(), true);
    for (let i = 0; i < 5 && !(await prev.isDisabled()); i++) {
      await prev.click();
      await page.waitForTimeout(700);
    }
    assert.equal(await prev.isDisabled(), true);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
      false,
    );
    await root.screenshot({
      path: `reports/integration/ultra-carousel/after-${width}.png`,
    });
    assert.deepEqual(errors, []);
    assert.deepEqual(posts, []);
    results.push({
      width,
      cards: cards.map(({ w, h }) => ({ w, h })),
      frames,
      arrows: true,
      mouse: true,
      touch: width === 390,
      keyboard: true,
      registration: true,
      errors,
      posts,
    });
    await page.close();
  }
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: "reduce",
  });
  await page.goto("http://localhost:3000/internet", {
    waitUntil: "networkidle",
  });
  const root = page.getByRole("region", {
    name: "Gói cước Ultra Speed",
    exact: true,
  });
  await root.scrollIntoViewIfNeeded();
  await root.getByRole("button", { name: "Gói cước tiếp theo" }).click();
  await page.waitForTimeout(50);
  assert.ok(
    (await root
      .locator('[data-slot="carousel-track"]')
      .evaluate(
        (e) => new DOMMatrixReadOnly(getComputedStyle(e).transform).m41,
      )) < -30,
  );
  results.push({ reducedMotion: true });
  await page.close();
  fs.writeFileSync(
    "reports/integration/ultra-carousel/VERIFY.json",
    JSON.stringify(results, null, 2),
  );
  console.log(JSON.stringify(results));
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => browser?.close());
