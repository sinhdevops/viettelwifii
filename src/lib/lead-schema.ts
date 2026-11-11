import { z } from "zod";

const approvedPathShape = z
  .string()
  .max(300)
  .refine(
    (path) =>
      path === "/" ||
      /^\/[a-zA-Z0-9_.~%-]+(?:\/[a-zA-Z0-9_.~%-]+)*$/.test(path),
    "Đường dẫn không hợp lệ",
  );

export const leadSchema = z
  .object({
    name: z.string().trim().min(2, "Vui lòng nhập họ tên").max(80),
    phone: z
      .string()
      .trim()
      .regex(/^\+?\d[0-9 .()-]{7,18}\d$/, "Số điện thoại không hợp lệ")
      .refine((phone) => {
        const count = phone.replace(/\D/g, "").length;
        return count >= 9 && count <= 15;
      }, "Số điện thoại không hợp lệ"),
    note: z.string().trim().max(500).optional().default(""),
    // The approved full product route is the identity; the display code is not unique.
    itemId: approvedPathShape.refine(
      (path) => path !== "/",
      "Sản phẩm không hợp lệ",
    ),
    itemTitle: z.string().trim().min(1).max(150),
    pagePath: approvedPathShape,
    attribution: z.record(z.string(), z.string().max(200)).default({}),
    // Only the Internet collection omits the consent control; never infer acceptance.
    privacyConsent: z.boolean().default(false),
    privacyPolicyVersion: z
      .string()
      .trim()
      .min(1, "Phiên bản Chính sách bảo mật không hợp lệ")
      .max(64)
      .regex(
        /^[A-Za-z0-9][A-Za-z0-9._-]*$/,
        "Phiên bản Chính sách bảo mật không hợp lệ",
      ),
    company: z.string().max(100).default(""), // honeypot
  })
  .refine(
    (lead) => lead.pagePath === "/internet" || lead.privacyConsent === true,
    {
      message: "Vui lòng xác nhận đồng ý với Chính sách bảo mật",
      path: ["privacyConsent"],
    },
  );
export type LeadPayload = z.input<typeof leadSchema>;
export type ValidatedLead = z.output<typeof leadSchema>;
