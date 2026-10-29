const{chromium}=require('@playwright/test');const assert=require('node:assert/strict');let browser;
(async()=>{
 browser=await chromium.launch({headless:true});const p=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 await p.goto('http://localhost:3000/internet',{waitUntil:'networkidle'});const root=p.getByRole('region',{name:'Gói cước Ultra Speed',exact:true}),track=root.locator('[data-slot="carousel-track"]');await root.scrollIntoViewIfNeeded();
 const x=()=>track.evaluate(e=>new DOMMatrixReadOnly(getComputedStyle(e).transform).m41);
 const next=root.getByRole('button',{name:'Gói cước tiếp theo'}),prev=root.getByRole('button',{name:'Gói cước trước'});
 const box=await root.locator('[data-slot="carousel-content"]').boundingBox();await p.mouse.move(box.x+box.width*.8,box.y+60);await p.mouse.down();await p.mouse.move(box.x+box.width*.2,box.y+60,{steps:20});await p.mouse.up();
 // Embla paints its jump on the next animation frame; check there is no glide after that paint.
 await p.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
 const release=await x();await p.waitForTimeout(150);assert.ok(Math.abs((await x())-release)<.5,`Reduced-motion release must not glide: ${release} -> ${await x()}`);
 await p.setViewportSize({width:390,height:1000});await p.waitForTimeout(350);await root.scrollIntoViewIfNeeded();const before=await x();if(await next.isEnabled())await next.click();else await prev.click();await p.waitForTimeout(50);assert.ok(Math.abs((await x())-before)>30,'Resize must retain working controls');
 await p.setViewportSize({width:1440,height:1000});await p.waitForTimeout(350);assert.equal(await root.locator('[data-slot="carousel-item"]').count(),4);assert.equal(await root.getAttribute('data-collection-can-next'),null);
 console.log('Reduced-motion drag settle + desktop/mobile reInit PASS');await p.close();
})().catch(e=>{console.error(e);process.exitCode=1}).finally(()=>browser?.close());
