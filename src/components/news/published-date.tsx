import { sourcePublishedDate } from "@/features/news/source-published-date";

export function PublishedDate({ label }: { label: string }) {
  const date = sourcePublishedDate(label);
  return date ? <time dateTime={date}>{label}</time> : <span>{label}</span>;
}
