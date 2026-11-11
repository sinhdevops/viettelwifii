/* QA-01: independent local navigation, negative route guards, late news-image check.
 * Read-only browser flows. Never submit a form, phone, SMS, or external navigation.
 */
const { chromium } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");

const base = "http://127.0.0.1:4191";
const out = path.join(process.cwd(), "reports", "qa", "20261027");
fs.mkdirSync(out, { recursive: true });
const sizes = [
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1440, height: 900 },
];
const unknown = [
  "/qa-unknown-path",
  "/goi-cuoc-viettel/not-a-plan-qa",
  "/goi-cuoc-viettel/tra-sau/not-a-plan-qa",
  "/internet/not-a-plan-qa",
  "/internet/netvt1",
  "/tin-tuc/not-an-article-qa",
  "/tin-tuc/cap-nhat-goi-cuoc-gic",
];
const records = [];
const safety = { blockedLeads: [], forbiddenExternalNavigation: [] };

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  try {
    for (const viewport of sizes) {
      const context = await browser.newContext({
        viewport,
        isMobile: viewport.width === 390,
        hasTouch: viewport.width === 390,
      });
      await context.route("**/api/leads", async (route) => {
        safety.blockedLeads.push(route.request().url());
        await route.abort("blockedbyclient");
      });
      await context.route(
        /^(https?:\/\/)(?!127\.0\.0\.1(?::\d+)?\/)/,
        async (route) => {
          safety.forbiddenExternalNavigation.push(route.request().url());
          await route.abort("blockedbyclient");
        },
      );
      const page = await context.newPage();
      const record = {
        viewport,
        navigation: {},
        console: { pageExceptions: [], hmrWebSockets: [], other: [] },
        news: {},
      };
      page.on("pageerror", (error) =>
        record.console.pageExceptions.push(error.message.slice(0, 200)),
      );
      page.on("console", (message) => {
        if (message.type() !== "error") return;
        const bucket = /_next\/hmr|WebSocket.*handshake/i.test(message.text())
          ? record.console.hmrWebSockets
          : record.console.other;
        bucket.push(message.text().slice(0, 200));
      });
      const response = await page.goto(base + "/", {
        waitUntil: "domcontentloaded",
      });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(750);
      record.navigation.homeStatus = response.status();
      const trigger = page.getByRole("button", { name: "Mở menu" });
      if (await trigger.isVisible().catch(() => false)) {
        record.navigation.mobileMenu = { found: (await trigger.count()) === 1 };
        if (await trigger.count()) {
          await trigger.click();
          await page.waitForTimeout(400);
          const dialog = page.getByRole("dialog", { name: "Menu điều hướng" });
          record.navigation.mobileMenu.ariaExpandedAfterClick =
            await trigger.getAttribute("aria-expanded");
          record.navigation.mobileMenu.dialogVisibleAfterClick = await dialog
            .isVisible()
            .catch(() => false);
          const news = dialog.getByRole("link", { name: "Tin tức" });
          record.navigation.mobileMenu.newsLinkVisible = await news
            .isVisible()
            .catch(() => false);
          if (record.navigation.mobileMenu.newsLinkVisible) {
            record.navigation.mobileMenu.newsHref =
              await news.getAttribute("href");
            if (record.navigation.mobileMenu.newsHref === "/tin-tuc") {
              await news.click();
              await page
                .waitForURL(base + "/tin-tuc", { timeout: 5000 })
                .catch(() => {});
              record.navigation.mobileMenu.afterNewsClick = page.url();
            }
          }
          await page.keyboard.press("Escape");
          await page.waitForTimeout(250);
          record.navigation.mobileMenu.dialogVisibleAfterEscape = await dialog
            .isVisible()
            .catch(() => false);
        }
      } else {
        const links = page
          .getByRole("navigation", { name: "Điều hướng chính" })
          .getByRole("link", { name: "Tin tức", exact: true });
        record.navigation.desktop = {
          found: await links.count(),
          href: await links
            .first()
            .getAttribute("href")
            .catch(() => null),
          visible: await links
            .first()
            .isVisible()
            .catch(() => false),
        };
        if (
          record.navigation.desktop.visible &&
          record.navigation.desktop.href === "/tin-tuc"
        ) {
          await links.first().focus();
          record.navigation.desktop.keyboardFocused = await links
            .first()
            .evaluate((el) => document.activeElement === el);
          await page.keyboard.press("Enter");
          await page
            .waitForURL(base + "/tin-tuc", { timeout: 6500 })
            .catch(() => {});
          record.navigation.desktop.afterEnter = page.url();
          record.navigation.desktop.destinationH1 = await page
            .locator("h1")
            .allTextContents();
        }
      }
      const newsResponse = await page.goto(base + "/tin-tuc", {
        waitUntil: "domcontentloaded",
      });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1400);
      record.news.status = newsResponse.status();
      record.news.imageMetrics = await page
        .locator("main img")
        .evaluateAll((elements) =>
          elements
            .filter((el) => /Roaming|Cẩm Nang|Tổng hợp|So Sánh/i.test(el.alt))
            .slice(0, 4)
            .map((el) => ({
              alt: el.alt.slice(0, 70),
              src: el.currentSrc,
              complete: el.complete,
              naturalWidth: el.naturalWidth,
              loading: el.loading,
              rect: (() => {
                const r = el.getBoundingClientRect();
                return [r.x, r.y, r.width, r.height].map(Math.round);
              })(),
            })),
        );
      for (const img of await page.locator("main img").all()) {
        const alt = (await img.getAttribute("alt")) || "";
        if (/Cẩm Nang|Tổng hợp/i.test(alt))
          await img.scrollIntoViewIfNeeded({ timeout: 1300 }).catch(() => {});
      }
      await page.waitForTimeout(500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(400);
      await page.screenshot({
        path: path.join(out, `nav-qa-news-${viewport.width}.png`),
        animations: "disabled",
      });
      records.push(record);
      await context.close();
      console.log(
        "NAV",
        viewport.width,
        JSON.stringify(record.navigation),
        "IMAGES",
        record.news.imageMetrics.map((x) => x.naturalWidth),
      );
    }
    const api = await browser.newContext();
    const guards = [];
    for (const route of unknown) {
      const response = await api.request.get(base + route, {
        maxRedirects: 0,
        timeout: 20000,
      });
      guards.push({
        route,
        status: response.status(),
        finalUrl: response.url(),
      });
    }
    fs.writeFileSync(
      path.join(out, "nav-and-guards.json"),
      JSON.stringify(
        { generatedAt: new Date().toISOString(), records, guards, safety },
        null,
        2,
      ),
    );
    console.log(
      "GUARDS",
      guards.map((x) => `${x.route}:${x.status}`).join(" "),
    );
    console.log("SAFETY", JSON.stringify(safety));
    await api.close();
  } finally {
    await browser.close();
  }
}
main().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
