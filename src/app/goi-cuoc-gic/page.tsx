import GicCollection from "@/components/gic/gic-collection";
import { PageJsonLd } from "@/components/site-pages/page-json-ld";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/goi-cuoc-gic");
}
export default function Page() {
  const page = requirePage("/goi-cuoc-gic", "collection");
  return (
    <>
      <PageJsonLd path="/goi-cuoc-gic" page={page} />
      <GicCollection />
      <CollectionRuntime key="/goi-cuoc-gic" />
    </>
  );
}
