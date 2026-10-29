/* QA-01: independent read-only checks after navigation/news fixes.
 * Run: node tests/e2e/qa-01-navigation-patch.cjs
 * No form POST, SMS or tel interaction. Evidence under reports/qa/20261027.
 */
const { chromium } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const base = 'http://127.0.0.1:4191';
const out = path.join(process.cwd(), 'reports', 'qa', '20261027');
fs.mkdirSync(out, { recursive: true });
const sizes = [{ width: 390, height: 844 }, { width: 768, height: 1024 }, { width: 1440, height: 900 }];
const records = [];
const safety = { blockedLeadRequests: [], blockedExternalNavigations: [] };
const negativeRoutes = [
  '/qa-unknown-path', '/goi-cuoc-viettel/not-a-plan-qa',
  '/goi-cuoc-viettel/tra-sau/not-a-plan-qa', '/internet/not-a-plan-qa',
  '/internet/netvt1', '/tin-tuc/not-an-article-qa', '/tin-tuc/cap-nhat-goi-cuoc-gic',
];

const short = (value) => String(value || '').slice(0, 230);
const currentPath = (page) => new URL(page.url()).pathname;
async function load(page, route) {
  const response = await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 22000 });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(850);
  return response?.status();
}
async function screenshot(page, prefix, width) {
  const file = `patch-${prefix}-${width}.png`;
  await page.screenshot({ path: path.join(out, file), animations: 'disabled' });
  return file;
}
async function clickLocalLink(page, selector, route) {
  const locator = page.locator(selector).first();
  const result = { found: await locator.count() > 0, expected: route };
  if (!result.found) return result;
  result.visible = await locator.isVisible().catch(() => false);
  result.href = await locator.getAttribute('href');
  result.localHref = result.href === route;
  if (!result.visible || !result.localHref) return result;
  try {
    await locator.click({ timeout: 7000 });
    await page.waitForURL((url) => url.pathname === route, { timeout: 12000 });
    result.afterClickPath = currentPath(page);
    result.h1 = await page.locator('h1').first().innerText().catch(() => null);
    result.pass = result.afterClickPath === route && !!result.h1;
  } catch (error) { result.error = short(error.message); }
  return result;
}

