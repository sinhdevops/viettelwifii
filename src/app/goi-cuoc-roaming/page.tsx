import RoamingCollection from "@/components/roaming/roaming-collection";
import { PageJsonLd } from "@/components/site-pages/page-json-ld";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/goi-cuoc-roaming");
}
export default function Page() {
  const page = requirePage("/goi-cuoc-roaming", "collection");
  return (
    <>
      <PageJsonLd path="/goi-cuoc-roaming" page={page} />
      <RoamingCollection />
      <CollectionRuntime key="/goi-cuoc-roaming" />
    </>
  );
}
