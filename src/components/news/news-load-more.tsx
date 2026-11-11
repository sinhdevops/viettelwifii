import type { ReactNode } from "react";
import styles from "./news-load-more.module.css";

const batchSize = 6;

/** Native disclosure keeps every article link in server HTML, even without JS. */
export function NewsLoadMore({ items }: { items: readonly ReactNode[] }) {
  if (items.length === 0) return null;

  function renderBatch(offset: number): ReactNode {
    const end = Math.min(offset + batchSize, items.length);
    return (
      <details className={styles.disclosure}>
        <summary className={styles.summary}>
          Xem thêm {end - offset} bài viết
        </summary>
        <div className="flex w-full flex-col gap-4 md:flex-row md:flex-wrap md:gap-6">
          {items.slice(offset, end)}
          {end < items.length ? renderBatch(end) : null}
        </div>
      </details>
    );
  }

  return renderBatch(0);
}
