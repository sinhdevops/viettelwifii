import { cn } from "@/lib/utils";
import styles from "./loading-spinner.module.css";

/**
 * Shared CSS-only loading indicator, safe for Server Components.
 * The status label stays accessible when visually hidden.
 */
export function LoadingSpinner({
  label = "Đang tải nội dung…",
  size = "md",
  className,
  hideLabel = false,
}: {
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  hideLabel?: boolean;
}) {
  return (
    <div
      className={cn(styles.wrap, styles[size], className)}
      role="status"
      aria-live="polite"
    >
      <span className={styles.ring} aria-hidden="true">
        <svg className={styles.spinner} viewBox="0 0 48 48" fill="none">
          <circle
            cx="24"
            cy="24"
            r="20"
            stroke="currentColor"
            strokeWidth="4"
            opacity="0.15"
          />
          <path
            d="M44 24a20 20 0 0 0-20-20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={hideLabel ? styles.srOnly : styles.label}>{label}</span>
    </div>
  );
}
