import type { NewsCardKey } from "./card-records";
export interface NewsCardRecord {
  href: string;
  title: string;
  publishedLabel: string;
  image: string;
  imageAlt: string;
}
export interface NewsArticleRecord {
  route: string;
  title: string;
  publishedLabel: string;
  relatedCards: readonly NewsCardKey[];
}
export interface NewsListingRecord {
  title: string;
  titleAccent: string;
  bannerAlt: string;
  bannerImage: string;
  mobileHeading: string;
  desktopHeading: string;
  featuredHeading: string;
  featured: {
    title: string;
    publishedLabel: string;
    description: string;
    href: string;
    image: string;
    backgroundImage: string;
  };
  cards: readonly { key: NewsCardKey; desktopOnly: boolean }[];
}
