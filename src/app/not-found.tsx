import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page} aria-labelledby="not-found-title">
      <Image
        unoptimized
        src="/assets/viettelup/not-found.png"
        width={300}
        height={300}
        alt="404 — Liên kết không tồn tại"
        className={styles.illustration}
        priority
      />
      <h1 id="not-found-title" className={styles.title}>
        Liên kết không tồn tại
      </h1>
      <p className={styles.description}>
        Rất tiếc, liên kết bạn tìm không tồn tại
      </p>
      <ButtonLink
        href="/"
        variant="primary"
        size="unstyled"
        className={styles.home}
      >
        Trang chủ
      </ButtonLink>
    </main>
  );
}
