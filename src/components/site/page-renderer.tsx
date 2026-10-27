import Link from "next/link";
import Image from "next/image";
import type { PageContent } from "@/lib/content-schema";
import { LeadDialog } from "@/components/leads/lead-dialog";
import { getApprovedRoutes, getPage } from "@/lib/site-data";
import { HomeContent } from "@/features/home/home-content";
import { PackageContent } from "@/features/packages/package-content";
import { InternetContent } from "@/features/internet/internet-content";
import { NewsListContent } from "@/features/news/news-list-content";
import { NewsArticleContent } from "@/features/news/news-article-content";
import { CollectionContent } from "@/features/collections/collection-content";

export function PageRenderer({ page, path }: { page: PageContent; path: string }) {
  if (page.kind === "home") return <HomeContent page={page} path={path} />;
  if (page.kind === "package") return <PackageContent page={page} path={path} />;
  if (page.kind === "internet") return <InternetContent page={page} path={path} />;
  if (page.kind === "news-list") return <NewsListContent page={page} path={path} />;
  if (page.kind === "news-article") return <NewsArticleContent page={page} path={path} />;
  if (page.kind === "collection") return <CollectionContent page={page} path={path} />;
  const routes = new Set(getApprovedRoutes());
  return <main className="mx-auto max-w-6xl px-4 py-10">
    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{page.heading}</h1>
    {page.intro && <p className="mt-4 max-w-3xl text-neutral-600">{page.intro}</p>}
    {page.status === "ready" && page.product?.id === path &&
      <div className="mt-5"><LeadDialog itemId={page.product.id} itemTitle={page.title} pagePath={path} /></div>}
    {page.sections.map((section, index) => <section key={index} className="mt-10">
      {section.heading && <h2 className="mb-5 text-2xl font-bold">{section.heading}</h2>}
      {section.type === "text" && <div className="space-y-4 leading-7">{section.paragraphs.map((text, i) => <p key={i}>{text}</p>)}</div>}
      {section.type === "cards" && <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{section.cards.map((card) => <article key={card.id} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h3 className="text-xl font-bold">{card.title}</h3>
        {card.subtitle && <p className="mt-2 text-neutral-600">{card.subtitle}</p>}
        {card.price && <p className="mt-3 text-lg font-semibold text-rose-600">{card.price}</p>}
        <div className="mt-4 flex flex-wrap items-center gap-3">{page.status === "ready" && card.productId && getPage(card.productId)?.product?.id === card.productId &&
          <LeadDialog itemId={card.productId} itemTitle={card.title} pagePath={path} />}
          {card.href && routes.has(card.href) && <Link href={card.href} className="text-sm underline">Chi tiết</Link>}</div>
      </article>)}</div>}
      {section.type === "faq" && <div className="space-y-3">{section.items.map((item, i) => <details key={i} className="rounded-md border bg-white p-4"><summary className="cursor-pointer font-semibold">{item.question}</summary><p className="mt-2 text-neutral-600">{item.answer}</p></details>)}</div>}
      {section.type === "list" && (section.ordered ? <ol className="list-decimal space-y-2 pl-6">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ol> : <ul className="list-disc space-y-2 pl-6">{section.items.map((item, i) => <li key={i}>{item}</li>)}</ul>)}
      {section.type === "table" && <div className="overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr>{section.table.headings.map((heading, i) => <th className="border px-3 py-2" key={i}>{heading}</th>)}</tr></thead><tbody>{section.table.rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td className="border px-3 py-2" key={j}>{cell}</td>)}</tr>)}</tbody></table></div>}
      {section.type === "media" && <figure><Image alt={section.alt} src={section.src} loading="lazy" width={1200} height={675} sizes="(max-width: 768px) 100vw, 1100px" className="h-auto max-w-full rounded-xl" />{section.caption && <figcaption className="mt-2 text-sm text-neutral-600">{section.caption}</figcaption>}</figure>}
    </section>)}
  </main>;
}
