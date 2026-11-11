/** Preserve the archived label while only exposing verified calendar dates as ISO. */
export function sourcePublishedDate(label: string): string | null {
  const parts = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(label);
  if (!parts) return null;

  const day = Number(parts[1]);
  const month = Number(parts[2]);
  const year = Number(parts[3]);
  if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return `${parts[3]}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}
