import { siteConfig } from "@/lib/site-config";
import type { PageContent } from "@/lib/content-schema";

/** News route metadata; existing authored TSX components own visible content. */
export const newsPageContents: Record<string, PageContent> = {
  "/tin-tuc": {
    status: "ready",
    kind: "news-list",
    title: "Tin Tức Viettel - Cập Nhật Mới Nhất Về Gói Cước & Khuyến Mãi",
    description: "Tin Tức Viettel - Cập Nhật Mới Nhất Về Gói Cước & Khuyến Mãi",
    heading: "Dùng mạng mỗi ngày không cần wifi",
    sections: [
      {
        type: "cards",
        heading: "Tin tức",
        cards: [
          {
            id: "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
            title:
              "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
            subtitle: "27/06/2026",
            href: "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te",
          },
          {
            id: "/tin-tuc/so-sanh-roaming",
            title:
              "So Sánh Gói Cước Roaming, eSIM Du Lịch Và SIM Vật Lý Nước Ngoài: Lựa Chọn Nào Tốt Nhất Cho Bạn?",
            subtitle: "2/7/2026",
            href: "/tin-tuc/so-sanh-roaming",
          },
          {
            id: "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android",
            title:
              "Hướng dẫn chi tiết cách bật 5G trên iPhone và Andoid mới nhất 2026",
            subtitle: "24/4/2026",
            href: "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android",
          },
          {
            id: "/tin-tuc/goi-cuoc-roaming-viettel-la-gi",
            title: "Gói cước Roaming Viettel là gì?",
            subtitle: "31/3/2026",
            href: "/tin-tuc/goi-cuoc-roaming-viettel-la-gi",
          },
          {
            id: "/tin-tuc/giai-dap-thac-mac-hssv",
            title:
              "GIẢI ĐÁP CÁC CÂU HỎI THƯỜNG GẶP CHO HSSV KHI ĐĂNG KÝ DATA VIETTEL",
            subtitle: "3/3/2026",
            href: "/tin-tuc/giai-dap-thac-mac-hssv",
          },
        ],
      },
      {
        type: "text",
        heading: "Gói Cước Hot",
        paragraphs: [],
      },
    ],
    source: {
      url: siteConfig.url("/tin-tuc"),
      capturedAt: "2026-10-27T13:13:06+07:00",
      evidencePaths: [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/news-list.txt",
      ],
      verifiedFields: [
        "page title",
        "H1",
        "visible news card titles",
        "displayed dates",
        "approved article link paths",
      ],
      unverifiedFields: [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "complete paginated item collection",
        "load more behavior",
        "all article image URLs",
        "direct status/redirect",
        "complete listing",
        "pagination/load-more results",
        "hero/cover image URLs",
      ],
      notes: [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
      ],
    },
  },
  "/tin-tuc/so-sanh-roaming": {
    status: "ready",
    kind: "news-article",
    title:
      "Nên chọn Gói cước Roaming, eSIM du lịch hay SIM vật lý nước ngoài? Lựa chọn tốt nhất dành cho bạn",
    description:
      "Nên chọn Gói cước Roaming, eSIM du lịch hay SIM vật lý nước ngoài? Lựa chọn tốt nhất dành cho bạn",
    heading:
      "So Sánh Gói Cước Roaming, eSIM Du Lịch Và SIM Vật Lý Nước Ngoài: Lựa Chọn Nào Tốt Nhất Cho Bạn?",
    sections: [
      {
        type: "text",
        heading: "TIN TỨC KHÁC",
        paragraphs: [],
      },
      {
        type: "text",
        heading: "GÓI CƯỚC HOT",
        paragraphs: [],
      },
    ],
    source: {
      url: siteConfig.url("/tin-tuc/so-sanh-roaming"),
      capturedAt: "2026-10-27T13:13:06+07:00",
      evidencePaths: [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/news-article-roaming.txt",
      ],
      verifiedFields: [
        "page title",
        "H1",
        "visible publication date",
        "H2 sequence",
        "related section headings",
      ],
      unverifiedFields: [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "full fidelity rich text/inline links",
        "article image URL",
        "content publication time zone",
        "direct status/redirect",
        "full article paragraphs and lists",
        "inline media src",
        "complete related article links",
      ],
      notes: [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
        "Article blocks retain only observed heading structure; full body is incomplete.",
      ],
    },
    article: {
      publishedLabel: "2/7/2026",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Tổng quan về Gói cước Roaming, eSIM du lịch và SIM vật lý nước ngoài",
        },
        {
          type: "heading",
          level: 2,
          text: "Roaming là gì? Hiểu đúng bản chất sản phẩm",
        },
        {
          type: "heading",
          level: 2,
          text: "Đánh giá chi tiết: Nên chọn giải pháp nào khi đi nước ngoài?",
        },
        {
          type: "heading",
          level: 2,
          text: "Tổng kết",
        },
      ],
    },
  },
  "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te": {
    status: "ready",
    kind: "news-article",
    title:
      "TẤT TẦN TẬT VỀ VIETTEL ROAMING: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
    description:
      "Data roaming là gì? Hướng dẫn cách bật chuyển vùng quốc tế trên iOS và Android, bảng cước phí tham khảo theo khu vực và mẹo tiết kiệm data khi ra nước ngoài.",
    heading:
      "Cẩm Nang Chuyển Vùng Quốc Tế (Roaming) Từ A-Z: Cách Bật, Chi Phí Và Mẹo Tiết Kiệm Data",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/viettel-roaming-chuyen-vung-quoc-te"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0119.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 71cc2bd9d892b68858d56ce32dd71bfc5fc1ce8b65b4c4bf400e9c365ec7008c",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "27/06/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Khi chuẩn bị đi công tác hoặc du lịch nước ngoài, một trong những câu hỏi phổ biến nhất là làm sao để dùng data tiết kiệm chi phí nhất? Bài viết này sẽ giải thích rõ data roaming là gì, cách bật chuyển vùng quốc tế trên cả iOS và Android, đồng thời gợi ý cách tiết kiệm chi phí tối đa.",
        },
        {
          type: "heading",
          level: 2,
          text: "Data Roaming Là Gì?",
        },
        {
          type: "paragraph",
          text: "Data roaming (chuyển vùng dữ liệu quốc tế) là dịch vụ cho phép thiết bị di động tiếp tục kết nối mạng (gọi, nhắn tin, dùng data) khi ra khỏi vùng phủ sóng của nhà mạng gốc, thường là khi ra nước ngoài. Lúc này, điện thoại sẽ tự động kết nối với một nhà mạng đối tác tại quốc gia bạn đang ở, dựa trên thỏa thuận hợp tác giữa hai nhà mạng. Nói đơn giản, đây là cách để bạn không cần đổi SIM mà vẫn liên lạc được khi ở nước ngoài.",
        },
        {
          type: "image",
          src: "/assets/viettelup/external/ctfassets/1vLaqVRd9vs5WonZE1kiaN-viettel21.jpeg",
          alt: "tat-tan-tat-ve-data-roaming",
        },
        {
          type: "paragraph",
          text: "Đọc thêm: Gói cước Roaming Viettel là gì? Tổng hợp các gói Roaming phù hợp cho người đi du lịch, công tác nước ngoài",
        },
        {
          type: "heading",
          level: 2,
          text: "Cách Bật Data Roaming",
        },
        {
          type: "paragraph",
          text: "Trên iOS",
        },
        {
          type: "paragraph",
          text: "1. Vào Cài đặt → Di động (Cellular)",
        },
        {
          type: "paragraph",
          text: "2. Chọn Tùy chọn dữ liệu di động (Cellular Data Options)",
        },
        {
          type: "paragraph",
          text: "3. Bật “Chuyển vùng dữ liệu (Data Roaming)”",
        },
        {
          type: "paragraph",
          text: "4. Quay lại màn hình chính và sử dụng Internet theo gói đã đăng ký",
        },
        {
          type: "paragraph",
          text: "Lưu ý: Nếu chưa có mạng, vào Cài đặt → Nhà mạng (Carrier) và bật Tự động (Automatic) để máy chọn mạng đối tác.",
        },
        {
          type: "paragraph",
          text: "Trên Android",
        },
        {
          type: "paragraph",
          text: "1. Vào Cài đặt → Kết nối hoặc Mạng & Internet",
        },
        {
          type: "paragraph",
          text: "2. Chọn Mạng di động (Mobile network)",
        },
        {
          type: "paragraph",
          text: "3. Bật “Chuyển vùng dữ liệu (Data Roaming)”",
        },
        {
          type: "paragraph",
          text: "4. Quay lại màn hình chính và sử dụng Internet theo gói đã đăng ký",
        },
        {
          type: "paragraph",
          text: "Lưu ý: Nếu chưa có mạng, vào Nhà mạng / Chọn mạng → chọn Tự động hoặc chọn thủ công mạng đối tác hiển thị.",
        },
        {
          type: "heading",
          level: 2,
          text: "Vì Sao Nên Đăng Ký Gói Cước Roaming Thay Vì Dùng Mặc Định?",
        },
        {
          type: "paragraph",
          text: "Bạn bắt buộc phải đăng ký gói cước Roaming tại Việt Nam trước khi xuất cảnh (qua SMS, USSD hoặc ứng dụng của nhà mạng như My Viettel).",
        },
        {
          type: "paragraph",
          text: "Nếu chỉ bật roaming mà không mua gói, nhà mạng sẽ tính tiền theo từng MB bạn dùng với giá cực kỳ đắt (vài chục nghìn/MB). Chỉ cần vài phút lướt mạng xã hội, kiểm tra email hay dùng bản đồ định vị cũng có thể khiến bạn mất đến hàng triệu đồng.",
        },
        {
          type: "paragraph",
          text: "Một số lý do nên chủ động đăng ký gói roaming trước khi đi:",
        },
        {
          type: "paragraph",
          text: "✔ Chi phí cố định, dễ kiểm soát",
        },
        {
          type: "paragraph",
          text: "Gói cước theo ngày hoặc theo dung lượng giúp bạn biết trước số tiền phải trả, tránh phát sinh ngoài dự kiến. Sang nước ngoài, điện thoại sẽ bị mất sóng hoàn toàn, không thể nhắn tin hay gọi tổng đài để kích hoạt được nữa.",
        },
        {
          type: "paragraph",
          text: "✔ Tốc độ ổn định hơn",
        },
        {
          type: "paragraph",
          text: "Nhiều gói roaming đi kèm băng thông ưu tiên so với cước mặc định.",
        },
        {
          type: "paragraph",
          text: "✔ Tránh tốn nhiều chi phí sau chuyến đi",
        },
        {
          type: "paragraph",
          text: "Đây là tình huống phổ biến khi người dùng vô tình để data chạy nền (cập nhật ứng dụng, đồng bộ ảnh,…) mà không biết mình đang bị tính phí theo từng MB.",
        },
        {
          type: "heading",
          level: 2,
          text: "Mẹo Tiết Kiệm Data Khi Dùng Roaming",
        },
        {
          type: "paragraph",
          text: "✔ Tắt cập nhật ứng dụng tự động và đồng bộ ảnh/video khi đang roaming để tránh tiêu tốn dung lượng gói cước.",
        },
        {
          type: "paragraph",
          text: "✔ Tải sẵn bản đồ ngoại tuyến (offline maps) trước khi đi.",
        },
        {
          type: "paragraph",
          text: "✔ Ưu tiên dùng Wi-Fi tại khách sạn, sân bay, quán cà phê khi có thể.",
        },
        {
          type: "paragraph",
          text: "✔ Theo dõi dung lượng data đã dùng qua ứng dụng quản lý của nhà mạng.",
        },
        {
          type: "paragraph",
          text: "✔ Cân nhắc dùng eSIM du lịch như một phương án thay thế hoặc bổ sung cho roaming truyền thống.",
        },
        {
          type: "paragraph",
          text: "Đọc thêm: So Sánh Gói Cước Roaming, eSIM Du Lịch Và SIM Vật Lý Nước Ngoài",
        },
        {
          type: "heading",
          level: 2,
          text: "Cước Phí Chuyển Vùng Quốc Tế: Tổng Quan Theo Khu Vực",
        },
        {
          type: "paragraph",
          text: "Cước roaming mặc định (chưa đăng ký gói) thường được tính theo block nhỏ (KB) và khá đắt đỏ. Dưới đây là bảng giá tham khảo mang tính tổng quan, mức cước thực tế sẽ khác nhau tùy nhà mạng và quốc gia:",
        },
        {
          type: "paragraph",
          text: "Xem thêm: Tổng hợp các gói cước Roaming và đăng ký",
        },
        {
          type: "paragraph",
          text: "Các gói áp dụng tại 9 quốc gia khu vực Đông Nam Á (ASEAN):",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "Dung lượng", "Thời hạn", "Cước phí"],
            rows: [
              ["ASEAN5", "2GB", "5 ngày", "100.000đ"],
              ["ASEAN15", "5GB", "15 ngày", "250.000đ"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Các gói áp dụng cho 159 quốc gia trên toàn thế giới (DRE):",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "Dung lượng", "Thời hạn", "Cước phí"],
            rows: [
              ["DRE20", "50MB", "30 ngày", "20.000đ"],
              ["DRE50", "200MB", "30 ngày", "50.000đ"],
              ["DRE100", "500MB", "30 ngày", "100.000đ"],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Tổng Kết",
        },
        {
          type: "paragraph",
          text: "Data roaming là giải pháp tiện lợi giúp bạn giữ liên lạc khi ra nước ngoài mà không cần đổi SIM. Tuy nhiên, nếu không tìm hiểu kỹ và đăng ký gói cước phù hợp trước, bạn rất dễ gặp phải hóa đơn cước phát sinh ngoài dự kiến. Hãy kiểm tra cước phí cụ thể, đăng ký gói roaming phù hợp với điểm đến và áp dụng các mẹo tiết kiệm data ở trên để chuyến đi của bạn vừa thuận tiện vừa tiết kiệm nhé!",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-data-4g-viettel-2026": {
    status: "ready",
    kind: "news-article",
    title:
      "Đăng ký gói cước 4G Viettel tháng siêu rẻ chỉ từ 50k nhận ngay 4GB, 6GB, 8GB,.. mỗi ngày",
    description:
      "Các gói cước HOT 4G dành cho thuê bao Viettel giá rất rẻ, tiện lợi. Hướng dẫn cách đăng ký siêu nhanh. Thoải mái lướt web, mạng xã hội không giới hạn.",
    heading: "Tổng hợp chi tiết gói cước data 4G Viettel 2026 và cách đăng ký",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-data-4g-viettel-2026"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0120.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 3c48b926c59ca9a1a8a3430b45c32169e4d68c89222d7da66c974163acc09677",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "11/05/2026",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Gói cước 4G Viettel là gì?",
        },
        {
          type: "paragraph",
          text: "Đăng ký 4G Viettel là dịch vụ cung cấp các gói cước data cho sim di động, giúp thuê bao truy cập internet trên điện thoại và thiết bị di động khi không có Wifi. Viettel cung cấp nhiều gói cước đa dạng, đáp ứng nhu cầu người dùng về lưu lượng data và các dịch vụ kèm theo. Khách hàng có thể dễ dàng lướt web, xem phim, và sử dụng mạng xã hội như Facebook, TikTok, Instagram, Zalo, Telegram.",
        },
        {
          type: "paragraph",
          text: "Gói cước data 4G Viettel là chương trình ưu đãi của nhà mạng Viettel dành cho khách hàng để đáp ứng nhu cầu sử dụng internet bất kỳ lúc nào. Sau khi đăng ký, khách hàng chỉ cần bật chức năng dữ liệu di động trên điện thoại để có thể truy cập internet dễ dàng.",
        },
        {
          type: "paragraph",
          text: "Với nhịp sống hiện đại, sẽ có những lúc cần sử dụng internet khi ra ngoài, gặp khách hàng, di chuyển hoặc đi chơi. Việc đăng ký gói cước data trở nên rất cần thiết trong những trường hợp như vậy..",
        },
        {
          type: "paragraph",
          text: "Khám phá Viettel Up - website cung cấp thông tin đầy đủ, chính xác về mọi dịch vụ, khuyến mại, gói cước giá rẻ (gói data tháng, ngày, năm, …) của Viettel.",
        },
        {
          type: "heading",
          level: 2,
          text: "Cách đăng ký gói cước 4G Viettel ưu đãi, giá rẻ 2026",
        },
        {
          type: "paragraph",
          text: "Dưới đây là các cách thức đăng ký data 4G Viettel tiện lợi, ai cũng có thể thực hiện:",
        },
        {
          type: "paragraph",
          text: "Cách 1: Đăng ký qua tin nhắn SMS tới đầu số 190 hoặc 290 (thay thế cho đầu số 9123 theo yêu cầu của Bộ TT&TT)",
        },
        {
          type: "paragraph",
          text: "Cách 2: Đăng ký qua app My Viettel, Viettel Money",
        },
        {
          type: "paragraph",
          text: "Cách 3: Đăng ký qua USSD *098#",
        },
        {
          type: "paragraph",
          text: "Cách 4: Đăng ký qua tổng đài chăm sóc Khách hàng (CSKH) 198",
        },
        {
          type: "paragraph",
          text: "Cách 5: Đăng ký tại các cửa hàng Viettel (Viettel Store) trên toàn quốc",
        },
        {
          type: "image",
          src: "/assets/viettelup/external/ctfassets/1KsjQU0QC3CGIY94oTDgC7-viettel_11.jpeg",
          alt: "Đăng ký gói cước 4G 5G Viettel 2026",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước 4G Viettel mới nhất năm 2026",
        },
        {
          type: "paragraph",
          text: "Tổng hợp danh sách các gói cước 4G Viettel được nhiều người đăng ký bởi cung cấp dung lượng lớn data từ 30GB đến 150GB data mỗi tháng (tương ứng từ 1GB đến 5GB/ngày) kèm ưu đãi xem miễn phí ứng dụng TV360 cực hấp dẫn",
        },
        {
          type: "paragraph",
          text: "Để đăng ký gói data 30 ngày của Viettel, khách hàng có thể soạn tin nhắn theo cú pháp: TênGóiCước UP gửi 290. Dưới đây là tổng hợp danh sách các gói cước được đăng ký nhiều nhất:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "GIÁ CƯỚC(tháng)", "ĐĂNG KÝ"],
            rows: [
              ["SD70", "30GB (1GB/ngày)", "70.000đ", "ĐĂNG KÝĐăng ký"],
              ["SD90", "45GB (1.5GB/ngày)", "90.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "SD120",
                "60GB (2GB/ngày)Miễn phí TV360",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD135",
                "150GB (5GB/ngày)Miễn phí TV360",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD150",
                "90GB (3GB/ngày)Miễn phí TV360",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Lưu ý: gói cước SD70, SD135 áp dụng cho thuê bao nằm trong danh sách được hưởng ưu đãi hoặc SIM Viettel kích hoạt mới từ 01/01/2023 trở đi",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước 4G Viettel kèm ưu đãi miễn phí gọi mới nhất năm 2026",
        },
        {
          type: "paragraph",
          text: "Tận hưởng trải nghiệm lướt web bất kỳ nơi đâu với lưu lượng data tốc độ cao, đồng thời kết nối liên tục với bạn bè và gia đình nhờ ưu đãi gọi điện miễn phí. Các gói cước này không chỉ đảm bảo bạn luôn online mà còn giúp bạn tiết kiệm đáng kể chi phí liên lạc.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU DÃI", "ĐƠN GIÁ(tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "V90B",
                "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 30 phút gọi ngoại mạng.",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120B",
                "45GB (1.5GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 50 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150B",
                "60GB (2GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 80 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V160B",
                "120GB (4GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V180B",
                "180GB (6GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "240GB (8GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 100 phút gọi ngoại mạng.",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Lưu ý: Danh sách gói cước data 4G Viettel kèm ưu đãi gọi áp dụng cho thuê bao nằm trong danh sách hưởng ưu đãi hoặc SIM Viettel kích hoạt từ 01/01/2023 trở đi",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước 4G Viettel kèm ưu đãi không giới hạn data truy cập Mạng xã hội mới nhất năm 2026",
        },
        {
          type: "paragraph",
          text: "Đăng ký ngay hệ gói cước MXH để tận hưởng không giới hạn lưu lượng truy cập các nền tảng giải trí hàng đầu như TikTok, Youtube, Facebook, Facebook Messgener, Instagram. Các gói cước này không chỉ cung cấp data tốc độ cao cho bạn lướt web thoải mái mà còn đảm bảo luôn kết nối với cộng đồng và thế giới xung quanh trên mạng xã hội, đồng thời kèm ưu đãi miễn phí gọi điện thoại. Một lựa chọn lý tưởng để giải trí, học tập và làm việc hiệu quả mỗi ngày với giá cước cực kỳ ưu đãi.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
                "100.000đ (1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ (1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ (1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T5K",
                "Miễn phí data truy cập TikTok trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T15K",
                "Miễn phí data truy cập TikTok trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T50K",
                "Miễn phí data truy cập TikTok trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB5K",
                "Miễn phí data truy cập TikTok, Messenger trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB15K",
                "Miễn phí data truy cập TikTok, Messenger trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB50K",
                "Miễn phí data truy cập TikTok, Messenger trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT5K",
                "Miễn phí data xem Youtube trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT15K",
                "Miễn phí data xem Youtube trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT50K",
                "Miễn phí data xem Youtube trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Lưu ý: Gói cước data 4G Viettel kèm ưu đãi miễn phí truy cập Mạng xã hội MXH100, MXH120, MXH150 áp dụng cho thuê bao nằm trong danh sách hưởng ưu đãi hoặc SIM Viettel kích hoạt từ 01/01/2023 trở đi",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước data 4G Viettel kèm ưu đãi xem TV360",
        },
        {
          type: "paragraph",
          text: "TV360 là dịch vụ truyền hình và giải trí trực tuyến do Viettel cung cấp, cho phép người dùng xem nhiều kênh truyền hình khác nhau, cũng như các chương trình phim ảnh, thể thao, và nội dung giải trí khác trên nhiều thiết bị di động và máy tính. TV360 mang đến trải nghiệm xem đa dạng, với nhiều nội dung được cập nhật liên tục, bao gồm cả các bộ phim và chương trình truyền hình trong nước và quốc tế.",
        },
        {
          type: "paragraph",
          text: "Các gói cước data 4G Viettel tặng kèm ưu đãi gói Standard trên TV360 (trị giá 50.000đ) mỗi chu kỳ. Khách hàng có thể thoải mái xem các trận Cúp C1, C2, C3, 7 trận Ngoại hạng Anh mỗi tuần và các giải đấu thể thao lớn khác. Xem miễn phí 166 kênh truyền hình: VTV, VTVCab, HTV, THVL, VTC... Xem toàn bộ kho phim bao gồm cả các phim tính phí (không bao gồm phim HBO), xem các tập phim mới nhất được phát song song. Xem toàn bộ kho gameshow và giải trí hàng đầu.",
        },
        {
          type: "paragraph",
          text: "Khách hàng có thể trải nghiệm ứng dụng TV360 trên App Store/CH Play. Sau đây là danh sách gói cước data 4G Viettel kèm ưu đãi xem TV360 full HD (1080p) không quảng cáo trên mọi thiết bị:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "VSport",
                "Miễn phí TV360",
                "20.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "VCine",
                "Miễn phí TV360",
                "20.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV35K",
                "7GB (1GB/ngày)Miễn phí TV360",
                "35.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV65K",
                "14GB (2GB/ngày)Miễn phí TV360",
                "65.000đ/7 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV75K",
                "30GB (1GB/ngày)Miễn phí TV360",
                "75.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV95K",
                "45GB (1.5GB/ngày)Miễn phí TV360",
                "95.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV120K",
                "30GB (1GB/ngày)Miễn phí TV360",
                "120.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV125K",
                "60GB (2GB/ngày)Miễn phí TV360",
                "125.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước combo của Viettel (data 4G, nghe gọi, SMS, TV360)",
        },
        {
          type: "paragraph",
          text: "Tại thị trường Việt Nam theo thống kê của Viettel thì nhu cầu sử dụng điện thoại di động của mỗi người dân chủ yếu phát sinh gọi nội và ngoại mạng động thời sử dụng data 4G tốc độ cao để truy cập mạng internet trên điện thoại di động. Chính vì vậy Viettel cho ra đời một loại gói cước combo tích hợp cả gọi thoại và data đáp ứng nhu cầu của khách hàng",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "1N",
                "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "10.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3N",
                "15GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "30.000đ (3 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "7N",
                "35GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 35 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "70.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "30N",
                "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "300.000đ (1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "90N",
                "450GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "900.000đ (3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "180N",
                "900GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "1.800.000đ (6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "360N",
                "1.800GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "3.600.000đ (1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước gọi giá rẻ của Viettel chỉ từ 1.000đ/ngày",
        },
        {
          type: "paragraph",
          text: "Nhằm đáp ứng nhu cầu nghe gọi cơ bản của khách hàng, Viettel ra mắt nhiều gói cước khác nhau theo từng mục đích sử dụng. Cụ thể:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "V15B",
                "1GB/15 ngàyMiễn phí cuộc gọi nội mạng dưới 5 phút.",
                "15.000đ/15 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V25B",
                "3GB/15 ngàyMiễn phí cuộc gọi nội mạng dưới 10 phút.",
                "25.000đ/15 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V35B",
                "7.5GB/15 ngàyMiễn phí cuộc gọi nội mạng dưới 10 phút.",
                "35.000đ/15 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "MP5X",
                "50 phút gọi nội mạng",
                "5.000đ (24h)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP15K",
                "Miễn phí gọi nội mạng dưới 10 phút",
                "15.000đ (3 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP30K",
                "Miễn phí gọi nội mạng dưới 10 phút",
                "30.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP30",
                "300 phút gọi nội mạng",
                "30.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP30X",
                "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
                "30.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP50",
                "Miễn phí gọi nội mạng dưới 20 phút",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP50X",
                "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP70",
                "Miễn phí gọi nội mạng dưới 20 phút",
                "70.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP70X",
                "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
                "70.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP90",
                "Miễn phí gọi nội mạng dưới 20 phút",
                "90.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP90X",
                "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
                "90.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP120",
                "Miễn phí gọi nội mạng dưới 20 phút",
                "120.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MP120X",
                "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
                "120.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước data Viettel rẻ nhất? Cách đăng ký mạng Viettel 5k 1 ngày",
        },
        {
          type: "paragraph",
          text: "Gói cước data rẻ nhất của Viettel hiện nay là gói ST5K. Với chỉ 5.000 đồng, bạn sẽ nhận được 500MB data tốc độ cao, sử dụng trong vòng 24 giờ kể từ thời điểm đăng ký. Để đăng ký, bạn có thể soạn tin nhắn ST5K UP gửi 290",
        },
        {
          type: "paragraph",
          text: "Một lựa chọn khác là gói ST5KM, cũng có giá 5.000 đồng nhưng cung cấp 1GB data tốc độ cao và không tự động gia hạn hàng ngày. Gói này phải được đăng ký qua ứng dụng My Viettel",
        },
        {
          type: "paragraph",
          text: "Sau đây là danh sách gói cước Viettel giá rẻ khác phù hợp với từng nhu cầu sử dụng",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              ["ST5K", "500MB", "5.000đ (1 ngày)", "ĐĂNG KÝĐăng ký"],
              ["ST5KM", "1GB", "5.000đ (1 ngày)", "My Viettel"],
              ["ST10K", "2GB", "10.000đ (1 ngày)", "ĐĂNG KÝĐăng ký"],
              ["ST15K", "3GB", "15.000đ (3 ngày)", "ĐĂNG KÝĐăng ký"],
              ["ST30K", "7GB", "30.000đ (7 ngày)", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Các gói cước này phù hợp cho những ai cần sử dụng internet di động trong thời gian ngắn với chi phí hợp lý. Để đăng ký, bạn có thể sử dụng cú pháp SMS TênGóiCước UP gửi 290 hoặc thông qua ứng dụng My Viettel.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tại sao nên đăng ký các gói cước Viettel - Lựa chọn hoàn hảo cho mọi nhu cầu",
        },
        {
          type: "heading",
          level: 3,
          text: "Giới Thiệu Chung",
        },
        {
          type: "paragraph",
          text: "Viettel, một trong những nhà cung cấp dịch vụ viễn thông hàng đầu tại Việt Nam, luôn nỗ lực mang đến cho khách hàng những dịch vụ viễn thông đa dạng và tiện ích nhất. Đăng ký các gói cước của Viettel không chỉ giúp bạn tiết kiệm chi phí mà còn mang lại nhiều ưu đãi hấp dẫn, phù hợp với mọi nhu cầu sử dụng. Dưới đây là những lý do vì sao bạn nên đăng ký các gói cước của Viettel.",
        },
        {
          type: "heading",
          level: 3,
          text: "Lợi ích khi đăng ký các gói cước Viettel",
        },
        {
          type: "paragraph",
          text: "1. Tiết kiệm chi phí",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp nhiều gói cước với mức giá hợp lý, giúp bạn quản lý tài chính hiệu quả hơn. Các gói cước có thể đăng ký linh hoạt theo ngày, tuần và tháng, phù hợp với mọi nhu cầu sử dụng và ngân sách của khách hàng. Bạn có thể chọn gói cước phù hợp nhất với nhu cầu cá nhân mà không phải lo lắng về việc chi tiêu quá mức.",
        },
        {
          type: "paragraph",
          text: "2. Dung lượng Data tốc độ cao",
        },
        {
          type: "paragraph",
          text: "Các gói cước của Viettel cung cấp dung lượng data tốc độ cao, giúp bạn thoải mái lướt web, xem video, chơi game và sử dụng các ứng dụng yêu thích mà không lo bị gián đoạn. Dù bạn là người dùng mạng xã hội, doanh nhân bận rộn hay học sinh, sinh viên, Viettel đều có những gói cước phù hợp với bạn.",
        },
        {
          type: "paragraph",
          text: "3. Miễn phí gọi nội mạng và ngoại mạng",
        },
        {
          type: "paragraph",
          text: "Một số gói cước của Viettel cung cấp phút gọi miễn phí nội mạng và ngoại mạng, giúp bạn duy trì kết nối với bạn bè, người thân và đồng nghiệp mà không lo về chi phí. Đây là lựa chọn lý tưởng cho những ai thường xuyên phải gọi điện thoại.",
        },
        {
          type: "paragraph",
          text: "4. Dẽ dàng đăng ký và quản lý",
        },
        {
          type: "paragraph",
          text: "Việc đăng ký và quản lý các gói cước Viettel rất đơn giản. Bạn chỉ cần soạn tin nhắn theo cú pháp [Tên gói cước] UP gửi 290. Ngoài ra, bạn cũng có thể kiểm tra dung lượng data, số phút gọi còn lại và các thông tin khác một cách dễ dàng bằng cách soạn tin theo cú pháp KTTK gửi 191 hoặc ứng dụng My Viettel.",
        },
        {
          type: "paragraph",
          text: "5. Ưu đãi đặc biệt và khuyến mãi",
        },
        {
          type: "paragraph",
          text: "Viettel thường xuyên có các chương trình ưu đãi và khuyến mãi đặc biệt dành cho khách hàng đăng ký các gói cước. Bạn có thể nhận thêm dung lượng data, phút gọi miễn phí hoặc các phần quà hấp dẫn khi đăng ký và sử dụng dịch vụ của Viettel. Khách hàng có thể tham khảo thêm nhiều ưu đãi Viễn thông trên Viettel Money hoặc My Viettel",
        },
        {
          type: "heading",
          level: 2,
          text: "Điều kiện đăng ký sử dụng data 4G Viettel",
        },
        {
          type: "paragraph",
          text: "1. Thuê bao di động:",
        },
        {
          type: "paragraph",
          text: "- Áp dụng cho cả thuê bao trả trước và trả sau của Viettel.",
        },
        {
          type: "paragraph",
          text: "- Thuê bao phải đang hoạt động hai chiều tại thời điểm đăng ký.",
        },
        {
          type: "paragraph",
          text: "2. Số dư tài khoản:",
        },
        {
          type: "paragraph",
          text: "- Tài khoản chính của thuê bao phải có đủ số dư tối thiểu để đăng ký gói cước tương ứng.",
        },
        {
          type: "paragraph",
          text: "3. Thiết bị sử dụng:",
        },
        {
          type: "paragraph",
          text: "- Điện thoại, máy tính bảng hay thiết bị di động có hỗ trợ công nghệ 4G/LTE.",
        },
        {
          type: "paragraph",
          text: "4. Đối tượng áp dụng:",
        },
        {
          type: "paragraph",
          text: "- Một số gói cước chỉ áp dụng cho thuê bao mới hoặc thuê bao kích hoạt trong một khoảng thời gian cụ thể.",
        },
        {
          type: "paragraph",
          text: "- Có thể có những gói cước chỉ dành cho thuê bao nằm trong danh sách khuyến mãi riêng của Viettel.",
        },
        {
          type: "paragraph",
          text: "5. Cú pháp đăng ký:",
        },
        {
          type: "paragraph",
          text: "- Gửi tin nhắn đúng cú pháp [Tên gói cước] UP gửi 290",
        },
        {
          type: "heading",
          level: 2,
          text: "Kết Luận",
        },
        {
          type: "paragraph",
          text: "Đăng ký các gói cước của Viettel là lựa chọn hoàn hảo cho mọi nhu cầu sử dụng, từ việc lướt web, sử dụng mạng xã hội, gọi điện thoại cho đến học tập và làm việc trực tuyến. Với những lợi ích vượt trội và dịch vụ khách hàng tuyệt vời, Viettel cam kết mang đến cho bạn trải nghiệm viễn thông tốt nhất. Hãy chọn ngay gói cước phù hợp và tận hưởng những ưu đãi hấp dẫn từ Viettel!",
        },
      ],
    },
  },
  "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android": {
    status: "ready",
    kind: "news-article",
    title: "Hướng dẫn chi tiết cách bật 5G trên iPhone và Andoid mới nhất 2026",
    description:
      "Hướng dẫn từng bước cách kích hoạt 5G Viettel trên iPhone (17, 16, 15, 14,...) và các dòng Android (Samsung, Oppo, Xiaomi, Realme, Huawei, Vivo, HONOR, Motorola, Google Pixel,...). Xem ngay để dùng 5G tốc độ cao!",
    heading:
      "Hướng dẫn chi tiết cách bật 5G trên iPhone và Andoid mới nhất 2026",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0121.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: d60258aee0128d80e5a4a7046189a5d6b320f39b0c442071466b3c737bf4ebc4",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "24/4/2026",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Cách bật 5G trên điện thoại iPhone (iOS):",
        },
        {
          type: "paragraph",
          text: "Bước 1: Truy cập vào Cài đặt (Settings) trên iPhone > chọn Di động (Cellular)",
        },
        {
          type: "paragraph",
          text: "Bước 2. Tiếp theo, bạn chọn Tuỳ chọn dữ liệu di động (Cellular Data Options) > Thoại & dữ liệu (Voice & Data).",
        },
        {
          type: "paragraph",
          text: "Bước 3: Tại đây, bạn sẽ thấy 3 lựa chọn. Hãy chọn một trong hai tùy chọn sau để kích hoạt 5G:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "5G Tự động (5G Auto): Đây là lựa chọn được khuyến nghị. iPhone sẽ tự động chuyển về 4G (LTE) khi tốc độ 5G không cần thiết để tiết kiệm pin.",
            "5G Bật (5G On): Luôn sử dụng mạng 5G khi có sẵn, ngay cả khi Data 5G không mang lại hiệu suất tốt hơn. Tùy chọn này có thể tiêu hao pin nhanh hơn.",
          ],
        },
        {
          type: "paragraph",
          text: "Lưu ý:",
        },
        {
          type: "paragraph",
          text: "• Đảm bảo điện thoại và SIM của bạn hỗ trợ 5G.",
        },
        {
          type: "paragraph",
          text: "• Kiểm tra khu vực có phủ sóng 5G hay không để kết nối hiệu quả.",
        },
        {
          type: "heading",
          level: 2,
          text: "Cách bật 5G trên điện thoại Android (Samsung, Oppo, Xiaomi, Realme, Huawei...):",
        },
        {
          type: "paragraph",
          text: "Bước 1. Truy cập vào Cài đặt (Settings):",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Mở ứng dụng Cài đặt trên điện thoại.",
            "Tìm và chọn mục Mạng di động (Mobile Networks) hoặc Kết nối (Connections).",
            "Thiết lập SIM (Nếu dùng 2 SIM): Nếu máy bạn dùng 2 SIM, hãy chắc chắn chọn SIM Viettel đã đăng ký gói 5G làm SIM dữ liệu di động mặc định (Default Mobile Data SIM).",
          ],
        },
        {
          type: "paragraph",
          text: "Bước 2. Bật Chế độ Mạng Ưu tiên (Preferred Network Type):",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Trong cài đặt SIM Viettel của bạn, tìm mục Chế độ mạng ưu tiên (Preferred Network Type) hoặc Loại mạng ưu tiên.",
            "Bạn cần chuyển sang tùy chọn có hiển thị 5G hoặc tổ hợp mạng có chữ NR (Ký hiệu của 5G):Tùy chọn phổ biến: 5G / 4G / 3G (Auto Connect) hoặc Ưu tiên 5G.Tùy chọn kỹ thuật: NR/LTE/WCDMA/GSM.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Cập nhật danh sách thiết bị hỗ trợ 5G (tháng 04/2026)",
        },
        {
          type: "paragraph",
          text: "Hiện nay, nhiều hãng đã tích hợp công nghệ 5G trong các thiết bị di động, bao gồm điện thoại thông minh và máy tính bảng. Dưới đây là danh sách các thiết bị hỗ trợ 5G phổ biến tính đến tháng 04/2026:",
        },
        {
          type: "heading",
          level: 3,
          text: "Thiết bị iOS hỗ trợ 5G (cập nhật mới nhất)",
        },
        {
          type: "paragraph",
          text: "1. iPhone 17 Series:",
        },
        {
          type: "list",
          ordered: false,
          items: ["iPhone 17, 17 Plus, 17 Pro, 17 Pro Max"],
        },
        {
          type: "paragraph",
          text: "2. iPhone 16 Series:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "iPhone 16, 16 Plus, 16 Pro, 16 Pro Max (hỗ trợ 5G với Qualcomm X75 modem) .",
          ],
        },
        {
          type: "paragraph",
          text: "3. iPhone 15 Series:",
        },
        {
          type: "list",
          ordered: false,
          items: ["iPhone 15, 15 Plus, 15 Pro, 15 Pro Max."],
        },
        {
          type: "paragraph",
          text: "4. iPhone 14 Series:",
        },
        {
          type: "list",
          ordered: false,
          items: ["iPhone 14, 14 Plus, 14 Pro, 14 Pro Max."],
        },
        {
          type: "paragraph",
          text: "5. iPhone 13 Series:",
        },
        {
          type: "list",
          ordered: false,
          items: ["iPhone 13, 13 Mini, 13 Pro, 13 Pro Max."],
        },
        {
          type: "paragraph",
          text: "6. iPhone 12 Series:",
        },
        {
          type: "list",
          ordered: false,
          items: ["iPhone 12, 12 Mini, 12 Pro, 12 Pro Max."],
        },
        {
          type: "paragraph",
          text: "7. iPhone SE (2022):",
        },
        {
          type: "list",
          ordered: false,
          items: ["iPhone SE 3 hỗ trợ 5G."],
        },
        {
          type: "paragraph",
          text: "Thiết bị iOS khác hỗ trợ 5G",
        },
        {
          type: "paragraph",
          text: "Hiện tại, nhiều dòng iPad của Apple đều đã tích hợp các phiên bản Wi-Fi + Cellular đều hỗ trợ 5G.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "iPad Pro M1/M2/M3/M4",
            "iPad Air M2/M3/M4",
            "iPad A16",
            "iPad (thế hệ 10)",
            "iPad mini A17 Pro và iPad mini thế hệ 6",
          ],
        },
        {
          type: "paragraph",
          text: "Lưu ý quan trọng về cài đặt 5G trên iPad:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Phiên bản Wi-Fi Only: Các phiên bản iPad chỉ có Wi-Fi sẽ không thể kết nối mạng di động 5G (vì chúng không có khe SIM hoặc eSIM).",
            "iPad Gen (Cơ bản): Dòng iPad tiêu chuẩn (như iPad Gen 10) hiện chủ yếu hỗ trợ 4G (LTE). Khả năng 5G thường chỉ giới hạn ở các dòng Pro, Air và mini.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Thiết bị Android hỗ trợ 5G (cập nhật mới nhất)",
        },
        {
          type: "paragraph",
          text: "1. Dòng Samsung Galaxy (Phổ biến nhất):",
        },
        {
          type: "paragraph",
          text: "Samsung có danh mục sản phẩm hỗ trợ 5G rất phong phú, từ flagship đến tầm trung:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Galaxy S25 Ultra, S25 Edge, S25.",
            "Galaxy S24 Ultra, S23, S22, S21 (bao gồm các bản Plus và Ultra).",
            "Galaxy Z Fold7, Z Flip7.",
            "Galaxy Z Fold6, Z Flip6.",
            "Galaxy A56 5G, A35 5G, A17 5G.",
            "Galaxy A16 5G, A07 4G.",
          ],
        },
        {
          type: "paragraph",
          text: "2. Google Pixel Series:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Pixel 9 series (9, 9 Pro, 9 Pro XL, 9 Pro Fold), Pixel 8 series (8a, 8, 8 Pro) và một số mẫu cũ hơn (như Pixel 7a, 7, 7 Pro, 5, 4a 5G)",
          ],
        },
        {
          type: "paragraph",
          text: "3. Xiaomi Mi (Giá tốt và Hiệu năng cao):",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Xiaomi 15 Ultra 5G, Xiaomi 14, 14 Pro, 14 Ultra.",
            "Xiaomi Redmi Note 14 5G.",
            "Xiaomi Redmi Note 13 Pro Plus 5G.",
            "Xiaomi POCO X7 Pro 5G.",
          ],
        },
        {
          type: "paragraph",
          text: "4. Huawei",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Huawei P60, P50, P40 Pro / Pro+ / P40",
            "Huawei Mate 60, Mate 50, Mate 40 Pro / Mate 30 Pro 5G",
            "Nova 11 SE, Nova 10 Pro",
          ],
        },
        {
          type: "paragraph",
          text: "5. Oppo Find X Series:",
        },
        {
          type: "list",
          ordered: false,
          items: ["OPPO Find N3, Find N3 Flip, OPPO Reno12 5G, OPPO A79 5G."],
        },
        {
          type: "paragraph",
          text: "6. Vivo",
        },
        {
          type: "list",
          ordered: false,
          items: ["Vivo V30E, Vivo X90 Pro+, Vivo V25 Pro 5G."],
        },
        {
          type: "paragraph",
          text: "7. Realme:",
        },
        {
          type: "list",
          ordered: false,
          items: ["Realme 9 5G, Realme 9 Pro+."],
        },
        {
          type: "paragraph",
          text: "8. OnePlus Series:",
        },
        {
          type: "list",
          ordered: false,
          items: ["OnePlus 11, OnePlus 10 Pro, OnePlus Nord N30 5G."],
        },
        {
          type: "paragraph",
          text: "9. HONOR:",
        },
        {
          type: "list",
          ordered: false,
          items: ["HONOR X9c 5G, HONOR 200 5G."],
        },
        {
          type: "paragraph",
          text: "10. Motorola:",
        },
        {
          type: "list",
          ordered: false,
          items: ["Motorola G35 5G, Motorola Edge 60 Fusion 5G (Mẫu mới)."],
        },
        {
          type: "heading",
          level: 3,
          text: "Lưu ý quan trọng về cài đặt 5G trên các thiết bị Android:",
        },
        {
          type: "paragraph",
          text: "1. Về Tính tương thích và Cài đặt",
        },
        {
          type: "list",
          ordered: false,
          items: [
            'Tên gọi Cài đặt khác nhau: Luôn nhớ rằng đường dẫn kích hoạt 5G sẽ khác nhau tùy thuộc vào từng hãng (ví dụ: Samsung, Xiaomi, Huawei). Luôn tìm mục "Chế độ mạng ưu tiên (Preferred Network Type)".',
            "Điện thoại xách tay: Các thiết bị Android không được phân phối chính hãng tại Việt Nam (như Google Pixel, một số mẫu Huawei xách tay) có thể gặp vấn đề về cấu hình mạng (Carrier Settings) và cần can thiệp kỹ thuật để bắt được sóng 5G của Viettel.",
            "Cập nhật Phần mềm: Đảm bảo điện thoại của bạn đang chạy phiên bản hệ điều hành và cài đặt nhà cung cấp (Carrier Settings) mới nhất. Điều này rất quan trọng để kích hoạt tùy chọn 5G.",
          ],
        },
        {
          type: "paragraph",
          text: "2. Về Hiệu năng và Pin",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tiêu thụ Pin: Mạng 5G, đặc biệt khi sóng yếu, thường tiêu hao pin nhanh hơn so với mạng 4G (LTE). Bạn nên sử dụng chế độ 5G Auto (nếu có) để máy tự động chuyển về 4G khi không cần tốc độ cao, giúp tiết kiệm pin.",
            "Tốc độ: Tốc độ 5G chỉ được tối ưu hóa ở các khu vực có trạm phát sóng 5G Viettel và có thể không ổn định khi bạn di chuyển hoặc ở trong nhà/tòa nhà cao tầng.",
          ],
        },
        {
          type: "paragraph",
          text: "3. Về SIM và Gói cước",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "SIM 5G: Đảm bảo SIM Viettel bạn đang sử dụng là SIM hỗ trợ 5G (dù nhiều SIM 4G hiện tại vẫn có thể dùng 5G, nhưng việc nâng cấp SIM mới sẽ giúp tối ưu tốc độ và kết nối).",
            "Gói cước: Mặc dù bạn đã bật 5G, bạn cần đăng ký gói cước 5G Viettel (hoặc gói cước có ưu đãi 5G) để có thể truy cập mạng 5G. Nếu không, bạn vẫn chỉ dùng 4G.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Kết luận",
        },
        {
          type: "paragraph",
          text: "Danh sách trên bao gồm những thiết bị phổ biến nhất có hỗ trợ 5G, từ các dòng cao cấp đến tầm trung, mang lại khả năng kết nối tốc độ cao, phù hợp cho nhiều nhu cầu sử dụng.",
        },
        {
          type: "paragraph",
          text: "Tham khảo gói cước 5G mới nhất của Viettel phù hợp với các thiết bị iOS và Android",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-roaming-viettel-la-gi": {
    status: "ready",
    kind: "news-article",
    title:
      "Gói cước Roaming Viettel là gì? Tổng hợp các gói roaming phù hợp cho người đi du lịch, công tác nước ngoài (mới nhất)",
    description:
      "Tìm hiểu gói cước Roaming Viettel chỉ từ 20k. Tổng hợp các gói roaming Viettel phổ biến, tiết kiệm nhất cho người đi du lịch, công tác nước ngoài bao gồm Hàn Quốc, Nhật Bản, Thái Lan, Singapore, Trung Quốc, Mỹ, Úc, Đài Loan,...",
    heading:
      "Gói cước Roaming Viettel là gì? Tổng hợp các gói Roaming phù hợp cho người đi du lịch, công tác nước ngoài",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-roaming-viettel-la-gi"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0122.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 7a66ed73fc1bd59ef7ff0e4933989abedb1b32dfcb4fe45ef23157f2cee6af72",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "31/3/2026",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Gói cước Roaming Viettel là gì?",
        },
        {
          type: "paragraph",
          text: "Gói cước Roaming Viettel (chuyển vùng quốc tế) là dịch vụ cho phép người dùng sử dụng SIM Viettel tại nước ngoài để gọi điện, nhắn tin và truy cập Internet mà không cần thay SIM mới.",
        },
        {
          type: "image",
          src: "/assets/viettelup/external/ctfassets/1KRArNaoC7v6uku5ujG9D8-viettel15.jpeg",
          alt: "cac-goi-cuoc-roaming-viettel",
        },
        {
          type: "paragraph",
          text: "Thay vì phải mua SIM nội địa hoặc phụ thuộc vào WiFi, người dùng vẫn giữ nguyên số điện thoại để:",
        },
        {
          type: "paragraph",
          text: "✔ Nhận OTP ngân hàng",
        },
        {
          type: "paragraph",
          text: "✔ Liên lạc với người thân, đối tác",
        },
        {
          type: "paragraph",
          text: "✔ Sử dụng Internet mọi lúc mọi nơi",
        },
        {
          type: "paragraph",
          text: "Đặc biệt, Viettel đã kết nối với hơn 200 quốc gia và 600 nhà mạng, giúp đảm bảo tín hiệu ổn định khi ra nước ngoài",
        },
        {
          type: "heading",
          level: 2,
          text: "Lợi ích khi sử dụng Roaming Viettel",
        },
        {
          type: "paragraph",
          text: "✔ Không cần thay SIM khi đi nước ngoài",
        },
        {
          type: "paragraph",
          text: "Bạn vẫn giữ nguyên số điện thoại, không mất công mua SIM mới hay đăng ký lại dịch vụ.",
        },
        {
          type: "paragraph",
          text: "✔ Kết nối Internet nhanh chóng, ổn định",
        },
        {
          type: "paragraph",
          text: "Roaming Viettel cho phép truy cập mạng trực tiếp từ các nhà mạng lớn tại quốc gia sở tại như SKT, KT, China Mobile…",
        },
        {
          type: "paragraph",
          text: "✔ Linh hoạt nhiều gói cước",
        },
        {
          type: "paragraph",
          text: "Các gói roaming có thời hạn từ 1 ngày đến 30 ngày, phù hợp với nhiều nhu cầu khác nhau",
        },
        {
          type: "paragraph",
          text: "✔ Tiết kiệm chi phí",
        },
        {
          type: "paragraph",
          text: "Giá gói chỉ từ khoảng 20.000đ/ngày, giúp tối ưu chi phí so với dùng cước phát sinh quốc tế",
        },
        {
          type: "heading",
          level: 2,
          text: "Phân loại các gói cước Roaming Viettel phổ biến",
        },
        {
          type: "paragraph",
          text: "Tìm hiểu thêm: Tổng hợp các gói cước Roaming Viettel",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói Data Roaming theo quốc gia",
        },
        {
          type: "paragraph",
          text: "Đây là các gói tối ưu cho từng điểm đến cụ thể, phù hợp với người đi du lịch hoặc công tác tại một quốc gia. Hiện tại Viettel đang cung cấp đa dạng các quốc gia điểm đến cụ thể với giá ưu đãi hơn so với các gói cước Roaming chung (Hàn Quốc, Thái Lan, Nhật Bản, Trung Quốc, Singapore,...).",
        },
        {
          type: "paragraph",
          text: "Phù hợp với:",
        },
        {
          type: "paragraph",
          text: "✔ Người đi du lịch ngắn ngày",
        },
        {
          type: "paragraph",
          text: "✔ Người chỉ đến 1 quốc gia",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Quốc gia", "Đặc điểm", "Giá cước"],
            rows: [
              [
                "HQ5",
                "Hàn Quốc",
                "Thời gian gói: 5 ngày tính từ lúc đăng kýDung lượng: 8GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "99.000đ",
              ],
              [
                "HQ10",
                "Hàn Quốc",
                "Thời gian gói: 10 ngày tính từ lúc đăng kýDung lượng: 20GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "200.000đ",
              ],
              [
                "NHAT15",
                "Nhật Bản",
                "Thời gian gói: 15 ngày tính từ lúc đăng kýDung lượng: 6GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "250.000đ",
              ],
              [
                "THAI5",
                "Thái Lan",
                "Thời gian gói: 5 ngày tính từ lúc đăng kýDung lượng: 4GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "99.000đ",
              ],
              [
                "THAI10",
                "Thái Lan",
                "Thời gian gói: 10 ngày tính từ lúc đăng kýDung lượng: 10GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "200.000đ",
              ],
              [
                "SING10",
                "Singapore",
                "Thời gian gói: 10 ngày tính từ lúc đăng kýDung lượng: 12GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "200.000đ",
              ],
              [
                "TQ5",
                "Trung Quốc",
                "Thời gian gói: 5 ngày tính từ lúc đăng kýDung lượng: 2GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "99.000đ",
              ],
              [
                "TQ10",
                "Trung Quốc",
                "Thời gian gói: 10 ngày tính từ lúc đăng kýDung lượng: 6GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "250.000đ",
              ],
              [
                "USA15",
                "Hoa Kỳ",
                "Thời gian gói: 15 ngày tính từ lúc đăng kýDung lượng: 25GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "350.000đ",
              ],
              [
                "UC10",
                "Úc",
                "Thời gian gói: 10 ngày tính từ lúc đăng kýDung lượng: 8GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "250.000đ",
              ],
              [
                "DL10",
                "Đài Loan",
                "Thời gian gói: 10 ngày tính từ lúc đăng kýDung lượng: 10GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "250.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói Data Roaming đa quốc gia (DRE)",
        },
        {
          type: "paragraph",
          text: "Các gói DRE20, DRE50 và DRE100 có thể sử dụng được tại nhiều quốc gia (lên tới 100+ quốc gia), rất tiện cho người di chuyển nhiều.",
        },
        {
          type: "paragraph",
          text: "Phù hợp với:",
        },
        {
          type: "paragraph",
          text: "✔ Người đi nhiều nước",
        },
        {
          type: "paragraph",
          text: "✔ Người cần duy trì kết nối cơ bản",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Đặc điểm", "Giá cước"],
            rows: [
              [
                "DRE20",
                "Thời gian gói: 30 ngày tính từ lúc đăng kýDung lượng: 50MB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Có. Huỷ: HUY DRE20 gửi 191",
                "20.000đ",
              ],
              [
                "DRE50",
                "Thời gian gói: 30 ngày tính từ lúc đăng kýDung lượng: 200MB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Có. Huỷ: HUY DRE50 gửi 191",
                "50.000đ",
              ],
              [
                "DRE100",
                "Thời gian gói: 30 ngày tính từ lúc đăng kýDung lượng: 500MB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Có. Huỷ: HUY DRE100 gửi 191",
                "100.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói Data Roaming ngắn ngày (DRU)",
        },
        {
          type: "paragraph",
          text: "Các gói DRU1, DRU3 và DRU7 sở hữu dung lượng theo ngày, là lựa chọn rất linh hoạt.",
        },
        {
          type: "paragraph",
          text: "Phù hợp với:",
        },
        {
          type: "paragraph",
          text: "✔ Người đi công tác ngắn ngày",
        },
        {
          type: "paragraph",
          text: "✔ Người cần data tốc độ cao trong thời gian ngắn",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Đặc điểm", "Giá cước"],
            rows: [
              [
                "DRU1",
                "Thời gian gói: 24 giờ tính từ lúc đăng kýDung lượng: 1GB - Hết 1GB truy cập tốc độ thườngThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "50.000đ",
              ],
              [
                "DRU3",
                "Thời gian gói: 3 ngày tính từ lúc đăng kýDung lượng: 3GB (1GB/ngày) - Hết 1GB/ngày truy cập tốc độ thườngThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "150.000đ",
              ],
              [
                "DRU7",
                "Thời gian gói: 7 ngày tính từ lúc đăng kýDung lượng: 7GB (1GB/ngày) - Hết 1GB/ngày truy cập tốc độ thườngThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "350.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói Data Roaming dài ngày (DR)",
        },
        {
          type: "paragraph",
          text: "Các gói như DR3, DR7, DR15 hay DR30 được thiết kế với dung lượng tối ưu dành cho người ở nước ngoài lâu hơn.",
        },
        {
          type: "paragraph",
          text: "Phù hợp với:",
        },
        {
          type: "paragraph",
          text: "✔ Du học sinh",
        },
        {
          type: "paragraph",
          text: "✔ Người công tác dài ngày",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Đặc điểm", "Giá cước"],
            rows: [
              [
                "DR3",
                "Thời gian gói: 3 ngày tính từ lúc đăng kýDung lượng: 1GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "130.000đ",
              ],
              [
                "DR7",
                "Thời gian gói: 7 ngày tính từ lúc đăng kýDung lượng: 2GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "250.000đ",
              ],
              [
                "DR15",
                "Thời gian gói: 15 ngày tính từ lúc đăng kýDung lượng: 5GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "550.000đ",
              ],
              [
                "DR30",
                "Thời gian gói: 30 ngày tính từ lúc đăng kýDung lượng: 10GB - Hết dung lượng ngừng DataThoại/SMS: Cước thông thườngTự động gia hạn: Không",
                "1.100.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói thoại & SMS",
        },
        {
          type: "paragraph",
          text: "Bên cạnh các gói data, Viettel còn cung cấp gói thoại & SMS riêng là TX15 dành cho người dùng có nhu cầu liên lạc nhiều khi ở nước ngoài.",
        },
        {
          type: "paragraph",
          text: "Phù hợp với:",
        },
        {
          type: "paragraph",
          text: "✔ Người cần giữ liên lạc cơ bản (OTP, gọi nhanh)",
        },
        {
          type: "paragraph",
          text: "✔ Người ít dùng data, chủ yếu nghe – gọi",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Đặc điểm", "Giá cước"],
            rows: [
              [
                "TX15",
                "Thời gian gói: 15 ngày tính từ lúc đăng kýDung lượng: KhôngThoại/SMS: 10 phút gọi, 10 SMSTự động gia hạn: Không",
                "150.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói Combo",
        },
        {
          type: "paragraph",
          text: "Nếu bạn cần kết nối toàn diện (Internet + gọi điện + nhắn tin) thì các gói combo là lựa chọn tối ưu nhất.",
        },
        {
          type: "paragraph",
          text: "👉 Các gói Combo CR200 và CR500 được áp dụng tại nhiều quốc gia (35 nước), rất tiện khi di chuyển quốc tế",
        },
        {
          type: "paragraph",
          text: "Phù hợp với:",
        },
        {
          type: "paragraph",
          text: "✔ Người đi công tác dài ngày",
        },
        {
          type: "paragraph",
          text: "✔ Người cần gọi điện thường xuyên",
        },
        {
          type: "paragraph",
          text: "✔ Người không muốn tách riêng data + thoại",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Đặc điểm", "Giá cước"],
            rows: [
              [
                "CR200",
                "Thời gian gói: 7 ngày tính từ lúc đăng kýDung lượng: 400MB - Hết dung lượng ngừng DataThoại/SMS: 20 phút gọi, 10 SMSTự động gia hạn: Không",
                "200.000đ",
              ],
              [
                "CR500",
                "Thời gian gói: 10 ngày tính từ lúc đăng kýDung lượng: 1.2GB - Hết dung lượng ngừng DataThoại/SMS: 50 phút gọi, 20 SMSTự động gia hạn: Không",
                "500.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Nên chọn gói Data, Thoại hay Combo?",
        },
        {
          type: "paragraph",
          text: "✔ Nếu bạn chỉ cần Internet, chọn gói Data Roaming DR hoặc DRU hay các gói Data Roaming theo quốc gia cực kỳ tiện lợi (Nhật Bản, Trung Quốc, Thái Lan, Hoa Kỳ,...)",
        },
        {
          type: "paragraph",
          text: "✔ Nếu bạn đi công tác hoặc du lịch dài ngày, các gói combo thường tiết kiệm và tối ưu hơn so với đăng ký riêng lẻ (CR200, CR500)",
        },
      ],
    },
  },
  "/tin-tuc/giai-dap-thac-mac-hssv": {
    status: "ready",
    kind: "news-article",
    title:
      "Gói cước HSSV là gì? Có thực sự rẻ hơn gói thông thường? Làm sao để đăng ký và có cần giấy tờ xác nhận sinh viên không?",
    description:
      "Giải đáp thắc mắc về đăng ký gói cước rẻ cho HSSV, huỷ gia hạn, gia hạn thêm, kiểm tra tài khoản,... Giải đáp nhanh chóng.",
    heading:
      "GIẢI ĐÁP CÁC CÂU HỎI THƯỜNG GẶP CHO HSSV KHI ĐĂNG KÝ DATA VIETTEL",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/giai-dap-thac-mac-hssv"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0123.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: abdb42591fa97a8e3c428c8366d06e422b23a2a3151cb495681f305b85ce985e",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "3/3/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Gói cước HSSV là gì? Có thực sự rẻ hơn gói thông thường? Làm sao để đăng ký và có cần giấy tờ xác nhận sinh viên không?",
        },
        {
          type: "paragraph",
          text: "Đây là những câu hỏi mà rất nhiều học sinh, sinh viên đang quan tâm khi tìm kiếm gói cước HSSV Viettel phù hợp với nhu cầu học tập và giải trí mỗi ngày. Trong bài viết này, chúng tôi sẽ giải đáp toàn bộ thắc mắc về gói cước sinh viên: điều kiện đăng ký, ưu đãi data, giá cước và cách kích hoạt nhanh nhất.",
        },
        {
          type: "paragraph",
          text: "1. Gói cước HSSV là gì?",
        },
        {
          type: "paragraph",
          text: "Đây không chỉ là một gói data mua thêm mà thường là chế độ SIM Sinh viên (Student Sim) hoặc SIM Trendy (SIM giới trẻ). Khi SIM của bạn được chuyển sang chế độ này, bạn sẽ được hưởng các đặc quyền mà SIM thường không có.",
        },
        {
          type: "paragraph",
          text: "2. Có thực sự rẻ hơn gói thông thường không?",
        },
        {
          type: "paragraph",
          text: "Câu trả lời là CÓ. Đặc biệt là hệ gói cước GIC của Viettel, cho phép sinh viên đăng ký gói cước chỉ từ 30.000đ/tháng.",
        },
        {
          type: "paragraph",
          text: "Đọc thêm: Tại sao GIC Viettel vẫn là gói cước quốc dân dành cho HSSV năm 2026?",
        },
        {
          type: "paragraph",
          text: "3. Có cần giấy tờ xác nhận sinh viên không?",
        },
        {
          type: "paragraph",
          text: "KHÔNG, hệ thống của Viettel Telecom sẽ tự động quét thông tin ngày sinh từ dữ liệu CCCD/CMND mà bạn đã đăng ký chính chủ trước đó.",
        },
        {
          type: "paragraph",
          text: "3. Gói cước sinh viên Viettel còn đăng ký được không?",
        },
        {
          type: "paragraph",
          text: "Hiện nay, một số gói cước sinh viên như MIMAXSV, ST90SV, TRE60, TRE90 đã ngừng đăng ký mới và không còn gia hạn tự động. Tuy nhiên, người dùng có thể thay thế bằng các gói data như SD90, MXH120 hoặc các gói theo ngày ST15K, 5G30.",
        },
        {
          type: "paragraph",
          text: "Hoặc các gói GIC: GIC30N, GIC90N, GIC125N",
        },
        {
          type: "paragraph",
          text: "4. Làm sao để kiểm tra thuê bao có được đăng ký gói sinh viên không?",
        },
        {
          type: "paragraph",
          text: "Bạn có thể kiểm tra bằng một trong các cách sau:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Trên ứng dụng My Viettel",
            "Trên website viettel.vn",
            "Gọi tổng đài 18008098 (miễn phí) để được tư vấn trực tiếp",
          ],
        },
        {
          type: "paragraph",
          text: "5. Cách đăng ký gói cước Viettel cho sinh viên?",
        },
        {
          type: "paragraph",
          text: "Bạn chỉ cần soạn tin theo cú pháp:",
        },
        {
          type: "paragraph",
          text: "[Tên gói] gửi 191 hoặc 290",
        },
        {
          type: "paragraph",
          text: "Ví dụ: SD90 UP gửi 290",
        },
        {
          type: "paragraph",
          text: "Ngoài ra, bạn có thể đăng ký trên app My Viettel hoặc Viettel Money.",
        },
        {
          type: "paragraph",
          text: "6. Gói cước sinh viên Viettel có tự gia hạn không?",
        },
        {
          type: "paragraph",
          text: "Trước đây, các gói như MIMAXSV, ST90SV có cơ chế gia hạn tự động hàng tháng nếu tài khoản còn đủ tiền. Tuy nhiên, hiện nay các gói đã dừng nên sẽ không còn tiếp tục gia hạn. Với các gói mới, người dùng cần kiểm tra thông tin gia hạn cụ thể trong mô tả gói khi đăng ký.",
        },
        {
          type: "paragraph",
          text: "7. Cách huỷ gói cước Viettel cho sinh viên?",
        },
        {
          type: "paragraph",
          text: "Nếu không còn nhu cầu sử dụng gói cước, bạn có thể huỷ nhanh chóng bằng cách:",
        },
        {
          type: "paragraph",
          text: "HUY [Tên gói] gửi 191",
        },
        {
          type: "paragraph",
          text: "Ví dụ: HUY SD90 gửi 191",
        },
        {
          type: "paragraph",
          text: "Bạn sẽ nhận được tin nhắn xác nhận yêu cầu hủy gia hạn gói cước. Nếu đồng ý hủy gia hạn gói cước soạn: Y gửi 191, muốn hủy bỏ yêu cầu gia hạn soạn: N gửi 191. Nếu như sau 10 phút bạn chưa xác nhận lại là đồng ý hủy hay không thì yêu cầu hủy gia hạn gói cước của bạn sẽ bị từ chối, gói cước của bạn vẫn sẽ tự động gia hạn.",
        },
        {
          type: "paragraph",
          text: "8. Có thể sử dụng nhiều gói cước cùng lúc không?",
        },
        {
          type: "paragraph",
          text: "Không. Mỗi thời điểm bạn chỉ có thể sử dụng 1 gói data chính. Nếu đăng ký gói mới, gói cũ sẽ bị hủy hoặc ghi đè (tùy theo chính sách của từng gói). Bạn nên kiểm tra kỹ trước khi đăng ký.",
        },
        {
          type: "paragraph",
          text: "Lưu ý khi đăng ký: Một số gói chỉ áp dụng cho thuê bao nằm trong danh sách ưu đãi của Viettel. Vui lòng đăng nhập và kiểm tra tại website viettel.vn hoặc trên ứng dụng My Viettel để biết thuê bao của bạn có đủ điều kiện đăng ký không.",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-viettel-thang-3-2026": {
    status: "ready",
    kind: "news-article",
    title: "Gói Cước Viettel Tháng 3/2026 - Đăng Ký 4G 5G Viettel Giá Rẻ",
    description:
      "Tổng hợp các gói cước Viettel tháng 3/2026 mới nhất: 4G 5G giá rẻ, dung lượng cao, đăng ký dễ dàng qua SMS, My Viettel, *098#, và website. Tổng hợp toàn bộ gói cước 4G/5G Viettel Tháng 3/2026 (KS110, KS145, ST90, V120). Xem ngay Data Khủng chỉ từ 6.000đ và cú pháp đăng ký chính thức!",
    heading:
      "Gói Cước Viettel Tháng 3/2026 – Đăng Ký 4G 5G Viettel Giá Rẻ Nhất",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-viettel-thang-3-2026"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0124.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: e81867c61f888d6540eb980154bba152d129b15b4052baaa5c9f7c03f122cfc0",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "3/3/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Viettel đã chính thức cập nhật một số gói cước nổi bật trong tháng 3/2026 nhằm đáp ứng tối đa nhu cầu truy cập Internet tốc độ cao của người dùng.",
        },
        {
          type: "image",
          src: "/assets/viettelup/external/ctfassets/5k7CxcNVFRN1RV5SnhqgNf-3.jpg",
          alt: "cap-nhat-goi-cuoc-4g-5g-thang-3-2026",
        },
        {
          type: "heading",
          level: 2,
          text: "Cập Nhật Gói Cước Viettel KS Độc Quyền: Chi Tiết Gói KS110, KS145, KS20 và Ưu Đãi Trên Viettel Money",
        },
        {
          type: "paragraph",
          text: "Đây là tổng hợp toàn bộ các gói cước Viettel KS độc quyền, áp dụng cho thuê bao Viettel đăng ký thông qua ứng dụng Viettel Money.",
        },
        {
          type: "paragraph",
          text: "Đặc biệt, khi đăng ký các gói cước KS (như KS110, KS145, KS20), bạn sẽ nhận được ƯU ĐÃI GIẢM GIÁ 5% trực tiếp vào đơn giá. Đây là lựa chọn tiết kiệm và tiện lợi cho người dùng data Viettel đang tìm kiếm gói cước KS110 hay KS145 với data khủng.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              ["KS6H", "3GB sử dụng trong 6 giờ", "10.000đ", "Viettel Money"],
              ["KS8", "1.2GB/ngày", "8.000đ", "Viettel Money"],
              [
                "KS12",
                "2.5GB/ngày",
                "11.400đ (giá gốc 12.000đ)",
                "Viettel Money",
              ],
              [
                "KS20",
                "4GB/3 ngày",
                "19.000đ (giá gốc 20.000đ)",
                "Viettel Money",
              ],
              [
                "KS36",
                "8GB/7 ngày",
                "34.200đ (giá gốc 36.000đ)",
                "Viettel Money",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              [
                "KS110",
                "36GB/30 ngày",
                "104.500đ (giá gốc 110.000đ)",
                "Viettel Money",
              ],
              [
                "KS145",
                "66GB/30 ngày",
                "137.800đ (giá gốc 140.000đ)",
                "Viettel Money",
              ],
              [
                "KS165",
                "90GB/30 ngày",
                "156.800đ (giá gốc 165.000đ)",
                "Viettel Money",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Cập nhật chính sách mới của gói cước MXH120 và MXH150: FREE DATA Truy Cập TikTok, Facebook, Youtube (2026)",
        },
        {
          type: "paragraph",
          text: "Viettel vừa cập nhật chính sách Gói cước MXH120 và MXH150 với ưu đãi cực kỳ hấp dẫn: Miễn phí data truy cập không giới hạn các ứng dụng phổ biến nhất hiện nay như TikTok, YouTube, Facebook và nhắn tin Messenger. Đây là giải pháp data toàn diện, giúp bạn tiết kiệm chi phí tối đa.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi hiện tại", "Ưu đãi điều chỉnh"],
            rows: [
              [
                "MXH120",
                "30GB (1GB/ngày)Miễn phí 10 phút/cuộc gọi nội mạng và 30 phút gọi ngoại mạng50GB TikTok + 50GB Youtube + 50GB Facebook & nhắn tin Messenger",
                "30GB (1GB/ngày)Miễn phí 10 phút/cuộc gọi nội mạng và 30 phút gọi ngoại mạngMiễn phí data truy cập TikTok, Youtube, Facebook & nhắn tin Messenger",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)Miễn phí 10 phút/cuộc gọi nội mạng và 50 phút gọi ngoại mạng50GB TikTok + 50GB Youtube + 50GB Facebook & nhắn tin Messenger",
                "45GB (1.5GB/ngày)Miễn phí 10 phút/cuộc gọi nội mạng và 50 phút gọi ngoại mạngMiễn phí data truy cập TikTok, Youtube, Facebook & nhắn tin Messenger",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Giải thích thay đổi:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Ưu đãi mới chuyển từ tặng thêm 50GB mỗi nền tảng → sang miễn phí truy cập không giới hạn ứng dụng TikTok, YouTube, Facebook và Messenger.",
            "Giúp người dùng tiết kiệm hơn và truy cập không giới hạn các nền tảng mạng xã hội yêu thích.",
          ],
        },
        {
          type: "paragraph",
          text: "Cách đăng ký nhanh:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "MXH120: Soạn MXH120 UP gửi 290 hoặc MXH120 gửi 191",
            "MXH150: Soạn MXH150 UP gửi 290 hoặc MXH150 gửi 191",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Cước Data Viettel Rẻ Nhất 2026",
        },
        {
          type: "paragraph",
          text: "Dưới đây là các gói cước được sử dụng phổ biến với ưu đãi cực tốt: SD90, SD135, 5G135, 5G150, MXH100 và MXH120",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              [
                "SD90",
                "45GB (1.5GB/ngày)",
                "90.000đ(30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD135",
                "150GB (5GB/ngày)Miễn phí TV360 Basic",
                "135.000đ(30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G135",
                "120GB (4GB/ngày)Miễn phí TV36020GB Mybox",
                "135.000đ(30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "180GB (6GB/ngày)Miễn phí TV36030GB Mybox",
                "150.000đ(30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH100",
                "30GB (1GB/ngày)Miễn phí data truy cập TikTok, Youtube, Facebook, Messenger",
                "100.000đ(30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)Miễn phí 10 phút/cuộc gọi nội mạng và 30 phút gọi ngoại mạngMiễn phí data truy cập TikTok, Youtube, Facebook & nhắn tin Messenger",
                "120.000đ(30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "240GB (8GB/ngày)Miễn phí 20 phút/cuộc gọi nội mạng và 100 phút gọi ngoại mạng",
                "200.000đ(30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Cước 5G Viettel – Siêu Tốc Độ, Phủ Khắp 63 Tỉnh",
        },
        {
          type: "paragraph",
          text: "Các gói cước 5G Viettel vẫn có thể sử dụng trên hạ tầng 4G và hoạt động tốt trên mạng 4G tại những khu vực chưa có sóng 5G.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G135",
                "4GB/ngày- Miễn phí TV360 4K- 20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G135N (mới)",
                "6GB/ngày- Miễn phí TV360 4K- 20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngày- Miễn phí TV360 4K- 30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150N",
                "8GB/ngày- Miễn phí TV360 4K- 30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G230B",
                "8GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 4K- 50GB Mybox",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G280B",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 200 phút gọi ngoại mạng- Miễn phí TV360 4K- 70GB Mybox",
                "280.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G330B",
                "12GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 100GB Mybox",
                "330.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G380B",
                "15GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 150GB Mybox",
                "380.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G480B",
                "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
                "480.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "* Gói cước 5G135N và 5G150N áp dụng cho thuê bao trả trước Viettel kích hoạt từ 01/01/2025 và thuê bao nằm trong danh sách.",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G dành cho game thủ Liên Quân Mobile:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5GLQ190",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K30GB Mybox",
                "190.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "210.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G Mạng xã hội:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5GMXH200",
                "2GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GMXH230",
                "3GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Hết 50GB truy cập theo ứng dụng sẽ trừ tiếp lưu lượng của gói cước (nếu còn)",
        },
        {
          type: "paragraph",
          text: "Gói cước 5G nhiều phút gọi:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói 4G Viettel Phổ Biến – Giá Tốt, Nhiều Data",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              [
                "SD70",
                "30GB (1GB/ngày)",
                "70.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD90",
                "45GB (1.5GB/ngày)",
                "90.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD120",
                "60GB (2GB/ngày)Miễn phí TV360 Basic",
                "120.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD135",
                "150GB (5GB/ngày)Miễn phí TV360 Basic",
                "135.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD150",
                "90GB (3GB/ngày)Miễn phí TV360 Basic",
                "150.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "list",
          ordered: false,
          items: ["Gói Data Kèm Ưu Đãi TV360 – Giải Trí Không Giới Hạn"],
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "TV75K",
                "1GB/ngày- Miễn phí TV360 4K",
                "75.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV90C",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV120C",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV125K",
                "2GB/ngày- Miễn phí TV360 4K",
                "125.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Mạng Xã Hội – Miễn Phí YouTube, TikTok, Facebook",
        },
        {
          type: "paragraph",
          text: "Dưới đây là danh sách các gói miễn phí mạng xã hội Viettel mới nhất, bạn có thể tham khảo và lựa chọn gói phù hợp với nhu cầu sử dụng hàng tháng.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["T50K", "50GB truy cập TikTok", "50.000đ", "ĐĂNG KÝĐăng ký"],
              ["YT50K", "50GB truy cập Youtube", "50.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "FB50K",
                "50GB truy cập Facebook và nhắn tin Messenger",
                "50.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Đăng ký các gói cước qua SMS: [Tên gói] UP gửi 290 hoặc [Tên gói] gửi 191",
        },
        {
          type: "paragraph",
          text: "Ví dụ: MXH120 UP gửi 290",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Cước Combo Data + Thoại – Gọi Miễn Phí",
        },
        {
          type: "paragraph",
          text: "Gói Combo Data + Thoại Viettel (V90B – V200B) là lựa chọn trọn gói cho những ai muốn vừa có data 4G/5G tốc độ cao, vừa có ưu đãi gọi nội mạng và ngoại mạng miễn phí, không phải nạp tiền nhiều lần. Đây là giải pháp tiện lợi cho sinh viên, dân văn phòng và người thường xuyên gọi điện, lướt web hay xem video online.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "V90B",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120B",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150B",
                "2GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 80 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V180B",
                "6GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "8GB/ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng.",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Hướng dẫn đăng ký nhanh",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Chỉ cần nhấn nút ĐĂNG KÝ tương ứng trong bảng, hệ thống sẽ tự động soạn tin nhắn đăng ký.",
            "Bạn cũng có thể đăng ký qua My Viettel, Viettel Money, tổng đài 191 hoặc website viettel.vn.",
            "Ví dụ: V160B gửi 191",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Cước Ngày Viettel",
        },
        {
          type: "paragraph",
          text: "Với nhu cầu sử dụng data di động ngày càng cao của các nhóm khách hàng khác nhau, Viettel ra mắt thêm các gói ngắn ngày với chi phí hấp dẫn chỉ từ 7000đ/ngày.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "Đăng ký"],
            rows: [
              ["ST7K", "1GB/ngày", "7.000đ (1 ngày)", "ĐĂNG KÝĐăng ký"],
              ["5G10", "6GB/ngày", "10.000đ (1 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "5GVS12",
                "6GB/ngày- Miễn phí TV360 4K",
                "12.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["5G30", "21GB (7GB/ngày)", "30.000đ (3 ngày)", "ĐĂNG KÝĐăng ký"],
              ["5G70", "56GB (8GB/ngày)", "70.000đ (7 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "5GVS80",
                "56GB (8GB/ngày)- Miễn phí TV360 4K",
                "80.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Cước Tháng Dành Cho Thuê Bao Trả Sau - Đăng Ký Liên Hệ 18008098 (Miễn Phí)",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi"],
            rows: [
              [
                "V120K(120.000đ)",
                "45GB (1.5GB/ngày)Miễn phí 20 phút mỗi cuộc gọi nội mạngMiễn phí 50 phút gọi ngoại mạng",
              ],
              [
                "V160X(160.000đ)",
                "120GB (4GB/ngày)Miễn phí 20 phút mỗi cuộc gọi nội mạngMiễn phí 50 phút gọi ngoại mạngMiễn phí 60 SMS nội mạng",
              ],
              [
                "V180X(180.000đ)",
                "180GB (6GB/ngày)Miễn phí 10 phút mỗi cuộc gọi nội mạngMiễn phí 100 phút gọi ngoại mạng",
              ],
              [
                "N200(200.000đ)",
                "180GB (6GB/ngày)Miễn phí truy cập Youtube (tối đa 50GB) và Spotify (tối đa 30GB).Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng.Miễn phí 100 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 30GB Cloud lưu trữ trên Mybox.",
              ],
              [
                "N250(250.000đ)",
                "240GB (8GB/ngày)Miễn phí truy cập Youtube (tối đa 50GB) và Spotify (tối đa 30GB).Miễn phí cuộc gọi nội mạng dưới 30 phút và 150 phút gọi ngoại mạng.Miễn phí 150 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 50GB Cloud lưu trữ trên Mybox.",
              ],
              [
                "N300(300.000đ)",
                "300GB (10GB/ngày)Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi ngoại mạng.Miễn phí 200 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 70GB Cloud lưu trữ trên Mybox.",
              ],
              [
                "N350(350.000đ)",
                "360GB (12GB/ngày)Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi ngoại mạng.Miễn phí 200 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 100GB Cloud lưu trữ trên Mybox.",
              ],
              [
                "N400(400.000đ)",
                "450GB (15GB/ngày)Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi ngoại mạng.Miễn phí 200 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 100GB Cloud lưu trữ trên Mybox.Kho voucher đổi quà tặng độc quyền trên Viettel++Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)",
              ],
              [
                "N500(500.000đ)",
                "600GB (20GB/ngày)Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)Miễn phí cuộc gọi nội mạng dưới 60 phút và 300 phút gọi ngoại mạng.Miễn phí 250 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 100GB Cloud lưu trữ trên Mybox.Kho voucher đổi quà tặng độc quyền trên Viettel++Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)",
              ],
              [
                "N1000(1.000.000đ)",
                "900GB (30GB/ngày)Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)Miễn phí cuộc gọi nội mạng dưới 60 phút và 300 phút gọi ngoại mạng.Miễn phí 250 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 100GB Cloud lưu trữ trên Mybox.Ưu tiên phòng chờ sân bay đối với hội viên Vàng: dành cho thuê bao trả sau dùng gói cước 1.000.000đ và đóng cước trước 12 tháng (chi tiết liên hệ 18008098)Kho voucher đổi quà tặng độc quyền trên Viettel++Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)",
              ],
              [
                "N2000(2.000.000đ)",
                "1.500GB (50GB/ngày)Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)Miễn phí cuộc gọi nội mạng dưới 60 phút và 400 phút gọi ngoại mạng.Miễn phí 250 SMS trong nước.Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.Miễn phí 100GB Cloud lưu trữ trên Mybox.Ưu tiên phòng chờ sân bay đối với hội viên Kim cương: dành cho thuê bao trả sau dùng gói cước 2.000.000đ và đóng cước trước 12 tháng (chi tiết liên hệ 18008098)Kho voucher đổi quà tặng độc quyền trên Viettel++Tặng 10% điểm Viettel++ theo giá gói đăng ký, tối đa không quá 50.000 điểm (Chỉ áp dụng cho thuê bao hoà mạng mới)",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "(*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook, Messenger, TikTok (tối đa 50GB/ứng dụng)",
        },
        {
          type: "heading",
          level: 2,
          text: "Hướng dẫn đăng ký gói cước 4G/5G Viettel",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp nhiều phương thức đăng ký gói cước linh hoạt, phù hợp với nhu cầu của người dùng:",
        },
        {
          type: "heading",
          level: 3,
          text: "1. Đăng ký qua ứng dụng My Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Bước 1: Tải và cài đặt ứng dụng My Viettel từ App Store hoặc Google Play.",
            "Bước 2: Đăng nhập bằng số điện thoại Viettel của bạn.",
            "Bước 3: Tại màn hình chính, chọn mục “Gói cước 4G/5G”.",
            "Bước 4: Lựa chọn gói cước phù hợp và nhấn “Đăng ký”.",
            "Bước 5: Chọn phương thức thanh toán và xác nhận để hoàn tất.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "2. Đăng ký trên ứng dụng Viettel Money",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
            "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
            'Bước 3: Trong ứng dụng chọn mục “Viễn thông" -> “Mua Data 4G/5G", sau đó làm theo hướng dẫn để hoàn tất đăng ký',
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "3. Đăng ký qua mã USSD *098#",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Bước 1: Trên điện thoại, bấm *098# và nhấn gọi.",
            "Bước 2: Làm theo hướng dẫn trên màn hình để chọn và đăng ký gói cước mong muốn.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "4. Đăng ký qua tin nhắn SMS",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Bước 1: Soạn tin nhắn theo cú pháp: [TÊN GÓI CƯỚC] gửi 191. Ví dụ: Soạn 5G150N gửi 191 để đăng ký gói 5G150N.",
            "Bước 2: Chờ tin nhắn xác nhận từ hệ thống.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "5. Đăng ký qua website Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Truy cập trang web chính thức của Viettel tại https://viettel.vn",
            "Tìm kiếm và chọn gói cước phù hợp, sau đó làm theo hướng dẫn để đăng ký.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "6. Đăng ký qua tổng đài 198",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Gọi đến tổng đài 198 để được nhân viên hỗ trợ tư vấn và đăng ký gói cước phù hợp với nhu cầu của bạn.",
          ],
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-viettel-cho-sinh-vien": {
    status: "ready",
    kind: "news-article",
    title:
      "Gói Cước Sinh Viên Viettel 2026 – Data Khủng, Giá Rẻ, Ưu Đãi Cực Hấp Dẫn",
    description:
      "Tham khảo các gói mạng Viettel rẻ cho sinh viên với nhiều ưu đãi data và gọi. Đăng ký sim sinh viên Viettel hoặc chọn gói data theo tháng tiết kiệm nhất cho nhu cầu học tập – giải trí.",
    heading:
      "Danh sách gói cước Viettel tốt nhất dành cho sinh viên 2026: Data khủng, học tập & giải trí thả ga",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-viettel-cho-sinh-vien"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0125.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 0d262f98a08aafe081b917c4a17b1d91d5b7c7e1022356d3100a85d053d40be0",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "10/2/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Bạn là học sinh, sinh viên và muốn tìm gói cước Viettel giá rẻ, dung lượng data lớn, tốc độ cao để học online, lướt mạng xã hội hay xem video giải trí? Danh sách các gói cước 4G/5G Viettel 2026 dưới đây tổng hợp đầy đủ những lựa chọn phù hợp cho nhu cầu học tập và giải trí hàng ngày, từ gói cơ bản giá thấp đến gói ưu đãi đa tiện ích, giúp bạn truy cập internet thoải mái mà vẫn tiết kiệm chi phí.",
        },
        {
          type: "image",
          src: "/assets/viettelup/external/ctfassets/2kSZIv8CFvtYxZ4v4ycsnY-Goi-cuoc-sinh-vien-viettel.jpg",
          alt: "Goi-cuoc-sinh-vien-viettel",
        },
        {
          type: "heading",
          level: 2,
          text: "Cách đăng ký gói cước sinh viên viettel 2026",
        },
        {
          type: "paragraph",
          text: "Bạn chỉ cần soạn tin theo cú pháp:",
        },
        {
          type: "paragraph",
          text: "[Tên gói] gửi 191 hoặc 290",
        },
        {
          type: "paragraph",
          text: "Ví dụ: SD90 UP gửi 290",
        },
        {
          type: "paragraph",
          text: "Ngoài ra, bạn có thể đăng ký trên app My Viettel hoặc Viettel Money.",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước Viettel phù hợp với sinh viên 2026",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước GIC dành riêng cho HSSV",
        },
        {
          type: "paragraph",
          text: "Để giúp bạn dễ dàng lựa chọn gói cước phù hợp với túi tiền và nhu cầu, mỗi gói đều cung cấp tối đa tiện ích của 1 loại nhu cầu đặc thù: gọi nội mạng, ngoại mạng, data, lướt mạng xã hội Tiktok, Youtube, Facebook, Instagram và Threads.",
        },
        {
          type: "table",
          table: {
            headings: [],
            rows: [
              ["Tên gói cước", "Giá cước", "Ưu đãi", "Thời hạn"],
              [
                "GIC30N",
                "30.000đ",
                "- 200 phút gọi nội mạng Viettel (tối đa 10 phút cho mỗi cuộc gọi)- 10 phút gọi ngoại mạng",
                "30 ngày",
              ],
              [
                "GIC70N",
                "70.000đ",
                "- 1GB data mỗi ngày truy cập internet- Miễn phí sách, truyện trên Mydio",
                "30 ngày",
              ],
              [
                "GIC90N",
                "90.000đ",
                "- 1GB data mỗi ngày truy cập internet- Miễn phí Facebook, Threads, Instagram & TikTok- Miễn phí sách, truyện trên Mydio",
                "30 ngày",
              ],
              [
                "GIC125N",
                "125.000đ",
                "- 7GB data mỗi ngày- Miễn phí sách, truyện trên Mydio",
                "30 ngày",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: 'Ngoài ra, khách hàng hoàn toàn có thể cá nhân hoá bằng cách mua kèm các ưu đãi "topping" chỉ với 10.000 đồng. Để biết thêm chi tiết, hãy truy cập Tổng hợp các gói cước GIC.',
        },
        {
          type: "paragraph",
          text: "Đọc thêm: Tại sao GIC Viettel vẫn là gói cước quốc dân dành cho HSSV năm 2026?",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước chu kỳ 30 ngày",
        },
        {
          type: "paragraph",
          text: "Các gói cước Viettel chu kỳ 30 ngày là lựa chọn phù hợp cho HSSV cần sử dụng data mỗi ngày với chi phí tiết kiệm. Những gói tháng này có ưu đãi dung lượng ổn định, giá rẻ và nhiều lựa chọn bổ sung như data MXH, phút gọi nội – ngoại mạng hoặc ưu đãi xem TV360. Dưới đây là bảng tổng hợp các gói Viettel 30 ngày dành cho sinh viên giúp bạn dễ dàng chọn đúng gói theo nhu cầu sử dụng.",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "Ưu đãi", "Đơn giá (30 ngày)", "Đăng ký"],
            rows: [
              ["ST70K", "15GB (500Mb/ngày)", "70.000đ", "ĐĂNG KÝĐăng ký"],
              ["SD70", "30GB (1GB/ngày)", "70.000đ", "ĐĂNG KÝĐăng ký"],
              ["SD90", "45GB (1.5GB/ngày)", "90.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "V90B",
                "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH100",
                "30GB (1GB/ngày)- 50GB TikTok, 50GB Youtube, 50GB Facebook & Messenger",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- 50GB TikTok, 50GB Youtube, 50GB Facebook & Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD120",
                "60GB (2GB/ngày)- Miễn phí TV360 Basic",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước Viettel ngắn hạn",
        },
        {
          type: "paragraph",
          text: "Các gói cước Viettel ngắn hạn (1 ngày – 3 ngày – 2 giờ) là lựa chọn lý tưởng cho những bạn chỉ cần dùng mạng trong thời điểm nhất định, không muốn đăng ký gói tháng. Với mức giá rẻ, dung lượng linh hoạt và nhiều ưu đãi kèm theo, những gói data ngắn hạn giúp bạn truy cập Internet mọi lúc mà không lo lãng phí. Dưới đây là danh sách các gói Viettel ngắn hạn phổ biến nhất hiện nay.",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              ["KS2H", "1.2GB sử dụng trong 2h", "6.000đ/2h", "Viettel Money"],
              [
                "ST5K",
                "500MB sử dụng đến 24h",
                "5.000đ/ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              ["ST7K", "1GB sử dụng đến 24h", "7.000đ/ngày", "ĐĂNG KÝĐăng ký"],
              ["5G10", "6GB/ngày", "10.000đ/ngày", "ĐĂNG KÝĐăng ký"],
              [
                "1N",
                "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "10.000đ/ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              ["ST15K", "3GB/3 ngày", "15.000đ/3 ngày", "ĐĂNG KÝĐăng ký"],
              ["5G30", "21GB (7GB/ngày)", "30.000đ/3 ngày", "ĐĂNG KÝĐăng ký"],
              [
                "3N",
                "15GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "30.000đ/3 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước mạng xã hội phù hợp với sinh viên",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp nhiều gói cước mạng xã hội giá rẻ dành cho sinh viên, hỗ trợ truy cập TikTok, Facebook/Messenger và YouTube với dung lượng lớn và mức phí cực kỳ tiết kiệm. Các gói data chuyên biệt này giúp bạn xem video, lướt mạng xã hội thoải mái mà không lo tốn dung lượng data chính. Dưới đây là danh sách chi tiết các gói Viettel mạng xã hội theo chu kỳ ngày – tuần – tháng.",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              [
                "T5K",
                "15GB truy cập TikTok trong 1 ngày",
                "5.000đ/ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT5K",
                "15GB truy cập Youtube trong 1 ngày",
                "5.000đ/ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB5K",
                "15GB truy cập Facebook, Messenger trong 1 ngày",
                "5.000đ/ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T15K",
                "25GB truy cập TikTok trong 7 ngày",
                "15.000đ/7 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT15K",
                "25GB truy cập Youtube trong 7 ngày",
                "15.000đ/7 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB15K",
                "25GB truy cập Facebook, Messenger trong 7 ngày",
                "15.000đ/7 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T50K",
                "50GB truy cập TikTok trong 30 ngày",
                "50.000đ/30 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT50K",
                "50GB truy cập Youtube trong 30 ngày",
                "50.000đ/30 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB50K",
                "50GB truy cập Facebook, Messenger trong 30 ngày",
                "50.000đ/30 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Các gói cước Viettel từng dành cho sinh viên (đã ngừng đăng ký/gia hạn)",
        },
        {
          type: "paragraph",
          text: "Từ 15/06/2023, Viettel đã chính thức ngừng triển khai đăng ký mới và gia hạn đối với toàn bộ các gói cước sinh viên dưới đây.",
        },
        {
          type: "paragraph",
          text: "1. MIMAXSV – Gói sinh viên giá rẻ chỉ 50.000đ/tháng",
        },
        {
          type: "paragraph",
          text: "Một trong những gói cước huyền thoại dành riêng cho thuê bao học sinh, sinh viên.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước: 50.000đ/30 ngày",
            "Dung lượng: 5GB tốc độ cao/tháng, sau đó truy cập không giới hạn ở tốc độ thường",
            "Ưu đãi thêm: Tặng 3GB data dùng riêng ứng dụng ONME",
            "Cú pháp: MIMAXSV gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "2. ST90SV – Gói data “khủng” cho sinh viên chỉ 70.000đ/tháng",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước: 70.000đ/30 ngày",
            "Dung lượng: 2GB/ngày (tổng 60GB/tháng)",
            "Dành cho thuê bao học sinh, sinh viên hoặc nhóm TRENDY",
            "Cú pháp: ST90SV gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "3. ST60N – Gói theo ngày chu kỳ 30 ngày",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước: 60.000đ/30 ngày",
            "Dung lượng: 2GB/ngày, tổng 60GB/tháng",
            "Hết dung lượng: Ngừng truy cập",
            "Cú pháp: ST60N gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "4. ST90N – Gói theo ngày chu kỳ 30 ngày",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước: 90.000đ/30 ngày",
            "Dung lượng: 4GB/ngày, tổng 120GB/tháng",
            "Hết dung lượng: Ngừng truy cập",
            "Cú pháp: ST90N gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "5. TRE60 – Gói TRENDY ưu đãi data",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước: 60.000đ/30 ngày",
            "Dung lượng: 2GB/ngày, tổng 60GB/tháng",
            "Dành cho thuê bao thuộc nhóm khách hàng TRENDY",
            "Cú pháp: TRE60 gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "6. TRE90 – Gói TRENDY dung lượng cao",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước: 90.000đ/30 ngày",
            "Dung lượng: 4GB/ngày, tổng 120GB/tháng",
            "Dành cho thuê bao TRENDY và học sinh, sinh viên",
            "Cú pháp: TRE90 gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "Các gói cước phổ thông Viettel từng có ưu đãi giảm giá cho sim sinh viên:",
        },
        {
          type: "paragraph",
          text: "7. MIMAX70 – Gói data tiết kiệm cho người dùng cơ bản",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước sinh viên: 50.000đ/tháng (giảm từ 70.000đ)",
            "Dung lượng: 3GB tốc độ cao, sau đó truy cập tốc độ thường",
            "Cú pháp: MIMAX70 gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "8. MIMAX90 – Gói cước cân bằng giá và dung lượng",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước sinh viên: 70.000đ/tháng (giảm từ 90.000đ)",
            "Dung lượng: 5GB tốc độ cao, sau đó truy cập tốc độ thường",
            "Cú pháp: MIMAX90 gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "9. MIMAX125 – Gói data nâng cao cho người dùng nhiều hơn",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước sinh viên: 105.000đ/tháng (giảm từ 125.000đ)",
            "Dung lượng: 8GB tốc độ cao, sau đó truy cập tốc độ thường",
            "Cú pháp: MIMAX125 gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "10. MIMAX200 – Dành cho người dùng Internet thường xuyên",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước sinh viên: 180.000đ/tháng (giảm từ 200.000đ)",
            "Dung lượng: 15GB tốc độ cao, sau đó truy cập tốc độ thường",
            "Cú pháp: MIMAX200 gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "11. UMAX300 – Gói data dung lượng lớn nhất",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giá cước sinh viên: 280.000đ/tháng (giảm từ 300.000đ)",
            "Dung lượng: 30GB tốc độ cao/tháng",
            "Sau khi hết dung lượng: Truy cập không giới hạn ở tốc độ 3Mbps",
            "Cú pháp: UMAX300 gửi 191 hoặc 290",
          ],
        },
        {
          type: "paragraph",
          text: "Các gói cước sinh viên Viettel trước đây đã dừng triển khai, nhưng vẫn được nhiều bạn trẻ yêu thích nhờ giá rẻ và ưu đãi lớn. Hiện tại, sinh viên có thể chọn các gói 4G/5G Viettel mới nhất với dung lượng cao, tốc độ nhanh và nhiều ưu đãi giải trí, phù hợp cho học tập, xem phim, TikTok, Facebook, YouTube mỗi ngày.",
        },
        {
          type: "heading",
          level: 2,
          text: "Kinh nghiệm chọn gói cước phù hợp với sinh viên",
        },
        {
          type: "table",
          table: {
            headings: ["Nhu cầu sử dụng", "Gói cước gợi ý"],
            rows: [
              [
                "Học online, tra cứu tài liệu mỗi ngày",
                "SD90, SD120, MXH120, SD70",
              ],
              ["Gọi điện nhiều, cần liên lạc thường xuyên", "3N, V90B"],
              [
                "Lướt mạng xã hội giải trí",
                "FB15K, T15K, YT50K, T50K, YT50K, FB50K",
              ],
              ["Dùng không thường xuyên, linh hoạt", "ST15K, 5G30"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Mẹo tiết kiệm: Luôn kiểm tra điểm Viettel++ để đổi lấy data, phút gọi hoặc SMS miễn phí!",
        },
        {
          type: "heading",
          level: 2,
          text: "Hướng dẫn đăng ký gói cước Viettel cho học sinh, sinh viên",
        },
        {
          type: "paragraph",
          text: "1. Đăng ký qua tin nhắn SMS:",
        },
        {
          type: "paragraph",
          text: "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp [Tên gói] gửi 191 hoặc 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước.",
        },
        {
          type: "paragraph",
          text: "2. Đăng ký trên ứng dụng My Viettel",
        },
        {
          type: "paragraph",
          text: "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
        },
        {
          type: "paragraph",
          text: "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước”, tìm và chọn gói cước phù hợp với thuê bao",
        },
        {
          type: "paragraph",
          text: "3. Đăng ký trên ứng dụng Viettel Money",
        },
        {
          type: "paragraph",
          text: "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
        },
        {
          type: "paragraph",
          text: 'Bước 3: Trong ứng dụng chọn mục “Viễn thông" -> “Mua Data 4G/5G" và tìm gói cước phù hợp',
        },
        {
          type: "paragraph",
          text: "4. Đăng ký qua mã USSD",
        },
        {
          type: "paragraph",
          text: 'Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi" để tiếp tục',
        },
        {
          type: "paragraph",
          text: "Bước 2: Chọn gói cước phù hợp để đăng ký. Chọn phím 0 để từ chối",
        },
        {
          type: "paragraph",
          text: "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
        },
        {
          type: "paragraph",
          text: "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
        },
        {
          type: "paragraph",
          text: 'Bước 3: Tìm kiếm gói cước trong phần “Gói cước Data". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại',
        },
        {
          type: "paragraph",
          text: "6. Đăng ký tại cửa hàng Viettel",
        },
        {
          type: "paragraph",
          text: "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
        },
        {
          type: "paragraph",
          text: "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
        },
        {
          type: "paragraph",
          text: "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
        },
        {
          type: "paragraph",
          text: "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp.",
        },
        {
          type: "heading",
          level: 2,
          text: "Kết luận: Các gói cước sinh viên Viettel 2026 – Dung lượng cao, giá rẻ, ưu đãi hấp dẫn",
        },
        {
          type: "paragraph",
          text: "Các gói cước sinh viên Viettel 4G/5G mới nhất năm 2026 mang đến dung lượng data lớn, tốc độ mạng nhanh và nhiều ưu đãi giải trí như miễn phí xem TikTok, YouTube, Facebook, gọi nội mạng, SMS… Với mức giá hợp lý, phù hợp với ngân sách sinh viên, những gói cước này là lựa chọn lý tưởng để học tập online, tra cứu tài liệu, lướt mạng xã hội và giải trí hàng ngày.",
        },
        {
          type: "paragraph",
          text: "Hãy chọn ngay gói cước Viettel sinh viên phù hợp với nhu cầu sử dụng của bạn để tận hưởng trải nghiệm internet tốc độ cao, tiết kiệm chi phí và tận dụng tối đa các ưu đãi hấp dẫn từ Viettel.",
        },
        {
          type: "heading",
          level: 2,
          text: "Câu hỏi thường gặp về gói cước sinh viên Viettel",
        },
        {
          type: "paragraph",
          text: "1. Gói cước sinh viên Viettel còn đăng ký được không?",
        },
        {
          type: "paragraph",
          text: "Hiện nay, một số gói cước sinh viên như MIMAXSV, ST90SV, TRE60, TRE90 đã ngừng đăng ký mới và không còn gia hạn tự động. Tuy nhiên, người dùng có thể thay thế bằng các gói data như SD90, MXH120 hoặc các gói theo ngày ST15K, 5G30.",
        },
        {
          type: "paragraph",
          text: "2. Làm sao để kiểm tra thuê bao có được đăng ký gói sinh viên không?",
        },
        {
          type: "paragraph",
          text: "Bạn có thể kiểm tra bằng một trong các cách sau:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Trên ứng dụng My Viettel",
            "Trên website viettel.vn",
            "Gọi tổng đài 18008098 (miễn phí) để được tư vấn trực tiếp",
          ],
        },
        {
          type: "paragraph",
          text: "3. Cách đăng ký gói cước Viettel cho sinh viên?",
        },
        {
          type: "paragraph",
          text: "Bạn chỉ cần soạn tin theo cú pháp:",
        },
        {
          type: "paragraph",
          text: "[Tên gói] gửi 191 hoặc 290",
        },
        {
          type: "paragraph",
          text: "Ví dụ: SD90 gửi 191 hoặc 290",
        },
        {
          type: "paragraph",
          text: "Ngoài ra, bạn có thể đăng ký trên app My Viettel hoặc Viettel Money.",
        },
        {
          type: "paragraph",
          text: "4. Gói cước sinh viên Viettel có tự gia hạn không?",
        },
        {
          type: "paragraph",
          text: "Trước đây, các gói như MIMAXSV, ST90SV có cơ chế gia hạn tự động hàng tháng nếu tài khoản còn đủ tiền. Tuy nhiên, hiện nay các gói đã dừng nên sẽ không còn tiếp tục gia hạn. Với các gói mới, người dùng cần kiểm tra thông tin gia hạn cụ thể trong mô tả gói khi đăng ký.",
        },
        {
          type: "paragraph",
          text: "5. Cách huỷ gói cước Viettel cho sinh viên?",
        },
        {
          type: "paragraph",
          text: "Nếu không còn nhu cầu sử dụng gói cước, bạn có thể huỷ nhanh chóng bằng cách:",
        },
        {
          type: "paragraph",
          text: "HUY [Tên gói] gửi 191",
        },
        {
          type: "paragraph",
          text: "Ví dụ: HUY SD90 gửi 191",
        },
        {
          type: "paragraph",
          text: "Bạn sẽ nhận được tin nhắn xác nhận yêu cầu hủy gia hạn gói cước. Nếu đồng ý hủy gia hạn gói cước soạn: Y gửi 191, muốn hủy bỏ yêu cầu gia hạn soạn: N gửi 191. Nếu như sau 10 phút bạn chưa xác nhận lại là đồng ý hủy hay không thì yêu cầu hủy gia hạn gói cước của bạn sẽ bị từ chối, gói cước của bạn vẫn sẽ tự động gia hạn.",
        },
        {
          type: "paragraph",
          text: "6. Có thể sử dụng nhiều gói cước cùng lúc không?",
        },
        {
          type: "paragraph",
          text: "Không. Mỗi thời điểm bạn chỉ có thể sử dụng 1 gói data chính. Nếu đăng ký gói mới, gói cũ sẽ bị hủy hoặc ghi đè (tùy theo chính sách của từng gói). Bạn nên kiểm tra kỹ trước khi đăng ký.",
        },
        {
          type: "heading",
          level: 2,
          text: "Đọc thêm",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp đa dạng gói cước phù hợp với nhu cầu học tập và giải trí của học sinh, sinh viên. Cụ thể gồm 3 nhóm chính:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Gói data + ưu đãi gọi chu kỳ 30 ngày: Cung cấp dung lượng tốc độ cao từ 500MB – 2GB/ngày, kèm ưu đãi SMS, phút gọi, và có thể đi kèm không gian lưu trữ LifeBOX.",
            "Gói ngắn hạn (1–3 ngày): Phù hợp với những bạn có nhu cầu sử dụng linh hoạt, giá siêu rẻ chỉ từ 15.000đ.",
            "Gói mạng xã hội: Dành cho những bạn thường xuyên dùng Facebook, TikTok, YouTube, với mức phí chỉ từ 5.000đ.",
          ],
        },
        {
          type: "paragraph",
          text: "Lưu ý: Một số gói chỉ áp dụng cho thuê bao nằm trong danh sách ưu đãi của Viettel. Vui lòng đăng nhập và kiểm tra tại website viettel.vn hoặc trên ứng dụng My Viettel để biết thuê bao của bạn có đủ điều kiện đăng ký không.",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi": {
    status: "ready",
    kind: "news-article",
    title:
      "Các gói cước Viettel miễn phí data truy cập mạng xã hội - Đăng ký dễ dàng - Dùng thoải mái không giới hạn",
    description:
      "Viettel đã ra mắt các gói cước lướt mạng xã hội không giới hạn theo tháng. Khám phá các gói cước 4G Viettel miễn phí truy cập Facebook, TikTok, YouTube và nhiều mạng xã hội khác. Đăng ký ngay để lướt mạng xã hội không lo hết data và tiết kiệm chi phí.",
    heading: "Danh Sách Gói Cước 4G Viettel Miễn Phí Mạng Xã Hội 2026 Rẻ Nhất",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0126.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: a876c9b393b71295649d7ac2d7dcbe8649cbd835dc5f4c963cee87e38fcf5187",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "1/2/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Bạn muốn lướt TikTok, Facebook, YouTube mà không lo hết dung lượng? Viettel cung cấp các gói 4G miễn phí mạng xã hội, giúp truy cập thoải mái, tiết kiệm data chính và dễ đăng ký ngay trên điện thoại.",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước 4G Viettel miễn phí data truy cập Mạng xã hội",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ(tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)Miễn phí data TikTok, Youtube, Facebook, Messenger.",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)Miễn phí data TikTok, Youtube, Facebook, Messenger.Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)Miễn phí data TikTok, Youtube, Facebook, Messenger.Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Đăng ký các gói cước qua SMS: [Tên gói] UP gửi 290 hoặc [Tên gói] gửi 191.",
        },
        {
          type: "paragraph",
          text: "Ví dụ: MXH120 UP gửi 290",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước MXH dành cho thuê bao trả sau",
        },
        {
          type: "paragraph",
          text: "Các gói trả sau như MXH120, MXH150, MXH200, MXH250 cung cấp dung lượng data hàng tháng khác nhau, kèm ưu đãi gọi nội/ngoại mạng và SMS miễn phí.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi", "Đơn giá (tháng)"],
            rows: [
              [
                "MXH120",
                "30GB (1GB/ngày)Miễn phí data TikTok, Youtube, Facebook, Messenger.Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)Miễn phí data TikTok, Youtube, Facebook, Messenger.Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
              ],
              [
                "MXH200",
                "120GB (4GB/ngày)Miễn phí data TikTok, Youtube, Facebook, MessengerMiễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.Miễn phí 100 SMS trong nước",
                "200.000đ",
              ],
              [
                "MXH250",
                "150GB (5GB/ngày)Miễn phí data TikTok, Youtube, Facebook, Messenger.Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.Miễn phí 150 SMS trong nước",
                "250.000đ",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Để đăng ký các gói cước miễn phí mạng xã hội Viettel dành cho thuê bao trả sau, liên hệ tổng đài 18008098 (miễn phí) hoặc tới cửa hàng Viettel gần nhất.",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước miễn phí data theo từng nền tảng",
        },
        {
          type: "heading",
          level: 3,
          text: "1. Gói cước miễn phí data truy cập TikTok",
        },
        {
          type: "paragraph",
          text: "Các gói cước TikTok của Viettel như T15K, T50K giúp bạn thỏa sức xem video, livestream và đăng bài mà không lo tốn dung lượng chính. Từ gói 1 ngày đến gói 30 ngày, bạn có thể lựa chọn theo nhu cầu sử dụng.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "T5K",
                "15GB data truy cập TikTok trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T15K",
                "25GB data truy cập TikTok trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T50K",
                "50GB data truy cập TikTok trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "[Tên gói] UP gửi 290 hoặc [Tên gói] gửi 191.",
        },
        {
          type: "paragraph",
          text: "Ví dụ: T50K UP gửi 290",
        },
        {
          type: "heading",
          level: 3,
          text: "2. Gói cước miễn phí data truy cập Youtube",
        },
        {
          type: "paragraph",
          text: "Với gói cước miễn phí data YouTube như YT15K, YT50K, bạn có thể xem phim, video học tập và giải trí cả ngày mà không tốn dung lượng 4G chính. Gói cước phù hợp với nhu cầu dùng hàng ngày, tuần hoặc tháng.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "YT5K",
                "15GB data truy cập TikTok trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT15K",
                "25GB data truy cập Youtube trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT50K",
                "50GB data truy cập Youtube trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "[Tên gói] UP gửi 290 hoặc [Tên gói] gửi 191.",
        },
        {
          type: "paragraph",
          text: "Ví dụ: YT50K UP gửi 290",
        },
        {
          type: "heading",
          level: 3,
          text: "3. Gói cước miễn phí data truy cập Facebook, Messenger",
        },
        {
          type: "paragraph",
          text: "Các gói mạng xã hội Viettel dành cho Facebook và Messenger như FB15K, FB50K cho phép bạn lướt feed, nhắn tin và gọi video miễn phí data, tiết kiệm chi phí và thuận tiện kết nối với bạn bè.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "FB5K",
                "15GB data truy cập Facebook, Messenger trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB15K",
                "25GB data truy cập Facebook, Messenger trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB50K",
                "50GB data truy cập Facebook, Messenger trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "[Tên gói] UP gửi 290 hoặc [Tên gói] gửi 191.",
        },
        {
          type: "paragraph",
          text: "Ví dụ: FB50K UP gửi 290",
        },
        {
          type: "heading",
          level: 2,
          text: "Điều kiện đăng ký sử dụng gói cước Mạng xã hội của Viettel",
        },
        {
          type: "paragraph",
          text: "Số dư tài khoản: Tài khoản chính của thuê bao phải có đủ số dư tối thiểu để đăng ký gói cước tương ứng. Kiểm tra tài khoản điện thoại bằng cú pháp bấm *101# nhấn gọi",
        },
        {
          type: "paragraph",
          text: "Thiết bị sử dụng: Điện thoại, máy tính bảng hay thiết bị di động có hỗ trợ công nghệ 4G/LTE.",
        },
        {
          type: "paragraph",
          text: "Đối tượng áp dụng:",
        },
        {
          type: "paragraph",
          text: "- Đối với gói cước MXH100, MXH120, MXH150 áp dụng cho thuê bao Viettel kích hoạt mới từ 01/01/2023 trở đi",
        },
        {
          type: "paragraph",
          text: "- Đối với gói cước theo từng nền tảng, áp dụng cho tất cả thuê bao Viettel (bao gồm trả trước và trả sau)",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước Viettel miễn phí Mạng xã hội trên ứng dụng Viettel Money:",
        },
        {
          type: "paragraph",
          text: "Bạn có thể tận hưởng data mạng xã hội miễn phí cùng nhiều ưu đãi hấp dẫn với MXH150S và MXH180S. Thoải mái lướt Facebook, TikTok, Youtube, nhắn tin hay gọi điện mà không lo trừ dung lượng chính. Đăng ký ngay qua Viettel Money để trải nghiệm tiện ích mạng xã hội tối ưu.",
        },
        {
          type: "heading",
          level: 3,
          text: "1. Gói cước MXH150S Viettel",
        },
        {
          type: "paragraph",
          text: "Ưu đãi: 30B data tốc độ cao (tương đương 1GB mỗi ngày) dành để truy cập Internet.",
        },
        {
          type: "paragraph",
          text: "Quyền lợi truy cập ứng dụng Facebook, Facebook Messenger, Instagram, TikTok, Youtube miễn phí không giới hạn data (không bị trừ trong 30GB data của gói).",
        },
        {
          type: "paragraph",
          text: "Miễn phí cước gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
        },
        {
          type: "paragraph",
          text: "Đơn giá: 150.000 đồng/tháng (gia hạn mỗi chu kỳ 30 ngày). Khách hàng được hoàn 7.500đ khi đăng ký gói cước lần đầu",
        },
        {
          type: "paragraph",
          text: "Đăng ký truy cập ứng dụng Viettel Money",
        },
        {
          type: "heading",
          level: 3,
          text: "2. Gói cước MXH180S Viettel",
        },
        {
          type: "paragraph",
          text: "Ưu đãi: 45B data tốc độ cao (tương đương 1.5GB mỗi ngày) dành để truy cập Internet.",
        },
        {
          type: "paragraph",
          text: "Quyền lợi truy cập ứng dụng Facebook, Facebook Messenger, Instagram, TikTok, Youtube miễn phí không giới hạn data (không bị trừ trong 45GB data của gói).",
        },
        {
          type: "paragraph",
          text: "Miễn phí cước gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
        },
        {
          type: "paragraph",
          text: "Đơn giá: 180.000 đồng/tháng (gia hạn mỗi chu kỳ 30 ngày). Khách hàng được hoàn 9.000đ khi đăng ký gói cước lần đầu",
        },
        {
          type: "paragraph",
          text: "Đăng ký truy cập ứng dụng Viettel Money",
        },
        {
          type: "heading",
          level: 2,
          text: "Hướng dẫn đăng ký gói cước Mạng xã hội trên ứng dụng Viettel Money",
        },
        {
          type: "paragraph",
          text: "Trường hợp khách hàng là thuê bao Viettel kích hoạt trước ngày 01/01/2023 có thể tham khảo đăng ký gói cước Mạng xã hội trên ứng dụng Viettel Money theo hướng dẫn:",
        },
        {
          type: "paragraph",
          text: "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
        },
        {
          type: "paragraph",
          text: 'Bước 2: Tại màn hình trang chủ, chọn mục “Viễn thông", sau đó chọn "Mua Data 3G/4G".',
        },
        {
          type: "paragraph",
          text: "Bước 3: Chọn gói cước MXH phù hợp",
        },
        {
          type: "paragraph",
          text: "Bước 4: Xác nhận giao dịch và hoàn tất đăng ký.",
        },
        {
          type: "heading",
          level: 2,
          text: "Lợi ích khi sử dụng các gói cước mạng xã hội Viettel",
        },
        {
          type: "paragraph",
          text: "Tiết kiệm chi phí: Các gói cước Viettel có mức giá hợp lý, phù hợp với mọi nhu cầu và ngân sách của người dùng. Bạn có thể lựa chọn gói cước theo ngày, theo tuần hoặc theo tháng tùy theo nhu cầu sử dụng của mình.",
        },
        {
          type: "paragraph",
          text: "Data tốc độ cao: Mỗi gói cước cung cấp dung lượng data tốc độ cao riêng biệt cho từng nền tảng mạng xã hội, giúp bạn thoải mái sử dụng các ứng dụng mà không lo bị gián đoạn.",
        },
        {
          type: "paragraph",
          text: "Ưu đãi đặc biệt: Ngoài quyền lợi miễn phí data truy cập mạng xã hội và tặng kèm GB truy cập internet, các gói cước như MXH120, MXH150, MXH150S, MXH180S còn miễn phí cuộc gọi thoại, giúp khách hàng giữ liên lạc với người thân mọi lúc mọi nơi.",
        },
        {
          type: "paragraph",
          text: "Dễ dàng đăng ký và quản lý: Việc đăng ký các gói cước Viettel rất đơn giản, chỉ cần soạn tin nhắn theo cú pháp [Tên gói cước] UP gửi 290 hoặc [Tên gói cước] gửi 191, hoặc đăng ký trên ứng dụng Viettel Money. Bạn cũng có thể dễ dàng kiểm tra dung lượng còn lại và quản lý gói cước qua tin nhắn.",
        },
        {
          type: "paragraph",
          text: "Với các gói cước mạng xã hội của Viettel, bạn sẽ luôn được kết nối và trải nghiệm những khoảnh khắc tuyệt vời trên các nền tảng yêu thích của mình. Hãy chọn ngay gói cước phù hợp để tận hưởng trải nghiệm mạng xã hội không giới hạn với Viettel!",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-camera-ai": {
    status: "ready",
    kind: "news-article",
    title:
      "Lắp Internet Viettel kèm Camera AI: Giải pháp giám sát trẻ nhỏ an tâm nhất",
    description:
      "Khám phá các gói cước Internet tích hợp Camera AI của Viettel giúp ba mẹ dễ dàng giám sát, chăm sóc trẻ nhỏ từ xa với tốc độ mạng ổn định và hình ảnh sắc nét.",
    heading:
      "Tổng hợp gói cước Internet Camera AI dành cho gia đình có trẻ nhỏ tốt nhất 2026",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-camera-ai"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0127.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 43894bf4794b507a3c038d8402179b0e885cde713a2bc8923939ccb8145d120a",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "29/01/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Trong thời đại số, việc vừa đi làm vừa muốn quan sát, đảm bảo an toàn cho con nhỏ tại nhà là nhu cầu thiết yếu. Hiểu được điều đó, Viettel ra mắt dòng gói cước Camera gia đình an tâm, kết hợp hoàn hảo giữa đường truyền Internet cáp quang siêu tốc và công nghệ Camera AI thông minh.",
        },
        {
          type: "paragraph",
          text: "Camera an ninh tặng kèm khi đăng ký internet Viettel được trang bị độ phân giải cao, cho phép bạn ghi lại những hình ảnh sắc nét và rõ ràng.",
        },
        {
          type: "heading",
          level: 2,
          text: "Top gói cước Internet tích hợp Camera được yêu thích nhất",
        },
        {
          type: "paragraph",
          text: "Tùy vào nhu cầu sử dụng và diện tích căn hộ, ba mẹ có thể lựa chọn các gói cước phù hợp tại các khu vực Hà Nội, TP HCM và Tỉnh/TP như sau:",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước tích hợp Camera AI", "Ưu đãi", "Giá cước"],
            rows: [
              [
                "Gói NETVT1_CAM1",
                "- Tốc độ 350Mbps- 01 Camera AI Viettel + lưu trữ Cloud 24h- 01 Modem WiFi 6 Viettel- Phù hợp hộ gia đình nhỏ, giúp giám sát bé, nhu cầu internet cơ bản",
                "từ 200.000đ/tháng",
              ],
              [
                "Gói NETVT2_CAM1",
                "- Tốc độ từ 500Mbps đến 1Gbps - 01 Camera AI Viettel + lưu trữ Cloud 24h- 01 Modem WiFi 6 Viettel- Phù hợp hộ gia đình có nhu cầu sử dụng mạng cao hơn",
                "từ 260.000đ/tháng",
              ],
              [
                "Gói MESHVT1_CAM1",
                "- Tốc độ từ 350Mbps đến 450Mbps- 01 Camera AI Viettel + lưu trữ Cloud 24h- 01 Modem WiFi 6- 01 Mesh WiFi (tương đương 02 vùng phủ)- Phù hợp với gia đình có căn hộ 1-2 tầng, nhà có trẻ nhỏ và người lớn tuổi cần giám sát",
                "từ 230.000đ/tháng",
              ],
              [
                "Gói MESHVT2_CAM1",
                "- Tốc độ từ 500Mbps đến 1Gbps - 01 Camera AI Viettel + lưu trữ Cloud 24h- 01 Modem WiFi 6- 02 Mesh WiFi (tương đương 03 vùng phủ)- Phù hợp với gia đình có căn hộ nhiều phòng, nhà cao tầng, nhu cầu quản lý nhà thông minh",
                "265.000đ/tháng",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Lắp đặt gói Internet Camera miễn phí",
        },
        {
          type: "paragraph",
          text: "Bước 1: Đăng ký",
        },
        {
          type: "paragraph",
          text: "Cách 1: Nhanh nhất Nhấn vào ĐÂY. Khách hàng để lại thông tin trên website và sẽ có nhân viên tư vấn liên hệ trực tiếp.",
        },
        {
          type: "paragraph",
          text: "Cách 2: Liên hệ tổng đài Viettel, cung cấp địa chỉ để kiểm tra hạ tầng và chọn gói cước phù hợp",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: " + siteConfig.phoneNumber + "",
        },
        {
          type: "paragraph",
          text: "Bước 2: Lắp đặt tận nhà",
        },
        {
          type: "paragraph",
          text: "Nhân viên kỹ thuật đến tận nhà lắp đặt, lắp đặt camera, đi dây mạng (nếu cần), và kết nối internet.",
        },
        {
          type: "paragraph",
          text: "Bước 3: Kích hoạt",
        },
        {
          type: "paragraph",
          text: "Kỹ thuật viên cấu hình camera AI, cài đặt ứng dụng My Viettel trên điện thoại để quản lý.",
        },
        {
          type: "paragraph",
          text: "Bước 4: Nghiệm thu",
        },
        {
          type: "paragraph",
          text: "Kiểm tra hoạt động của camera và thanh toán phí hòa mạng",
        },
      ],
    },
  },
  "/tin-tuc/nine-style": {
    status: "ready",
    kind: "news-article",
    title:
      "TẤT TẦN TẬT VỀ GÓI CƯỚC NINE VIETTEL - DATA THẢ GA, LỐI SỐNG BẬN RỘN",
    description: "“Làm việc xuyên biên giới, giải trí không biên giới.”",
    heading:
      "TẤT TẦN TẬT VỀ GÓI CƯỚC NINE VIETTEL - DATA THẢ GA, LỐI SỐNG BẬN RỘN",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/nine-style"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0128.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 1e825e366478179c3881e31af48769a52182b2e0f28c7d82c0eae9cb3e074f36",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "25/01/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Trong kỷ nguyên 5G, kết nối không chỉ đơn thuần là nghe gọi. Với những người đang làm chủ cuộc sống, kết nối là cơ hội, là tốc độ xử lý công việc và là sự khẳng định vị thế cá nhân. Đó chính là lý do NINEstyle ra đời – một khái niệm mới về lối sống hiện đại được kiến tạo bởi hệ gói cước NINE Viettel.",
        },
        {
          type: "paragraph",
          text: "Gói Nine Viettel (N-series) là dòng trả sau cao cấp thế hệ mới, cung cấp đặc quyền 5G tốc độ cao, data khủng (lên tới 50GB/ngày), miễn phí mạng xã hội, thoại và SMS. Gói cước dành cho khách hàng ưu tiên.",
        },
        {
          type: "heading",
          level: 2,
          text: "NINEstyle là gì? Định nghĩa phong cách sống thời đại 5G",
        },
        {
          type: "paragraph",
          text: "NINEstyle không chỉ là tên gọi của một dòng gói cước; đó là phong cách sống của thế hệ người dùng thông minh, những người coi trọng giá trị của sự ưu tiên. Lấy cảm hứng từ con số 9 – con số của sự viên mãn và vĩnh cửu, NINEstyle đại diện cho một cuộc sống không giới hạn, nơi mọi rào cản về công nghệ và khoảng cách đều bị xóa bỏ nhờ hạ tầng 5G vượt trội của Viettel.",
        },
        {
          type: "heading",
          level: 2,
          text: "3 Trụ cột tạo nên NINEstyle – Lối sống của sự ưu tiên",
        },
        {
          type: "heading",
          level: 3,
          text: "3 lợi ích mà gói cước NINE mang lại cho bạn",
        },
        {
          type: "paragraph",
          text: "1. Kết nối không giới hạn với hạ tầng 5G ưu tiên",
        },
        {
          type: "paragraph",
          text: 'NINEstyle đảm bảo bạn luôn ở trong "luồng ưu tiên" của băng thông 5G. Dù bạn đang ở giữa sự kiện đông đúc hay trong tòa nhà cao tầng, tốc độ data của gói NINE luôn được tối ưu để đảm bảo những cuộc họp video 4K, những tệp dữ liệu khổng lồ được truyền đi trong tích tắc.',
        },
        {
          type: "paragraph",
          text: "2. Tận hưởng đặc quyền đẳng cấp (Beyond Telecom)",
        },
        {
          type: "paragraph",
          text: "Khi trở thành chủ nhân của các gói cước NINE cao cấp (từ N500 trở lên), bạn sẽ nhận được đặc quyền:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Phòng chờ thương gia (Business Lounge): Tận hưởng không gian yên tĩnh, sang trọng tại các sân bay lớn trong khi chờ đợi chuyến bay.",
            "Hỗ trợ ưu tiên: Được phục vụ bởi đội ngũ chăm sóc khách hàng chuyên biệt, xử lý mọi yêu cầu trong thời gian ngắn nhất.",
          ],
        },
        {
          type: "paragraph",
          text: "Xem thêm: Gói cước Viettel N500, Gói cước Viettel N1000, Gói cước Viettel N2000",
        },
        {
          type: "paragraph",
          text: "3. Tự do dịch chuyển toàn cầu",
        },
        {
          type: "paragraph",
          text: "Với ưu đãi Data Roaming (*) (chuyển vùng quốc tế) được tích hợp sẵn, bạn có thể tự tin bước xuống máy bay tại hơn 150 quốc gia mà không cần lo lắng về việc mua SIM mới hay mất kết nối với đối tác.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tại sao người dẫn đầu chọn NINE Viettel?",
        },
        {
          type: "paragraph",
          text: "Không phải ngẫu nhiên mà NINE Viettel lại tạo nên một cơn sốt trong cộng đồng doanh nhân và những người có sức ảnh hưởng (KOLs/KOCs). Họ chọn NINEstyle vì:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            'Sự liền mạch tuyệt đối: Dung lượng data lên đến 50GB/ngày giúp xóa bỏ hoàn toàn nỗi lo "hết lưu lượng" giữa chừng.',
            "Vị thế hội viên Kim Cương: Tự động tích lũy điểm và nâng hạng Viettel++, mở khóa hàng loạt ưu đãi từ khách sạn 5 sao, sân golf đến các nhà hàng cao cấp.",
            "Trải nghiệm cá nhân hóa: Mọi dịch vụ từ âm nhạc (Spotify), video (YouTube, TikTok) đến mạng xã hội đều được miễn phí data, phục vụ tối đa nhu cầu giải trí cá nhân.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Chi tiết các gói cước định hình NINEstyle",
        },
        {
          type: "paragraph",
          text: "Để gia nhập cộng đồng NINEstyle, Viettel mang đến nhiều lựa chọn linh hoạt phù hợp với mức độ chi tiêu của bạn:",
        },
        {
          type: "paragraph",
          text: "PHÂN HẠNG KHỞI ĐẦU (N200 – N350)",
        },
        {
          type: "table",
          table: {
            headings: [],
            rows: [
              ["Tên gói", "Chi tiết", "Ưu đãi đặc biệt"],
              [
                "N200",
                "8GB/ngày20p nội / 150p ngoại100 SMS",
                "Miễn phí data, YouTube, Spotify.Voucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm",
              ],
              [
                "N250",
                "10GB/ngày30p nội / 150p ngoại150 SMS",
                "Miễn phí data, YouTube, SpotifyVoucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm",
              ],
              [
                "N300",
                "12GB/ngày60p nội / 200p ngoại200 SMS",
                "Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phíVoucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm",
              ],
              [
                "N350",
                "15GB/ngày60p nội / 300p ngoại200 SMS",
                "Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phíVoucher phòng chờ thương gia: 1 lần/tháng, tối đa 2 voucher/năm",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "PHÂN HẠNG TIÊU CHUẨN (N400-N500)",
        },
        {
          type: "table",
          table: {
            headings: [],
            rows: [
              ["Tên gói", "Chi tiết", "Ưu đãi đặc biệt"],
              [
                "N400",
                "17GB/ngày60p nội / 300p ngoại200 SMS",
                "Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phíVoucher phòng chờ thương gia: 1 lần/tháng, tối đa 4 voucher/năm",
              ],
              [
                "N500",
                "20GB/ngày60p nội / 300p ngoại 250 SMS",
                "Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phíVoucher phòng chờ thương gia: 1 lần/tháng, tối đa 4 voucher/năm",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "PHÂN HẠNG THƯỢNG LƯU (N1000-N2000)",
        },
        {
          type: "table",
          table: {
            headings: [],
            rows: [
              ["Tên gói", "Chi tiết", "Ưu đãi đặc biệt"],
              [
                "N1000",
                "30GB/ngày60p nội / 300p ngoại 250 SMS",
                "Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phíVoucher phòng chờ thương gia: 1 lần/tháng, tối đa 12 voucher/năm",
              ],
              [
                "N2000",
                "50GB/ngày60p nội / 400p ngoại250 SMS",
                "Miễn phí data, YouTube, Spotify, Meta, TikTok miễn phíVoucher phòng chờ thương gia: 1 lần/tháng, tối đa 12 voucher/năm",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Cách đăng ký gói cước NINE",
        },
        {
          type: "paragraph",
          text: "Cách 1: ĐĂNG KÝ NHANH tại ĐÂY",
        },
        {
          type: "paragraph",
          text: "Bạn chỉ cần nhập Tên và Số điện thoại, thông tin sẽ được gửi đến Tổng đài Viettel và nhân viên sẽ gọi xác nhận lại cho bạn chỉ sau vài phút.",
        },
        {
          type: "paragraph",
          text: 'Cách 2: Truy cập ứng dụng My Viettel --> Tìm kiếm từ khóa "NINE" tại mục tìm kiếm hoặc chọn mục Gói cước > Trả sau --> Chọn gói cước NINE phù hợp với phong cách sống của bạn và ấn "Đăng ký".',
        },
        {
          type: "heading",
          level: 2,
          text: "Lưu ý về ưu đãi tặng kèm",
        },
        {
          type: "paragraph",
          text: "(*) Thuê bao khi chuyển đổi sang gói NINE sẽ được tặng 01 lần sử dụng gói Data Roaming miễn phí (áp dụng cho các lượt chuyển đổi thực hiện đến hết 31/12/2025, với hạn dùng gói quà tặng kéo dài đến hết 31/12/2026).",
        },
        {
          type: "paragraph",
          text: "Để kiểm tra chính xác quà tặng Roaming dành riêng cho số thuê bao của mình, bạn có thể soạn tin nhắn theo cú pháp: KT QT gửi 191 hoặc kiểm tra trong mục NINE trên ứng dụng My Viettel.",
        },
      ],
    },
  },
  "/tin-tuc/cap-nhat-goi-cuoc-GIC": {
    status: "ready",
    kind: "news-article",
    title: "Tổng Hợp Gói GIC Viettel Mới Nhất 2026: Giá Rẻ, Ưu Đãi Cực Khủng",
    description:
      "Cập nhật bảng giá chi tiết các gói GIC30N, GIC70N, GIC90N, GIC125N của Viettel. Hướng dẫn cú pháp đăng ký nhanh nhất và những lưu ý quan trọng để không bỏ lỡ ưu đãi.",
    heading:
      "Tại sao GIC Viettel vẫn là gói cước quốc dân dành cho HSSV năm 2026?",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/cap-nhat-goi-cuoc-GIC"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0129.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 76550a064f4672c7a8a008ba7edc3a06515d458ed067ae071616e51b58f570f0",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "22/01/2026",
      blocks: [
        {
          type: "paragraph",
          text: "Bạn là học sinh, sinh viên và đang tìm kiếm một gói cước siêu tiết kiệm, phù hợp với nhu cầu sử dụng của mình? Đừng bỏ lỡ GIC Viettel với giá cước chỉ từ 30.000đ/tháng.",
        },
        {
          type: "paragraph",
          text: "Khám phá thêm thông tin chi tiết về các gói cước, khuyến mại và dịch vụ Viettel trên Viettel – website cập nhật chính xác mọi thông tin về các gói data, internet.",
        },
        {
          type: "paragraph",
          text: "Cập nhật bảng giá chi tiết các gói GIC30N, GIC70N, GIC90N, GIC125N của Viettel, chỉ từ 30.000đ/tháng có ngay các ưu đãi cực lớn: gọi nội mạng, ngoại mạng, data, lướt mạng xã hội Tiktok, Youtube, Facebook, Instagram và Threads.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tại sao gói GIC Viettel lại gây sốt?",
        },
        {
          type: "paragraph",
          text: "Ra mắt từ năm 2023, với thông điệp “Đẫm data. Đậm cá tính”, hệ gói GIC đánh dấu bước tiến mới của Viettel trong hành trình kiến tạo các sản phẩm viễn thông cá nhân hóa cho thế hệ trẻ Việt Nam. Thay vì các gói cước đại trà, GIC tập trung vào nhu cầu và sở thích riêng biệt của người trẻ, giúp bạn tự do lựa chọn gói cước phù hợp nhất với phong cách sống của mình.",
        },
        {
          type: "heading",
          level: 2,
          text: "GIC Viettel phù hợp với ai?",
        },
        {
          type: "paragraph",
          text: "Dòng gói cước này được thiết kế dành riêng cho khách hàng trẻ trong độ tuổi từ 6 đến 22 tuổi (HSSV) có cường độ sử dụng smartphone cao, online liên tục và muốn một gói cước được thiết kế theo sở thích cá nhân: học tập, giải trí, mạng xã hội hay chơi game.",
        },
        {
          type: "paragraph",
          text: "Với mức giá linh hoạt từ 30.000đ – 125.000đ, GIC giúp các bạn dễ dàng chọn gói vừa túi tiền nhưng vẫn hưởng đặc quyền data, gọi và ưu đãi hấp dẫn.",
        },
        {
          type: "paragraph",
          text: "Đặc biệt, người dùng có thể tự do thiết kế lại gói cước mỗi tháng theo nhu cầu thực tế bằng các ưu đãi topping siêu lạ, không bị gò bó, không lãng phí, luôn phù hợp với nhịp sống năng động của giới trẻ.",
        },
        {
          type: "heading",
          level: 2,
          text: "Cập nhật chi tiết các gói cước GIC Viettel mới nhất 2026",
        },
        {
          type: "paragraph",
          text: "Để giúp bạn dễ dàng lựa chọn gói cước phù hợp với túi tiền và nhu cầu, dưới đây là bảng tổng hợp chi tiết các phiên bản của dòng GIC Viettel bao gồm GIC30N, GIC70N, GIC90N, GIC125N. Mỗi gói đều cung cấp tối đa tiện ích của 1 loại nhu cầu đặc thù: gọi nội mạng, ngoại mạng, data, lướt mạng xã hội Tiktok, Youtube, Facebook, Instagram và Threads. Hãy cùng xem gói cước nào phù hợp nhất cho điện thoại của bạn nhé!",
        },
        {
          type: "paragraph",
          text: "Đọc thêm: Gói cước Viettel tốt nhất dành cho sinh viên",
        },
        {
          type: "table",
          table: {
            headings: [],
            rows: [
              ["Tên gói cước", "Giá cước", "Ưu đãi", "Thời hạn"],
              [
                "GIC30N",
                "30.000đ",
                "- 200 phút gọi nội mạng Viettel (tối đa 10 phút cho mỗi cuộc gọi)- 10 phút gọi ngoại mạng",
                "30 ngày",
              ],
              [
                "GIC70N",
                "70.000đ",
                "- 1GB data mỗi ngày truy cập internet- Miễn phí sách, truyện trên Mydio",
                "30 ngày",
              ],
              [
                "GIC90N",
                "90.000đ",
                "- 1GB data mỗi ngày truy cập internet- Miễn phí Facebook, Threads, Instagram & TikTok- Miễn phí sách, truyện trên Mydio",
                "30 ngày",
              ],
              [
                "GIC125N",
                "125.000đ",
                "- 7GB data mỗi ngày- Miễn phí sách, truyện trên Mydio",
                "30 ngày",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Ưu đãi đặc biệt dành cho các gói cước GIC",
        },
        {
          type: "paragraph",
          text: "Nếu như bạn thường xuyên nhắn tin và gọi thoại nội mạng Viettel, cần bổ sung SMS, data hoặc gọi thoại ngoài gói chính. Vậy thì đi kèm với các gói cước GIC, Viettel tặng các ưu đãi topping đơn giản với chi phí thấp. Phù hợp cho liên lạc cá nhân, công việc hoặc khi cần nhiều data hơn một chút nhưng không muốn phải trả phí quá cao.",
        },
        {
          type: "paragraph",
          text: "Ưu đãi tặng kèm đồng giá 10.000 đồng",
        },
        {
          type: "paragraph",
          text: "Khách hàng GIC sẽ được đăng ký thêm loạt gói topping đồng giá 10.000 đồng sử dụng trong 30 ngày: 2GB data, 50 phút thoại, miễn phí Facebook/Threads/Instagram, miễn phí TikTok và miễn phí YouTube.",
        },
        {
          type: "table",
          table: {
            headings: [],
            rows: [
              ["Tên gói ưu đãi tặng kèm", "Giá cước", "Ưu đãi", "Thời hạn"],
              ["ST10K", "10.000đ", "- 1.000 SMS nội mạng Viettel", "30 ngày"],
              ["V10K", "10.000đ", "- 50 phút thoại nội mạng", "30 ngày"],
              [
                "MT10T",
                "10.000đ",
                "- 2GB data sử dụng trong 30 ngày",
                "30 ngày",
              ],
              [
                "TIK10",
                "10.000đ",
                "- Miễn phí data truy cập TikTok (Dung lượng tối đa 50GB trong 30 ngày)",
                "30 ngày",
              ],
              [
                "YT10",
                "10.000đ",
                "- Miễn phí data truy cập YouTube (Dung lượng tối đa 50GB trong 30 ngày)",
                "30 ngày",
              ],
              [
                "FB10",
                "10.000đ",
                "- Miễn phí data truy cập Facebook- Miễn phí Threads- Miễn phí Instagram(Dung lượng tối đa 50GB trong 30 ngày)",
                "30 ngày",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Quà tặng hàng tháng",
        },
        {
          type: "paragraph",
          text: "Khách hàng sẽ được gửi tặng quà mỗi tháng (*), gồm một trong năm ưu đãi: 10.000 đồng tài khoản khuyến mại, 2GB Data, miễn phí Facebook/Threads/Instagram, miễn phí TikTok, miễn phí YouTube",
        },
        {
          type: "paragraph",
          text: "Nhiều ưu đãi khác biệt",
        },
        {
          type: "paragraph",
          text: "Kho số riêng: Khách hàng mua SIM GIC trên website gic.viettel.vn được lựa chọn số từ kho số riêng đầu 09xx, 08xx với quy mô 100.000 số.",
        },
        {
          type: "paragraph",
          text: "Chính sách chăm sóc khách hàng linh hoạt theo chu kỳ: Khi đăng ký/gia hạn các gói GIC chu kỳ 3/6/12 tháng, khách hàng được nhận voucher viễn thông và voucher đối tác (20.000đ hoặc 30.000đ).",
        },
        {
          type: "paragraph",
          text: "(*): Áp dụng cho khách hàng có mức tiêu dùng từ 70.000 đồng/tháng",
        },
        {
          type: "heading",
          level: 2,
          text: "Cách đăng ký gói GIC Viettel nhanh nhất",
        },
        {
          type: "paragraph",
          text: "Dưới đây là các cách thức đăng ký gói cước GIC tiện lợi, ai cũng có thể thực hiện:",
        },
        {
          type: "paragraph",
          text: "Cách 1: Đăng ký qua tin nhắn SMS tới đầu số 290",
        },
        {
          type: "paragraph",
          text: "Cú pháp: [Gói cước] UP gửi 290 hoặc [Gói cước] gửi 191",
        },
        {
          type: "paragraph",
          text: "Ví dụ: GIC125N UP gửi 290",
        },
        {
          type: "paragraph",
          text: "Cách 2: Đăng ký qua app My Viettel",
        },
        {
          type: "heading",
          level: 2,
          text: "Những lưu ý khi sử dụng",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Gói cước có tính năng tự động gia hạn sau mỗi chu kỳ (30 ngày).",
            "Để kiểm tra dung lượng còn lại: Soạn KTTK gửi 191.",
            "Để hủy gói khi không còn nhu cầu: Soạn HUY gửi 191.",
          ],
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-5g-family": {
    status: "ready",
    kind: "news-article",
    title: "Cách đăng ký 5G Family Viettel: Giảm tới 20% cước cho cả nhà",
    description:
      "Chỉ với vài bước trên My Viettel, gia đình bạn sẽ nhận ngay chiết khấu cước di động lên đến 20% và quà tặng 10.000 điểm Viettel++. Xem ngay hướng dẫn xác thực nhóm 5G Family chi tiết tại đây!",
    heading:
      "Mẹo giảm đến 20% tiền điện thoại cho cả nhà với tính năng 5G Family trên My Viettel",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-5g-family"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0130.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 855e01227c5a963eea95c6d08f19ac7465cdf4f34a4f4a6bb005ad056a7e92c3",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "17/01/2026",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Viettel 5G Family – Giải pháp gắn kết gia đình thời đại số",
        },
        {
          type: "paragraph",
          text: "Trong bối cảnh công nghệ ngày càng len lỏi vào mọi ngóc ngách cuộc sống, Viettel Telecom vừa giới thiệu một sáng kiến mới mang tên Viettel 5g family – một giải pháp kết nối toàn diện dành cho gia đình và nhóm người thân. Đây không chỉ là sản phẩm công nghệ bình thường, mà là cầu nối số hóa giúp mọi thế hệ gần nhau hơn trong thời đại số.",
        },
        {
          type: "paragraph",
          text: "Viettel 5g family ưu đãi chiết khấu cước di động dành cho nhóm đã xác thực quan hệ gia đình lên tới 20%",
        },
        {
          type: "heading",
          level: 2,
          text: "Tại sao gia đình nên sử dụng Viettel 5G Family?",
        },
        {
          type: "paragraph",
          text: "Một trong những điểm đáng chú ý nhất của Viettel 5g family chính là ưu đãi chiết khấu cước di động dành cho nhóm đã xác thực quan hệ gia đình. Cụ thể:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhóm có 1 thành viên xác thực: Giảm 5% cước.",
            "Nhóm có 2 thành viên xác thực: Giảm 10% cước.",
            "Nhóm có 3 thành viên xác thực: Giảm 15% cước.",
            "Nhóm có từ 4 thành viên xác thực: Giảm tối đa 20% cước.",
            "Số lượng thành viên tối đa trong một nhóm là 6 thành viên (1 trưởng nhóm và 5 thành viên).",
          ],
        },
        {
          type: "paragraph",
          text: "Như vậy, người dùng Viettel 5G family có thể hưởng chiết khấu cước di động lên tới 20%.",
        },
        {
          type: "paragraph",
          text: "Ngoài ra, khách hàng tham gia nhóm thành công còn nhận được ưu đãi tặng 10.000 điểm Viettel++ vào ngay tài khoản My Viettel.",
        },
        {
          type: "paragraph",
          text: "Khách hàng truy cập vào tính năng “Quản lý hộ gia đình” trên ứng dụng My Viettel (phiên bản 7.27.1 trở lên) để thực hiện tạo/gom nhóm tại link: https://myviettel.go.link/vtplus-5g-family",
        },
        {
          type: "heading",
          level: 3,
          text: "Tiện ích hấp dẫn: thanh toán hộ và quyền lợi dùng chung",
        },
        {
          type: "paragraph",
          text: "Không chỉ dừng lại ở việc giảm cước, Viettel còn định hướng Viettel 5g family để hỗ trợ các tiện ích khác:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Thanh toán hộ cho các thành viên trong nhóm: giúp ông bà, cha mẹ dễ dàng sử dụng dịch vụ số.",
            "Chia sẻ các ưu đãi sử dụng chung như: data, TV360, Internet FTTH ngay trên một nền tảng.",
          ],
        },
        {
          type: "paragraph",
          text: "Tức là, giải pháp này không chỉ đơn thuần là gói cước hay một tính năng kỹ thuật, mà là cách để gia đình cùng tận hưởng công nghệ một cách trọn vẹn.",
        },
        {
          type: "heading",
          level: 2,
          text: "Hướng dẫn chi tiết cách sử dụng Viettel 5G Family",
        },
        {
          type: "paragraph",
          text: "Bước 1: Chuẩn bị và Cài đặt",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tất cả thành viên trong gia đình cần có thuê bao di động Viettel đang hoạt động.",
            "Tải hoặc cập nhật ứng dụng My Viettel phiên bản mới nhất trên smartphone.",
          ],
        },
        {
          type: "paragraph",
          text: "Bước 2: Tạo nhóm gia đình trên My Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            'Người đứng tên làm "Trưởng nhóm" (con cái, bố mẹ) truy cập vào tính năng 5G Family trên ứng dụng My Viettel.',
            "Nhập số điện thoại các thành viên trong gia đình để gửi lời mời tham gia nhóm.",
          ],
        },
        {
          type: "paragraph",
          text: "Bước 3: Xác thực mối quan hệ (Bước quan trọng để nhận giảm giá cước)",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Để nhận được mức chiết khấu lên đến 20%, các thành viên cần thực hiện xác thực mối quan hệ hộ gia đình thành công trên ứng dụng.",
            "Trưởng nhóm thực hiện theo hướng dẫn trên ứng dụng (có thể bao gồm chụp ảnh giấy tờ, xác nhận thông tin). Việc xác thực này giúp hệ thống nhận diện đây là một nhóm gia đình thực thụ để áp dụng chính sách chiết khấu cước di động hàng tháng.",
          ],
        },
        {
          type: "paragraph",
          text: "Bước 4: Tận hưởng ưu đãi và Quản lý dùng chung",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Hệ thống tự động áp dụng mức giảm cước tương ứng với số lượng thành viên đã xác thực thành công.",
            "Trưởng nhóm có thể thực hiện thanh toán hộ cước phí cho cả nhà hoặc chia sẻ các gói cước dùng chung để tối ưu chi phí.",
          ],
        },
      ],
    },
  },
  "/tin-tuc/goi-mang-viettel": {
    status: "ready",
    kind: "news-article",
    title:
      "Gói mạng Viettel 2025 | Bảng giá mới nhất, 5G tốc độ cao, nhiều ưu đãi",
    description:
      "Bảng giá gói mạng Viettel 2025 mới nhất: 5G/4G tốc độ cao, miễn phí mạng xã hội, gói ngày linh hoạt. Chọn gói mạng Viettel phù hợp, đăng ký nhanh, giá ưu đãi.",
    heading: "Chọn đúng gói mạng Viettel, trải nghiệm internet không giới hạn",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-mang-viettel"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0131.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 954b5a97ab689320ed403b694eacbfb183096dde8ee00c6052e7f671fe94df46",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "13/12/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Bảng giá gói mạng Viettel 2025 chi tiết nhất. 5G tốc độ cao, miễn phí mạng xã hội, gói ngày linh hoạt. Click ngay để tìm gói cước phù hợp với nhu cầu của bạn.",
        },
        {
          type: "paragraph",
          text: 'Muốn tiết kiệm cước phí nhưng vẫn đảm bảo chất lượng mạng? Viettel hiện có hàng loạt gói cước ưu đãi "cực hời" - data dồi dào, giá cả hợp lý, phù hợp từ sinh viên đến dân văn phòng lẫn các bạn trẻ học sinh sinh viên. Cùng tìm hiểu những gói mạng Viettel giá "mềm" nhất thị trường sau đây để dễ dàng lựa chọn cho nhu cầu của bạn.',
        },
        {
          type: "heading",
          level: 2,
          text: "Gói 5G tốc độ cao",
        },
        {
          type: "paragraph",
          text: "Kỷ nguyên 5G đã chính thức bùng nổ tại Việt Nam và Viettel tiếp tục khẳng định vị thế tiên phong với loạt gói mạng Viettel 5G siêu tốc độ. Các gói cước 5G được thiết kế với dung lượng data khủng từ 4GB đến 20GB mỗi ngày, đáp ứng hoàn hảo cho nhu cầu streaming, gaming online hay làm việc từ xa. Điểm nổi bật của dòng gói mạng Viettel này là khả năng kết nối siêu nhanh, độ trễ cực thấp,...",
        },
        {
          type: "table",
          table: {
            headings: [
              "Mã Gói",
              "Dung Lượng",
              "Tính Năng Đặc Biệt",
              "Giá Cước(VNĐ/tháng)",
            ],
            rows: [
              ["5G135", "4GB/ngày", "Gói cơ bản", "135.000đ"],
              ["5G150", "6GB/ngày", "Gói cơ bản", "150.000đ"],
              ["5G160B", "4GB/ngày", "Miễn phí gọi", "160.000đ"],
              ["5G180B", "6GB/ngày", "Miễn phí gọi", "180.000đ"],
              ["5G230B", "8GB/ngày", "Miễn phí gọi", "230.000đ"],
              ["5G280B", "10GB/ngày", "Miễn phí gọi", "280.000đ"],
              ["5G330B", "12GB/ngày", "Miễn phí gọi", "330.000đ"],
              ["5G380B", "15GB/ngày", "Miễn phí gọi", "380.000đ"],
              ["5G480B", "20GB/ngày", "Miễn phí gọi", "480.000đ"],
              ["5G135N", "6GB/ngày", "Gói cơ bản", "135.000đ"],
              ["5G150N", "8GB/ngày", "Gói cơ bản", "150.000đ"],
              ["5GLQ190", "6GB/ngày", "2GB/ngày Liên Quân", "190.000đ"],
              ["5GLQ210", "6GB/ngày", "2GB/ngày Liên Quân", "210.000đ"],
              ["5G200C", "6GB/ngày", "Miễn phí gọi", "200.000đ"],
              ["5G300C", "10GB/ngày", "Miễn phí gọi", "300.000đ"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói mạng Viettel 5G lướt mạng mượt mà, không độ trễ",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói mạng Viettel 4G- Lựa chọn thông minh cho mọi nhu cầu sử dụng",
        },
        {
          type: "paragraph",
          text: "Bên cạnh công nghệ 5G hiện đại, Viettel vẫn duy trì và phát triển mạnh mẽ hệ thống gói mạng 4G với chất lượng vượt trội. Mỗi gói cước đều được tối ưu hóa để mang lại trải nghiệm internet mượt mà, ổn định trên toàn quốc.",
        },
        {
          type: "table",
          table: {
            headings: [
              "Mã Gói",
              "Dung Lượng",
              "Giá Cước(VNĐ/tháng)",
              "Đặc Điểm",
            ],
            rows: [
              ["SD70", "1GB/ngày", "70.000đ", "Gói cơ bản tiết kiệm"],
              ["SD90", "1.5GB/ngày", "90.000đ", "Gói phổ thông"],
              ["SD120", "2GB/ngày", "120.000đ", "Gói cơ bản nâng cao"],
              ["SD135", "5GB/ngày", "135.000đ", "Gói cao cấp"],
              ["SD150", "3GB/ngày", "150.000đ", "Gói cao cấp"],
              ["VM80", "1GB/ngày", "80.000đ", "Gói đặc biệt"],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước miễn phí mạng xã hội",
        },
        {
          type: "paragraph",
          text: "Với các gói mạng Viettel dành riêng cho mạng xã hội, bạn có thể thoải mái lướt TikTok, xem YouTube hay nhắn tin qua Messenger mà không lo ngại về việc tiêu tốn dung lượng data thông thường - giải pháp hoàn hảo cho gen Z.",
        },
        {
          type: "table",
          table: {
            headings: [
              "Mã Gói",
              "Data Đi Kèm",
              "Giá Cước(VNĐ/tháng)",
              "Loại Mạng",
            ],
            rows: [
              ["MXH100", "1GB/ngày", "100.000đ", "4G"],
              ["MXH120", "1GB/ngày", "120.000đ", "4G"],
              ["MXH150", "1.5GB/ngày", "150.000đ", "4G"],
              ["5GMXH200", "2GB/ngày", "200.000đ", "5G"],
              ["5GMXH230", "3GB/ngày", "230.000đ", "5G"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Mạng 4G của Viettel được đông đảo khách lựa chọn hiện nay",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói mạng Viettel theo ngày linh hoạt cho nhu cầu internet tạm thời",
        },
        {
          type: "paragraph",
          text: "Các gói mạng Viettel theo ngày cung cấp dung lượng data lớn trong thời gian ngắn, phục vụ tốt nhu cầu internet cho khách hàng cần sử dụng trong khoảng thời gian cụ thể như du lịch, công tác hoặc các sự kiện đặc biệt.",
        },
        {
          type: "table",
          table: {
            headings: ["Mã Gói", "Dung lượng", "Giá Cước", "Thời gian sử dụng"],
            rows: [
              ["ST15K", "3GB", "15.000đ", "3 ngày"],
              ["MI20K", "2GB", "20.000đ", "5 ngày"],
              ["ST30K", "7GB", "30.000đ", "7 ngày"],
              ["EST30", "7GB", "30.000đ", "7 ngày"],
              ["V30X", "3.5GB", "30.000đ", "7 ngày"],
              ["MI50K", "5GB", "50.000đ", "7 ngày"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Các gói mạng hằng ngày linh hoạt theo nhu cầu siêu tiết kiệm",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước tổng hợp tiết kiệm và tiện lợi cho mọi đối tượng",
        },
        {
          type: "paragraph",
          text: "Tối ưu hóa chi phí viễn thông đã trở thành mối quan tâm hàng đầu của người tiêu dùng. Do đó, Viettel đã phát triển dòng sản phẩm gói cước tổng hợp nhằm đáp ứng nhu cầu đa dạng của khách hàng với tiêu chí siêu tiết kiệm và tiện lợi tối đa.",
        },
        {
          type: "paragraph",
          text: "Các gói cược cung cấp dung lượng data phù hợp với mức giá cạnh tranh, đồng thời tích hợp các tính năng bổ sung như miễn phí cuộc gọi nội mạng và ứng dụng đặc biệt. Ví dụ gói TRE60 và TRE90 dành riêng cho trẻ em, phụ huynh có thể yên tâm quản lý việc sử dụng internet của con em mình với chi phí hợp lý nhất.",
        },
        {
          type: "table",
          table: {
            headings: [
              "Mã Gói",
              "Dung lượng",
              "Giá Cước(VNĐ/tháng)",
              "Tính Năng Đặc Biệt",
            ],
            rows: [
              ["ST60N", "2GB/ngày", "60.000đ", "Dành cho sinh viên"],
              ["ST70K", "500MB/ngày", "70.000đ", "Gói tiết kiệm"],
              ["ST90N", "4GB/ngày", "90.000đ", "Dung lượng cao"],
              ["TRE90", "4GB/ngày", "90.000đ", "Dành cho sinh viên"],
              ["V120N", "4GB/ngày", "120.000đ", "Miễn phí nội mạng"],
              ["V120C", "2GB/ngày", "120.000đ", "Miễn phí nội mạng"],
              ["ST120K", "2GB/ngày", "120.000đ", "Gói cơ bản"],
              ["V150N", "6GB/ngày", "150.000đ", "Miễn phí nội mạng"],
              ["V150C", "3GB/ngày", "150.000đ", "Miễn phí nội mạng"],
              ["ST150K", "3GB/ngày", "150.000đ", "Gói cơ bản"],
              ["V200C", "4GB/ngày", "200.000đ", "Miễn phí nội mạng"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Với bảng giá gói mạng Viettel mới nhất, khách hàng có thể dễ dàng lựa chọn được gói cước phù hợp nhất với nhu cầu và ngân sách của mình. Với cam kết chất lượng dịch vụ hàng đầu và mạng lưới phủ sóng rộng khắp, sử dụng mạng Viettel chắc chắn sẽ mang đến trải nghiệm kết nối tuyệt vời cho mọi nhu cầu.",
        },
      ],
    },
  },
  "/tin-tuc/dung-5g-co-hao-pin-va-ton-data": {
    status: "ready",
    kind: "news-article",
    title:
      "Dùng 5G Có Hao Pin Và Tốn Data Hơn Không? Giải Đáp Cùng Chuyên Gia Viettel",
    description:
      "5G tốn pin hơn 4G khoảng 5% - 10% do xử lý tín hiệu. Sự thật về Data. Xem ngay 3 cách TẮT/Tối ưu 5G để tiết kiệm pin tối đa cho iPhone và Android!",
    heading:
      "SỰ THẬT: 5G Hao PIN và Tốn DATA Hơn 4G Bao Nhiêu? Chuyên gia VIETTEL Giải Đáp",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/dung-5g-co-hao-pin-va-ton-data"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0132.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 3d4528431e2a3c838b1cc3beb5f479d5c91d5675ed7d91fd31476edf0bca3765",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "8/12/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Rất nhiều người khi chuyển sang dùng 5G đều có chung nỗi lo: “Bật 5G có làm hao pin nhanh hơn không?” hoặc “Dùng mạng 5G có tốn nhiều data hơn 4G không?”. Điều này hoàn toàn dễ hiểu, vì sử dụng tốc độ cao hơn khiến người dùng lo rằng máy sẽ nóng nhanh, pin xuống nhanh và hết data trong thời gian ngắn.",
        },
        {
          type: "heading",
          level: 2,
          text: "Trả lời: 5G có thực sự tốn data hơn 4G không?",
        },
        {
          type: "paragraph",
          text: "Câu trả lời là KHÔNG. Nếu bạn sử dụng cùng một nội dung ở cùng mức chất lượng, dung lượng tiêu thụ của 5G và 4G là hoàn toàn như nhau. Sở dĩ có hiểu lầm này là vì 5G có tốc độ cực nhanh, nhưng cơ chế tiêu thụ dữ liệu vẫn dựa trên tệp tin bạn xem:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhu cầu cơ bản: Lướt Facebook, TikTok, xem YouTube Full HD... tốn dung lượng tương đương 4G.",
            "Cơ chế tải đệm: Các ứng dụng hiện nay chỉ tải trước một phần dữ liệu, không tải toàn bộ nên không gây lãng phí data.",
            "Sự khác biệt: Data chỉ tốn hơn khi bạn tận dụng tốc độ 5G để xem video 4K hoặc chơi game đồ họa nặng – những thứ mà 4G khó đáp ứng mượt mà.",
          ],
        },
        {
          type: "paragraph",
          text: "Chốt lại: 5G giúp trải nghiệm nhanh hơn, không phải tốn data hơn.",
        },
        {
          type: "heading",
          level: 2,
          text: "Trả lời: Dùng 5G có làm nóng máy và nhanh hết pin hơn 4G không?",
        },
        {
          type: "paragraph",
          text: "Thực tế, việc sử dụng 5G sẽ tiêu tốn pin hơn 4G khoảng 5% - 11% tùy vào dòng thiết bị. Tuy nhiên, tình trạng nóng máy và hao pin chỉ thực sự xảy ra trong các trường hợp cụ thể:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tải dữ liệu lớn: Khi bạn download các tệp tin hàng GB hoặc xem video chất lượng 4K liên tục, chip xử lý phải hoạt động tối đa công suất.",
            "Khu vực sóng yếu: Tương tự như 4G, khi tín hiệu chập chờn, điện thoại phải tăng cường tìm kiếm sóng khiến máy nóng lên.",
            "Tác vụ nhẹ: Nếu chỉ lướt Facebook, đọc báo hay xem YouTube Full HD, sự khác biệt về pin giữa 4G và 5G là không đáng kể.",
          ],
        },
        {
          type: "paragraph",
          text: 'Mẹo nhỏ: Bạn có thể bật chế độ "5G tự động" trên điện thoại để máy chỉ chuyển sang 5G khi cần thiết, giúp tối ưu thời lượng pin hiệu quả.',
        },
        {
          type: "heading",
          level: 2,
          text: "Giải Pháp: Cách Tối Ưu 5G để Tiết Kiệm Pin Tối Đa",
        },
        {
          type: "heading",
          level: 3,
          text: "3 Cách Tắt/Tối ưu 5G để Tiết kiệm PIN và Data Tối Đa",
        },
        {
          type: "paragraph",
          text: "1. Bật chế độ Tự động (5G Auto) trên iPhone (giải pháp tiết kiệm pin): Chế độ này cho phép điện thoại iPhone tự động chuyển giữa 5G và 4G tùy theo nhu cầu, giúp tiết kiệm pin đáng kể so với việc luôn bật 5G.​",
        },
        {
          type: "paragraph",
          text: '2. Chuyển về 4G thủ công khi Data không cần thiết (dành cho thiết bị Android): Bạn có thể vào Cài đặt > Mạng di động > Chế độ mạng, rồi chọn "4G" hoặc "3G" để tắt 5G khi không cần thiết, giúp giảm tiêu hao pin và data.',
        },
        {
          type: "paragraph",
          text: '3. Kiểm tra và Tắt các ứng dụng chạy ngầm (Background Data) trên cả hai hệ điều hành: Trên cả iOS và Android, vào Cài đặt > Dữ liệu di động hoặc Ứng dụng > Chọn ứng dụng > Tắt "Dữ liệu nền". Việc này giúp ngăn các ứng dụng ngốn data và hao pin khi không sử dụng.​',
        },
        {
          type: "heading",
          level: 3,
          text: "Khi nào nên sử dụng 5G?",
        },
        {
          type: "paragraph",
          text: "Chỉ bật 5G khi cần tốc độ cao, tải file lớn, livestream, hoặc chơi game online. Khi không cần thiết, nên chuyển về chế độ 4G hoặc tự động để tối ưu pin và data.",
        },
        {
          type: "heading",
          level: 2,
          text: "Những lý do nên nâng cấp từ 4G lên 5G Viettel",
        },
        {
          type: "paragraph",
          text: "Dưới đây là những lợi ích mà mạng 5G Viettel mang lại, giúp bạn dễ dàng đưa ra quyết định:",
        },
        {
          type: "paragraph",
          text: "Trải nghiệm tốc độ vượt trội:",
        },
        {
          type: "paragraph",
          text: "- Gói cước 5G sử dụng trên cả hạ tầng 4G. Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng còn lại trong ngày. Xem thêm: Cách bật 5G Viettel",
        },
        {
          type: "paragraph",
          text: "- Tải 1GB chỉ trong vài giây.",
        },
        {
          type: "paragraph",
          text: "- Không gián đoạn khi xem video trực tuyến hoặc chơi game online.",
        },
        {
          type: "paragraph",
          text: "Hỗ trợ công việc và học tập:",
        },
        {
          type: "paragraph",
          text: "- Làm việc từ xa, hội họp qua video call chất lượng cao mà không bị giật lag.",
        },
        {
          type: "paragraph",
          text: "- Tải và gửi tài liệu nhanh chóng, tiết kiệm thời gian.",
        },
        {
          type: "paragraph",
          text: "Ưu đãi hấp dẫn từ Viettel:",
        },
        {
          type: "paragraph",
          text: "- Gói cước 5G Viettel như 5G135, 5G150, 5G160B cung cấp dung lượng lớn (tới 120GB/tháng) và ưu đãi kèm theo như TV360 4K, data MyBox miễn phí.",
        },
        {
          type: "paragraph",
          text: "- Giá cước hợp lý chỉ từ 135K/tháng, phù hợp cho mọi nhu cầu.",
        },
        {
          type: "paragraph",
          text: "Dễ dàng chuyển đổi:",
        },
        {
          type: "paragraph",
          text: "- Không cần đổi SIM, chỉ cần đăng ký gói cước và bật 5G trên điện thoại.",
        },
        {
          type: "paragraph",
          text: "- Dịch vụ chăm sóc khách hàng tận tâm, hỗ trợ mọi lúc, mọi nơi (hotline: button 18008098)",
        },
        {
          type: "heading",
          level: 2,
          text: "Làm thế nào để kiểm tra và đăng ký 5G Viettel?",
        },
        {
          type: "paragraph",
          text: "Viettel đã có các điểm phủ sóng 5G tại 63 tỉnh thành Việt Nam.",
        },
        {
          type: "paragraph",
          text: "Ngoài ra, khách hàng có thể kiểm tra vùng phủ sóng 5G bằng ứng dụng Speedtest theo hướng dẫn:",
        },
        {
          type: "paragraph",
          text: "Bước 1: Tải ứng dụng Speedtest từ Google Play/App Store.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Mở ứng dụng, chọn biểu tượng Map (bản đồ) ở góc dưới.",
        },
        {
          type: "paragraph",
          text: "Bước 3: Chọn 5G ở góc trên bên phải để hiển thị vùng phủ sóng 5G.",
        },
        {
          type: "paragraph",
          text: "Bước 4: Khu vực phủ sóng 5G sẽ được hiển thị bằng màu xanh đậm.",
        },
        {
          type: "paragraph",
          text: "Bước 5: Nếu cần, nhấn Go để kiểm tra tốc độ mạng 5G tại vị trí hiện tại.",
        },
        {
          type: "paragraph",
          text: "Lưu ý: Đảm bảo điện thoại hỗ trợ 5G và SIM đã kích hoạt dịch vụ. Tắt Wi-Fi khi kiểm tra mạng di động.",
        },
        {
          type: "paragraph",
          text:
            "Khách hàng kiểm tra gói cước 5G phù hợp với thuê bao và đăng ký trực tiếp tại website chính thức viettel.vn. Hoặc click nút đăng ký trên " +
            siteConfig.hostname +
            " (hỗ trợ bạn soạn cú pháp SMS nhanh hơn)",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước 5G tiết kiệm",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G DATA", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "5G135",
                "4GB/ngàyMiễn phí TV360 4K20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G COMBO", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "5G160B",
                "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G230B",
                "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G280B",
                "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
                "280.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G330B",
                "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
                "330.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G380B",
                "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
                "380.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G480B",
                "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
                "480.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: [
              "GÓI 5G CAO CẤP",
              "ƯU ĐÃI",
              "ĐƠN GIÁ (tháng)",
              "ĐĂNG KÝ",
            ],
            rows: [
              [
                "5GLQ190",
                "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
                "190.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
                "210.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Nâng cấp ngay để tận hưởng 5G Viettel! 5G không chỉ nhanh hơn, mà còn giúp bạn kết nối ổn định, mượt mà và bắt kịp nhịp sống số hiện nay. Với chi phí dễ tiếp cận, nhiều ưu đãi kèm theo và vùng phủ sóng được mở rộng liên tục, đây chính là thời điểm hoàn hảo để bạn chuyển sang sử dụng 5G Viettel và tận hưởng chất lượng mạng vượt trội mỗi ngày.",
        },
        {
          type: "heading",
          level: 2,
          text: "Các câu hỏi thường gặp về 5G hao pin, tốn data",
        },
        {
          type: "paragraph",
          text: "Dùng 5G có hao pin không?",
        },
        {
          type: "paragraph",
          text: "Dùng 5G sẽ hao pin hơn so với 4G, mức độ hao khoảng 5-11% tùy thiết bị và cách sử dụng.",
        },
        {
          type: "paragraph",
          text: "5G tốn nhiều data hơn 4G không?",
        },
        {
          type: "paragraph",
          text: "5G không làm tốn data hơn 4G nếu dùng cùng nội dung và chất lượng, nhưng do tốc độ nhanh, người dùng thường xem video chất lượng cao hơn, dẫn đến tiêu thụ data nhiều hơn.",
        },
        {
          type: "paragraph",
          text: "Tại sao bật 5G máy lại nóng nhanh hơn?",
        },
        {
          type: "paragraph",
          text: "Bật 5G khiến máy nóng nhanh hơn vì thiết bị phải xử lý dữ liệu lớn, duy trì kết nối tần số cao và liên tục tìm kiếm tín hiệu, làm tăng nhiệt độ thiết bị.",
        },
        {
          type: "paragraph",
          text: "Lướt TikTok/YouTube bằng 5G có tốn data nhiều hơn?",
        },
        {
          type: "paragraph",
          text: "Nếu xem cùng chất lượng video, lượng data tiêu thụ không khác biệt so với 4G, nhưng nếu xem video độ phân giải cao hơn thì data sẽ “ngốn” nhiều hơn.",
        },
        {
          type: "paragraph",
          text: "Chênh lệch mức tiêu thụ pin giữa 4G và 5G là bao nhiêu?",
        },
        {
          type: "paragraph",
          text: 'Pin điện thoại dùng 5G sẽ cạn nhanh hơn khoảng 5-10% so với dùng 4G, đặc biệt khi bật chế độ "5G Only".',
        },
        {
          type: "paragraph",
          text: "Nên dùng 5G liên tục hay chỉ bật khi cần?",
        },
        {
          type: "paragraph",
          text: "Nên bật 5G khi cần tốc độ cao như livestream, chơi game hoặc tải nhanh, còn khi không cần thiết thì chuyển về chế độ tự động hoặc 4G để tiết kiệm pin.",
        },
        {
          type: "paragraph",
          text: "Cách tiết kiệm pin và data khi dùng 5G là gì?",
        },
        {
          type: "paragraph",
          text: "Chuyển sang chế độ tự động giữa 4G và 5G, tắt 5G khi không cần thiết, dùng Wi-Fi khi có thể, giảm độ sáng màn hình và đóng các ứng dụng chạy nền.",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-ngay-viettel": {
    status: "ready",
    kind: "news-article",
    title:
      "Đăng Ký 4G VIETTEL 1 NGÀY 5K: Cú Pháp Gói Cước Ngày Siêu Rẻ Mới Nhất",
    description:
      "Đăng ký 4G Viettel 1 ngày giá rẻ chỉ từ 5000Đ. Tổng hợp các gói 4G Viettel 1 ngày mới nhất 2025: data lớn, tốc độ cao, cách đăng ký nhanh nhất. Xem ngay!",
    heading:
      "Tổng Hợp Gói Cước Data 4G/5G Viettel 1 Ngày SIÊU RẺ MỚI NHẤT 2025 GIÁ CHỈ TỪ 5000Đ",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-ngay-viettel"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0133.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 0cfe72cfe823eb1ec61fbb1b90e1c5eb193d800ec4b2f6a1b2f96e8a6709d697",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "3/12/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Đăng ký 4G Viettel 1 ngày siêu tốc mới nhất 2025 giá chỉ từ 5000Đ",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Bạn đã dùng hết Data của gói tháng và cần Data gấp để hoàn thành công việc, học tập online, hoặc gửi tài liệu quan trọng trong 1-2 giờ cuối ngày?",
            "Bạn chuẩn bị đi công tác hoặc du lịch ngắn ngày (1-3 ngày) và không muốn lãng phí tiền đăng ký gói tháng?",
            "Mạng wifi ở nhà bạn đang gặp sự cố và cần dùng 4G/5G làm giải pháp thay thế khẩn cấp?",
            "Hoặc bạn chỉ có nhu cầu sử dụng Data vào một số ngày nhất định trong tháng?",
          ],
        },
        {
          type: "paragraph",
          text: "Hãy cùng chúng tôi khám phá ngay các gói cước hot nhất với data khủng, miễn phí gọi thoại và lướt Facebook, TikTok, YouTube. Đăng ký với cú pháp đơn giản và ưu đãi lớn dưới đây.",
        },
        {
          type: "paragraph",
          text: "Đăng ký 4G Viettel 1 ngày tiện lợi với cú pháp đơn giản, nhanh chóng",
        },
        {
          type: "heading",
          level: 2,
          text: "Bảng tổng hợp các gói 4G Viettel 1 ngày (Cập nhật mới nhất)",
        },
        {
          type: "paragraph",
          text: "Dưới đây là bảng tổng hợp chi tiết các gói cước 4G Viettel theo ngày phổ biến và được ưa chuộng nhất hiện nay giúp bạn dễ dàng so sánh và đưa ra lựa chọn (ST5K, 1N, FB5K, YT5K,...).",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Dung lượng", "Đơn giá", "Cú pháp"],
            rows: [
              ["ST5K", "500Mb/ngày", "5.000đ(1 ngày)", "ĐĂNG KÝĐăng ký"],
              ["5G10", "6GB tốc độ cao", "10.000đ(1 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "1N",
                "5GB/ngàyMiễn phí gọi nội mạng <10 phút, 5 phút ngoại mạng",
                "10.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GVS12",
                "6GB/ngàyMiễn phí data xem TV360 4K",
                "12.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["ST7K", "1GB/ngày", "7.000đ(1 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "FB5K",
                "15GB dùng Facebook + Messenger",
                "5.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["YT5K", "15GB dùng YouTube", "5.000đ(1 ngày)", "YT5K gửi 191"],
              ["T5K", "15GB dùng TikTok", "5.000đ(1 ngày)", "T5K gửi 191"],
              [
                "KS8",
                "1.5GB/ngày",
                "7.600đ (Giá gốc 8.000đ)(1 ngày)",
                "Truy cập Viettel Money",
              ],
              [
                "KS12",
                "2.5GB/ngày",
                "11.4000đ (Giá gốc 12.000đ)(1 ngày)",
                "Truy cập Viettel Money",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Lưu ý quan trọng:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Các gói KS8 và KS12 là ưu đãi độc quyền chỉ có thể đăng ký thông qua ứng dụng Viettel Money và không sử dụng cú pháp SMS thông thường.",
            "Tất cả các gói cước trên đều có tính năng tự động gia hạn sau mỗi 24 giờ. Nếu bạn không còn nhu cầu sử dụng hãy chủ động hủy gia hạn để tránh phát sinh chi phí không mong muốn.",
          ],
        },
        {
          type: "paragraph",
          text: "Các gói cước Viettel theo ngày với data tốc độ cao",
        },
        {
          type: "heading",
          level: 2,
          text: "Hướng dẫn lựa chọn gói cước 4G Viettel phù hợp với nhu cầu",
        },
        {
          type: "paragraph",
          text: "Với nhiều lựa chọn như vậy, làm thế nào để tìm ra gói cước tối ưu nhất? Dưới đây là những bí quyết hữu ích giúp bạn lựa chọn được gói cước dựa trên nhu cầu thực tế:",
        },
        {
          type: "heading",
          level: 3,
          text: "Nhóm gói Data phổ thông – Ưu tiên tốc độ và dung lượng cao",
        },
        {
          type: "paragraph",
          text: "Nếu nhu cầu của bạn là truy cập internet đa nền tảng (lướt web, đọc tin tức, kiểm tra email, dùng Zalo, học online qua Zoom, xem video...), các gói data phổ thông là sự lựa chọn hàng đầu.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "ST5K (5.000đ/ngày, 500Mb): Mức giá rẻ nhất, là lựa chọn lý tưởng nếu bạn đang cần gấp data. Lưu ý gói data này sẽ hết rất nhanh nếu bạn sử dụng để xem video hay các tác vụ tốn nhiều dung lượng khác (họp, chơi game,...).",
            '5G10 (10.000đ/ngày, 6GB): Đây là gói cước "quốc dân" với dung lượng lên đến 6GB đủ sức đáp ứng mọi nhu cầu sử dụng cường độ cao trong ngày như xem phim Full HD, livestream, tải tệp lớn hay video call. Việc đăng ký qua SMS cực kỳ đơn giản và nhanh chóng.',
            '1N (10.000đ/ngày, 5GB + phút gọi): Gói 1N là giải pháp "2 trong 1" hoàn hảo. Với 5GB data và ưu đãi miễn phí các cuộc gọi nội mạng dưới 10 phút cùng 5 phút gọi ngoại mạng, gói cước này cực kỳ tiện lợi cho những ai cần liên lạc nhiều trong ngày mà vẫn muốn có data dồi dào để làm việc và giải trí.',
            "ST7K (7.000đ/ngày, 1GB): Với mức giá siêu rẻ, ST7K là lựa chọn lý tưởng cho học sinh, sinh viên hoặc những người chỉ có nhu cầu lướt web nhẹ nhàng, nhắn tin, đọc báo. 1GB data là đủ cho các tác vụ cơ bản trong ngày.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Nhóm Gói Cước Độc Quyền KS Viettel Money (KS8, KS12...)",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "KS8 (7.600đ/ngày, 1.5GB): Phù hợp nhất cho những ngày bạn cần Data gấp để check mail, lướt web nhẹ nhàng. Dễ dàng đăng ký qua Viettel Money.",
            "KS12 (11.4000đ/ngày, 2.5GB): Phù hợp cho ngày bạn cần xem video, livestream hoặc học online. Dễ dàng đăng ký qua Viettel Money.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Nhóm gói Data chuyên biệt – Tối ưu cho mạng xã hội và giải trí",
        },
        {
          type: "paragraph",
          text: "Nếu phần lớn thời gian trực tuyến của bạn chỉ tập trung vào một ứng dụng duy nhất, các gói chuyên biệt này sẽ giúp bạn tiết kiệm chi phí một cách tối đa.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "FB5K (5.000đ, 15GB cho Facebook & Messenger): Dành riêng cho các tín đồ của Facebook.",
            'YT5K (5.000đ, 15GB cho YouTube): Thỏa sức "cày view" mà không lo hết dung lượng.',
            'T5K (5.000đ, 15GB cho TikTok): Lướt "tóp tóp" cả ngày không giới hạn.',
          ],
        },
        {
          type: "paragraph",
          text: "Lưu ý: Ưu điểm về giá và dung lượng của các gói này đi kèm một hạn chế quan trọng. Dung lượng 15GB chỉ có thể sử dụng trên ứng dụng được chỉ định. Bạn sẽ không thể truy cập các trang web hay ứng dụng khác. Do đó, hãy cân nhắc kỹ nhu cầu trước khi đăng ký.",
        },
        {
          type: "heading",
          level: 3,
          text: "Nhóm gói Combo",
        },
        {
          type: "list",
          ordered: false,
          items: [
            '5GVS12 (12.000đ/ngày, 6GB + miễn phí TV360 4K): Đây là gói cước "đo ni đóng giày" cho những ai yêu thích xem phim và các chương trình truyền hình trên ứng dụng TV360. Ngoài việc được miễn phí toàn bộ data khi xem TV360, bạn còn có thêm 6GB data tốc độ cao để sử dụng cho các mục đích khác.',
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Tại sao gói 4G Viettel 1 ngày là lựa chọn thông minh?",
        },
        {
          type: "paragraph",
          text: "Sự linh hoạt trong sử dụng và khả năng tiết kiệm chi phí tối đa là hai lý do chính khiến ngày càng nhiều người dùng Viettel lựa chọn các gói cước 4G theo ngày thay vì các gói tháng cố định. Các gói cước này đặc biệt hữu ích trong những tình huống phát sinh nhu cầu data đột xuất hoặc ngắn hạn.",
        },
        {
          type: "paragraph",
          text: 'Hãy tưởng tượng bạn đang đi công tác ngắn ngày, du lịch cuối tuần, hoặc cần dung lượng lớn để tham gia một buổi họp trực tuyến quan trọng mà Wi-Fi tại chỗ không ổn định. Thay vì lãng phí tiền bạc vào một gói cước tháng, bạn chỉ cần bỏ ra từ 5.000đ đến 12.000đ để có ngay một lượng data "siêu khủng" đủ dùng trong 24 giờ.',
        },
        {
          type: "paragraph",
          text: "Những ưu điểm vượt trội của gói 4G Viettel 1 ngày:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Không ràng buộc lâu dài, chủ động chi tiêu: Bạn chỉ trả tiền khi có nhu cầu sử dụng giúp kiểm soát hoàn toàn chi tiêu viễn thông. Không còn nỗi lo về cước phí hàng tháng khi bạn không dùng hết dung lượng.",
            "Đa dạng gói cước, đáp ứng mọi nhu cầu: Viettel cung cấp một danh mục phong phú các gói cước từ các gói data phổ thông để truy cập toàn bộ internet, các gói chuyên biệt cho mạng xã hội (Facebook, YouTube, TikTok) cho đến các gói combo kết hợp cả data và phút gọi.",
            "Đăng ký dễ dàng, nhanh chóng: Chỉ với một cú pháp tin nhắn SMS đơn giản gửi đến tổng đài 191 hoặc UP gửi 290, bạn đã có thể kích hoạt thành công gói cước và sử dụng ngay lập tức.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Hướng dẫn đăng ký và hủy gói 4G Viettel 1 ngày",
        },
        {
          type: "paragraph",
          text: "Cách 1: Đăng ký qua tin nhắn SMS (áp dụng cho hầu hết các gói)",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Chọn gói cước: Xác định gói cước bạn muốn đăng ký (ví dụ: 5G10).",
            "Soạn tin nhắn: Soạn tin theo cú pháp TÊN_GÓI và gửi đến 191. Ví dụ: Soạn 5G10 gửi 191.",
            "Xác nhận: Chờ tin nhắn từ tổng đài Viettel xác nhận đăng ký thành công.",
            "Sử dụng: Bật dữ liệu di động 4G/5G trên điện thoại và bắt đầu trải nghiệm.",
          ],
        },
        {
          type: "paragraph",
          text: "Cách 2: Đăng ký qua ứng dụng Viettel Money (áp dụng cho KS8, KS12)",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Mở và đăng nhập vào ứng dụng Viettel Money.",
            'Tại màn hình chính, tìm và chọn mục "Viễn thông" hoặc "Gói cước Data".',
            'Chọn gói cước bạn muốn (KS8 hoặc KS12) và nhấn "Đăng ký".',
            "Xác nhận giao dịch để hoàn tất.",
          ],
        },
        {
          type: "paragraph",
          text: "Cách hủy gia hạn khi không còn nhu cầu",
        },
        {
          type: "paragraph",
          text: "Để tránh bị trừ tiền vào ngày hôm sau, bạn cần chủ động hủy tính năng tự động gia hạn.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Soạn tin nhắn theo cú pháp: HUY TÊN_GÓI gửi 191. Ví dụ: Để hủy gói 5G10, soạn HUY 5G10 gửi 191.",
            "Bạn cũng có thể truy cập ứng dụng My Viettel hoặc Viettel Money để thực hiện hủy gia hạn trong mục quản lý gói cước.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Câu hỏi thường gặp khi đăng ký 4G Viettel 1 ngày",
        },
        {
          type: "paragraph",
          text: "Gói 1 ngày có tự động gia hạn không?",
        },
        {
          type: "paragraph",
          text: "Có, hầu hết các gói cước 1 ngày của Viettel đều tự động gia hạn sau 24 giờ. Hãy nhớ hủy nếu bạn chỉ có nhu cầu dùng một lần.",
        },
        {
          type: "paragraph",
          text: "Nếu dùng hết dung lượng tốc độ cao trước 24 giờ thì sao?",
        },
        {
          type: "paragraph",
          text: "Tùy theo quy định của từng gói, hệ thống sẽ ngừng truy cập internet hoặc bắt đầu tính cước phát sinh theo gói dữ liệu mặc định của bạn. Để kiểm tra dung lượng còn lại, hãy soạn: KTTK gửi 191.",
        },
        {
          type: "paragraph",
          text: "Tôi có thể đăng ký nhiều gói 1 ngày cùng lúc không?",
        },
        {
          type: "paragraph",
          text: "Bạn có thể đăng ký nhiều gói, nhưng để quản lý hiệu quả, bạn nên sử dụng hết dung lượng của gói này rồi mới đăng ký gói mới.",
        },
        {
          type: "paragraph",
          text: "Thuê bao nào có thể đăng ký các gói này?",
        },
        {
          type: "paragraph",
          text: "Hầu hết tất cả thuê bao Viettel trả trước và trả sau đang hoạt động hai chiều đều có thể đăng ký thành công.",
        },
        {
          type: "paragraph",
          text: "Các gói cước KS (KS8, KS12) đăng ký ở đâu?",
        },
        {
          type: "paragraph",
          text: 'Các gói cước KS là gói độc quyền và chỉ có thể đăng ký thông qua ứng dụng Viettel Money. Bạn chỉ cần truy cập ứng dụng, tìm mục "Đăng ký gói cước" và chọn gói KS bạn cần (như KS8 hoặc KS12).',
        },
        {
          type: "paragraph",
          text: "Đăng ký 4G Viettel 1 ngày không chỉ mang lại sự linh hoạt trong việc sử dụng internet mà còn giúp bạn kiểm soát chi phí hiệu quả. Với đa dạng lựa chọn từ 5.000đ đến 12.000đ/ngày, bạn hoàn toàn có thể tìm được gói cước phù hợp với nhu cầu và túi tiền của mình. Hãy lựa chọn thông minh để tận hưởng trải nghiệm Internet tốc độ cao mọi lúc mọi nơi.",
        },
        {
          type: "paragraph",
          text: "Tham khảo: Gói cước 4G 5G Viettel cập nhật tháng 12/2025",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-viettel-thang-06-2025": {
    status: "ready",
    kind: "news-article",
    title:
      "Gói cước Viettel tháng 06/2025 mới nhất | Ưu đãi 4G/5G, Combo thoại + Data",
    description:
      "Tổng hợp gói cước Viettel tháng 06/2025 mới nhất: gói 4G/5G theo ngày, tháng, gói combo thoại + data, mạng xã hội, game. Đăng ký dễ dàng, nhiều ưu đãi. Xem ngay!",
    heading: "Đăng ký 4G 5G Viettel data khủng, giá rẻ cập nhật mới nhất",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-viettel-thang-06-2025"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0134.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: cb894e519cae9e29012edec68717a59a7c89783e1b76b6761e6f93aa529fadd1",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "09/06/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Cập nhật cách đăng ký 4G 5G Viettel và danh sách các gói combo, data khủng, miễn phí TikTok, Youtube. Đăng ký mạng Viettel siêu tốc, ổn định chỉ từ 90.000đ/tháng",
        },
        {
          type: "paragraph",
          text: "Viettel là một trong những nhà mạng hàng đầu tại Việt Nam cung cấp đa dạng các gói cước 4G và 5G phù hợp với nhu cầu sử dụng của từng khách hàng. Với hạ tầng mạng hiện đại và tốc độ kết nối ổn định, Viettel đã trở thành lựa chọn tin cậy của hàng triệu người dùng trên toàn quốc. Khám phá ngay các gói cước đăng ký 4G 5G Viettel với data khủng và giá tốt nhất hiện nay.",
        },
        {
          type: "paragraph",
          text: "Đăng ký 4G 5G Viettel trải nghiệm ngay các gói kết nối Internet data khủng mọi lúc mọi nơi",
        },
        {
          type: "heading",
          level: 2,
          text: "Tại sao cần đăng ký 4G 5G Viettel?",
        },
        {
          type: "paragraph",
          text: "Nhu cầu sử dụng dữ liệu di động ngày càng tăng cao, từ việc lướt web, xem video, chơi game trực tuyến đến làm việc và học tập từ xa. Đăng ký 4G 5G Viettel mang lại nhiều lợi ích thiết thực: như:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tốc độ truy cập vượt trội: Công nghệ 4G và đặc biệt là 5G cung cấp tốc độ tải xuống và tải lên nhanh hơn nhiều lần so với 3G giúp giảm thiểu độ trễ, mang lại trải nghiệm mượt mà cho các ứng dụng đòi hỏi băng thông cao.",
            "Đa dạng lựa chọn gói cước: Viettel cung cấp các gói cước đa dạng phù hợp với mọi đối tượng người dùng và mọi túi tiền từ các gói ngày, tuần đến các gói tháng, năm với dung lượng và ưu đãi khác nhau.",
            "Chất lượng dịch vụ ổn định: Với hạ tầng mạng lưới được đầu tư mạnh mẽ, Viettel đảm bảo chất lượng kết nối ổn định và vùng phủ sóng rộng khắp cả nước.",
            "Tiết kiệm chi phí: Sử dụng các gói cước dữ liệu thường tiết kiệm hơn so với việc dùng dữ liệu theo dung lượng phát sinh đặc biệt với những người có nhu cầu sử dụng internet thường xuyên.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Những điều cần biết trước khi đăng ký gói cước Viettel",
        },
        {
          type: "paragraph",
          text: "Trước khi quyết định đăng ký 4G 5G Viettel, người dùng cần lưu ý một số yếu tố để đảm bảo quá trình diễn ra suôn sẻ và gói cước được sử dụng hiệu quả:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "SIM hỗ trợ 4G/5G: Để sử dụng dịch vụ 4G/5G, thuê bao cần sử dụng USIM (SIM 4G). Hầu hết các SIM Viettel hiện tại đều là USIM. Nếu đang dùng SIM cũ, người dùng có thể đến các cửa hàng Viettel để đổi SIM.",
            "Thiết bị tương thích: Điện thoại hoặc thiết bị cần có hỗ trợ kết nối 4G LTE. Để trải nghiệm 5G, thiết bị phải hỗ trợ mạng 5G.",
            "Kiểm tra vùng phủ sóng: Mặc dù Viettel có vùng phủ sóng rộng, đặc biệt là 4G nhưng mạng 5G hiện vẫn đang trong giai đoạn triển khai và có thể chỉ khả dụng ở một số khu vực nhất định. Người dùng nên kiểm tra thông tin vùng phủ sóng 5G trên website của Viettel hoặc qua tổng đài.",
            "Xác định thuê bao đủ điều kiện đăng ký: Một số gói cước ưu đãi có thể chỉ áp dụng cho các thuê bao nhất định (ví dụ: thuê bao mới, thuê bao nhận được tin nhắn mời tham gia). Để biết thuê bao của mình có thể đăng ký những gói cước nào, người dùng có thể kiểm tra qua ứng dụng My Viettel, website Viettel Telecom hoặc bằng cách gọi *098# và làm theo hướng dẫn. Việc này giúp tránh trường hợp đăng ký không thành công do thuê bao không thuộc đối tượng áp dụng của gói.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Khám phá chi tiết các gói cước 4G/5G Viettel phổ biến",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp một hệ sinh thái gói cước vô cùng đa dạng đáp ứng các nhu cầu sử dụng khác nhau. Dưới đây là một số nhóm gói cước tiêu biểu :",
        },
        {
          type: "heading",
          level: 3,
          text: "Tổng hợp các gói cước 5G Viettel",
        },
        {
          type: "paragraph",
          text: "Gói 5G ngắn hạn",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp các gói 5G ngắn hạn từ 1-7 ngày với dung lượng data hấp dẫn. Gói 5G10 với giá 10.000đ cho 6GB trong 1 ngày, gói 5G30 với 30.000đ cho 21GB trong 3 ngày (7GB/ngày) và gói 5G70 với 70.000đ cho 56GB trong 7 ngày (8GB/ngày). Các gói này phù hợp cho những người dùng có nhu cầu sử dụng data cao trong thời gian ngắn.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Dung lượng", "Giá cước", "Đăng ký"],
            rows: [
              [
                "5G10",
                "6GB sử dụng đến 24h",
                "10.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["5G30", "21GB (7GB/ngày)", "30.000đ (3 ngày)", "ĐĂNG KÝĐăng ký"],
              ["5G70", "56GB (8GB/ngày)", "70.000đ (7 ngày)", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói 5G tháng với ưu đãi đặc biệt",
        },
        {
          type: "paragraph",
          text: "Các gói 5G tháng của Viettel không chỉ cung cấp dung lượng data lớn mà còn đi kèm nhiều ưu đãi hấp dẫn. Gói 5G135 (135.000đ/tháng) cung cấp 120GB với 4GB/ngày kèm theo miễn phí xem TV360 4K và 20GB lưu trữ Mybox.",
        },
        {
          type: "paragraph",
          text: "Đặc biệt, các gói 5G160B, 5G180B không chỉ cung cấp data 5G tốc độ cao mà còn bao gồm gọi thoại miễn phí nội mạng dưới 10-20 phút, phút gọi ngoại mạng từ 100-300 phút, TV360 4K và dung lượng lưu trữ Mybox từ 20GB.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G135",
                "4GB/ngày- Miễn phí TV360 4K- 20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G135N (mới)",
                "6GB/ngày- Miễn phí TV360 4K- 20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngày- Miễn phí TV360 4K- 30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150N (mới)",
                "8GB/ngày- Miễn phí TV360 4K- 30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Các gói 5G Viettel tặng kèm các ưu đãi gọi thoại nội, ngoại mạng",
        },
        {
          type: "paragraph",
          text: "Gói 5G dành cho game thủ",
        },
        {
          type: "paragraph",
          text: "Viettel đặc biệt chú trọng đến cộng đồng game thủ với gói 5GLQ210 và 5GLQ190 dành riêng cho người chơi Liên Quân Mobile. Các gói này cung cấp 2GB data miễn phí mỗi ngày để chơi game, kèm theo data chính và các ưu đãi khác.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Dung lượng", "Đơn giá", "Đăng ký"],
            rows: [
              [
                "5GLQ190",
                "180GB (6GB/ngày)Miễn phí 2GB/ngày chơi Liên Quân Mobile.TV360 Basic.30GB Mybox.",
                "190.000đ (1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "180GB (6GB/ngày)Miễn phí 2GB/ngày chơi Liên Quân MobileMiễn phí gọi nội mạng <20 phút, 100 phút gọi ngoại mạng.TV360 Basic.30GB Mybox.",
                "210.000đ (1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Lộ trình triển khai 5G của Viettel",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 4G đa dạng",
        },
        {
          type: "paragraph",
          text: "Gói cước cơ bản",
        },
        {
          type: "paragraph",
          text: "Đối với những khách hàng có nhu cầu sử dụng cơ bản, Viettel cung cấp các gói như ST15K (15.000đ cho 3GB trong 3 ngày), MI20K (20.000đ cho 2GB trong 5 ngày) và ST30K (30.000đ cho 7GB trong 7 ngày). Các gói này phù hợp cho việc nhắn tin, gọi điện và sử dụng internet cơ bản.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Dung lượng", "Đơn giá", "Đăng ký"],
            rows: [
              ["ST15K", "3GB/3 ngày", "15.000đ", "ĐĂNG KÝĐăng ký"],
              ["MI20K", "2GB/5 ngày", "20.000đ", "ĐĂNG KÝĐăng ký"],
              ["ST30K", "7GB/7 ngày", "30.000đ", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước tháng phổ biến",
        },
        {
          type: "paragraph",
          text: "Các gói cước tháng như SD70 (70.000đ cho 30GB), SD90 (90.000đ cho 45GB), SD135 (135.000đ cho 150GB) và V90B (90.000đ cho 30GB kèm gọi thoại) là những lựa chọn phổ biến nhất. Những gói này cung cấp đủ data cho nhu cầu sử dụng hàng ngày và có giá cả hợp lý.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Dung lượng", "Đơn giá", "Đăng ký"],
            rows: [
              ["SD70", "30GB (1GB/ngày)", "70.000đ", "ĐĂNG KÝĐăng ký"],
              ["SD90", "45GB (1.5GB/ngày)", "90.000đ", "ĐĂNG KÝĐăng ký"],
              ["SD135", "150GB (5GB/ngày)", "135.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "V90B",
                "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng <10phút và 30 phút gọi ngoại mạng",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước mạng xã hội",
        },
        {
          type: "paragraph",
          text: "Hiểu được xu hướng sử dụng mạng xã hội của người dùng trẻ, Viettel ra mắt các gói MXH100, MXH120, MXH150 với ưu đãi miễn phí data truy cập TikTok, YouTube, Facebook và Messenger. Đây là giải pháp tối ưu cho những ai thường xuyên sử dụng các nền tảng này.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước chuyên biệt",
        },
        {
          type: "paragraph",
          text: "Gói cước TV và giải trí",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp nhiều gói cước tích hợp dịch vụ TV360 như TV35K, TV65K, TV125K với các gói TV360 Standard hoặc 4K. Đặc biệt, gói TH30 với 50.000đ/tháng cung cấp data không giới hạn để xem TV360 Standard.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              ["TH30", "Miễn phí TV360 4K", "50.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "TV75K",
                "1GB/ngày- Miễn phí TV360 4K",
                "75.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV90C",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV120C",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV125K",
                "2GB/ngày- Miễn phí TV360 4K",
                "125.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước nghe sách nói Mydio",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              [
                "VM80",
                "30GB (1GB/ngày)Miễn phí nghe toàn bộ MyDio",
                "80.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "VM100",
                "45GB (1.5GB/ngày)Miễn phí nghe toàn bộ MyDio",
                "100.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "VM130",
                "60GB (2GB/ngày)Miễn phí nghe toàn bộ MyDio",
                "130.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước ứng dụng riêng lẻ",
        },
        {
          type: "paragraph",
          text: "Đối với những người dùng chỉ sử dụng một số ứng dụng cụ thể, Viettel cung cấp các gói chuyên biệt như FB5K, YT5K, T5K (5.000đ/ngày cho 15GB data ứng dụng tương ứng) và các gói tuần, tháng cho Facebook, YouTube, TikTok.",
        },
        {
          type: "paragraph",
          text: "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "T5K",
                "15GB truy cập TikTok trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T15K",
                "25GB truy cập TikTok trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "T50K",
                "50GB truy cập TikTok trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB5K",
                "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB15K",
                "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB50K",
                "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT5K",
                "15GB truy cập Youtube trong 1 ngày",
                "5.000đ (1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT15K",
                "25GB truy cập Youtube trong 7 ngày",
                "15.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT50K",
                "50GB truy cập Youtube trong 30 ngày",
                "50.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước dài hạn",
        },
        {
          type: "paragraph",
          text: "Đối với những khách hàng muốn cam kết dài hạn, Viettel có các gói 90N (3 tháng), 180N (6 tháng) và 360N (12 tháng) với mức giá ưu đãi và data 5GB/ngày ổn định.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "30N",
                "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "300.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "90N",
                "450GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "900.000đ (3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "180N",
                "900GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "1.800.000đ (6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "360N",
                "1.800GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "3.600.000đ (1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước 4G tháng khác",
        },
        {
          type: "paragraph",
          text: "Các gói cước tháng như ST60N (60.000đ cho 60GB), ST90N (90.000đ cho 120GB), V120N (120.000đ cho 120GB kèm gọi thoại) và V150N (150.000đ cho 180GB kèm gọi thoại) là những lựa chọn phổ biến nhất. Những gói này cung cấp đủ data cho nhu cầu sử dụng hàng ngày và có giá cả hợp lý.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Dung lượng", "Đơn giá", "Đăng ký"],
            rows: [
              ["ST60N", "60GB (2GB/ngày)", "60.000đ", "ĐĂNG KÝĐăng ký"],
              ["ST90N", "120GB (4GB/ngày)", "90.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "TRE60",
                "60GB (2GB/ngày)Miễn phí data TikTok",
                "60.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TRE90",
                "120GB (4GB/ngày)Miễn phí data TikTok",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "ST120K",
                "60GB (2GB/ngày)Miễn phí xem TV360, 25GB LifeBox",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120C",
                "60GB (2GB/ngày)Miễn phí gọi nội mạng <20 phút, 100 phút gọi ngoại mạng",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "ST150K",
                "90GB (3GB/ngày)Miễn phí xem TV360, 25GB LifeBox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150C",
                "90GB (3GB/ngày)Miễn phí gọi nội mạng <20 phút, 100 phút gọi ngoại mạng",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120N",
                "120GB (4GB/ngày)Miễn phí gọi nội mạng <20 phút, 100 phút gọi ngoại mạng",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150N",
                "180GB (6GB/ngày)Miễn phí gọi nội mạng <20 phút, 100 phút gọi ngoại mạng",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200C",
                "120GB (4GB/ngày)Miễn phí gọi nội mạng <20 phút, 100 phút gọi ngoại mạng",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "4 Cách đăng ký 4G 5G Viettel chi tiết cho từng loại gói",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp nhiều phương thức đăng ký gói cước nhằm tạo sự thuận tiện tối đa và phù hợp với nhiều đối tượng người dùng khác nhau:",
        },
        {
          type: "heading",
          level: 3,
          text: "Đăng ký qua SMS",
        },
        {
          type: "paragraph",
          text: "Hầu hết các gói cước của Viettel đều có thể đăng ký qua cú pháp tin nhắn chung: UP gửi 290. Ví dụ, để đăng ký gói ST90N người dùng soạn tin nhắn: ST90N UP gửi 290. Sau khi gửi tin nhắn, tổng đài sẽ gửi lại thông báo xác nhận đăng ký thành công hoặc không thành công (kèm lý do).",
        },
        {
          type: "heading",
          level: 3,
          text: "Đăng ký qua ứng dụng My Viettel",
        },
        {
          type: "paragraph",
          text: "My Viettel là ứng dụng quản lý tài khoản và dịch vụ di động toàn diện của Viettel. Người dùng có thể:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tải ứng dụng My Viettel từ App Store (iOS) hoặc Google Play Store (Android).",
            "Đăng nhập bằng số điện thoại Viettel.",
            'Trong ứng dụng, tìm đến mục "Gói cước" hoặc "Data".',
            'Lựa chọn gói cước phù hợp và nhấn "Đăng ký". Ứng dụng My Viettel cũng là một kênh để kiểm tra dung lượng còn lại của gói cước.',
          ],
        },
        {
          type: "paragraph",
          text: 'Lưu ý: Một số gói cước, đặc biệt là dòng "KS" (ví dụ: KS2H, KS6H, KS8, KS20), yêu cầu người dùng phải thực hiện đăng ký thông qua ứng dụng Viettel Money. Đây là một chiến lược nhằm khuyến khích người dùng cài đặt và sử dụng ứng dụng dịch vụ tài chính số này của Viettel. Nếu quan tâm đến các gói này, người dùng cần tải và cài đặt Viettel Money.',
        },
        {
          type: "paragraph",
          text: "Đăng ký 4G 5G Viettel dễ dàng trên ứng dụng My Viettel",
        },
        {
          type: "heading",
          level: 3,
          text: "Đăng ký qua website Viettel Telecom",
        },
        {
          type: "paragraph",
          text: "Tương tự như ứng dụng My Viettel, người dùng có thể truy cập website chính thức của Viettel Telecom, đăng nhập bằng tài khoản của mình sau đó tìm và chọn gói cước muốn đăng ký.",
        },
        {
          type: "heading",
          level: 3,
          text: "Đăng ký qua mã USSD (098#)",
        },
        {
          type: "paragraph",
          text: "Mã USSD *098# là một cổng thông tin dịch vụ tiện lợi, hoạt động ngay cả khi không có kết nối internet.",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Từ bàn phím điện thoại, bấm *098# rồi nhấn nút Gọi/OK.",
            "Một menu các tùy chọn sẽ hiện ra. Người dùng làm theo hướng dẫn trên màn hình để tìm đến mục đăng ký gói cước. Thông thường, các tùy chọn liên quan đến gói cước, kiểm tra và hủy gói sẽ nằm trong cùng một nhánh menu.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Lưu ý quan trọng khi đăng ký 4G 5G Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tính năng tự động gia hạn: Hầu hết các gói cước tháng của Viettel đều có tính năng tự động gia hạn khi hết chu kỳ (30 ngày). Nếu không còn nhu cầu sử dụng, bạn nên chủ động hủy gói cước theo cú pháp HUY TÊN_GÓI gửi 191.",
            "Sử dụng trên nền tảng 5G: Các gói cước 4G nêu trên hoàn toàn có thể sử dụng trên mạng 5G của Viettel. Nếu bạn có thiết bị hỗ trợ 5G và đang ở trong vùng phủ sóng 5G, bạn sẽ tự động được trải nghiệm tốc độ vượt trội mà không cần trả thêm bất kỳ chi phí nào.",
            "Hết dung lượng tốc độ cao: Tùy thuộc vào gói cước, khi sử dụng hết data tốc độ cao, kết nối Internet của bạn sẽ bị ngắt hoặc tiếp tục truy cập ở tốc độ thông thường (thường áp dụng cho một số gói cũ, cần kiểm tra chi tiết).",
            "Chọn gói cước phù hợp: Ước tính nhu cầu sử dụng hàng tháng của bạn (lướt web, xem video, chơi game, gọi điện...) để chọn gói cước có dung lượng và ưu đãi phù hợp nhất, tránh lãng phí hoặc thiếu hụt data.",
          ],
        },
        {
          type: "paragraph",
          text: "Việc đăng ký 4G 5G Viettel giờ đây đã trở nên đơn giản và linh hoạt hơn bao giờ hết. Với sự đa dạng trong các gói cước từ những gói cơ bản chỉ vài nghìn đồng cho đến các gói combo cao cấp, Viettel khẳng định sự thấu hiểu và mong muốn đáp ứng tốt nhất mọi nhu cầu của khách hàng. Hy vọng rằng, với cẩm nang chi tiết này bạn có thể dễ dàng tìm thấy và đăng ký một gói cước phù hợp để luôn kết nối, làm việc hiệu quả và tận hưởng những phút giây giải trí tuyệt vời.",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-mydio-viettel": {
    status: "ready",
    kind: "news-article",
    title:
      "MyDio Viettel - Ứng dụng nghe sách nói, truyện audio bản quyền | Gói cước MyDio mới nhất",
    description:
      "MyDio Viettel - Kho sách nói & truyện audio bản quyền dành cho người Việt. Giá gói MyDio ưu đãi. Đăng ký MyDio trên app, web hoặc gói cước Viettel bundle miễn phí MyDio.",
    heading:
      "Giới Thiệu MyDio Viettel - Ứng Dụng Nghe Sách Nói, Truyện Audio Bản Quyền Hấp Dẫn",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-mydio-viettel"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0135.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 7f8517e3b7c77b7a1be3a7fd8dc3872737377044bd2a85e8b3f7a66ff78a32cc",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "09/06/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Bạn yêu thích sách nhưng không có thời gian đọc? Bạn muốn vừa học tập vừa giải trí khi lái xe, tập gym, làm việc nhà?",
        },
        {
          type: "paragraph",
          text: "MyDio Viettel chính là lựa chọn tuyệt vời dành cho bạn — nền tảng nghe sách nói & truyện audio bản quyền hàng đầu do Viettel Telecom phát triển, phục vụ nhu cầu học tập & giải trí của người Việt.",
        },
        {
          type: "paragraph",
          text: "Truy cập đa nền tảng:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Web: https://mydio.vn",
            "Ứng dụng MyDio trên App Store (iOS) và Google Play (Android)",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Kho Nội Dung Đa Dạng Trên MyDio Viettel",
        },
        {
          type: "table",
          table: {
            headings: ["Nội dung", "Chi tiết"],
            rows: [
              [
                "Sách nói",
                "Kinh doanh, kỹ năng sống, kinh tế, tôn giáo – tâm linh, sức khỏe, văn hóa…",
              ],
              ["Truyện audio", "Ngôn tình, trinh thám, kinh dị, cổ tích…"],
              [
                "Sách tóm tắt / review",
                "Nắm bắt tinh hoa sách bestseller chỉ trong 30 phút",
              ],
              [
                "Nội dung miễn phí",
                "Hàng trăm đầu sách & truyện miễn phí để trải nghiệm",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "100% nội dung bản quyền — chất lượng âm thanh cao, giọng đọc chuyên nghiệp.",
        },
        {
          type: "heading",
          level: 2,
          text: "Ưu Điểm Nổi Bật Của Ứng Dụng MyDio Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Kho nội dung phong phú, liên tục cập nhật",
            "AI gợi ý nội dung cá nhân hóa theo sở thích",
            "Tạo thư viện cá nhân",
            "Điều chỉnh tốc độ đọc",
            "Hẹn giờ tắt — tiện nghe sách trước khi ngủ",
            "Trải nghiệm mượt mà trên đa nền tảng (Web, App)",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Các Gói Cước MyDio Mua Trực Tiếp Trên Web & Ứng Dụng",
        },
        {
          type: "paragraph",
          text: "Bạn có thể mua trực tiếp các gói MyDio trên:",
        },
        {
          type: "list",
          ordered: false,
          items: ["https://mydio.vn", "App MyDio trên iOS hoặc Android"],
        },
        {
          type: "table",
          table: {
            headings: ["Loại gói", "Giá cước", "Dung lượng"],
            rows: [
              ["Gói 2.000đ/ngày", "2.000đ/ngày", "250MB sử dụng Mydio"],
              ["Gói 10.000đ/7 ngày", "10.000đ/7 ngày", "1.250MB sử dụng Mydio"],
              [
                "Gói 30.000đ/30 ngày",
                "30.000đ/30 ngày",
                "2.500MB sử dụng Mydio",
              ],
              [
                "Gói 5.000đ/ngày (combo)",
                "5.000đ/ngày",
                "250MB sử dụng Mydio300MB truy cập Internet",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Cách mua gói: Đăng nhập MyDio.vn hoặc mở App MyDio → chọn “Mua gói” → thanh toán qua Viettel Money, tài khoản Viettel, thẻ ngân hàng, ví điện tử.",
        },
        {
          type: "heading",
          level: 2,
          text: "Các Gói Cước Viettel Bundle MyDio - Miễn Phí MyDio Khi Đăng Ký Gói Data",
        },
        {
          type: "paragraph",
          text: "Ngoài việc mua lẻ gói MyDio, khách hàng thuê bao Viettel có thể đăng ký các gói cước Viettel tích hợp MyDio (bundle) để nghe sách nói MyDio miễn phí không giới hạn, đồng thời có data tốc độ cao để sử dụng Internet.",
        },
        {
          type: "table",
          table: {
            headings: ["Gói cước", "Ưu đãi", "Đơn giá", "Đăng ký"],
            rows: [
              [
                "VM80",
                "30GB (1GB/ngày)Miễn phí nghe toàn bộ MyDio",
                "80.000đ(1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "VM100",
                "45GB (1.5GB/ngày)Miễn phí nghe toàn bộ MyDio",
                "100.000đ(1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "VM130",
                "60GB (2GB/ngày)Miễn phí nghe toàn bộ MyDio",
                "130.000đ(1 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Ưu điểm khi dùng gói bundle MyDio:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Không cần mua thêm gói MyDio riêng",
            "Miễn phí toàn bộ dung lượng nghe MyDio",
            "Có data sử dụng Internet hàng ngày",
            "Giá rất tiết kiệm, lợi hơn mua lẻ",
          ],
        },
        {
          type: "paragraph",
          text: "VM80 viettel",
        },
        {
          type: "heading",
          level: 2,
          text: "So Sánh: Mua Gói Lẻ MyDio vs Dùng Gói Bundle Viettel MyDio",
        },
        {
          type: "table",
          table: {
            headings: [
              "Tiêu chí",
              "Mua gói lẻ trên MyDio",
              "Dùng gói bundle Viettel MyDio",
            ],
            rows: [
              ["Nghe MyDio không giới hạn", "Có", "Có"],
              [
                "Data Internet kèm theo",
                "Gói 5.000đ/ngày có 300MB",
                "Data tốc độ cao mỗi ngày",
              ],
              [
                "Giá cước",
                "Từ 2.000đ/ngày đến 30.000đ/tháng",
                "Chỉ từ 80.000đ/tháng có data + MyDio",
              ],
              [
                "Thanh toán",
                "Trên MyDio.vn, App MyDio",
                "Đăng ký qua SMS (Viettel)",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Nếu bạn là thuê bao Viettel, đăng ký gói bundle (VM80, VM100, VM130) sẽ tiết kiệm và tiện dụng hơn nhiều.",
        },
        {
          type: "heading",
          level: 2,
          text: "Câu Hỏi Thường Gặp về MyDio Viettel",
        },
        {
          type: "paragraph",
          text: "MyDio Viettel là gì?",
        },
        {
          type: "paragraph",
          text: "→ Là nền tảng nghe sách nói & truyện audio bản quyền do Viettel Media phát triển.",
        },
        {
          type: "paragraph",
          text: "Tôi có thể nghe MyDio trên thiết bị nào?",
        },
        {
          type: "paragraph",
          text: "→ MyDio hỗ trợ Web, App trên iOS & Android.",
        },
        {
          type: "paragraph",
          text: "Có thể mua gói MyDio không cần gói cước Viettel không?",
        },
        {
          type: "paragraph",
          text: "→ Có. Bạn có thể mua trực tiếp các gói MyDio trên MyDio.vn hoặc app MyDio.",
        },
        {
          type: "paragraph",
          text: "Gói cước Viettel nào miễn phí MyDio?",
        },
        {
          type: "paragraph",
          text: "→ Gói VM80, VM100, VM130 sẽ miễn phí nghe toàn bộ nội dung MyDio khi đăng ký.",
        },
        {
          type: "paragraph",
          text: "Nên chọn mua gói lẻ MyDio hay đăng ký gói bundle Viettel?",
        },
        {
          type: "paragraph",
          text: "→ Nếu bạn là thuê bao Viettel, nên chọn gói bundle để có data + MyDio miễn phí, tiết kiệm hơn nhiều.",
        },
      ],
    },
  },
  "/tin-tuc/dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025": {
    status: "ready",
    kind: "news-article",
    title:
      "Tổng hợp các gói cước Internet Viettel WiFi 6 mới nhất – Tốc độ cao, phủ sóng toàn nhà",
    description:
      "Internet 6 là gì? Khám phá các gói Internet Viettel WiFi 6 mới nhất 2025 – Tốc độ từ 300 Mbps, tặng modem WiFi 6 miễn phí, hỗ trợ Mesh WiFi phủ sóng toàn bộ ngôi nhà trên mọi tỉnh thành Việt Nam. Tăng cường kết nối quốc tế nhờ tuyến cáp quang ADC siêu tốc.",
    heading:
      "Viettel cung cấp nhóm gói cước internet từ 300 Mbps, nhanh tương đương top 5 quốc gia có hạ tầng internet tốt nhất thế giới",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0136.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: d1a870052a63d47c2c18fb95bb18f6638e5f4efa231987c5a11ba4a154fe8afa",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "04/04/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Toàn bộ gói cước mới của Viettel có tốc độ từ 300Mbps trở lên và được trang bị miễn phí modem WiFi6, đánh dấu bước tiến trong việc cung cấp dịch vụ Internet tốc độ cao tại Việt Nam.",
        },
        {
          type: "paragraph",
          text: "Ngày 1/4/2025, Tổng Công ty Viễn thông Viettel cho biết chính thức cung cấp nhóm gói internet mới, có băng thông tối thiểu 300 Mbps, tối đa lên tới 1Gbps, đáp ứng nhu cầu sử dụng dữ liệu ngày càng cao của người dùng.",
        },
        {
          type: "paragraph",
          text: "Như vậy, tốc độ tối thiểu của internet Viettel cung cấp cho khách hàng đã tương đương tốc độ trung bình của Top 5 quốc gia có hạ tầng internet tốt nhất thế giới (Singapore 336,45 Mbps, UAE 310,05 Mbps, Hồng Kông (Trung Quốc) 305,71 Mbps, Pháp với 287,44 Mbps và Iceland ở mức 281,95 Mbps).",
        },
        {
          type: "heading",
          level: 2,
          text: "Giá cước Internet Wifi 6 theo từng gói và theo khu vực",
        },
        {
          type: "heading",
          level: 3,
          text:
            "Khu vực 61 tỉnh và ngoại thành Hà Nội (Hotline: " +
            siteConfig.phoneNumber +
            ")",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "BĂNG THÔNG", "WI-FI modem", "GIÁ CƯỚC"],
            rows: [
              ["NETVT1", "300 Mbps", "1 thiết bị", "180.000đ"],
              [
                "NETVT2",
                "Tối thiểu 500 MbpsTối đa 1Gbps",
                "1 thiết bị",
                "240.000đ",
              ],
              ["MESHVT1", "300 Mbps", "2 thiết bị", "210.000đ"],
              [
                "MESHVT2",
                "Tối thiểu 500 MbpsTối đa 1Gbps",
                "3 thiết bị",
                "245.000đ",
              ],
              [
                "MESHVT3",
                "Tối thiểu 500 MbpsTối đa 1Gbps",
                "4 thiết bị",
                "299.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text:
            "Khu vực nội thành Hà Nội, Hồ Chí Minh (Hotline: " +
            siteConfig.phoneNumber +
            ")",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "BĂNG THÔNG", "WI-FI modem", "GIÁ CƯỚC"],
            rows: [
              ["NETVT1", "300 Mbps", "1 thiết bị", "220.000đ"],
              [
                "NETVT2",
                "Tối thiểu 500 MbpsTối đa 1Gbps",
                "1 thiết bị",
                "265.000đ",
              ],
              ["MESHVT1", "300 Mbps", "2 thiết bị", "255.000đ"],
              [
                "MESHVT2",
                "Tối thiểu 500 MbpsTối đa 1Gbps",
                "3 thiết bị",
                "289.000đ",
              ],
              [
                "MESHVT3",
                "Tối thiểu 500 MbpsTối đa 1Gbps",
                "4 thiết bị",
                "359.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Trang bị miễn phí modem WiFi 6",
        },
        {
          type: "paragraph",
          text: "Nhằm gia tăng lợi ích cho người dùng, khách hàng hòa mạng mới sẽ được trang bị miễn phí modem WiFi 6 – công nghệ WiFi tiên tiến nhất hiện nay. WiFi 6 giúp cho việc truy cập internet mượt mà hơn, ngay cả khi nhiều thiết bị kết nối đồng thời. Wifi 6 có thể đạt tốc độ lý thuyết lên đến 9.6 Gbps, nhanh hơn gần gấp 3 lần so với Wifi 5 (3.5 Gbps). Nhờ vậy, bạn có thể thoải mái tải xuống phim 4K, chơi game online, livestream, họp trực tuyến mà không lo bị gián đoạn hay lag.",
        },
        {
          type: "paragraph",
          text: "Bên cạnh modem WiFi 6, Viettel còn cung cấp gói cước Mesh WiFi, đi kèm thiết bị mở rộng vùng phủ sóng giúp wifi phủ khắp không gian ngôi nhà, tốc độ và độ ổn định cao hơn chỉ thông qua 1 tài khoản wifi. Với giải pháp này, khách hàng không cần đăng nhập mật khẩu mới khi di chuyển giữa các khu vực, các tầng nhà v.v. so với việc lắp các thiết bị phát wifi độc lập đang cung cấp trên thị trường.",
        },
        {
          type: "image",
          src: "/assets/viettelup/external/ctfassets/175S6tUWrxZSARxDOH8rNv-internet-wifi6-2025.jpg",
          alt: "Chi tiết gói cước internet Viettel mới ra mắt (Nguồn: Viettel.vn)",
        },
        {
          type: "paragraph",
          text: "Chi tiết gói cước internet Viettel mới ra mắt (Nguồn: Viettel.vn)",
        },
        {
          type: "heading",
          level: 2,
          text: "Nâng cấp hạ tầng Internet, tăng cường kết nối quốc tế",
        },
        {
          type: "paragraph",
          text: "Với thông điệp xuyên suốt “Sáng tạo công nghệ - vì sự phát triển bền vững”, bên cạnh việc cải tiến chất lượng dịch vụ, liên tục tăng băng thông cho khách hàng, Viettel đã không ngừng đầu tư vào nền tảng, nâng cấp hạ tầng Internet cáp quang hướng tới mục tiêu dài hạn là tăng cường độ ổn định và mở rộng kết nối quốc tế. Cụ thể, Viettel là đơn vị duy nhất tại Việt Nam tham gia đầu tư vào tuyến cáp quang biển Asia Direct Cable (ADC) – tuyến cáp biển có dung lượng lớn nhất hiện nay, chính thức hoạt động từ tháng 12/2024. ADC có tổng chiều dài gần 10.000 km, kết nối trực tiếp Việt Nam với các trung tâm dữ liệu lớn như Singapore, Hong Kong và Nhật Bản. Với công nghệ ghép bước sóng mật độ cao, ADC cung cấp dung lượng lên đến 160 Tbps, giúp nâng cao chất lượng kết nối Internet quốc tế, hỗ trợ mạnh mẽ các dịch vụ đòi hỏi băng thông cao như 5G, AI, IoT, AR/VR.",
        },
        {
          type: "paragraph",
          text: "Cùng với 4 tuyến cáp biển hiện đang khai thác là TGN-IA, AAG, APG, AAE-1, tuyến cáp biển thứ 5 ADC mới đưa vào khai thác sẽ là trợ thủ đắc lực, san tải với các tuyến khác, từ đó góp phần nâng cao độ an toàn mạng lưới, an toàn thông tin quốc gia cũng như nâng cao chất lượng các dịch vụ viễn thông của Viettel cung cấp đến khách hàng.",
        },
        {
          type: "paragraph",
          text: "Việc đầu tư này không chỉ nâng cao vị thế Internet của Việt Nam trong khu vực và trên thế giới mà còn giúp đáp ứng nhu cầu kết nối trong kỷ nguyên số, thúc đẩy sự phát triển hạ tầng viễn thông quốc gia theo tinh thần nghị quyết 57-NQ/TW về đột phá phát triển khoa học, công nghệ, đổi mới sáng tạo và chuyển đổi số quốc gia./.",
        },
        {
          type: "heading",
          level: 2,
          text: "Đa dạng gói cước cho người dùng – Tốc độ vượt trội, trải nghiệm tối ưu",
        },
        {
          type: "paragraph",
          text: "Tùy theo mục đích sử dụng, khách hàng có thể lựa chọn 1 trong 20 gói cước mới mà Viettel vừa ra mắt, gồm nhóm gói cước thông thường và gói cước Internet tốc độ cao tích hợp giải pháp MeshWifi; các gói combo Internet – Truyền hình TV360 (xem độc quyền Cúp C1 Châu Âu, ưu đãi gói dịch vụ đi kèm); Internet - Camera với giá cước hấp dẫn, đáp ứng mọi nhu cầu của người dùng.",
        },
        {
          type: "paragraph",
          text:
            "Để tham khảo và đăng ký các gói cước Internet mới của Viettel, khách hàng có thể truy cập website Viettel.vn, ứng dụng My Viettel, liên hệ tổng đài " +
            siteConfig.phoneNumber +
            " hoặc đến cửa hàng Viettel gần nhất!",
        },
        {
          type: "heading",
          level: 2,
          text: "Tham khảo danh sách gói cước Internet Viettel trước tháng 04/2025",
        },
        {
          type: "paragraph",
          text: "Tặng 1 tháng cước khi đóng trước 12 tháng.",
        },
        {
          type: "paragraph",
          text: "Trang bị miễn phí thiết bị trong suốt thời gian sử dụng.",
        },
        {
          type: "paragraph",
          text: "Đăng ký liên hệ tổng đài " + siteConfig.phoneNumber + ".",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước Internet",
        },
        {
          type: "table",
          table: {
            headings: [
              "Gói cước HN-HCM",
              "Ưu đãi",
              "Tốc độ",
              "Đơn giá (tháng)",
            ],
            rows: [
              ["SUN1H", "1 Modem WiFi", "200Mbps", "220.000đ"],
              ["SUN2H", "1 Modem WiFi", "300Mbps - 1Gbps", "245.000đ"],
              ["SUN3H", "1 Modem WiFi", "400Mbps-1Gbps", "330.000đ"],
              ["STAR1H", "1 Modem WiFi1 Home Wifi", "200Mbps", "255.000đ"],
              [
                "STAR2H",
                "1 Modem WiFi1 Home Wifi",
                "300Mbps - 1Gbps",
                "289.000đ",
              ],
              [
                "STAR3H",
                "1 Modem WiFi1 Home Wifi",
                "400Mbps-1Gbps",
                "359.000đ",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: [
              "Ngoại thành HN-HCM",
              "Ưu đãi",
              "Tốc độ",
              "Đơn giá (tháng)",
            ],
            rows: [
              ["HOMET", "1 Modem WiFi", "150Mbps", "165.000đ"],
              ["SUN1T", "1 Modem WiFi", "200Mbps", "180.000đ"],
              ["SUN2T", "1 Modem WiFi", "300Mbps-1Gbps", "229.000đ"],
              ["SUN3T", "1 Modem WiFi", "400Mbps-1Gbps", "279.000đ"],
              ["STAR1T", "1 Modem WiFi1 Home Wifi", "200Mbps", "210.000đ"],
              [
                "STAR2T",
                "1 Modem WiFi1 Home Wifi",
                "300Mbps-1Gbps",
                "245.000đ",
              ],
              [
                "STAR3T",
                "1 Modem WiFi1 Home Wifi",
                "400Mbps-1Gbps",
                "299.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước Internet + Truyền hình",
        },
        {
          type: "table",
          table: {
            headings: [
              "Gói cước HN-HCM",
              "Ưu đãi",
              "Tốc độ",
              "Đơn giá (tháng)",
            ],
            rows: [
              ["SUN1H-STD", "1 Modem WiFi", "200MbpsSTD TV360App", "250.000đ"],
              [
                "SUN1H-STDBOX",
                "1 Modem WiFi1 Đầu thu",
                "200MbpsSTD TV360App",
                "280.000đ",
              ],
              ["SUN1H-VIP", "1 Modem WiFi", "200MbpsVIP TV360App", "280.000đ"],
              [
                "SUN1H-VIPBOX",
                "1 Modem WiFi1 Đầu thu",
                "200MbpsVIP TV360App",
                "300.000đ",
              ],
              [
                "STAR1H-STD",
                "1 Modem WiFi1 Home Wifi",
                "200MbpsSTD TV360App",
                "285.000đ",
              ],
              [
                "STAR1H-STDBOX",
                "1 Modem WiFi1 Home Wifi1 Đầu thu",
                "200MbpsSTD TV360App",
                "315.000đ",
              ],
              [
                "STAR1H-VIP",
                "1 Modem WiFi1 Home Wifi",
                "200MbpsVIP TV360App",
                "315.000đ",
              ],
              [
                "STAR1H-VIPBOX",
                "1 Modem WiFi1 Home Wifi1 Đầu thu",
                "200MbpsVIP TV360App",
                "335.000đ",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: [
              "Ngoại thành HN-HCM",
              "Ưu đãi",
              "Tốc độ",
              "Đơn giá (tháng)",
            ],
            rows: [
              ["HOMET-STD", "1 Modem WiFi", "150MbpsSTD TV360App", "195.000đ"],
              [
                "HOMET-STDBOX",
                "1 Modem WiFi1 Đầu thu",
                "150MbpsSTD TV360App",
                "225.000đ",
              ],
              ["HOMET-VIP", "1 Modem WiFi", "150MbpsVIP TV360App", "225.000đ"],
              [
                "HOMET-VIPBOX",
                "1 Modem WiFi1 Đầu thu",
                "150MbpsVIP TV360App",
                "245.000đ",
              ],
              ["SUN1T-STD", "1 Modem WiFi", "200MbpsSTD TV360App", "210.000đ"],
              [
                "SUN1T-STDBOX",
                "1 Modem WiFi1 Đầu thu",
                "200MbpsSTD TV360App",
                "240.000đ",
              ],
              ["SUN1T-VIP", "1 Modem WiFi", "200MbpsVIP TV360App", "240.000đ"],
              [
                "SUN1T-VIPBOX",
                "1 Modem WiFi1 Đầu thu",
                "200MbpsVIP TV360App",
                "260.000đ",
              ],
              [
                "STAT1T-STD",
                "1 Modem WiFi1 Home Wifi",
                "200MbpsSTD TV360App",
                "240.000đ",
              ],
              [
                "STAR1T-STDBOX",
                "1 Modem WiFi1 Home Wifi1 Đầu thu",
                "200MbpsSTD TV360Box",
                "270.000đ",
              ],
              [
                "STAR1T-VIP",
                "1 Modem WiFi1 Home Wifi",
                "200MbpsVIP TV360App",
                "270.000đ",
              ],
              [
                "STAR1T-VIPBOX",
                "1 Modem WiFi1 Home Wifi1 Đầu thu",
                "200MbpsVIP TV360App",
                "290.000đ",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước Internet + Camera",
        },
        {
          type: "table",
          table: {
            headings: [
              "Gói cước HN-HCM",
              "Ưu đãi",
              "Tốc độ",
              "Đơn giá (tháng)",
            ],
            rows: [
              [
                "SUN1H-CAMERA CL7",
                "1 Modem WiFi2 camera (7 ngày lưu trữ)",
                "250Mbps",
                "260.000đ",
              ],
              [
                "SUN1H-CAMERA CL15",
                "1 Modem WiFi2 camera (15 ngày lưu trữ)",
                "250Mbps",
                "280.000đ",
              ],
              [
                "SUN1H-CAMERA CL30",
                "1 Modem WiFi2 camera (30 ngày lưu trữ)",
                "250Mbps",
                "310.000đ",
              ],
              [
                "STAR1H-CAMERA CL7",
                "1 Modem WiFi1 Home WiFi2 camera (7 ngày lưu trữ)",
                "250Mbps",
                "290.000đ",
              ],
              [
                "STAR1H-CAMERA CL15",
                "1 Modem WiFi1 Home WiFi2 camera (15 ngày lưu trữ)",
                "250Mbps",
                "315.000đ",
              ],
              [
                "STAR1H-CAMERA CL30",
                "1 Modem WiFi1 Home WiFi2 camera (30 ngày lưu trữ)",
                "250Mbps",
                "345.000đ",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: [
              "Ngoại thành HN-HCM",
              "Ưu đãi",
              "Tốc độ",
              "Đơn giá (tháng)",
            ],
            rows: [
              [
                "HOMET-CAMERA CL7",
                "1 Modem WiFi2 camera (7 ngày lưu trữ)",
                "200Mbps",
                "205.000đ",
              ],
              [
                "HOMET-CAMERA CL15",
                "1 Modem WiFi2 camera (15 ngày lưu trữ)",
                "200Mbps",
                "225.000đ",
              ],
              [
                "HOMET-CAMERA CL30",
                "1 Modem WiFi2 camera (30 ngày lưu trữ)",
                "200Mbps",
                "255.000đ",
              ],
              [
                "SUN1T-CAMERA CL7",
                "1 Modem WiFi2 camera (7 ngày lưu trữ)",
                "250Mbps",
                "220.000đ",
              ],
              [
                "SUN1T-CAMERA CL15",
                "1 Modem WiFi2 camera (15 ngày lưu trữ)",
                "250Mbps",
                "240.000đ",
              ],
              [
                "SUN1T-CAMERA CL30",
                "1 Modem WiFi2 camera (30 ngày lưu trữ)",
                "250Mbps",
                "270.000đ",
              ],
              [
                "STAR1T-CAMERA CL7",
                "1 Modem WiFi1 Home WiFi2 camera (7 ngày lưu trữ)",
                "250Mbps",
                "250.000đ",
              ],
              [
                "STAR1T-CAMERA CL15",
                "1 Modem WiFi1 Home WiFi2 camera (15 ngày lưu trữ)",
                "250Mbps",
                "270.000đ",
              ],
              [
                "STAR1T-CAMERA CL30",
                "1 Modem WiFi1 Home WiFi2 camera (30 ngày lưu trữ)",
                "250Mbps",
                "300.000đ",
              ],
            ],
          },
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-viettel-thang-4-2025": {
    status: "ready",
    kind: "news-article",
    title:
      "Gói Cước Viettel 4G 5G Tháng 04/2025 – Danh Sách Mới Nhất, Giá Rẻ, Dễ Đăng Ký",
    description:
      "Cập nhật danh sách gói cước Viettel 4G 5G tháng 04/2025: gói ngày, gói tháng, gói mạng xã hội, combo data + gọi. Hướng dẫn đăng ký 4G Viettel, cú pháp huỷ gói, tiết kiệm chi phí truy cập mạng Viettel.",
    heading: "Danh sách gói cước 4G, 5G Viettel mới nhất tháng 4/2025",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-viettel-thang-4-2025"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0137.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 55da2c2828e08d4cb7949befe65916fbd67f02285292464a9c123b689c3e4fe9",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "01/04/2025",
      blocks: [
        {
          type: "paragraph",
          text:
            "Bạn đang tìm gói cước Viettel phù hợp để đăng ký mạng 4G hoặc 5G Viettel? " +
            siteConfig.hostname +
            " tổng hợp chi tiết các gói cước 4G Viettel, gói 5G Viettel, gói cước theo ngày, theo tháng, gói mạng xã hội, data kèm thoại... giúp bạn dễ dàng lựa chọn và đăng ký nhanh chóng qua SMS.",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước mới ra mắt tháng 4/2025: 5G135N",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Dung lượng: 6GB/ngày",
            "Ưu đãi: Miễn phí TV360 Basic 4K, tặng 20GB lưu trữ Mybox",
            "Cước phí: 135.000đ/tháng",
            "Cú pháp đăng ký: 5G135N UP gửi 290",
            "Đối tượng: Thuê bao trả trước kích hoạt mới từ 01/01/2025 và thuê bao theo danh sách",
            "Gói cước gia hạn sau mỗi chu kỳ, để huỷ gói cước soạn SMS: HUY 5G135N gửi 191",
          ],
        },
        {
          type: "paragraph",
          text: "*Gói cước sử dụng trên cả hạ tầng 4G và 5G. Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng của gói cước",
        },
        {
          type: "paragraph",
          text: "Lựa chọn đăng ký gói 5G135N trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 3 tháng, 6 tháng, 1 năm với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "CHU KỲ", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              ["5G135N", "1 tháng", "135.000đ", "ĐĂNG KÝĐăng ký"],
              ["3T5G135N", "3 tháng", "405.000đ", "ĐĂNG KÝĐăng ký"],
              ["6T5G135N", "6 tháng", "810.000đ", "ĐĂNG KÝĐăng ký"],
              ["12T5G135N", "12 tháng", "1.620.000đ", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước 5G Viettel tháng",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G135",
                "4GB/ngày- Miễn phí TV360 4K20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngày- Miễn phí TV360 4K- 30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G230B",
                "8GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 4K- 50GB Mybox",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G280B",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 200 phút gọi ngoại mạng- Miễn phí TV360 4K- 70GB Mybox",
                "280.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G330B",
                "12GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 100GB Mybox",
                "330.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G380B",
                "15GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 150GB Mybox",
                "380.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G480B",
                "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
                "480.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước 5G dành cho game thủ Liên Quân Mobile:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5GLQ190",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K30GB Mybox",
                "190.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "210.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước 5G Mạng xã hội:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5GMXH200",
                "2GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GMXH230",
                "3GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Hết 50GB truy cập theo ứng dụng sẽ trừ tiếp lưu lượng của gói cước (nếu còn)",
        },
        {
          type: "paragraph",
          text: "Gói cước 5G nhiều phút gọi:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước 5G Viettel theo ngày",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "5G10: 6GB/ngày - 10.000đ/ngày. Cú pháp: 5G10 UP gửi 290",
            "5G30: 21GB (7GB/ngày) - 30.000đ. Cú pháp: 5G10 UP gửi 290",
            "5G70: 56GB (8GB/ngày )trong 7 ngày - 70.000đ. Cú pháp: 5G10 UP gửi 290",
            "5GVS12: 6GB/ngày - 12.000đ/ngày (kèm TV360 4K). Cú pháp: 5G10 UP gửi 290",
            "5GVS80: 56GB (8GB/ngày) trong 7 ngày - 80.000đ (TV360 4K). Cú pháp: 5G10 UP gửi 290",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Gói cước 4G Viettel data cơ bản",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "SD70: 1GB/ngày - 70.000đ/tháng. Cú pháp SMS: SD70 UP gửi 290",
            "SD90: 1.5GB/ngày - 90.000đ/tháng. Cú pháp SMS: SD90 UP gửi 290",
            "SD120: 2GB/ngày - 120.000đ/tháng (kèm TV360 Basic). Cú pháp SMS: SD120 UP gửi 290",
            "SD135: 5GB/ngày - 135.000đ/tháng (kèm TV360 Basic). Cú pháp SMS: SD135 UP gửi 290",
            "SD150: 3GB/ngày - 150.000đ/tháng (kèm TV360 Basic). Cú pháp SMS: SD150 UP gửi 290",
          ],
        },
        {
          type: "paragraph",
          text: "Nhóm 4G combo data, thoại miễn phí:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "V90B",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120B",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150B",
                "2GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 80 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V180B",
                "6GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "8GB/ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng.",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói 4G Mạng xã hội:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["T50K", "50GB truy cập TikTok", "50.000đ", "ĐĂNG KÝĐăng ký"],
              ["YT50K", "50GB truy cập Youtube", "50.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "FB50K",
                "50GB truy cập Facebook và nhắn tin Messenger",
                "50.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Hướng dẫn đăng ký và huỷ gói cước Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Đăng ký: Soạn [Tên gói] UP gửi 290",
            "Huỷ gói: Soạn HUY [Tên gói] gửi 191",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "FAQ - Câu hỏi thường gặp",
        },
        {
          type: "paragraph",
          text: "1. Thuê bao 4G có đăng ký được gói 5G Viettel không? Có. SIM 4G Viettel vẫn đăng ký được các gói 5G. Khi không có sóng 5G, điện thoại sẽ tự động chuyển sang 4G/LTE. Xem thêm: Danh sách các dòng điện thoại hỗ trợ 5G và Hướng dẫn bật 5G trên Android và IOS",
        },
        {
          type: "paragraph",
          text: "2. Làm sao kiểm tra dung lượng còn lại của gói? Soạn KTTK gửi 191 để tra cứu dung lượng data còn lại.",
        },
        {
          type: "paragraph",
          text: "3. Gói có tự động gia hạn không? Hầu hết các gói đều tự động gia hạn. Bạn có thể huỷ bất kỳ lúc nào bằng cú pháp huỷ.",
        },
        {
          type: "paragraph",
          text: "4. Có thể đăng ký nhiều gói cùng lúc không? Không. Mỗi thời điểm chỉ được sử dụng một gói data chính. Tuy nhiên bạn có thể mua thêm các gói bổ sung Add-on như T5K, YT5K, ST15K,...",
        },
      ],
    },
  },
  "/tin-tuc/viettel-ra-mat-goi-cuoc-ngay-moi-st7k-5g10-5g70-5gvs12-5gvs80": {
    status: "ready",
    kind: "news-article",
    title: "Trải Nghiệm Tốc Độ Cao Với Gói Cước Ngày Viettel - Đăng Ký Dễ Dàng",
    description:
      "Bạn cần data tốc độ cao cho công việc, giải trí hay học tập? Gói cước ngày Viettel với dung lượng lớn, giá hợp lý, giúp bạn kết nối mọi lúc, mọi nơi. Đăng ký ngay chỉ với một tin nhắn!",
    heading:
      "Viettel Ra Mắt Gói Cước Ngày Mới: ST7K, 5G10, 5G30, 5G70, 5GVS12, 5GVS80",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/viettel-ra-mat-goi-cuoc-ngay-moi-st7k-5g10-5g70-5gvs12-5gvs80",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0138.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 469bb863b343c1a8d0197f40808119285c0c963365100e4337fd3c5c14b16b35",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "17/03/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Viettel tiếp tục khẳng định vị thế nhà mạng hàng đầu tại Việt Nam với việc ra mắt loạt gói cước mới, đáp ứng nhu cầu sử dụng linh hoạt, tiết kiệm chi phí cho người dùng. Các gói cước Viettel như ST7K, 5G10, 5G30, 5G70, 5GVS12, 5GVS80 mang đến ưu đãi đăng ký 4G 5G Viettel với tốc độ cao lên đến 8GB/ngày, phù hợp với từng nhu cầu sử dụng hàng ngày.",
        },
        {
          type: "heading",
          level: 2,
          text: "Chi Tiết Các Gói Cước Viettel Ngày Mới Nhất",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "ST7K",
                "1GB sử dụng đến 24h ngày đăng ký",
                "7.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G10",
                "6GB sử dụng đến 24h ngày đăng ký",
                "10.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["5G30", "21GB (7GB/ngày)", "30.000đ(3 ngày)", "ĐĂNG KÝĐăng ký"],
              ["5G70", "56GB (8GB/ngày)", "70.000đ(7 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "5GVS12",
                "6GB sử dụng đến 24h ngày đăng ký- Miễn phí TV360 4K*",
                "12.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GVS80",
                "56GB (8GB/ngày)- Miễn phí TV360 4K*",
                "80.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Gói cước 5GVS12, 5GVS80 xem miễn phí các giải thể thao đỉnh cao C1 độc quyền, ngoại hạng Anh... trên ứng dụng TV360 (trên thiết bị di động, máy tính, máy tính bảng).",
        },
        {
          type: "heading",
          level: 2,
          text: "Lợi Ích Khi Đăng Ký 4G 5G Viettel",
        },
        {
          type: "paragraph",
          text: "Tiết kiệm chi phí: Chỉ từ 7.000đ/ngày, người dùng có thể truy cập mạng tốc độ cao mà không lo về giá.",
        },
        {
          type: "paragraph",
          text: "Tốc độ 5G siêu nhanh: Đảm bảo trải nghiệm mượt mà khi xem video, lướt mạng xã hội, học tập và làm việc online.",
        },
        {
          type: "paragraph",
          text: "Linh hoạt: Chọn gói cước Viettel phù hợp với nhu cầu sử dụng trong ngày, không cần cam kết dài hạn.",
        },
        {
          type: "paragraph",
          text: "Miễn phí TV360 4K: Với các gói 5GVS12 và 5GVS80, khách hàng được truy cập kho nội dung giải trí chất lượng cao.",
        },
        {
          type: "heading",
          level: 2,
          text: "Quy Định Chung",
        },
        {
          type: "paragraph",
          text: "- Đối với các gói 5G10, 5G30, 5G70, 5GVS12, 5GVS80 thuê bao sử dụng trên hạ tầng 5G (ngoài vùng phủ sóng 5G thuê bao tự động chuyển sang 4G để tiếp tục sử dụng).",
        },
        {
          type: "paragraph",
          text: "- Có gia hạn tự động (ưu đãi nào còn lại không được bảo lưu nếu còn).",
        },
        {
          type: "paragraph",
          text: "- Hệ thống nhắn tin thông báo cho khách hàng trước khi gia hạn 1 ngày và sau khi gia hạn (Đối với gói chu kỳ 1 ngày không có tin nhắn cảnh báo gia hạn).",
        },
        {
          type: "paragraph",
          text: "- Để huỷ gói cước, soạn HUY [Tên gói] gửi 191.",
        },
        {
          type: "heading",
          level: 2,
          text: "Cách Đăng Ký 4G 5G Viettel Nhanh Chóng",
        },
        {
          type: "paragraph",
          text: "Người dùng có thể đăng ký 4G 5G Viettel bằng cách soạn tin nhắn theo cú pháp [Tên gói] UP gửi 290 hoặc truy cập ứng dụng My Viettel để lựa chọn gói cước Viettel phù hợp.",
        },
        {
          type: "paragraph",
          text: "Với loạt gói cước Viettel ngày ST7K, 5G10, 5G30, 5G70, 5GVS12, 5GVS80, Viettel tiếp tục mang đến giải pháp kết nối tối ưu, giúp người dùng chủ động hơn trong việc sử dụng đăng ký 4G 5G Viettel mỗi ngày. Đăng ký 4G 5G Viettel ngay hôm nay để trải nghiệm tốc độ 5G đỉnh cao cùng Viettel!",
        },
      ],
    },
  },
  "/tin-tuc/viettel-tai-hoi-nghi-di-dong-the-gioi-mwc-barcelona-2025": {
    status: "ready",
    kind: "news-article",
    title: "Viettel Đưa Công Nghệ Việt Đến Sự Kiện Di Động Lớn Nhất Hành Tinh",
    description:
      "Viettel khẳng định vị thế công nghệ Việt tại sự kiện di động lớn nhất thế giới MWC Barcelona 2025, mang đến các giải pháp tiên tiến, thúc đẩy chuyển đổi số toàn cầu. Xem chi tiết!",
    heading: "Viettel Đại Diện Việt Nam Tham Gia MWC Barcelona 2025",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/viettel-tai-hoi-nghi-di-dong-the-gioi-mwc-barcelona-2025",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0139.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 2648df45ae26359aba8dbf866779598a2063169aaeb97ade01f239b29ce0e51c",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "04/03/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Tại Hội nghị Di động Thế giới (MWC Barcelona 2025), Viettel là đại diện duy nhất của Việt Nam tham dự, mang đến 22 sản phẩm công nghệ tiên tiến. Đây là số lượng sản phẩm lớn nhất mà Viettel từng giới thiệu tại MWC, thể hiện sự sáng tạo không ngừng vì một tương lai bền vững.",
        },
        {
          type: "paragraph",
          text: "Ảnh: Viettel Group",
        },
        {
          type: "paragraph",
          text: 'Gian hàng triển lãm của Viettel tại Hall 4, vị trí 4E30, Fira Gran Via thuộc thành phố Barcelona, Tây Ban Nha. Đây được coi là vị trí "đắc địa" bởi khu vực này quy tụ nhiều tên tuổi lớn trong ngành viễn thông và công nghệ trên thế giới như NTT Docomo, AT&T, BCG, Fujitsu,... Gian hàng Viettel cũng đặt ngay cạnh điểm "nóng", nơi có sân khấu chính của MWC 2025. Tại đây, GSMA sẽ tổ chức các phiên thuyết trình, thảo luận và các sự kiện bên lề dành cho giới công nghệ toàn cầu.',
        },
        {
          type: "paragraph",
          text: 'Đến với MWC 2025, Viettel cùng thông điệp "Sáng tạo công nghệ vì sự phát triển bền vững" mang đến 22 sản phẩm chia thành 3 nhóm chính: Hạ tầng mạng lưới 5G; Nền tảng số do Viettel nghiên cứu và phát triển và Ứng dụng trí tuệ nhân tạo (AI).',
        },
        {
          type: "paragraph",
          text: "Ảnh: Viettel Group",
        },
        {
          type: "paragraph",
          text: "Trong đó, hạ tầng mạng lưới là trụ cột trong hệ sinh thái số, Viettel cung cấp công nghệ 5G hiện đại, đáp ứng nhu cầu kết nối tốc độ cao, độ trễ thấp và độ tin cậy cao. Nền tảng số là hạ tầng công nghệ hỗ trợ doanh nghiệp tối ưu và bảo vệ dữ liệu, nổi bật với sa bàn thành phố tương lai và trải nghiệm VR về tấn công an ninh mạng. Với nhóm ứng dụng số, Viettel phát triển ứng dụng số nâng cao chất lượng sống, mở rộng cơ hội kinh doanh, nổi bật với Future Home – tích hợp IoT, trợ lý pháp luật...",
        },
        {
          type: "paragraph",
          text: "Bên cạnh việc trình diễn công nghệ, Viettel cũng ký kết hợp tác với các tập đoàn lớn như TikTok, Visa, China Telecom Global…, mở ra nhiều cơ hội phát triển và khẳng định vị thế công nghệ Việt trên thị trường quốc tế. Các hoạt động trình diễn và kinh doanh của Viettel tại MWC khẳng định năng lực công nghệ Việt Nam khi hiện diện tại một trong những sự kiện công nghệ lớn nhất toàn cầu.",
        },
        {
          type: "paragraph",
          text: "Ảnh: Viettel Group",
        },
        {
          type: "paragraph",
          text: "Hiện tại, Viettel là nhà cung cấp dịch vụ số toàn cầu, hiện diện tại 11 quốc gia và vùng lãnh thổ. Dịch vụ số do Viettel cung cấp phục vụ tập khách hàng hơn 270 triệu dân trên toàn thế giới từ Châu Á, Châu Phi và Châu Mỹ.",
        },
        {
          type: "paragraph",
          text: "Danh sách 22 sản phẩm Viettel tại MWC25:",
        },
        {
          type: "table",
          table: {
            headings: ["STT", "Sản phẩm", "Mô tả"],
            rows: [
              [
                "1",
                "Hệ thống 5G Private",
                "Cung cấp đầy đủ các thành phần Mạng riêng 5G, bao gồm trạm thu phát sóng theo chuẩn Open RAN, mạng truyền dẫn, mạng lõi, mạng ứng dụng nhằm cung cấp các dịch vụ viễn thông trên nền tảng công nghệ 4G/5G.",
              ],
              [
                "2",
                "Hệ sinh thái ORAN 5G",
                "Bao gồm các sản phẩm: AIO 4T4R – Micro/Macro gNodeB 8T8R –- Macro gNodeB MassiveMIMO 32T32R - Macro gNodeB MassiveMIMO 64T64R.",
              ],
              [
                "3",
                "Sản phẩm mạng lõi 5G (5G Core)",
                "Sản phẩm mạng lõi 5G, cung cấp các dịch vụ eMBB, URLLC, mMTC cho thuê bao 5G.",
              ],
              [
                "4",
                "Chip RF-SoC",
                "Là một loại SoC (Hệ thống trên chip) chuyên dụng, được thiết kế cho các ứng dụng truyền thông không dây, tích hợp cả thành phần số và tương tự trên một chip duy nhất.",
              ],
              [
                "5",
                "Chip bảo mật",
                "Là một loại vi mạch tích hợp được thiết kế để cung cấp các tính năng bảo mật cho thiết bị, hệ thống, hoặc dữ liệu nhạy cảm.",
              ],
              [
                "6",
                "Chip 5W X-Band FEM",
                "Là một chip modun thu phát công suất cao , được tích hợp từ những vi mạch trần T/R Switch, Limiter, LNA và HPA, 7thiết kế cho các ứng dụng thuộc băng tần X từ 8GHz đến 12Ghz.",
              ],
              [
                "7",
                "Bản sao số trạm viễn thông BTS",
                "Cung cấp giải pháp thông minh trong việc số hóa, quản lý, hiển thị mạng lưới trạm BTS một cách trực quan dưới dạng bản đồ 4D hiện đại.",
              ],
              [
                "8",
                "Drone",
                'Cung cấp giải pháp "trạm BTS trên không", ứng dụng trong các tình huống ứng cứu thông tin khẩn cấp như thiên tai, hỏa hoạn, sự cố an ninh diện rộng.',
              ],
              [
                "9",
                "Logistics Robot Complex",
                "Được xử lý hiệu quả nhờ tích hợp công nghệ 5G, mang lại hiệu suất vượt trội thông qua kết nối thời gian thực và đồng bộ hóa chính xác.",
              ],
              [
                "10",
                "Network as a Service",
                "Cung cấp các tính năng/tài nguyên của mạng di động như Device Location, Quality on Demand,... ra bên ngoài cho các nhà phát triển bên thứ ba dưới dạng API được chuẩn hóa quốc tế.",
              ],
              [
                "11",
                "Network Content Delivery – netCDN",
                "Thực hiện phân phối, truyền tải nội dung cho dịch vụ xem video trực tuyến gồm truyền hình trực tiếp và theo nhu cầu với các tính năng lõi.",
              ],
              [
                "12",
                "Viettel Platform as a Service",
                "Là một mô hình dịch vụ điện toán đám mây nhằm cung cấp một nền tảng qua đó cho phép khách hàng phát triển, triển khai đến quản lý và giám sát ứng dụng mà không phải lo lắng về cơ sở hạ tầng bên dưới.",
              ],
              [
                "13",
                "Customer Engagement Platform",
                "Là một giải pháp phần mềm toàn diện giúp doanh nghiệp quản lý và nâng cao tương tác với khách hàng qua nhiều kênh.",
              ],
              [
                "14",
                "Data Center Infrastructure Management",
                "Cung cấp giải pháp toàn trình cho trung tâm dữ liệu từ khâu quy hoạch, tính toán, giám sát, vận hành, quản trị năng lượng và khả năng dự báo, tối ưu năng lượng sử dụng tại Data center",
              ],
              [
                "15",
                "X-Optimazation",
                "Sản phẩm tối ưu mạng lưới vô tuyến, được thiết kế để tự động điều chỉnh Remote Electrical Tilt (RET) và Power trong mạng 4G/5G.",
              ],
              [
                "16",
                "Viettel SOC Platform",
                "Nền tảng giám sát, xử lý các vấn đề về ATTT để phát hiện, phân tích, phản ứng, ngăn chặn và điều tra truy vết với các sự cố về ATTT, đảm bảm ATTT cho một tổ chức.",
              ],
              [
                "17",
                "Viettel Threat Intelligence",
                "Giải pháp cung cấp các thông tin về ATTT chuyên sâu được thu thập từ nhiều nguồn khác nhau về các mối đe dọa cho các tổ chức.",
              ],
              [
                "18",
                "Hệ thống giao thông thông minh",
                "Là một phần trong chiến lược cải thiện chất lượng hệ thống giao thông, trong đó tập trung vào ứng dụng các công nghệ tiên tiến về viễn thông, máy tính, cảm biến để nâng cao an toàn, hiệu quả và bền vững của hệ thống giao thông.",
              ],
              [
                "19",
                "Trợ lý ảo Pháp luật",
                "Hỗ trợ thẩm phán trong công tác chuyên môn là một hệ thống phần mềm dựa trên công nghệ trí tuệ nhân tạo xử lý ngôn ngữ tự nhiên, nhận dạng giọng nói và hỗ trợ ra quyết định.",
              ],
              [
                "20",
                "Dịch vụ chờ meCall",
                "Cung cấp các video ngắn thú vị thay thế cho tiếng nhạc chờ/tiếng chuông chờ thông thường khi khách hàng thực hiện cuộc gọi.",
              ],
              [
                "21",
                "Sách nói Mydio",
                "Là dịch vụ nghe sách nói (Audiobook) có bản quyền. Khách hàng được nghe những nội dung sách, truyện mới, HOT nhất thị trường thông qua việc truy cập Wapsite http://mydio.vn /Ứng dụng Mydio.",
              ],
              [
                "22",
                "TV360",
                "Ứng dụng truyền hình tương tác thế hệ mới đầu tiên tại Việt Nam, cung cấp trải nghiệm nội dung tương tác trên kinh thực tế ảo với kho video 360, game tương tác VR.",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Nguồn: Viettel Group",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025": {
    status: "ready",
    kind: "news-article",
    title: "Gói Cước 4G 5G Viettel Mới Nhất Tháng 3/2025 – Cập Nhật Chi Tiết",
    description:
      "Cập nhật bảng giá và ưu đãi mới nhất của các gói cước 4G 5G Viettel tháng 3/2025. Xem ngay để chọn gói phù hợp, đăng ký nhanh chóng và tiết kiệm chi phí!",
    heading: "Gói cước 4G 5G Viettel cập nhật tháng 3/2025",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0140.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 3335c76a4fcf62f7a964144e95b06627a8858073df02edc1ba12ab829fc3f6ab",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "03/03/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Nhu cầu truy cập mạng mọi lúc mọi nơi cho công việc, học tập và giải trí đã trở thành một phần không thể thiếu trong cuộc sống hàng ngày. Bài viết sau đây Viettel Up sẽ phân tích và so sánh các gói data hiện có trên thị trường.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tổng quan về gói cước 4G của Viettel",
        },
        {
          type: "paragraph",
          text: "Hiện nay, Viettel cung cấp các gói cước 4G đa dạng như các gói Data hàng ngày, hàng tuần, hàng tháng. Ngoài ra, người dùng có thể chọn các gói cước combo tích hợp cả Data và các dịch vụ khác. Do đó, người dùng sẽ dễ dàng lựa chọn gói cước phù hợp với nhu cầu sử dụng và ngân sách cá nhân.",
        },
        {
          type: "paragraph",
          text: "Mạng 4G Viettel đang ngày càng phổ biến nhờ sự tiện lợi vượt trội. Để đáp ứng nhu cầu đa dạng của người dùng, Viettel đã tung ra nhiều gói cước data hấp dẫn với nhiều ưu đãi. Gói cước rẻ nhất 4G Viettel sẽ phù hợp cho những ai thường xuyên truy cập internet trên di động.",
        },
        {
          type: "heading",
          level: 3,
          text: "Các gói data 4G hiện nay - cập nhật mới nhất",
        },
        {
          type: "paragraph",
          text: "Trong thời đại kết nối số, nhu cầu sử dụng dữ liệu di động ngày càng tăng cao. Các nhà mạng không ngừng cập nhật và cung cấp nhiều gói data 4G đa dạng và các gói data rẻ nhất nhằm đáp ứng nhu cầu lướt web, xem video và làm việc trực tuyến của người dùng. Dưới đây là thông tin mới nhất về các gói cước 4G theo ngày, theo tháng, năm.",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G theo ngày",
        },
        {
          type: "paragraph",
          text: "Nếu bạn chỉ có nhu cầu sử dụng 4G trong thời gian ngắn, các gói cước theo ngày của Viettel là lựa chọn tiết kiệm và phù hợp. Viettel cung cấp nhiều gói cước 4G giá rẻ, đáp ứng đa dạng nhu cầu của người dùng.",
        },
        {
          type: "paragraph",
          text: "Một số gói cước 4G theo ngày Viettel Up đề xuất:",
        },
        {
          type: "table",
          table: {
            headings: ["TÊN GÓI", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "T5K",
                "15GB truy cập TikTok",
                "5.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT5K",
                "15GB truy cập Youtube",
                "5.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB5K",
                "15GB truy cập Facebook và nhắn tin Messenger",
                "5.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "1N",
                "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "10.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3N",
                "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "30.000đ(3 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["ST15K", "3GB/3 ngày", "15.000đ(3 ngày)", "ĐĂNG KÝĐăng ký"],
              ["MI20K", "2GB/5 ngày", "20.000đ(5 ngày)", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G theo tuần",
        },
        {
          type: "paragraph",
          text: "Các gói cước tuần Viettel mang đến dung lượng data lớn, giá tiết kiệm, phù hợp cho nhu cầu sử dụng ngắn hạn:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "7N",
                "35GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút và 35 phút gọi ngoại mạng- Miễn phí SMS nội mạngMiễn phí TV360",
                "70.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["ST30K", "7GB/7 ngày", "30.000đ(7 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "C20K",
                "1GB/7 ngày- 50 phút gọi nội mạng",
                "20.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "F30",
                "3GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút",
                "30.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FT50",
                "7GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "50.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV35K",
                "7GB/7 ngày- Miễn phí TV360 4K",
                "35.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV65K",
                "14GB/14 ngày- Miễn phí TV360 4K",
                "65.000đ(14 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V50K",
                "7GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút",
                "50.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V100K",
                "21GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút và 25 phút gọi ngoại mạng",
                "100.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "EST30",
                "7GB/7 ngày- Miễn phí data chơi Liên Quân",
                "30.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V30X",
                "3.5GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "30.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["MI50K", "5GB/7 ngày", "50.000đ(7 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "V15B",
                "500MB/15 ngày- Miễn phí cuộc gọi nội mạng dưới 5 phút",
                "15.000đ(15 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V25B",
                "2GB/15 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "25.000đ(15 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V35B",
                "7.5GB/15 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "35.000đ(15 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G theo tháng",
        },
        {
          type: "paragraph",
          text: "Các gói 4G theo tháng của Viettel đáp ứng nhu cầu sử dụng internet trong cả tháng mà không lo hết dung lượng hay tốn kém. Viettel mang đến nhiều gói cước với giá khác nhau, phù hợp với túi tiền và nhu cầu sử dụng của mỗi người.",
        },
        {
          type: "paragraph",
          text: "Một số gói cước 4G theo tháng Viettel Up đề xuất:",
        },
        {
          type: "paragraph",
          text: "Nhóm 4G combo data, thoại miễn phí:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "V90B",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120B",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150B",
                "2GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 80 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V180B",
                "6GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "8GB/ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng.",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Nhóm gói 4G data:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "SD135",
                "5GB/ngày- Miễn phí TV360",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["SD90", "1.5GB/ngày", "90.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "SD120",
                "2GB/ngày- Miễn phí TV360",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["SD70", "1GB/ngày", "70.000đ", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Nhóm gói giải trí TV360:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "TV75K",
                "1GB/ngày- Miễn phí TV360 4K",
                "75.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV90C",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV120C",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV125K",
                "2GB/ngày- Miễn phí TV360 4K",
                "125.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói 4G Mạng xã hội:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["T50K", "50GB truy cập TikTok", "50.000đ", "ĐĂNG KÝĐăng ký"],
              ["YT50K", "50GB truy cập Youtube", "50.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "FB50K",
                "50GB truy cập Facebook và nhắn tin Messenger",
                "50.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G theo chu kỳ 3 tháng đến 1 năm",
        },
        {
          type: "paragraph",
          text: "Các gói cước 4G Viettel theo năm sẽ là lựa chọn tối ưu cho nhu cầu sử dụng liên tục trong 3 tháng đến 1 năm. Người dùng sẽ tiết kiệm được chi phí và không cần lo lắng về việc gia hạn hàng tháng.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "90N",
                "5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "900.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "180N",
                "5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "1.800.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "360N",
                "5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "3.600.000đ(1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Tổng hợp các gói cước 5G phổ biến",
        },
        {
          type: "paragraph",
          text: "So với 4G, tốc độ 5G nhanh hơn gấp 10 lần, có thể đạt tới 10 Gbps trong điều kiện lý tưởng, độ trễ cực thấp gần như bằng 0. Do đó, các ứng dụng như game online, livestream có thể hoạt động mượt mà, không bị giật lag. Bên cạnh đó, 5G không chỉ nhanh hơn mà còn có khả năng kết nối nhiều thiết bị hơn.",
        },
        {
          type: "paragraph",
          text: "Để đăng ký các gói cước 5G Viettel, người dùng có thể thực hiện theo một trong các cách sau:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Soạn tin nhắn: Gửi tin nhắn theo cú pháp quy định của từng gói cước đến tổng đài 290.",
            "Đăng ký trực tuyến trên website " + siteConfig.hostname,
            "Gọi tổng đài: Bấm gọi *098# và làm theo hướng dẫn.",
            "Ứng dụng My Viettel: Truy cập ứng dụng My Viettel trên điện thoại và chọn gói cước phù hợp.",
          ],
        },
        {
          type: "paragraph",
          text: "Dưới đây là các gói cước 5G Viettel, phù hợp với nhiều nhu cầu sử dụng khác nhau:",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G theo ngày",
        },
        {
          type: "paragraph",
          text: "Với nhu cầu sử dụng data di động ngày càng cao của các nhóm khách hàng khác nhau, Viettel Up ra mắt thêm các gói 5G ngắn ngày với chi phí hấp dẫn chỉ từ 7000đ/ngày, các thuê bao có thể trải nghiệm công nghệ mạng 5G tiên tiến nhất hiện nay.",
        },
        {
          type: "paragraph",
          text: "Viettel Up gợi ý 1 số gói cước từ 1 đến 7 ngày, khách hàng có thể đăng ký theo các hướng dẫn phía trên:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              ["ST7K", "1GB/ngày", "7.000đ (1 ngày)", "ĐĂNG KÝĐăng ký"],
              ["5G10", "6GB/ngày", "10.000đ (1 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "5GVS12",
                "6GB/ngày- Miễn phí TV360 4K",
                "12.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["5G30", "21GB (7GB/ngày)", "30.000đ (3 ngày)", "ĐĂNG KÝĐăng ký"],
              ["5G70", "56GB (8GB/ngày)", "70.000đ (7 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "5GVS80",
                "56GB (8GB/ngày)- Miễn phí TV360 4K",
                "80.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G theo tháng",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G135",
                "4GB/ngày- Miễn phí TV360 4K20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngày- Miễn phí TV360 4K- 30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G230B",
                "8GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 4K- 50GB Mybox",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G280B",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 200 phút gọi ngoại mạng- Miễn phí TV360 4K- 70GB Mybox",
                "280.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G330B",
                "12GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 100GB Mybox",
                "330.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G380B",
                "15GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 150GB Mybox",
                "380.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G480B",
                "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
                "480.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước chơi game Liên quân Viettel:",
        },
        {
          type: "paragraph",
          text: "Các game thủ cần có mạng khỏe, mượt để có thể so tài, chiến đấu với các kiện tướng khác trong game. Nhận biết được nhu cầu này của nhóm khách hàng, Viettel đã cho ra mắt rất nhiều gói cước để cho game thủ lựa chọn. Gói cước cho game thủ là sự lựa chọn hoàn hảo cho những ai đam mê trải nghiệm game trực tuyến với yêu cầu cao về tốc độ và độ ổn định.",
        },
        {
          type: "paragraph",
          text: "Trong đó, Liên quân là trò giải trí phổ biến trên di động thu hút rất nhiều game thủ tham gia, khi tham gia trò chơi, bạn phải thao tác liên tục vì vậy việc gián đoạn bởi đường truyền mạng không ổn định sẽ ảnh hưởng rất nhiều nhất là khi bạn đang trong trận đấu, combat. Nhằm đáp ứng nhu cầu chơi game Liên quân của mỗi người, Viettel cho ra mắt các gói cước chơi game như sau:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5GLQ190",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K30GB Mybox",
                "190.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "210.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước 5G Mạng xã hội:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5GMXH200",
                "2GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GMXH230",
                "3GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Hết 50GB truy cập theo ứng dụng sẽ trừ tiếp lưu lượng của gói cước (nếu còn)",
        },
        {
          type: "paragraph",
          text: "Gói cước 5G nhiều phút gọi:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G theo chu kỳ từ 3 tháng đến 1 năm",
        },
        {
          type: "paragraph",
          text: "Khách hàng sử dụng mạng di động thường xuyên có xu hướng lựa chọn các gói cước 5G Viettel chu kỳ dài như: 3 tháng, 6 tháng hoặc 1 năm để sử dụng ưu đãi lâu dài.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "3T5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "600.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "1.200.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "2.400.000đ(1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "900.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng mỗi thángMiễn phí TV360 Basic 4K",
                "1.800.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "3.600.000đ(1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước 5G Viettel 1 năm - 12T5GC200 & 12T5GC300 đang được triển khai, phù hợp với khách hàng có nhu cầu sử dụng data thường xuyên cả năm. Tiết kiệm thời gian đăng ký gia hạn nhiều lần.",
        },
        {
          type: "paragraph",
          text: "Ưu điểm đăng ký gói mạng Viettel cả năm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Sử dụng sim vào mạng 1 năm không lo đóng phí gia hạn.",
            "Không lo bỏ lỡ thời điểm gia hạn gói theo tháng.",
            "Được tặng thêm data khi đăng ký chu kỳ dài.",
          ],
        },
        {
          type: "paragraph",
          text: "Xem thêm: Danh sách các dòng điện thoại hỗ trợ 5G và Hướng dẫn bật 5G trên Android và IOS",
        },
      ],
    },
  },
  "/tin-tuc/lo-trinh-trien-khai-5g-viettel": {
    status: "ready",
    kind: "news-article",
    title:
      "Lộ Trình Triển Khai 5G Viettel – Hỗ Trợ Đối Tác Phát Triển Hệ Sinh Thái",
    description:
      "Viettel đẩy mạnh triển khai 5G từ 2025 với mục tiêu mở rộng 20.000 trạm, hỗ trợ doanh nghiệp qua Network Slicing & API mở. Tìm hiểu chiến lược & tiềm năng 5G tại " +
      siteConfig.hostname +
      ".",
    heading:
      "Lộ Trình Triển Khai 5G Viettel – Hỗ Trợ Đối Tác Phát Triển Hệ Sinh Thái",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/lo-trinh-trien-khai-5g-viettel"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0141.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: a63d29671055de0d78fcb9e807cb344f0832532d00d046811792c0acdfdca1a2",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "20/02/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Trong giai đoạn từ 2025 trở đi, Viettel đang chuẩn bị triển khai định hướng phát triển 5G B2B, hỗ trợ các đối tác cùng phát triển hệ sinh thái sản phẩm 5G.",
        },
        {
          type: "paragraph",
          text: "Viettel đã khởi động hành trình mạng 5G từ năm 2019, đánh dấu bước ngoặt quan trọng với thành công trong thử nghiệm gọi 5G đầu tiên. Đến tháng 3/2024, Viettel chính thức được cấp giấy phép sử dụng băng tần 2600MHz và khai trương mạng 5G vào ngày 15/10/2024. Vào thời điểm khai trương Viettel triển khai khoảng 6.500 trạm, tập trung vào các thành phố lớn, khu công nghiệp và khu vực đông dân cư.",
        },
        {
          type: "paragraph",
          text: "Trong năm 2025 tới đây dự kiến Viettel tiếp tục triển khai mở rộng vùng phủ mạng 5G lên tới xấp xỉ 20.000 trạm phục vụ nhu cầu kinh doanh, mở rộng vùng phủ sóng đến các trung tâm huyện và vùng nông thôn. Với tỷ lệ phủ sóng đạt 95% tại các thành phố lớn và 90% ở các khu công nghiệp, cảng biển, và sân bay. Ông Hải khẳng định rằng Viettel 5G là một trong những mạng 5G hiện đại nhất thế giới, nằm trong top 5% các nhà mạng triển khai mạng 5G SA (Standalone) hoàn chỉnh từ vô tuyến đến mạng lõi ngay từ thời điểm khai trương.",
        },
        {
          type: "paragraph",
          text: "Kết quả triển khai ban đầu rất đáng khích lệ, cụ thể chỉ sau hai tuần, Viettel đã thu hút được 3 triệu thuê bao 5G. Sự hấp dẫn của mạng 5G đã góp phần nâng tốc độ internet di động tại Việt Nam lên mức trung bình 71 Mbps (tăng 30%), đồng thời giúp Việt Nam thăng hạng từ vị trí 51 lên 43 trên bảng xếp hạng toàn cầu của Speedtest Global Index (tháng 10/2024).",
        },
        {
          type: "paragraph",
          text: "Lễ khai mạc sự kiện 5G day",
        },
        {
          type: "paragraph",
          text: "Một điểm nổi bật trong phần thuyết trình là việc triển khai Network Slicing, cho phép phân chia các mạng vật lý thành các mạng logic, phục vụ cho các mục đích kinh doanh hoặc nhu cầu khách hàng khác nhau. Ông Hải giải thích rằng chỉ có mạng 5G SA (Standalone) mới hỗ trợ Network Slicing, giúp phân chia các mạng vật lý thành các mạng logic, mỗi slice phục vụ một mục đích kinh doanh hoặc khách hàng nhất định, căn cứ vào yêu cầu cụ thể về tốc độ, độ trễ, tính bảo mật. Hiện tại, chỉ mạng 5G SA hỗ trợ Network Slicing giúp cá thể hoá dịch vụ 5G. Đối với nhóm khách hàng cá nhân, mạng 5G Viettel đã quy hoạch các loại slice sẵn sàng hỗ trợ các nhóm ứng dụng khác nhau như: Slice yêu cầu băng thông cao (livestreaming, AR/VR, Gaming); Slice yêu cầu độ trễ thấp (V2X, tele-health); Slice hỗ trợ Internet of Things (IoT) với khả năng kết nối hàng loạt thiết bị đồng thời.",
        },
        {
          type: "paragraph",
          text: "Đối với khách hàng doanh nghiệp, Network Slicing giúp các doanh nghiệp linh hoạt lựa chọn mô hình triển khai PMN, theo yêu cầu về bảo mật, độ trễ và tối ưu chi phí. Một use case điển hình là nhà máy thông minh với tổng chi phí khi ứng dụng 5G PMN rẻ hơn gần 22% so với giải pháp truyền thống. Thêm nữa, để sử dụng mạng 5G SA Viettel, khách hàng cá nhân cần có Iphone từ 13 trở lên hoặc một số máy Android như Samsung S21, S22, S23, S24 series. Diễn giả Nguyễn Thanh Hải đồng thời cho biết: “Viettel sẽ tiếp tục ban hành nhiều gói dịch vụ mới cho khách hàng cá nhân trong quý 1 năm 2025”.",
        },
        {
          type: "paragraph",
          text: "Đ/c Nguyễn Thanh Hải phát biểu tại sự kiện",
        },
        {
          type: "paragraph",
          text: "Ông Hải cho rằng, Viettel hiện là nhà mạng Việt Nam đầu tiên tham gia GSMA Open Gateway, phát triển và cung cấp API chuẩn hoá cho nhà phát triển, giúp họ dễ dàng tích hợp ứng dụng vào mạng lưới, giúp khai thác tính năng vượt trội của mạng 5G. Viettel là nhà mạng tiên phong chuyển đổi mạng truyền thống thành mạng “mở”, mạng “có thể lập trình”. Các API tiêu biểu bao gồm: QoD API: Đảm bảo chất lượng băng thông và độ trễ, Device Location API: Cung cấp vị trí thiết bị để hỗ trợ giao dịch an toàn, Number Verification API: Thay thế mật khẩu truyền thống bằng xác thực an toàn hơn và Connectivity Insights: Đánh giá chất lượng đường truyền theo thời gian thực.",
        },
        {
          type: "paragraph",
          text: "Chia sẻ về xu thế triển khai Network APIs, diễn giả đến từ Viettel Network cho biết: “Trên thế giới đã có khoảng 38 Telco tại 23 quốc gia kinh doanh dịch vụ Network APIs, phần lớn các nhà mạng chỉ triển khai 2-5 APIs, hiện có 13/25 API đã công bố được kinh doanh trên thế giới. Điển hình có CAMARA là dự án mã nguồn mở do Linux Foundation và GSMA khởi xướng nhằm phát triển, chuẩn hoá các Network APIs, dự kiến đến tháng 3/2025, CAMARA sẽ cập nhật cho 15 API hiện tại và bổ sung thêm 11 API mới”.",
        },
        {
          type: "paragraph",
          text: "Hiện tại, mạng lưới Viettel đã triển khai hỗ trợ Network APIs, lộ trình từ năm 2025 sẽ phát triển hơn 10 APIs theo chuẩn CAMARA, cung cấp SDK cho nhà phát triển giúp đẩy nhanh tốc độ phát triển dịch vụ, bổ sung môi trường Sandbox cho nhà phát triển. Mục tiêu dài hạn đến năm 2026 là Viettel sẽ liên kết với các nhà mạng trong nước và quốc tế để cung cấp dịch vụ xuyên biên giới, thúc đẩy sự phát triển của hệ sinh thái toàn cầu.",
        },
        {
          type: "paragraph",
          text: "Ngoài ra, Viettel hướng đến việc hỗ trợ doanh nghiệp và nhà phát triển tham gia vào hệ sinh thái 5G. Đối với doanh nghiệp, Network Slicing giúp triển khai mạng dùng riêng cho nhà máy thông minh, cảng biển, sân bay và nhiều mô hình khác. Đối với nhà phát triển, Viettel cung cấp tài khoản thử nghiệm, tài liệu hướng dẫn chi tiết, bộ thư viện SDK và môi trường Sandbox để đẩy nhanh tiến độ tích hợp ứng dụng.",
        },
        {
          type: "paragraph",
          text: 'Viettel cam kết xây dựng một mạng 5G xanh và bền vững, giảm tới 50% năng lượng tiêu thụ và CO2 trên mỗi GB dữ liệu nhờ vào việc sử dụng thiết bị hiện đại. Công nghệ tiết kiệm năng lượng cùng với mô hình "Green Network" không chỉ bảo vệ môi trường mà còn tối ưu hóa chi phí vận hành, mang lại lợi ích lâu dài cho cả doanh nghiệp lẫn người dùng.',
        },
        {
          type: "heading",
          level: 2,
          text: "5G thay đổi ngành công nghiệp giải trí, gaming và truyền hình",
        },
        {
          type: "paragraph",
          text: "Viettel đang triển khai các giải pháp và ứng dụng 5G tiên tiến sẽ thay đổi tương lai của ngành công nghiệp giải trí, gaming và truyền hình, đồng thời khẳng định cam kết của Viettel trong phát triển công nghệ số.",
        },
        {
          type: "paragraph",
          text: "Truyền hình tương tác trên hạ tầng 5G",
        },
        {
          type: "paragraph",
          text: "Công nghệ 5G đã mang lại rất nhiều lợi ích cho Cloud Gaming, trong đó bao gồm băng thông cao và độ trễ thấp. Với băng thông lên đến 100Mbps, người dùng có thể trải nghiệm trò chơi ở độ phân giải 4K@60fps, tương đương với trải nghiệm esports chuyên nghiệp. Sự kết hợp này không chỉ cải thiện chất lượng hình ảnh mà còn giảm thiểu độ trễ xuống chỉ còn 10 - 40ms, tạo ra trải nghiệm gần như tương đương với chơi game trực tiếp trên thiết bị.",
        },
        {
          type: "paragraph",
          text: "Vậy Cloud Gaming là gì?",
        },
        {
          type: "paragraph",
          text: "Ông Đặng Minh Tâm - Kỹ sư giải pháp từ Alibaba Cloud giải thích: Khái niệm này cho phép người dùng chơi game qua Internet mà không cần phần cứng mạnh mẽ. Tận dụng sức mạnh xử lý của máy chủ qua mạng internet, dịch vụ này cung cấp trải nghiệm mượt mà với hình ảnh sắc nét và tốc độ khung hình cao. Có nghĩa là, các trò chơi sẽ được chạy trên các máy chủ từ xa trong trung tâm dữ liệu, với video và âm thanh được truyền trực tiếp đến thiết bị của người chơi. Điều này giúp trải nghiệm của người chơi chất lượng cao hơn trên nhiều thiết bị khác nhau như máy tính, tablet, smart TV và smartphone.",
        },
        {
          type: "paragraph",
          text: "Với ưu thế băng thông lớn, độ trễ thấp và khả năng xử lý đồ họa đỉnh cao, nền tảng Cloud Gaming trên nền tảng 5G đem đến trải nghiệm mượt mà, hình ảnh sắc nét và nội dung đa dạng trên mọi thiết bị. Cloud Gaming không chỉ mang lại giá trị giải trí vượt trội mà còn tối ưu hóa chi phí vận hành và tăng tốc phát hành sản phẩm. Điều này cho phép người dùng nghiệm chất lượng trò chơi cao mà không cần đầu tư vào phần cứng đắt tiền. Hơn nữa, giải pháp này còn giúp tối ưu hóa chi phí vận hành và rút ngắn thời gian phát hành sản phẩm, minh chứng cho sức mạnh của sự kết hợp giữa công nghệ điện toán đám mây và mạng 5G.",
        },
        {
          type: "paragraph",
          text: "Đ/c Phạm Thanh Phương - GĐ Trung tâm Dịch vụ Truyền hình - VTT",
        },
        {
          type: "paragraph",
          text: "Bà Phạm Thanh Phương - Giám đốc Trung tâm Dịch vụ Truyền hình cho biết: “Viettel Telecom và Alibaba Cloud đồng hành đưa Cloud Gaming lên tầm cao mới khi phối hợp cùng Alibaba Cloud giới thiệu giải pháp Cloud Gaming dựa trên nền tảng 5G, mở ra một kỷ nguyên giải trí mới tại Việt Nam.” Liên minh này không chỉ mở ra một kỷ nguyên giải trí mới tại Việt Nam mà còn khẳng định vị thế tiên phong của cả hai công ty trong việc thúc đẩy công nghệ tương lai.",
        },
        {
          type: "heading",
          level: 2,
          text: "Cloud Gaming - Khai thác tiềm năng 5G và tương lai của ngành công nghiệp game",
        },
        {
          type: "paragraph",
          text: "Theo ông Đặng Minh Tâm, Cloud Gaming có thể trở thành mô hình kinh doanh cốt lõi cho các nhà mạng trong kỷ nguyên 5G tới đây, mở ra cơ hội lớn cho các nhà mạng. Các nhà mạng có thể cung cấp các gói dịch vụ game di động, gói TV và băng thông rộng, và dịch vụ Cloud e-sports cho khách hàng. Điều này không chỉ giúp tăng doanh thu cho doanh nghiệp mà còn tạo ra những cơ hội mới trong việc phát triển dịch vụ giá trị gia tăng.",
        },
        {
          type: "paragraph",
          text: "Thành công tiêu biểu là Migu, một công ty con của China Mobile. Công ty này đã phát triển nền tảng Cloud Gaming có tên “Migu Kuaiyou”, cho phép người dùng truy cập vào hàng ngàn trò chơi chất lượng cao mà không cần tải xuống. Nền tảng này khi ra mắt đã thu hút lượng lớn người dùng và tạo ra doanh thu đáng kể nhờ vào trải nghiệm chơi game tuyệt vời và mô hình kinh doanh linh hoạt cùng trải nghiệm xuất sắc.",
        },
        {
          type: "paragraph",
          text: "Hệ sản phẩm 5G - Cuộc sống mới",
        },
        {
          type: "paragraph",
          text: "Hệ thống Cloud Gaming dựa trên công nghệ ảo hóa GPU tiên tiến, tối ưu hóa hiệu suất mã hóa với khả năng xử lý đồ họa mạnh mẽ. Với thời gian mã hóa dưới 4ms và tốc độ lên đến 4K 200fps, hệ thống này đảm bảo chất lượng hình ảnh vượt trội trong mọi điều kiện mạng. Ông cũng nhấn mạnh rằng các giao thức truyền dẫn tiên tiến như WebRTC, RTP và SRT được tùy chỉnh để giảm thiểu độ trễ, đảm bảo truyền tải dữ liệu ổn định và tiết kiệm tài nguyên mạng. Cloud Gaming hiện được triển khai dưới nhiều mô hình kinh doanh khác nhau, bao gồm game trên di động, chương trình giải trí trên TV và dịch vụ vận hành trọn gói cho các chuỗi khách sạn, resort. Những nền tảng Cloud Gaming hàng đầu tại Trung Quốc là minh chứng rõ ràng nhất cho tiềm năng thương mại của công nghệ này, với doanh thu đáng kể nhờ lượng người dùng khổng lồ.",
        },
        {
          type: "paragraph",
          text: "Sự xuất hiện của 5G không chỉ thay đổi thói quen tiêu thụ nội dung của người dùng mà còn mở ra những cơ hội mới cho các doanh nghiệp trong lĩnh vực giải trí. Viettel Telecom, với sự hỗ trợ từ Alibaba Cloud, đang tiên phong xây dựng một hệ sinh thái giải trí tương lai bao gồm các dịch vụ tích hợp giữa Cloud Gaming và các nền tảng truyền hình thông minh.",
        },
        {
          type: "heading",
          level: 2,
          text: "Nhu cầu của khách hàng 5G tại Việt Nam và xu hướng trên thế giới",
        },
        {
          type: "paragraph",
          text: "Viettel hiện sở hữu mạng lưới 5G rộng lớn nhất Việt Nam, với tốc độ truy cập vượt trội và độ trễ thấp, mang lại trải nghiệm chưa từng có cho người dùng. Viettel không chỉ cung cấp công nghệ mà còn kiến tạo tương lai – nơi mọi nhu cầu của người dùng đều được đáp ứng thông minh và hiệu quả, đồng thời khẳng định vị thế dẫn đầu trong kỷ nguyên 5G.",
        },
        {
          type: "paragraph",
          text: "Hiện nay, công nghệ 5G đã được triển khai thương mại bởi 320 nhà mạng trên toàn thế giới, với vùng phủ sóng trải dài qua 110 quốc gia, phục vụ khoảng 55% dân số toàn cầu. Theo thống kê của năm 2024, thuê bao 5G toàn cầu có tốc độ tăng trưởng mạnh mẽ với 2,2 tỷ người dùng, tương đương 26% thuê bao di động. Những con số này không chỉ cho thấy tiềm năng to lớn của thị trường 5G mà còn định hình tương lai của công nghệ và viễn thông toàn cầu.",
        },
        {
          type: "paragraph",
          text: "Ảnh chụp tại sự kiện Viettel 5G day",
        },
        {
          type: "paragraph",
          text: "Trong bối cảnh đó, là nhà mạng đầu tiên thương mại hóa dịch vụ 5G tại Việt Nam, Viettel đã đạt được vùng phủ sóng hàng đầu với 99% tại 63 tỉnh thành. Kết quả này vượt xa so với nhiều quốc gia khác khi mới ra mắt công nghệ này; ví dụ, Hàn Quốc chỉ đạt 82%, Indonesia là 23%, và Úc là 12%. Trong vòng 5 năm tới, Viettel đặt mục tiêu mở rộng vùng phủ sóng 5G tương đương với mạng 4G, tạo ra một bước tiến vượt bậc trong kết nối tại Việt Nam.",
        },
        {
          type: "paragraph",
          text: "Chia sẻ về xu hướng sử dụng Internet của người dùng Việt Nam, ông Nguyễn Văn Sơn - Giám đốc Trung tâm Di động Viettel Telecom cho biết: “Trung bình năm 2024, mỗi người Việt ghé thăm 67 trang web, thời lượng nhiều nhất dùng cho mạng xã hội tương đương với 27%. Đồng thời, các thế hệ khi sử dụng mạng xã hội cũng có sự khác biệt.” Cụ thể, Gen Z trung bình sẽ dùng đến 3 mạng xã hội lần lượt là Facebook, Tiktok, Youtube, trong khi đó Gen X và Gen Y chỉ dùng 2 ứng dụng là Facebook và Zalo. Đặc biệt, nhóm khách hàng sử dụng 5G chủ yếu nằm trong độ tuổi từ 18-34, chiếm tới 67,1%, trong khi những người làm việc trong lĩnh vực công nghệ chiếm khoảng 32% so với các ngành nghề khác.",
        },
        {
          type: "paragraph",
          text: "Sự xuất hiện của công nghệ 5G đã tạo ra những thay đổi đáng kể trong cách thức người dùng tiêu thụ dữ liệu. Trung bình cứ 1 trên 5 khách hàng (tương đương với 20%) đã chuyển lên 5G sẽ giảm hành vi sử dụng Wifi và chuyển sang dùng data di động, đồng thời tăng thời gian sử dụng data trên di động. Điều này phản ánh khả năng kết nối mạnh mẽ và ổn định mà công nghệ mới này mang lại, đáp ứng tốt hơn nhu cầu của người dùng hiện đại.",
        },
        {
          type: "paragraph",
          text: "Ông Nguyễn Văn Sơn cho biết, sắp tới các use case 5G thu hút khách hàng cá nhân nhất sẽ được Viettel ưu tiên bao gồm: Kết nối băng thông rộng không dây (FWA), Ultra HD và livestream chất lượng cao, dịch vụ chăm sóc sức khỏe từ xa và mua sắm với trải nghiệm thực tế tăng cường (AR). Đồng thời Viettel triển khai hệ sinh thái 5G cho doanh nghiệp bao gồm 8 nhóm giải pháp liên quan đến các lĩnh vực: y tế, giáo dục, nông nghiệp, sản xuất công nghiệp, thành phố thông minh, năng lượng, giao thông vận tải và logistic. Đây không chỉ là một công nghệ mới, 5G đã tạo ra những thay đổi căn bản trong hành vi người dùng và mở ra nhiều cơ hội cho doanh nghiệp. Với chiến lược đúng đắn, Viettel không chỉ khẳng định vị thế tại thị trường Việt Nam mà còn mở rộng ảnh hưởng ở khu vực và toàn cầu.",
        },
        {
          type: "paragraph",
          text: "Danh sách gói cước 5G Viettel đã ra mắt (Cập nhật tháng 02/2025)",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025": {
    status: "ready",
    kind: "news-article",
    title: "Gói cước 4G, 5G Viettel tháng 2/2025 - Khuyến mãi mới nhất",
    description:
      "Cập nhật danh sách gói cước 4G, 5G Viettel tháng 2/2025 với ưu đãi data khủng, giá siêu tiết kiệm. Xem ngay cách đăng ký để tận hưởng internet tốc độ cao!",
    heading: "Gói cước 4G, 5G Viettel cập nhật tháng 2/2025",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0142.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: a08dd94042bc86fb4bdf94d406828aac955817f3349bee35e8bdce0d09d29e2f",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "14/2/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Danh sách tổng hợp các gói cước di động 4G 5G Viettel tốc độ cao, phủ sóng mạnh mẽ, giá rẻ đa dạng chu kỳ từ 1 ngày, 1 tháng, đến 1 năm, giúp khách hàng truy cập internet mọi nơi.",
        },
        {
          type: "paragraph",
          text: "Gói cước 4G 5G Viettel tháng 2/2025",
        },
        {
          type: "heading",
          level: 2,
          text: "CÁCH ĐĂNG KÝ 4G, 5G VIETTEL",
        },
        {
          type: "paragraph",
          text: "Để mang lại sự thuận tiện tối đa cho khách hàng, Viettel Telecom cung cấp nhiều phương thức đăng ký gói cước linh hoạt và dễ dàng. Khách hàng có thể đăng ký các gói Data 4G, 5G cho thuê bao di động Viettel bằng các cách sau:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhắn SMS đến tổng đài 191 hoặc 290",
            "Ứng dụng My Viettel ngay trên điện thoại",
            "Đăng ký trực tuyến trên website " + siteConfig.hostname,
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "GÓI CƯỚC 5G VIETTEL",
        },
        {
          type: "paragraph",
          text: "Viettel đã triển khai mạng 5G siêu tốc tại tất cả 63 tỉnh thành trên toàn quốc, mang đến cho khách hàng trải nghiệm tốc độ vượt trội lên đến 1Gbps, gấp 10 lần so với 4G cùng độ trễ thấp gần như bằng 0. Các gói cước 5G dưới đây giúp bạn tận hưởng công nghệ mạng di động 5G tiên tiến, mạnh mẽ và ổn định nhất. Đặc biệt, các gói cước 5G Viettel vẫn có thể sử dụng trên điện thoại 4G và hoạt động tốt trên mạng 4G tại những khu vực chưa có sóng 5G.",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G Viettel tháng",
        },
        {
          type: "paragraph",
          text: "Hiện nay, thuê bao Viettel có thể dễ dàng đăng ký các gói cước data theo tháng (30 ngày sử dụng) để tiết kiệm chi phí và tận hưởng dung lượng truy cập lớn. Sau đây là 5 lý do khách hàng yêu thích các gói cước theo tháng:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Dễ dàng quản lý chi phí: Giá cố định hàng tháng: Khách hàng có thể biết trước số tiền phải trả mỗi tháng, giúp họ dễ dàng lập kế hoạch tài chính mà không lo phát sinh chi phí bất ngờ.",
            "Tiết kiệm và linh hoạt: Nhiều ưu đãi và khuyến mãi và gói cước đa dạng.",
            "Sự tiện lợi: Gói cước tự động gia hạn và không cần nạp tiền thường xuyên",
            "Gói cước linh hoạt và phù hợp với nhiều đối tượng, đáp ứng nhu cầu đa dạng và dễ dàng thay đổi gói cước",
            "Quản lý dễ dàng thông qua ứng dụng hoặc website",
          ],
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G135",
                "4GB/ngày- Miễn phí TV360 4K20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngày- Miễn phí TV360 4K- 30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G230B",
                "8GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 4K- 50GB Mybox",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G280B",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 200 phút gọi ngoại mạng- Miễn phí TV360 4K- 70GB Mybox",
                "280.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G330B",
                "12GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 100GB Mybox",
                "330.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G380B",
                "15GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 150GB Mybox",
                "380.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G480B",
                "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phút và 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
                "480.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ190",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K30GB Mybox",
                "190.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "6GB/ngày- 2GB/ngày chơi Liên Quân- Miễn phí gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB Mybox",
                "210.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G Viettel Mạng xã hội",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5GMXH200",
                "2GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GMXH230",
                "3GB/ngày- Miễn phí gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- 50GB Facebook & nhắn tin Messenger- 50GB TikTok- 50GB Youtube",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Hết 50GB truy cập theo ứng dụng sẽ trừ tiếp lưu lượng của gói cước (nếu còn)",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G Viettel nhiều phút gọi",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng- Miễn phí TV360 Basic 4K",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói cước 5G Viettel chu kỳ từ 3 tháng đến 1 năm",
        },
        {
          type: "paragraph",
          text: "Khách hàng sử dụng mạng di động thường xuyên có xu hướng lựa chọn các gói cước 5G Viettel chu kỳ dài như: 3 tháng, 6 tháng hoặc 1 năm để sử dụng ưu đãi lâu dài.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "3T5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "600.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "1.200.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G200C",
                "6GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "2.400.000đ(1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "900.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng mỗi thángMiễn phí TV360 Basic 4K",
                "1.800.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G300C",
                "10GB/ngày- Miễn phí gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng mỗi tháng- Miễn phí TV360 Basic 4K",
                "3.600.000đ(1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Gói cước 5G Viettel 1 năm - 12T5GC200 & 12T5GC300 đang được triển khai, phù hợp với khách hàng có nhu cầu sử dụng data thường xuyên cả năm. Tiết kiệm thời gian đăng ký gia hạn nhiều lần.",
        },
        {
          type: "paragraph",
          text: "Ưu điểm đăng ký gói mạng Viettel cả năm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Sử dụng sim vào mạng 1 năm không lo đóng phí gia hạn.",
            "Không lo bỏ lỡ thời điểm gia hạn gói theo tháng.",
            "Được tặng thêm data khi đăng ký chu kỳ dài.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "GÓI CƯỚC 4G VIETTEL",
        },
        {
          type: "paragraph",
          text: "Với hệ thống hạ tầng mạng 4G phủ sóng toàn quốc, Viettel mang đến cho khách hàng những gói cước 4G đa dạng, giá chỉ từ 70.000 đồng/tháng. Các gói cước này không chỉ cung cấp tốc độ truy cập nhanh mà còn đáp ứng đầy đủ nhu cầu làm việc, học tập và giải trí của tất cả thuê bao di động Viettel.",
        },
        {
          type: "paragraph",
          text: "Để tiện lợi và phù hợp với từng đối tượng, các gói cước 4G được phân loại thành các nhóm gói cước sau:",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G Viettel data",
        },
        {
          type: "paragraph",
          text: "Nhóm các gói SD của Viettel là những gói cước 4G được nhiều khách hàng tin tưởng lựa chọn nhờ ưu điểm vượt trội: cung cấp lưu lượng data lớn, tốc độ cao. Dưới đây là bảng thông tin chi tiết các gói cước 4G 1 tháng siêu tốc của Viettel. Mời bạn tham khảo và lựa chọn:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "SD135",
                "5GB/ngày- Miễn phí TV360",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["SD90", "1.5GB/ngày)", "90.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "SD120",
                "2GB/ngày- Miễn phí TV360",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["SD70", "1GB/ngày", "70.000đ", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Để đăng ký các gói cước 4G, 5G 1 tháng (30 ngày) của Viettel, khách hàng soạn tin nhắn: tên-gói UP gửi 290. Ví dụ: SD135 UP gửi 290 nhận gói data 5GB /ngày.",
        },
        {
          type: "heading",
          level: 3,
          text: "Gói giải trí TV360",
        },
        {
          type: "paragraph",
          text: "Khi đăng ký các gói cước Data 4G Viettel 1 tháng dưới đây, bạn sẽ được thoải mái tận hưởng thế giới giải trí đa dạng trên ứng dụng TV360 của Viettel. Với kho phim khổng lồ và gần 200 kênh truyền hình đặc sắc, ứng dụng mang đến trải nghiệm giải trí trọn vẹn, mọi lúc, mọi nơi.",
        },
        {
          type: "paragraph",
          text: "Điểm đặc biệt:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Xem các giải bóng đá hấp dẫn như UEFA Euro, Ngoại Hạng Anh, Serie A, Ligue 1, Bundesliga mà không tốn phí data.",
            "Truy cập mượt mà với tốc độ cao, đáp ứng tối đa nhu cầu giải trí của bạn.",
          ],
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "TV75K",
                "1GB/ngày- Miễn phí TV360 4K",
                "75.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV90C",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV120C",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV125K",
                "2GB/ngày- Miễn phí TV360 4K",
                "125.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G Mạng xã hội",
        },
        {
          type: "paragraph",
          text: "Các gói cước MXH của Viettel mạng đến ưu đãi không giới hạn data truy cập mạng xã hội như YouTube, TikTok, Facebook và nhắn tin qua Messenger, giúp bạn thoải mái kết nối và giải trí suốt cả ngày mà không lo hết dung lượng.",
        },
        {
          type: "paragraph",
          text: "Ưu đãi nổi bật:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Truy cập không giới hạn vào các ứng dụng mạng xã hội phổ biến.",
            "Tặng kèm data truy cập Internet tốc độ cao để sử dụng cho các nhu cầu khác.",
            "Phù hợp cho cả giải trí, học tập, và công việc.",
          ],
        },
        {
          type: "paragraph",
          text: "Một số gói cước 4G mạng xã hội các thuê bao Viettel có thể tham khảo:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G combo data, gọi miễn phí",
        },
        {
          type: "paragraph",
          text: "Nếu bạn có nhu cầu sử dụng nhiều data và thường xuyên gọi thoại, các gói cước combo của Viettel chính là lựa chọn hoàn hảo. Đặc biệt, với nhóm này, một số gói cước với siêu data cung cấp đến 8GB/ngày rất phù hợp với nhu cầu tiêu thụ dữ liệu di động lớn của đa số mọi người. Với các gói này, bạn sẽ nhận được:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Data tốc độ cao đáp ứng mọi nhu cầu truy cập Internet.",
            "Gọi thoại miễn phí, cả nội mạng lẫn ngoại mạng, giúp bạn kết nối thoải mái.",
          ],
        },
        {
          type: "paragraph",
          text: "Một số gói combo data thoại 4G Viettel:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "V90B",
                "1GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120B",
                "1.5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150B",
                "2GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 80 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V160B",
                "4GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V180B",
                "6GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng.",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "8GB/ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng.",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G viettel 1 tháng rẻ nhất",
        },
        {
          type: "paragraph",
          text: "Hiện nay, gói cước 4G Viettel 1 tháng giá rẻ nhất chỉ 50.000đ gồm các gói YT50K, FB50K và T50K, cung cấp 50GB data truy cập YouTube, Facebook hoặc TikTok trong 30 ngày. Đăng ký bằng cú pháp Tên-gói UP gửi 290. Ví dụ: T50K UP gửi 290 để đăng ký gói xem TikTok.",
        },
        {
          type: "table",
          table: {
            headings: ["TÊN GÓI", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", ""],
            rows: [
              ["T50K", "50GB truy cập TikTok", "50.000đ", "ĐĂNG KÝĐăng ký"],
              ["YT50K", "50GB truy cập Youtube", "50.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "FB50K",
                "50GB truy cập Facebook và nhắn tin Messenger",
                "50.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G Viettel ngày",
        },
        {
          type: "paragraph",
          text: "Nếu chỉ có nhu cầu sử dụng data trong 1-5 ngày, thuê bao di động Viettel có thể lựa chọn các gói cước theo ngày giá rẻ mỗi ngày 5.000 đ, 10.000 đồng sau đây",
        },
        {
          type: "table",
          table: {
            headings: ["TÊN GÓI", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "T5K",
                "15GB truy cập TikTok",
                "5.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "YT5K",
                "15GB truy cập Youtube",
                "5.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FB5K",
                "15GB truy cập Facebook và nhắn tin Messenger",
                "5.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "1N",
                "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "10.000đ(1 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3N",
                "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút và 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "30.000đ(3 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["ST15K", "3GB/3 ngày", "15.000đ(3 ngày)", "ĐĂNG KÝĐăng ký"],
              ["MI20K", "2GB/5 ngày", "20.000đ(5 ngày)", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G Viettel tuần (1-2 tuần)",
        },
        {
          type: "paragraph",
          text: "Các gói cước dưới đây có thời hạn sử dụng 15 ngày, dành cho các thuê bao Viettel có nhu cầu sử dụng trong thời gian ngắn. Các gói cước đều có ưu đãi miễn phí gọi thoại và data 4G.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "7N",
                "35GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút và 35 phút gọi ngoại mạng- Miễn phí SMS nội mạngMiễn phí TV360",
                "70.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["ST30K", "7GB/7 ngày", "30.000đ(7 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "C20K",
                "1GB/7 ngày- 50 phút gọi nội mạng",
                "20.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "F30",
                "3GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút",
                "30.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "FT50",
                "7GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "50.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV35K",
                "7GB/7 ngày- Miễn phí TV360 4K",
                "35.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV65K",
                "14GB/14 ngày- Miễn phí TV360 4K",
                "65.000đ(14 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V50K",
                "7GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút",
                "50.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V100K",
                "21GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 20 phút và 25 phút gọi ngoại mạng",
                "100.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "EST30",
                "7GB/7 ngày- Miễn phí data chơi Liên Quân",
                "30.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V30X",
                "3.5GB/7 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "30.000đ(7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              ["MI50K", "5GB/7 ngày", "50.000đ(7 ngày)", "ĐĂNG KÝĐăng ký"],
              [
                "V15B",
                "500MB/15 ngày- Miễn phí cuộc gọi nội mạng dưới 5 phút",
                "15.000đ(15 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V25B",
                "2GB/15 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "25.000đ(15 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V35B",
                "7.5GB/15 ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút",
                "35.000đ(15 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 3,
          text: "Gói 4G Viettel chu kỳ từ 3 tháng đến 1 năm",
        },
        {
          type: "paragraph",
          text: "Thuê bao di động sử dụng mạng internet thường xuyên có xu hướng lựa chọn các gói cước 4G Viettel chu kỳ dài như: 3 tháng, 6 tháng hoặc 1 năm để sử dụng ưu đãi lâu dài.",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "90N",
                "5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "900.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "180N",
                "5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "1.800.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "360N",
                "5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
                "3.600.000đ(1 năm)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "LỢI ÍCH CỦA VIỆC ĐĂNG KÝ MẠNG VIETTEL",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tốc độ truy cập nhanh: Mạng 4G/5G Viettel cho tốc độ truy cập Internet nhanh chóng.",
            "Phạm vi phủ sóng rộng: Mạng 4G/5G Viettel phủ sóng toàn quốc, đảm bảo kết nối không bị gián đoạn.",
            "Tiết kiệm chi phí: Lựa chọn gói cước phù hợp với nhu cầu sử dụng để tiết kiệm chi phí.",
            "Trải nghiệm không giới hạn: Kết nối Internet không giới hạn cho các dịch vụ giải trí, làm việc, học tập.",
            "Ổn định và bảo mật: Chất lượng kết nối ổn định và bảo mật cao nhờ hạ tầng kỹ thuật tiên tiến và các thuật toán bảo mật hiện đại.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "CÁCH HUỶ GÓI CƯỚC VIETTEL",
        },
        {
          type: "paragraph",
          text: "Để hủy gói cước: Soạn HUY [Tên gói cước] gửi 191 (miễn phí), dung lượng và ưu đãi còn lại của gói cước được duy trì đến ngày kết thúc gói cước.",
        },
        {
          type: "heading",
          level: 2,
          text: "MỘT SỐ CÂU HỎI VỀ DỊCH VỤ ĐĂNG KÝ GÓI CƯỚC DI ĐỘNG DATA 4G 5G CỦA VIETTEL",
        },
        {
          type: "paragraph",
          text: "1. Làm sao để kiểm tra dung lượng data còn lại của gói 4G, 5G Viettel?",
        },
        {
          type: "paragraph",
          text: "Trả lời: Soạn tin nhắn theo cú pháp KTTK gửi 191 (miễn phí).",
        },
        {
          type: "paragraph",
          text: "2. Làm sao để gia hạn gói 4G, 5G Viettel?",
        },
        {
          type: "paragraph",
          text: "Trả lời: Đảm bảo tài khoản chính có đủ tiền, gói cước 4G sẽ tự động gia hạn vào ngày cuối của chu kỳ.",
        },
        {
          type: "paragraph",
          text: "3. Làm sao để biết đang sử dụng gói 4G, 5G nào?",
        },
        {
          type: "paragraph",
          text: "Trả lời: Soạn tin KTTK gửi 191 để kiểm tra gói cước đang sử dụng.",
        },
        {
          type: "paragraph",
          text: "4. Hủy gói cước 4G, 5G đang dùng như thế nào?",
        },
        {
          type: "paragraph",
          text: "Trả lời: Soạn tin nhắn HUY gửi 191 và làm theo hướng dẫn.",
        },
        {
          type: "paragraph",
          text: "5. Tôi có thể chia sẻ gói Data của mình cho người khác không?",
        },
        {
          type: "paragraph",
          text: "Trả lời: Có, bạn có thể chia sẻ gói data di động qua hình thức phát wifi.",
        },
        {
          type: "paragraph",
          text: "6. Máy 4G có sử dụng được gói 5G không ?",
        },
        {
          type: "paragraph",
          text: "Trả lời: Có, điện thoại 4G vẫn có thể sử dụng các gói cước 5G Viettel ở tốc độ mạng 4G.",
        },
        {
          type: "heading",
          level: 2,
          text: "MỘT SỐ THÔNG TIN VỀ VIETTEL VÀ 5G VIETTEL TRONG NĂM 2025",
        },
        {
          type: "paragraph",
          text: "Trong suốt hành trình 35 năm xây dựng và phát triển, Viettel đã tạo dựng cho mình các thế mạnh:",
        },
        {
          type: "paragraph",
          text: "- Gần 120.000 trạm phát sóng 2G- 5G được lắp đặt trên toàn quốc kể cả vùng sâu, vùng xa, biên giới và hải đảo.",
        },
        {
          type: "paragraph",
          text: "- Mạng 4G lớn nhất Việt Nam với 45.000 trạm phát sóng, độ phủ đạt 97% dân số.",
        },
        {
          type: "paragraph",
          text: "- Hạ tầng cáp quang lớn nhất Việt Nam với hơn 380.000km.",
        },
        {
          type: "paragraph",
          text: "- Hạ tầng Gpon lớn nhất Việt Nam với hơn 11 triệu cổng, cung cấp tới 100% số huyện, huyện đảo gần bờ và 95% số xã trên toàn quốc.",
        },
        {
          type: "paragraph",
          text: "- Tiên phong trong cung cấp dịch vụ 5G.",
        },
        {
          type: "paragraph",
          text: "Tiến vào kỷ nguyên vươn mình của dân tộc, Viettel định hướng mục tiêu:",
        },
        {
          type: "paragraph",
          text: "- Trở thành doanh nghiệp chủ đạo kiến tạo xã hội số tại Việt Nam, đạt doanh thu dịch vụ 100 nghìn tỷ vào năm 2025",
        },
        {
          type: "paragraph",
          text: "- Số một về thị phần di động và cố định băng rộng tại Việt Nam",
        },
        {
          type: "paragraph",
          text: "- Chuyển dịch Viettel Telecom thành một doanh nghiệp viễn thông số, có dịch vụ khách hàng và trải nghiệm khách hàng số 1 tại Việt Nam",
        },
        {
          type: "paragraph",
          text: "- Tiên phong về công nghệ 5G, IoT và các hạ tầng đáp ứng cơ hội phát triển trong cuộc Cách mạng công nghiệp 4.0",
        },
        {
          type: "paragraph",
          text: "- Hoàn thiện hệ sinh thái sản phẩm dịch vụ số, đưa tỷ trọng doanh thu dịch vụ số tương đương với các nhà mạng trong khu vực và trên thế giới",
        },
      ],
    },
  },
  "/tin-tuc/goi-5g-viettel-3-thang-6-thang-12-thang": {
    status: "ready",
    kind: "news-article",
    title:
      "Gói Cước 5G Viettel Chu Kỳ Dài 3 Tháng, 6 Tháng, 12 Tháng - Siêu Tiết Kiệm, Dung Lượng Khủng",
    description:
      "Khám phá các gói cước 5G Viettel chu kỳ 3 tháng, 6 tháng, 12 tháng với dung lượng data siêu tốc, giá siêu ưu đãi. Lựa chọn lý tưởng cho người dùng có nhu cầu sử dụng ổn định, dài hạn. Đăng ký dễ dàng qua SMS hoặc My Viettel!",
    heading:
      "Gói Cước 5G Viettel Chu Kỳ Dài – Kết Nối Ổn Định, Tốc Độ Đỉnh Cao",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-5g-viettel-3-thang-6-thang-12-thang"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0143.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 8fc1a527e786525717bd0cde219f04b112bdaad39d9eede7a2d76fa4281c1544",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "22/01/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Nếu bạn đang tìm kiếm gói 5G Viettel chu kỳ dài với mức giá ưu đãi và dung lượng lớn, thì các gói cước 5G Viettel 3 tháng, 6 tháng, 12 tháng là lựa chọn hoàn hảo. Không cần gia hạn hàng tháng, tiết kiệm tối đa cho người dùng có nhu cầu sử dụng mạng 5G Viettel ổn định trong thời gian dài.",
        },
        {
          type: "heading",
          level: 2,
          text: "Ưu Đãi Các Gói 5G Viettel Chu Kỳ 3 Tháng",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G DATA", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "3T5G135",
                "360GB (4GB/ngày)- Miễn phí TV360 4K- 20GB lưu trữ Mybox",
                "405.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G150",
                "540GB (6GB/ngày)- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "450.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G COMBO", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "3T5G160B",
                "360GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút- Miễn phí 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB lưu trữ Mybox",
                "480.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G180B",
                "540GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút- Miễn phí 300 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "540.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G230B",
                "720GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 450 phút gọi ngoại mạng- Miễn phí TV360 4K- 50GB lưu trữ Mybox",
                "690.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G280B",
                "900GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 600 phút gọi ngoại mạng- Miễn phí TV360 4K- 70GB lưu trữ Mybox",
                "840.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G330B",
                "1.080GB (12GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 900 phút gọi ngoại mạng- Miễn phí TV360 4K- 100GB lưu trữ Mybox",
                "990.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G380B",
                "1.350GB (15GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 900 phút gọi ngoại mạng- Miễn phí TV360 4K- 150GB lưu trữ Mybox",
                "1.140.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G480B",
                "1.800GB (20GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 900 phút gọi ngoại mạng- Miễn phí TV360 4K- 200GB lưu trữ Mybox",
                "1.440.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G LIÊN QUÂN", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "3T5GLQ190",
                "540GB (6GB/ngày)- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "570.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5GLQ210",
                "540GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 300 phút gọi ngoại mạng- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "570.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G KM", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "3T5G200C",
                "540GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 450 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "600.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "3T5G300C",
                "900GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 750 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "900.000đ(3 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Đây là các gói mạng Viettel 5G mới nhất chu kỳ 3 tháng, rất phù hợp với người dùng văn phòng, học sinh – sinh viên có nhu cầu ổn định trong ngắn hạn.",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Cước Viettel 5G Chu Kỳ 6 Tháng",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G DATA", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "6T5G135",
                "720GB (4GB/ngày)- Miễn phí TV360 4K- 20GB lưu trữ Mybox",
                "810.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G150",
                "1.080GB (6GB/ngày)- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "900.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G COMBO", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "6T5G160B",
                "720GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút- Miễn phí 600 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB lưu trữ Mybox",
                "960.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G180B",
                "1.080GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút- Miễn phí 600 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "1.080.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G230B",
                "1.440GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 900 phút gọi ngoại mạng- Miễn phí TV360 4K- 50GB lưu trữ Mybox",
                "1.380.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G280B",
                "1.800GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.200 phút gọi ngoại mạng- Miễn phí TV360 4K- 70GB lưu trữ Mybox",
                "1.680.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G330B",
                "2.160GB (12GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.800 phút gọi ngoại mạng- Miễn phí TV360 4K- 100GB lưu trữ Mybox",
                "1.980.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G380B",
                "2.700GB (15GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.800 phút gọi ngoại mạng- Miễn phí TV360 4K- 150GB lưu trữ Mybox",
                "2.280.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G480B",
                "3.600GB (20GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.800 phút gọi ngoại mạng- Miễn phí TV360 4K- 200GB lưu trữ Mybox",
                "2.880.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G LIÊN QUÂN", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "6T5GLQ190",
                "1.080GB (6GB/ngày)- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "1.140.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5GLQ210",
                "1.080GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 600 phút gọi ngoại mạng- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "1.260.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G KM GỌI", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "6T5G200C",
                "1.080GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 900 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "1.200.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "6T5G300C",
                "1.800GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.500 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "1.800.000đ(6 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Đây là những gói data Viettel dài hạn giúp bạn kết nối liên tục với mức cước phí 5G Viettel tiết kiệm nhất. Phù hợp cho làm việc từ xa, học tập trực tuyến.",
        },
        {
          type: "heading",
          level: 2,
          text: "Gói Cước 5G Viettel Dành Cho 12 Tháng",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G DATA", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "12T5G135",
                "1.440GB (4GB/ngày)- Miễn phí TV360 4K- 20GB lưu trữ Mybox",
                "1.620.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G150",
                "2.160GB (6GB/ngày)- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "1.800.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G COMBO", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "12T5G160B",
                "1.440GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút- Miễn phí 1.200 phút gọi ngoại mạng- Miễn phí TV360 4K- 20GB lưu trữ Mybox",
                "1.920.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G180B",
                "2.160GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút- Miễn phí 1.200 phút gọi ngoại mạng- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "2.160.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G230B",
                "2.880GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.800 phút gọi ngoại mạng- Miễn phí TV360 4K- 50GB lưu trữ Mybox",
                "2.760.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G280B",
                "3.600GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 2.400 phút gọi ngoại mạng- Miễn phí TV360 4K- 70GB lưu trữ Mybox",
                "3.360.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G330B",
                "4.320GB (12GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 3.600 phút gọi ngoại mạng- Miễn phí TV360 4K- 100GB lưu trữ Mybox",
                "3.960.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G380B",
                "5.400GB (15GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 3.600 phút gọi ngoại mạng- Miễn phí TV360 4K- 150GB lưu trữ Mybox",
                "4.560.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G480B",
                "7.200GB (20GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 3.600 phút gọi ngoại mạng- Miễn phí TV360 4K- 200GB lưu trữ Mybox",
                "5.760.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G LIÊN QUÂN", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "12T5GLQ190",
                "2.160GB (6GB/ngày)- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "2.280.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5GLQ210",
                "2.160GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.200 phút gọi ngoại mạng- 2GB/ngày chơi Liên Quân- Miễn phí TV360 4K- 30GB lưu trữ Mybox",
                "2.520.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G KM", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "12T5G200C",
                "2.160GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 1.800 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "2.400.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "12T5G300C",
                "3.600GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút- Miễn phí 3.000 phút gọi ngoại mạng- Miễn phí TV360 4K",
                "3.600.000đ(12 tháng)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Nếu bạn muốn đăng ký gói 5G Viettel dài hạn mà không phải lo gia hạn hàng tháng, thì các gói chu kỳ 12 tháng là lựa chọn đáng cân nhắc.",
        },
        {
          type: "heading",
          level: 2,
          text: "Lưu Ý Khi Đăng Ký Gói Cước 5G Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Lưu lượng của gói cước 5G có thể sử dụng trên tất cả các hạ tầng.",
            "Thuê bao không bắt buộc phải sử dụng máy 5G khi đăng ký gói cước 5G trên, tuy nhiên để truy cập data hạ tầng 5G, thuê bao phải thoả mãn đồng thời các điều kiện: có máy 5G, bật chế độ 5G trên máy, có sim 5G, đăng ký một trong các gói cước 5G trên và sử dụng tại khu vực có 5G",
          ],
        },
        {
          type: "paragraph",
          text: "Xem thêm: hướng dẫn cách bật 5G trên IOS và Android",
        },
        {
          type: "heading",
          level: 2,
          text: "Lợi Ích Khi Đăng Ký Gói 5G Viettel Chu Kỳ Dài",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tiết kiệm vượt trội so với gói tháng",
            "Không lo gia hạn mỗi tháng – an tâm kết nối liên tục",
            "Dung lượng lớn phù hợp cho làm việc, giải trí, học online",
            "Trải nghiệm mạng 5G Viettel tốc độ cao, ổn định suốt chu kỳ",
            "Sim 5G Viettel hỗ trợ tối đa hiệu năng khi kết hợp cùng các gói này",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Cách Đăng Ký Gói Cước 5G Viettel Chu Kỳ Dài",
        },
        {
          type: "paragraph",
          text: "Bạn có thể đăng ký gói 5G Viettel nhanh chóng bằng cách:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Soạn tin: [Tên gói] gửi 191 hoặc 290",
            "Hoặc đăng ký trực tiếp trên ứng dụng My Viettel",
            "Để huỷ gói cước soạn HUY [Tên gói] gửi 191",
          ],
        },
        {
          type: "paragraph",
          text: "Đừng bỏ lỡ cơ hội trải nghiệm gói 5G Viettel chu kỳ dài: 3 tháng, 6 tháng hoặc 12 tháng – tốc độ siêu tốc, dung lượng cực khủng và tiết kiệm tối đa!",
        },
      ],
    },
  },
  "/tin-tuc/goi-cuoc-5g-viettel-tet5g": {
    status: "ready",
    kind: "news-article",
    title: "Gói cước TET5G UP Viettel: 25GB + Nhiều Ưu Đãi Chỉ 50.000đ",
    description:
      "Đăng ký gói TET5G UP Viettel nhận ngay 25GB (5GB/ngày), miễn phí gọi nội mạng dưới 10 phút, 25 phút gọi ngoại mạng, và xem TV360. Giá chỉ 50.000đ/5 ngày.",
    heading:
      "Viettel ra mắt gói cước 5G giá rẻ chỉ 50.000đ đáp ứng trọn vẹn nhu cầu Tết",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/goi-cuoc-5g-viettel-tet5g"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0144.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: bfac169e77cda04b8a194432645312977eb535ab471c43739f1fcad43a924000",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "17/01/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Thấu hiểu nhu cầu nghe gọi, sử dụng internet của khách hàng tăng cao những ngày cận Tết, Viettel ra mắt gói cước 5G mới - TET5G chỉ 50.000 đồng, giúp khách hàng được trải nghiệm 5G đầy đủ tiện ích với mức giá phải chăng.",
        },
        {
          type: "table",
          table: {
            headings: ["TÊN GÓI", "ƯU ĐÃI", "ĐƠN GIÁ", ""],
            rows: [
              [
                "TET5G",
                "- 25GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút và 25 phút gọi ngoại mạng.- Miễn phí SMS Viettel.- Miễn phí TV360.(Áp dụng cho cả thuê bao 4G và 5G)",
                "50.000đ(5 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Quy định chung của gói cước",
        },
        {
          type: "paragraph",
          text: "Đăng ký gói qua SMS: TET5G UP gửi 290",
        },
        {
          type: "paragraph",
          text: "Huỷ gia hạn gói: HUY TET5G gửi 191",
        },
        {
          type: "paragraph",
          text: "Huỷ gói cước: HUYDATA TET 5G gửi 191",
        },
        {
          type: "paragraph",
          text: "Tra cứu lưu lượng data: KTTK gửi 191 hoặc truy cập My Viettel",
        },
        {
          type: "paragraph",
          text: "Thuê bao được gia hạn khi hết chu kỳ. Không khôi phục",
        },
        {
          type: "paragraph",
          text: "Gói cước áp dụng cho cả thuê bao 4G và 5G",
        },
        {
          type: "heading",
          level: 2,
          text: "Đôi nét về gói cước 5G Viettel",
        },
        {
          type: "paragraph",
          text: "Nếu như trước đây khách hàng phải bỏ ra từ 135.000đ để đăng ký các gói cước 5G, thì nay chỉ với 50.000 đồng, khách hàng đã có thể trải nghiệm gói cước 5G mới của nhà mạng Viettel. Chỉ với 50.000 đồng, khách hàng sẽ được sử dụng trọn vẹn tiện ích với 25GB data 5G tốc độ cao, miễn phí gọi mạng Viettel (tối đa 10 phút/cuộc) và mạng ngoài Viettel (tối đa 25 phút), miễn phí nhắn tin đến mạng Viettel trong vòng 5 ngày sử dụng. Đặc biệt, khách hàng còn được xem các chương trình truyền hình, phim Tết trên ứng dụng TV360 hoàn toàn miễn phí. Đây là cơ hội tuyệt vời để khách hàng trải nghiệm công nghệ mới, 5G siêu tốc độ, đáp ứng trọn vẹn nhu cầu trong dịp Tết này mà không phải lo lắng về chi phí. Khách hàng có thể bắt đầu đăng ký gói cước TET5G từ ngày 14/01/2025 đến hết ngày 12/02/2025 với cú pháp TET5G UP gửi 290.",
        },
        {
          type: "paragraph",
          text: "5g-viettel",
        },
        {
          type: "paragraph",
          text: "Theo chuyên gia viễn thông của ITU, chính phủ cũng như các nhà mạng Việt Nam cần tập trung phủ sóng 5G rộng trên toàn quốc. Việc Viettel là nhà mạng đầu tiên triển khai gói cước 5G giá rẻ là tiền đề để đưa mạng 5G đến gần hơn với tất cả mọi người. Bên cạnh đó, trong khuôn khổ chương trình “Tết mới, Quà tới”, từ nay đến hết ngày 28 tháng 2, Viettel tri ân khách hàng với hàng loạt các ưu đãi xuyên Tết như: khách hàng được nhận được mã số may mắn khi đăng ký các dịch vụ 5G, internet wifi, truyền hình TV360 của Viettel với tổng giá trị giải thưởng lên tới 2,5 tỷ đồng, chương trình lì xì Tết tới 99.999 điểm Viettel++. Hàng ngàn voucher mua sắm, dịch vụ cũng được tung ra trong giai đoạn này. Những chương trình khuyến mãi này không chỉ mang lại niềm vui mà còn góp phần làm phong phú thêm trải nghiệm sử dụng dịch vụ của khách hàng trong dịp Tết Nguyên đán sắp tới. Để biết thêm thông tin chi tiết, khách hàng có thể liên hệ tổng đài miễn phí 18008098.",
        },
        {
          type: "paragraph",
          text: "5g-viettel2",
        },
        {
          type: "paragraph",
          text: "Viettel khai trương mạng 5G đầu tiên và lớn nhất Việt Nam với hơn 6.500 trạm phát sóng với vùng phủ ngoài trời trên 90% khu vực thủ phủ 63 tỉnh, thành phố, các khu công nghiệp, trường học, sân bay, cảng biển,… Mạng 5G Viettel nhanh chóng đạt mốc 3 triệu người dùng chỉ 2 tuần sau khi khai trương và tính đến nay đã có 70% thuê bao trong vùng phủ 5G Viettel đã sử dụng 5G (tương đương 4 triệu khách hàng), lưu lượng internet trên 5G đã chiếm 30% ở khu vực triển khai, cho thấy sức hút và tiềm năng của 5G tại Việt Nam là rất lớn. Tốc độ mạng 5G Viettel có thể đạt từ 700Mbps-1Gb, gấp 10 lần so với 4G và độ trễ thấp gần như bằng 0, được triển khai đồng thời trên cả 2 nền tảng kiến trúc 5G NSA (non stand alone) và 5G SA (stand alone). Việc Viettel chính thức cung cấp dịch vụ 5G được đánh giá là cú hích để các nhà mạng khác tham gia vào tiến trình thương mại hóa một cách mạnh mẽ hơn, thúc đẩy mục tiêu chuyển đổi số quốc gia, cung cấp nền tảng cho các doanh nghiệp và tổ chức áp dụng công nghệ số; đồng thời giúp cải thiện chất lượng cuộc sống người dùng.",
        },
        {
          type: "paragraph",
          text: "Tham khảo danh sách gói cước 5G Viettel",
        },
      ],
    },
  },
  "/tin-tuc/tong-dai-viettel": {
    status: "ready",
    kind: "news-article",
    title: "Số tổng đài Viettel 24/7 – Hotline hỗ trợ mọi dịch vụ",
    description:
      "Tổng đài Viettel 1800 8098, 198, 1800 8119, 1800 8000,... hỗ trợ 24/7, miễn phí tư vấn dịch vụ di động, Internet, truyền hình, 4G, 5G và giải đáp mọi thắc mắc cho khách hàng.\n",
    heading:
      "TỔNG ĐÀI CSKH VIETTEL 24/7 Nhanh Nhất 2025: Hotline Lắp Mạng, Báo Hỏng và CSKH Miễn Phí",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/tong-dai-viettel"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0145.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 986271c2134dcbd037412f775b24fe5e105f107fe752ca1376d000f411e5a312",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "5/1/2025",
      blocks: [
        {
          type: "paragraph",
          text: "Viettel là một trong những nhà cung cấp dịch vụ viễn thông lớn nhất tại Việt Nam, không chỉ mang đến những giải pháp viễn thông tiên tiến mà còn cung cấp nhiều dịch vụ hỗ trợ khách hàng thông qua các tổng đài chuyên biệt. Dưới đây là danh sách các số điện thoại tổng đài Viettel:",
        },
        {
          type: "heading",
          level: 2,
          text: "[LƯU NGAY] Bảng Tổng Hợp SỐ HOTLINE VIETTEL 24/7 MỚI NHẤT 2025",
        },
        {
          type: "paragraph",
          text: "Bạn đang cần liên hệ Viettel gấp để được hỗ trợ về di động, Internet, truyền hình, ePass, hay các dịch vụ kỹ thuật? Dưới đây là bảng tổng hợp đầy đủ và chính xác nhất các số tổng đài Viettel 24/7 năm 2025, bao gồm: CSKH di động (198, 1800 8098), hỗ trợ kỹ thuật Internet – truyền hình, Viettel Store, Viettel Construction, Viettel IDC, và nhiều dịch vụ khác.",
        },
        {
          type: "table",
          table: {
            headings: [],
            rows: [
              ["Dịch vụ Hỗ trợ", "Số Hotline", "Phí cước", "Thời gian"],
              [
                "CSKH Di động, 4G/5G, Dcom, Homephone",
                "1800 8098 hoặc 198",
                "Miễn phí",
                "24/7",
              ],
              [
                "Dịch vụ Internet / Truyền hình / Wifi",
                "1800 8119",
                "Miễn phí",
                "24/7",
              ],
              [
                "Viettel Money & Dịch vụ Tài chính",
                "1800 9000",
                "Miễn phí",
                "24/7",
              ],
              ["CSKH Doanh nghiệp", "1800 8000", "Miễn phí", "24/7"],
              [
                "Viettel Post (Vận chuyển)",
                "1900 8095",
                "Miễn phí",
                "7h00 đến 20h00",
              ],
              [
                "Viettel Store (Dịch vụ bán lẻ thiết bị di động và phụ kiện)",
                "1900 8096",
                "Tính cước",
                "8h00 đến 22h00",
              ],
              [
                "Viettel Construction (Hạ tầng kỹ thuật)",
                "1800 9377",
                "Miễn phí",
                "24/7",
              ],
              [
                "Viettel IDC (Điện toán đám mây)",
                "1800 8088",
                "Miễn phí",
                "24/7",
              ],
              [
                "ePass (Thu phí tự động đường bộ)",
                "1900 9080",
                "Miễn phí (sim Viettel)",
                "24/7",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Trên đây là các số Tổng đài Viettel chính thức và mới nhất. Vui lòng LƯU NGAY các số hotline miễn phí 1800 8098 (Di động) và 1800 8119 (Internet) để sử dụng khi cần thiết!",
        },
        {
          type: "heading",
          level: 2,
          text: "1. Tổng đài CSKH Viettel Telecom (1800 8098 hoặc 198)",
        },
        {
          type: "paragraph",
          text: "CSKH-Vien-thong",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: 1800 8098 hoặc 198 (miễn phí)",
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài chăm sóc khách hàng của Viettel Telecom là nơi tiếp nhận và giải quyết mọi thắc mắc, khiếu nại của khách hàng liên quan đến các dịch vụ viễn thông của Viettel. Dịch vụ này bao gồm các lĩnh vực sau:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tư vấn và giải đáp thắc mắc: Hỗ trợ khách hàng tìm hiểu về các gói cước, chương trình khuyến mãi, cách sử dụng dịch vụ và các thông tin liên quan khác.",
            "Xử lý khiếu nại: Tiếp nhận và giải quyết các khiếu nại của khách hàng về chất lượng dịch vụ, thái độ phục vụ và các vấn đề khác.",
            "Cập nhật thông tin dịch vụ: Cung cấp thông tin mới nhất về các dịch vụ, chương trình khuyến mãi và các thay đổi từ Viettel.",
            "Dịch vụ sim thẻ: Hỗ trợ khách hàng về các vấn đề liên quan đến sim thẻ như kích hoạt sim, mất sim, khóa/mở khóa sim.",
            "Gói cước di động: Tư vấn và đăng ký các gói cước thoại, nhắn tin, data phù hợp với nhu cầu của khách hàng.",
            "Dịch vụ giá trị gia tăng: Hỗ trợ các dịch vụ giá trị gia tăng như nhạc chờ, chuyển tiếp cuộc gọi, dịch vụ 3G/4G.",
          ],
        },
        {
          type: "paragraph",
          text: "Chi tiết thao tác khi khách hàng gọi điện đến đầu số CSKH 1800 8098 hoặc 198:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhánh 1: Tra cứu dịch vụ thuê bao đang sử dụng.",
            "Nhánh 2: Đăng ký dịch vụ giá trị gia tăng tiện ích (nhạc chờ, thông báo cuộc gọi nhỡ,..).",
            "Nhánh 3: Đăng ký data 4G Viettel siêu tốc độ.",
            "Nhánh 4: Chương trình đổi điểm và CSKH Viettel ++.",
            "Nhánh 5: Gặp chuyên viên tư vấn hỗ trợ trực tiếp.",
            "Nhánh 8: Trợ lý ảo Callbot hỗ trợ tra cứu nhanh dịch vụ thuê bao đang sử dụng, thông tin ưu đã data, chương trình khuyến mãi mới nhất.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "2. Tổng đài hỗ trợ dịch vụ cố định (1800 8119)",
        },
        {
          type: "paragraph",
          text: "CSKH-internet-truyen-hinh",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: 1800 8119 (miễn phí)",
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài hỗ trợ dịch vụ cố định của Viettel chuyên giải quyết các vấn đề kỹ thuật mà khách hàng gặp phải trong quá trình sử dụng dịch vụ. Các dịch vụ hỗ trợ bao gồm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Hỗ trợ internet: Giải quyết các sự cố về kết nối internet, tốc độ truy cập, cài đặt và cấu hình modem/router.",
            "Hỗ trợ truyền hình cáp: Hỗ trợ khách hàng xử lý các vấn đề về tín hiệu truyền hình, cài đặt và sử dụng đầu thu, dịch vụ truyền hình số.",
            "Hỗ trợ điện thoại cố định: Giải quyết các vấn đề về kết nối điện thoại cố định, âm thanh, và các sự cố kỹ thuật khác.",
          ],
        },
        {
          type: "paragraph",
          text: "Chi tiết thao tác khi khách hàng gọi điện đến đầu số CSKH 1800 8119:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhánh 3: Hỗ trợ tra cứu, tạm mở nợ cước, thông tin tài khoản, thông tin thuê bao.",
            "Nhánh 5: Gặp chuyên viên tư vấn hỗ trợ trực tiếp.",
            "Nhánh 8: Trợ lý ảo Callbot tư vấn hỗ trợ hoà mạng mới dịch vụ cố định băng rộng.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "3. Tổng đài hỗ trợ dịch vụ giải pháp doanh nghiệp của Viettel Solutions 1800 8000",
        },
        {
          type: "paragraph",
          text: "CSKH-Doanh-nghiep",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: 1800 8000 (miễn phí)",
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài dịch vụ doanh nghiệp của Viettel chuyên cung cấp và hỗ trợ các giải pháp viễn thông và công nghệ thông tin cho khách hàng doanh nghiệp. Các dịch vụ bao gồm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Giải pháp viễn thông: Cung cấp các dịch vụ điện thoại cố định, di động, internet và truyền hình cho doanh nghiệp.",
            "Giải pháp CNTT: Cung cấp các giải pháp công nghệ thông tin như điện toán đám mây, trung tâm dữ liệu, an ninh mạng, phần mềm quản lý doanh nghiệp.",
            "Giải pháp IoT: Cung cấp các giải pháp Internet of Things (IoT) như quản lý phương tiện, nhà thông minh, thành phố thông minh.",
          ],
        },
        {
          type: "paragraph",
          text: "Chi tiết thao tác khi khách hàng gọi điện đến đầu số CSKH 1800 8000:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhánh 0: Đăng ký mới và gia hạn dịch vụ SME.",
            "Nhánh 1: Hỗ trợ khách hàng cấp chứng thư số, hoá đơn điện tử, Vtracking, Stracking, camera (NĐ10), chữ ký số CA, VBHXH.",
            "Nhánh 2: Dịch vụ cho ngành giáo dục.",
            "Nhánh 3: Dịch vụ kênh truyền.",
            "Nhánh 4: Dịch vụ cho ngành y tế.",
            "Nhánh 5: Giải pháp quản lý bán hàng DMS.",
            "Nhánh 6: Dịch vụ Vcam, Vcar, VESS và các dịch vụ khác.",
            "Nhánh 7: Giải pháp văn phòng điện tử Voffice.",
            "Nhánh 8: Giải pháp Smart city và các dự án khác.",
            "Nhánh 9: Hệ sinh thái dịch vụ Viettel Cloud.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "4. Tổng đài CSKH dịch vụ Viettel Money 1800 9000",
        },
        {
          type: "paragraph",
          text: "CSKH-Viettel-money",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: 1800 9000 (miễn phí)",
        },
        {
          type: "paragraph",
          text: "Chức năng: Hỗ trợ các dịch vụ tài chuyển tiền, nạp rút, thanh toán hoá đơn, dịch vụ tài chính, bao gồm:",
        },
        {
          type: "paragraph",
          text: "Chuyển tiền, nạp tiền:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Chuyển tiền: Chuyển tiền nội bộ giữa các tài khoản Viettel và chuyển khoản liên ngân hàng tới các tài khoản ngân hàng trên toàn quốc một cách nhanh chóng và an toàn.",
            "Nạp tiền: Nạp tiền điện thoại cho số điện thoại Viettel hoặc nhà mạng khác (Vinaphone, Mobiphone), nạp tiền vào các ví điện tử liên kết.",
          ],
        },
        {
          type: "paragraph",
          text: "Thanh toán hóa đơn:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Thanh toán tiền điện, nước: Dễ dàng thanh toán các hóa đơn tiện ích hàng tháng.",
            "Thanh toán cước viễn thông: Thanh toán các dịch vụ di động, internet, và truyền hình cáp của Viettel.",
            "Thanh toán các dịch vụ khác: Bao gồm hóa đơn mua sắm, học phí, và các dịch vụ khác.",
          ],
        },
        {
          type: "paragraph",
          text: "Các dịch vụ khác",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Dịch vụ tài chính, bảo hiểm",
            "Mua sắm, giải trí",
            "Đặt vé các loại (đặt vé máy bay, vé vui chơi, vé tàu xe, …)",
          ],
        },
        {
          type: "paragraph",
          text: "Chi tiết thao tác khi khách hàng gọi điện đến đầu số CSKH 1800 8000:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhánh 0: Chuyên viên tư vấn hỗ trợ trực tiếp",
            "Nhánh 1: Hướng dẫn khoá thẻ khẩn cấp, cấp lại mật khẩu, mã nhận tiền, tra cứu mã thẻ nạp điện thoại.",
            "Nhánh 2: Thông tin chương trình khuyến mãi nổi bật",
            "Nhánh 3: Hướng dẫn dịch vụ Viettel Money",
            "Nhánh 4: Xử lý lỗi cơ bản khi sử dụng tính năng Viettel Money",
            "Nhánh 6: Hỗ trợ dịch vụ đặt phòng khách sạn, vé máy bay trên Viettel Money",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "5. Tổng đài chăm sóc khách hàng Viettel Post 1900 8095",
        },
        {
          type: "paragraph",
          text: "CSKH-Viettel-post",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: 1900 8095 (miễn phí)",
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài chăm sóc khách hàng Viettel Post chuyên hỗ trợ các dịch vụ vận chuyển và logistics của Viettel, bao gồm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Dịch vụ chuyển phát nhanh: Hỗ trợ khách hàng gửi và nhận bưu phẩm, bưu kiện trong nước và quốc tế.",
            "Dịch vụ vận tải: Cung cấp các giải pháp vận tải hàng hóa cho doanh nghiệp và cá nhân.",
            "Theo dõi đơn hàng: Hỗ trợ khách hàng theo dõi tình trạng đơn hàng và giải quyết các vấn đề liên quan đến vận chuyển.",
          ],
        },
        {
          type: "paragraph",
          text: "Chi tiết thao tác khi khách hàng gọi điện đến đầu số CSKH 1800 8000:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Nhánh 1: Hỗ trợ dịch vụ chuyển phát trong nước",
            "Nhánh 2: Hỗ tợ dịch vụ chuyển phát quốc tế",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "6. Tổng đài chăm sóc khách hàng Viettel Construction",
        },
        {
          type: "paragraph",
          text: "cskh viettel construction",
        },
        {
          type: "paragraph",
          text: "Số tổng đài:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tổng đài tiếp nhận phản ánh, hỗ trợ khách hàng: 1800 9377",
            "Tổng đài tư vấn thông tin dịch vụ Xây dựng dân dụng: 1800 9388",
            "Tổng đài tư vấn thông tin Giải pháp và Dịch vụ Kỹ thuật: 1800 9355",
            "Tổng đài hỗ trợ thông tin dành cho Cổ đông, Nhà đầu tư: 086 208 111",
          ],
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài chăm sóc khách hàng Viettel Construction hỗ trợ các dịch vụ xây dựng và hạ tầng viễn thông của Viettel, bao gồm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Xây dựng cơ sở hạ tầng: Hỗ trợ các dự án xây dựng cơ sở hạ tầng viễn thông, điện lực và công trình dân dụng.",
            "Bảo trì và sửa chữa: Cung cấp dịch vụ bảo trì, sửa chữa hạ tầng viễn thông và công trình xây dựng.",
            "Giải pháp công nghệ: Cung cấp các giải pháp công nghệ và thiết bị phục vụ cho xây dựng và vận hành hạ tầng.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "7. Tổng đài chăm sóc khách hàng Viettel Store",
        },
        {
          type: "paragraph",
          text: "CSKH Viettel Store",
        },
        {
          type: "paragraph",
          text: "Số tổng đài:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tổng đài tư vấn bán hàng: 1800 8123",
            "Tổng đài CSKH & bảo hành: 1900 8096",
            "Tổng đài tư vấn bán hàng Doanh nghiệp: 024 665 99 666",
          ],
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài chăm sóc khách hàng Viettel Store hỗ trợ các dịch vụ bán lẻ thiết bị di động và phụ kiện, bao gồm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tư vấn sản phẩm: Hỗ trợ khách hàng tìm hiểu và lựa chọn các sản phẩm điện thoại, máy tính bảng, phụ kiện.",
            "Bảo hành và sửa chữa: Hỗ trợ dịch vụ bảo hành, sửa chữa thiết bị di động mua tại Viettel Store.",
            "Khuyến mãi và ưu đãi: Cung cấp thông tin về các chương trình khuyến mãi, ưu đãi đặc biệt cho khách hàng.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "8. Tổng đài chăm sóc khách hàng Viettel IDC 1800 8088",
        },
        {
          type: "paragraph",
          text: "CSKH Viettel IDC",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: 1800 8088 (miễn phí)",
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài chăm sóc khách hàng Viettel IDC hỗ trợ các dịch vụ trung tâm dữ liệu và điện toán đám mây, bao gồm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Dịch vụ trung tâm dữ liệu: Cung cấp dịch vụ thuê chỗ đặt máy chủ, máy chủ ảo, dịch vụ lưu trữ và bảo mật dữ liệu.",
            "Dịch vụ điện toán đám mây: Hỗ trợ khách hàng sử dụng các dịch vụ điện toán đám mây như lưu trữ đám mây, dịch vụ SaaS.",
            "Giải pháp bảo mật: Cung cấp các giải pháp bảo mật dữ liệu, bảo vệ hệ thống thông tin.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "9. Tổng đài chăm sóc khách hàng ePass 1900 9080",
        },
        {
          type: "paragraph",
          text: "CSKH-ePass",
        },
        {
          type: "paragraph",
          text: "Số tổng đài: 1900 9080 (miễn phí)",
        },
        {
          type: "paragraph",
          text: "Chức năng: Tổng đài chăm sóc khách hàng ePass hỗ trợ các dịch vụ thu phí tự động đường bộ, bao gồm:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Đăng ký ePass: Hỗ trợ khách hàng đăng ký dịch vụ thu phí tự động ePass.",
            "Nạp tiền và kiểm tra tài khoản: Hỗ trợ nạp tiền vào tài khoản ePass và kiểm tra số dư tài khoản.",
            "Giải quyết khiếu nại: Tiếp nhận và giải quyết các khiếu nại liên quan đến dịch vụ thu phí tự động.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Lý do nên sử dụng các dịch vụ tổng đài của Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Hỗ trợ toàn diện: Các tổng đài của Viettel được thiết kế để cung cấp hỗ trợ toàn diện cho mọi khía cạnh của dịch vụ viễn thông, từ kỹ thuật, thanh toán, đến chăm sóc khách hàng.",
            "Tiện lợi và nhanh chóng: Khách hàng có thể dễ dàng liên hệ với các tổng đài qua số điện thoại miễn phí, đảm bảo nhận được sự hỗ trợ kịp thời và chính xác.",
            "Chuyên nghiệp và tận tâm: Đội ngũ nhân viên tại các tổng đài của Viettel được đào tạo chuyên nghiệp, luôn sẵn sàng lắng nghe và giải quyết mọi thắc mắc của khách hàng một cách tận tâm.",
            "Đa dạng dịch vụ: Viettel cung cấp một loạt các dịch vụ viễn thông và công nghệ thông tin, đáp ứng nhu cầu đa dạng của khách hàng cá nhân và doanh nghiệp.",
          ],
        },
      ],
    },
  },
  "/tin-tuc/so-sanh-goi-cuoc-4g-va-5g": {
    status: "ready",
    kind: "news-article",
    title: "So sánh gói cước 4G và 5G",
    description:
      "Viettel vừa chính thức ra mắt hệ gói cước 5G vào tháng 10 và thu hút đông đảo tệp fan công nghệ đu trend test 5G.",
    heading: "Gói Cước 5G Nổi Bật Gì So Với 4G?",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/so-sanh-goi-cuoc-4g-va-5g"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0146.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: f49d40ce951d6291bd87dcfb8162f81cd348ec52b9db99fa42cea0fad3dbbc6e",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "21/11/2024",
      blocks: [
        {
          type: "paragraph",
          text: 'Viettel vừa chính thức ra mắt hệ gói cước 5G vào tháng 10 và thu hút đông đảo tệp fan công nghệ đu trend test 5G. Ngoài yếu tố công nghệ mới, tốc độ cao thì hệ gói 5G Viettel còn sở hữu ưu thế “có nhiều data hơn, không phải mua gói thêm, giá chỉ ngang ngửa 4G". Dưới đây là bài so sánh chi tiết các gói cước để giúp bạn lựa chọn giải pháp tối ưu nhất!',
        },
        {
          type: "paragraph",
          text: "so-sanh-4g-va-5g",
        },
        {
          type: "heading",
          level: 2,
          text: "1. So sánh gói cước data SD90, SD120, 5G135",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "SD90", "SD120", "5G135"],
            rows: [
              ["Dung lượng", "1.5GB/ngày", "2GB/ngày", "4GB/ngày"],
              ["Ưu đãi đi kèm", "--", "TV360 Basic-", "TV360 4K20GB Mybox"],
              [
                "Giá cước",
                "90.000đ (30 ngày)",
                "120.000đ (30 ngày)",
                "135.000đ (30 ngày)",
              ],
              [
                "Cú pháp",
                "SD90 UP gửi 290",
                "SD120 UP gửi 290",
                "5G135 UP gửi 290",
              ],
              ["", "ĐĂNG KÝĐăng ký", "ĐĂNG KÝĐăng ký", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Viettel mang đến các gói cước SD90, SD120, và 5G135 với những ưu đãi đa dạng, phù hợp với nhiều nhu cầu khác nhau. Gói SD90 chỉ 90.000 VNĐ/tháng, cung cấp 1,5GB/ngày (tổng 45GB/tháng), phù hợp với người dùng cần data cơ bản. Gói SD120 với 120.000 VNĐ/tháng mang lại 2GB/ngày (60GB/tháng) và ưu đãi miễn phí TV360 Basic, thích hợp cho người yêu thích xem truyền hình. Gói 5G135, giá 135.000 VNĐ/tháng, vượt trội với 5GB/ngày (150GB/tháng) cùng ưu đãi xem TV360 chất lượng 4K, dành cho người dùng cần dung lượng lớn và tốc độ cao. Chọn gói cước phù hợp giúp bạn thoải mái sử dụng mạng mà vẫn tiết kiệm chi phí!",
        },
        {
          type: "heading",
          level: 2,
          text: "2. So sánh gói cước data SD135, SD150, 5G150",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "SD135", "SD150", "5G150"],
            rows: [
              ["Dung lượng", "5GB/ngày", "3GB/ngày", "6GB/ngày"],
              [
                "Ưu đãi đi kèm",
                "TV360 Basic-",
                "TV360 Basic-",
                "TV360 4K30GB Mybox",
              ],
              [
                "Giá cước",
                "135.000đ (30 ngày)",
                "150.000đ (30 ngày)",
                "150.000đ (30 ngày)",
              ],
              [
                "Cú pháp",
                "SD135 UP gửi 290",
                "SD150 UP gửi 290",
                "5G150 UP gửi 290",
              ],
              ["", "ĐĂNG KÝĐăng ký", "ĐĂNG KÝĐăng ký", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Các gói cước SD135, SD150, và 5G150 với dung lượng lớn và ưu đãi hấp dẫn, đáp ứng nhu cầu người dùng có tần suất sử dụng cao. Gói SD135, giá chỉ 135.000 VNĐ/tháng, cung cấp 3GB/ngày (90GB/tháng) cùng ưu đãi miễn phí TV360 Basic, phù hợp với người cần nhiều data để lướt web, xem video. Gói SD150 với 150.000 VNĐ/tháng mang lại 4GB/ngày (120GB/tháng) và ưu đãi tương tự, lý tưởng cho người dùng cần kết nối mạnh mẽ hơn. Đặc biệt, gói 5G150 với mức giá bằng gói SD150 nhưng vượt trội với 6GB/ngày (180GB/tháng), mang lại trải nghiệm tốc độ 5G siêu nhanh và miễn phí TV360 4K. Đây là lựa chọn tối ưu cho những ai yêu thích công nghệ 5G và cần dung lượng lớn. Hãy chọn gói cước phù hợp để tận hưởng mạng tốc độ cao mà vẫn tiết kiệm chi phí!",
        },
        {
          type: "heading",
          level: 2,
          text: "3. So sánh gói cước kèm ưu đãi gọi thoại V120B, V150B, 5G160B",
        },
        {
          type: "table",
          table: {
            headings: ["Tên gói", "V120B", "V150B", "5G160B"],
            rows: [
              ["Dung lượng", "1.5GB/ngày", "2GB/ngày", "4GB/ngày"],
              [
                "Ưu đãi đi kèm",
                "10'/ cuộc gọi nội mạng50' gọi ngoại mạngTV360 Basic-",
                "10'/ cuộc gọi nội mạng80' gọi ngoại mạngTV360 Basic-",
                "10'/ cuộc gọi nội mạng100' gọi ngoại mạngTV360 4K20GB Mybox",
              ],
              [
                "Giá cước",
                "120.000đ (30 ngày)",
                "150.000đ (30 ngày)",
                "160.000đ (30 ngày)",
              ],
              [
                "Cú pháp",
                "V120B UP gửi 290",
                "V150B UP gửi 290",
                "5G160B UP gửi 290",
              ],
              ["", "ĐĂNG KÝĐăng ký", "ĐĂNG KÝĐăng ký", "ĐĂNG KÝĐăng ký"],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Các gói cước kèm ưu đãi gọi như V120B, V150B, và 5G160B với ưu đãi đa dạng, phù hợp với nhiều nhu cầu sử dụng khác nhau. Gói V120B có giá 120.000 VNĐ/tháng, cung cấp 1,5GB/ngày (tổng 45GB/tháng), miễn phí các cuộc gọi nội mạng dưới 10 phút, tặng 50 phút gọi ngoại mạng và ưu đãi TV360 Basic, phù hợp với người dùng cơ bản. Gói V150B với giá 150.000 VNĐ/tháng, cung cấp 2GB/ngày (tổng 60GB/tháng), kèm theo 80 phút gọi ngoại mạng mỗi tháng và ưu đãi tương tự như V120B, thích hợp cho người dùng có nhu cầu cao hơn. Đặc biệt, gói 5G160B, giá 160.000 VNĐ/tháng, vượt trội với 4GB/ngày (tổng 120GB/tháng), miễn phí 10 phút mỗi cuộc gọi nội mạng (tối đa 1.000 phút/tháng), tặng 100 phút gọi ngoại mạng, cùng ưu đãi cao cấp như TV360 4K và 20GB MyBox. Đây là lựa chọn lý tưởng cho người dùng muốn tận hưởng tốc độ 5G và các ưu đãi đỉnh cao. Hãy chọn gói cước phù hợp để tối ưu hóa trải nghiệm kết nối của bạn!",
        },
        {
          type: "heading",
          level: 2,
          text: "Các gói 5G dành cho hầu hết các khách hàng",
        },
        {
          type: "paragraph",
          text: "Nhằm đáp ứng nhu cầu của nhiều tập khách hàng khác nhau, Viettel áp dụng chính sách linh hoạt cho từng khách hàng, mỗi người sẽ có một số gói cước áp dụng riêng. Chẳng hạn, gói 4G mang tên SD135 có giá 135.000 đồng, cung cấp 5GB mỗi ngày và quyền truy cập vào TV360 Basic, thường được so sánh với các gói 5G về dung lượng, nhưng gói này chỉ dành cho một số thuê bao nhất định trong danh sách của nhà mạng. Ngược lại, gói cước 5G lại mở rộng phạm vi đăng ký cho người dùng hơn nhiều. Đối với trả trước, trừ gói 5G135, còn lại cơ bản áp dụng cho mọi khách hàng.",
        },
        {
          type: "paragraph",
          text: "Ngoài ra, gói 5G còn đưa ra những gói dung lượng khủng mà trước đây chưa có. Cụ thể, thuê bao trả trước hiện có lựa chọn cao nhất là 480.000 đồng, cho phép truy cập 20GB mỗi ngày, tương đương 600GB mỗi tháng.",
        },
        {
          type: "heading",
          level: 2,
          text: "Danh sách gói cước 5G mới ra mắt tính đến 25/11/2024",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G DATA", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "5G135",
                "4GB/ngàyMiễn phí TV360 4K20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: ["GÓI 5G COMBO", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "5G160B",
                "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G230B",
                "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G280B",
                "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
                "280.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G330B",
                "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
                "330.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G380B",
                "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
                "380.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G480B",
                "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
                "480.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "table",
          table: {
            headings: [
              "GÓI 5G CAO CẤP",
              "ƯU ĐÃI",
              "ĐƠN GIÁ (tháng)",
              "ĐĂNG KÝ",
            ],
            rows: [
              [
                "5GLQ190",
                "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
                "190.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
                "210.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Viettel mang đến nhiều gói cước đa dạng với mức giá hợp lý. Nếu bạn muốn tiết kiệm, các gói 4G như SD90 hoặc V120B là lựa chọn tối ưu. Trong khi đó, nếu bạn yêu thích công nghệ 5G và cần dung lượng lớn, hãy chọn ngay 5G135, 5G150, hoặc 5G160B.",
        },
      ],
    },
  },
  "/tin-tuc/dang-ky-5g-viettel-2024": {
    status: "ready",
    kind: "news-article",
    title: "Đăng Ký Gói Cước 5G Viettel 9/2024: Tốc Độ Đáng Kinh Ngạc!",
    description:
      "Khám phá gói cước 5G Viettel mới nhất tháng 9/2024 với tốc độ đáng kinh ngạc và kết nối ổn định. Đăng ký ngay để không bỏ lỡ cơ hội nâng cấp kết nối internet của bạn với Viettel.",
    heading:
      "Đăng Ký Gói Cước 5G Viettel Mới Nhất 9/2024: Hướng Dẫn Đầy Đủ Và Chi Tiết",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/dang-ky-5g-viettel-2024"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0147.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: ccf82921db4642cc236019d90751080a997d17f91d50e4db3dd84d944e6186aa",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "16/9/2024",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "1. Giới thiệu về 5G và Viettel",
        },
        {
          type: "heading",
          level: 3,
          text: "1.1. Công nghệ 5G là gì?",
        },
        {
          type: "paragraph",
          text: "Định nghĩa và đặc điểm của công nghệ 5G",
        },
        {
          type: "paragraph",
          text: "Công nghệ 5G là thế hệ mạng di động thứ năm, mang lại tốc độ truyền tải dữ liệu nhanh hơn, độ trễ thấp hơn và khả năng kết nối nhiều thiết bị cùng lúc. Với 5G, bạn có thể tải phim HD chỉ trong vài giây và trải nghiệm các ứng dụng thực tế ảo mượt mà hơn.",
        },
        {
          type: "paragraph",
          text: "Lợi ích của 5G so với các thế hệ trước",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tốc độ truyền tải dữ liệu nhanh hơn gấp 10 lần so với 4G.",
            "Độ trễ thấp, giúp cải thiện trải nghiệm chơi game và xem video trực tuyến.",
            "Khả năng kết nối nhiều thiết bị cùng lúc, hỗ trợ tốt cho các ứng dụng IoT.",
          ],
        },
        {
          type: "paragraph",
          text: "Ứng dụng của 5G trong đời sống hàng ngày",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Trải nghiệm xem video 4K và 8K mượt mà.",
            "Chơi game trực tuyến không giật lag.",
            "Hỗ trợ các ứng dụng thực tế ảo và thực tế tăng cường.",
            "Kết nối các thiết bị thông minh trong nhà và thành phố thông minh.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "1.2. Viettel và sự phát triển của mạng 5G",
        },
        {
          type: "paragraph",
          text: "Lịch sử và sự phát triển của Viettel",
        },
        {
          type: "paragraph",
          text: "Viettel là một trong những nhà mạng lớn nhất tại Việt Nam, với lịch sử phát triển hơn 30 năm. Từ một công ty viễn thông nhỏ, Viettel đã trở thành một tập đoàn công nghệ hàng đầu, không chỉ tại Việt Nam mà còn trên thế giới.",
        },
        {
          type: "paragraph",
          text: "Viettel trong việc triển khai mạng 5G tại Việt Nam",
        },
        {
          type: "paragraph",
          text: "Viettel đã tiên phong trong việc triển khai mạng 5G tại Việt Nam, với các thử nghiệm thành công tại nhiều thành phố lớn như Hà Nội, TP.HCM và Đà Nẵng. Viettel cam kết mang lại trải nghiệm 5G tốt nhất cho người dùng.",
        },
        {
          type: "paragraph",
          text: "Những thành tựu và kế hoạch tương lai của Viettel với 5G",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Triển khai mạng 5G tại các thành phố lớn và mở rộng ra các khu vực khác.",
            "Nghiên cứu và phát triển các ứng dụng 5G trong y tế, giáo dục và công nghiệp.",
            "Hợp tác với các đối tác quốc tế để nâng cao chất lượng dịch vụ.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "1.3. Tại sao nên chọn gói cước 5G của Viettel?",
        },
        {
          type: "paragraph",
          text: "Ưu điểm của gói cước 5G Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tốc độ truy cập nhanh chóng và ổn định.",
            "Đa dạng gói cước phù hợp với nhu cầu của từng đối tượng.",
            "Dịch vụ chăm sóc khách hàng tận tình và chuyên nghiệp.",
          ],
        },
        {
          type: "paragraph",
          text: "So sánh với các nhà mạng khác",
        },
        {
          type: "paragraph",
          text: "So với các nhà mạng khác, Viettel có mạng lưới phủ sóng rộng khắp và chất lượng dịch vụ tốt hơn. Điều này giúp người dùng có trải nghiệm 5G mượt mà và ổn định hơn.",
        },
        {
          type: "paragraph",
          text: "Phản hồi từ người dùng",
        },
        {
          type: "paragraph",
          text: "Người dùng đánh giá cao về tốc độ và độ ổn định của mạng 5G Viettel. Nhiều người cho biết họ có thể xem video 4K và chơi game trực tuyến mà không gặp phải tình trạng giật lag.",
        },
        {
          type: "heading",
          level: 2,
          text: "2. Các gói cước 5G Viettel mới nhất 9/2024",
        },
        {
          type: "paragraph",
          text: "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng. Sau đây là danh sách gói cước 5G vừa ra mắt của Viettel",
        },
        {
          type: "heading",
          level: 3,
          text: "2.1. Gói cước 5G data",
        },
        {
          type: "table",
          table: {
            headings: ["TÊN GÓI", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "5G135",
                "4GB/ngàyMiễn phí TV360 4K20GB Mybox",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G150",
                "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Gói cước 5G135 áp dụng cho khách hàng di động hòa mạng mới và thuê bao nằm trong danh sách được hưởng ưu đãi. Gói cước 5G150 áp dụng cho thuê bao trả trước toàn mạng",
        },
        {
          type: "heading",
          level: 3,
          text: "2.2. Gói cước 5G combo",
        },
        {
          type: "table",
          table: {
            headings: ["TÊN GÓI", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "5G160B",
                "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G180B",
                "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G230B",
                "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
                "230.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G280B",
                "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
                "280.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G330B",
                "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
                "330.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G380B",
                "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
                "380.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5G480B",
                "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
                "480.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Gói cước 5G160B, 5G180B áp dụng cho khách hàng di động hòa mạng mới và thuê bao nằm trong danh sách được hưởng ưu đãi. Gói cước 5G230B, 5G280B, 5G330B, 5G380B, 5G480B áp dụng cho thuê bao trả trước toàn mạng",
        },
        {
          type: "heading",
          level: 3,
          text: "2.3. Gói cước 5G cao cấp",
        },
        {
          type: "table",
          table: {
            headings: ["TÊN GÓI", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "5GLQ190",
                "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
                "190.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "5GLQ210",
                "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
                "210.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "*Gói cước 5GLQ190, 5GLQ210 áp dụng cho thuê bao trả trước toàn mạng",
        },
        {
          type: "heading",
          level: 2,
          text: "3. Hướng dẫn đăng ký gói cước 5G Viettel",
        },
        {
          type: "heading",
          level: 3,
          text: "3.1 Đăng ký qua tin nhắn SMS:",
        },
        {
          type: "paragraph",
          text:
            "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp [Tên gói cước] UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " +
            siteConfig.hostname +
            ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
        },
        {
          type: "heading",
          level: 3,
          text: "3.2 Đăng ký trên ứng dụng My Viettel",
        },
        {
          type: "paragraph",
          text: "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
        },
        {
          type: "paragraph",
          text: "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước”, sau đó làm theo hướng dẫn để đăng ký.",
        },
        {
          type: "heading",
          level: 3,
          text: "3.3 Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
        },
        {
          type: "paragraph",
          text: "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
        },
        {
          type: "paragraph",
          text: 'Bước 3: Tìm kiếm gói cước 5G trong phần “Gói cước Data". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại',
        },
        {
          type: "heading",
          level: 3,
          text: "3.4 Đăng ký tại cửa hàng Viettel",
        },
        {
          type: "paragraph",
          text: "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
        },
        {
          type: "paragraph",
          text: "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
        },
        {
          type: "heading",
          level: 3,
          text: "3.5 Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
        },
        {
          type: "paragraph",
          text: "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp.",
        },
        {
          type: "heading",
          level: 2,
          text: "4. Các vấn đề thường gặp và cách khắc phục",
        },
        {
          type: "heading",
          level: 3,
          text: "4.1. Vấn đề về kết nối mạng",
        },
        {
          type: "paragraph",
          text: "Nguyên nhân và cách khắc phục",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Kiểm tra lại cài đặt mạng trên điện thoại.",
            "Khởi động lại thiết bị.",
            "Liên hệ tổng đài Viettel để được hỗ trợ.",
          ],
        },
        {
          type: "paragraph",
          text: "Hỗ trợ từ Viettel",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp dịch vụ hỗ trợ khách hàng 24/7 qua tổng đài 198/18008198 (miễn phí) và ứng dụng My Viettel.",
        },
        {
          type: "heading",
          level: 3,
          text: "4.2. Vấn đề về tài khoản và thanh toán",
        },
        {
          type: "paragraph",
          text: "Nguyên nhân và cách khắc phục",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Kiểm tra số dư tài khoản.",
            "Đảm bảo thanh toán đúng hạn.",
            "Liên hệ tổng đài Viettel để được hỗ trợ.",
          ],
        },
        {
          type: "paragraph",
          text: "Hỗ trợ từ Viettel",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp dịch vụ hỗ trợ khách hàng 24/7 qua tổng đài 198/18008198 (miễn phí) và ứng dụng My Viettel.",
        },
        {
          type: "heading",
          level: 3,
          text: "4.3. Vấn đề về thiết bị và tương thích",
        },
        {
          type: "paragraph",
          text: "Nguyên nhân và cách khắc phục",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Kiểm tra xem thiết bị có hỗ trợ 5G hay không.",
            "Cập nhật phần mềm thiết bị.",
            "Liên hệ tổng đài Viettel để được hỗ trợ.",
          ],
        },
        {
          type: "paragraph",
          text: "Hỗ trợ từ Viettel",
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp dịch vụ hỗ trợ khách hàng 24/7 qua tổng đài 198/18008198 (miễn phí) và ứng dụng My Viettel.",
        },
        {
          type: "heading",
          level: 2,
          text: "5. Lời khuyên và kinh nghiệm sử dụng 5G Viettel",
        },
        {
          type: "heading",
          level: 3,
          text: "5.1. Tối ưu hóa trải nghiệm 5G",
        },
        {
          type: "paragraph",
          text: "Cách sử dụng hiệu quả",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Sử dụng các ứng dụng hỗ trợ 5G để tận dụng tối đa tốc độ mạng.",
            "Kiểm tra và cập nhật phần mềm thiết bị thường xuyên.",
          ],
        },
        {
          type: "paragraph",
          text: "Các mẹo và thủ thuật",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tắt các ứng dụng không cần thiết để tiết kiệm dung lượng.",
            "Sử dụng chế độ tiết kiệm pin khi không cần thiết.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "5.2. Bảo mật và an toàn khi sử dụng 5G",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tránh truy cập vào các trang web không an toàn.",
            "Không chia sẻ thông tin cá nhân qua mạng.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "5.3. Chia sẻ kinh nghiệm từ người dùng",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Kiểm tra kỹ các gói cước trước khi đăng ký.",
            "Sử dụng ứng dụng My Viettel để quản lý tài khoản dễ dàng hơn.",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Kết luận và Câu hỏi thường gặp",
        },
        {
          type: "paragraph",
          text: "Kết luận",
        },
        {
          type: "paragraph",
          text: "Tóm tắt nội dung chính",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Công nghệ 5G mang lại nhiều lợi ích vượt trội.",
            "Viettel là nhà mạng tiên phong trong việc triển khai 5G tại Việt Nam.",
            "Có nhiều gói cước 5G phù hợp với nhu cầu của từng đối tượng.",
          ],
        },
        {
          type: "paragraph",
          text: "Lợi ích của việc đăng ký gói cước 5G Viettel",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Tốc độ truy cập nhanh chóng và ổn định.",
            "Dịch vụ chăm sóc khách hàng tận tình.",
            "Đa dạng gói cước phù hợp với nhu cầu.",
          ],
        },
        {
          type: "paragraph",
          text: "Câu hỏi thường gặp",
        },
        {
          type: "paragraph",
          text: "Làm thế nào để kiểm tra dung lượng còn lại của gói cước 5G?",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Bạn có thể kiểm tra dung lượng còn lại qua ứng dụng My Viettel hoặc soạn tin nhắn: KTTK gửi 191.",
          ],
        },
        {
          type: "paragraph",
          text: "Tôi có thể hủy gói cước 5G Viettel như thế nào?",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Soạn tin nhắn: HUY [Tên gói cước] gửi 191 hoặc hủy qua ứng dụng My Viettel.",
          ],
        },
        {
          type: "paragraph",
          text: "Gói cước 5G Viettel có tự động gia hạn không?",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Có, gói cước 5G Viettel sẽ tự động gia hạn nếu tài khoản của bạn có đủ tiền.",
          ],
        },
        {
          type: "paragraph",
          text: "Gói cước 5G Viettel có sử dụng được trên điện thoại 4G không?",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Có, gói cước 5G có thể sử dụng trên cả hạ tầng 4G và 5G. Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng.",
          ],
        },
      ],
    },
  },
  "/tin-tuc/khuyen-mai-nap-the-viettel-20-7": {
    status: "ready",
    kind: "news-article",
    title: "Khuyến mãi nạp thẻ Viettel ngày 20/7",
    description:
      "Tặng ngay 20% giá trị thẻ nạp cho các thuê bao di động trả trước khi thực hiện nạp tiền vào ngày 25/07/2024. Chương trình triển khai trên Toàn Quốc.",
    heading:
      "Tặng 20% giá trị thẻ nạp cho thuê bao Viettel trả trước trong ngày 25/7",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/khuyen-mai-nap-the-viettel-20-7"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0148.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 66d02c39862633644fbd5dcd9235eed6121b7bc9d208fc985f1c593b5fb3befd",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "20/07/2024",
      blocks: [
        {
          type: "paragraph",
          text: "Tặng ngay 20% giá trị thẻ nạp cho các thuê bao di động trả trước khi thực hiện nạp tiền vào ngày 25/07/2024. Chương trình triển khai trên Toàn Quốc.",
        },
        {
          type: "heading",
          level: 3,
          text: "Chi tiết chương trình khuyến mại:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Thời gian áp dụng: Từ 0 giờ đến 24 giờ ngày 25/7/2024",
            "Phạm vi áp dụng: Toàn quốc",
            "Đối tượng hưởng ưu đãi: Thuê bao di động trả trước mạng Viettel",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Nội dung ưu đãi:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "- Tặng 20% giá trị thẻ nạp vào tài khoản khuyến mãi khi Khách hàng thực hiện giao dịch nạp tiền. Tiền khuyến mại được sử dụng để truy cập Data với đơn giá khoảng 10.000đ/GB.",
            "- Thời hạn sử dụng tiền khuyến mãi: 15 ngày kể từ ngày hưởng ưu đãi",
            "- Không áp dụng đồng thời với chương trình khuyến mãi nạp thẻ khác trong cùng ngày.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "Thứ tự trừ tiền viễn thông:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "Trừ tiền tài khoản khuyến mãi có thời hạn sử dụng trước.",
            "Trừ tài khoản khuyến mãi không có thời hạn sử dụng sau.",
          ],
        },
        {
          type: "paragraph",
          text: "Lưu ý:",
        },
        {
          type: "list",
          ordered: true,
          items: [
            "- Chương trình không áp dụng với các gói cước Tourist, Công nhân, An ninh, Dcom, Vtracking, Smartmoto, Kiddy.",
            "- Thuê bao hưởng chương trình khuyến mãi toàn quốc không được hưởng đồng thời các chương trình khuyến mãi nạp thẻ khác trong cùng ngày.",
            "- Tiền khuyến mại sử dụng trong 15 ngày",
            "- Đối với gói cước có ngày sử dụng: Không tặng thêm ngày sử dụng cho phần tài khoản tặng thêm.",
            "- Không tặng thêm giá trị thẻ nạp đối với các hình thức nạp thẻ cào giấy, nạp pincode, nạp thẻ hộ, dịch vụ chuyển tiền (Ishare, Recharge me, lì xì...), các dịch vụ ứng tiền (truyền thống, airtime, xtime, VNcredit…)",
          ],
        },
        {
          type: "heading",
          level: 2,
          text: "Có bao nhiêu cách nạp thẻ Viettel? Hướng dẫn nạp thẻ điện thoại Viettel chi tiết nhất",
        },
        {
          type: "paragraph",
          text: "Dưới đây là 4 cách thông dụng để nạp thẻ điện thoại:",
        },
        {
          type: "heading",
          level: 3,
          text: "1. Nạp trực tiếp bằng thẻ cào",
        },
        {
          type: "paragraph",
          text: "Nạp thẻ điện thoại với thẻ cào giấy là loại hình nạp thẻ truyền thống, quen thuộc và rất đơn giản với Khách hàng viễn thông Việt Nam. Tuy nhiên, cách nạp thẻ này gây bất tiện vì người dùng phải đi mua thẻ tại các điểm bán, mã thẻ dài, thao tác tốn thời gian.",
        },
        {
          type: "paragraph",
          text: "the-cao-viettel",
        },
        {
          type: "paragraph",
          text: "Thuê bao trả trước nạp thẻ Viettel như thế nào?",
        },
        {
          type: "paragraph",
          text: "Bước 1: Lấy thẻ cào Viettel và cào lớp bạc để lộ mã thẻ.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Nhập theo cú pháp *100*MASOTHECAO# và bấm nút gọi.",
        },
        {
          type: "paragraph",
          text: "Bước 3: Kiểm tra tin nhắn để xác nhận việc nạp tiền thành công.",
        },
        {
          type: "paragraph",
          text: "Thuê bao trả sau nạp thẻ Viettel như thế nào?",
        },
        {
          type: "paragraph",
          text: "Bước 1: Lấy thẻ cào Viettel và cào lớp bạc để lộ mã thẻ.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Nhập cú pháp *199*MASOTHECAO# và bấm nút gọi.",
        },
        {
          type: "paragraph",
          text: "Bước 3: Kiểm tra tin nhắn để xác nhận việc nạp tiền thành công.",
        },
        {
          type: "heading",
          level: 3,
          text: "2. Nạp thẻ qua ứng dụng My Viettel",
        },
        {
          type: "paragraph",
          text: "My Viettel - Ứng dụng được phát triển bởi Tập đoàn Viễn thông Quân đội Viettel hỗ trợ người dùng quản lý tài khoản điện thoại, đăng ký gói cước data 3G 4G, đổi điểm Viettel++ để nhận ưu đãi, thanh toán cước phí và nạp thẻ cào điện thoại Viettel một cách nhanh chóng và tiện lợi. Với My Viettel, trải nghiệm sử dụng mạng Viettel trở nên dễ dàng và hiệu quả hơn bao giờ hết.",
        },
        {
          type: "paragraph",
          text: "nap-the-my-viettel",
        },
        {
          type: "paragraph",
          text: "Hướng dẫn cách nạp thẻ điện thoại qua app My Viettel",
        },
        {
          type: "paragraph",
          text: "Bước 1: Truy cập ứng dụng My Viettel và đăng nhập.",
        },
        {
          type: "paragraph",
          text: 'Bước 2: Tại màn hình trang chủ, chọn mục "Tiện ích thanh toán", sau đó chọn mục “Nạp thẻ cào”.',
        },
        {
          type: "paragraph",
          text: "Bước 3: Nhập số điện thoại và thông tin mã thẻ cào hoặc nhấp vào biểu tượng QR để quét mã QR của thẻ.",
        },
        {
          type: "paragraph",
          text: 'Bước 4: Nhập mã bảo mật trên ứng dụng và bấm "Nạp thẻ" để hoàn tất giao dịch.',
        },
        {
          type: "heading",
          level: 3,
          text: "3. Nạp thẻ điện thoại qua ứng dụng Viettel Money",
        },
        {
          type: "paragraph",
          text: "Viettel Money - Hệ sinh thái toàn diện được phát triển bởi Tổng Công ty Dịch vụ số Viettel, trực thuộc Tập đoàn Viễn thông Quân đội Viettel. App cung cấp dịch vụ tài chính số toàn diện với hệ thống hàng trăm nghìn điểm giao dịch trên toàn quốc, hỗ trợ người dùng chuyển tiền, nạp rút, thanh toán điện nước và nạp thẻ viễn thông, mang lại tiện lợi và an toàn tuyệt đối.",
        },
        {
          type: "paragraph",
          text: "nap-the-viettel-money",
        },
        {
          type: "paragraph",
          text: "Cách nạp thẻ điện thoại với app Viettel Money",
        },
        {
          type: "paragraph",
          text: "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
        },
        {
          type: "paragraph",
          text: 'Bước 2: Tại màn hình trang chủ, chọn mục “Viễn thông", sau đó chọn "Nạp tiền điện thoại".',
        },
        {
          type: "paragraph",
          text: "Bước 3: Nhập số điện thoại và số tiền cần nạp.",
        },
        {
          type: "paragraph",
          text: "Bước 4: Xác nhận giao dịch và hoàn tất nạp thẻ.",
        },
        {
          type: "paragraph",
          text: 'Ngoài ra, app Viettel Money cung cấp tính năng “Thanh toán tự động" hỗ trợ người dùng cài đặt lịch thanh toán tự động cho các dịch vụ như: Tiền điện, Tiền nước, Tiền cước di động trả trước/ trả sau Viettel, Điện thoại cố định Viettel, Internet & Truyền hình Viettel, … Nạp tiền linh hoạt, thanh toán dễ dàng, quản lý lịch sử thanh toán minh bạch cùng Viettel Money!',
        },
        {
          type: "heading",
          level: 3,
          text: "4. Nạp thẻ qua app ngân hàng và các ví điện tử khác (ZaloPay, Momo, …)",
        },
        {
          type: "paragraph",
          text: "nap-the-zalo-momo-bank",
        },
        {
          type: "paragraph",
          text: "Trong thời đại 4.0, đa số các ngân hàng (MBBank, BIDV, Vietcombank, Viettin, …) và ví điện tử (Viettel Money, Zalopay, Momo, …) đã hỗ trợ Khách hàng nạp thẻ điện thoại ngay trên app.",
        },
        {
          type: "paragraph",
          text: "Sau đây là hướng dẫn các thao tác nạp thẻ qua app ngân hàng:",
        },
        {
          type: "paragraph",
          text: "Bước 1: Đăng nhập vào ứng dụng ngân hàng trên điện thoại.",
        },
        {
          type: "paragraph",
          text: 'Bước 2: Chọn mục "Nạp tiền điện thoại" hoặc "Thanh toán dịch vụ".',
        },
        {
          type: "paragraph",
          text: "Bước 3: Nhập số điện thoại và số tiền cần nạp.",
        },
        {
          type: "paragraph",
          text: "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
        },
        {
          type: "paragraph",
          text: "Cách nạp thẻ điện thoại qua ví điện tử",
        },
        {
          type: "paragraph",
          text: "Bước 1: Đăng nhập vào ứng dụng ví điện tử (như MoMo, ZaloPay, Viettel Money, ...).",
        },
        {
          type: "paragraph",
          text: 'Bước 2: Chọn mục "Nạp tiền điện thoại" hoặc tương tự.',
        },
        {
          type: "paragraph",
          text: "Bước 3: Nhập số điện thoại và số tiền cần nạp.",
        },
        {
          type: "paragraph",
          text: "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["SD70", "30GB (1GB/ngày)", "70.000đ", "ĐĂNG KÝĐăng ký"],
              ["SD90", "45GB (1.5GB/ngày)", "90.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "SD120",
                "60GB (2GB/ngày)Miễn phí TV360",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD135",
                "150GB (5GB/ngày)Miễn phí TV360",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD150",
                "90GB (3GB/ngày)Miễn phí TV360",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V90B",
                "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120B",
                "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150B",
                "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V160B",
                "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V180B",
                "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "30N",
                "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
                "300.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "paragraph",
          text: "Nhanh tay nắm bắt cơ hội nhận thêm 20% giá trị thẻ nạp và tận hưởng những ưu đãi tuyệt vời từ Viettel!",
        },
      ],
    },
  },
  "/tin-tuc/viettel-35-nam-dong-chay-hanh-phuc": {
    status: "ready",
    kind: "news-article",
    title:
      "Tập đoàn Công nghiệp - Viễn thông Quân đội Viettel với chặng đường 35 năm thành lập và phát triển",
    description:
      "Từ ngành nghề chính ban đầu là xây lắp công trình viễn thông, đến nay Viettel đã phát triển thêm 5 ngành nghề mới gồm ngành dịch vụ viễn thông & CNTT",
    heading: "Viettel 35 năm - dòng chảy hạnh phúc",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/viettel-35-nam-dong-chay-hanh-phuc"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0149.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 9c6a013181aacaca8e088b4e4d7d0611f571a14af6f41d4f486f53927afa9567",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "18/06/2024",
      blocks: [
        {
          type: "paragraph",
          text: "Mọi miền đất trù phú, mọi nền văn minh thịnh vượng đều bắt đầu từ những dòng chảy bất tận. Như một dòng chảy âm thầm, bền bỉ và mạnh mẽ, suốt 35 năm, Viettel len lỏi trong từng ngóc ngách của đời sống người Việt, góp phần kiến tạo 1 cuộc sống hạnh phúc, 1 xã hội phồn thịnh.",
        },
        {
          type: "paragraph",
          text: "Dòng chảy khởi nguồn từ những năm 90 cuối thập kỷ 20, khi đó tiền thân của Viettel là 1 đơn vị xây lắp, chưa chính thức bước vào địa hạt viễn thông. Dấu ấn đậm nét cho năng lực của Viettel khi ấy là xây dựng thành công đường trục cáp quang 1A với công nghệ thu phát trên cùng 1 sợi quang.",
        },
        {
          type: "paragraph",
          text: 'Vào năm 2000, Viettel chính thức được cấp giấy phép và khai trương đầu số 178 trên nền dịch vụ VoiP đánh dấu cột mốc lịch sử mới của nền viễn thông Việt Nam. VoiP 178 là mốc son đánh dấu sự chuyển mình của Viettel từ kẻ làm thuê lên thành người làm chủ, là vốn dắt lưng của “gã khổng lồ" từ những ngày đầu để tạo nên kỳ tích như bây giờ.',
        },
        {
          type: "paragraph",
          text: "Đến năm 2004, Viettel ra đời dịch vụ di động với đầu số 098, khép lại dịch vụ 178. Với mong muốn phổ cập di động cho người dân, khi ấy vẫn được coi là một dịch vụ xa xỉ, Viettel từng bước xây dựng hạ tầng và mạng lưới, để ở bất cứ đâu trên lãnh thổ Việt Nam đều có sóng Viettel, để người dân được dùng di động với giá rẻ hơn gấp nhiều lần. Sự ra mắt của gói cước Tomato đã tạo nên 1 cú hích, Viettel trên đà tăng trưởng năm sau gấp đôi năm trước.",
        },
        {
          type: "paragraph",
          text: "khai truong 098",
        },
        {
          type: "paragraph",
          text: "Từ năm 2005 - 2017, liên tục bùng nổ với các cuộc cách mạng 2G-3G-4G và 5G tới đây, dòng chảy Viettel đã thực sự hoà quyện vào cuộc sống của người Việt. Trong suốt chặng đường hơn 2 thập kỉ qua, dòng chảy ấy đã bồi đắp phù sa mỗi nơi mà nó đi qua với:",
        },
        {
          type: "paragraph",
          text: "Hơn 97% xã phường đường được phủ sóng 4G",
        },
        {
          type: "paragraph",
          text: "Hơn 70 triệu kết nối di động với 85% được kết nối tốc độ cao với công nghệ 4G, 5G",
        },
        {
          type: "paragraph",
          text: "Hơn 56% thị phần di động và vị trí số 1 về thị phần di động tại Việt Nam",
        },
        {
          type: "paragraph",
          text: "Hơn 622 nhà mạng tại 215 quốc gia vùng lãnh thổ trên thế giới được kết nối",
        },
        {
          type: "paragraph",
          text: "Không dừng lại ở dịch vụ Viễn thông, dòng chảy Viettel không ngừng mạnh mẽ, vượt mọi địa hình vươn đến những vùng đất mới, chinh phục những giới hạn mới.",
        },
        {
          type: "heading",
          level: 2,
          text: "Từ số 01 Việt Nam vươn mình ra năm châu",
        },
        {
          type: "paragraph",
          text: "Khởi đầu với Metfone vào năm 2009, Viettel liên tục mở rộng thị trường quốc tế với việc triển khai hoạt động từ châu Á đến châu Phi và Mỹ Latinh. 10 công ty mang thương hiệu của Viettel đang hoạt động trên 3 châu lục, phục vụ hơn 100 triệu khách hàng. Trong đó, ở 6/10 thị trường, Viettel đang đứng ở vị trí hàng đầu về thị phần thuê bao bao gồm: Campuchia, Lào, Burundi, Đông Timor, Mozambique và Myanmar.",
        },
        {
          type: "paragraph",
          text: "viettel global",
        },
        {
          type: "heading",
          level: 2,
          text: "Từ phổ cập viễn thông đến tiên phong kiến tạo xã hội số",
        },
        {
          type: "paragraph",
          text: "Từ ngành nghề chính ban đầu là xây lắp công trình viễn thông, đến nay Viettel đã phát triển thêm 5 ngành nghề mới gồm ngành dịch vụ viễn thông & CNTT, nghiên cứu sản xuất thiết bị điện tử viễn thông, công nghiệp quốc phòng, công nghiệp an ninh mạng và ngành cung cấp dịch vụ số. Làm chủ công nghệ mạng 5G, và tiến tới là 6G, Viettel càng khẳng định vị thế và năng lực nghiên cứu, sản xuất các công nghệ lõi, sẵn sàng tiến vào kỉ nguyên mới, nơi vạn vật kết nối.",
        },
        {
          type: "paragraph",
          text: "Sau 35 năm phát triển, Viettel đã thực sự lớn mạnh, thương hiệu viễn thông trị giá gần 9 tỷ đô la Mỹ, top 17 trên thế giới, số 1 Đông Nam Á, sẽ TIẾP NỐI sứ mệnh tiên phong, chủ lực kiến tạo xã hội số.",
        },
        {
          type: "paragraph",
          text: "viettel 35 nam",
        },
        {
          type: "paragraph",
          text: "Những dòng chảy từ yên ả đến mạnh mẽ của Viettel đã len lỏi vào từng ngóc ngách của cuộc sống người Việt theo cách đó. Lúc hiện hữu khi âm thầm. Thế nhưng, không lúc nào ngưng sứ mệnh kiến tạo những rực rỡ tươi xanh cho cuộc sống.",
        },
        {
          type: "paragraph",
          text: "Luôn sáng tạo để cuộc sống của con người ngày càng tốt hơn.",
        },
        {
          type: "paragraph",
          text: "Viettel, Theo cách của bạn.",
        },
      ],
    },
  },
  "/tin-tuc/khuyen-mai-nap-the-15-6": {
    status: "ready",
    kind: "news-article",
    title: "Khuyến mãi nạp thẻ Viettel ngày 15 tháng 6",
    description:
      "Tặng ngay 20% giá trị thẻ nạp cho các thuê bao di động trả trước khi thực hiện nạp tiền vào ngày 15/06/2024. Chương trình triển khai trên Toàn Quốc.",
    heading:
      "Khuyến mãi 20% thẻ nạp cho thuê bao trả trước mạng Viettel ngày 15/6",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/khuyen-mai-nap-the-15-6"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0150.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 5cb26c975a6bb21747058128ab7771af7ec8ffac45293db227a3eee2d624128d",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "15/06/2024",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Khuyến mãi 20% thẻ nạp cho thuê bao trả trước mạng Viettel diễn ra vào ngày 15/6",
        },
        {
          type: "paragraph",
          text: "Nạp thẻ thả ga, không lo về giá! Khuyến mãi ngập tràn, tặng ngay 20% giá trị thẻ nạp cho các thuê bao di động trả trước khi thực hiện giao dịch nạp tiền. Chương trình được áp dụng trên toàn quốc!",
        },
        {
          type: "paragraph",
          text: "Khuyen mai nap the viettel 15 6",
        },
        {
          type: "paragraph",
          text: "Chi tiết chương trình khuyến mãi",
        },
        {
          type: "paragraph",
          text: "Thời gian áp dụng: Từ 0 giờ đến 24 giờ ngày 15/6/2024",
        },
        {
          type: "paragraph",
          text: "Phạm vi áp dụng: Toàn quốc",
        },
        {
          type: "paragraph",
          text: "Đối tượng hưởng ưu đãi: Thuê bao di động trả trước mạng Viettel",
        },
        {
          type: "paragraph",
          text: "Nội dung ưu đãi:",
        },
        {
          type: "paragraph",
          text: "Tặng 20% giá trị thẻ nạp vào tài khoản khuyến mãi khi Khách hàng thực hiện giao dịch nạp tiền.",
        },
        {
          type: "paragraph",
          text: "Tiền khuyến mãi sử dụng để liên lạc nội mạng trong 15 ngày.",
        },
        {
          type: "paragraph",
          text: "Không áp dụng đồng thời với chương trình khuyến mãi nạp thẻ khác trong cùng ngày.",
        },
        {
          type: "heading",
          level: 2,
          text: "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ (tháng)", "ĐĂNG KÝ"],
            rows: [
              [
                "MXH100",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
                "100.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH120",
                "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "MXH150",
                "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              ["SD70", "30GB (1GB/ngày)", "70.000đ", "ĐĂNG KÝĐăng ký"],
              ["SD90", "45GB (1.5GB/ngày)", "90.000đ", "ĐĂNG KÝĐăng ký"],
              [
                "SD120",
                "60GB (2GB/ngày)Miễn phí TV360",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD135",
                "150GB (5GB/ngày)Miễn phí TV360",
                "135.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "SD150",
                "90GB (3GB/ngày)Miễn phí TV360",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V90B",
                "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
                "90.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V120B",
                "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
                "120.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V150B",
                "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
                "150.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V160B",
                "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
                "160.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V180B",
                "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
                "180.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "V200B",
                "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
                "200.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "30N",
                "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
                "300.000đ",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
      ],
    },
  },
  "/tin-tuc/mo-app-co-qua-viettel-money": {
    status: "ready",
    kind: "news-article",
    title:
      "Mở app có quà - Cơ hội rinh thưởng triệu đồng từ Viettel Money. Đừng bỏ lỡ!",
    description:
      "Khách hàng truy cập app Viettel Money sẽ nhận ngay cơ hội trúng thưởng dựa trên số thứ tự mở app. Giải thưởng từ 1.000đ đến 1.000.000đ",
    heading: "Cơ hội rinh thưởng triệu đồng từ Viettel Money: Đừng bỏ lỡ!",
    sections: [],
    source: {
      url: siteConfig.url("/tin-tuc/mo-app-co-qua-viettel-money"),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0151.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: a695c38eb2a8108e6f243741175315c4ad087d94e51a83c999c141dda08769e5",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "13/06/2024",
      blocks: [
        {
          type: "heading",
          level: 2,
          text: "Cơ hội rinh thưởng triệu đồng từ Viettel Money: Đừng bỏ lỡ!",
        },
        {
          type: "paragraph",
          text: "Mở Viettel Money là có quà! Rinh ngay cơ hội trúng hàng triệu đồng từ khi truy cập app Viettel Money. Nhanh tay mở app, tận hưởng ngay những phần quà giá trị!",
        },
        {
          type: "paragraph",
          text: "Mo app co qua Viettel Money",
        },
        {
          type: "paragraph",
          text: "Thể Lệ Chương Trình:",
        },
        {
          type: "paragraph",
          text: "Khách hàng truy cập app Viettel Money sẽ nhận ngay cơ hội trúng thưởng dựa trên số thứ tự mở app:",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Số Lẻ: Voucher nạp điện thoại 1.000 đồng",
            "Số Chẵn: Voucher nạp điện thoại 2.000 đồng",
            "Số Tam quý (111 đến 999): 1.000.000 đồng",
            "Số Tứ quý (1.111 đến 9.999): 1.000.000 đồng",
            "Số Ngũ quý (11.111 đến 99.999): 1.000.000 đồng",
            "Số Lục quý (111.111 đến 999.999): 1.000.000 đồng",
            "Số Thất quý (1.111.111 đến 9.999.999): 1.000.000 đồng",
            "Số Bát quý, Cửu quý, ...: 1.000.000 đồng",
            "Số tròn triệu (1.000.000 đến 8.000.000, ...): 1.000.000 đồng",
          ],
        },
        {
          type: "paragraph",
          text: "Hướng Dẫn Tham Gia:",
        },
        {
          type: "paragraph",
          text: "Bước 1: Tải/mở ứng dụng Viettel Money",
        },
        {
          type: "paragraph",
          text: "Bước 2: Thực hiện đăng ký/đăng nhập để nhận quà",
        },
        {
          type: "paragraph",
          text: "Bước 3: Lan toả, chia sẻ thông tin để bạn bè cùng tham gia, nhận quà",
        },
        {
          type: "paragraph",
          text: "Lưu Ý",
        },
        {
          type: "list",
          ordered: false,
          items: [
            "Chương trình chỉ áp dụng cho thuê bao di động Viettel.",
            "Khách hàng đã hưởng quà 999đ từ chương trình trong tháng sẽ được nhận quà từ các tháng sau.",
            "Mỗi khách hàng nhận tối đa 1 quà/tháng.",
            "Khách hàng trúng thưởng có nghĩa vụ cung cấp đầy đủ thông tin và thực hiện các thủ tục theo yêu cầu của Viettel Money.",
            "Viettel Money có quyền từ chối trao thưởng nếu phát hiện dấu hiệu gian lận hoặc trục lợi từ chương trình. Quyết định của Viettel Money về vấn đề này là chung cuộc và có giá trị ràng buộc khách hàng.",
            "Hotline hỗ trợ và tư vấn miễn phí: 18009000.",
          ],
        },
        {
          type: "paragraph",
          text: "Hàng ngàn phần thưởng giá trị đang chờ đón bạn. Nhanh tay tải ứng dụng và tham gia ngay hôm nay để trở thành người may mắn trúng thưởng!",
        },
      ],
    },
  },
  "/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360": {
    status: "ready",
    kind: "news-article",
    title: "Gói cước Viettel 2026 | Đăng ký 4G 5G nhanh nhất",
    description:
      "Cập nhật gói cước Viettel 2026 mới nhất: các gói 4G, 5G theo ngày, tháng, combo data – thoại, ưu đãi hấp dẫn, đăng ký nhanh chóng.",
    heading: "TỔNG HỢP CÁCH ĐĂNG KÝ XEM TRỌN BỘ EURO 2024 TRÊN TV360",
    sections: [],
    source: {
      url: siteConfig.url(
        "/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360",
      ),
      capturedAt: "2026-10-27T08:27:55.740Z",
      evidencePaths: [
        "work/web-clone-benchmark/raw/html/0152.html",
        "src/generated/viettelup-source-pages.json",
      ],
      verifiedFields: [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        'article rich text blocks from [itemprop="articleBody"]',
        "publication date label",
        "static CTA anchor href/label when present",
      ],
      unverifiedFields: [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping",
        "Inline article anchor destinations cannot be represented by plain-text article blocks; see data/content/source-capture-171.json articleLinks",
      ],
      notes: [
        "Full raw HTML captured hash SHA-256: 2fdc183c5cfa01d119cfcc13519108ca6b50f8f8135bd4f90ece2175536ba874",
        "Template: news_article. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json.",
        "Captured article body text, headings, lists and tables; original inline links/media inventory retained in source-capture-171.json for fidelity follow-up.",
      ],
    },
    article: {
      publishedLabel: "12/06/2024",
      blocks: [
        {
          type: "paragraph",
          text: "Khuyến mãi đặc biệt: Từ nay đến 20/7/2024, khi đăng ký gói cước TV360 bằng bất kỳ hình thức nào, khách hàng nhận ngay cơ hội trúng 1 trong 3 giải thưởng cực hấp dẫn, trong đó mỗi giải gồm 1 quả bóng vàng EURO 24K trị giá 1 cây vàng 9999.",
        },
        {
          type: "paragraph",
          text: "Lễ quay thưởng: Giải thưởng sẽ được xác định trong buổi lễ quay thưởng do Viettel tổ chức vào ngày 01/08/2024 dựa trên danh sách mã dự thưởng của khách hàng tham gia chương trình.",
        },
        {
          type: "paragraph",
          text: "Tổng hợp cách đăng ký xem trọn bộ euro 2024 trên TV360",
        },
        {
          type: "heading",
          level: 2,
          text:
            "Đăng ký gói cước 4G Viettel xem Euro trực tiếp tại " +
            siteConfig.hostname,
        },
        {
          type: "paragraph",
          text: "Viettel cung cấp các gói cước truyền hình EURO, dành tặng Khách hàng đặc quyền xem trọn vẹn các giải đấu. Đặc biệt, các gói cước đi kèm quyền lợi xem EURO được đảm bảo giữ nguyên giá. Thoả sức xem EURO không tốn data 3G/4G cùng các gói cước TV360 của Viettel. Đăng ký gói cước đơn giản, tiện lợi và nhanh chóng chỉ với 1 thao tác duy nhất!",
        },
        {
          type: "paragraph",
          text: "Khách hàng có thể trải nghiệm ứng dụng TV360 trên App Store/CH Play. Sau đây là danh sách gói cước data 4G Viettel kèm ưu đãi xem TV360 full HD (1080p) không quảng cáo trên mọi thiết bị:",
        },
        {
          type: "table",
          table: {
            headings: ["GÓI CƯỚC", "ƯU ĐÃI", "ĐƠN GIÁ", "ĐĂNG KÝ"],
            rows: [
              [
                "VSport",
                "Miễn phí TV360",
                "20.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "VCine",
                "Miễn phí TV360",
                "20.000đ (30 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV35K",
                "7GB (1GB/ngày)Miễn phí TV360",
                "35.000đ (7 ngày)",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV65K",
                "14GB (2GB/ngày)Miễn phí TV360",
                "65.000đ/7 ngày",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV75K",
                "30GB (1GB/ngày)Miễn phí TV360",
                "75.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV95K",
                "45GB (1.5GB/ngày)Miễn phí TV360",
                "95.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV120K",
                "30GB (1GB/ngày)Miễn phí TV360",
                "120.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
              [
                "TV125K",
                "60GB (2GB/ngày)Miễn phí TV360",
                "125.000đ/tháng",
                "ĐĂNG KÝĐăng ký",
              ],
            ],
          },
        },
        {
          type: "heading",
          level: 2,
          text: "Đăng Ký Trên App Viettel Money",
        },
        {
          type: "paragraph",
          text: "Đăng ký gói cước data bảo mật, an toàn trên ứng dụng Viettel Money. Khách hàng sẽ có cơ hội sử dụng các gói cước data siêu hấp dẫn cùng hàng loạt tiện ích chỉ có trên Viettel Money.",
        },
        {
          type: "paragraph",
          text: "Hướng dẫn cách đăng ký data Viettel trên ứng dụng Viettel Money:",
        },
        {
          type: "paragraph",
          text: "Appstore Viettel Money",
        },
        {
          type: "paragraph",
          text: "Bước 1: Tải hoặc mở ứng dụng Viettel Money trên thiết bị di động và tiến hành đăng ký/đăng nhập.",
        },
        {
          type: "paragraph",
          text: "Bước 2: Trên màn hình chính, chọn “Tất cả dịch vụ”.",
        },
        {
          type: "paragraph",
          text: "Bước 3: Tìm kiếm và chọn mục “Truyền hình TV360”.",
        },
        {
          type: "paragraph",
          text: "Bước 4: Lựa chọn và đăng ký gói cước data phù hợp với nhu cầu.",
        },
        {
          type: "paragraph",
          text: "Bước 5: Nhập mật khẩu và OTP để xác thực giao dịch thanh toán.",
        },
        {
          type: "heading",
          level: 2,
          text: "Đăng ký trực tiếp trên app TV360",
        },
        {
          type: "paragraph",
          text: "Khách hàng có thể đăng ký dịch vụ trực tiếp trên app TV360 với giá chỉ từ 50.000đ/tháng cho gói TV360 Standard. Khách hàng sở hữu ngay 1 tài khoản có thể xem đồng thời trên 2 thiết bị và hoàn toàn miễn phí data 3G/4G Viettel khi xem TV360 trên các thiết bị di động.",
        },
        {
          type: "paragraph",
          text: "Appstore TV360",
        },
        {
          type: "paragraph",
          text:
            "Nhanh tay đăng ký gói cước TV360 để tận hưởng mùa giải cuồng nhiệt và săn bóng vàng EURO 24K trị giá 1 cây vàng 9999. Chi tiết các chương trình khuyến mãi được cập nhật thường xuyên qua website " +
            siteConfig.hostname,
        },
      ],
    },
  },
};
