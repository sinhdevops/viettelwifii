import { LoadingSpinner } from "@/components/ui/loading-spinner";
import styles from "@/components/site/status-screen.module.css";

/** Route-level loading UI: centered brand spinner, layout-stable. */
export default function Loading() {
  return (
    <main className={styles.loadingPage}>
      <LoadingSpinner size="lg" label="Đang tải nội dung…" />
    </main>
  );
}
