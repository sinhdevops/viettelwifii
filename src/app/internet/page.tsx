import { PageJsonLd } from "@/components/site-pages/page-json-ld";
import InternetCollection from "@/features/collections/internet/internet-collection";
import { CollectionRuntime } from "@/features/collections/collection-runtime";
import { FloatingContact } from "@/components/site/floating-contact";
import { metadataForPage, requirePage } from "@/lib/page-routing";

export function generateMetadata() {
  return metadataForPage("/internet");
}
export default function Page() {
  const page = requirePage("/internet", "collection");
  return (
    <>
      <PageJsonLd path="/internet" page={page} />
      <InternetCollection />
      <CollectionRuntime key="/internet" />
      <FloatingContact />
    </>
  );
}
