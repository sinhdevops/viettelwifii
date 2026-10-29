/* Independent QA-01 evidence collector; never submits leads or activates tel links.
 * Run: node tests/e2e/qa-01-browser-audit.cjs
 * Writes evidence exclusively to reports/qa/20261027/.
 */
const { chromium } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const root = process.cwd();
const out = path.join(root, 'reports', 'qa', '20261027');
fs.mkdirSync(out, { recursive: true });
const cases = [
  ['home', '/'],
  ['package-5G20', '/goi-cuoc-viettel/5G20'],
  ['postpaid-MXH120', '/goi-cuoc-viettel/tra-sau/MXH120'],
  ['internet-NETVT01', '/internet/NETVT01'],
  ['news-list', '/tin-tuc'],
  ['news-roaming', '/tin-tuc/so-sanh-roaming'],
];
const sizes = [{ width: 390, height: 844 }, { width: 768, height: 1024 }, { width: 1440, height: 900 }];
const bases = { source: 'http://127.0.0.1:4185', next: 'http://127.0.0.1:4191' };
const results = [];
const blockedPosts = [];

async function state(page) {
  return page.evaluate(() => {
    const main = document.querySelector('main');
    const visible = (el) => { const r = el.getBoundingClientRect(); return r.width > 1 && r.height > 1 && r.bottom > 0 && r.top < innerHeight; };
    const imgs = [...document.images];
    const bad = imgs.filter((img) => visible(img) && img.complete && img.naturalWidth === 0).map((img) => img.currentSrc || img.src);
    return {
      viewport: [innerWidth, innerHeight],
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
      bodyHeight: document.body.scrollHeight,
      overflowing: [...document.querySelectorAll('body *')].filter((el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 5 && r.right > innerWidth + 3 && s.position !== 'absolute' && s.position !== 'fixed'; }).slice(0, 5).map((el) => ({ tag: el.tagName, class: String(el.className).slice(0, 100), right: Math.round(el.getBoundingClientRect().right) })),
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || null,
      robots: document.querySelector('meta[name="robots"]')?.content || null,
      canonical: document.querySelector('link[rel="canonical"]')?.href || null,
      h1: [...document.querySelectorAll('h1')].map((el) => el.innerText.trim().slice(0, 140)),
      mainLength: (main?.innerText || '').length,
      headerCount: document.querySelectorAll('header, nav[aria-label="Điều hướng chính"]').length,
      footerCount: document.querySelectorAll('footer').length,
      images: imgs.length,
      badVisibleImages: bad.slice(0, 10),
      firstImages: imgs.slice(0, 5).map((el) => ({ alt: el.alt, complete: el.complete, naturalWidth: el.naturalWidth, src: el.currentSrc.slice(0, 150) })),
      dialogs: document.querySelectorAll('[role="dialog"]').length,
      floating: [...document.querySelectorAll('nav[aria-label="Liên hệ nhanh"] a')].map((a) => ({ label: a.getAttribute('aria-label'), href: a.getAttribute('href') })),
    };
  });
}

