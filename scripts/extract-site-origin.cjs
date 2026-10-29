// One-time migration: replace authored runtime domain literals with public config.
const fs=require('node:fs'),path=require('node:path'),ts=require('typescript');
const domain='viettelwifii.vn';
let files=0,references=0;
function expression(text){
 if(/^https?:\/\/viettelwifii\.vn(?:\/[^\s]*)?$/.test(text)){
  const url=new URL(text);return `siteConfig.url(${JSON.stringify(url.pathname+url.search+url.hash)})`;
 }
 if(text===domain)return 'siteConfig.hostname';
 const tokens=text.split(/(https?:\/\/viettelwifii\.vn|viettelwifii\.vn)/g);
 return tokens.filter(Boolean).map(x=>x===domain?'siteConfig.hostname':/^https?:\/\/viettelwifii\.vn$/.test(x)?'siteConfig.origin':JSON.stringify(x)).join(' + ');
}
function visitDir(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){
 const file=path.join(dir,item.name);if(item.isDirectory()){visitDir(file);continue;}
 if(!/\.tsx?$/.test(file)||file.includes(path.join('features','seo'))||file.endsWith('site-config.ts'))continue;
 let source=fs.readFileSync(file,'utf8');if(!source.includes(domain))continue;
 const ast=ts.createSourceFile(file,source,ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS),edits=[];
 function walk(node){
  if((ts.isStringLiteral(node)||ts.isNoSubstitutionTemplateLiteral(node))&&node.text.includes(domain)){
   let replacement=expression(node.text);
   if(ts.isJsxAttribute(node.parent))replacement=`{${replacement}}`;
   edits.push({start:node.getStart(ast),end:node.end,text:replacement});return;
  }
  if(ts.isJsxText(node)&&node.getText(ast).includes(domain)){
   const raw=source.slice(node.pos,node.end).replace(/https?:\/\/viettelwifii\.vn/g,'{siteConfig.origin}').replace(/viettelwifii\.vn/g,'{siteConfig.hostname}');
   edits.push({start:node.pos,end:node.end,text:raw});return;
  }
  if(ts.isTemplateExpression(node)&&node.head.text==='https://'+domain&&node.templateSpans.length===1&&node.templateSpans[0].literal.text===''){
   edits.push({start:node.getStart(ast),end:node.end,text:`siteConfig.url(${node.templateSpans[0].expression.getText(ast)})`});return;
  }
  ts.forEachChild(node,walk);
 }walk(ast);
 if(edits.length){for(const e of edits.sort((a,b)=>b.start-a.start))source=source.slice(0,e.start)+e.text+source.slice(e.end);
  source='import { siteConfig } from "@/lib/site-config";\n'+source;fs.writeFileSync(file,source);files++;references+=edits.length;
 }
}}
visitDir('src');console.log(JSON.stringify({files,references}));
