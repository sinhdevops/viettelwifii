"use client";
/* eslint-disable @next/next/no-img-element -- byte-identical captured source banner */

import { Button as AppButton } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import {
  useId,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type FormEvent,
} from "react";
import { toast } from "sonner";
import { leadSchema } from "@/lib/lead-schema";
import { CollectionSelect } from "./collection-select";
import {
  getSignupWards,
  readSignupSelection,
  signupCities,
  type SignupSelection,
} from "./collection-signup-data";

export type CollectionSignupDialogProps =
  ButtonHTMLAttributes<HTMLButtonElement> & {
    dialogLabel: string;
    pagePath: string;
  };

const input =
  "flex h-[42px] w-full rounded-xl border border-[#E9E9E9] bg-[#F4F4F4] px-3 py-2 text-16 ring-offset-white focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-600 focus-visible:ring-offset-2 md:h-[52px] md:text-16 placeholder:text-[#737373]";
const action =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 px-4 py-2";
const outline =
  "border border-primary text-primary bg-white hover:bg-red-50 hover:text-primary-dark";
const formButton =
  "h-[38px] w-[125px] rounded-full sm:!ml-0 md:h-[48px] md:w-[127px] md:text-16";
const description =
  "Nhập thông tin cụ thể của quý khách để chúng tôi có thể hỗ trợ tốt nhất";
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim();
const cityOptions = signupCities.map((city) => ({ value: city, label: city }));

