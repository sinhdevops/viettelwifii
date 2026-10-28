import { NewsListing } from "../news-listing";
import { newsListing } from "../listing-records";
export default function NewsListingPage() {
  return <NewsListing record={newsListing} />;
}
