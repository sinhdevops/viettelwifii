const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const {chromium}=require('@playwright/test');
let browser;
(async()=>{
 const out=path.resolve('reports/integration/common-buttons');fs.mkdirSync(out,{recursive:true});
 browser=await chromium.launch({headless:true});
 const results=[];
 for(const width of [390,768,959,960,1440]){
  const page=await browser.newPage({viewport:{width,height:900}});
  const errors=[];const posts=[];page.on('pageerror',e=>errors.push(e.message));
  page.on('request',r=>{if(r.method()==='POST')posts.push(r.url())});
  await page.goto('http://localhost:3000',{waitUntil:'networkidle'});
  const card=page.locator('.data-card').filter({has:page.getByText('5GLQ210',{exact:true})});
  assert.equal(await card.count(),1);
  await card.scrollIntoViewIfNeeded();
  if(width>=960){
   const register=card.getByRole('button',{name:'Đăng ký',exact:true});
   const detail=card.getByRole('link',{name:'CHI TIẾT',exact:true});
   assert.equal(await register.isDisabled(),false);
   const boxes=await Promise.all([register.boundingBox(),detail.boundingBox()]);
   assert.equal(boxes[0].y,boxes[1].y);assert.equal(boxes[0].height,boxes[1].height);
   const metrics=await detail.evaluate(e=>({display:getComputedStyle(e).display,align:getComputedStyle(e).alignItems,justify:getComputedStyle(e).justifyContent}));
   assert.deepEqual(metrics,{display:'inline-flex',align:'center',justify:'center'});
   await card.screenshot({path:path.join(out,`card-${width}.png`)});
   await register.click();await page.getByRole('dialog').waitFor({state:'visible'});
   assert.match(await page.getByRole('dialog').innerText(),/5GLQ210 UP/);
   await page.keyboard.press('Escape');await page.getByRole('dialog').waitFor({state:'hidden'});
   assert.equal(await register.evaluate(e=>document.activeElement===e),true);
   await register.press('Enter');await page.getByRole('dialog').waitFor({state:'visible'});
   await page.getByRole('dialog').getByRole('button',{name:'Đóng',exact:true}).last().click();
   await page.getByRole('dialog').waitFor({state:'hidden'});
   await detail.click();await page.waitForURL('**/goi-cuoc-viettel/5GLQ210');
   await page.locator('h1').filter({hasText:'5GLQ210'}).waitFor();
   // Next's client navigation may retain the previous page in a hidden Activity.
   assert.equal(await page.locator('h1:visible').count(),1);
  }else{
   const register=card.getByRole('link',{name:'Đăng Ký',exact:true});
   assert.match(await register.getAttribute('href'),/^sms:.*5GLQ210/);
   assert.equal(await card.getByRole('link',{name:'CHI TIẾT',exact:true}).count(),0);
   await card.screenshot({path:path.join(out,`card-${width}.png`)});
  }
  assert.deepEqual(errors,[]);assert.deepEqual(posts,[]);
  results.push({width,passed:true,errors,posts});await page.close();
 }
 fs.writeFileSync(path.join(out,'result.json'),JSON.stringify(results,null,2));console.log(JSON.stringify(results));
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>browser?.close());
