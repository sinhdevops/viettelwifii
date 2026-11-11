"use client";

import { useEffect } from "react";
import { House, RefreshCw, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";
import { StatusScreen } from "@/components/site/status-screen";

/** Server errors are redacted but keep a `digest` that matches the server log. */
function readDigest(error: unknown): string | undefined {
  if (typeof error !== "object" || error === null) return undefined;
  const digest = (error as { digest?: unknown }).digest;
  return typeof digest === "string" ? digest : undefined;
}

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  const digest = readDigest(error);

  useEffect(() => {
    if (error instanceof Error) console.error(digest ?? error.message);
  }, [digest, error]);

  return (
    <StatusScreen
      code="Lỗi tạm thời"
      title="Chưa thể tải trang này"
      description={
        <>
          Đã có lỗi xảy ra khi tải nội dung. Dữ liệu bạn nhập chưa bị gửi đi.
          Vui lòng thử lại; nếu lỗi tiếp diễn, hãy gọi hotline để được hỗ trợ.
        </>
      }
      digest={digest}
      icon={<TriangleAlert size={30} strokeWidth={2.2} />}
      primary={
        <Button type="button" onClick={retry}>
          <RefreshCw size={18} strokeWidth={2.4} aria-hidden="true" /> Thử lại
        </Button>
      }
      secondary={
        <ButtonLink href="/" variant="outline">
          <House size={18} strokeWidth={2.4} aria-hidden="true" /> Về trang chủ
        </ButtonLink>
      }
    />
  );
}
