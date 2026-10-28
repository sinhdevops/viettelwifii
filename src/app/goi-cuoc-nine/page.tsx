import NineCollection from "@/features/collections/nine/nine-collection";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/goi-cuoc-nine");
}
export default function Page() {
  const page = requirePage("/goi-cuoc-nine", "collection");
  return (
    <>
      <h1 className="sr-only">{page.heading}</h1>
      <NineCollection />
      <CollectionRuntime key="/goi-cuoc-nine" />
    </>
  );
}
