"use client";
/* eslint-disable @next/next/no-img-element -- faithfully use the captured local ViettelUp icon */

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { sourceAsset } from "@/lib/viettelup-source-assets";
import styles from "./package-content.module.css";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ButtonLink } from "@/components/ui/button-link";

// The captured postpaid dialog image (/images/lien-he-internet.png) returns
// 404. This local icon and tel:18008098 CTA are verified against the captured
// asset registry and the 15 original postpaid page DOMs.
const contactImage = sourceAsset(
  "/_next/image?url=%2Fimages%2Fcontact-phone.png&w=128&q=75",
);
const viettelMoneyPackages = new Set([
  "KS110",
  "KS145",
  "KS165",
  "KS2H",
  "KS6H",
  "KS8",
  "KS12",
  "KS20",
  "KS36",
]);

export function PackageSourceDialogTrigger({
  children,
  className,
  itemPath,
  buttonVariant = "unstyled",
  buttonSize = "unstyled",
}: {
  children: ReactNode;
  className?: string;
  itemPath: string;
  buttonVariant?: ButtonProps["variant"];
  buttonSize?: ButtonProps["size"];
}) {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const code = itemPath.split("/").at(-1) ?? "";
  const kind = itemPath.includes("/tra-sau/")
    ? "contact"
    : viettelMoneyPackages.has(code)
      ? "money"
      : "sms";
  const smsBody = `${code} UP`;

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [open]);

  const close = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        size={buttonSize}
        ref={triggerRef}
        type="button"
        className={className}
        aria-haspopup="dialog"
        aria-expanded={open}
        data-state={open ? "open" : "closed"}
        onClick={() => setOpen(true)}
      >
        {children}
      </Button>
      {open &&
        createPortal(
          <dialog
            ref={dialogRef}
            aria-labelledby={titleId}
            data-variant={kind}
            className={styles.sourceDialog}
            onClose={close}
            onCancel={(event) => {
              event.preventDefault();
              close();
            }}
            onClick={(event) => {
              if (event.target === dialogRef.current) close();
            }}
          >
            <Button
              variant="unstyled"
              size="unstyled"
              className={styles.sourceDialogClose}
              type="button"
              aria-label="Đóng"
              onClick={close}
            />
            {kind === "contact" ? (
              <div className={styles.sourceDialogContact}>
                <img
                  src={contactImage}
                  width="128"
                  height="128"
                  alt=""
                  className={styles.sourceDialogIcon}
                />
                <h2 id={titleId} className={styles.sourceDialogTitle}>
                  Liên hệ gói {code} trả sau
                </h2>
                <p>
                  Liên hệ tổng đài Viettel <strong>1800 8098</strong> để được hỗ
                  trợ.
                </p>
                <ButtonLink
                  variant="unstyled"
                  size="unstyled"
                  href="tel:18008098"
                  className={styles.sourceDialogPrimary}
                >
                  Gọi 1800 8098
                </ButtonLink>
              </div>
            ) : (
              <div className={styles.sourceDialogMessage}>
                <h2 id={titleId} className={styles.sourceDialogTitle}>
                  Thông báo
                </h2>
                {kind === "money" ? (
                  <p>
                    Đăng ký gói <strong>{code}</strong> qua ứng dụng{" "}
                    <strong>Viettel Money</strong>. Xem hướng dẫn đăng ký trong
                    phần thông tin chi tiết của gói cước.
                  </p>
                ) : (
                  <p>
                    Để đăng ký gói cước, vui lòng soạn tin nhắn trên điện thoại
                    theo cú pháp <strong>{smsBody}</strong> gửi{" "}
                    <strong>290</strong>.
                  </p>
                )}
                <div className={styles.sourceDialogActions}>
                  {kind === "sms" && (
                    <ButtonLink
                      variant="unstyled"
                      size="unstyled"
                      href={`sms:290?body=${encodeURIComponent(smsBody)}`}
                      className={styles.sourceDialogPrimary}
                    >
                      Soạn tin nhắn
                    </ButtonLink>
                  )}
                  <Button
                    variant="unstyled"
                    size="unstyled"
                    type="button"
                    className={styles.sourceDialogSecondary}
                    onClick={close}
                  >
                    Đóng
                  </Button>
                </div>
              </div>
            )}
          </dialog>,
          document.body,
        )}
    </>
  );
}
