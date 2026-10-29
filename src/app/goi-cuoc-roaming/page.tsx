import RoamingCollection from "@/components/roaming/roaming-collection";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/goi-cuoc-roaming");
}
export default function Page() {
  requirePage("/goi-cuoc-roaming", "collection");
  return (
    <>
      <RoamingCollection />
      <CollectionRuntime key="/goi-cuoc-roaming" />
    </>
  );
}
