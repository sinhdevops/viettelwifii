import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";
import { PageJsonLd } from "@/components/site-pages/page-json-ld";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata(): Metadata {
  return metadataForPage("/");
}

export default function Home() {
  const page = requirePage("/", "home");
  return (
    <>
      <PageJsonLd path="/" page={page} />
      <HomeContent page={page} path="/" />
    </>
  );
}
