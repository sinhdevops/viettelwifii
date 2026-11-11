"use client";

import Link from "next/link";
import { useMemo, useState, type ReactNode } from "react";
import { ArrowUpRight, Layers, Search, ShoppingBag, X } from "lucide-react";
import styles from "./package-hub.module.css";

export type PackageHubEntry = {
  readonly path: string;
  readonly title: string;
};

type PackageHubProps = {
  packages: readonly PackageHubEntry[];
};

function codeOf(path: string): string {
  return path.split("/").at(-1) ?? path;
}

/** Package directory: instant search over all approved packages. */
export function PackageHub({ packages }: PackageHubProps) {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const matches = needle
      ? packages.filter(
          (entry) =>
            entry.title.toLowerCase().includes(needle) ||
            codeOf(entry.path).toLowerCase().includes(needle),
        )
      : packages;
    return {
      matches: matches.length,
      regular: matches.filter((entry) => !entry.path.includes("/tra-sau/")),
      postpaid: matches.filter((entry) => entry.path.includes("/tra-sau/")),
    };
  }, [packages, query]);

  return (
    <div className={styles.hub}>
      <div className={styles.search}>
        <Search className={styles.searchIcon} size={18} aria-hidden="true" />
        <input
          className={styles.searchInput}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm theo tên gói hoặc mã gói, ví dụ 5G20…"
          aria-label="Tìm gói cước"
          autoComplete="off"
        />
        {query && (
          <button
            className={styles.searchClear}
            type="button"
            onClick={() => setQuery("")}
            aria-label="Xóa tìm kiếm"
          >
            <X size={16} aria-hidden="true" />
          </button>
        )}
      </div>
      <p className={styles.searchMeta} role="status">
        {query
          ? `${groups.matches} gói khớp “${query.trim()}”`
          : `${packages.length} gói cước đang hiển thị`}
      </p>

      {groups.matches === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>Không tìm thấy gói cước phù hợp</p>
          <p className={styles.emptyText}>
            Thử mã gói ngắn hơn (ví dụ 5G, MXH, TV) hoặc xóa từ khóa để xem toàn
            bộ danh mục.
          </p>
          <button
            className={styles.emptyAction}
            type="button"
            onClick={() => setQuery("")}
          >
            Xóa từ khóa
          </button>
        </div>
      ) : (
        <>
          {groups.regular.length > 0 && (
            <PackageGroup
              icon={<ShoppingBag size={18} aria-hidden="true" />}
              title="Gói cước di động"
              description="Gói trả trước và gói data dùng theo tháng."
              entries={groups.regular}
              variant="primary"
            />
          )}
          {groups.postpaid.length > 0 && (
            <PackageGroup
              icon={<Layers size={18} aria-hidden="true" />}
              title="Gói cước trả sau"
              description="Gói trả sau có mã trùng với gói thường, phân biệt bằng đường dẫn."
              entries={groups.postpaid}
              variant="secondary"
            />
          )}
        </>
      )}
    </div>
  );
}

function PackageGroup({
  icon,
  title,
  description,
  entries,
  variant,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  entries: readonly PackageHubEntry[];
  variant: "primary" | "secondary";
}) {
  return (
    <section className={styles.group}>
      <header className={styles.groupHead}>
        <span
          className={`${styles.groupIcon} ${variant === "secondary" ? styles.groupIconAlt : ""}`}
        >
          {icon}
        </span>
        <div className={styles.groupText}>
          <h3 className={styles.groupTitle}>
            {title}
            <span className={styles.count}>{entries.length} gói</span>
          </h3>
          <p className={styles.groupDescription}>{description}</p>
        </div>
      </header>
      <ul className={styles.grid}>
        {entries.map((entry) => (
          <li key={entry.path}>
            <Link className={styles.card} href={entry.path}>
              <span className={styles.cardBody}>
                <span className={styles.cardTitle}>{entry.title}</span>
                <span className={styles.cardCode}>{codeOf(entry.path)}</span>
              </span>
              <ArrowUpRight
                className={styles.cardArrow}
                size={16}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
