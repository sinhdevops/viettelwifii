/** Offline SSR/DOM parity check for the 116 source-derived JSX components. */
const fs=require("node:fs");
const path=require("node:path");
const ts=require("typescript");
const React=require("react");
const ReactDOMServer=require("react-dom/server");
const {chromium}=require("@playwright/test");
const routes=require("../../../data/approved-routes.json").routes;
const registry=require("../../generated/viettelup-assets.json");
const outputDir=__dirname;
function sourceAsset(s) {
  if(s.startsWith("/assets/viettelup/"))return s;
  const url=new URL(s,"https://www.viettelup.vn");
  url.hash="";
  const pairs=[...url.searchParams].sort(([a,b],[c,d])=>a.localeCompare(c)||b.localeCompare(d));
  url.search="";
  for(const [a,b] of pairs)url.searchParams.append(a,b);
  if(registry[url.href])return registry[url.href];
  // Match the shared runtime helper's fallback for the original capture's
  // query-param order; Next Image uses url/w/q rather than sorted q/url/w.
  const equivalent=Object.entries(registry).find(([key])=>{
    const candidate=new URL(key);
    candidate.hash="";
    const sorted=[...candidate.searchParams].sort(([a,b],[c,d])=>a.localeCompare(c)||b.localeCompare(d));
    candidate.search="";
    for(const [a,b] of sorted)candidate.searchParams.append(a,b);
    return candidate.href===url.href;
  });
  if(!equivalent)throw new Error("Unmapped source asset "+s);
  return equivalent[1];
}
function renderTSX(file) {
  const input=fs.readFileSync(file,"utf8");
  const compiled=ts.transpileModule(input,{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022}}).outputText;
  const m={exports:{}};
  const use=name=>{
    if(name==="react/jsx-runtime")return require("react/jsx-runtime");
    if(name==="@/lib/viettelup-source-assets")return {sourceAsset};
    // The source-derived DOM mounts interaction only after hydration. For the
    // static DOM parity check, retain the original trigger button and text.
    if(name==="../package-source-dialog-trigger")return {
      PackageSourceDialogTrigger:({children,className})=>React.createElement("button",{
        type:"button",className,"aria-haspopup":"dialog","aria-expanded":false,
      },children),
    };
    throw new Error("Unexpected import "+name+" from "+file);
  };
  new Function("require","module","exports",compiled)(use,m,m.exports);
  return ReactDOMServer.renderToStaticMarkup(React.createElement(m.exports.default));
}
function fileURL(file) {return "file:///"+file.replace(/\\/g,"/");}
function metrics() {
  const root=document.querySelector('main > article > div');
  if(!root)return null;
  const count=q=>root.querySelectorAll(q).length;
  const texts=q=>[...root.querySelectorAll(q)].map(x=>x.textContent.trim());
  const sticky=root.lastElementChild;
  return {text:root.textContent.replace(/\s+/g," ").trim(),
    h1:texts("h1"),h2:texts("h2"),h3:texts("h3"),
    tables:count("table"),imgs:count("img"),lists:count("ul,ol"),
    links:[...root.querySelectorAll('a[href^="sms:"],a[href^="tel:"]')].map(a=>a.getAttribute("href")),
    sticky:sticky?[...sticky.querySelectorAll('a[href^="sms:"],a[href^="tel:"]')].map(a=>a.getAttribute("href")):[]};
}
async function run() {
  const browser=await chromium.launch({headless:true});
  const page=await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1});
  const mismatches=[];
  const structureSamples=[];
  let validCTAUpgrades=0;
  let matched=0,images=0,tables=0;
  try {
    for(let i=2;i<118;i++) {
      const pathName=routes[i],post=pathName.includes("/tra-sau/");
      const moduleName=(post?"postpaid-":"general-")+pathName.split("/").at(-1)+".tsx";
      const html=renderTSX(path.join(outputDir,"source-pages",moduleName));
      await page.goto(fileURL(path.join(process.cwd(),"work/web-clone-benchmark/raw/html",String(i).padStart(4,"0")+".html")),{waitUntil:"domcontentloaded"});
      const comparison=await page.evaluate((html)=>{
        function probe(el) {
          if(!el)return null;
          const count=q=>el.querySelectorAll(q).length;
          const text=q=>[...el.querySelectorAll(q)].map(x=>x.textContent.trim());
          return {body:el.textContent.replace(/\s+/g," ").trim(),
            h1:text("h1"),h2:text("h2"),h3:text("h3"),tables:count("table"),imgs:count("img"),
            lists:count("ul,ol"),ctas:[...el.querySelectorAll('a[href^="sms:"],a[href^="tel:"]')].map(a=>a.getAttribute("href")),
            // Generated pages add a single-purpose scroll wrapper around
            // overflow-prone source tables. It contributes no source content.
            classStructure:[el,...el.querySelectorAll("*")]
              .filter(e=>!(e.tagName==="DIV"&&e.getAttribute("class")==="source-package-table-scroll"&&
                e.children.length===1&&e.firstElementChild?.tagName==="TABLE"))
              .map(e=>[e.tagName,e.getAttribute("class")||""]),
            sticky:[...el.lastElementChild?.querySelectorAll('a[href^="sms:"],a[href^="tel:"]')||[]].map(a=>a.getAttribute("href"))};
        }
        const src=[...document.querySelector('main>article').children].find(e=>e.tagName==="DIV"&&e.querySelector("h1"));
        const parsed=new DOMParser().parseFromString(html,"text/html");
        const gen=parsed.body.querySelector("div");
        return {source:probe(src),render:probe(gen)};
      },html);
      const a=comparison.source,b=comparison.render;
      if(!a||!b) {mismatches.push([pathName,"missing_root"]);continue;}
      // The source's desktop registration button was intentionally upgraded
      // to a working SMS/tel anchor without changing its visual CSS classes.
      // All other element ordering, tags, and exact class attributes must match.
      let classStructureMatches=a.classStructure.length===b.classStructure.length;
      if(classStructureMatches) for(let j=0;j<a.classStructure.length;j++) {
        const [sourceTag,sourceClass]=a.classStructure[j];
        const [renderTag,renderClass]=b.classStructure[j];
        if(sourceTag===renderTag&&sourceClass===renderClass)continue;
        if(sourceTag==="BUTTON"&&renderTag==="A"&&sourceClass===renderClass&&
           sourceClass.includes("border border-primary")&&sourceClass.includes("md:block")) {
          validCTAUpgrades++;
          continue;
        }
        classStructureMatches=false;
        if(structureSamples.length<5)structureSamples.push({path:pathName,sourceCount:a.classStructure.length,
          renderCount:b.classStructure.length,index:j,source:a.classStructure.slice(Math.max(0,j-2),j+3),
          render:b.classStructure.slice(Math.max(0,j-2),j+3)});
        break;
      }
      if(!classStructureMatches&&structureSamples.length<5&&a.classStructure.length!==b.classStructure.length) {
        const j=a.classStructure.findIndex((entry,index)=>JSON.stringify(entry)!==JSON.stringify(b.classStructure[index]));
        structureSamples.push({path:pathName,sourceCount:a.classStructure.length,renderCount:b.classStructure.length,
          index:j,source:a.classStructure.slice(Math.max(0,j-2),j+5),render:b.classStructure.slice(Math.max(0,j-2),j+5)});
      }
      const errors=[];
      for(const f of ["body","h1","h2","h3","tables","imgs","lists","sticky"])
        if(JSON.stringify(a[f])!==JSON.stringify(b[f]))errors.push(f);
      if(!classStructureMatches)errors.push("classStructure");
      // Buttons with verified mobile CTA became anchors; original and rendered
      // source SMS/tel CTA *destinations* must each remain present.
      for(const href of new Set(a.ctas))
        if(!b.ctas.includes(href))errors.push("missing_href:"+href);
      if(errors.length)mismatches.push([pathName,errors]);
      else matched++;
      tables+=b.tables;images+=b.imgs;
      if(i===2||i===103) {
        const suffix=i===2?"5G20":"postpaid-MXH120";
        // The CSS-complete snapshot has the original source stylesheet.
        const cssFile=path.join(process.cwd(),"work/web-clone-benchmark/local/css-complete",...pathName.split("/").filter(Boolean),"index.html");
        await page.goto(fileURL(cssFile),{waitUntil:"domcontentloaded"});
        await page.evaluate((newHtml)=>{
          const article=document.querySelector("main>article");
          const parsed=new DOMParser().parseFromString(newHtml,"text/html");
          const next=parsed.body.querySelector("div");
          article.replaceChildren(document.importNode(next,true));
        },html);
        await page.screenshot({path:path.join(outputDir,"evidence-"+suffix+"-mobile.png"),fullPage:true});
      }
    }
  } finally {await browser.close();}
  const report={checked:116,parity:matched,jsxTables:tables,jsxImages:images,
    mismatches:mismatches.slice(0,35),mismatchCount:mismatches.length,
    validCTAUpgrades,structureSamples,
    screenshots:["src/features/packages/evidence-5G20-mobile.png",
      "src/features/packages/evidence-postpaid-MXH120-mobile.png"]};
  const reportPath=path.resolve(outputDir,"../../../reports/agent-handoffs/vt_packages/SOURCE-PARITY-RESULTS.json");
  fs.mkdirSync(path.dirname(reportPath),{recursive:true});
  fs.writeFileSync(reportPath,JSON.stringify(report,null,2)+"\n");
  console.log(JSON.stringify({...report,reportPath},null,2));
  if(mismatches.length)process.exitCode=1;
}
run().catch(e=>{console.error(e);process.exitCode=1;});
