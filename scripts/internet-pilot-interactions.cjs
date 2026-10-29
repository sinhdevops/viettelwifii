const { chromium } = require('@playwright/test');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({headless:true});
  for(const width of [390,1440]) {
    const page = await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
    await page.goto('http://localhost:3000/internet',{waitUntil:'networkidle'});
    const card = page.locator('.internet-card').filter({has:page.locator('span', {hasText:/^NETVT01$/})}).first();
    const radio = card.getByRole('radio',{name:'HN & TP.HCM'});
    await radio.click();
    assert.equal(await radio.getAttribute('aria-checked'),'true');
    assert.match(await card.innerText(),/265.000/);
    await card.getByRole('radio',{name:'Tỉnh/TP khác'}).click();
    assert.match(await card.innerText(),/225.000/);
    await card.getByRole('button',{name:'Đăng ký',exact:true}).click();
    await page.getByRole('dialog').waitFor({state:'visible'});
    await page.getByRole('dialog').getByLabel('Nhập số điện thoại').waitFor();
    await page.keyboard.press('Escape');
    await page.getByRole('dialog').waitFor({state:'hidden'});
    const faq = page.getByRole('button',{name:'Làm thế nào để chọn gói Internet Viettel phù hợp?'});
    await faq.click();
    assert.equal(await faq.getAttribute('aria-expanded'),'true');
    await faq.click();
    assert.equal(await faq.getAttribute('aria-expanded'),'false');
    console.log(`${width}: region/price, dialog open/Escape, FAQ PASS; no submission`);
    await page.close();
  }
  await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1});
