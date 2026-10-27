import type { Metadata } from "next";
import { PageRenderer } from "@/components/site/page-renderer";
import { getRenderablePage } from "@/lib/site-data";

export function generateMetadata(): Metadata {
  const page = getRenderablePage("/");
  return page ? { title: page.title, description: page.description, alternates: { canonical: "/" }, ...(page.status === "draft" ? { robots: { index: false, follow: false } } : {}) } : { robots: { index: false, follow: false } };
}

export default function Home() {
  const page = getRenderablePage("/");
  if (page) return <PageRenderer page={page} path="/" />;
  return <main className="mx-auto max-w-3xl px-5 py-16">
    <h1 className="text-3xl font-bold">Next.js Core — bản chờ nhập liệu</h1>
    <p className="mt-4 leading-7 text-neutral-700">Dữ liệu trang chủ đang được xác minh. Dùng SITE_PREVIEW_DRAFTS=1 trong môi trường phát triển để xem bản nháp.</p>
  </main>;
}
