import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { getRenderablePage } from "@/lib/server/page-repository";

export function generateMetadata(): Metadata {
  return buildMetadata("/", getRenderablePage("/"));
}

export default function Home() {
  const page = getRenderablePage("/");
  if (page) return <HomeContent page={page} path="/" />;
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <h1 className="text-3xl font-bold">Next.js Core — bản chờ nhập liệu</h1>
      <p className="mt-4 leading-7 text-neutral-700">
        Dữ liệu trang chủ đang được xác minh. Dùng SITE_PREVIEW_DRAFTS=1 trong
        môi trường phát triển để xem bản nháp.
      </p>
    </main>
  );
}
