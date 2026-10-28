"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  leadSchema,
  type LeadPayload,
  type ValidatedLead,
} from "@/lib/lead-schema";
import { trackEvent } from "@/lib/analytics";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function LeadDialog({
  itemId,
  itemTitle,
  pagePath,
  trigger,
}: {
  itemId: string;
  itemTitle: string;
  pagePath?: string;
  trigger?: ReactNode;
}) {
  const formId = useId();
  const [open, setOpen] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const pendingRef = useRef(false);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadPayload, unknown, ValidatedLead>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      note: "",
      itemId,
      itemTitle,
      pagePath: pagePath || "/",
      attribution: {},
      company: "",
      turnstileToken: "",
    },
  });

  async function submit(values: ValidatedLead) {
    if (pendingRef.current) return;
    pendingRef.current = true;
    setStatusMessage(null);
    const url = new URL(window.location.href);
    const sourcePath = pagePath || url.pathname;
    const attribution: Record<string, string> = {};
    for (const key of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
      "gclid",
    ]) {
      const value = url.searchParams.get(key);
      if (value) attribution[key] = value.slice(0, 200);
    }
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          itemId,
          itemTitle,
          pagePath: sourcePath,
          attribution,
          turnstileToken,
        }),
        signal: AbortSignal.timeout(15000),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (!response.ok || result?.ok !== true) {
        if (result?.error === "captcha_failed")
          throw new Error(
            "Mã xác minh đã hết hạn hoặc không hợp lệ. Vui lòng xác minh lại.",
          );
        if (response.status === 503)
          throw new Error(
            "Hệ thống tiếp nhận chưa được cấu hình. Vui lòng liên hệ qua số điện thoại.",
          );
        throw new Error(
          "Chưa xác nhận được đăng ký. Vui lòng kiểm tra và thử lại.",
        );
      }
      trackEvent("lead_submit_success", {
        item_id: itemId,
        page_path: sourcePath,
      });
      toast.success("Đã gửi đăng ký. Chúng tôi sẽ liên hệ sớm!");
      reset();
      setOpen(false);
      setTurnstileToken("");
    } catch (error) {
      const knownErrors = [
        "Mã xác minh đã hết hạn hoặc không hợp lệ. Vui lòng xác minh lại.",
        "Hệ thống tiếp nhận chưa được cấu hình. Vui lòng liên hệ qua số điện thoại.",
        "Chưa xác nhận được đăng ký. Vui lòng kiểm tra và thử lại.",
      ];
      const message =
        error instanceof Error && knownErrors.includes(error.message)
          ? error.message
          : "Chưa nhận được xác nhận từ máy chủ. Vui lòng kiểm tra trước khi gửi lại.";
      setStatusMessage(message);
      toast.error(message);
    } finally {
      // Turnstile tokens can be single-use after server validation, including failed delivery.
      setTurnstileToken("");
      turnstileRef.current?.reset();
      pendingRef.current = false;
    }
  }

  function onInvalid(errors: FieldErrors<LeadPayload>) {
    if (errors.itemId || errors.pagePath) {
      setStatusMessage(
        "Gói cước chưa được liên kết đúng. Vui lòng thử từ trang chi tiết hoặc liên hệ trực tiếp.",
      );
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (next) setStatusMessage(null);
      }}
    >
      <DialogTrigger asChild>
        {trigger ?? <Button>Đăng ký</Button>}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="pr-8 text-xl font-bold">
          Đăng ký tư vấn
        </DialogTitle>
        <DialogDescription className="mt-1 text-sm text-neutral-600">
          Gói quan tâm: {itemTitle}
        </DialogDescription>
        <form
          onSubmit={(event) => {
            void handleSubmit(submit, onInvalid)(event);
          }}
          className="mt-5 space-y-4"
        >
          <label className="block text-sm font-semibold">
            Họ và tên
            <input
              {...register("name")}
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? `${formId}-name-error` : undefined
              }
              className="mt-1 block min-h-11 w-full rounded-md border border-neutral-300 px-3"
            />
            {errors.name && (
              <span
                id={`${formId}-name-error`}
                className="text-xs text-red-600"
              >
                {errors.name.message}
              </span>
            )}
          </label>
          <label className="block text-sm font-semibold">
            Số điện thoại
            <input
              {...register("phone")}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={
                errors.phone ? `${formId}-phone-error` : undefined
              }
              className="mt-1 block min-h-11 w-full rounded-md border border-neutral-300 px-3"
            />
            {errors.phone && (
              <span
                id={`${formId}-phone-error`}
                className="text-xs text-red-600"
              >
                {errors.phone.message}
              </span>
            )}
          </label>
          <label className="block text-sm font-semibold">
            Ghi chú (không bắt buộc)
            <textarea
              {...register("note")}
              rows={3}
              aria-invalid={Boolean(errors.note)}
              aria-describedby={
                errors.note ? `${formId}-note-error` : undefined
              }
              className="mt-1 block w-full rounded-md border border-neutral-300 p-3"
            />
            {errors.note && (
              <span
                id={`${formId}-note-error`}
                className="text-xs text-red-600"
              >
                {errors.note.message}
              </span>
            )}
          </label>
          <input
            {...register("company")}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px]"
          />
          {siteKey && (
            <Turnstile
              ref={turnstileRef}
              siteKey={siteKey}
              onSuccess={(token) => {
                setTurnstileToken(token);
                setStatusMessage((message) =>
                  message?.startsWith("Mã xác minh") ||
                  message?.startsWith("Không tải được xác minh")
                    ? null
                    : message,
                );
              }}
              onExpire={() => {
                setTurnstileToken("");
                setStatusMessage(
                  "Mã xác minh đã hết hạn. Vui lòng xác minh lại.",
                );
              }}
              onError={() => {
                setTurnstileToken("");
                setStatusMessage("Không tải được xác minh. Vui lòng thử lại.");
              }}
            />
          )}
          <p className="text-xs text-neutral-500">
            Thông tin chỉ dùng để liên hệ tư vấn. Vui lòng bổ sung liên kết
            chính sách bảo mật của đơn vị trước khi xuất bản.
          </p>
          {statusMessage && (
            <p role="alert" className="text-sm text-red-700">
              {statusMessage}
            </p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting || Boolean(siteKey && !turnstileToken)}
            className="w-full"
          >
            {isSubmitting ? "Đang gửi…" : "Gửi đăng ký"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
