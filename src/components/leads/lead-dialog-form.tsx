"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { toast } from "sonner";
import {
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  leadSchema,
  type LeadPayload,
  type ValidatedLead,
} from "@/lib/lead-schema";
import { trackEvent } from "@/lib/analytics";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();

export function LeadDialogForm({
  itemId,
  itemTitle,
  pagePath,
  onClose,
}: {
  itemId: string;
  itemTitle: string;
  pagePath?: string;
  onClose: () => void;
}) {
  const formId = useId();
  const [turnstileToken, setTurnstileToken] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [privacyAvailability, setPrivacyAvailability] = useState<
    "checking" | "available" | "unavailable"
  >("checking");
  const pendingRef = useRef(false);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
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
      privacyConsent: false,
      privacyPolicyVersion: "",
      company: "",
      turnstileToken: "",
    },
  });

  const privacyConsent = watch("privacyConsent");

  useEffect(() => {
    let active = true;
    void fetch("/api/leads/config", {
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    })
      .then(async (response) => {
        if (!response.ok)
          throw new Error("Lead privacy configuration unavailable");
        return (await response.json()) as {
          available?: unknown;
          policyVersion?: unknown;
        };
      })
      .then((config) => {
        const version = config.policyVersion;
        const valid =
          config.available === true &&
          typeof version === "string" &&
          /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(version) &&
          version.toLowerCase() !== "unapproved";
        if (!active) return;
        if (!valid || typeof version !== "string") {
          setPrivacyAvailability("unavailable");
          return;
        }
        setValue("privacyPolicyVersion", version);
        setPrivacyAvailability("available");
      })
      .catch(() => {
        if (active) setPrivacyAvailability("unavailable");
      });

    return () => {
      active = false;
    };
  }, [setValue]);

  useEffect(() => {
    if (!privacyConsent) {
      setTurnstileToken("");
      turnstileRef.current?.reset();
    }
  }, [privacyConsent]);

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
        if (
          result?.error === "lead_intake_unavailable" ||
          response.status === 503
        ) {
          setPrivacyAvailability("unavailable");
          throw new Error(
            "Biểu mẫu tạm thời chưa khả dụng. Vui lòng quay lại sau.",
          );
        }
        if (result?.error === "privacy_policy_version_mismatch") {
          setPrivacyAvailability("unavailable");
          throw new Error(
            "Chính sách bảo mật vừa thay đổi. Biểu mẫu tạm thời chưa khả dụng; vui lòng tải lại trang để xem bản hiện hành.",
          );
        }
        if (result?.error === "captcha_failed")
          throw new Error(
            "Mã xác minh đã hết hạn hoặc không hợp lệ. Vui lòng xác minh lại.",
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
      onClose();
      setTurnstileToken("");
    } catch (error) {
      const knownErrors = [
        "Biểu mẫu tạm thời chưa khả dụng. Vui lòng quay lại sau.",
        "Chính sách bảo mật vừa thay đổi. Biểu mẫu tạm thời chưa khả dụng; vui lòng tải lại trang để xem bản hiện hành.",
        "Mã xác minh đã hết hạn hoặc không hợp lệ. Vui lòng xác minh lại.",
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

  if (privacyAvailability !== "available") {
    return (
      <DialogContent>
        <DialogTitle className="pr-8 text-xl font-bold">
          {privacyAvailability === "checking"
            ? "Đang kiểm tra khả năng tiếp nhận"
            : "Biểu mẫu tạm thời chưa khả dụng"}
        </DialogTitle>
        <DialogDescription className="mt-2 text-sm text-neutral-600">
          {privacyAvailability === "checking"
            ? "Vui lòng chờ trong giây lát."
            : "Hiện chúng tôi chưa thể tiếp nhận thông tin đăng ký. Vui lòng quay lại sau."}
        </DialogDescription>
      </DialogContent>
    );
  }

  return (
    <DialogContent>
      <DialogTitle className="pr-8 text-xl font-bold">
        Đăng ký tư vấn
      </DialogTitle>
      <DialogDescription className="mt-1 text-sm text-neutral-600">
        Gói quan tâm: {itemTitle}
      </DialogDescription>
      <form
        noValidate
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
            aria-describedby={errors.name ? `${formId}-name-error` : undefined}
            className="mt-1 block min-h-11 w-full rounded-md border border-neutral-300 px-3"
          />
          {errors.name && (
            <span id={`${formId}-name-error`} className="text-xs text-red-600">
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
            <span id={`${formId}-phone-error`} className="text-xs text-red-600">
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
            aria-describedby={errors.note ? `${formId}-note-error` : undefined}
            className="mt-1 block w-full rounded-md border border-neutral-300 p-3"
          />
          {errors.note && (
            <span id={`${formId}-note-error`} className="text-xs text-red-600">
              {errors.note.message}
            </span>
          )}
        </label>
        <input type="hidden" {...register("privacyPolicyVersion")} />
        <input
          {...register("company")}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px]"
        />
        <label className="flex items-start gap-2 text-base leading-6 text-neutral-700">
          <input
            {...register("privacyConsent")}
            type="checkbox"
            required
            aria-invalid={Boolean(errors.privacyConsent)}
            aria-describedby={
              errors.privacyConsent ? `${formId}-privacy-error` : undefined
            }
            className="mt-0.5 size-4 shrink-0 accent-primary"
          />
          <span>
            Tôi đồng ý để thông tin đã cung cấp được xử lý theo{" "}
            <a
              href="/chinh-sach-bao-mat"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2"
            >
              Chính sách bảo mật
            </a>{" "}
            và được dùng để phản hồi yêu cầu tư vấn này.
          </span>
        </label>
        {errors.privacyConsent && (
          <p id={`${formId}-privacy-error`} className="text-xs text-red-600">
            {errors.privacyConsent.message}
          </p>
        )}
        {siteKey && privacyConsent && (
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
  );
}
