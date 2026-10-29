import GicCollection from "@/components/gic/gic-collection";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/goi-cuoc-gic");
}
export default function Page() {
  requirePage("/goi-cuoc-gic", "collection");
  return (
    <>
      <GicCollection />
      <CollectionRuntime key="/goi-cuoc-gic" />
    </>
  );
}
