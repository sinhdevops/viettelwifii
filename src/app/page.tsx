import type { Metadata } from "next";
import { HomeContent } from "@/components/home/home-content";
import { buildMetadata } from "@/lib/seo/metadata";
import { getRenderablePage } from "@/lib/server/page-repository";

export function generateMetadata(): Metadata {
  return buildMetadata("/", getRenderablePage("/"));
}

export default function Home() {
  const page = getRenderablePage("/");
  return <HomeContent page={page!} path="/" />;
}
