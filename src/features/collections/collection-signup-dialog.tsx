"use client";
/* eslint-disable @next/next/no-img-element -- byte-identical captured source banner */

import { Button as AppButton } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import { useId, useState, type ButtonHTMLAttributes } from "react";
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

const shell =
  "fixed left-[50%] top-[50%] grid w-[calc(100%_-_32px)] max-w-lg translate-x-[-50%] translate-y-[-50%] border border-gray-200 shadow-lg duration-200 sm:rounded-lg";
const input =
  "flex h-[42px] w-full rounded-xl border border-[#E9E9E9] bg-[#F4F4F4] px-3 py-2 text-16 ring-offset-white focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-gray-600 focus-visible:ring-offset-2 md:h-[52px] md:text-16 placeholder:text-[#737373]";
const select =
  "flex h-[42px] w-full items-center justify-between rounded-md border border-[#E9E9E9] bg-[#F4F4F4] px-3 py-2 text-16 focus:outline-none focus:ring-[1.5px] focus:ring-gray-600 focus:ring-offset-2 md:h-[52px] md:text-16";
const action =
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 px-4 py-2";
const outline =
  "border border-primary text-primary bg-white hover:bg-red-50 hover:text-primary-dark";
const formButton =
  "h-[38px] w-[125px] rounded-full sm:!ml-0 md:h-[48px] md:w-[127px] md:text-16";
const description =
  "Nhập thông tin cụ thể của quý khách để chúng tôi có thể hỗ trợ tốt nhất";

/** Source dialog variants only. Lead wires this into CollectionDialogButton.
 * No form action, network request, storage, analytics or outbound SMS invocation. */
