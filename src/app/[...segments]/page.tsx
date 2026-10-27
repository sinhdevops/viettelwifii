import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/site/page-renderer";
import { getApprovedRoutes, getIndexablePages, getRenderablePage } from "@/lib/site-data";

type Props = { params: Promise<{ segments: string[] }> };

// Every approved URL resolves its specific content before returning HTML.
// Next.js 16.4's instant-navigation validation otherwise flags params read
// outside Suspense even though this route intentionally renders the full page.
export const instant = false;

export function generateStaticParams() {
  const approved = getApprovedRoutes().filter((path) => path !== "/");
  // Validate the content file once for the batch, not once per approved URL.
  const ready = getIndexablePages().map(({ path }) => path).filter(path => path !== "/");
  // Next 16 Cache Components needs at least one sample to validate a dynamic
  // route. A sample does not make the page public: the component still calls
  // getRenderablePage() and returns notFound() for unapproved/unready pages.
  const samples = ready.length > 0 ? ready : approved.slice(0, 1);
  return samples.map((path) => ({ segments: path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = "/" + (await params).segments.join("/");
  const page = getRenderablePage(path);
  return page ? { title: page.title, description: page.description, alternates: { canonical: path }, ...(page.status === "draft" ? { robots: { index: false, follow: false } } : {}) } : { robots: { index: false, follow: false } };
}

export default async function ContentPage({ params }: Props) {
  const path = "/" + (await params).segments.join("/");
  const page = getRenderablePage(path);
  if (!page) notFound();
  return <PageRenderer page={page} path={path} />;
}
