import InternetCollection from "@/features/collections/internet/internet-collection";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/internet");
}
export default function Page() {
  requirePage("/internet", "collection");
  return (
    <>
      <InternetCollection />
      <CollectionRuntime key="/internet" />
    </>
  );
}
