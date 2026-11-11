/* QA-01 independent targeted browser recheck. No form submission or telephone activation. */
const { chromium } = require("@playwright/test");
const fs = require("node:fs");
const path = require("node:path");

const out = path.join(process.cwd(), "reports", "qa", "20261027");
fs.mkdirSync(out, { recursive: true });
const output = [];
const blocked = [];
const origins = {
  source: "http://127.0.0.1:4185",
  next: "http://127.0.0.1:4191",
};
const widths = [390, 768, 1440];
const routes = [
  ["home", "/"],
  ["5G20", "/goi-cuoc-viettel/5G20"],
  ["MXH120", "/goi-cuoc-viettel/tra-sau/MXH120"],
  ["NETVT01", "/internet/NETVT01"],
  ["news", "/tin-tuc"],
];

function cut(s, max = 180) {
  return String(s || "").slice(0, max);
}
async function snapshot(page) {
  return page.evaluate(() => {
    const visible = (el) => {
      const r = el.getBoundingClientRect();
      return r.width > 1 && r.height > 1 && r.bottom > 0 && r.top < innerHeight;
    };
    const labels = [...document.querySelectorAll('button, a, [role="button"]')]
      .filter(visible)
      .map((el) => ({
        tag: el.tagName,
        text: el.innerText?.trim().replace(/\s+/g, " ").slice(0, 70),
        aria: el.getAttribute("aria-label"),
        href: el.getAttribute("href"),
        type: el.getAttribute("type"),
      }));
    const dialog = [
      ...document.querySelectorAll('[role="dialog"], [aria-modal="true"]'),
    ].map((el) => ({ text: el.innerText.slice(0, 200), visible: visible(el) }));
    const floating = [...document.querySelectorAll("a, button")]
      .filter(
        (el) =>
          visible(el) &&
          /fixed|sticky/.test(
            getComputedStyle(el).position +
              " " +
              getComputedStyle(el.parentElement).position,
          ),
      )
      .map((el) => ({
        tag: el.tagName,
        text: el.innerText.trim().slice(0, 60),
        aria: el.getAttribute("aria-label"),
        href: el.getAttribute("href"),
        rect: (() => {
          const r = el.getBoundingClientRect();
          return [r.x, r.y, r.width, r.height].map(Math.round);
        })(),
      }))
      .slice(0, 15);
    return {
      buttons: labels
        .filter((x) =>
          /đăng ký|mở menu|đóng menu|xem thêm/i.test(x.text + " " + x.aria),
        )
        .slice(0, 20),
      dialogs: dialog,
      floating,
      docWidth: document.documentElement.scrollWidth,
      viewportWidth: innerWidth,
      heading: [...document.querySelectorAll("h1")].map((el) =>
        el.textContent.trim(),
      ),
    };
  });
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox"],
  });
  try {
    for (const width of widths)
      for (const [origin, base] of Object.entries(origins)) {
        const ctx = await browser.newContext({
          viewport: {
            width,
            height: width === 390 ? 844 : width === 768 ? 1024 : 900,
          },
          isMobile: width === 390,
          hasTouch: width === 390,
        });
        await ctx.route("**/api/leads", async (route) => {
          blocked.push(`${route.request().method()} ${route.request().url()}`);
          await route.abort("blockedbyclient");
        });
        const page = await ctx.newPage();
        for (const [name, route] of routes) {
          const result = {
            width,
            origin,
            name,
            route,
            pageErrors: [],
            hmrConsoleErrors: [],
            nonHmrConsoleErrors: [],
            localHttpErrors: [],
            localFailed: [],
          };
          const onErr = (err) => result.pageErrors.push(cut(err.message, 250));
          const onConsole = (msg) => {
            if (msg.type() !== "error") return;
            const message = msg.text();
            (message.includes("/_next/hmr") ||
            /WebSocket.*(handshake|connection)/i.test(message)
              ? result.hmrConsoleErrors
              : result.nonHmrConsoleErrors
            ).push(cut(message, 250));
          };
          const onResponse = (res) => {
            if (res.url().startsWith(base) && res.status() >= 400)
              result.localHttpErrors.push(
                `${res.status()} ${cut(res.url(), 170)}`,
              );
          };
          const onFailed = (req) => {
            if (req.url().startsWith(base))
              result.localFailed.push(
                `${req.method()} ${cut(req.url(), 160)}: ${req.failure()?.errorText}`,
              );
          };
          page.on("pageerror", onErr);
          page.on("console", onConsole);
          page.on("response", onResponse);
          page.on("requestfailed", onFailed);
          try {
            result.status = (
              await page.goto(base + route, {
                waitUntil: "domcontentloaded",
                timeout: 25000,
              })
            )?.status();
            await page.evaluate(() => document.fonts.ready);
            await page.waitForTimeout(1200);
            result.initial = await snapshot(page);
            if (name === "home") {
              const dots = page.locator('[aria-label="Chọn banner"] button');
              const current = () =>
                dots.evaluateAll((es) =>
                  es.map((el) => el.getAttribute("aria-current")),
                );
              result.carousel = {
                dotCount: await dots.count(),
                initial: await current(),
              };
              const next = page.getByRole("button", {
                name: "Banner tiếp theo",
              });
              if (await next.count()) {
                await next.click({ timeout: 4000 });
                await page.waitForTimeout(400);
                result.carousel.afterClick = await current();
              }
              const menu = page
                .getByRole("button", { name: /mở menu|đóng menu/i })
                .first();
              if (width === 390 && (await menu.count())) {
                result.menu = {
                  before: await menu.getAttribute("aria-expanded"),
                  trigger: cut(await menu.getAttribute("outerHTML"), 500),
                };
                await menu.click({ timeout: 4000 });
                await page.waitForTimeout(400);
                result.menu.after = await menu.getAttribute("aria-expanded");
                result.menu.openState = await snapshot(page);
                await page.screenshot({
                  path: path.join(
                    out,
                    `recheck-${origin}-home-menu-${width}.png`,
                  ),
                  animations: "disabled",
                });
                await page.keyboard.press("Escape");
                await page.waitForTimeout(250);
                result.menu.afterEscape = await snapshot(page);
                result.menu.focusReturned = await menu.evaluate(
                  (el) => el === document.activeElement,
                );
              }
            }
            if (name === "5G20" || name === "MXH120") {
              const all = page.locator('button, a, [role="button"]');
              result.allRegistrationCandidates = (
                await all.evaluateAll((es) =>
                  es
                    .filter((e) =>
                      /đăng\s*ký|đăng\s*kí|lắp đặt/i.test(
                        (e.textContent || "") +
                          " " +
                          e.getAttribute("aria-label"),
                      ),
                    )
                    .map((e) => ({
                      tag: e.tagName,
                      text: e.textContent.trim().slice(0, 100),
                      href: e.getAttribute("href"),
                      html: e.outerHTML.slice(0, 300),
                    })),
                )
              ).slice(0, 12);
              const safe = page
                .getByRole("button", { name: /đăng ký/i })
                .first();
              if (await safe.count()) {
                await safe.click({ timeout: 5000 });
                await page.waitForTimeout(450);
                result.modalAfterClick = await snapshot(page);
                const dialog = page.getByRole("dialog");
                if (
                  (await dialog.count()) &&
                  (await dialog.first().isVisible())
                ) {
                  result.modal = {
                    open: true,
                    focusInside: await dialog
                      .first()
                      .evaluate((el) => el.contains(document.activeElement)),
                    fields: await dialog
                      .first()
                      .locator("input")
                      .evaluateAll((es) =>
                        es.map((el) => ({
                          name: el.name,
                          type: el.type,
                          required: el.required,
                        })),
                      ),
                  };
                  const tel = dialog.first().locator('input[type="tel"]');
                  if (await tel.count()) {
                    await tel.fill("abc");
                    await tel.blur();
                    result.modal.invalidValueAccepted = await tel.evaluate(
                      (el) => el.checkValidity(),
                    );
                  }
                  await page.screenshot({
                    path: path.join(
                      out,
                      `recheck-${origin}-${name}-${width}-modal.png`,
                    ),
                    animations: "disabled",
                  });
                  await page.keyboard.press("Escape");
                  await page.waitForTimeout(300);
                  result.modal.closedEscape = !(await dialog
                    .first()
                    .isVisible()
                    .catch(() => false));
                  result.modal.focusReturned = await safe.evaluate(
                    (el) => el === document.activeElement,
                  );
                }
              }
            }
            if (name === "NETVT01") {
              result.ctaButtons = await page
                .locator("a, button")
                .evaluateAll((es) =>
                  es
                    .filter((el) =>
                      /lắp đặt mới|đăng ký/i.test(el.innerText || ""),
                    )
                    .map((el) => ({
                      tag: el.tagName,
                      text: el.innerText.trim().slice(0, 80),
                      href: el.getAttribute("href"),
                      outer: el.outerHTML.slice(0, 350),
                      rect: (() => {
                        const r = el.getBoundingClientRect();
                        return [r.x, r.y, r.width, r.height].map(Math.round);
                      })(),
                    }))
                    .slice(0, 12),
                );
            }
            if (name === "news") {
              const captureImgs = () =>
                page.locator("main img").evaluateAll((es) =>
                  es.slice(0, 8).map((el) => ({
                    alt: el.alt,
                    complete: el.complete,
                    naturalWidth: el.naturalWidth,
                    src: el.currentSrc.slice(0, 180),
                    loading: el.loading,
                    rect: (() => {
                      const r = el.getBoundingClientRect();
                      return [r.x, r.y, r.width, r.height].map(Math.round);
                    })(),
                  })),
                );
              result.newsImagesBefore = await captureImgs();
              for (const i of [0, 1, 2]) {
                const target = page.locator("main img").nth(i);
                if (await target.count()) {
                  await target
                    .scrollIntoViewIfNeeded({ timeout: 1800 })
                    .catch(() => {});
                  await page.waitForTimeout(300);
                }
              }
              await page.waitForTimeout(700);
              result.newsImagesAfterScroll = await captureImgs();
              await page.evaluate(() => window.scrollTo(0, 0));
              await page.waitForTimeout(450);
              await page.screenshot({
                path: path.join(out, `recheck-${origin}-news-${width}.png`),
                animations: "disabled",
              });
            }
          } catch (err) {
            result.error = cut(err.stack || err.message, 500);
          }
          for (const field of [
            "pageErrors",
            "hmrConsoleErrors",
            "nonHmrConsoleErrors",
            "localHttpErrors",
            "localFailed",
          ])
            result[field] = [...new Set(result[field])].slice(0, 8);
          output.push(result);
          console.log(
            origin,
            width,
            name,
            result.status,
            `pages=${result.pageErrors.length}`,
            `HMR=${result.hmrConsoleErrors.length}`,
            `otherConsole=${result.nonHmrConsoleErrors.length}`,
            `http=${result.localHttpErrors.length}`,
            result.error ? cut(result.error, 110) : "",
          );
          page.off("pageerror", onErr);
          page.off("console", onConsole);
          page.off("response", onResponse);
          page.off("requestfailed", onFailed);
        }
        await ctx.close();
      }
  } finally {
    await browser.close();
    fs.writeFileSync(
      path.join(out, "targeted-recheck.json"),
      JSON.stringify(
        { generatedAt: new Date().toISOString(), output, blocked },
        null,
        2,
      ),
    );
  }
}
main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
