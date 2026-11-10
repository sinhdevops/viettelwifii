import NineCollection from "@/components/nine/nine-collection";
import { PageJsonLd } from "@/components/site-pages/page-json-ld";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/goi-cuoc-nine");
}
export default function Page() {
  const page = requirePage("/goi-cuoc-nine", "collection");
  return (
    <>
      <PageJsonLd path="/goi-cuoc-nine" page={page} />
      <h1 className="sr-only">{page.heading}</h1>
      <NineCollection />
      <CollectionRuntime key="/goi-cuoc-nine" />
    </>
  );
}