export function CollectionSignupDialog({
  dialogLabel,
  pagePath,
  children,
  onClick,
  ...props
}: CollectionSignupDialogProps) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<SignupSelection>({});
  const [submitting, setSubmitting] = useState(false);
  const pendingRef = useRef(false);
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [city, setCity] = useState("");
  const [ward, setWard] = useState("");
  const [privacyAvailability, setPrivacyAvailability] = useState<
    "checking" | "available" | "unavailable"
  >("checking");
  const [privacyPolicyVersion, setPrivacyPolicyVersion] = useState("");
  const [checkingConfig, setCheckingConfig] = useState(false);
  const wards = getSignupWards(city);
  const id = useId();
  const nine = pagePath === "/goi-cuoc-nine";
  const sms = pagePath === "/goi-cuoc-gic";
  const internetPage = pagePath === "/internet";
  const supported = sms || nine || internetPage;

  async function openInternetSignup() {
    setCheckingConfig(true);
    try {
      const response = await fetch("/api/leads/config", {
        cache: "no-store",
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok)
        throw new Error("Lead capture availability unavailable");
      const config = (await response.json()) as {
        available?: unknown;
        policyVersion?: unknown;
      };
      const version = config.policyVersion;
      const available =
        config.available === true &&
        typeof version === "string" &&
        /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(version) &&
        version.toLowerCase() !== "unapproved";
      if (!available || typeof version !== "string") {
        setPrivacyAvailability("unavailable");
      } else {
        setPrivacyPolicyVersion(version);
        setPrivacyAvailability("available");
      }
    } catch {
      setPrivacyAvailability("unavailable");
    } finally {
      setCheckingConfig(false);
      setOpen(true);
    }
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pendingRef.current) return;
    if (pagePath !== "/internet") {
      toast.error("Gói này chưa hỗ trợ đăng ký qua biểu mẫu.");
      return;
    }
    if (privacyAvailability !== "available") {
      toast.error(
        "Chưa thể gửi đăng ký trực tuyến. Vui lòng gọi để được tư vấn.",
      );
      return;
    }
    const form = new FormData(event.currentTarget);
    const code = selection.code?.trim();
    const selectedWard = wards.find((entry) => entry.ward_code === ward)?.name;
    const address = String(form.get("address") ?? "").trim();
    if (!code || !city || !selectedWard || !address) {
      toast.error("Vui lòng chọn gói cước và nhập đầy đủ địa chỉ lắp đặt.");
      return;
    }
    const url = new URL(window.location.href);
    const attribution = Object.fromEntries(
      [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "gclid",
      ]
        .map((key) => [key, url.searchParams.get(key)?.slice(0, 200)] as const)
        .filter((entry): entry is readonly [string, string] =>
          Boolean(entry[1]),
        ),
    );
    const parsed = leadSchema.safeParse({
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      note: `Địa chỉ lắp đặt: ${address}, ${selectedWard}, ${city}. Khu vực: ${selection.region ?? "—"}. Giá hiển thị: ${selection.price ?? "—"}.`,
      itemId: `/internet/${code}`,
      itemTitle: code,
      pagePath,
      attribution,
      privacyPolicyVersion,
      company: String(form.get("company") ?? ""),
      turnstileToken,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Thông tin chưa hợp lệ.");
      return;
    }
    pendingRef.current = true;
    setSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
        signal: AbortSignal.timeout(15000),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        notificationSent?: boolean;
      } | null;
      if (!response.ok || result?.ok !== true) {
        if (result?.error === "lead_storage_unconfigured") {
          toast.error(
            "Chưa cấu hình nơi nhận đăng ký. Vui lòng gọi hotline để được hỗ trợ; thông tin chưa được gửi.",
          );
          return;
        }
        if (
          result?.error === "lead_intake_unavailable" ||
          response.status === 503
        ) {
          setPrivacyAvailability("unavailable");
          setPrivacyPolicyVersion("");
          toast.error(
            "Biểu mẫu tạm thời chưa khả dụng. Vui lòng quay lại sau.",
          );
          return;
        }
        if (result?.error === "privacy_policy_version_mismatch") {
          setPrivacyAvailability("unavailable");
          setPrivacyPolicyVersion("");
          toast.error(
            "Chính sách bảo mật vừa thay đổi. Biểu mẫu tạm thời chưa khả dụng; vui lòng mở lại để xem bản hiện hành.",
          );
          return;
        }
        const message =
          result?.error === "invalid_item"
            ? "Gói cước chưa được liên kết đúng. Vui lòng chọn lại gói."
            : result?.error === "captcha_failed"
              ? "Xác minh đã hết hạn. Vui lòng xác minh lại."
              : "Chưa gửi được đăng ký. Vui lòng thử lại.";
        toast.error(message);
        return;
      }
      setOpen(false);
      setPrivacyAvailability("checking");
      setPrivacyPolicyVersion("");
      if (result?.notificationSent === true) {
        toast.success("Đã gửi đăng ký thành công. Chúng tôi sẽ liên hệ sớm!");
      } else {
        toast.warning(
          "Đã nhận đăng ký nhưng chưa gửi được thông báo. Vui lòng liên hệ hỗ trợ để xác nhận.",
        );
      }
    } catch {
      toast.error(
        "Chưa nhận được xác nhận từ máy chủ. Vui lòng kiểm tra trước khi gửi lại.",
      );
    } finally {
      setTurnstileToken("");
      turnstileRef.current?.reset();
      pendingRef.current = false;
      setSubmitting(false);
    }
  }
  if (!supported)
    return (
      <AppButton
        variant="unstyled"
        size="unstyled"
        {...props}
        type={props.type ?? "button"}
        onClick={onClick}
      >
        {children}
      </AppButton>
    );

  return (
    <Sheet
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          setPrivacyAvailability("checking");
          setPrivacyPolicyVersion("");
          setTurnstileToken("");
        }
      }}
    >
      <SheetTrigger asChild>
        <AppButton
          variant="unstyled"
          size="unstyled"
          {...props}
          type={props.type ?? "button"}
          aria-label={props["aria-label"] ?? dialogLabel}
          aria-busy={checkingConfig}
          disabled={props.disabled || checkingConfig}
          onClick={(event) => {
            onClick?.(event);
            if (event.defaultPrevented) return;
            setSelection(readSignupSelection(event.currentTarget, pagePath));
            setCity("");
            setWard("");
            setPrivacyAvailability("checking");
            setPrivacyPolicyVersion("");
            setTurnstileToken("");
            if (internetPage) {
              event.preventDefault();
              void openInternetSignup();
            }
          }}
        >
          {children}
        </AppButton>
      </SheetTrigger>
      <SheetPortal>
        <SheetOverlay />
        <SheetContent
          mobileSide={pagePath === "/internet" ? "bottom" : "center"}
          onEscapeKeyDown={(event) => {
            if (
              document.querySelector(
                "[data-collection-select-popover]:popover-open",
              )
            )
              event.preventDefault();
          }}
          aria-describedby={`${id}-description`}
          data-collection-signup={pagePath}
          data-source-product={selection.code}
          data-source-region={selection.region}
          data-source-price={selection.price}
          style={!sms && !nine ? { maxWidth: 480 } : undefined}
          className={
            sms
              ? "gap-8 border-none bg-white p-6 sm:max-w-[425px]"
              : nine
                ? "gap-0 !rounded-2xl border-none bg-transparent p-0 sm:max-w-[400px]"
                : "gap-4 bg-white px-[18px] py-6 sm:!rounded-2xl"
          }
        >
          <div
            className={`flex flex-col space-y-1.5 text-center sm:text-left ${nine ? "bg-primary items-center rounded-[18px] border-x-[6px] border-white py-4" : ""}`}
          >
            <SheetTitle
              className={`text-center text-lg leading-none font-semibold tracking-tight ${nine ? "font-magistral md:text-24 pb-2 text-white md:pb-4" : `font-sarabun text-text-dark md:text-24 ${sms ? "" : "pb-2 md:pb-4"}`}`}
            >
              {sms || nine ? "Thông báo" : "Thông tin đặt mua"}
            </SheetTitle>
            <SheetDescription
              id={`${id}-description`}
              className="md:text-16 !mt-2 text-sm text-black"
              hidden={nine}
            >
              {sms ? (
                selection.code ? (
                  <>
                    Để đăng ký gói cước, vui lòng soạn tin nhắn trên điện thoại
                    theo cú pháp{" "}
                    <span className="text-primary font-bold">
                      {selection.code} UP
                    </span>{" "}
                    gửi <span className="text-primary font-bold">290</span>.
                  </>
                ) : (
                  "Chưa xác định được gói từ nút đăng ký. Vui lòng đóng và chọn lại gói cước."
                )
              ) : (
                description
              )}
            </SheetDescription>
            {nine && (
              <img
                alt="banner-nine"
                width="438"
                height="169"
                className="w-[250px] md:w-[300px]"
                src="/assets/viettelup/4eab87965bb969cd46e1953f.webp"
                srcSet="/assets/viettelup/6efa1b0ae73d1a3756c07223.webp 1x, /assets/viettelup/4eab87965bb969cd46e1953f.webp 2x"
              />
            )}
          </div>
          {sms ? (
            <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-center sm:space-x-2">
              <SheetClose asChild>
                <AppButton
                  variant="unstyled"
                  size="unstyled"
                  type="button"
                  className={`${action} ${outline} md:text-16 h-[34px] w-[124px] rounded-full md:w-[130px]`}
                >
                  Đóng
                </AppButton>
              </SheetClose>
              {/* Original mobile SMS link stays on its source card; do not initiate it here. */}
            </div>
          ) : !internetPage ? (
            <div className="flex flex-col gap-4 text-center text-sm text-neutral-700">
              <p role="status">Gói này chưa hỗ trợ đăng ký qua biểu mẫu.</p>
              <SheetClose asChild>
                <AppButton
                  variant="unstyled"
                  size="unstyled"
                  type="button"
                  className={`${action} ${outline} md:text-16 h-[34px] w-[124px] rounded-full md:w-[130px]`}
                >
                  Đóng
                </AppButton>
              </SheetClose>
            </div>
          ) : privacyAvailability !== "available" ? (
            <p
              className="pt-3 text-center text-sm text-neutral-600"
              role="status"
            >
              {privacyAvailability === "checking"
                ? "Đang kiểm tra khả năng gửi đăng ký…"
                : "Biểu mẫu tạm thời chưa khả dụng. Vui lòng quay lại sau."}
            </p>
          ) : (
            <form
              onSubmit={(event) => {
                void submit(event);
              }}
            >
              <div className="flex flex-col gap-4 text-black">
                <div className="space-y-2">
                  <input
                    className={input}
                    placeholder="Nhập họ tên"
                    aria-label="Nhập họ tên"
                    name="name"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      className={input}
                      placeholder="Nhập số điện thoại"
                      aria-label="Nhập số điện thoại"
                      aria-required="true"
                      name="phone"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                    />
                    <span
                      className="text-14 text-primary absolute top-[12px] left-[151px]"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <CollectionSelect
                    label="Chọn tỉnh/thành phố"
                    placeholder="Chọn tỉnh/thành phố *"
                    value={city}
                    options={cityOptions}
                    onChange={(value) => {
                      setCity(value);
                      setWard("");
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <CollectionSelect
                    label="Chọn phường/xã"
                    placeholder="Chọn phường/xã *"
                    disabled={!wards.length}
                    value={ward}
                    options={wards.map((entry) => ({
                      value: entry.ward_code,
                      label: entry.name,
                    }))}
                    onChange={setWard}
                  />
                </div>
                <div className="space-y-2">
                  <input
                    className={input}
                    placeholder="Nhập địa chỉ"
                    aria-label="Nhập địa chỉ"
                    name="address"
                    autoComplete="street-address"
                    required
                  />
                </div>
              </div>
              {internetPage && siteKey && (
                <Turnstile
                  ref={turnstileRef}
                  siteKey={siteKey}
                  onSuccess={setTurnstileToken}
                  onExpire={() => setTurnstileToken("")}
                  onError={() => setTurnstileToken("")}
                />
              )}
              <input
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: 1,
                  height: 1,
                  opacity: 0,
                  pointerEvents: "none",
                }}
              />
              <div className="flex justify-center gap-4 pt-5">
                <SheetClose asChild>
                  <AppButton
                    variant="unstyled"
                    size="unstyled"
                    type="button"
                    className={`${action} ${outline} ${formButton}`}
                  >
                    ĐÓNG
                  </AppButton>
                </SheetClose>
                <AppButton
                  variant="unstyled"
                  size="unstyled"
                  className={`${action} bg-primary hover:bg-primary-dark text-gray-50 disabled:cursor-not-allowed disabled:opacity-50 ${formButton}`}
                  type="submit"
                  disabled={submitting || Boolean(siteKey && !turnstileToken)}
                >
                  {submitting ? "ĐANG GỬI…" : "XÁC NHẬN"}
                </AppButton>
              </div>
            </form>
          )}
          <SheetClose asChild>
            <AppButton
              variant="unstyled"
              size="unstyled"
              type="button"
              aria-label="Đóng"
              className="btn-close absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-5 w-5"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </AppButton>
          </SheetClose>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
}