export function CollectionSignupDialog({
  dialogLabel,
  pagePath,
  children,
  onClick,
  ...props
}: CollectionSignupDialogProps) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<SignupSelection>({});
  const [response, setResponse] = useState("");
  const [city, setCity] = useState("");
  const [ward, setWard] = useState("");
  const wards = getSignupWards(city);
  const id = useId();
  const nine = pagePath === "/goi-cuoc-nine";
  const sms = pagePath === "/goi-cuoc-gic";
  const supported = sms || nine || pagePath === "/internet";
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
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <AppButton
          variant="unstyled"
          size="unstyled"
          {...props}
          type={props.type ?? "button"}
          aria-label={props["aria-label"] ?? dialogLabel}
          onClick={(event) => {
            onClick?.(event);
            if (event.defaultPrevented) return;
            setSelection(readSignupSelection(event.currentTarget, pagePath));
            setResponse("");
            setCity("");
            setWard("");
          }}
        >
          {children}
        </AppButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-black/80"
          style={{ zIndex: 150 }}
        />
        <Dialog.Content
          style={{
            zIndex: 151,
            maxHeight: "calc(100dvh - 32px)",
            overflowY: "auto",
          }}
          aria-describedby={`${id}-description`}
          data-collection-signup={pagePath}
          data-source-product={selection.code}
          data-source-region={selection.region}
          data-source-price={selection.price}
          className={`${shell} ${sms ? "gap-8 border-none bg-white p-6 sm:max-w-[425px]" : nine ? "gap-0 !rounded-2xl border-none bg-transparent p-0 sm:max-w-[400px]" : "gap-4 !rounded-2xl border-none bg-white px-[18px] py-6 sm:max-w-[410px]"}`}
        >
          <div
            className={`flex flex-col space-y-1.5 text-center sm:text-left ${nine ? "bg-primary items-center rounded-[18px] border-x-[6px] border-white py-4" : ""}`}
          >
            <Dialog.Title
              className={`text-center text-lg leading-none font-semibold tracking-tight ${nine ? "font-magistral md:text-24 pb-2 text-white md:pb-4" : `font-sarabun text-text-dark md:text-24 ${sms ? "" : "pb-2 md:pb-4"}`}`}
            >
              {sms ? "Thông báo" : nine ? "ĐĂNG KÝ GÓI" : "Thông tin đặt mua"}
            </Dialog.Title>
            <Dialog.Description
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
            </Dialog.Description>
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
              <Dialog.Close asChild>
                <AppButton
                  variant="unstyled"
                  size="unstyled"
                  type="button"
                  className={`${action} ${outline} md:text-16 h-[34px] w-[124px] rounded-full md:w-[130px]`}
                >
                  Đóng
                </AppButton>
              </Dialog.Close>
              {/* Original mobile SMS link stays on its source card; do not initiate it here. */}
            </div>
          ) : (
            <form
              className={
                nine
                  ? "rounded-[18px] border-x-[6px] border-gray-300 bg-white p-4"
                  : undefined
              }
              onSubmit={(event) => {
                event.preventDefault();
                setResponse(
                  "Bản xem trước: thông tin chưa được gửi. Chức năng đăng ký trực tuyến đang tắt.",
                );
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
                    />
                    <span
                      className="text-14 text-primary absolute top-[12px] left-[151px]"
                      aria-hidden="true"
                    >
                      *
                    </span>
                  </div>
                </div>
                {nine ? (
                  <>
                    <div id={`${id}-subscriber`}>
                      Bạn đang sử dụng loại thuê bao nào?
                    </div>
                    <div
                      role="radiogroup"
                      aria-labelledby={`${id}-subscriber`}
                      className="grid gap-1.5"
                    >
                      {["Trả trước", "Trả sau"].map((value, index) => (
                        <div
                          key={value}
                          className="flex items-center space-x-1 py-1"
                        >
                          <input
                            id={`${id}-${index}`}
                            className="h-3 w-3 accent-[#EE0033] md:h-4 md:w-4"
                            type="radio"
                            name="subscriber"
                            value={value}
                            defaultChecked={index === 0}
                          />
                          <label
                            className="!text-12 md:!text-14 text-sm leading-none font-semibold"
                            htmlFor={`${id}-${index}`}
                          >
                            {value.toLocaleUpperCase("vi")}
                          </label>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="space-y-2">
                      <select
                        className={`${select} ${city ? "text-black" : "text-[#737373]"}`}
                        aria-label="Chọn tỉnh/thành phố"
                        aria-required="true"
                        name="city"
                        value={city}
                        onChange={(event) => {
                          setCity(event.target.value);
                          setWard("");
                          setResponse("");
                        }}
                      >
                        <option value="">Chọn tỉnh/thành phố *</option>
                        {signupCities.map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <select
                        className={`${select} ${ward ? "text-black" : "text-[#737373]"}`}
                        aria-label="Chọn phường/xã"
                        aria-required="true"
                        name="ward"
                        disabled={!wards.length}
                        value={ward}
                        onChange={(event) => setWard(event.target.value)}
                      >
                        <option value="">Chọn phường/xã *</option>
                        {wards.map((value) => (
                          <option key={value.ward_code} value={value.ward_code}>
                            {value.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <input
                        className={input}
                        placeholder="Nhập địa chỉ"
                        aria-label="Nhập địa chỉ"
                        name="address"
                        autoComplete="street-address"
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="flex justify-center gap-4 pt-5">
                <Dialog.Close asChild>
                  <AppButton
                    variant="unstyled"
                    size="unstyled"
                    type="button"
                    className={`${action} ${outline} ${formButton}`}
                  >
                    ĐÓNG
                  </AppButton>
                </Dialog.Close>
                <AppButton
                  variant="unstyled"
                  size="unstyled"
                  className={`${action} bg-primary hover:bg-primary-dark text-gray-50 ${formButton}`}
                  type="submit"
                >
                  XÁC NHẬN
                </AppButton>
              </div>
              {response && (
                <p role="status" className="mt-3 text-sm text-black">
                  {response}
                </p>
              )}
            </form>
          )}
          <Dialog.Close asChild>
            <AppButton
              variant="unstyled"
              size="unstyled"
              type="button"
              aria-label="Đóng"
              className="btn-close absolute top-4 right-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x h-4 w-4"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </AppButton>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
