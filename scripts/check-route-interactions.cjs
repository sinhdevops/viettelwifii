const {chromium}=require('@playwright/test');
const assert=require('node:assert/strict');
let browser;
(async()=>{
 browser=await chromium.launch({headless:true});
 for(const width of [390,1440]){
  for(const route of ['/goi-cuoc-viettel/5G20','/goi-cuoc-viettel/tra-sau/MXH120','/goi-cuoc-viettel/KS110']){
   const page=await browser.newPage({viewport:{width,height:900}});
   await page.goto('http://localhost:3000'+route,{waitUntil:'networkidle'});
   if(width===1440){
    const triggers=page.locator('main button:visible').filter({hasText:/đăng ký|liên hệ/i});
    assert.ok(await triggers.count(),route+' registration trigger');
    await triggers.first().click();
    await page.getByRole('dialog').waitFor({state:'visible'});
    await page.keyboard.press('Escape');
    await page.getByRole('dialog').waitFor({state:'hidden'});
   } else {
    const hrefs=await page.locator('a').evaluateAll(es=>es.map(e=>e.getAttribute('href')).filter(x=>/^(sms:|tel:)/.test(x||'')));
    assert.ok(hrefs.length,route+' contact links');
   }
   await page.close();
  }
  const page=await browser.newPage({viewport:{width,height:900}});
  await page.goto('http://localhost:3000/tin-tuc',{waitUntil:'networkidle'});
  const link=page.locator('main a[href^="/tin-tuc/"]:visible').first();
  const href=await link.getAttribute('href');await link.click();
  await page.waitForURL('**'+href);assert.equal(await page.locator('h1').count(),1);
  await page.goto('http://localhost:3000/goi-cuoc-roaming',{waitUntil:'networkidle'});
  await page.getByRole('button',{name:'Chọn quốc gia...'}).click();
  await page.getByRole('dialog').waitFor({state:'visible'});
  await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'hidden'});
  await page.close();
  console.log(`${width}: package CTAs, article navigation, roaming country dialog PASS; no outbound contact or submission`);
 }
 await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>browser?.close());
