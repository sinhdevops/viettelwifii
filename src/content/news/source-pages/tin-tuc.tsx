import { NewsListing } from "@/components/news/news-listing";
import { newsListing } from "@/constants/news/listing-records";
export default function NewsListingPage() {
  return <NewsListing record={newsListing} />;
}
