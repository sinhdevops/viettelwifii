# Master plan refactor ViettelUp

Ngày khảo sát: 29/10/2026. Trạng thái: **kế hoạch để triển khai**, chưa thực hiện refactor.

## 1. Kết luận và mục tiêu

Nên refactor cuốn chiếu trên source hiện tại, theo hướng **App Router mỏng + component theo trang + dữ liệu có kiểu + server loader riêng + giữ hệ thống CSS hiện tại**. Giữ nguyên UI, nội dung, URL và hành vi. Không dựng lại starter, không clone lại web nguồn và không đưa mọi thứ vào một file constants khổng lồ.

Tôi hiểu các từ phiên âm “Lazy S”, “bay”, “filter” trong yêu cầu lần lượt là Next.js, page và features/folder theo ngữ cảnh. Kế hoạch dùng Next.js App Router đang có trong dự án, không giả định cần một framework khác.

Kết quả cần đạt:

- Mở `app/**/page.tsx` thấy ngay cách cấu hình SEO, lấy dữ liệu và ghép các section.
- Tìm component trong `src/components/<nhóm-trang>/`, dữ liệu trong `src/constants/<domain>/`, kiểu trong `src/types/`.
- Các gói cùng cấu trúc dùng chung template, khác nhau bằng record có kiểu; nội dung đặc thù vẫn được bảo toàn.
- Hạn chế JavaScript client, dữ liệu gửi xuống browser và effect thừa dựa trên đo đạc.
- Giữ nguyên CSS/CSS Modules hiện tại. Migration Tailwind để sau, ngoài phạm vi refactor core.
- Xóa code dư sau khi có bằng chứng không còn sử dụng; tách bằng chứng clone khỏi source chạy thật.

**Baseline phải là bản local hiện tại**, bao gồm thay đổi của người dùng và các rollback gần đây. Không lấy screenshot web nguồn cũ để vô tình phục hồi thiết kế đã bị người dùng bỏ.

## 2. Phạm vi khảo sát và hiện trạng có bằng chứng

Đã đọc yêu cầu đính kèm, hướng dẫn dự án/Lead, tài liệu kiến trúc và lịch sử Boardroom; kiểm kê toàn bộ file code trong `src`; rà các luồng routing, dữ liệu, UI, SEO, form và cấu hình. Khảo sát chuyên môn được chia read-only cho ba agent UI, nội dung và core/SEO. Inventory không đồng nghĩa mọi dòng đều được review thủ công hoặc mọi chức năng đã chạy thử.

File [REFACTOR_SOURCE_INVENTORY.csv](REFACTOR_SOURCE_INVENTORY.csv) ghi đường dẫn, số byte, số dòng, client directive và SHA-256 của **352 file code/style** trong `src`: 293 TSX, 42 TS, 14 CSS, 2 CJS, 1 MJS; tổng 11.019.236 byte. Có 21 file bắt đầu bằng `use client`. Các file được import từ những client entry này cũng có thể thuộc client graph; con số 21 không phải kích thước bundle.

Không tính dependency, output build, ảnh và JSON capture là code cần đọc từng dòng. Chúng được phân loại theo vai trò, tham chiếu và dung lượng. Những phát hiện dưới đây là audit tĩnh; lượt này chưa chạy browser, Lighthouse hoặc production build mới.