async function main() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    for (const viewport of sizes) {
      const context = await browser.newContext({
        viewport, isMobile: viewport.width === 390, hasTouch: viewport.width === 390,
      });
      await context.route('**/api/leads', async (route) => {
        safety.blockedLeadRequests.push(route.request().method() + ' ' + route.request().url());
        await route.abort('blockedbyclient');
      });
      await context.route('**/*', async (route) => {
        const req = route.request();
        if (new URL(req.url()).pathname === '/api/leads') {
          safety.blockedLeadRequests.push(req.method() + ' ' + req.url());
          await route.abort('blockedbyclient');
        } else if (req.isNavigationRequest() && /^https?:/.test(req.url()) && !req.url().startsWith(base + '/')) {
          safety.blockedExternalNavigations.push(req.url());
          await route.abort('blockedbyclient');
        } else await route.continue();
      });
      const page = await context.newPage();
      const result = { viewport, flows: {}, pageErrors: [], console: { hmrWebSocket: [], nonHmr: [] }, failedLocalRequests: [], httpErrors: [] };
      page.on('pageerror', (error) => result.pageErrors.push(short(error.message)));
      page.on('console', (msg) => {
        if (msg.type() !== 'error') return;
        const target = /_next\/hmr|WebSocket.*(handshake|connection)/i.test(msg.text()) ? result.console.hmrWebSocket : result.console.nonHmr;
        target.push(short(msg.text()));
      });
      page.on('response', (response) => {
        if (response.url().startsWith(base + '/') && response.status() >= 400)
          result.httpErrors.push(`${response.status()} ${short(response.url())}`);
      });
      page.on('requestfailed', (request) => {
        if (request.url().startsWith(base + '/')) result.failedLocalRequests.push(`${short(request.url())} ${request.failure()?.errorText}`);
      });
      try {
        result.homeStatus = await load(page, '/');
        const trigger = page.getByRole('button', { name: 'Mở menu' });
        const mobile = await trigger.isVisible().catch(() => false);
        result.flows.headerNews = { mode: mobile ? 'mobile menu' : 'desktop nav' };
        if (mobile) {
          await trigger.click();
          await page.waitForTimeout(450);
          const menu = page.getByRole('dialog', { name: 'Menu điều hướng' });
          result.flows.headerNews.ariaExpanded = await trigger.getAttribute('aria-expanded');
          result.flows.headerNews.menuVisible = await menu.isVisible().catch(() => false);
          const link = menu.getByRole('link', { name: 'Tin tức', exact: true });
          result.flows.headerNews.linkVisible = await link.isVisible().catch(() => false);
          if (result.flows.headerNews.linkVisible) {
            result.flows.headerNews.href = await link.getAttribute('href');
            if (result.flows.headerNews.href === '/tin-tuc') {
              await link.click();
              await page.waitForURL((url) => url.pathname === '/tin-tuc', { timeout: 10000 }).catch(() => {});
              result.flows.headerNews.afterClickPath = currentPath(page);
            }
          }
          result.flows.headerNews.screenshot = await screenshot(page, 'header-menu', viewport.width);
          if (currentPath(page) === '/') {
            await page.keyboard.press('Escape');
            result.flows.headerNews.ariaExpandedAfterEscape = await trigger.getAttribute('aria-expanded');
          }
        } else {
          const news = page.getByRole('navigation', { name: 'Điều hướng chính' }).getByRole('link', { name: 'Tin tức', exact: true });
          result.flows.headerNews.linkVisible = await news.isVisible().catch(() => false);
          if (result.flows.headerNews.linkVisible) {
            result.flows.headerNews.href = await news.getAttribute('href');
            if (result.flows.headerNews.href === '/tin-tuc') {
              await news.focus();
              result.flows.headerNews.focused = await news.evaluate((el) => el === document.activeElement);
              await page.keyboard.press('Enter');
              await page.waitForURL((url) => url.pathname === '/tin-tuc', { timeout: 10000 }).catch(() => {});
              result.flows.headerNews.afterClickPath = currentPath(page);
            }
          }
          result.flows.headerNews.screenshot = await screenshot(page, 'header-nav', viewport.width);
        }
        await load(page, '/');
        result.flows.viewAll = await clickLocalLink(page, 'a:has-text("Xem tất cả")', '/tin-tuc');
        result.flows.viewAll.screenshot = await screenshot(page, 'view-all', viewport.width);

        await load(page, '/');
        result.flows.homeArticle = await clickLocalLink(page, 'main a[href="/tin-tuc/so-sanh-roaming"]', '/tin-tuc/so-sanh-roaming');
        result.flows.homeArticle.screenshot = await screenshot(page, 'home-article', viewport.width);

        await load(page, '/');
        const card = page.locator('.data-card').filter({ has: page.locator('p', { hasText: /^5G20$/ }) }).first();
        const detail = card.getByRole('link', { name: 'CHI TIẾT' });
        result.flows.packageDetails = { cardFound: await card.count() > 0, found: await detail.count() > 0 };
        if (result.flows.packageDetails.found) {
          result.flows.packageDetails.href = await detail.getAttribute('href');
          result.flows.packageDetails.visible = await detail.isVisible();
          if (result.flows.packageDetails.visible && result.flows.packageDetails.href === '/goi-cuoc-viettel/5G20') {
            await detail.click({ timeout: 7000 });
            await page.waitForURL((url) => url.pathname === '/goi-cuoc-viettel/5G20', { timeout: 10000 }).catch(() => {});
            result.flows.packageDetails.afterClickPath = currentPath(page);
            result.flows.packageDetails.h1 = await page.locator('h1').first().innerText().catch(() => null);
          }
        }
        result.flows.packageDetails.screenshot = await screenshot(page, 'package-detail', viewport.width);

        result.newsStatus = await load(page, '/tin-tuc');
        const matches = page.locator('main img[alt*="Roaming"], main img[alt*="Cẩm Nang"], main img[alt*="Tổng hợp"], main img[alt*="So Sánh"], main img[alt*="5G"]');
        result.newsImages = [];
        for (const image of await matches.all()) {
          const rect = await image.boundingBox();
          if (!rect || rect.width < 30 || rect.height < 30) continue;
          await image.scrollIntoViewIfNeeded({ timeout: 4000 }).catch(() => {});
          await image.evaluate((img) => img.decode().catch(() => {})).catch(() => {});
          result.newsImages.push(await image.evaluate((img) => {
            const r = img.getBoundingClientRect();
            return { alt: img.alt.slice(0, 110), src: img.currentSrc.slice(0, 180), complete: img.complete,
              naturalWidth: img.naturalWidth, size: [Math.round(r.width), Math.round(r.height)] };
          }));
        }
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(400);
        result.newsScreenshot = await screenshot(page, 'news-fixed', viewport.width);
        result.overflow = await page.evaluate(() => ({ doc: document.documentElement.scrollWidth, window: innerWidth }));
      } catch (error) { result.scriptError = short(error.stack || error.message); }
      records.push(result);
      console.log('QA-PATCH', viewport.width, JSON.stringify({
        header: result.flows.headerNews, viewAll: result.flows.viewAll, article: result.flows.homeArticle,
        details: result.flows.packageDetails, images: result.newsImages?.map((img) => img.naturalWidth),
        pageErrors: result.pageErrors.length, hmr: result.console.hmrWebSocket.length,
        nonHmr: result.console.nonHmr.length, error: result.scriptError,
      }));
      await context.close();
    }
    const api = await browser.newContext();
    const guards = [];
    for (const route of negativeRoutes) {
      const response = await api.request.get(base + route, { timeout: 15000, maxRedirects: 0 });
      guards.push({ route, status: response.status() });
    }
    await api.close();
    fs.writeFileSync(path.join(out, 'navigation-patch.json'), JSON.stringify({ generatedAt: new Date().toISOString(), records, guards, safety }, null, 2));
    console.log('QA-PATCH GUARDS', guards.map((x) => `${x.route}:${x.status}`).join(' '));
    console.log('QA-PATCH SAFETY', JSON.stringify(safety));
  } finally { await browser.close(); }
}
main().catch((error) => { console.error(error.stack || error); process.exitCode = 1; });
