import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { PageJsonLd } from "./page-json-ld";
import { isPublicationEnabled } from "@/features/seo/page-seo";
import {
  isSiteRouteRenderable,
  siteRouteDefinitions,
} from "@/lib/site-routes";

type SiteInfoSection = {
  heading: string;
  content: ReactNode;
};

export function SiteInfoPage({
  path,
  title,
  intro,
  sections,
}: {
  path: string;
  title: string;
  intro: string;
  sections: SiteInfoSection[];
}) {
  const route = siteRouteDefinitions.find((entry) => entry.path === path);
  if (!route || !isSiteRouteRenderable(path)) notFound();
  const publicationEnabled = isPublicationEnabled();
  const routeReady = route?.status === "ready";
  return (
    <>
      {route && (
        <PageJsonLd
          path={path}
          page={{
            title: route.title,
            description: route.description,
            status: route.status,
          }}
        />
      )}
      <main className="mx-auto w-full max-w-[1080px] px-4 py-10 sm:px-6 md:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-base text-neutral-800">
          <Link className="underline underline-offset-4" href="/">
            Trang chủ
          </Link>
          <span aria-hidden="true" className="px-2">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>

        <article>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-neutral-950 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
            {intro}
          </p>

          {(!routeReady || !publicationEnabled) && (
            <aside
              role="status"
              className="mt-8 bg-neutral-100 px-4 py-4 text-base leading-7 text-neutral-900"
            >
              {routeReady
                ? "Website đang ở chế độ chưa công khai. Trang chưa được phê duyệt để lập chỉ mục hoặc chạy quảng cáo."
                : "Bản nháp: thông tin nội dung, pháp lý hoặc quyền sử dụng tài nguyên còn cần được xác minh. Trang chưa được phê duyệt để lập chỉ mục hoặc chạy quảng cáo."}
            </aside>
          )}

          <div className="mt-10 max-w-3xl space-y-9">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-semibold leading-7 text-neutral-950">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-base leading-7 text-neutral-700">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
    </>
  );
}
