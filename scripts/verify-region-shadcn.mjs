import { chromium } from "@playwright/test";
import fs from "node:fs";
import assert from "node:assert/strict";

(async () => {
  const out = "reports/integration/region-shadcn";
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const width of [390, 768, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.goto("http://localhost:3000/internet");
      await page.locator("[data-shadcn-region]").first().waitFor();
      await page.evaluate(() => document.fonts.ready);
      const groups = page.locator("[data-shadcn-region]");
      assert.equal(await groups.count(), 18);
      const first = groups.first();
      await first.locator("label").first().click();
      await first.getByRole("radio").first().focus();
      await page.keyboard.press("ArrowRight", { delay: 100 });
      await page.waitForFunction(
        () =>
          document
            .querySelector('[data-shadcn-region] [value="Other"]')
            .getAttribute("aria-checked") === "true",
      );
      const checks = await page.evaluate(() => {
        const expected = {
          MESHVT2: ["289", "245"],
          MESHVT3: ["359", "299"],
          NETVT01: ["265", "225"],
          MESHVT01: ["285", "240"],
          NETVT1: ["235", "195"],
          NETVT2: ["265", "240"],
          MESHVT1: ["255", "210"],
          NETVT1_CAM1: ["255", "215"],
          NETVT2_CAM1: ["285", "260"],
          MESHVT1_CAM1: ["275", "230"],
          MESHVT2_CAM1: ["309", "265"],
          NETVT1_GIAITRI: ["255", "215"],
          NETVT2_GIAITRI: ["285", "260"],
          MESHVT1_GIAITRI: ["275", "230"],
        };
        return Array.from(
          document.querySelectorAll("[data-shadcn-region]"),
        ).map((group) => {
          const radios = [...group.querySelectorAll('[role="radio"]')];
          const price = group.parentElement.nextElementSibling.querySelector(
            "p.whitespace-nowrap",
          );
          const code = radios[0].id.split("-HN-HCM")[0];
          const dot = radios[1].querySelector("svg").getBoundingClientRect();
          const button = radios[1].getBoundingClientRect();
          return {
            code,
            initial: price.textContent,
            expected: expected[code],
            selected: radios.map((r) => r.getAttribute("aria-checked")),
            width: parseFloat(getComputedStyle(radios[1]).width),
            height: parseFloat(getComputedStyle(radios[1]).height),
            offsetX: Math.abs(
              dot.x + dot.width / 2 - button.x - button.width / 2,
            ),
            offsetY: Math.abs(
              dot.y + dot.height / 2 - button.y - button.height / 2,
            ),
          };
        });
      });
      for (const check of checks) {
        assert.deepEqual(check.selected, ["false", "true"]);
        assert.equal(check.width, width < 768 ? 12 : 16);
        assert.equal(check.height, check.width);
        assert.ok(
          check.offsetX < 0.6 && check.offsetY < 0.6,
          JSON.stringify(check),
        );
        assert.equal(check.initial, check.expected[1] + ".000đ/tháng");
      }
      for (let i = 0; i < (await groups.count()); i++) {
        const group = groups.nth(i);
        for (const [index, value] of [
          [0, "HN-HCM"],
          [1, "Other"],
        ]) {
          await group
            .locator("label")
            .nth(index)
            .evaluate((el) => el.click());
          await page.waitForFunction(
            ({ i, value }) =>
              document
                .querySelectorAll("[data-shadcn-region]")
                [i].querySelector(`[value="${value}"]`)
                .getAttribute("aria-checked") === "true",
            { i, value },
          );
          const price = await group.evaluate(
            (g) =>
              g.parentElement.nextElementSibling.querySelector(
                "p.whitespace-nowrap",
              ).textContent,
          );
          assert.equal(price, checks[i].expected[index] + ".000đ/tháng");
        }
      }
      await first.scrollIntoViewIfNeeded();
      await first
        .locator("..")
        .screenshot({ path: `${out}/region-${width}.png` });
      assert.deepEqual(errors, []);
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
      );
      results.push({
        width,
        groups: checks.length,
        centered: true,
        prices: true,
        labels: true,
        keyboard: true,
        pageErrors: errors,
      });
      await page.close();
    }
    fs.writeFileSync(`${out}/results.json`, JSON.stringify(results, null, 2));
    console.log(JSON.stringify(results));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