| Hiện trạng                                                      | Bằng chứng                                                                                                       | Hệ quả cho refactor                                                                                                               |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Phiên bản cài thực tế Next 16.4.3, React 19.3.1, Tailwind 4.3.3 | `node_modules/*/package.json`; range trong `package.json` khác patch cài thật                                    | Dùng tài liệu đi kèm Next, không áp mẫu Next cũ; không nâng dependency hàng loạt                                                  |
| 175 URL hiện hành                                               | `src/lib/approved-routes.ts`, `data/approved-routes.json`, README; `node scripts/verify-route-scope.mjs` đã PASS | Giữ 171 gốc + `/internet`, `/goi-cuoc-gic`, `/goi-cuoc-nine`, `/goi-cuoc-roaming`                                                 |
| Đã có App Router rõ từng nhóm                                   | `src/app/**/page.tsx`                                                                                            | Không cần chuyển từ Pages Router hay tạo lại 175 page file                                                                        |
| Packages đã được chuyển vào app                                 | `_components`, `_data`, `_content` dưới `app/goi-cuoc-viettel`                                                   | Đây là tổ chức hợp lệ của Next; chuyển ra components/constants để thống nhất theo yêu cầu mới, không gọi cách cũ là sai framework |
| Dữ liệu SEO/trạng thái và dữ liệu render ở nhiều nguồn          | `page-content-registry.ts`, `*/page-content.ts`, `package-data.ts`, news records                                 | Tách route index nhỏ và gom nguồn nội dung theo domain; tránh sửa giá/title nhiều nơi                                             |
| Registry server nạp và validate tất cả nhóm                     | `src/lib/page-content-registry.ts`                                                                               | Giảm phần dữ liệu mà metadata/header/API phải đụng; đo cold start trước khi kết luận lợi ích                                      |
| CSS đang chạy là bundle nguồn                                   | `app/layout.tsx` import `styles/viettelup-source.css`, brand, fonts; không import `app/globals.css`              | Giữ bundle CSS và import hiện tại trong đợt core                                                                                  |
| Có CSS/module, source utility và style thủ công cùng tồn tại    | `styles/viettelup-source.css` 85.310 byte; 14 CSS toàn src                                                       | Rủi ro cascade, specificity, font, breakpoint khi chuyển                                                                          |
| Có code/bằng chứng cũ dưới features                             | `src/features/news/evidence`, generator CJS, collection source pages                                             | Chuyển công cụ và bằng chứng ra khỏi runtime sau khi kiểm reference                                                               |
| Repo đang có nhiều thay đổi staged                              | `git status --short`                                                                                             | Không reset, không dùng HEAD làm bản chuẩn thay thế working tree                                                                  |
| Cả npm lock và pnpm lock tồn tại                                | `package-lock.json`, `pnpm-lock.yaml`; `packageManager=pnpm@11.25.0`                                             | Chuẩn hóa theo pnpm sau khi xác minh CI/deploy, không xóa lock trước khi kiểm                                                     |
| `.gitignore` bỏ qua docs/tests/scripts                          | `.gitignore`                                                                                                     | Chốt file nào cần version control để kế hoạch và regression tests không bị mất khi bàn giao                                       |

Tài liệu `docs/MASTER_PLAN.md` cũ còn nói thiếu manifest và giai đoạn starter. Tài liệu này là kế hoạch **refactor bản hiện tại**, thay thế chỉ dẫn thực thi cũ cho phạm vi này; tài liệu cũ giữ vai trò lịch sử cho tới đợt dọn docs.

### Phát hiện sâu cần xử lý trước rollout

| Vấn đề xác nhận qua source                                                                                    | Tác động và hành động                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 175 authored records đều đang `draft`                                                                         | Dev preview thấy đủ trang không có nghĩa production render/index đủ trang. Không tự đổi trạng thái; tách môi trường kiểm giao diện khỏi kiểm publishing guard |
| `tests/e2e/smoke.spec.ts` đọc `data/pages.json` lịch sử, chỉ171 records; identity checks skip khi không ready | Cập nhật fixture/runtime route source và mode runner ở R0. Không dùng suite hiện tại làm bằng chứng đủ175 trang                                               |
| SEO helper `features/seo/page-seo.ts` chỉ thấy consumer ở test, chưa ở route                                  | Route hiện dùng `lib/page-routing.ts`; hợp nhất policy và kiểm HTML output sau tích hợp                                                                       |
| Packages129 code files ~6,59MB; 116 Details có83 chuỗi cấu trúc thẻ khác nhau                                 | Không thể mặc định chỉ có1–2 template. Paragraph classes lặp hàng nghìn lần nhưng nội dung/inline/table khác nhau; phân cụm và escape hatch cần thiết         |
| `PageContent` hiện tại dùng paragraph text và table string[][]                                                | Chưa đủ diễn tả inline bold/link, CTA trong ô bảng, caption, span và style variant. Mở schema theo nhu cầu đã quan sát trước khi chuyển Details               |
| `collection-controls.tsx:16` suy hành động từ chữ “quốc gia”; signup data đọc code/giá/SMS từ DOM             | Thay bằng action union có kiểu và product ID truyền tường minh; kiểm chính xác action preview trước/sau                                                       |
| `collection-runtime.tsx:135–175` query main và sửa radio/giá trong DOM                                        | Chuyển state về component từng phần; tránh hai owner cùng điều khiển giá hoặc carousel                                                                        |
| `viettelup-source-assets.ts` import mapping117.428 bytes; Ultra client import helper đó                       | Resolve local asset ở server/generation hoặc constants gọn; đo emitted client chunks, không lấy117KB làm số transfer                                          |
| Shared collection controls kéo country dataset77.440 bytes và signup kéo wards JSON                           | Tách action/dialog và dataset theo nhu cầu; kiểm thời gian mở dialog và search trước/sau                                                                      |
| Camera hiện tại có timer/init navigation dù Boardroom ghi từng sửa bỏ                                         | Working tree là chuẩn. Giữ chỉnh sửa người dùng; kiểm lifecycle thực tế, không khôi phục bản lịch sử bằng suy đoán                                            |
| Button hiện tại dùng accent `#ee0033`; lịch sử từng ghi màu khác                                              | Token migration phải theo code/computed style hiện tại, không chép màu trong checkpoint cũ                                                                    |
| Internet detail còn `tel:18008132` riêng trong `internet-content.tsx`                                         | Ghi nhận khác với floating contact root. Refactor giữ hành vi; chuẩn hóa số điện thoại là thay đổi nghiệp vụ riêng, không âm thầm đổi                         |
| Analytics chỉ push vào dataLayer có sẵn; chưa thấy wiring GTM dù có dependency                                | Bảo toàn event contract, không tuyên bố analytics đang gửi thật hoặc tự bật provider                                                                          |
| Mock API13 ca nằm ở fixture/handoff lịch sử, không thuộc include suite chính                                  | Chuyển test contract hữu ích vào suite mặc định, vẫn mock dịch vụ ngoài                                                                                       |