async function activity(page, name, width) {
  const evidence = {};
  if (name === 'home') {
    const prev = page.getByRole('button', { name: 'Banner trước' });
    const next = page.getByRole('button', { name: 'Banner tiếp theo' });
    const dots = page.locator('[aria-label="Chọn banner"] button');
    evidence.carousel = { found: await prev.count() > 0 && await next.count() > 0, dots: await dots.count() };
    if (evidence.carousel.found && await dots.count() > 1) {
      evidence.carousel.initial = await dots.evaluateAll((nodes) => nodes.map((n) => n.getAttribute('aria-current')));
      await next.click();
      evidence.carousel.afterNext = await dots.evaluateAll((nodes) => nodes.map((n) => n.getAttribute('aria-current')));
      await prev.click();
      evidence.carousel.afterPrev = await dots.evaluateAll((nodes) => nodes.map((n) => n.getAttribute('aria-current')));
      if (width === 390) {
        evidence.carousel.swipe = await page.evaluate(() => {
          const area = document.querySelector('section[aria-label="Banner ưu đãi Viettel"] > div');
          if (!area || !window.Touch) return 'not-supported';
          const touch = (x) => new Touch({ identifier: 1, target: area, clientX: x, clientY: 180 });
          area.dispatchEvent(new TouchEvent('touchstart', { bubbles: true, touches: [touch(320)], targetTouches: [touch(320)], changedTouches: [touch(320)] }));
          area.dispatchEvent(new TouchEvent('touchend', { bubbles: true, touches: [], targetTouches: [], changedTouches: [touch(80)] }));
          return 'dispatched';
        });
        evidence.carousel.afterSwipe = await dots.evaluateAll((nodes) => nodes.map((n) => n.getAttribute('aria-current')));
      }
    }
    if (width === 390) {
      const trigger = page.getByRole('button', { name: 'Mở menu' });
      evidence.menu = { trigger: await trigger.count() };
      if (await trigger.isVisible().catch(() => false)) {
        await trigger.click();
        evidence.menu.open = await page.getByRole('dialog').isVisible().catch(() => false);
        evidence.menu.links = await page.getByRole('dialog').locator('a').count().catch(() => 0);
        await page.keyboard.press('Escape');
        evidence.menu.closedEscape = await page.getByRole('dialog').count() === 0;
        evidence.menu.focusReturned = await trigger.evaluate((el) => el === document.activeElement);
      }
    }
  }
  if (name === 'package-5G20' || name === 'postpaid-MXH120') {
    const triggers = page.getByRole('button', { name: /đăng ký/i });
    evidence.modal = { buttonCount: await triggers.count() };
    if (await triggers.count()) {
      const trigger = triggers.first();
      try {
        await trigger.click({ timeout: 3000 });
        const dialog = page.getByRole('dialog');
        evidence.modal.open = await dialog.isVisible().catch(() => false);
        if (evidence.modal.open) {
          evidence.modal.title = await dialog.innerText().then((x) => x.slice(0, 300));
          evidence.modal.focusInside = await dialog.evaluate((el) => el.contains(document.activeElement));
          const phone = dialog.locator('input[type="tel"]');
          evidence.modal.phoneField = await phone.count();
          if (await phone.count()) {
            await phone.fill('abc'); await phone.blur();
            evidence.modal.invalidPhoneNative = await phone.evaluate((el) => !el.checkValidity());
          }
          await page.screenshot({ path: path.join(out, `next-${name}-${width}-modal.png`), animations: 'disabled' });
          await page.keyboard.press('Escape');
          evidence.modal.closedEscape = await dialog.count() === 0;
          evidence.modal.focusReturned = await trigger.evaluate((el) => el === document.activeElement);
        }
      } catch (err) { evidence.modal.error = String(err).slice(0, 200); }
    }
  }
  if (name === 'news-list') {
    evidence.featured = await page.evaluate(() => [...document.querySelectorAll('main img')].slice(0, 12).map((el) => ({ alt: el.alt, loaded: el.complete && el.naturalWidth > 0, src: el.currentSrc.slice(0, 125) })));
  }
  return evidence;
}

