/** Browser evidence for source-derived package routes. Never activates tel/sms links. */
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("@playwright/test");

const base = process.env.VIETTELUP_PREVIEW_URL || "http://localhost:4191";
const evidenceDir = path.resolve(__dirname, "../../../reports/agent-handoffs/vt_packages/screenshots");
fs.mkdirSync(evidenceDir, { recursive: true });
const routes = [
  { name: "general-5G20", route: "/goi-cuoc-viettel/5G20", kind: "sms", code: "5G20" },
  { name: "general-MXH120", route: "/goi-cuoc-viettel/MXH120", kind: "sms", code: "MXH120" },
  { name: "postpaid-MXH120", route: "/goi-cuoc-viettel/tra-sau/MXH120", kind: "contact", code: "MXH120" },
  { name: "money-KS110", route: "/goi-cuoc-viettel/KS110", kind: "money", code: "KS110" },
  { name: "long-5G480B", route: "/goi-cuoc-viettel/5G480B", kind: "sms", code: "5G480B" },
];
const viewports = [
  { name: "390x844", width: 390, height: 844 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "1440x900", width: 1440, height: 900 },
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const route of routes) {
      for (const viewport of viewports) {
        const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
        const consoleErrors = [];
        const failedLocal = [];
        page.on("pageerror", (error) => consoleErrors.push(error.message));
        page.on("response", (response) => {
          if (response.status() >= 400 && response.url().startsWith(base)) {
            failedLocal.push(`${response.status()} ${response.url()}`);
          }
        });
        const row = { route: route.route, viewport: viewport.name, passed: true, checks: {}, errors: [] };
        try {
          const response = await page.goto(base + route.route, { waitUntil: "domcontentloaded", timeout: 45000 });
          await page.locator("main h1").first().waitFor({ timeout: 15000 });
          await page.waitForTimeout(450);
          row.checks.status = response?.status();
          row.checks.h1 = await page.locator("main h1").first().innerText();
          row.checks.deepHeadings = await page.locator("main h2").count();
          row.checks.relatedLinks = await page.locator('main a[href^="/goi-cuoc-viettel/"]').count();
          row.checks.overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 2);
          row.checks.stickyCTA = viewport.width < 960
            ? await page.locator('main a[href^="sms:"],main a[href^="tel:"]').last().getAttribute("href")
            : null;
          if (row.checks.status !== 200) row.errors.push(`HTTP ${row.checks.status}`);
          if (!row.checks.h1.includes(route.code)) row.errors.push("Incorrect H1");
          if (row.checks.deepHeadings < 1) row.errors.push("Missing deep content headings");
          if (row.checks.overflow) row.errors.push("Horizontal page overflow");
          if (viewport.width < 960) {
            const expected = route.kind === "contact" ? "tel:18008098" : route.kind === "money" ? "https://km.vtmoney.vn/314y/homeapp" : `sms:290?body=${route.code} UP`;
            const cta = await page.locator('main > article > div > div:last-child a').last().getAttribute("href");
            row.checks.mobileCTA = cta;
            if (cta !== expected) row.errors.push(`Mobile CTA expected ${expected}, got ${cta}`);
          }
          const screenshotName = `${route.name}-${viewport.name}-verified.png`;
          await page.screenshot({ path: path.join(evidenceDir, screenshotName), animations: "disabled" });
          row.checks.viewportScreenshot = screenshotName;
          const headings = page.locator("main h2");
          if (await headings.count()) {
            await headings.first().scrollIntoViewIfNeeded();
            await page.waitForTimeout(180);
            if (viewport.width === 390) {
              const deepShot = `${route.name}-${viewport.name}-deep.png`;
              await page.screenshot({ path: path.join(evidenceDir, deepShot), animations: "disabled" });
              row.checks.deepScreenshot = deepShot;
            }
            await headings.last().scrollIntoViewIfNeeded();
            await page.waitForTimeout(180);
            row.checks.finalHeading = await headings.last().innerText();
            if (viewport.width === 390) {
              const endingShot = `${route.name}-${viewport.name}-related.png`;
              await page.screenshot({ path: path.join(evidenceDir, endingShot), animations: "disabled" });
              row.checks.relatedScreenshot = endingShot;
            }
          }
          row.checks.visibleBrokenImages = await page.evaluate(() => [...document.querySelectorAll("main img")]
            .filter(el => el.complete && el.naturalWidth === 0 && el.getBoundingClientRect().width > 0)
            .map(el => ({ alt: el.alt, src: el.currentSrc })).slice(0, 10));
          if (row.checks.visibleBrokenImages.length) row.errors.push("Broken loaded image(s)");
          if (viewport.width === 1440) {
            const trigger = page.locator('main button[aria-haspopup="dialog"]:visible').first();
            row.checks.dialogTriggerCount = await page.locator('main button[aria-haspopup="dialog"]:visible').count();
            if (row.checks.dialogTriggerCount === 0) {
              row.errors.push("No visible desktop dialog trigger");
            } else {
              await trigger.scrollIntoViewIfNeeded();
              await trigger.click();
              const dialog = page.locator("dialog[open]").first();
              await dialog.waitFor({ timeout: 7000 });
              row.checks.dialogVariant = await dialog.getAttribute("data-variant");
              row.checks.dialogText = (await dialog.innerText()).replace(/\s+/g, " ").trim();
              row.checks.dialogCTA = await dialog.locator("a").first().getAttribute("href").catch(() => null);
              if (row.checks.dialogVariant !== route.kind) row.errors.push(`Dialog kind: ${row.checks.dialogVariant}`);
              if (!row.checks.dialogText.includes(route.code)) row.errors.push("Dialog has wrong package code");
              if (route.kind === "sms" && row.checks.dialogCTA !== `sms:290?body=${route.code}%20UP`) row.errors.push("Dialog SMS CTA mismatch");
              if (route.kind === "contact" && row.checks.dialogCTA !== "tel:18008098") row.errors.push("Dialog call CTA mismatch");
              if (route.kind === "money" && row.checks.dialogCTA) row.errors.push("Unexpected money CTA");
              if (route.kind === "contact") {
                row.checks.dialogImage = await dialog.locator("img").first().evaluate(el => ({ src: el.currentSrc, loaded: el.complete && el.naturalWidth > 0 }));
                if (!row.checks.dialogImage.loaded) row.errors.push("Contact image failed to load");
              }
              const modalShot = `${route.name}-${viewport.name}-modal.png`;
              await page.screenshot({ path: path.join(evidenceDir, modalShot), animations: "disabled" });
              row.checks.modalScreenshot = modalShot;
              await page.keyboard.press("Escape");
              await dialog.waitFor({ state: "hidden", timeout: 7000 });
              row.checks.escapeRestoredFocus = await trigger.evaluate(el => document.activeElement === el);
              if (!row.checks.escapeRestoredFocus) row.errors.push("Escape failed to restore trigger focus");
              await trigger.click();
              await page.locator("dialog[open]").first().waitFor();
              await page.mouse.click(2, 2);
              await page.locator("dialog[open]").waitFor({ state: "hidden", timeout: 7000 });
              row.checks.backdropClose = true;
              await trigger.click();
              await page.locator("dialog[open]").first().waitFor();
              await page.locator('dialog[open] button[aria-label="Đóng"]').first().click();
              await page.locator("dialog[open]").waitFor({ state: "hidden", timeout: 7000 });
            }
          }
          row.checks.pageErrors = consoleErrors;
          row.checks.failedLocal = failedLocal;
          if (consoleErrors.length) row.errors.push(`Page errors: ${consoleErrors.join(" | ")}`);
          if (failedLocal.length) row.errors.push(`Failed local HTTP: ${failedLocal.join(" | ")}`);
        } catch (error) {
          row.errors.push(String(error.message || error));
        } finally {
          row.passed = row.errors.length === 0;
          results.push(row);
          console.log(`${row.passed ? "PASS" : "FAIL"} ${route.name} ${viewport.name}: ${row.errors.join(" | ")}`);
          await page.close();
        }
      }
    }
  } finally {
    await browser.close();
  }
  const report = { base, createdAt: new Date().toISOString(), samples: results.length, passed: results.filter(x => x.passed).length, failed: results.filter(x => !x.passed).length, results };
  const reportPath = path.resolve(evidenceDir, "../BROWSER-RESULTS.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
  console.log(JSON.stringify({ samples: report.samples, passed: report.passed, failed: report.failed, reportPath }, null, 2));
  if (report.failed) process.exitCode = 1;
}

main().catch(e => { console.error(e); process.exitCode = 1; });