Trong package Details, quét thấy class paragraph nhỏ6.463 lần, paragraph lớn3.911 lần, class ô bảng3.779 lần. Đây là tín hiệu tái sử dụng renderer/typography, không phải bằng chứng nội dung giữa các trang giống nhau. Một họ pilot có độ tương đồng tốt hơn là `5G230B/280B/330B/380B/480B`; sau đó kiểm thêm mẫu ngoại lệ ở mục4.

## 3. Quyết định kiến trúc

Next.js không bắt buộc một tên thư mục `features` hay `components`. Private folder `_components` trong app cũng hợp lệ. Chọn cấu trúc dưới đây để đáp ứng cách người dùng muốn đọc/sửa code, không trình bày nó như quy chuẩn duy nhất của Next. [Next.js project structure](https://nextjs.org/docs/app/getting-started/project-structure).

```text
src/
  app/
    layout.tsx                 # shell, font, global metadata, providers tối thiểu
    page.tsx                   # metadata + lấy dữ liệu + ghép section home
    globals.css                # giữ hiện trạng, không tự bật import ở root
    internet/page.tsx
    internet/[code]/page.tsx
    goi-cuoc-viettel/[code]/page.tsx
    goi-cuoc-viettel/tra-sau/[code]/page.tsx
    goi-cuoc-gic/page.tsx
    goi-cuoc-nine/page.tsx
    goi-cuoc-roaming/page.tsx
    tin-tuc/page.tsx
    tin-tuc/[slug]/page.tsx
    api/leads/route.ts
    robots.ts
    sitemap.ts
    not-found.tsx
  components/
    ui/                        # Button, Dialog, Radio, carousel primitives
    layout/                    # Header, Footer, navigation
    site/                      # floating contact và thành phần toàn site
    home/                      # Hero, PackageGroups, News, FAQ
    packages/                  # layout chi tiết, stats, benefits, CTA
    internet/                  # collection + detail, thư mục con rõ ràng
    gic/
    nine/
    roaming/
    news/                      # listing, article layout, related cards
    leads/                     # form + dialog shell
  constants/
    site/                      # menu, cấu hình hiển thị tĩnh
    home/
    packages/                  # prepaid/postpaid catalog, detail records
    internet/                  # catalog + vùng/giá
    gic/
    nine/
    roaming/
    news/                      # article index, card data
  content/
    news/                      # nội dung dài riêng từng bài
    packages/                  # chỉ ngoại lệ không biểu diễn được bằng template
  types/                       # types theo domain, import type
  schemas/                     # Zod schema thực sự cần runtime validation
  hooks/                       # hooks dùng chung có nhu cầu thật
  lib/
    routing/                   # path helpers, allowlist, lookup
    server/                    # content repositories, publishing guards
    seo/                       # metadata builder, JSON-LD, index policy
    leads/                     # server validation, delivery, anti-spam
    analytics/                 # client tracking adapter không PII
    assets/                    # mapping local asset gọn
    site-config.ts
    utils.ts
  styles/                      # font/token và CSS hiện tại
scripts/                       # công cụ dev/verify; legacy ở archive riêng
tests/                         # contract/unit/integration/e2e
reports/                       # bằng chứng QA, giữ tham chiếu
data/                          # scope snapshot, provenance, raw reference
```

Quy tắc phụ thuộc: `app → server loader + components`; `components → types + constants nhẹ + UI`; `server loader → catalog/schema`; server integration không được đi vào client graph. Tránh barrel `index.ts` gom toàn bộ catalog, article và components vào một export chung.

Không dồn types, hooks và function vào constants chỉ để ít thư mục. Constants chứa dữ liệu; types mô tả dữ liệu; hooks có state/effect; lib chứa hàm và adapter. Mỗi module có trách nhiệm rõ, tránh tách helper một dòng chỉ để thêm tầng.

## 4. Dữ liệu: giảm trùng mà không mất nội dung

### 4.1 Mô hình nguồn dữ liệu

Tách ba lớp:

1. **Route index nhẹ:** path đầy đủ, kind, status, SEO, product ID. Metadata, sitemap, header và API xác thực định danh dùng lớp này.
2. **Catalog theo domain:** thông số, CTA, danh sách liên quan, dữ liệu card. Map theo đầy đủ path hoặc ID duy nhất; không dùng riêng code làm khóa toàn site.
3. **Nội dung chi tiết:** các section có ý nghĩa nghiệp vụ và nội dung dài. Load đúng nhóm/trang ở server, không đưa cả registry vào Client Component.

Ví dụ `MXH120` thường và `tra-sau/MXH120` là hai sản phẩm khác nhau. Không lowercase slug; giữ `NETVT01` khác `NETVT1`, dấu gạch dưới các gói Camera/giải trí và chữ hoa trong slug tin đã duyệt.

Dữ liệu tĩnh không cần API giả hay database giả. Lookup record/module phía server là đủ; thêm HTTP fetch vào API nội bộ chỉ làm tăng tầng và có thể tăng thời gian tải. Chỉ bổ sung database/CMS khi có nhu cầu cập nhật độc lập với build.

### 4.2 Cách thay 116 file Details

Hiện đã có template ngoài dùng chung; phần cần giải quyết tiếp là nội dung Details và dữ liệu trùng, không phải xóa 116 wrapper lần nữa.

- Trích danh mục section từ toàn bộ 116 Details: heading, paragraph có emphasis/link, bảng, ảnh, điều kiện, đăng ký, hủy, câu hỏi.
- Phân cụm theo cấu trúc thực tế. Không gộp vì cùng tên prefix `general-*`.
- Thiết kế data union nghiệp vụ như `benefits`, `registration`, `conditions`, `comparisonTable`, `media`; renderer cho từng loại section rõ ràng.
- Giữ thứ tự, khoảng trắng quan trọng, cách xuống dòng, nhấn mạnh, URL, đơn vị giá và cú pháp SMS nguyên bản.
- Các đoạn thực sự đặc thù được phép là TSX riêng dưới `content/packages`; không ép mọi đoạn thành cây JSON `{tag, attrs, children}` và không thay bằng HTML nguyên trang.
- Chọn mẫu 5G20, 1N/3N, V120B, KS110, MXH120 thường và trả sau để thử. Sau khi đạt mới chuyển theo từng cụm; đối chiếu tất cả 116 trang.
- Dữ liệu chi tiết và card có thể là hai projection của cùng record; khác biệt biên tập phải được biểu diễn tường minh, không tự sửa số liệu khi phát hiện lệch.

Mục tiêu là loại **markup lặp**, không bắt buộc giảm số file về một con số tùy ý. Nhiều file TSX server không tự động làm browser nặng; đo import graph, JS, RSC payload và HTML mới kết luận performance.

### 4.3 Tin tức, Internet và dữ liệu lớn

- News: giữ 35 nội dung biên tập riêng; gộp layout/article header/related/table styles. Cân nhắc chuyển bảng lặp thành record; không bắt mọi bài dùng cùng nội dung mẫu.
- Internet: giữ các biến thể thường/Mesh/Camera/giải trí; dùng discriminated union để props đúng từng biến thể, tránh component có hàng chục boolean.
- Collections: tách catalog, khu vực/giá, FAQ, news ra khỏi TSX. Tên thư mục phân biệt Internet collection và Internet detail.
- Dữ liệu tỉnh/phường và quốc gia: chỉ gửi phần UI cần; cân nhắc lazy-load phần selector khi mở sau khi đo. Không đổi luồng chọn mặc định hoặc làm selector trễ khó dùng.
- Asset registry và source evidence không được kéo vào client qua helper tiện lợi. Tạo mapping runtime tối thiểu, giữ provenance ngoài runtime.
- Validate toàn bộ catalog ở test/build; server vẫn kiểm đầu vào không tin cậy và điều kiện xuất bản. Không bỏ validation để đạt số đo đẹp.

## 5. SEO từng page: vị trí sửa và flow mới

### Hiện tại sửa ở đâu?

| URL                                  | Dữ liệu title/description hiện tại           | Nơi xuất metadata                                   |
| ------------------------------------ | -------------------------------------------- | --------------------------------------------------- |
| `/`                                  | `features/home/page-content.ts`              | `app/page.tsx`                                      |
| `/goi-cuoc-viettel/*`                | `app/goi-cuoc-viettel/_data/page-content.ts` | hai route `[code]/page.tsx` → `lib/page-routing.ts` |
| `/internet/[code]`                   | `features/internet/page-content.ts`          | route detail → `metadataForPage`                    |
| `/tin-tuc`, `/tin-tuc/[slug]`        | `features/news/page-content.ts`              | route listing/article → `metadataForPage`           |
| Internet/GIC/Nine/Roaming collection | `features/collections/page-content.ts`       | từng `app/.../page.tsx`                             |
| Domain và noindex toàn site          | `lib/site-config.ts`, `app/layout.tsx`       | `metadataBase`, robots                              |

Đã có helper SEO riêng trong `features/seo/page-seo.ts`; cần hợp nhất với đường gọi thực tế, không giữ hai policy khác nhau hoặc coi helper có test là đã nối vào production.

### Flow đích

- Trang tĩnh: `page.tsx` chứa object SEO dễ thấy và export `metadata` qua helper policy chung, sau đó import/ghép các section.
- Route động: `page.tsx` export `generateMetadata`, đọc `record.seo` từ catalog đúng route; không viết 116 page chỉ để đặt 116 title.
- Mỗi record có `seo.title`, `seo.description`, optional OG image; title SEO và heading hiển thị được tách nếu cần, không tự đổi copy trong đợt refactor.
- Policy hiện hành: allowlist + ready + origin hợp lệ quyết định index; render không gated. Không còn SITE_LIVE; không tự chuyển draft thành ready.
- Canonical theo `siteConfig.origin` và path nguyên bản; chốt behavior preview dựa trên baseline vì hai helper hiện có có thể xử lý canonical khác nhau.
- Structured data phải lấy từ cùng record đang render; không tự thêm review/rating/giá/ngày/author thiếu nguồn. Bổ sung mới là hạng mục SEO tách khỏi bước bảo toàn output.
- Tạo tài liệu “sửa SEO trang X” có ví dụ trước/sau và lệnh kiểm HTML; thêm audit title/description/canonical cho toàn bộ 175 URL.

Ví dụ hợp đồng dự kiến — minh họa, chưa phải code đã được thêm vào ứng dụng:

```tsx
// app/goi-cuoc-viettel/[code]/page.tsx
import type { Metadata } from "next";
import { PackageHero } from "@/components/packages/package-hero";
import { PackageDetails } from "@/components/packages/package-details";
import { RelatedPackages } from "@/components/packages/related-packages";
import { requirePackage } from "@/lib/server/packages";
import { buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ code: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const record = requirePackage({ segment: code, subscription: "prepaid" });
  return buildMetadata(record.route, record.seo, record.status);
}

export default async function Page({ params }: Props) {
  const { code } = await params;
  const record = requirePackage({ segment: code, subscription: "prepaid" });
  return (
    <main>
      <PackageHero product={record.summary} />
      <PackageDetails sections={record.details} />
      <RelatedPackages ids={record.relatedIds} />
    </main>
  );
}
```

Implementation thực phải giữ wrapper/class/DOM hiện hành, `generateStaticParams` và chính sách Next Cache Components đang có; ví dụ không thay thế những điều đó. Metadata export chỉ ở Server Component. [Next.js Metadata API](https://nextjs.org/docs/app/getting-started/metadata-and-og-images).

## 6. Giữ CSS hiện tại; Tailwind để sau

Đợt này ưu tiên core: cấu trúc thư mục, routing, components, data, SEO, server/client và integrations. Những phần đang dùng CSS/CSS Modules tiếp tục dùng như hiện tại.

- Giữ class, stylesheet, token, font, breakpoint, reset và thứ tự import. Không chuyển style sang Tailwind.
- Không bật Preflight, không tạo Tailwind entry mới, không import globals.css vào root nếu hiện chưa dùng, không gỡ viettelup-source.css.
- Khi di chuyển component, chỉ sửa đường dẫn CSS/asset cần thiết; giữ nội dung CSS và kiểm selector, module hash, thứ tự tải để tránh lệch UI.
- Khi gom template, giữ style variant hiện tại; không chuẩn hóa lại màu, spacing, kích thước hoặc thiết kế.
- Cleanup core không bao gồm thay thế/dọn stylesheet hiện tại. QA vẫn kiểm screenshot và computed style để bảo đảm UI giữ nguyên.

Migration Tailwind là backlog riêng, chỉ xem xét khi người dùng yêu cầu sau này; không phải phụ thuộc hay điều kiện nghiệm thu core.

## 7. Server/client, render và performance

- Server Component cho page, template, nội dung và card tĩnh; Client Component ở menu, slider, picker, accordion có state và form. Props qua boundary chỉ chứa dữ liệu cần thiết. [Next.js Server/Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components).
- Giữ state gần control dùng nó. Thao tác vùng/slider không làm toàn page tái tính hay remount ảnh; key theo ID ổn định, không theo index hoặc random.
- Chuyển DOM query/event delegation rộng sang ref/state/event tại component theo từng cụm. Giữ adapter legacy cho phần chưa chuyển; mỗi slider chỉ có một owner lifecycle.
- Không thay Swiper/Embla hàng loạt. User đã sửa và rollback carousel nhiều lần; giữ engine hiện tại trước, chuẩn hóa sau khi test chứng minh tương đương.
- Cleanup listener, observer, animation và instance khi unmount; kiểm route navigation, tab ẩn → hiện, resize và reduced motion.
- `memo`, `useMemo`, `useCallback` chỉ dùng khi profiler chỉ ra chi phí thực hoặc cần identity ổn định. Không có yêu cầu “không re-render”: state đổi cần render đúng. [React memo](https://react.dev/reference/react/memo).
- Dữ liệu module tĩnh không cần `use cache` bao quanh mọi lookup. Dự án đã bật `cacheComponents` và `partialPrefetching`; cache async work theo docs Next cục bộ, giữ guard draft/prod và không cache POST lead.
- Các route động hiện có `instant=false`: đây là opt-out kiểm instant navigation theo phiên bản hiện tại, không phải lệnh ép dynamic rendering. Chỉ xem xét bỏ từng nhóm khi đã kiểm tài liệu Next16.4 và build/navigation; không thêm cấu hình cache kiểu cũ hàng loạt.
- Giữ nội dung đầu màn hình có trong HTML server. Chỉ lazy-load animation, dialog code hoặc phần tương tác nặng khi hợp lý; không trì hoãn hero/H1/primary CTA để giảm JS giả tạo.
- Ảnh: kiểm dimensions/sizes, LCP priority, responsive source; không bỏ `unoptimized` đồng loạt khi URL đã là ảnh nguồn resize. Giữ chất lượng nhìn thấy và local asset.
- Font: giữ SF hiện tại, weight/line-height và tải font ổn định; không đưa font cũ quay lại do đổi token.

### Đo trước/sau

Đề xuất đo ở baseline và cuối cùng bằng production build cùng máy, viewport, network/CPU profile. Lặp ít nhất 3 lần lấy median; lưu raw data. Theo dõi JS/CSS transfer và parsed size, RSC/HTML, requests, LCP, CLS, main-thread long tasks, hydration và thời gian interaction. Lighthouse lab là phép đo hỗ trợ, không thay dữ liệu người dùng thật hoặc trực tiếp chứng minh INP ngoài thực tế.

Ngưỡng chặn hồi quy đề xuất: không tăng payload quá 5% hoặc làm median timing xấu quá 10% nếu không có lý do được ghi nhận; chạy lại khi sai khác nằm trong nhiễu. Baseline phase sẽ cố định budget theo nhóm trang. Đây là **đề xuất nghiệm thu**, chưa phải số đo đã đạt.

Mục tiêu dài hạn CWV tại p75: LCP ≤2,5 giây, INP ≤200ms, CLS ≤0,1; cần field data sau phát hành mới kết luận. [Google Web Vitals](https://web.dev/articles/vitals).

## 8. Form, API, analytics và asset

- Giữ endpoint `/api/leads` và response contract. Tách handler mỏng khỏi validation/Turnstile/Telegram/rate limiting khi có lợi cho đọc và kiểm thử.
- Giữ xác thực server theo product ID tin cậy, origin check, chống spam, chống gửi trùng, lỗi/success đúng backend; không suy product từ nhãn nút.
- Hook chỉ tách cho state/effect thật sự dùng lại; không tạo `useX` cho hàm thuần.
- Analytics có bảng event, payload không PII, xác định nơi gọi và điều kiện consent hiện có. Giữ event name và thời điểm phát; không tự bật GTM mới hoặc đổi conversion.
- Tách secret/server env khỏi public config. Không chuyển Telegram token vào constants client.
- Chạy test mock/sandbox cho form/API, chặn outbound SMS/tel/Telegram khi browser regression. Không gửi lead thật trong refactor.
- Asset cần tìm tham chiếu ở TSX, CSS, JSON, mapping và dynamic path trước khi xóa. Phân biệt asset runtime với ảnh evidence; giữ tài nguyên motion/WASM nếu còn dùng.

## 9. Quy trình triển khai theo cổng nghiệm thu

| Mốc                          | Việc làm và đầu ra                                                                                                                        | Phụ thuộc               | Điều kiện qua mốc                                                                        |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------- |
| R0 — Baseline                | Snapshot working tree, inventory/import graph, bảng 175 URL, ảnh và interaction baseline, test/performance baseline, danh sách lỗi sẵn có | Không                   | Có khả năng rollback về đúng trạng thái người dùng hiện tại; lỗi cũ phân biệt rõ         |
| R1 — Hợp đồng                | Chốt cây thư mục, types/schema, route identity, route index, SEO policy và ownership                                                      | R0                      | Mẫu prepaid/postpaid/news/internet biểu diễn đủ nội dung; giữ guards                     |
| R2 — Di chuyển thuần         | Chuyển components/data/types/scripts/evidence tới vị trí đích và sửa imports                                                              | R1                      | Body/CSS không đổi ngoài import; không broken refs; typecheck và regression đạt          |
| R3 — Pilot data/template     | Một cụm packages + một trang tĩnh theo flow mới, page SEO dễ đọc                                                                          | R2                      | Text/link/ảnh/CTA/DOM có ý nghĩa và UI giống baseline; không duplicate source of truth   |
| R4 — Rollout domain          | 116 packages, 18 internet detail, 35 articles/listing, home và 4 collection theo lô                                                       | R3                      | Route matrix đủ175, ngoại lệ rõ ràng, content parity và interaction đạt theo lô          |
| R5 — Interaction/performance | Thu nhỏ client graph, thay legacy runtime từng phần, tối ưu asset/data/analytics theo đo                                                  | UI và data của lô đã ổn | Không mất behavior; before/after chứng minh kết quả; không đổi engine chỉ để đồng nhất   |
| R6 — Cleanup                 | Xóa code thực sự dư, tách archive, chuẩn hóa lock/tooling, cập nhật docs/test paths                                                       | R4–R5                   | Không import/orphan asset lỗi; source có thể setup lại, tests không phụ thuộc file đã bỏ |
| R7 — Final QA                | Type/lint/unit/build, 175 route smoke, visual/interaction/form/SEO/perf, hướng dẫn chỉnh sửa                                              | R6                      | Có bảng pass/fail và hạn chế thật; QA độc lập, không lấy build pass làm UI pass          |

Trong mỗi lô: **di chuyển → kiểm → thay mô hình dữ liệu → kiểm → tối ưu → kiểm**. Không vừa di chuyển vừa viết lại JSX/CSS/engine trong một patch khó review. Có thể song song các domain sau khi Lead khóa hợp đồng; không song song các thay đổi cùng file.

Các deliverable khi triển khai: route matrix, old→new mapping, baseline và after screenshots, SEO editing guide, content editing guide, performance table, danh sách file đã xóa kèm lý do, báo cáo QA. Không ước lượng ngày hoàn thành khi chưa biết số cụm nội dung/ngoại lệ và baseline lỗi; ước lượng lại sau R0–R3.

## 10. Kế hoạch kiểm thử giữ nguyên UI và logic

**Toàn bộ 175 URL:** status phù hợp môi trường, định danh, text, H1/headings, title/description/canonical/robots, ảnh, link/CTA, đúng mã sản phẩm và namespace. So sánh nội dung tất cả trang, không chỉ 5 mẫu.

**Mẫu và ngoại lệ:** home; prepaid ngắn/dài/social; postpaid trùng mã; Internet thường/Mesh/Camera/giải trí; news listing/article có bảng/ảnh; GIC/Nine/Roaming; 404. Chụp 390×844, 768×1024, 1440×900; thêm 959/960px và breakpoint lân cận theo CSS thật. Full-page + trạng thái modal/menu/accordion/slider/region selector.

**Interaction:** chuyển route rồi back/forward; mở/đóng modal bằng chuột và keyboard; focus return; menu; swipe không kích CTA; slider ẩn/hiện/resize; vùng đổi đúng giá; chọn đúng sản phẩm; form invalid/pending/error/success mock; không duplicate submit/event; floating CTA không che nội dung.

**Guard:** unknown route, sai case, path lồng ngoài allowlist, `_components`/`_data` không public, product ID không hợp lệ; draft/noindex/sitemap ở preview và production; không bật SITE_LIVE để test cho dễ.

**So sánh:** chuẩn hóa chỉ phần biến thiên như React ID/CSS module hash; không bỏ text/class/layout để làm diff xanh. Visual diff được xem lại; tolerance chỉ cho anti-aliasing/nội dung động đã xác định. Khác biệt có chủ đích phải tách khỏi refactor và được chốt riêng.

Hợp đồng hiện hành render đủ 175 route ở cả preview và production, kể cả draft. Kiểm riêng policy index/noindex theo readiness; build thành công không thay thế kiểm định danh/H1/metadata và UI. Không sửa trạng thái bản thật để vượt kiểm tra.

Lệnh nền: `pnpm routes:check`, `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`, `pnpm test:e2e`. Kiểm script/test hiện có có đúng scope và env trước khi dùng; sửa test phụ thuộc path cũ nhưng không nới assertion bảo vệ hành vi. Chỉ một build owner; chạy build ở mốc có ý nghĩa, không sau từng thay đổi CSS.

E2E hiện có còn kỳ vọng draft trả404 trong khi runner dev bật preview draft. R0 phải tạo mode rõ ràng: preview parity175; production draft guard; ready fixture cô lập. Test packages hiện kiểm lựa chọn116 module Details cần chuyển sang kiểm nội dung/hành vi tương đương khi renderer mới thay module; không giữ test khóa vào kiến trúc cũ, cũng không xóa bảo vệ namespace/CTA.

## 11. Quy tắc cleanup và rollback

- Trước mỗi lô lưu checkpoint patch/hashes đúng working tree, gồm thay đổi staged/unstaged có sẵn; không reset --hard, không checkout file từ HEAD để “dọn”.
- File runtime chỉ xóa khi không còn import/reference động, có replacement được kiểm và test phù hợp đã pass.
- Evidence không còn cần trong src thì chuyển sang reports/archive trước; chưa xóa baseline đang dùng để nghiệm thu. Giữ mapping cho script/test đọc fixture.
- Generator clone có thể giữ ở scripts/archive, không được chạy lại ghi đè TSX hiện hành. Xóa generator chỉ khi không còn mục đích tái lập.
- Đối chiếu `.pnpm-store`, log, ZIP kit, build artifacts và lockfile với workflow thật trước khi dọn. Không xóa hàng loạt file có vẻ “thừa”.
- Chuẩn hóa `.gitignore` theo loại artifact: runtime source, tests và script kiểm bắt buộc cần được version control; raw capture nặng có thể ngoài repo nhưng phải có cách tái tạo/truy xuất.
- Rollback từng lô qua patch/checkpoint riêng; không tác động thay đổi người dùng ngoài lô đó. Lỗi UI chưa phân định được thì dừng rollout lô liên quan, tiếp tục việc độc lập.

## 12. Phân công khi được giao triển khai

Lead giữ app routing/layout, config/dependencies, shared contracts, integration và Boardroom. Chỉ Lead dispatch; tối đa5 worker mở, workers không tạo agent con.

| Owner                 | Phạm vi dự kiến độc quyền                                                 | Bàn giao                                  |
| --------------------- | ------------------------------------------------------------------------- | ----------------------------------------- |
| vt_source_data        | constants/content theo lô đã khóa; không đồng thời với owner UI cùng file | record/type mapping, parity report        |
| vt_assets_reference   | asset registry và baseline/evidence được phân công                        | hashes, kích thước, screenshot matrix     |
| vt_shared_home        | components/ui, layout, home; giữ CSS hiện tại                             | shared UI/core, visual parity, self-check |
| vt_packages           | components/packages + content/constants packages khi được chuyển quyền    | template/variant + 116 route parity       |
| vt_internet           | components/internet và data domain khi được chuyển quyền                  | collection/detail/variant và interaction  |
| vt_news               | components/news, content/news, data domain khi được chuyển quyền          | listing/35 articles, parity               |
| vt_forms_integrations | components/leads, lib/leads/analytics; API entry Lead tích hợp            | contract và sandbox tests                 |
| vt_seo_performance    | lib/seo, benchmark/tests được giao                                        | SEO policy, HTML/performance evidence     |
| vt_qa                 | tests/reports theo nhiệm vụ                                               | QA độc lập, bước tái hiện, ảnh/diff       |

GIC/Nine/Roaming giao UI owner theo từng lô; quyền data được chuyển rõ giữa Source/Data và feature owner, không cùng ghi. Mỗi task phải ghi file chính xác và export contract trước khi sửa. Authored → self-check → independent QA → Lead verified là các trạng thái khác nhau.

## 13. Tiêu chí hoàn tất và giới hạn lượt lập kế hoạch

Refactor chỉ hoàn tất khi 175 URL và hành vi được bảo toàn; SEO dễ tìm/sửa; component/data/type rõ ràng; template giảm lặp mà không mất nội dung; CSS hiện tại được bảo toàn và UI không đổi; không còn code core dư đã xác minh; giữ stylesheet hiện tại; test/build và QA có bằng chứng; performance trước/sau được báo trung thực.

Lượt này đã chạy kiểm scope và kiểm kê source, đọc tài liệu Next cục bộ về cấu trúc, server/client, caching, CSS, metadata và đối chiếu nguồn chính thức trên web. **Chưa sửa source ứng dụng, chưa chạy kiểm giao diện/performance mới, chưa triển khai kế hoạch.** Các kết quả PASS trong Boardroom là lịch sử, không được xem là nghiệm thu bản refactor tương lai.

Điểm bắt đầu khi triển khai: **R0 baseline → R1 hợp đồng → pilot packages + một page tĩnh**, rồi mới mở rộng. Không deploy, push, gửi lead thật hoặc bật index trong phạm vi refactor local.