async function run() {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  try {
    for (const viewport of sizes) {
      for (const [origin, base] of Object.entries(bases)) {
        const context = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: viewport.width === 390, hasTouch: viewport.width === 390 });
        await context.route('**/api/leads', async (route) => { blockedPosts.push({ origin, url: route.request().url(), method: route.request().method() }); await route.abort('blockedbyclient'); });
        const page = await context.newPage();
        for (const [name, route] of cases) {
          const record = { origin, route, name, viewport, consoleErrors: [], pageErrors: [], localFailed: [], httpErrors: [] };
          const onConsole = (message) => { if (message.type() === 'error') record.consoleErrors.push(message.text().slice(0, 250)); };
          const onPageError = (error) => record.pageErrors.push(error.message.slice(0, 250));
          const onRequestFailed = (request) => { if (request.url().startsWith(base)) record.localFailed.push(`${request.method()} ${request.url()} ${request.failure()?.errorText}`.slice(0, 240)); };
          const onResponse = (response) => { if (response.status() >= 400 && response.url().startsWith(base)) record.httpErrors.push(`${response.status()} ${response.url()}`.slice(0, 240)); };
          page.on('console', onConsole); page.on('pageerror', onPageError); page.on('requestfailed', onRequestFailed); page.on('response', onResponse);
          try {
            const response = await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 30000 });
            record.status = response?.status() || null;
            await page.evaluate(() => document.fonts.ready).catch(() => {});
            await page.waitForTimeout(450);
            record.state = await state(page);
            record.screenshot = `${origin}-${name}-${viewport.width}.png`;
            await page.screenshot({ path: path.join(out, record.screenshot), animations: 'disabled', timeout: 20000 });
            if (origin === 'next') record.interaction = await activity(page, name, viewport.width);
          } catch (err) { record.error = String(err).slice(0, 500); }
          record.consoleErrors = [...new Set(record.consoleErrors)].slice(0, 8);
          record.localFailed = [...new Set(record.localFailed)].slice(0, 8);
          record.httpErrors = [...new Set(record.httpErrors)].slice(0, 8);
          results.push(record);
          console.log(`${origin} ${viewport.width} ${route} ${record.status || 'ERR'} overflow=${record.state?.documentWidth > viewport.width} pageErrors=${record.pageErrors.length} badImg=${record.state?.badVisibleImages.length ?? '?'} ${record.error || ''}`);
          page.off('console', onConsole); page.off('pageerror', onPageError); page.off('requestfailed', onRequestFailed); page.off('response', onResponse);
        }
        await context.close();
      }
    }
    const manifest = JSON.parse(fs.readFileSync(path.join(root, 'data', 'approved-routes.json'), 'utf8')).routes;
    const pageContent = JSON.parse(fs.readFileSync(path.join(root, 'data', 'pages.json'), 'utf8'));
    const request = await playwrightRequest(browser);
    const paths = [...manifest, '/qa-unknown-path', '/goi-cuoc-viettel/tra-sau/not-a-plan-qa', '/internet/netvt1', '/tin-tuc/cap-nhat-goi-cuoc-gic'];
    const smoke = [];
    let cursor = 0;
    async function worker() {
      while (cursor < paths.length) {
        const route = paths[cursor++];
        const item = { route, expectedStatus: pageContent[route]?.status || 'unlisted' };
        try {
          const response = await request.get(bases.next + route, { timeout: 25000, maxRedirects: 0 });
          item.status = response.status();
          const html = await response.text();
          const plain = (x) => x.replace(/<[^>]*>/g, '').replace(/&(?:amp|nbsp|quot|#39);/g, ' ').trim();
          item.h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => plain(m[1]).slice(0, 110));
          item.title = plain(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '');
          item.description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || '';
          item.robots = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i)?.[1] || '';
          item.expectedHeading = pageContent[route]?.heading || '';
          item.headingMatch = item.h1s.some((h) => h === item.expectedHeading) || false;
          item.hasMain = /<main\b/i.test(html);
        } catch (err) { item.error = String(err).slice(0, 200); }
        smoke.push(item);
      }
    }
    await Promise.all(Array.from({ length: 8 }, () => worker()));
    smoke.sort((a, b) => paths.indexOf(a.route) - paths.indexOf(b.route));
    fs.writeFileSync(path.join(out, 'route-smoke.json'), JSON.stringify(smoke, null, 2));
    console.log('ROUTE-SMOKE', JSON.stringify({ total: smoke.length, statuses: smoke.reduce((a, r) => ((a[r.status || 'error'] = (a[r.status || 'error'] || 0) + 1), a), {}), matchingH1: smoke.filter((s) => s.headingMatch).length }));
  } finally {
    await browser.close();
    fs.writeFileSync(path.join(out, 'browser-evidence.json'), JSON.stringify({ generatedAt: new Date().toISOString(), cases: results, blockedPosts }, null, 2));
  }
}

async function playwrightRequest(browser) {
  return browser.newContext({ ignoreHTTPSErrors: true }).then((context) => context.request);
}

run().catch((error) => { console.error(error); process.exitCode = 1; });
