"use client";

import { Button as AppButton } from "@/components/ui/button";
import { useState, type ReactNode } from "react";

const batchSize = 6;

export function NewsLoadMore({ items }: { items: readonly ReactNode[] }) {
  const [visibleCount, setVisibleCount] = useState(0);

  if (items.length === 0) return null;

  return (
    <>
      <div
        id="news-additional-cards"
        className="flex w-full basis-full flex-col gap-4 md:flex-row md:flex-wrap md:gap-6"
      >
        {items.slice(0, visibleCount)}
      </div>
      {visibleCount < items.length ? (
        <div className="flex basis-full justify-center pt-6">
          <AppButton
            variant="package"
            size="card"
            type="button"
            aria-controls="news-additional-cards"
            aria-expanded={visibleCount > 0}
            data-source-news-latest-more
            onClick={() =>
              setVisibleCount((current) =>
                Math.min(current + batchSize, items.length),
              )
            }
          >
            Xem thêm
          </AppButton>
        </div>
      ) : null}
    </>
  );
}
