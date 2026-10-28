import { siteConfig } from "@/lib/site-config";
import type { PageContent } from "@/lib/content-schema";

/** Route metadata preserved from the parsed page data and source preview fallback. */
export const packagePageContents: Record<string, PageContent> = {
  "/goi-cuoc-viettel/5G20": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 5G20 Viettel: 6GB/3 ngày chỉ 20.000đ",
    "description": "Gói 5G20 Viettel: 6GB/3 ngày chỉ 20.000đ",
    "heading": "Gói cước Viettel 5G20",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói 5G20",
        "paragraphs": [
          "Cước phí: 20.000đ",
          "Thời hạn sử dụng: 3 ngày",
          "Dung lượng data: 6GB/3 ngày",
          "Cú pháp đăng ký: 5G20 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết data ngừng truy cập, không phát sinh cước ngoài gói",
          "Tự động gia hạn sau 3 ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói 5G20",
        "paragraphs": [
          "Hủy gói: HUY 5G20 gửi 191"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G20"),
      "capturedAt": "2026-10-27T13:13:06+07:00",
      "evidencePaths": [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/package-5G20.txt"
      ],
      "verifiedFields": [
        "page title",
        "H1",
        "price and cycle",
        "data allowance",
        "H2 headings",
        "visible CTA text"
      ],
      "unverifiedFields": [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "CTA actual SMS URL/handler",
        "offer eligibility for subscriber",
        "direct status/redirect",
        "complete original prose",
        "related-package cards",
        "media src"
      ],
      "notes": [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
        "Observed H2 sequence: Thông tin chi tiết gói 5G20 | Ưu điểm nổi bật của gói 5G20 | Cách đăng ký gói 5G20 | Ai nên dùng gói 5G20? | Tổng kết | Gói cước tương tự"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G20",
      "code": "5G20",
      "subscription": "general",
      "price": {
        "amountVND": 20000,
        "sourceLabel": "20.000đ",
        "cycle": {
          "quantity": 3,
          "unit": "day",
          "label": "3 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 6,
          "unit": "GB",
          "period": "3 ngày",
          "sourceLabel": "6GB/3 ngày"
        }
      ],
      "conditions": [
        "Hết data ngừng truy cập, không phát sinh cước ngoài gói",
        "Tự động gia hạn sau 3 ngày"
      ],
      "registration": {
        "smsText": "5G20 UP",
        "shortcode": "290",
        "note": "Hủy: HUY 5G20 gửi 191"
      }
    }
  },
  "/goi-cuoc-viettel/5G30": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước Ngày Viettel 5G30 – 7GB/Ngày, Chỉ 30K/3 Ngày!",
    "description": "Gói cước ngày Viettel 5G30 chỉ 30.000đ/3 ngày, nhận ngay 21GB (7GB/ngày), sử dụng trên cả mạng 4G & 5G.",
    "heading": "Gói cước Viettel 5G30",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Gói Cước Ngày Viettel 5G30",
        "paragraphs": [
          "Cước phí: 30.000đ",
          "Thời hạn sử dụng: 3 ngày",
          "Dung lượng: 7GB/ngày",
          "Dung lượng: 21GB (7GB/ngày)",
          "Đăng ký SMS: 5G30 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Lợi Ích Khi Đăng Ký Gói 5G30 Viettel",
        "ordered": false,
        "items": [
          "Sử dụng trên hạ tầng 4G và 5G"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết data hệ thống ngắt truy cập",
          "Gói tự động gia hạn nếu tài khoản đủ tiền"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G30"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/5G30.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông Tin Gói Cước Ngày Viettel 5G30 | Lợi Ích Khi Đăng Ký Gói 5G30 Viettel | Kiểm Tra & Hủy Gói 5G30 Viettel | Ai Nên Sử Dụng Gói Cước Ngày Viettel 5G30? | Có Nên Đăng Ký Gói Cước Ngày Viettel 5G30?"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G30",
      "code": "5G30",
      "subscription": "general",
      "price": {
        "amountVND": 30000,
        "sourceLabel": "30.000đ",
        "cycle": {
          "quantity": 3,
          "unit": "day",
          "label": "3 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 7,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "7GB/ngày"
        },
        {
          "value": 21,
          "unit": "GB",
          "period": "3 ngày",
          "sourceLabel": "21GB (7GB/ngày)"
        }
      ],
      "benefits": [
        "Sử dụng trên hạ tầng 4G và 5G"
      ],
      "conditions": [
        "Hết data hệ thống ngắt truy cập",
        "Gói tự động gia hạn nếu tài khoản đủ tiền"
      ],
      "registration": {
        "smsText": "5G30 UP",
        "shortcode": "290",
        "note": "Nguồn hướng dẫn kiểm tra KTTK gửi 191 và hủy HUY 5G30 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/5G40": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 5G40 Viettel: 15GB/7 ngày chỉ 40.000đ",
    "description": "Đăng ký gói 5G40 Viettel chỉ 40.000đ dùng 15GB trong 7 ngày, tốc độ cao 4G/5G, hết dung lượng ngừng truy cập.",
    "heading": "Gói cước Viettel 5G40",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói 5G40",
        "paragraphs": [
          "Cước phí: 40.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 15GB/7 ngày",
          "Đăng ký SMS: 5G40 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Ưu điểm nổi bật của gói 5G40",
        "ordered": false,
        "items": [
          "Hỗ trợ 4G/5G"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết dung lượng ngừng truy cập",
          "Tự động gia hạn nếu tài khoản đủ tiền"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G40"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/5G40.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói 5G40 | Ưu điểm nổi bật của gói 5G40 | Cách đăng ký và hủy gói 5G40 | Ai nên dùng gói 5G40? | Tổng kết"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G40",
      "code": "5G40",
      "subscription": "general",
      "price": {
        "amountVND": 40000,
        "sourceLabel": "40.000đ",
        "cycle": {
          "quantity": 7,
          "unit": "day",
          "label": "7 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 15,
          "unit": "GB",
          "period": "7 ngày",
          "sourceLabel": "15GB/7 ngày"
        }
      ],
      "benefits": [
        "Hỗ trợ 4G/5G"
      ],
      "conditions": [
        "Hết dung lượng ngừng truy cập",
        "Tự động gia hạn nếu tài khoản đủ tiền"
      ],
      "registration": {
        "smsText": "5G40 UP",
        "shortcode": "290",
        "note": "Nguồn hướng dẫn kiểm tra KTTK gửi 191 và hủy HUY 5G40 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/5G70": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước Ngày Viettel 5G70 – 8GB/Ngày, Chỉ 70K/7 Ngày!",
    "description": "Gói cước ngày Viettel 5G70 chỉ 70.000đ/7 ngày, nhận ngay 56GB (8GB/ngày), dùng trên cả mạng 4G & 5G.",
    "heading": "Gói cước Viettel 5G70",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Gói Cước Ngày Viettel 5G70",
        "paragraphs": [
          "Cước phí: 70.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 8GB/ngày",
          "Dung lượng: 56GB (8GB/ngày)",
          "Đăng ký SMS: 5G70 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Lợi Ích Khi Đăng Ký Gói 5G70 Viettel",
        "ordered": false,
        "items": [
          "Sử dụng trên hạ tầng 4G và 5G"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết data trong ngày ngừng truy cập",
          "Gói tự động gia hạn nếu tài khoản đủ tiền"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G70"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/5G70.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông Tin Gói Cước Ngày Viettel 5G70 | Lợi Ích Khi Đăng Ký Gói 5G70 Viettel | Kiểm Tra & Hủy Gói 5G70 Viettel | Ai Nên Sử Dụng Gói Cước Ngày Viettel 5G70? | Có Nên Đăng Ký Gói Cước Ngày Viettel 5G70?"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G70",
      "code": "5G70",
      "subscription": "general",
      "price": {
        "amountVND": 70000,
        "sourceLabel": "70.000đ",
        "cycle": {
          "quantity": 7,
          "unit": "day",
          "label": "7 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 8,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "8GB/ngày"
        },
        {
          "value": 56,
          "unit": "GB",
          "period": "7 ngày",
          "sourceLabel": "56GB (8GB/ngày)"
        }
      ],
      "benefits": [
        "Sử dụng trên hạ tầng 4G và 5G"
      ],
      "conditions": [
        "Hết data trong ngày ngừng truy cập",
        "Gói tự động gia hạn nếu tài khoản đủ tiền"
      ],
      "registration": {
        "smsText": "5G70 UP",
        "shortcode": "290",
        "note": "Nguồn hướng dẫn kiểm tra KTTK gửi 191 và hủy HUY 5G70 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/5GVS80": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước Ngày Viettel 5GVS80 – 8GB/Ngày, Xem Ngoại Hạng Anh & Cúp C1 Miễn Phí!",
    "description": "Gói cước ngày Viettel 5GVS80 chỉ 80.000đ/7 ngày, nhận 8GB/ngày, xem miễn phí Ngoại Hạng Anh, Cúp C1 trên TV360.",
    "heading": "Gói cước Viettel 5GVS80",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Gói Cước Ngày Viettel 5GVS80",
        "paragraphs": [
          "Cước phí: 80.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 8GB/ngày",
          "Đăng ký SMS: 5GVS80 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Lợi Ích Khi Đăng Ký Gói 5GVS80 Viettel",
        "ordered": false,
        "items": [
          "Xem Ngoại Hạng Anh và Cúp C1 trên TV360 theo mô tả nguồn",
          "Sử dụng 4G và 5G"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết data trong ngày ngắt kết nối",
          "Gói tự động gia hạn nếu tài khoản đủ tiền"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5GVS80"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/5GVS80.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông Tin Gói Cước Ngày Viettel 5GVS80 | Lợi Ích Khi Đăng Ký Gói 5GVS80 Viettel | Kiểm Tra & Hủy Gói 5GVS80 Viettel | Ai Nên Sử Dụng Gói Cước Ngày Viettel 5GVS80? | Có Nên Đăng Ký Gói Cước Ngày Viettel 5GVS80?"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5GVS80",
      "code": "5GVS80",
      "subscription": "general",
      "price": {
        "amountVND": 80000,
        "sourceLabel": "80.000đ",
        "cycle": {
          "quantity": 7,
          "unit": "day",
          "label": "7 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 8,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "8GB/ngày"
        }
      ],
      "benefits": [
        "Xem Ngoại Hạng Anh và Cúp C1 trên TV360 theo mô tả nguồn",
        "Sử dụng 4G và 5G"
      ],
      "conditions": [
        "Hết data trong ngày ngắt kết nối",
        "Gói tự động gia hạn nếu tài khoản đủ tiền"
      ],
      "registration": {
        "smsText": "5GVS80 UP",
        "shortcode": "290",
        "note": "Nguồn hướng dẫn kiểm tra KTTK gửi 191 và hủy HUY 5GVS80 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/3N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 3N Viettel chỉ 30K Nhận 15GB (5GB/ngày) . Miễn Phí Gọi. Miễn Phí SMS. Miễn Phí TV360",
    "description": "Gói cước combo 3N giá 30.000đ cho 3 ngày, dung lượng 5GB/ngày, kèm gọi, SMS nội mạng và TV360 theo mô tả nguồn.",
    "heading": "Gói cước Viettel 3N",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 3N của Viettel",
        "paragraphs": [
          "Cước phí: 30.000đ",
          "Thời hạn sử dụng: 3 ngày",
          "Dung lượng: 5GB/ngày",
          "Dung lượng: 15GB (5GB/ngày)",
          "Đăng ký SMS: 3N UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước 3N",
        "ordered": false,
        "items": [
          "Gọi nội mạng dưới 10 phút/cuộc",
          "15 phút gọi ngoại mạng",
          "SMS nội mạng",
          "TV360 Basic"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi áp dụng cho thuê bao Viettel trả trước và trả sau"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/3N"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/3N.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước 3N của Viettel | Cách đăng ký gói cước 3N"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/3N",
      "code": "3N",
      "subscription": "general",
      "price": {
        "amountVND": 30000,
        "sourceLabel": "30.000đ",
        "cycle": {
          "quantity": 3,
          "unit": "day",
          "label": "3 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 5,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "5GB/ngày"
        },
        {
          "value": 15,
          "unit": "GB",
          "period": "3 ngày",
          "sourceLabel": "15GB (5GB/ngày)"
        }
      ],
      "benefits": [
        "Gọi nội mạng dưới 10 phút/cuộc",
        "15 phút gọi ngoại mạng",
        "SMS nội mạng",
        "TV360 Basic"
      ],
      "conditions": [
        "Nguồn ghi áp dụng cho thuê bao Viettel trả trước và trả sau"
      ],
      "registration": {
        "smsText": "3N UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/7N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 7N Viettel chỉ 70K/7ngày Nhận 35GB (5GB/ngày) . Miễn Phí Gọi. Miễn Phí SMS. Miễn Phí TV360",
    "description": "Gói cước combo 7N giá 70.000đ cho 7 ngày, dung lượng 5GB/ngày, kèm gọi, SMS nội mạng và TV360 theo mô tả nguồn.",
    "heading": "Gói cước Viettel 7N",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 7N của Viettel",
        "paragraphs": [
          "Cước phí: 70.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 5GB/ngày",
          "Dung lượng: 35GB (5GB/ngày)",
          "Đăng ký SMS: 7N UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước 7N",
        "ordered": false,
        "items": [
          "Gọi nội mạng dưới 10 phút/cuộc",
          "35 phút gọi ngoại mạng",
          "SMS nội mạng",
          "TV360 Basic"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi áp dụng cho thuê bao Viettel trả trước và trả sau"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/7N"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/7N.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước 7N của Viettel | Cách đăng ký gói cước 7N"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/7N",
      "code": "7N",
      "subscription": "general",
      "price": {
        "amountVND": 70000,
        "sourceLabel": "70.000đ",
        "cycle": {
          "quantity": 7,
          "unit": "day",
          "label": "7 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 5,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "5GB/ngày"
        },
        {
          "value": 35,
          "unit": "GB",
          "period": "7 ngày",
          "sourceLabel": "35GB (5GB/ngày)"
        }
      ],
      "benefits": [
        "Gọi nội mạng dưới 10 phút/cuộc",
        "35 phút gọi ngoại mạng",
        "SMS nội mạng",
        "TV360 Basic"
      ],
      "conditions": [
        "Nguồn ghi áp dụng cho thuê bao Viettel trả trước và trả sau"
      ],
      "registration": {
        "smsText": "7N UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/5G10": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước Ngày Viettel 5G10 – 6GB/Ngày Chỉ 10K, Truy Cập Mạng Mượt Mà!",
    "description": "Gói cước ngày Viettel 5G10 chỉ 10.000đ nhận ngay 6GB tốc độ cao, hỗ trợ cả mạng 4G và 5G.",
    "heading": "Gói cước Viettel 5G10",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Gói Cước Ngày Viettel 5G10",
        "paragraphs": [
          "Cước phí: 10.000đ",
          "Thời hạn sử dụng: 1 ngày",
          "Dung lượng: 6GB/ngày",
          "Đăng ký SMS: 5G10 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Lợi Ích Khi Đăng Ký Gói 5G10 Viettel",
        "ordered": false,
        "items": [
          "Hỗ trợ 4G và 5G"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết dung lượng ngắt truy cập",
          "Gói tự động gia hạn nếu tài khoản đủ tiền"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G10"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/5G10.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông Tin Gói Cước Ngày Viettel 5G10 | Lợi Ích Khi Đăng Ký Gói 5G10 Viettel | Kiểm Tra & Hủy Gói 5G10 Viettel | Gói Cước Ngày Viettel 5G10 Phù Hợp Với Ai? | Có Nên Đăng Ký Gói Cước Ngày Viettel 5G10?",
        "Top summary duration says only 'ngày' without numeral; article text L35-L43 says 1 ngày."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G10",
      "code": "5G10",
      "subscription": "general",
      "price": {
        "amountVND": 10000,
        "sourceLabel": "10.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "day",
          "label": "1 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 6,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "6GB/ngày"
        }
      ],
      "benefits": [
        "Hỗ trợ 4G và 5G"
      ],
      "conditions": [
        "Hết dung lượng ngắt truy cập",
        "Gói tự động gia hạn nếu tài khoản đủ tiền"
      ],
      "registration": {
        "smsText": "5G10 UP",
        "shortcode": "290",
        "note": "Nguồn hướng dẫn kiểm tra KTTK gửi 191 và hủy HUY 5G10 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/1N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 1N Viettel - 10K/ngày Nhận 5GB Data. Miễn Phí Gọi. Miễn Phí SMS. Miễn Phí TV360",
    "description": "Gói cước combo 1N giá 10.000đ cho 1 ngày, dung lượng 5GB/ngày, kèm gọi, SMS nội mạng và TV360 theo mô tả nguồn.",
    "heading": "Gói cước Viettel 1N",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 1N của Viettel",
        "paragraphs": [
          "Cước phí: 10.000đ",
          "Thời hạn sử dụng: 1 ngày",
          "Dung lượng: 5GB/ngày",
          "Đăng ký SMS: 1N UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước 1N",
        "ordered": false,
        "items": [
          "Gọi nội mạng dưới 10 phút/cuộc",
          "5 phút gọi ngoại mạng",
          "SMS nội mạng",
          "TV360 Basic"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi áp dụng cho thuê bao Viettel trả trước và trả sau"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/1N"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/1N.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước 1N của Viettel | Cách đăng ký gói cước 1N"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/1N",
      "code": "1N",
      "subscription": "general",
      "price": {
        "amountVND": 10000,
        "sourceLabel": "10.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "day",
          "label": "1 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 5,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "5GB/ngày"
        }
      ],
      "benefits": [
        "Gọi nội mạng dưới 10 phút/cuộc",
        "5 phút gọi ngoại mạng",
        "SMS nội mạng",
        "TV360 Basic"
      ],
      "conditions": [
        "Nguồn ghi áp dụng cho thuê bao Viettel trả trước và trả sau"
      ],
      "registration": {
        "smsText": "1N UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/5GVS12": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước Ngày Viettel 5GVS12 – 6GB/Ngày, Xem Ngoại Hạng Anh & C1 Miễn Phí!",
    "description": "Gói cước ngày Viettel 5GVS12 chỉ 12.000đ/ngày, nhận 6GB tốc độ cao, xem miễn phí Cúp C1, Ngoại Hạng Anh trên TV360.",
    "heading": "Gói cước Viettel 5GVS12",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Gói Cước Ngày Viettel 5GVS12",
        "paragraphs": [
          "Cước phí: 12.000đ",
          "Thời hạn sử dụng: 1 ngày",
          "Dung lượng: 6GB/ngày",
          "Đăng ký SMS: 5GVS12 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Lợi Ích Khi Đăng Ký Gói 5GVS12 Viettel",
        "ordered": false,
        "items": [
          "Xem Ngoại Hạng Anh và Cúp C1 trên TV360 theo mô tả nguồn",
          "Hỗ trợ 4G và 5G"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết data ngắt kết nối",
          "Gói tự động gia hạn nếu tài khoản đủ tiền"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5GVS12"),
      "capturedAt": "2026-10-27T13:36:30+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-02.json",
        "reference-clone/raw/data-01/batch-02/5GVS12.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông Tin Gói Cước Ngày Viettel 5GVS12 | Lợi Ích Khi Đăng Ký Gói 5GVS12 Viettel | Kiểm Tra & Hủy Gói 5GVS12 Viettel | Ai Nên Sử Dụng Gói Cước Ngày Viettel 5GVS12? | Có Nên Đăng Ký Gói Cước Ngày Viettel 5GVS12?",
        "Top summary duration says only 'ngày' without numeral; article text L35-L43 says 1 ngày."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5GVS12",
      "code": "5GVS12",
      "subscription": "general",
      "price": {
        "amountVND": 12000,
        "sourceLabel": "12.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "day",
          "label": "1 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 6,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "6GB/ngày"
        }
      ],
      "benefits": [
        "Xem Ngoại Hạng Anh và Cúp C1 trên TV360 theo mô tả nguồn",
        "Hỗ trợ 4G và 5G"
      ],
      "conditions": [
        "Hết data ngắt kết nối",
        "Gói tự động gia hạn nếu tài khoản đủ tiền"
      ],
      "registration": {
        "smsText": "5GVS12 UP",
        "shortcode": "290",
        "note": "Nguồn hướng dẫn kiểm tra KTTK gửi 191 và hủy HUY 5GVS12 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/ST7K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước Ngày Viettel ST7K - 1GB/Ngày Chỉ 7K, Đăng Ký Ngay!",
    "description": "Gói cước ST7K 7.000đ/ngày với 1GB/ngày; đăng ký ST7K UP gửi 290.",
    "heading": "Gói cước Viettel ST7K",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Gói Cước Ngày Viettel ST7K",
        "paragraphs": [
          "Cước phí: 7.000đ",
          "Thời hạn sử dụng: 1 ngày",
          "Dung lượng: 1GB/ngày",
          "Đăng ký SMS: ST7K UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Hết data hệ thống ngắt kết nối",
          "Tự động gia hạn khi tài khoản gốc còn tiền"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST7K"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/ST7K.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông Tin Gói Cước Ngày Viettel ST7K | Lợi Ích Khi Đăng Ký Gói ST7K Viettel | Cách Kiểm Tra Dung Lượng Gói Cước | Ai Nên Sử Dụng Gói Cước Ngày Viettel ST7K?",
        "Top summary duration has only 'ngày'; main content says 1 ngày."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST7K",
      "code": "ST7K",
      "subscription": "general",
      "price": {
        "amountVND": 7000,
        "sourceLabel": "7.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "day",
          "label": "1 ngày"
        }
      },
      "dataAllowances": [
        {
          "value": 1,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "1GB/ngày"
        }
      ],
      "conditions": [
        "Hết data hệ thống ngắt kết nối",
        "Tự động gia hạn khi tài khoản gốc còn tiền"
      ],
      "registration": {
        "smsText": "ST7K UP",
        "shortcode": "290",
        "note": "Cú pháp hủy nêu trong nội dung nguồn: HUY ST7K gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/SD90": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước SD90 Viettel - 45GB Data 4G Tốc Độ Cao Giá Chỉ 90K/Tháng",
    "description": "SD90 có giá 90.000đ/tháng, cung cấp 45GB/30 ngày (1.5GB/ngày).",
    "heading": "Gói cước Viettel SD90",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước SD90 của Viettel",
        "paragraphs": [
          "Cước phí: 90.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 1.5GB/ngày",
          "Dung lượng: 45GB/30 ngày",
          "Đăng ký SMS: SD90 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi áp dụng toàn bộ thuê bao Viettel trả trước và trả sau"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/SD90"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/SD90.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước SD90 của Viettel | Cách đăng ký gói cước SD90 của Viettel"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/SD90",
      "code": "SD90",
      "subscription": "general",
      "price": {
        "amountVND": 90000,
        "sourceLabel": "90.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 1.5,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "1.5GB/ngày"
        },
        {
          "value": 45,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "45GB/30 ngày"
        }
      ],
      "conditions": [
        "Nguồn ghi áp dụng toàn bộ thuê bao Viettel trả trước và trả sau"
      ],
      "registration": {
        "smsText": "SD90 UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/SD120": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước SD120 Viettel - 60GB Data 4G Tốc Độ Cao Giá Chỉ 120K/tháng",
    "description": "SD120 có giá 120.000đ/tháng, 60GB/30 ngày (2GB/ngày) và TV360 Basic.",
    "heading": "Gói cước Viettel SD120",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước SD120 của Viettel",
        "paragraphs": [
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 2GB/ngày",
          "Dung lượng: 60GB/30 ngày",
          "Đăng ký SMS: SD120 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước SD120",
        "ordered": false,
        "items": [
          "Miễn phí data TV360 Basic"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi áp dụng toàn bộ thuê bao Viettel trả trước và trả sau"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/SD120"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/SD120.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước SD120 của Viettel | Cách đăng ký gói cước SD120"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/SD120",
      "code": "SD120",
      "subscription": "general",
      "price": {
        "amountVND": 120000,
        "sourceLabel": "120.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 2,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "2GB/ngày"
        },
        {
          "value": 60,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "60GB/30 ngày"
        }
      ],
      "benefits": [
        "Miễn phí data TV360 Basic"
      ],
      "conditions": [
        "Nguồn ghi áp dụng toàn bộ thuê bao Viettel trả trước và trả sau"
      ],
      "registration": {
        "smsText": "SD120 UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/SD135": {
    "status": "draft",
    "kind": "package",
    "title": "Gói SD135 Viettel Giá 135K nhận 150GB (5GB/ngày) + TV360 Basic",
    "description": "SD135 có giá 135.000đ/tháng, 150GB/30 ngày (5GB/ngày) và TV360 Basic.",
    "heading": "Gói cước Viettel SD135",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước SD135 của Viettel",
        "paragraphs": [
          "Cước phí: 135.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 5GB/ngày",
          "Dung lượng: 150GB/30 ngày",
          "Đăng ký SMS: SD135 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước SD135",
        "ordered": false,
        "items": [
          "Miễn phí data TV360 Basic"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi thuê bao Viettel kích hoạt mới từ 01/01/2023 và thuộc danh sách ưu đãi"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/SD135"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/SD135.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước SD135 của Viettel | Cách đăng ký gói cước SD135"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/SD135",
      "code": "SD135",
      "subscription": "general",
      "price": {
        "amountVND": 135000,
        "sourceLabel": "135.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 5,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "5GB/ngày"
        },
        {
          "value": 150,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "150GB/30 ngày"
        }
      ],
      "benefits": [
        "Miễn phí data TV360 Basic"
      ],
      "conditions": [
        "Nguồn ghi thuê bao Viettel kích hoạt mới từ 01/01/2023 và thuộc danh sách ưu đãi"
      ],
      "registration": {
        "smsText": "SD135 UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/SD150": {
    "status": "draft",
    "kind": "package",
    "title": "Gói SD150 Viettel - 150K Nhận Ngay 90GB Data 4G (3GB/ngày) + Miễn Phí TV360",
    "description": "SD150 có giá 150.000đ/tháng, 90GB/30 ngày (3GB/ngày) và TV360 Basic.",
    "heading": "Gói cước Viettel SD150",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước SD150 của Viettel",
        "paragraphs": [
          "Cước phí: 150.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 3GB/ngày",
          "Dung lượng: 90GB/30 ngày",
          "Đăng ký SMS: SD150 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước SD150",
        "ordered": false,
        "items": [
          "Miễn phí data TV360 Basic"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi áp dụng toàn bộ thuê bao Viettel trả trước và trả sau"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/SD150"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/SD150.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước SD150 của Viettel | Cách đăng ký gói cước SD150"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/SD150",
      "code": "SD150",
      "subscription": "general",
      "price": {
        "amountVND": 150000,
        "sourceLabel": "150.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 3,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "3GB/ngày"
        },
        {
          "value": 90,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "90GB/30 ngày"
        }
      ],
      "benefits": [
        "Miễn phí data TV360 Basic"
      ],
      "conditions": [
        "Nguồn ghi áp dụng toàn bộ thuê bao Viettel trả trước và trả sau"
      ],
      "registration": {
        "smsText": "SD150 UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/VM80": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước VM80 1GB/ngày Miễn Phí Nghe Sách Nói Mydio Chỉ 80K/tháng",
    "description": "VM80 có giá 80.000đ/tháng, 30GB (1GB/ngày) và miễn phí data Mydio theo điều kiện nguồn.",
    "heading": "Gói cước Viettel VM80",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước VM80 của Viettel",
        "paragraphs": [
          "Cước phí: 80.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 1GB/ngày",
          "Dung lượng: 30GB (1GB/ngày)",
          "Đăng ký SMS: VM80 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Giới thiệu về Mydio - Ứng dụng sách nói chất lượng cao từ Viettel",
        "ordered": false,
        "items": [
          "Miễn phí data truy cập ứng dụng sách nói Mydio"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Thuê bao trả trước kích hoạt mới từ 01/04/2024 (loại trừ GIC và thuê bao chuyển từ trả sau)",
          "Hoặc thuê bao trả trước thuộc danh sách được áp dụng"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/VM80"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/VM80.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước VM80 của Viettel | Giới thiệu về Mydio - Ứng dụng sách nói chất lượng cao từ Viettel"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/VM80",
      "code": "VM80",
      "subscription": "general",
      "price": {
        "amountVND": 80000,
        "sourceLabel": "80.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 1,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "1GB/ngày"
        },
        {
          "value": 30,
          "unit": "GB",
          "period": "tháng",
          "sourceLabel": "30GB (1GB/ngày)"
        }
      ],
      "benefits": [
        "Miễn phí data truy cập ứng dụng sách nói Mydio"
      ],
      "conditions": [
        "Thuê bao trả trước kích hoạt mới từ 01/04/2024 (loại trừ GIC và thuê bao chuyển từ trả sau)",
        "Hoặc thuê bao trả trước thuộc danh sách được áp dụng"
      ],
      "registration": {
        "smsText": "VM80 UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/VM100": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước Viettel VM100 | Đăng ký gói data + nghe sách MyDio ưu đãi nhất",
    "description": "VM100 có giá 100.000đ/tháng, 45GB/tháng (1.5GB/ngày) và dịch vụ sách nói MyDio.",
    "heading": "Gói cước Viettel VM100",
    "sections": [
      {
        "type": "text",
        "heading": "Gói Cước Viettel - Giới Thiệu Gói Cước VM100 Mới Nhất",
        "paragraphs": [
          "Cước phí: 100.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 1.5GB/ngày",
          "Dung lượng: 45GB/tháng",
          "Đăng ký SMS: VM100 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Gói Cước VM100 – Gói Cước Viettel Tháng Mới Nhất Cho Tín Đồ Sách Nói",
        "ordered": false,
        "items": [
          "Miễn phí nghe sách nói trên MyDio"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi tự động gia hạn theo chu kỳ hàng tháng"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/VM100"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/VM100.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Gói Cước Viettel - Giới Thiệu Gói Cước VM100 Mới Nhất | Gói Cước VM100 – Gói Cước Viettel Tháng Mới Nhất Cho Tín Đồ Sách Nói | Lý Do Bạn Nên Chọn Gói Cước Viettel VM100"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/VM100",
      "code": "VM100",
      "subscription": "general",
      "price": {
        "amountVND": 100000,
        "sourceLabel": "100.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 1.5,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "1.5GB/ngày"
        },
        {
          "value": 45,
          "unit": "GB",
          "period": "tháng",
          "sourceLabel": "45GB/tháng"
        }
      ],
      "benefits": [
        "Miễn phí nghe sách nói trên MyDio"
      ],
      "conditions": [
        "Nguồn ghi tự động gia hạn theo chu kỳ hàng tháng"
      ],
      "registration": {
        "smsText": "VM100 UP",
        "shortcode": "290",
        "note": "Cú pháp hủy nêu trong nội dung nguồn: HUY VM100 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/VM130": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước Viettel VM130 | Đăng ký gói data + nghe sách MyDio cực ưu đãi",
    "description": "VM130 có giá 130.000đ/tháng, 60GB/tháng (2GB/ngày) và dịch vụ sách nói MyDio.",
    "heading": "Gói cước Viettel VM130",
    "sections": [
      {
        "type": "text",
        "heading": "Gói Cước Viettel - Giới Thiệu Gói Cước VM130 Mới Nhất",
        "paragraphs": [
          "Cước phí: 130.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 2GB/ngày",
          "Dung lượng: 60GB/tháng",
          "Đăng ký SMS: VM130 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Gói Cước VM130 – Gói Cước Viettel Mới Cho Người Yêu Thích Sách Nói",
        "ordered": false,
        "items": [
          "Miễn phí nghe sách nói trên MyDio"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi tự động gia hạn theo chu kỳ hàng tháng"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/VM130"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/VM130.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Gói Cước Viettel - Giới Thiệu Gói Cước VM130 Mới Nhất | Gói Cước VM130 – Gói Cước Viettel Mới Cho Người Yêu Thích Sách Nói | Lý Do Bạn Nên Chọn Gói Cước Viettel VM130"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/VM130",
      "code": "VM130",
      "subscription": "general",
      "price": {
        "amountVND": 130000,
        "sourceLabel": "130.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 2,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "2GB/ngày"
        },
        {
          "value": 60,
          "unit": "GB",
          "period": "tháng",
          "sourceLabel": "60GB/tháng"
        }
      ],
      "benefits": [
        "Miễn phí nghe sách nói trên MyDio"
      ],
      "conditions": [
        "Nguồn ghi tự động gia hạn theo chu kỳ hàng tháng"
      ],
      "registration": {
        "smsText": "VM130 UP",
        "shortcode": "290",
        "note": "Cú pháp hủy nêu trong nội dung nguồn: HUY VM130 gửi 191."
      }
    }
  },
  "/goi-cuoc-viettel/V90B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V90B Viettel - 30GB Data, Miễn Phí Gọi Nội Ngoại Mạng Giá Chỉ 90K/tháng",
    "description": "V90B có giá 90.000đ/tháng, 30GB/30 ngày (1GB/ngày) và ưu đãi thoại.",
    "heading": "Gói cước Viettel V90B",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V90B của Viettel",
        "paragraphs": [
          "Cước phí: 90.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 1GB/ngày",
          "Dung lượng: 30GB/30 ngày",
          "Đăng ký SMS: V90B UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước V90B",
        "ordered": false,
        "items": [
          "Miễn phí gọi nội mạng dưới 10 phút/cuộc",
          "30 phút gọi ngoại mạng"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi thuê bao kích hoạt mới từ 01/01/2023 và thuộc danh sách ưu đãi"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V90B"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/V90B.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước V90B của Viettel | Cách đăng ký gói cước V90B"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V90B",
      "code": "V90B",
      "subscription": "general",
      "price": {
        "amountVND": 90000,
        "sourceLabel": "90.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 1,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "1GB/ngày"
        },
        {
          "value": 30,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "30GB/30 ngày"
        }
      ],
      "benefits": [
        "Miễn phí gọi nội mạng dưới 10 phút/cuộc",
        "30 phút gọi ngoại mạng"
      ],
      "conditions": [
        "Nguồn ghi thuê bao kích hoạt mới từ 01/01/2023 và thuộc danh sách ưu đãi"
      ],
      "registration": {
        "smsText": "V90B UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/V120B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V120B Viettel - 45GB Data 4G, Miễn Phí Gọi Nội Ngoại Mạng, Chỉ 120K/tháng",
    "description": "V120B có giá 120.000đ/tháng, 45GB/30 ngày (1.5GB/ngày) và ưu đãi thoại.",
    "heading": "Gói cước Viettel V120B",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V120B của Viettel",
        "paragraphs": [
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 1.5GB/ngày",
          "Dung lượng: 45GB/30 ngày",
          "Đăng ký SMS: V120B UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Cách đăng ký gói cước V120B",
        "ordered": false,
        "items": [
          "Miễn phí gọi nội mạng dưới 10 phút/cuộc",
          "50 phút gọi ngoại mạng"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Nguồn ghi thuê bao kích hoạt mới từ 01/01/2023 và thuộc danh sách ưu đãi"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V120B"),
      "capturedAt": "2026-10-27T13:40:00+07:00",
      "evidencePaths": [
        "data/sources/data-01/batch-03.json",
        "reference-clone/raw/data-01/batch-03/V120B.txt"
      ],
      "verifiedFields": [
        "visible page title and H1",
        "public-text product price and cycle",
        "data allowance display labels",
        "visible SMS registration text and shortcode",
        "bounded section headings",
        "visible benefits",
        "visible limitations and conditions"
      ],
      "unverifiedFields": [
        "actual HTTP status / redirect chain",
        "full original HTML / source meta description",
        "rendered CTA behavior and destination",
        "full original article prose and linked assets",
        "external official price / eligibility confirmation"
      ],
      "notes": [
        "Observed through public website text extractor; raw file is a curated bounded text excerpt, not raw HTML.",
        "Observed H2 sequence: Thông tin chi tiết gói cước V120B của Viettel | Cách đăng ký gói cước V120B"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V120B",
      "code": "V120B",
      "subscription": "general",
      "price": {
        "amountVND": 120000,
        "sourceLabel": "120.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 1.5,
          "unit": "GB",
          "period": "ngày",
          "sourceLabel": "1.5GB/ngày"
        },
        {
          "value": 45,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "45GB/30 ngày"
        }
      ],
      "benefits": [
        "Miễn phí gọi nội mạng dưới 10 phút/cuộc",
        "50 phút gọi ngoại mạng"
      ],
      "conditions": [
        "Nguồn ghi thuê bao kích hoạt mới từ 01/01/2023 và thuộc danh sách ưu đãi"
      ],
      "registration": {
        "smsText": "V120B UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/V150B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V150B Viettel - 60GB Data 4G + Miễn Phí Gọi Nội Ngoại Mạng, Chỉ 150K/tháng",
    "description": "V150B - Gói cước data 4G Viettel ưu đãi 60GB(2GB/ngày). Miễn phí cuộc gọi nội mạng dưới 10 phút và 80 phút gọi ngoại mạng. Đăng ký soạn V150B UP gửi 290.",
    "heading": "Gói cước Viettel V150B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V150B - Gói cước 4G Viettel thông dụng chỉ với 150.000đ, người dùng sở hữu ngay 60GB data/tháng, tương đương 2GB/ngày để truy cập internet trên điện thoại mà không cần wifi, ưu đãi miễn phí cước gọi nội mạng dưới 10 phút và 80 phút gọi ngoại mạng. Đăng ký soạn tin V150B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V150B của Viettel",
        "paragraphs": [
          "Tên gói cước: V150B",
          "Cước phí: 150.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Dung lượng: 60GB/30 ngày (2GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 10 phút",
          "Miễn phí 80 phút gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel kích hoạt mới từ ngày 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: V150B UP gửi 290",
          "V150B-viettel"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V150B",
        "paragraphs": [
          "Để đăng ký gói cước V150B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V150B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V150B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói V150B hoặc gói 3V150B với chu kỳ 3 tháng, sau đó làm theo hướng dẫn để hoàn tất đăng ký. (Nếu không tìm thấy gói V150B, vui lòng gọi CSKH Viettel Money: 1800 9000)",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V150B theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước V150B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 450.000 điểm Viettel ++ để đăng ký gói 3V150B (gói cước V150B chu kỳ 3 tháng)",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V150B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V150B",
        "paragraphs": [
          "Thuê bao di động Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 150.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V150B",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 60GB/tháng (2GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng cho người dùng tất cả các nhu cầu truy cập tìm kiếm thông tin, giải trí trên mọi nền tảng web, app trên internet (Bao gồm cả các ứng dụng nổi bật như Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 10 phút và 80 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V150B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V150B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V150B",
              "180GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 240 phút gọi ngoại mạng.",
              "450.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V150B",
              "360GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 480 phút gọi ngoại mạng.",
              "900.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V150B",
              "720GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 960 phút gọi ngoại mạng.",
              "1.800.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V150B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V150B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước V150B: Soạn \"HUY V150B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày) - Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V150B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0022.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: fef7431c3270453b84c949eb764c5d2e6eadd8a3e244c19b1d1cca03ec8160c3",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V150B",
      "code": "V150B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V160B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V160B Viettel - 120GB (4GB/ngày) + Miễn Phí Gọi Nội Ngoại Mạng, Chỉ 160K/tháng",
    "description": "V160B - Gói cước data 4G Viettel ưu đãi 120GB(4GB/ngày). Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng. Đăng ký soạn V160B UP gửi 290.",
    "heading": "Gói cước Viettel V160B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V160B - Gói cước 4G Viettel thông dụng chỉ với 160.000đ, người dùng sở hữu ngay 120GB data/tháng, tương đương 4GB/ngày để truy cập internet trên điện thoại mà không cần wifi, ưu đãi miễn phí cước gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng. Đăng ký soạn tin nhắn V160B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V160B của Viettel",
        "paragraphs": [
          "Tên gói cước: V160B",
          "Cước phí: 160.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Dung lượng: 120GB/30 ngày (4GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 10 phút",
          "Miễn phí 100 phút gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: V160B UP gửi 290",
          "V160B-viettel"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V160B",
        "paragraphs": [
          "Để đăng ký gói cước V160B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V160B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V160B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói V160B hoặc gói 3V160B với chu kỳ 3 tháng, sau đó làm theo hướng dẫn để hoàn tất đăng ký. (Nếu không tìm thấy gói V160B, vui lòng gọi CSKH Viettel Money: 1800 9000)",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V160B theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước V160B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 480.000 điểm Viettel ++ để đăng ký gói 3V160B (gói cước V160B chu kỳ 3 tháng)",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V160B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V160B",
        "paragraphs": [
          "Thuê bao di động Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 160.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V160B",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 120GB/tháng (4GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng cho người dùng tất cả các nhu cầu truy cập tìm kiếm thông tin, giải trí trên mọi nền tảng web, app trên internet (Bao gồm cả các ứng dụng nổi bật như Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 10 phút và 100 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao danh riêng cho gói cước V160B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V160B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V160B",
              "360GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 240 phút gọi ngoại mạng.",
              "480.000đ(3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V160B",
              "720GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 600 phút gọi ngoại mạng.",
              "960.000đ(6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V160B",
              "1.440GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 1.200 phút gọi ngoại mạng.",
              "1.920.000đ(12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V160B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V160B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước V160B: Soạn \"HUY V160B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày) - Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V160B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0023.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: cdbb8f53c0c978e3e94dca5a19eba7f8540483e4b896ed82265772af2c2f0ed3",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V160B",
      "code": "V160B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V180B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V180B Viettel - 180GB (6GB/ngày) + Miễn Phí Gọi Nội Ngoại Mạng, Chỉ 180K/tháng",
    "description": "V180B - Gói cước data 4G Viettel ưu đãi 180GB(6GB/ngày). Miễn phí cuộc gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng. Đăng ký soạn V180B UP gửi 290.",
    "heading": "Gói cước Viettel V180B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V180B - Gói cước 4G Viettel thông dụng chỉ với 180.000đ, người dùng sở hữu ngay 180GB data/tháng, tương đương 6GB/ngày để truy cập internet trên điện thoại mà không cần wifi, ưu đãi miễn phí cước gọi nội mạng dưới 10 phút và 100 phút gọi ngoại mạng. Đăng ký soạn tin V180B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V180B của Viettel",
        "paragraphs": [
          "Tên gói cước: V180B",
          "Cước phí: 180.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Dung lượng: 180GB/30 ngày (6GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 10 phút",
          "Miễn phí 100 phút gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel kích hoạt mới từ ngày 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: V180B UP gửi 290",
          "V180B-viettel"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V180B",
        "paragraphs": [
          "Để đăng ký gói cước V180B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V180B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V180B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói V180B hoặc gói 3V180B với chu kỳ 3 tháng, sau đó làm theo hướng dẫn để hoàn tất đăng ký. (Nếu không tìm thấy gói V180B, vui lòng gọi CSKH Viettel Money: 1800 9000)",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V180B theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước V180B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 540.000 điểm Viettel ++ để đăng ký gói 3V180B (gói cước V180B chu kỳ 3 tháng)",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V180B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V180B",
        "paragraphs": [
          "Thuê bao di động Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 180.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V180B",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 180GB/tháng (6GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng cho người dùng tất cả các nhu cầu truy cập tìm kiếm thông tin, giải trí trên mọi nền tảng web, app trên internet (Bao gồm cả các ứng dụng nổi bật như Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 10 phút và 100 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V180B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V180B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V180B",
              "540GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 300 phút gọi ngoại mạng.",
              "540.000đ(3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V180B",
              "1.080GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 600 phút gọi ngoại mạng.",
              "1.080.000đ(6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V180B",
              "2.160GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 1.200 phút gọi ngoại mạng.",
              "2.160.000đ(12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V180B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V180B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước V180B: Soạn \"HUY V180B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày) - Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V180B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0024.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 8610e4f25827d334d50ee8bcd5a248ebd5964e0b384559bf49ad59a718005be6",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V180B",
      "code": "V180B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V200B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V200B Viettel - 240GB Data (8GB/ngày) + Miễn Phí Gọi Nội Ngoại Mạng, Chỉ 200K/tháng",
    "description": "V200B - Gói cước data 4G Viettel ưu đãi 240GB(8GB/ngày). Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng. Đăng ký soạn V200B UP gửi 290.",
    "heading": "Gói cước Viettel V200B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V200B - Gói cước 4G Viettel đặc biệt với 200.000đ, người dùng sở hữu ngay 240GB data/tháng, tương đương 8GB/ngày để truy cập internet trên điện thoại mà không cần wifi, ưu đãi miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng. Đăng ký soạn tin nhắn V200B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V200B của Viettel",
        "paragraphs": [
          "Tên gói cước: V200B",
          "Cước phí: 200.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 240GB/30 ngày (8GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 100 phút gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel kích hoạt mới từ ngày 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: V200B UP gửi 290",
          "V200B-viettel"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V200B",
        "paragraphs": [
          "Để đăng ký gói cước V200B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V200B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V200B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói V200B hoặc gói 3V200B với chu kỳ 3 tháng, sau đó làm theo hướng dẫn để hoàn tất đăng ký. (Nếu không tìm thấy gói V200B, vui lòng gọi CSKH Viettel Money: 1800 9000)",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V200B theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước V200B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 600.000 điểm Viettel ++ để đăng ký gói 3V200B (gói cước V200B chu kỳ 3 tháng)",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V200B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V200B",
        "paragraphs": [
          "Thuê bao di động Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 200.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V200B",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 240GB/tháng (8GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng cho người dùng tất cả các nhu cầu truy cập tìm kiếm thông tin, giải trí trên mọi nền tảng web, app trên internet (Bao gồm cả các ứng dụng nổi bật như Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 100 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V200B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V200B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V200B",
              "720GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 300 phút gọi ngoại mạng.",
              "600.000đ(3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V200B",
              "1.440GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 600 phút gọi ngoại mạng.",
              "1.200.000đ(6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V200B",
              "2.880GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 1.200 phút gọi ngoại mạng.",
              "2.400.000đ(12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V200B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V200B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước V200B: Soạn \"HUY V200B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày) - Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V200B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0025.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: a514a6d6e62e3ee7e1a869cb078f42aab06f20ddeb811d9210e9a2f5e06759ed",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V200B",
      "code": "V200B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/30N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 30N Viettel - 300K/tháng Nhận 150GB Data. Miễn Phí Gọi. Miễn Phí SMS. Miễn Phí TV360",
    "description": "30N - Gói cước combo Viettel với 300.000đ/tháng nhận ngay 150GB(5GB/ngày). Miễn phí gọi, miễn phí SMS, miễn phí xem TV360. Đăng ký soạn 30N UP gửi 290.",
    "heading": "Gói cước Viettel 30N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "30N - Gói cước combo Viettel với 300.000đ, người dùng sở hữu ngay 150GB data/tháng, tương đương 5GB/ngày để truy cập internet trên điện thoại không cần wifi, miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng, miễn phí tin nhắn SMS nội mạng, miễn phí data xem TV360 (gói Basic của Viettel). Đăng ký soạn tin nhắn 30N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 30N của Viettel",
        "paragraphs": [
          "Tên gói cước: 30N",
          "Cước phí: 300.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Dung lượng: 150GB/30 ngày (5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 150 phút gọi ngoại mạng Viettel",
          "Miễn phí nhắn tin SMS nội mạng",
          "Miễn phí data truy cập ứng dụng giải trí TV360 (Gói Basic của Viettel)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Đăng ký qua SMS: 30N UP gửi 290",
          "30N"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước 30N",
        "paragraphs": [
          "Để đăng ký gói cước 30N của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 30N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 30N, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói 30N, sau đó làm theo hướng dẫn để hoàn tất đăng ký",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói 30N theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 30N trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 300.000 điểm Viettel ++ để đăng ký.",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 30N. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước 30N",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 300.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích đăng ký gói cước 30N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 150GB/tháng (5GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí 100% data khi truy cập ứng dụng TV360",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 150 phút gọi ngoại mạng. Miễn phí tin nhắn SMS nội mạng",
          "Đối tượng đăng ký: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 30N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 30N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 30N: Soạn \"HUY 30N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho hệ gói cước combo của Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "1N",
              "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "10.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "3N",
              "15GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "30.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "7N",
              "35GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 35 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "70.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "90N",
              "450GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "900.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "180N",
              "900GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "1.800.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "360N",
              "1.800GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "3.600.000đ (1 năm)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/30N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0026.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 812fec42a1b3f0227c95dd5818b4110cc4884211db3a9680f7af99b0f93bccd1",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/30N",
      "code": "30N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/90N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 90N Viettel (90 ngày) Nhận 450GB (5GB/ngày) . Miễn Phí Gọi. Miễn Phí SMS. Miễn Phí TV360",
    "description": "90N - Gói cước combo Viettel với 900.000đ/3 tháng nhận ngay 450GB(5GB/ngày). Miễn phí gọi, miễn phí SMS, miễn phí xem TV360. Đăng ký soạn 90N UP gửi 290.",
    "heading": "Gói cước Viettel 90N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "90N - Gói cước combo Viettel với 900.000đ, người dùng sở hữu ngay 450GB data/3 tháng, tương đương 5GB/ngày để truy cập internet trên điện thoại không cần wifi, miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày, miễn phí tin nhắn SMS nội mạng, miễn phí data xem TV360 (gói Basic của Viettel). Đăng ký soạn tin nhắn 90N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 90N của Viettel",
        "paragraphs": [
          "Tên gói cước: 90N",
          "Cước phí: 900.000đ",
          "Thời hạn sử dụng: 90 ngày",
          "Dung lượng: 450GB/90 ngày (5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày",
          "Miễn phí nhắn tin SMS nội mạng",
          "Miễn phí data truy cập ứng dụng giải trí TV360 (Gói Basic của Viettel)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Đăng ký qua SMS: 90N UP gửi 290",
          "90N"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước 90N",
        "paragraphs": [
          "Để đăng ký gói cước 90N của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 90N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 90N, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói 90N, sau đó làm theo hướng dẫn để hoàn tất đăng ký",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói 90N theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 90N trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 900.000 điểm Viettel ++ để đăng ký.",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 90N. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước 90N",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 900.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích đăng ký gói cước 90N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 450GB/3 tháng (5GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí 100% data khi truy cập ứng dụng TV360",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày. Miễn phí tin nhắn SMS nội mạng",
          "Đối tượng đăng ký: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 90N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 90N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 90N: Soạn \"HUY 90N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho hệ gói cước combo của Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "1N",
              "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "10.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "3N",
              "15GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "30.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "7N",
              "35GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 35 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "70.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "300.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "180N",
              "900GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "1.800.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "360N",
              "1.800GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "3.600.000đ (1 năm)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/90N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0027.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: d9877815ff2639135449936358bff28b9d6e6ccce4fc867f427fd4686d0deca4",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/90N",
      "code": "90N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/180N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 180N Viettel (180 ngày) Nhận 900GB (5GB/ngày) . Miễn Phí Gọi. Miễn Phí SMS. Miễn Phí TV36",
    "description": "180N - Gói cước combo Viettel với 1.800.000đ/6 tháng nhận ngay 900GB(5GB/ngày). Miễn phí gọi, miễn phí SMS, miễn phí xem TV360. Đăng ký soạn 180N UP gửi 290.",
    "heading": "Gói cước Viettel 180N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "180N - Gói cước combo Viettel với 1.800.000đ, người dùng sở hữu ngay 900GB data/ 180 ngày, tương đương 5GB/ngày để truy cập internet trên điện thoại không cần wifi, miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày, miễn phí tin nhắn SMS nội mạng, miễn phí data xem TV360 (gói Basic của Viettel). Đăng ký soạn tin nhắn 180N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 180N của Viettel",
        "paragraphs": [
          "Tên gói cước: 180N",
          "Cước phí: 1.800.000đ",
          "Thời hạn sử dụng: 180 ngày",
          "Dung lượng: 900GB/180 ngày (5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày",
          "Miễn phí nhắn tin SMS nội mạng",
          "Miễn phí data truy cập ứng dụng giải trí TV360 (Gói Basic của Viettel)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Đăng ký qua SMS: 180N UP gửi 290",
          "180N"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước 180N",
        "paragraphs": [
          "Để đăng ký gói cước 180N của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 180N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 180N, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói 180N, sau đó làm theo hướng dẫn để hoàn tất đăng ký",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói 180N theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 180N trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 1.800.000 điểm Viettel ++ để đăng ký.",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 180N. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước 180N",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 1.800.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích đăng ký gói cước 180N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 900GB/6 tháng (5GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí 100% data khi truy cập ứng dụng TV360",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày. Miễn phí tin nhắn SMS nội mạng",
          "Đối tượng đăng ký: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 180N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 180N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 180N: Soạn \"HUY 180N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho hệ gói cước combo của Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "1N",
              "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "10.000đ/ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "3N",
              "15GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "30.000đ/3 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "7N",
              "35GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 35 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "70.000đ/7 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "300.000đ/30 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "90N",
              "450GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "900.000đ/90 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "360N",
              "1.800GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "3.600.000đ/360 ngày",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/180N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0028.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: efa074e2751260cfa5167c8faa6915c9eaa3b5b67c73d189e6121a67fe0de2f0",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/180N",
      "code": "180N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/360N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 360N Viettel - 1.800GB (5GB/ngày). Miễn Phí Gọi. Miễn Phí SMS. Miễn Phí TV360 Trong 1 năm",
    "description": "360N - Gói cước combo Viettel với 3.600.000đ/năm nhận ngay 1.800GB(5GB/ngày). Miễn phí gọi, miễn phí SMS, miễn phí xem TV360. Đăng ký soạn 360N UP gửi 290.",
    "heading": "Gói cước Viettel 360N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "360N - Gói cước combo Viettel với 3.600.000đ, người dùng sở hữu ngay 1.800GB data/năm, tương đương 5GB/ngày để truy cập internet trên điện thoại không cần wifi, miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày, miễn phí tin nhắn SMS nội mạng, miễn phí data xem TV360 (gói Basic của Viettel). Đăng ký soạn tin nhắn 360N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 360N của Viettel",
        "paragraphs": [
          "Tên gói cước: 360N",
          "Cước phí: 3.600.000đ",
          "Thời hạn sử dụng: 360 ngày",
          "Dung lượng: 1.800GB/360 ngày (5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày",
          "Miễn phí nhắn tin SMS nội mạng",
          "Miễn phí data truy cập ứng dụng giải trí TV360 (Gói Basic của Viettel)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: 360N UP gửi 290",
          "360N"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước 360N",
        "paragraphs": [
          "Để đăng ký gói cước 360N của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 360N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 360N, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói 360N, sau đó làm theo hướng dẫn để hoàn tất đăng ký",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói 360N theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 360N trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 3.600.000 điểm Viettel ++ để đăng ký.",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 360N. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước 360N",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 3.600.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích đăng ký gói cước 360N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 1.800GB/năm (5GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí 100% data khi truy cập ứng dụng TV360",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 150 phút gọi ngoại mạng mỗi chu kỳ 30 ngày. Miễn phí tin nhắn SMS nội mạng",
          "Đối tượng đăng ký: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 360N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 360N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 360N: Soạn \"HUY 360N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho hệ gói cước combo của Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "1N",
              "5GB/ngày- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 5 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "10.000đ/ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "3N",
              "15GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 15 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "30.000đ/3 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "7N",
              "35GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 35 phút gọi ngoại mạng.- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "70.000đ/7 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "300.000đ/30 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "90N",
              "45GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "900.000đ/90 ngày",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "180N",
              "900GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 150 phút gọi ngoại mạng mỗi tháng- Miễn phí SMS nội mạng.- Miễn phí TV360.",
              "1.800.000đ/180 ngày",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/360N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0029.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: bd936ad6d1a297934019942f1a3f83465cd8881c6106d686ad5db1c366eb5b64",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/360N",
      "code": "360N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/MXH100": {
    "status": "draft",
    "kind": "package",
    "title": "Gói MXH100 Viettel - 30GB Data + Miễn Phí Mạng Xã Hội, Chỉ 100K/tháng",
    "description": "MXH100 - Gói cước 4G Viettel đặc biệt chỉ với 100.000đ/tháng nhận ngay 30GB(1GB/ngày) và quyền lợi miễn phí truy cập Mạng xã hội. Đăng ký soạn MXH100 UP gửi 290.",
    "heading": "Gói cước Viettel MXH100",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "MXH100 - Gói cước 4G Viettel đặc biệt chỉ với 100.000đ, người dùng sở hữu ngay 30GB data/tháng, tương đương 1GB/ngày và quyền lợi miễn phí 100% data truy cập mạng xã hội Youtube, TikTok, Facebook, Facebook Messenger, Instagram."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước MXH100 của Viettel",
        "paragraphs": [
          "Tên gói cước: MXH100",
          "Cước phí: 100.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 30GB/30 ngày (1GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 100% data tốc độ cao khi truy cập TikTok, Youtube, Facebook, Facebook Messenger, Instagram (không bị trừ trong 30GB data đi kèm)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: MXH100 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước MXH100",
        "paragraphs": [
          "Để đăng ký gói cước MXH100 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp MXH100 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói MXH100, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói MXH100 và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước MXH100 trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước MXH100. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước MXH100",
        "paragraphs": [
          "Thuê bao di động Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 100.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước MXH100",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 30GB/tháng (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Với 1GB/ngày sẽ đáp ứng cho người dùng tất cả các nhu cầu truy cập tìm kiếm thông tin, giải trí trên mọi nền tảng web, app trên internet. Đồng thời miễn phí 100% data sử dụng ứng dụng TikTok, Youtube, Facebook, Facebook Messenger, Instagram.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước MXH100",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói MXH100 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3MXH100",
              "90GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "300.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6MXH100",
              "180GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "600.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12MXH100",
              "360GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "1.200.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước MXH100",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước MXH100: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói MXH100: Soạn \"HUY MXH100\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/MXH100"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0030.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 7905a721631da968694f350566226417c2f92d5430871cf334356914150d1d2a",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/MXH100",
      "code": "MXH100",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/MXH120": {
    "status": "draft",
    "kind": "package",
    "title": "Gói MXH120 Viettel - 120K Nhận 30GB Data. Miễn Phí Truy Cập Mạng Xã Hội. Miễn Phí Gọi",
    "description": "Gói MXH120 Viettel - 120K Nhận 30GB Data. Miễn Phí Truy Cập Mạng Xã Hội. Miễn Phí Gọi",
    "heading": "Gói cước Viettel MXH120",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước MXH120 của Viettel",
        "paragraphs": [
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng data: 1GB/ngày",
          "Dung lượng data: 30GB/30 ngày",
          "Cú pháp đăng ký: MXH120 UP gửi 290"
        ]
      },
      {
        "type": "list",
        "heading": "Ưu đãi",
        "ordered": false,
        "items": [
          "Miễn phí data TikTok, YouTube, Facebook, Facebook Messenger",
          "Gọi nội mạng dưới 10 phút",
          "30 phút ngoại mạng"
        ]
      },
      {
        "type": "list",
        "heading": "Điều kiện và lưu ý",
        "ordered": false,
        "items": [
          "Thuê bao di động mạng Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/MXH120"),
      "capturedAt": "2026-10-27T13:13:06+07:00",
      "evidencePaths": [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/package-prepaid-MXH120.txt"
      ],
      "verifiedFields": [
        "page title",
        "H1",
        "price and cycle",
        "data allowance",
        "H2 headings",
        "visible CTA text"
      ],
      "unverifiedFields": [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "actual signup CTA handler",
        "full lower-page section order",
        "direct status/redirect",
        "complete original prose",
        "related-package cards",
        "media src"
      ],
      "notes": [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
        "Observed H2 sequence: Thông tin chi tiết gói cước MXH120 của Viettel | Cách đăng ký gói cước MXH120"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/MXH120",
      "code": "MXH120",
      "subscription": "general",
      "price": {
        "amountVND": 120000,
        "sourceLabel": "120.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 1,
          "unit": "GB",
          "period": "day",
          "sourceLabel": "1GB/ngày"
        },
        {
          "value": 30,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "30GB/30 ngày"
        }
      ],
      "benefits": [
        "Miễn phí data TikTok, YouTube, Facebook, Facebook Messenger",
        "Gọi nội mạng dưới 10 phút",
        "30 phút ngoại mạng"
      ],
      "conditions": [
        "Thuê bao di động mạng Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi"
      ],
      "registration": {
        "smsText": "MXH120 UP",
        "shortcode": "290"
      }
    }
  },
  "/goi-cuoc-viettel/MXH150": {
    "status": "draft",
    "kind": "package",
    "title": "Gói MXH150 Viettel - 45GB Data + Miễn Phí TikTok, YouTube, Facebook, Chỉ 150K/tháng",
    "description": "MXH150 - Gói cước 4G Viettel đặc biệt chỉ với 150.000đ/tháng nhận ngay 45GB(1.5GB/ngày), miễn phí gọi, miễn phí truy cập Mạng xã hội. Đăng ký soạn MXH150 UP gửi 290.",
    "heading": "Gói cước Viettel MXH150",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "MXH150 - Gói cước 4G Viettel đặc biệt chỉ với 150.000đ, người dùng sở hữu ngay 45GB data/tháng, tương đương 1.5GB/ngày để kết nối internet trên điện thoại mà không cần wifi, đồng thời miễn phí 100% data truy cập ứng dụng mạng xã hội và ưu đãi cước gọi cực kỳ hấp dẫn."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước MXH150 của Viettel",
        "paragraphs": [
          "Tên gói cước: MXH150",
          "Cước phí: 150.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 45GB/30 ngày (1.5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 100% data tốc độ cao khi truy cập TikTok, Youtube, Facebook, Facebook Messenger (không bị trừ trong 45GB data di kèm)",
          "Miễn phí cước gọi nội mạng dưới 10 phút",
          "Miễn phí 50 phút gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: MXH150 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước MXH150",
        "paragraphs": [
          "Để đăng ký gói cước MXH150 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp MXH150 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói MXH150, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói MXH180S (gói cước tương tự MXH150 áp dụng cho toàn bộ thuê bao Viettel có thể đăng ký và sử dụng).",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói MXH150 và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước MXH150 trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước MXH150. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước MXH150",
        "paragraphs": [
          "Thuê bao di động Viettel kích hoạt mới từ 01/01/2023 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 150.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước MXH150",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 45GB/tháng (1.5GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Với 1.5GB/ngày sẽ đáp ứng cho người dùng tất cả các nhu cầu truy cập tìm kiếm thông tin, giải trí trên mọi nền tảng web, app trên internet. Đồng thời miễn phí 100% data sử dụng ứng dụng TikTok, Youtube, Facebook, Facebook Messenger",
          "Miễn phí cước gọi viễn thông: Miễn phí cước nội mạng dưới 10 phút và 50 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói MXH150",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói MXH150 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3MXH150",
              "135GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 150 phút gọi ngoại mạng.",
              "450.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6MXH150",
              "270GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 300 phút gọi ngoại mạng.",
              "900.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12MXH150",
              "540GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 600 phút gọi ngoại mạng.",
              "1.800.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước MXH150",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước MXH150: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói MXH150: Soạn \"HUY MXH150\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/MXH150"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0032.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: eab1af3a204f3985645a3d904b0c8c20511794b263b47c7368ed7d09cf990c23",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/MXH150",
      "code": "MXH150",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5GMXH200": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước 5GMXH200 Viettel: Data 2GB/ngày, ưu đãi gọi và 150GB ứng dụng",
    "description": "Đăng ký gói 5GMXH200 Viettel chỉ 200.000đ/tháng. Nhận 2GB/ngày, miễn phí 10 phút gọi nội mạng, 50 phút ngoại mạng, 150GB Facebook, TikTok, YouTube. Soạn 5GMXH200 UP gửi 290.",
    "heading": "Gói cước Viettel 5GMXH200",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Chi Tiết Gói Cước 5GMXH200 Viettel",
        "paragraphs": [
          "Tên gói cước: 5GMXH200",
          "Cước phí: 200.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 60GB (2GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
          "50GB Facebook và Messenger.",
          "50GB TikTok.",
          "50GB YouTube.",
          "Khi hết 50GB ứng dụng, hệ thống sẽ trừ vào 2GB/ngày (nếu còn).",
          "Đối tượng áp dụng: Thuê bao di động trả trước theo danh sách",
          "Cú pháp: 5GMXH200 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi Ích Khi Sử Dụng Gói Cước 5GMXH200 Viettel",
        "paragraphs": [
          "Data phong phú: Thỏa sức lướt web, làm việc, và học tập với 2GB/ngày.",
          "Giải trí không giới hạn: Tận hưởng 150GB ứng dụng cho Facebook, TikTok, và YouTube.",
          "Liên lạc tiện lợi: Miễn phí cuộc gọi nội mạng ngắn và 50 phút ngoại mạng mỗi tháng.",
          "Tiết kiệm tối đa: Đầy đủ tiện ích với chi phí hợp lý, phù hợp mọi nhu cầu."
        ]
      },
      {
        "type": "text",
        "heading": "Đối Tượng Phù Hợp",
        "paragraphs": [
          "Người dùng thích lướt mạng xã hội và xem video trực tuyến.",
          "Học sinh, sinh viên hoặc nhân viên văn phòng cần data dồi dào mỗi ngày.",
          "Khách hàng thường xuyên liên lạc nội và ngoại mạng.",
          "Đăng Ký Ngay Gói Cước 5GMXH200 Viettel",
          "Soạn tin nhắn: 5GMXH200 UP gửi 290.",
          "Liên hệ tổng đài " + siteConfig.phoneNumber + " để được hỗ trợ thêm thông tin.",
          "Tận hưởng ngay ưu đãi hấp dẫn từ gói cước 5GMXH200 của Viettel!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5GMXH200"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0033.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: d7cbf6c9899ac03f2962334a28ee00aff5796ea56a935ebb28b714799e8a6ff6",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5GMXH200",
      "code": "5GMXH200",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5GMXH230": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước 5GMXH230 Viettel: 3GB/ngày, gọi miễn phí và 150GB ứng dụng",
    "description": "Đăng ký gói 5GMXH230 Viettel chỉ 230.000đ/tháng. Nhận 3GB/ngày, miễn phí 10 phút gọi nội mạng, 50 phút ngoại mạng, 150GB cho Facebook, TikTok, YouTube. Soạn 5GMXH230 UP gửi 290.",
    "heading": "Gói cước Viettel 5GMXH230",
    "sections": [
      {
        "type": "text",
        "heading": "Thông Tin Chi Tiết Gói Cước 5GMXH230 Viettel",
        "paragraphs": [
          "Tên gói cước: 5GMXH230",
          "Cước phí: 230.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 90GB (3GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
          "50GB Facebook và Messenger.",
          "50GB TikTok.",
          "50GB YouTube.",
          "Khi hết 50GB ứng dụng, hệ thống sẽ trừ vào 3GB/ngày (nếu còn).",
          "Đối tượng áp dụng: Thuê bao di động trả trước theo danh sách",
          "Cú pháp: 5GMXH230 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi Ích Khi Sử Dụng Gói Cước 5GMXH230 Viettel",
        "paragraphs": [
          "Dữ liệu lớn mỗi ngày: Phục vụ mọi nhu cầu làm việc, học tập, giải trí với 3GB/ngày.",
          "Thỏa thích giải trí: Sử dụng 150GB ứng dụng cho Facebook, TikTok, và YouTube mà không lo hết data.",
          "Gọi tiện lợi: Miễn phí cuộc gọi nội mạng ngắn và thêm 50 phút gọi ngoại mạng mỗi tháng.",
          "Chi phí hợp lý: Ưu đãi toàn diện với mức giá phải chăng."
        ]
      },
      {
        "type": "text",
        "heading": "Đối Tượng Phù Hợp",
        "paragraphs": [
          "Gói cước 5GMXH230 lý tưởng cho:",
          "Người dùng thường xuyên lướt mạng xã hội, xem video trực tuyến.",
          "Học sinh, sinh viên, hoặc nhân viên cần data lớn mỗi ngày.",
          "Khách hàng có nhu cầu liên lạc nội và ngoại mạng đều đặn."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói Cước 5GMXH230 Viettel",
        "paragraphs": [
          "Soạn tin nhắn: 5GMXH230 UP gửi 290.",
          "Hoặc liên hệ tổng đài " + siteConfig.phoneNumber + " để được hỗ trợ chi tiết.",
          "Tận hưởng ngay 3GB data/ngày, ưu đãi gọi và 150GB ứng dụng với gói 5GMXH230 từ Viettel!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5GMXH230"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0034.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: b2a7fa225573a3f8da69d09311610f85c3afa40aeb2a1a1bc3c1a69e0bedd024",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5GMXH230",
      "code": "5GMXH230",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV75K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TV75K Viettel - 30GB Data + Miễn Phí TV360 Full HD, Chỉ 75K/tháng",
    "description": "TV75K - Gói cước 4G Viettel chỉ 75.000đ/tháng nhận ngay 15GB(500MB/ngày). Xem miễn phí gói Standard trên TV360. Đăng ký soạn TV75K UP gửi 290.",
    "heading": "Gói cước Viettel TV75K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV75K - Gói cước 4G Viettel thông dụng chỉ với 75.000đ, người dùng sở hữu ngay 30GB data/tháng, tương đương 1GB/ngày để kết nối internet trên điện thoại mà không cần wifi. Miễn phí data khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV75K của Viettel",
        "paragraphs": [
          "Tên gói cước: TV75K",
          "Cước phí: 75.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 30GB/30 ngày (1GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "Xem miễn phí Cúp C1, C2, C3. 7 trận Ngoại hạng Anh mỗi tuần.",
          "Đối tượng áp dụng: Thuê bao Viettel hoạt động ít nhất 2 tháng và nằm trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: TV75K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV75K",
        "paragraphs": [
          "Để đăng ký gói cước TV75K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV75K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV75K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói TV75K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước TV75K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV75K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV75K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao hoạt động ít nhất 2 tháng và nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 75.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV75K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 30GB/tháng (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí truy cập ứng dụng TV360 (không quảng cáo và full HD 1080p trên mọi thiết bị)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói TV75K",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TV75K trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TV75K",
              "90GB (1GB/ngày)- Miễn phí xem TV360",
              "225.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TV75K",
              "180GB (1GB/ngày)- Miễn phí xem TV360",
              "450.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TV75K",
              "360GB (1GB/ngày)- Miễn phí xem TV360",
              "900.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV75K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV75K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV75K: Soạn \"HUY TV75K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV75K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0035.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 4e7aecf8bb09d4ebd5ee63d6eb48a90b2b692e9389e812fbd3b2197f6ea5a77c",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV75K",
      "code": "TV75K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV90C": {
    "status": "draft",
    "kind": "package",
    "title": "TV90C - 1GB/ngày + miễn phí gọi nội ngoại mạng + TV360 4K",
    "description": "TV90C - Gói cước 4G Viettel chỉ 90k/tháng nhận 30GB(1GB/ngày). Miễn phí gọi nội ngoại mạng. Miễn phí gói Standard trên TV360. Đăng ký soạn TV75K UP gửi 290.",
    "heading": "Gói cước Viettel TV90C",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV90C - Gói cước 4G Viettel thông dụng chỉ với 90.000đ, người dùng sở hữu ngay 30GB data/tháng, tương đương 1GB/ngày để kết nối internet trên điện thoại mà không cần wifi. Miễn phí data khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị). Miễn phí gọi nội ngoại mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV75K của Viettel",
        "paragraphs": [
          "Tên gói cước: TV90C",
          "Cước phí: 90.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 30GB/30 ngày (1GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng",
          "Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "Xem miễn phí Cúp C1, C2, C3. 7 trận Ngoại hạng Anh mỗi tuần.",
          "Đối tượng áp dụng: Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: TV90C UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV90C",
        "paragraphs": [
          "Để đăng ký gói cước TV90C của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV90C UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV90C, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói TV90C theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước TV90C trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV90C. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV90C",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 90.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV90C",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 30GB/tháng (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Miễn phí gọi nội ngoại mạng",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí truy cập ứng dụng TV360 (không quảng cáo và full HD 1080p trên mọi thiết bị)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói TV90C",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TV90C trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TV90C",
              "90GB (1GB/ngày)- Miễn phí xem TV360- Miễn phí gọi",
              "270.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TV90C",
              "180GB (1GB/ngày)- Miễn phí xem TV360- Miễn phí gọi",
              "540.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TV90C",
              "360GB (1GB/ngày)- Miễn phí xem TV360- Miễn phí gọi",
              "1.080.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV90C",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV90C: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV90C: Soạn \"HUY TV90C\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV90C"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0036.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 08c2a3f29641e2b941a77d8547accbf6503e65eece5ff2286b75f613a3c7513a",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV90C",
      "code": "TV90C",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV95K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TV95K Viettel - 45GB Data (1.5GB/ngày) + Xem Miễn Phí TV360 Full HD, Chỉ 95K/tháng",
    "description": "TV95K - Gói cước 4G Viettel chỉ với 95.000đ, người dùng sở hữu ngay 45GB (1.5GB/ngày) và miễn phí 100% data khi truy cập TV360. Đăng ký soạn TV95K UP gửi 290.",
    "heading": "Gói cước Viettel TV95K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV95K - Gói cước 4G Viettel thông dụng chỉ với 95.000đ, người dùng sở hữu ngay 45GB data tốc độ cao mỗi tháng, tương đương 1.5GB/ngày và miễn phí 100% data khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV95K của Viettel",
        "paragraphs": [
          "Tên gói cước: TV95K",
          "Cước phí: 95.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 45GB/30 ngày (1.5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "Xem miễn phí Cúp C1, C2, C3. 7 trận Ngoại hạng Anh mỗi tuần.",
          "Đối tượng áp dụng: Thuê bao di động Viettel kích hoạt mới từ 20/5/2024 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: TV95K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV95K",
        "paragraphs": [
          "Để đăng ký gói cước TV95K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV95K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV95K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói TV95K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước TV95K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV95K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV95K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao di động Viettel kích hoạt mới từ 20/5/2024 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 95.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV95K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 45GB/tháng (1.5GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí 100% data khi truy cập TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước TV95K",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TV95K trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TV95K",
              "135GB (1.5GB/ngày)Miễn phí TV360",
              "285.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TV95K",
              "270GB (1.5GB/ngày)Miễn phí TV360",
              "570.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TV95K",
              "540GB (1.5GB/ngày)Miễn phí TV360",
              "1.140.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV95K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV95K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV95K: Soạn \"HUY TV95K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV95K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0037.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: c3c06bba01935ccf07572ebfbfb046c158be81aa500b2c119707d7adad246bee",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV95K",
      "code": "TV95K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV120C": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TV120C Viettel - 45GB Data + Miễn Phí TV360 Full HD, Chỉ 120K/tháng",
    "description": "TV120C - Gói cước 4G Viettel chỉ 120.000đ/tháng nhận ngay 45GB(1.5GB/ngày). Miễn phí gọi. Xem miễn phí gói Standard trên TV360. Đăng ký soạn TV120C UP gửi 290.",
    "heading": "Gói cước Viettel TV120C",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV120C - Gói cước 4G Viettel thông dụng chỉ với 120.000đ, người dùng sở hữu ngay 45GB data, tương đương 1GB/ngày để kết nối internet trên điện thoại mà không cần wifi. Miễn phí data khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị). Miễn phí gọi nội ngoại mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV120C của Viettel",
        "paragraphs": [
          "Tên gói cước: TV120C",
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 45GB (1.5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng",
          "- Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "- Xem miễn phí Cúp C1, C2, C3. 7 trận Ngoại hạng Anh mỗi tuần.",
          "Đối tượng áp dụng: Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: TV120C UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV120C",
        "paragraphs": [
          "Để đăng ký gói cước TV120C của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV120C UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV120C, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói TV120C theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước TV120C trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV120C. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV120C",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 120.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV120C",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 45GB/tháng (1.5GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Miễn phí gọi nội ngoại mạng",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí truy cập ứng dụng TV360 (không quảng cáo và full HD 1080p trên mọi thiết bị)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói TV120C",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TV120C trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TV120C",
              "135GB (1.5GB/ngày)- Miễn phí xem TV360- Miễn phí gọi",
              "360.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TV120C",
              "270GB (1.5GB/ngày)- Miễn phí xem TV360- Miễn phí gọi",
              "720.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TV120C",
              "540GB (1.5GB/ngày)- Miễn phí xem TV360- Miễn phí gọi",
              "1.440.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV120C",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV120C: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV120C: Soạn \"HUY TV120C\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV120C"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0038.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 9382fbe14a67094ebd6427139f5913c3274f4074bd5a1b4ef39c49a422743fd3",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV120C",
      "code": "TV120C",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV120K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TV120K Viettel - 30GB Data (1GB/ngày) + Miễn Phí Xem TV360 Full HD, Chỉ 120K/tháng",
    "description": "TV120K - Gói cước 4G Viettel chỉ với 120.000đ, người dùng sở hữu ngay 30GB (1GB/ngày) và miễn phí 100% data khi truy cập TV360. Đăng ký soạn TV120K UP gửi 290.",
    "heading": "Gói cước Viettel TV120K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV120K - Gói cước 4G Viettel thông dụng chỉ với 120.000đ, người dùng sở hữu ngay 30GB data/tháng, tương đương 1GB/ngày và miễn phí data 100% khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV120K của Viettel",
        "paragraphs": [
          "Tên gói cước: TV120K",
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 30GB/30 ngày (1GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "Xem miễn phí Cúp C1, C2, C3. 7 trận Ngoại hạng Anh mỗi tuần.",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Đăng ký qua SMS: TV120K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV120K",
        "paragraphs": [
          "Để đăng ký gói cước TV120K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV120K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV120K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói TV120K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước TV120K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV120K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV120K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 120.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV120K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 30GB/tháng (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...) và đặc biệt miễn phí data 100% khi truy cập TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước TV120K",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TV120K trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TV120K",
              "90GB (1GB/ngày)Miễn phí TV360",
              "285.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TV120K",
              "180GB (1GB/ngày)Miễn phí TV360",
              "570.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TV120K",
              "360GB (1GB/ngày)Miễn phí TV360",
              "1.440.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV120K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV120K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV120K: Soạn \"HUY TV120K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV120K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0039.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: c608a69bda25d4bd0f54be513fae8bdd4859bbd761ceb85fb44618fd716e74e8",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV120K",
      "code": "TV120K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV125K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TV125K Viettel - 60GB Data (2GB/ngày) + Miễn Phí Xem TV360 Full HD, Chỉ 125K/tháng",
    "description": "TV125K - Gói cước 4G Viettel chỉ với 125.000đ, người dùng sở hữu ngay 60GB (2GB/ngày) và miễn phí 100% data khi truy cập TV360. Đăng ký soạn TV125K UP gửi 290.",
    "heading": "Gói cước Viettel TV125K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV125K - Gói cước 3G 4G Viettel thông dụng chỉ với 125.000đ, người dùng sở hữu ngay 60GB data/tháng, tương đương 2GB/ngày và miễn phí data 100% khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV125K của Viettel",
        "paragraphs": [
          "Tên gói cước: TV125K",
          "Cước phí: 125.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 60GB (2GB/ngày)",
          "Ưu đãi đặc biệt:",
          "- Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "- Xem miễn phí Cúp C1, C2, C3. 7 trận Ngoại hạng Anh mỗi tuần.",
          "Đối tượng áp dụng: Thuê bao di động Viettel kích hoạt mới từ 20/5/2024 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: TV125K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV125K",
        "paragraphs": [
          "Để đăng ký gói cước TV125K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV125K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV125K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói TV125K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước TV125K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV125K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV125K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao di động Viettel kích hoạt mới từ 20/5/2024 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 125.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV125K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 60GB/tháng (2GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...) và đặc biệt miễn phí data 100% khi truy cập TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước TV125K",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TV125K trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TV125K",
              "180GB (2GB/ngày)Miễn phí TV360",
              "375.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TV125K",
              "360GB (2GB/ngày)Miễn phí TV360",
              "750.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TV125K",
              "720GB (2GB/ngày)Miễn phí TV360",
              "1.500.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV125K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV125K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV125K: Soạn \"HUY TV125K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV125K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0040.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: a54fbbeca0375a81eee30e8d6b88aba814b4195b134e414548b91260aa86d02b",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV125K",
      "code": "TV125K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TH30": {
    "status": "draft",
    "kind": "package",
    "title": "Standard - Gói Cước TV360 chỉ 50K/tháng Xem Miễn Phí Hơn 160 Kênh Truyền Hình Chất Lượng Cao",
    "description": "Standard - Gói cước TV360 chỉ 50.000đ xem miễn phí 166 kênh truyền hình trực tuyến trong 30 ngày. Đăng ký soạn TH30 UP gửi 290.",
    "heading": "Gói cước Viettel TH30",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Standard - Gói cước TV360 miễn phí data 4G chỉ 50.000đ xem 166 kênh truyền hình, toàn bộ kho phim và gameshow giải trí hàng đầu trong 30 ngày. Đăng ký soạn TH30 UP gửi 290."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước Standard của TV360",
        "paragraphs": [
          "Tên gói cước: Standard",
          "Cước phí: 50.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Ưu đãi:",
          "- Xem các trận Cúp C1, C2, C3 (không bao gồm 74 trận độc quyền mỗi mùa), 7 trận Ngoại hạng Anh mỗi tuần và các giải đấu thể thao lớn khác.",
          "- Xem miễn phí 166 kênh truyền hình: VTV, VTVCab, HTV, THVL, VTC...",
          "- Xem toàn bộ kho phim bao gồm cả các phim tính phí (không bao gồm phim HBO), xem các tập phim mới nhất được phát song song.",
          "- Xem toàn bộ kho gameshow và giải trí hàng đầu.",
          "Đối tượng áp dụng: Toàn bộ thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: TH30 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước Standard",
        "paragraphs": [
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TH30 UP gửi 290 (50.000đ/30 ngày). Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trực tiếp trên ứng dụng TV360",
          "Bước 1: Tải ứng dụng TV360 từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Mua gói” và tìm đến gói Standard, sau đó làm theo hướng dẫn để đăng ký (App store: 69.000đ/30 ngày, CH Play: 69.000đ/30 ngày)."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước Standard",
        "paragraphs": [
          "Miễn phí phí data 4G tốc độ cao: Tận hưởng miễn phí data 4G khi xem TV360 trên điện thoại di động.",
          "Đa nền tảng, đa thiết bị: Xem liền mạch trên đa thiết bị, đa nền tảng (Laptop/PC, kính VR, smartphone).",
          "Tính năng tua lại, xem lại trong chương trình trực tiếp: Giúp khách hàng không bỏ lỡ bất kỳ khoảnh khắc quan trọng trên sóng truyền hình."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói Standard",
        "paragraphs": [
          "Thuê bao cần có đủ số dư trong tài khoản chính là 50.000 đồng để đăng ký gói cước.",
          "Nếu đăng ký trực tiếp trên ứng dụng TV360, khách hàng vui lòng liên kết thẻ để thanh toán trên Appstore/CH Play."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói Standard",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói Standard trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 9 tháng, 12 tháng được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "Standard90",
              "Miễn phí TV360 trong 3 tháng",
              "150.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "Standard180",
              "Miễn phí TV360 trong 6 tháng",
              "300.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "Standard270",
              "Miễn phí TV360 trong 9 tháng",
              "450.000đ (9 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "Standard360",
              "Miễn phí TV360 trong 12 tháng",
              "600.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước Standard",
        "paragraphs": [
          "Để huỷ gói Standard, vui lòng soạn SMS theo cú pháp: HUYGH TH gửi 1331 (miễn phí)",
          "Tổng đài CSKH: 198"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TH30"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0041.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 4c64137df29bb532d5d5a97c65a77dcca55f2d70c58a1fa4eff3615a08b1d117",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TH30",
      "code": "TH30",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/T50K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói T50K Viettel - Miễn Phí Data Truy Cập TikTok, Chỉ 50K/tháng",
    "description": "T50K - Gói cước 4G đặc biệt của Viettel chỉ với 50.000đ, người dùng sở hữu ngay quyền lợi miễn phí truy cập TikTok trong 30 ngày. Đăng ký soạn T50K UP gửi 290",
    "heading": "Gói cước Viettel T50K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "T50K - Gói cước 4G Viettel đặc biệt chỉ với 50.000đ, người dùng sở hữu ngay quyền lợi miễn phí data truy cập TikTok trong 30 ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước T50K của Viettel",
        "paragraphs": [
          "Tên gói cước: T50K",
          "Cước phí: 50.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập TikTok (tối đa 50GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: T50K UP gửi 290",
          "T50K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước T50K",
        "paragraphs": [
          "Để đăng ký gói cước T50K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp T50K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói T50K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói T50K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước T50K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước T50K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 50.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước T50K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí data truy cập Tiktok, giúp người dùng thoả sức lướt Tiktok mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Thoả sức xem video, clip TikTok mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước T50K",
        "paragraphs": [
          "Để hủy gói T50K: Soạn \"HUY T50K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự T50K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/T50K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0042.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 54d99a1a70235a02d56e7364ac1e4d08fe25423266acfc6f1f24b896ed9989c6",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/T50K",
      "code": "T50K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/YT50K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói YT50K Viettel - Miễn Phí Data Truy Cập Youtube, Chỉ 50K/tháng",
    "description": "YT50K - Gói cước 4G đặc biệt của Viettel chỉ với 50.000đ sở hữu ngay quyền lợi miễn phí xem Youtube trong 30 ngày. Đăng ký soạn YT50K UP gửi 290.",
    "heading": "Gói cước Viettel YT50K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "YT50K - Gói cước 4G Viettel đặc biệt chỉ với 50.000đ, người dùng sở hữu ngay quyền lợi miễn phí data xem Youtube trong 30 ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước YT50K của Viettel",
        "paragraphs": [
          "Tên gói cước: YT50K",
          "Cước phí: 50.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập Youtube (tối đa 50GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: YT50K UP gửi 290",
          "YT50K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước YT50K",
        "paragraphs": [
          "Để đăng ký gói cước YT50K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp YT50K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói YT50K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói YT50K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước YT50K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước YT50K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 50.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước YT50K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí 50GB data truy cập Youtube, giúp người dùng thoả sức truy cập Youtube mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Thoả sức xem video, clip Youtube mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước YT50K",
        "paragraphs": [
          "Để hủy gói YT50K: Soạn \"HUY YT50K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự YT50K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/YT50K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0043.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 41b8789786049191e618148610584721fcb3415993a50018ed6336cf9f050419",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/YT50K",
      "code": "YT50K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/FB50K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói FB50K Viettel - Miễn Phí Data Truy Cập Facebook, Messenger, Chỉ 50K/tháng",
    "description": "FB50K - Gói cước 4G đặc biệt của Viettel chỉ với 50.000đ sở hữu ngay quyền lợi miễn phí truy cập Facebook, Messenger trong 30 ngày. Đăng ký soạn FB50K UP gửi 290",
    "heading": "Gói cước Viettel FB50K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "FB50K - Gói cước 4G Viettel đặc biệt chỉ với 50.000đ, người dùng sở hữu ngay quyền lợi miễn phí data truy cập Facebook, Messenger trong 30 ngày. Đăng ký soạn FB50K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước FB50K của Viettel",
        "paragraphs": [
          "Tên gói cước: FB50K",
          "Cước phí: 50.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập Faccebook, Messenger (tối đa 50GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: FB50K UP gửi 290",
          "FB50K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước FB50K",
        "paragraphs": [
          "Để đăng ký gói cước FB50K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp FB50K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói FB50K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói FB50K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước FB50K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước FB50K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 50.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước FB50K",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3FB50K",
              "Miễn phí truy cập Facebook, Messenger trong 90 ngày",
              "150.000đ (90 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6FB50K",
              "Miễn phí truy cập Facebook, Messenger trong 180 ngày",
              "300.000đ (180 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12FB50K",
              "Miễn phí truy cập Facebook, Messenger trong 360 ngày",
              "600.000đ (360 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước FB50K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí data truy cập Facebook, Messenger giúp người dùng thoả sức lướt Facebook, gọi điện, video call qua Messenger mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Truy cập Facebook, Messenger mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước FB50K",
        "paragraphs": [
          "Để hủy gói FB50K: Soạn \"HUY FB50K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự FB50K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/FB50K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0044.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: e81b914ac2a93facf44e7ceee249622051d6f613129958244dfa2cedff949961",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/FB50K",
      "code": "FB50K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/T15K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói T15K Viettel - Miễn Phí Data Truy Cập TikTok Trong 7 Ngày",
    "description": "T15K - Gói cước đặc biệt của Viettel chỉ với 15.000đ, người dùng sở hữu ngay quyền lợi miễn phí truy cập TikTok trong 7 ngày. Đăng ký soạn T15K UP gửi 290.",
    "heading": "Gói cước Viettel T15K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "T15K - Gói cước 4G Viettel đặc biệt chỉ với 15.000đ, người dùng sở hữu ngay quyền lợi miễn phí data truy cập TikTok trong 7 ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước T15K của Viettel",
        "paragraphs": [
          "Tên gói cước: T15K",
          "Cước phí: 15.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập TikTok (tối đa 25GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: T15K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước T15K",
        "paragraphs": [
          "Để đăng ký gói cước T15K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp T15K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói T15K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói T15K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước T15K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước T15K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 15.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước T15K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí data truy cập Tiktok, giúp người dùng thoả sức lướt Tiktok mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Thoả sức xem video, clip TikTok mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước T15K",
        "paragraphs": [
          "Để hủy gói T15K: Soạn \"HUY T15K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự T15K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/T15K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0045.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: e4cba06069449bec190a5bb3739b809eb237e12605de38c7021afcfecb059dea",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/T15K",
      "code": "T15K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/YT15K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói YT15K Viettel - Miễn Phí Data Truy Cập Youtube Trong 7 Ngày",
    "description": "YT15K - Gói cước 4G đặc biệt của Viettel chỉ với 15.000đ, người dùng sở hữu ngay quyền lợi miễn phí xem Youtube trong 7 ngày. Đăng ký soạn YT15K UP gửi 290",
    "heading": "Gói cước Viettel YT15K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "YT15K - Gói cước 4G Viettel đặc biệt chỉ với 15.000đ, người dùng sở hữu ngay quyền lợi miễn phí data xem Youtube trong 7 ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước YT15K của Viettel",
        "paragraphs": [
          "Tên gói cước: YT15K",
          "Cước phí: 15.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập Youtube (tối đa 25GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: YT15K UP gửi 290",
          "YT15K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước YT15K",
        "paragraphs": [
          "Để đăng ký gói cước YT15K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp YT15K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói YT15K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói YT15K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước YT15K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước YT15K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 15.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước YT15K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí 25GB data truy cập Youtube, giúp người dùng thoả sức truy cập Youtube mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Thoả sức xem video, clip Youtube mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước YT15K",
        "paragraphs": [
          "Để hủy gói YT15K: Soạn \"HUY YT15K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự YT15K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/YT15K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0046.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: dba5034cd878dacc31954ce1b01c1845175523e52d1eaefb1d6dac1658502f22",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/YT15K",
      "code": "YT15K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/FB15K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói FB15K Viettel - Miễn Phí Data Truy Cập Facebook, Messenger Trong 7 Ngày",
    "description": "FB15K - Gói cước 4G đặc biệt của Viettel chỉ với 15.000đ sở hữu ngay quyền lợi miễn phí truy cập Facebook, Messenger trong 7 ngày. Đăng ký soạn FB15K UP gửi 290.",
    "heading": "Gói cước Viettel FB15K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "F15K - Gói cước 4G Viettel đặc biệt chỉ với 15.000đ, người dùng sở hữu ngay quyền lợi miễn phí data truy cập Facebook, Messenger trong 7 ngày. Đăng ký soạn FB15K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước FB15K của Viettel",
        "paragraphs": [
          "Tên gói cước: FB15K",
          "Cước phí: 15.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập Faccebook, Messenger (tối đa 25GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: FB15K UP gửi 290",
          "FB15K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước FB15K",
        "paragraphs": [
          "Để đăng ký gói cước FB15K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp FB15K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói FB15K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói FB15K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước FB15K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước FB15K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 15.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước FB15K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí data truy cập Facebook, Messenger giúp người dùng thoả sức lướt Facebook, gọi điện, video call qua Messenger mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Truy cập Facebook, Messenger mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước FB15K",
        "paragraphs": [
          "Để hủy gói FB15K: Soạn \"HUY FB15K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự FB15K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/FB15K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0047.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: d55950986b7125928808b9a6f6b0ce97a49e14de7da1e704d42a2e09f3549202",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/FB15K",
      "code": "FB15K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/T5K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói T5K Viettel - Miễn Phí Data Truy Cập TikTok Trong 1 Ngày",
    "description": "T5K - Gói cước đặc biệt của Viettel chỉ với 5.000đ, người dùng sở hữu ngay quyền lợi miễn phí truy cập TikTok trong 1 ngày. Đăng ký soạn T5K UP gửi 290.",
    "heading": "Gói cước Viettel T5K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "T5K - Gói cước 4G Viettel đặc biệt chỉ với 5.000đ, người dùng sở hữu ngay quyền lợi miễn phí data truy cập TikTok trong 1 ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước T5K của Viettel",
        "paragraphs": [
          "Tên gói cước: T5K",
          "Cước phí: 5.000đ",
          "Thời hạn sử dụng: 1 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập TikTok (tối đa 15GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: T5K UP gửi 290",
          "T5K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước T5K",
        "paragraphs": [
          "Để đăng ký gói cước T5K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp T5K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói T5K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói T5K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước T5K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước T5K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 5.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước T5K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí data truy cập Tiktok, giúp người dùng thoả sức lướt Tiktok mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Thoả sức xem video, clip TikTok mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước T5K",
        "paragraphs": [
          "Để hủy gói T5K: Soạn \"HUY T5K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự T5K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/T5K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0048.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: a24e6d06b0e0f4d5248208f84c373ee02b275a59229a5ae1c50b049211eb95c2",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/T5K",
      "code": "T5K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/YT5K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói T5K Viettel - Miễn Phí Data Truy Cập Youtube Trong 1 Ngày",
    "description": "YT5K - Gói cước 4G đặc biệt của Viettel chỉ với 5.000đ, người dùng sở hữu ngay quyền lợi miễn phí xem Youtube trong 1 ngày. Đăng ký soạn YT5K UP gửi 290.",
    "heading": "Gói cước Viettel YT5K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "YT5K - Gói cước 4G Viettel đặc biệt chỉ với 5.000đ, người dùng sở hữu ngay quyền lợi miễn phí data xem Youtube trong 1 ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước YT5K của Viettel",
        "paragraphs": [
          "Tên gói cước: YT5K",
          "Cước phí: 5.000đ",
          "Thời hạn sử dụng: 1 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập Youtube (tối đa 15GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: YT5K UP gửi 290",
          "YT5K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước YT5K",
        "paragraphs": [
          "Để đăng ký gói cước YT5K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp YT5K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói YT5K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói YT5K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước YT5K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước YT5K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 5.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước YT5K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí 15GB data truy cập Youtube, giúp người dùng thoả sức truy cập Youtube mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Thoả sức xem video, clip Youtube mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước YT5K",
        "paragraphs": [
          "Để hủy gói YT5K: Soạn \"HUY YT5K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự YT5K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB5K",
              "15GB truy cập Facebook, nhắn tin Messenger trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/YT5K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0049.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 8f6ee9fbbd2daf5690970d9a9201573c5ddcc41467ace8798242b8c46cd3c60d",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/YT5K",
      "code": "YT5K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/FB5K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói FB5K Viettel - Miễn Phí Data Truy Cập Facebbok, Messenger Trong 1 Ngày",
    "description": "FB5K - Gói cước 4G đặc biệt của Viettel chỉ với 5.000đ, miễn phí truy cập Facebook, Messenger trong 1 ngày. Đăng ký soạn FB5K UP gửi 290",
    "heading": "Gói cước Viettel FB5K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "FB5K - Gói cước 4G Viettel đặc biệt chỉ với 5.000đ, người dùng sở hữu ngay quyền lợi miễn phí data truy cập Facebook, Messenger trong 1 ngày. Đăng ký soạn FB5K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước FB5K của Viettel",
        "paragraphs": [
          "Tên gói cước: FB5K",
          "Cước phí: 5.000đ",
          "Thời hạn sử dụng: 30 ngày",
          "Ưu đãi đặc biệt: Miễn phí data truy cập Faccebook, Messenger (tối đa 15GB)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: FB5K UP gửi 290",
          "FB5K"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước FB5K",
        "paragraphs": [
          "Để đăng ký gói cước FB5K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp FB5K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói FB5K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói FB5K và xác nhận đăng ký",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước FB5K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước FB5K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 5.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước FB5K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Miễn phí data truy cập Facebook, Messenger giúp người dùng thoả sức lướt Facebook, gọi điện, video call qua Messenger mà không phải lo lắng về data.",
          "Tốc độ truy cập cao: Truy cập Facebook, Messenger mà không gặp trở ngại về tốc độ",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước FB5K",
        "paragraphs": [
          "Để hủy gói FB5K: Soạn \"HUY FB5K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước Mạng xã hội tương tự FB5K",
        "paragraphs": [
          "Dưới đây là danh sách gói cước đặc biệt của Viettel được thiết kế phù hợp với từng nền tảng Mạng xã hội với khung thời gian khác nhau, mang lại trải nghiệm tốt nhất cho khách hàng:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ (1 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T5K",
              "15GB truy cập TikTok trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T15K",
              "25GB truy cập TikTok trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T50K",
              "50GB truy cập TikTok trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB15K",
              "25GB truy cập Facebook, nhắn tin Messenger trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "FB50K",
              "50GB truy cập Facebook, nhắn tin Messenger trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT5K",
              "15GB truy cập Youtube trong 1 ngày",
              "5.000đ (1 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT15K",
              "25GB truy cập Youtube trong 7 ngày",
              "15.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "YT50K",
              "50GB truy cập Youtube trong 30 ngày",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/FB5K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0050.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 9e899948ca8e792fafde45fb7e64155ce11dea987ec12c3dc4516cfddf702039",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/FB5K",
      "code": "FB5K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V15B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V15B Viettel - 500MB Data + Gọi Nội Mạng, Chỉ 15K/15 Ngày",
    "description": "V15B - Gói cước 4G Viettel chỉ với 15.000đ nhận ngay 500MB data, ưu đãi miễn phí cuộc gọi nội mạng dưới 5 phút trong 15 ngày. Đăng ký soạn V15B UP gửi 290",
    "heading": "Gói cước Viettel V15B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V15B - Gói cước 4G Viettel thông dụng chỉ với 15.000đ, người dùng sở hữu ngay 500MB data, ưu đãi miễn phí cuộc gọi nội mạng dưới 5 phút trong 15 ngày. Đăng ký soạn tin nhắn V15B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V15B của Viettel",
        "paragraphs": [
          "Tên gói cước: V15B",
          "Cước phí: 15.000đ",
          "Thời hạn sử dụng: 15 ngày",
          "Dung lượng: 500MB/15ngày (điều chỉnh từ 1GB xuống 500MB từ ngày 15/12/2023)",
          "Ưu đãi đặc biệt: Miễn phí cước gọi nội mạng dưới 5 phút",
          "Đối tượng áp dụng: Thuê bao di động trả trước nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: V15B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V15B",
        "paragraphs": [
          "Để đăng ký gói cước V15B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V15B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V15B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V15B theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước V15B trong phần “GÓI CƯỚC THOẠI+SMS\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V15B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V15B",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 15.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V15B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V15B: Soạn \"HUY V15B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước gọi phổ biến nhất của Viettel",
        "paragraphs": [
          "Nhằm đáp ứng nhu cầu nghe gọi của khách hàng, Viettel ra mắt nhiều gói cước khác nhau theo từng mục đích sử dụng. Cụ thể:"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước gọi nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MP5X",
              "50 phút gọi nội mạng",
              "5.000đ (24h)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP15K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "15.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "30.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30",
              "300 phút gọi nội mạng",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V20",
              "50 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V20S",
              "200 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "DK50",
              "500 phút gọi nội mạng",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM29",
              "100 phút gọi nội mạng",
              "29.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM49",
              "200 phút gọi nội mạng",
              "49.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM69",
              "350 phút gọi nội mạng",
              "69.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM99",
              "500 phút gọi nội mạng",
              "99.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM119",
              "750 phút gọi nội mạng",
              "119.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói cước Data và miễn phí gọi",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU DÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V50K",
              "7GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.",
              "50.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V100K",
              "21GB (3GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 25 phút gọi ngoại mạng.",
              "100.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói gọi ngoại mạng và nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "T100",
              "500 phút nội mạng50 phút ngoại mạng",
              "100.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T150",
              "1500 phút nội mạng50 phút ngoại mạng",
              "150.000đ )30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V15B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0051.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 1af5106d65b233b25759b8f4282be306329b0cbc06e3a77eb846208dc969d481",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V15B",
      "code": "V15B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V25B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V25B Viettel - Miễn Phí Gọi Nội Mạng + 2GB Data, Chỉ 25k/15ngày",
    "description": "V25B - Gói cước 4G Viettel chỉ với 25.000đ nhận ngay 2GB data, ưu đãi miễn phí cuộc gọi nội mạng dưới 10 phút trong 15 ngày. Đăng ký soạn V25B UP gửi 290.",
    "heading": "Gói cước Viettel V25B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V25B - Gói cước 4G Viettel thông dụng chỉ với 25.000đ, người dùng sở hữu ngay 2GB data/15ngày, ưu đãi miễn phí cuộc gọi nội mạng dưới 10 phút. Đăng ký soạn tin nhắn V25B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V25B của Viettel",
        "paragraphs": [
          "Tên gói cước: V25B",
          "Cước phí: 25.000đ",
          "Thời hạn sử dụng: 15 ngày",
          "Dung lượng: 2GB/15ngày",
          "Ưu đãi đặc biệt: Miễn phí cước gọi nội mạng dưới 10 phút",
          "Đối tượng áp dụng: Thuê bao di động trả trước Viettel nằm trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: V25B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V25B",
        "paragraphs": [
          "Để đăng ký gói cước V15B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V25B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V25B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V25B theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước V25B trong phần “GÓI CƯỚC THOẠI+SMS\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V25B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V25B",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 25.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V25B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V25B: Soạn \"HUY V25B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước gọi phổ biến nhất của Viettel",
        "paragraphs": [
          "Nhằm đáp ứng nhu cầu nghe gọi của khách hàng, Viettel ra mắt nhiều gói cước khác nhau theo từng mục đích sử dụng. Cụ thể:"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước gọi nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MP5X",
              "50 phút gọi nội mạng",
              "5.000đ (24h)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP15K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "15.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "30.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30",
              "300 phút gọi nội mạng",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V20",
              "50 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V20S",
              "200 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "DK50",
              "500 phút gọi nội mạng",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM29",
              "100 phút gọi nội mạng",
              "29.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM49",
              "200 phút gọi nội mạng",
              "49.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM69",
              "350 phút gọi nội mạng",
              "69.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM99",
              "500 phút gọi nội mạng",
              "99.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM119",
              "750 phút gọi nội mạng",
              "119.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói cước Data và miễn phí gọi",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU DÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V50K",
              "7GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.",
              "50.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V100K",
              "21GB (3GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 25 phút gọi ngoại mạng.",
              "100.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói gọi ngoại mạng và nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "T100",
              "500 phút nội mạng50 phút ngoại mạng",
              "100.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T150",
              "1500 phút nội mạng50 phút ngoại mạng",
              "150.000đ )30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V25B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0052.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 4e4a2ea501230cfd9439b6f4cf6c1649cc384c4ab1a82e38318f4888634c3ea8",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V25B",
      "code": "V25B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V35B": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V35B Viettel - Miễn Phí Gọi Nội Mạng + 7.5GB Data, Chỉ 35k/15ngày",
    "description": "V35B - Gói cước 4G Viettel chỉ với 35.000đ nhận ngay 7.5GB data, ưu đãi miễn phí cuộc gọi nội mạng dưới 10 phút trong 15 ngày. Đăng ký soạn V35B UP gửi 290.",
    "heading": "Gói cước Viettel V35B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V35B - Gói cước 4G Viettel thông dụng chỉ với 35.000đ, người dùng sở hữu ngay 7.5GB data/15ngày (500MB/ngày), ưu đãi miễn phí cuộc gọi nội mạng dưới 10 phút. Đăng ký soạn tin nhắn V35B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V35B của Viettel",
        "paragraphs": [
          "Tên gói cước: V35B",
          "Cước phí: 35.000đ",
          "Thời hạn sử dụng: 15 ngày",
          "Dung lượng: 7.5GB/15ngày (500MB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí cước gọi nội mạng dưới 10 phút",
          "Đối tượng áp dụng: Thuê bao di động trả trước mạng Viettel nằm trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: V35B UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V35B",
        "paragraphs": [
          "Để đăng ký gói cước V35B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V35B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V35B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V35B theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước V35B trong phần “GÓI CƯỚC THOẠI+SMS\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V35B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V35B",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 35.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V35B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V35B: Soạn \"HUY V35B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước gọi phổ biến nhất của Viettel",
        "paragraphs": [
          "Nhằm đáp ứng nhu cầu nghe gọi của khách hàng, Viettel ra mắt nhiều gói cước khác nhau theo từng mục đích sử dụng. Cụ thể:"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước gọi nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MP5X",
              "50 phút gọi nội mạng",
              "5.000đ (24h)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP15K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "15.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "30.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30",
              "300 phút gọi nội mạng",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V20",
              "50 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V20S",
              "200 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "DK50",
              "500 phút gọi nội mạng",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM29",
              "100 phút gọi nội mạng",
              "29.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM49",
              "200 phút gọi nội mạng",
              "49.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM69",
              "350 phút gọi nội mạng",
              "69.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM99",
              "500 phút gọi nội mạng",
              "99.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM119",
              "750 phút gọi nội mạng",
              "119.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói cước Data và miễn phí gọi",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU DÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V50K",
              "7GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.",
              "50.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V100K",
              "21GB (3GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 25 phút gọi ngoại mạng.",
              "100.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói gọi ngoại mạng và nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "T100",
              "500 phút nội mạng50 phút ngoại mạng",
              "100.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T150",
              "1500 phút nội mạng50 phút ngoại mạng",
              "150.000đ )30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V35B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0053.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 0b4b782252c4af47c4549e21a779c3f38b4726eddd8672067b8810394436d75d",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V35B",
      "code": "V35B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/C20K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói C20K Viettel - Miễn Phí 50 Phút Gọi Nội Mạng + 1GB Data Trong 7 Ngày",
    "description": "C20K - Gói cước 4G Viettel với 20.000đ/7 ngày, người dùng sở hữu ngay 1GB data, ưu đãi 50 phút gọi nội mạng. Đăng ký soạn tin nhắn C20K UP gửi 290",
    "heading": "Gói cước Viettel C20K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "C20K - Gói cước 4G Viettel thông dụng chỉ với 20.000đ/7 ngày, người dùng sở hữu ngay 1GB data, ưu đãi 50 phút gọi nội mạng. Đăng ký soạn tin nhắn C20K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước C20K",
        "paragraphs": [
          "Tên gói cước: C20K",
          "Cước phí: 20.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 1GB/7 ngày",
          "Ưu đãi đặc biệt: Miễn phí 50 phút gọi nội mạng",
          "Đối tượng áp dụng: Thuê bao di động trả trước Viettel nằm trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: C20K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước C20K",
        "paragraphs": [
          "Để đăng ký gói cước C20K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp C20K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói C20K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói C20K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước C20K trong phần “GÓI CƯỚC THOẠI+SMS\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước C20K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước C20K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 20.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước C20K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói C20K: Soạn \"HUY C20K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước gọi phổ biến nhất của Viettel",
        "paragraphs": [
          "Nhằm đáp ứng nhu cầu nghe gọi của khách hàng, Viettel ra mắt nhiều gói cước khác nhau theo từng mục đích sử dụng. Cụ thể:"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước gọi nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MP5X",
              "50 phút gọi nội mạng",
              "5.000đ (24h)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP15K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "15.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "30.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30",
              "300 phút gọi nội mạng",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V20",
              "50 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V20S",
              "200 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "DK50",
              "500 phút gọi nội mạng",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM29",
              "100 phút gọi nội mạng",
              "29.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM49",
              "200 phút gọi nội mạng",
              "49.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM69",
              "350 phút gọi nội mạng",
              "69.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM99",
              "500 phút gọi nội mạng",
              "99.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM119",
              "750 phút gọi nội mạng",
              "119.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói cước Data và miễn phí gọi",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU DÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V50K",
              "7GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.",
              "50.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V100K",
              "21GB (3GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 25 phút gọi ngoại mạng.",
              "100.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói gọi ngoại mạng và nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "T100",
              "500 phút nội mạng50 phút ngoại mạng",
              "100.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T150",
              "1500 phút nội mạng50 phút ngoại mạng",
              "150.000đ )30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/C20K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0054.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: efb0abe9c0a5dd04b30316a7568e91b32d86af3fdff65a904717ee9e3635feaf",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/C20K",
      "code": "C20K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/F30": {
    "status": "draft",
    "kind": "package",
    "title": "Gói F30 Viettel - Miễn Phí Cưới Gọi Nội Mạng Dưới 20 Phút + 3GB Data Trong 7 Ngày",
    "description": "F30 - Gói cước 4G Viettel với 30.000đ/7 ngày nhận ngay 3GB data, ưu đãi miễn phí cuộc gọi nội mạng dưới 20 phút. Đăng ký soạn tin nhắn F30 UP gửi 290",
    "heading": "Gói cước Viettel F30",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "F30 - Gói cước 4G Viettel thông dụng chỉ với 30.000đ/7 ngày, người dùng sở hữu ngay 3GB data, ưu đãi miễn phí cuộc gọi nội mạng dưới 20 phút. Đăng ký soạn tin nhắn F30 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước F30 của Viettel",
        "paragraphs": [
          "Tên gói cước: F30",
          "Cước phí: 30.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 3GB/7 ngày",
          "Ưu đãi đặc biệt: Miễn phí cuộc gọi nội mạng dưới 20 phút",
          "Đối tượng áp dụng: Thuê bao di động trả trước Viettel nằm trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: F30 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước F30",
        "paragraphs": [
          "Để đăng ký gói cước F30 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp F30 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói F30, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói F30 theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước F30 trong phần “GÓI CƯỚC THOẠI+SMS\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước F30. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước F30",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 30.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước F30",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói F30: Soạn \"HUY F30\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước gọi phổ biến nhất của Viettel",
        "paragraphs": [
          "Nhằm đáp ứng nhu cầu nghe gọi của khách hàng, Viettel ra mắt nhiều gói cước khác nhau theo từng mục đích sử dụng. Cụ thể:"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước gọi nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MP5X",
              "50 phút gọi nội mạng",
              "5.000đ (24h)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP15K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "15.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "30.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30",
              "300 phút gọi nội mạng",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V20",
              "50 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V20S",
              "200 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "DK50",
              "500 phút gọi nội mạng",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM29",
              "100 phút gọi nội mạng",
              "29.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM49",
              "200 phút gọi nội mạng",
              "49.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM69",
              "350 phút gọi nội mạng",
              "69.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM99",
              "500 phút gọi nội mạng",
              "99.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM119",
              "750 phút gọi nội mạng",
              "119.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói cước Data và miễn phí gọi",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU DÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V50K",
              "7GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.",
              "50.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V100K",
              "21GB (3GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 25 phút gọi ngoại mạng.",
              "100.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói gọi ngoại mạng và nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "T100",
              "500 phút nội mạng50 phút ngoại mạng",
              "100.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T150",
              "1500 phút nội mạng50 phút ngoại mạng",
              "150.000đ )30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/F30"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0055.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 7a1b5bf62937472e9e0c4303437340924895c4767e651123516947ee1b91f2a9",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/F30",
      "code": "F30",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/FT50": {
    "status": "draft",
    "kind": "package",
    "title": "Gói FT50 Viettel - Miễn Phí Cưới Gọi Nội Mạng Dưới 10 Phút + 7GB Data Trong 7 Ngày",
    "description": "FT50 - Gói cước 4G Viettel với 50.000đ nhận ngay 7GB data (1GB/ngày), ưu đãi miễn phí cuộc gọi nội mạng dưới 10 phút. Đăng ký soạn tin nhắn FT50 UP gửi 290.",
    "heading": "Gói cước Viettel FT50",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "FT50 - Gói cước 4G Viettel thông dụng chỉ với 50.000đ, người dùng sở hữu ngay 7GB data/7ngày (1GB/ngày), ưu đãi miễn phí cuộc gọi nội mạng dưới 10 phút. Đăng ký soạn tin nhắn FT50 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Tổng quan gói cước FT50",
        "paragraphs": [
          "Tên gói cước: FT50",
          "Cước phí: 50.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 7GB/7ngày (1GB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí cước gọi nội mạng dưới 10 phút",
          "Đối tượng áp dụng: Thuê bao di động trả trước mạng Viettel nằm trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: FT50 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước FT50",
        "paragraphs": [
          "Để đăng ký gói cước FT50 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp FT50 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói FT50, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói FT50 theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước FT50 trong phần “GÓI CƯỚC THOẠI+SMS\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước FT50. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước FT50",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 50.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước FT50",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói FT50: Soạn \"HUY FT50\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước gọi phổ biến nhất của Viettel",
        "paragraphs": [
          "Nhằm đáp ứng nhu cầu nghe gọi của khách hàng, Viettel ra mắt nhiều gói cước khác nhau theo từng mục đích sử dụng. Cụ thể:"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước gọi nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MP5X",
              "50 phút gọi nội mạng",
              "5.000đ (24h)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP15K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "15.000đ (3 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30K",
              "Miễn phí gọi nội mạng dưới 10 phút",
              "30.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30",
              "300 phút gọi nội mạng",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP30X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "30.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP50X",
              "Miễn phí gọi nội mạng dưới 10 phút (tối đa 500 phút)",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP70X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "70.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP90X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120",
              "Miễn phí gọi nội mạng dưới 20 phút",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MP120X",
              "Miễn phí gọi nội mạng dưới 20 phút (tối đa 1000 phút)",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V20",
              "50 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V20S",
              "200 phút gọi nội mạng",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "DK50",
              "500 phút gọi nội mạng",
              "50.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM29",
              "100 phút gọi nội mạng",
              "29.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM49",
              "200 phút gọi nội mạng",
              "49.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM69",
              "350 phút gọi nội mạng",
              "69.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM99",
              "500 phút gọi nội mạng",
              "99.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "KM119",
              "750 phút gọi nội mạng",
              "119.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói cước Data và miễn phí gọi",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU DÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "V50K",
              "7GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.",
              "50.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V100K",
              "21GB (3GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 25 phút gọi ngoại mạng.",
              "100.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)Miễn phí cuộc gọi nội mạng dưới 10 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)Miễn phí cuộc gọi nội mạng dưới 20 phút.Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Các gói gọi ngoại mạng và nội mạng Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "TÊN GÓI",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "T100",
              "500 phút nội mạng50 phút ngoại mạng",
              "100.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "T150",
              "1500 phút nội mạng50 phút ngoại mạng",
              "150.000đ )30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/FT50"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0056.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: a3565b67be9d940e17a2f1a99eb76182539bc10dee139e0d8347d014298fa340",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/FT50",
      "code": "FT50",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV35K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TV35K Viettel - 7GB Data + Miễn Phí TV360, Chỉ 35K/7 Ngày",
    "description": "TV35K - Gói cước 4G Viettel chỉ 35.000đ/7 ngày nhận ngay 7GB(1GB/ngày). Xem miễn phí gói Standard trên TV360. Đăng ký soạn TV35K UP gửi 290.",
    "heading": "Gói cước Viettel TV35K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV35K - Gói cước 4G Viettel thông dụng chỉ với 35.000đ, người dùng sở hữu ngay 7GB/7 ngày, tương đương 1GB/ngày để kết nối internet trên điện thoại mà không cần wifi. Miễn phí data khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV35K của Viettel",
        "paragraphs": [
          "Tên gói cước: TV35K",
          "Cước phí: 35.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 7GB/7 ngày (1GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: TV35K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV35K của Viettel",
        "paragraphs": [
          "Để đăng ký gói cước TV35K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV35K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV35K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 3G/4G\" và tìm gói TV35K, sau đó làm theo hướng dẫn để hoàn tất đăng ký",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói TV35K và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước TV35K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV35K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV35K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 35.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV35K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 7GB/7 ngày (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...) và đặc biệt miễn phí data 100% khi truy cập TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV35K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV35K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV35K: Soạn \"HUY TV35K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước Miễn phí data xem TV360 tương tự TV35K",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "VSport",
              "Miễn phí TV360",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "VCine",
              "Miễn phí TV360",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV65K",
              "14GB (1GB/ngày)Miễn phí xem TV360",
              "65.000đ (14 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV75K",
              "30GB (1GB/ngày)Miễn phí xem TV360",
              "75.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV95K",
              "45GB (1.5GB/ngày)Miễn phí xem TV360",
              "95.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV120K",
              "30GB (1GB/ngày)Miễn phí xem TV360",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV125K",
              "60GB (2GB/ngày)Miễn phí xem TV360",
              "125.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV35K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0057.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 52172aaaf65a7f32d1768bda152e6fea3ce31b7d5b17e060dd861c2823bfc923",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV35K",
      "code": "TV35K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TV65K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TV65K Viettel - 14GB Data + Miễn Phí TV360, Chỉ 65K/14 Ngày",
    "description": "TV65K - Gói cước 4G Viettel chỉ 65.000đ/14 ngày nhận ngay 14GB(1GB/ngày). Xem miễn phí gói Standard trên TV360. Đăng ký soạn TV65K UP gửi 290.",
    "heading": "Gói cước Viettel TV65K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TV65K - Gói cước 4G Viettel thông dụng chỉ với 65.000đ, người dùng sở hữu ngay 14GB/14 ngày, tương đương 1GB/ngày để kết nối internet trên điện thoại mà không cần wifi. Miễn phí data khi truy cập ứng dụng TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TV65K của Viettel",
        "paragraphs": [
          "Tên gói cước: TV65K",
          "Cước phí: 65.000đ",
          "Thời hạn sử dụng: 14 ngày",
          "Dung lượng: 14GB (1GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí data khi xem TV360 (tặng gói Standard trị giá 50.000đ mỗi chu kỳ) trên web, điện thoại di động và máy tính bảng. Miễn phí xem trọn vẹn các giải đấu thể thao, xem toàn bộ kênh truyền hình trong nước và quốc tế (trừ K+ và HBO), xem toàn bộ phim mới hot nhất, xem toàn bộ video (không quảng cáo và full HD 1080p trên mọi thiết bị).",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: TV65K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước TV65K của Viettel",
        "paragraphs": [
          "Để đăng ký gói cước TV65K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TV65K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói TV65K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Miễn phí mạng xã hội\", sau đó tìm đến gói TV65K và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước TV65K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước TV65K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước TV65K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 65.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TV65K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 14GB (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...) và đặc biệt miễn phí data 100% khi truy cập TV360 (Không quảng cáo và full HD 1080p trên mọi thiết bị)",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TV65K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TV65K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TV65K: Soạn \"HUY TV65K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Danh sách gói cước Miễn phí data xem TV360 tương tự TV65K",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "VSport",
              "Miễn phí TV360",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "VCine",
              "Miễn phí TV360",
              "20.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV35K",
              "7GB (1GB/ngày)Miễn phí xem TV360",
              "35.000đ (7 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV75K",
              "30GB (1GB/ngày)Miễn phí xem TV360",
              "75.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV95K",
              "45GB (1.5GB/ngày)Miễn phí xem TV360",
              "95.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV120K",
              "30GB (1GB/ngày)Miễn phí xem TV360",
              "120.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "TV125K",
              "60GB (2GB/ngày)Miễn phí xem TV360",
              "125.000đ (30 ngày)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TV65K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0058.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: e85e1c22ebe3b362c36513a5cb77bb21d96ebd4441ec57ec6499ea68b5db3da9",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TV65K",
      "code": "TV65K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V50K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V50K Viettel - 7GB Data + Miễn Phí Cước Gọi Nội Mạng, Chỉ 50K/7 Ngày",
    "description": "V50K - Gói cước 4G Viettel thông dụng chỉ với 50.000đ, người dùng sở hữu ngay 7GB(1GB/ngày) và ưu đãi cước gọi trong 7 ngày. Đăng ký soạn V50K UP gửi 290.",
    "heading": "Gói cước Viettel V50K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V50K - Gói cước 4G Viettel thông dụng chỉ với 50.000đ, người dùng sở hữu ngay 7GB(1GB/ngày) và ưu đãi cước gọi trong 7 ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V500K của Viettel",
        "paragraphs": [
          "Tên gói cước: V50K",
          "Cước phí: 50.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 7GB (1GB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí cước gọi nội mạng dưới 20 phút",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: V50K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V50K",
        "paragraphs": [
          "Để đăng ký gói cước V50K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V50K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V50K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V50K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước V50K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V50K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V50K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 50.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V50K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 7GB (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V50K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V50K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước V50K: Soạn \"HUY V50K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V50K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0059.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: b088df82eb399d1720ab70bc80d5ae6d0a48d999e9bac45bb5df1e10d1a529e1",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V50K",
      "code": "V50K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V100K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V100K Viettel - 21GB Data + 1.000 Phút Nội Mạng, Chỉ 100K/7 Ngày",
    "description": "V100K - Gói cước 4G Viettel chỉ với 100.000đ/7 ngày nhận ngay 21GB Data (3GB/ngày), Miễn phí cước gọi nội mạng dưới 20 phút. Đăng ký soạn V100K UP gửi 290",
    "heading": "Gói cước Viettel V100K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V100K - Gói cước 4G Viettel thông dụng chỉ với 100.000đ, người dùng sở hữu ngay 21GB/7 ngày, tương đương 3GB/ngày và ưu đãi cước gọi."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V100K của Viettel",
        "paragraphs": [
          "Tên gói cước: V100K",
          "Cước phí: 100.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 21GB/7 ngày (3GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút (Tối đa 1.000 phút gọi)",
          "Miễn phí 25 phút gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: V100K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V100K",
        "paragraphs": [
          "Để đăng ký gói cước V100K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V100K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói V100K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói V100K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước V100K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước V100K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước V100K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 100.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V100K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 21GB/7 ngày (3GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 25 phút gọi ngoại mạng.",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V100K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V100K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước V100K: Soạn \"HUY V100K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V100K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0060.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 6ebf51d716057a311a4694671641dd224ae52cb8b9374eeb3878d71c2061ddd2",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V100K",
      "code": "V100K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/ST15K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói ST15K Viettel - 3GB Data Chỉ 15K/3 Ngày",
    "description": "ST15K - Gói cước 4G Viettel thông dụng chỉ với 15.000đ, người dùng sở hữu ngay 3GB/3 ngày, tương đương 1GB/ngày.",
    "heading": "Gói cước Viettel ST15K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "ST15K - Gói cước 4G Viettel thông dụng chỉ với 15.000đ, người dùng sở hữu ngay 3GB/3 ngày, tương đương 1GB/ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước ST15K của Viettel",
        "paragraphs": [
          "Tên gói cước: ST15K",
          "Cước phí: 15.000đ",
          "Thời hạn sử dụng: 3 ngày",
          "Dung lượng: 3GB/3 ngày (1GB/ngày)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: ST15K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước ST15K",
        "paragraphs": [
          "Để đăng ký gói cước ST15K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp ST15K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói ST15K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói ST15K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước ST15K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước ST15K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước ST15K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 15.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước ST15K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 3GB/3 ngày (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ truy cập",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước ST15K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước ST15K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước ST15K: Soạn \"HUY ST15K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST15K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0061.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 6f9063e93c487d574cad546cbdf631f13e46f34ac14c5e9f285db0bc04bd5634",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST15K",
      "code": "ST15K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/MI20K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói MI20K Viettel - 2GB Data 4G Tốc Độ Cao, Chỉ 20K/5 Ngày",
    "description": "MI20K - Gói cước 4G Viettel thông dụng chỉ với 20.000đ, người dùng sở hữu ngay 2GB/5ngày, hết 2GB tính cước phát sinh 75đ/50KB. Đăng ký soạn MI20K UP gửi 290",
    "heading": "Gói cước Viettel MI20K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "MI20K - Gói cước 4G Viettel thông dụng chỉ với 20.000đ, người dùng sở hữu ngay 2GB/5ngày, hết 5GB tính cước phát sinh 75đ/50KB"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước MI20K",
        "paragraphs": [
          "Tên gói cước: MI20K",
          "Cước phí: 20.000đ",
          "Thời hạn sử dụng: 5 ngày",
          "Dung lượng: 2GB/5 ngày",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: MI20K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước MI20K",
        "paragraphs": [
          "Để đăng ký gói cước MI20K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp MI20K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói MI20K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói MI20K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước MI20K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước MI20K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước MI20K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 20.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước MI20K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 2GB/5 ngày giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ truy cập",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước MI20K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước MI20K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước MI20K: Soạn \"HUY MI20K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/MI20K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0062.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 80cf14d7d69b2ac80fd8e331166499efd978e6a87cb06f3452b283d1a5a436c9",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/MI20K",
      "code": "MI20K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/ST30K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói ST30K Viettel - 7GB Data 4G Tốc Độ Cao, Chỉ 30K/7 Ngày",
    "description": "ST30K - Gói cước 3G 4G Viettel thông dụng chỉ với 30.000đ, người dùng sở hữu ngay 7GB/7 ngày, tương đương 1GB/ngày. Đăng ký soạn ST30K UP gửi 290.",
    "heading": "Gói cước Viettel ST30K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "ST30K - Gói cước 3G 4G Viettel thông dụng chỉ với 30.000đ, người dùng sở hữu ngay 7GB/7 ngày, tương đương 1GB/ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước ST30K của Viettel",
        "paragraphs": [
          "Tên gói cước: ST30K",
          "Cước phí: 30.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 7GB (1GB/ngày)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: ST30K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước ST30K",
        "paragraphs": [
          "Để đăng ký gói cước ST30K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp ST30K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói ST30K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói ST30K theo hướng dẫn và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước ST30K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước ST30K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước ST30K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 30.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước ST30K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 7GB/7 ngày (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ truy cập",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước ST30K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước ST15K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước ST30K: Soạn \"HUY ST30K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST30K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0063.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: dac5a886a7bfe2fa1cc19fdbb56fb80cfbe428d07e0faac83df2a52f568d9a53",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST30K",
      "code": "ST30K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/EST30": {
    "status": "draft",
    "kind": "package",
    "title": "Gói EST30 Viettel - 7GB Data + Free Data Liên Quân, Chỉ 30K/7 Ngày",
    "description": "EST30 - Gói cước 4G Viettel chỉ với 30.000đ nhận ngay 7GB/7 ngày (1GB/ngày), Miễn phí data khi truy cập chơi game hoặc livestream game Liên Quân Mobile. Đăng ký soạn EST30 UP gửi 290.",
    "heading": "Gói cước Viettel EST30",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "EST30 - Gói cước 4G Viettel chỉ với 30.000đ, người dùng sở hữu ngay 7GB/7 ngày, tương đương 1GB/ngày và miễn phí data khi truy cập chơi game hoặc livestream game Liên Quân Mobile."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước EST30 của Viettel",
        "paragraphs": [
          "Tên gói cước: EST30",
          "Cước phí: 30.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 7GB/7 ngày (1GB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí data khi chơi hoặc livestream game Liên Quân Mobile (không bị trừ 7GB data đi kèm)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: EST30 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Ưu điểm nổi bật",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 7GB/7 ngày (1GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ truy cập",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...) và đặc biệt miễn phí data khi chơi hoặc livestream game Liên Quân Mobile",
          "Đối tượng đăng ký: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước EST30",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước EST30: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói EST30: Soạn \"HUY EST30\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/EST30"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0064.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 062937d33a71f56027f7738293e130b53b38632714114abd842f5b9b1761a5b2",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/EST30",
      "code": "EST30",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V30X": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V30X Viettel - 3.5GB Data + Miễn Phí Gọi Nội Mạng, Chỉ 30K/7 Ngày",
    "description": "V30X - Gói cước 4G Viettel thông dụng chỉ với 30.000đ, người dùng sở hữu ngay 3.5GB/7 ngày, Miễn phí cước gọi nội mạng dưới 10 phút. Đăng ký soạn V30X UP gửi 290.",
    "heading": "Gói cước Viettel V30X",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V30X - Gói cước 4G Viettel thông dụng chỉ với 30.000đ, người dùng sở hữu ngay 3.5GB/7 ngày, tương đương 500MB/ngày và ưu đãi cước gọi"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V30X của Viettel",
        "paragraphs": [
          "Tên gói cước: V30X",
          "Cước phí: 30.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 3.5GB/7 ngày (500MB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí cước gọi nội mạng dưới 10 phút",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Đăng ký qua SMS: V30X UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Ưu điểm nổi bật",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 3.5GB/7 ngày (500MB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ truy cập",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước gọi nội mạng dưới 10 phút",
          "Đối tượng đăng ký: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V30X",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V30X: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V30X: Soạn \"HUY V30X\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V30X"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0065.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: f335712118c06ddc6080be5ff5bc12bba080556ff4758e25335cb2b9e8c88f65",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V30X",
      "code": "V30X",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/MI50K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước Viettel MI50K",
    "description": "Cập nhật gói cước Viettel 2026 mới nhất: các gói 4G, 5G theo ngày, tháng, combo data – thoại, ưu đãi hấp dẫn, đăng ký nhanh chóng.",
    "heading": "Gói cước Viettel MI50K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "MI50K - Gói cước 3G 4G Viettel thông dụng chỉ với 50.000đ, người dùng sở hữu ngay 5GB/7 ngày, hết 5GB tính cước phát sinh 75đ/50KB"
        ]
      },
      {
        "type": "text",
        "heading": "Tổng quan gói cước",
        "paragraphs": [
          "Tên gói cước: MI50K",
          "Cước phí: 50.000đ",
          "Thời hạn sử dụng: 7 ngày",
          "Dung lượng: 5GB/7 ngày",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Đăng ký qua SMS: MI50K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Ưu điểm nổi bật",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 5GB/7 ngày giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ truy cập",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý đăng ký gói cước",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy dịch vụ hiện đang sử dụng: Soạn \"HUY\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/MI50K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0066.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 17ba052827c9a7d9505944762686e6f02f14cba9f809d32923cb6d16ad844962",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/MI50K",
      "code": "MI50K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/ST60N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói ST60N Viettel - 60GB Data 4G Tốc Độ Cao, Chỉ 60K/tháng",
    "description": "ST60N - Gói cước 4G Viettel thông dụng chỉ với 60.000đ, người dùng sở hữu ngay 60GB data/tháng, tương đương 2GB/ngày. Đăng ký soạn tin nhắn ST60N UP gửi 290.",
    "heading": "Gói cước Viettel ST60N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "ST60N - Gói cước 4G Viettel thông dụng chỉ với 60.000đ, người dùng sở hữu ngay 60GB data/tháng, tương đương 2GB/ngày. Đăng ký soạn tin nhắn ST60N UP gửi 290",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói ST60N, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước ST60N của Viettel",
        "paragraphs": [
          "Tên gói cước: ST60N",
          "Cước phí: 60.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 60GB/30 ngày (2GB/ngày)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được hưởng ưu đãi",
          "Cú pháp: ST60N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói ST60N",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp ST60N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói ST60N",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 60.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước ST60N",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói ST60N trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3ST60N",
              "180GB (2GB/ngày)",
              "180.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6ST60N",
              "360GB (2GB/ngày)",
              "360.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12ST60N",
              "720GB (2GB/ngày)",
              "720.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước ST60N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 60GB/tháng (2GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ",
          "Tiết kiệm chi phí: Chỉ với 60.000 đồng/tháng, bạn đã có một gói cước data cực kỳ hấp dẫn, tiết kiệm chi phí mà vẫn đảm bảo trải nghiệm internet tốc độ cao, phù hợp với đối tượng là học sinh, sinh viên"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước ST60N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước ST60N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói ST60N: Soạn \"HUY ST60N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST60N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0067.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: d96b4026ce47a7b8ea576bf63235cd2039cf9aa2d8f5a190fda827dace500104",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST60N",
      "code": "ST60N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TRE60": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TRE60 Viettel - 60GB Data + Miễn Phí TikTok, Chỉ 60K/tháng",
    "description": "TRE60 - Gói cước 4G Viettel chỉ với 60.000đ sở hữu ngay 60GB(2GB/ngày), miễn phí data truy cập TikTok. Đăng ký soạn tin nhắn TRE60 UP gửi 290",
    "heading": "Gói cước Viettel TRE60",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TRE60 - Gói cước 4G Viettel dành riêng cho học sinh - sinh viên từ 14-22 tuổi. Chỉ với 60.000đ, người dùng sở hữu ngay 60GB data/tháng, tương đương 2GB/ngày, cùng ưu đãi miễn phí data truy cập TikTok. Đăng ký soạn tin nhắn TRE60 UP gửi 290",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói TRE60, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Tổng quan gói cước TRE60",
        "paragraphs": [
          "Tên gói cước: TRE60",
          "Cước phí: 60.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 60GB/30 ngày (2GB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí data truy cập TikTok",
          "Đối tượng áp dụng: Thuê bao di động Viettel chính chủ có độ tuổi từ 14 đến 24 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: TRE60 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói TRE60 Viettel:",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TRE60 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TRE60",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 60GB/tháng (2GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí data truy cập TikTok",
          "Tiết kiệm chi phí: Chỉ với 60.000đ mỗi tháng, gói cước TRE60 cực kỳ phù hợp với học sinh, sinh viên.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói TRE60",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Là học sinh, sinh viên có độ tuổi từ 12 đến 24.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 60.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước TRE60",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TRE60 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TRE60",
              "180GB (2GB/ngày)- Miễn phí data truy cập TikTok",
              "180.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TRE60",
              "360GB (2GB/ngày)- Miễn phí data truy cập TikTok",
              "360.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TRE60",
              "720GB (2GB/ngày)- Miễn phí data truy cập TikTok",
              "720.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TRE60",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TRE60: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TRE60: Soạn \"HUY TRE60\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": [
          "Dưới đây là một số gói cước Viettel phổ biến và được đăng ký nhiều nhất trong năm 2024:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS nội mạng- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TRE60"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0068.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: e2373ef857fb320cb43da3dd60b3962b454f734981ffbabd2cf29c497ffff5ff",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TRE60",
      "code": "TRE60",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/ST70K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước ST70K Viettel - 15GB (500MB/ngày) Giá Chỉ 70K",
    "description": "ST70K - Gói cước 4G Viettel truy cập internet tốc độ cao giá chỉ 70.000đ nhận ngay 15GB data mỗi tháng (500MB/ngày). Đăng ký soạn ST70K UP gửi 290.",
    "heading": "Gói cước Viettel ST70K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "ST70K - Gói cước 4G Viettel thông dụng chỉ với 70.000đ/tháng, người dùng sở hữu ngay 15GB data/tháng, tương đương 500MB/ngày để truy cập internet trên điện thoại mà không cần wifi. Đăng ký soạn tin nhắn ST70K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước ST70K của Viettel",
        "paragraphs": [
          "Tên gói cước: ST70K",
          "Cước phí: 70.000đ/tháng",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 15GB (500MB/ngày)",
          "Đối tượng áp dụng: Toàn bộ thuê bao di động mạng Viettel",
          "Cú pháp: ST70K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước ST70K",
        "paragraphs": [
          "Để đăng ký gói cước ST70K của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp ST70K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói ST70K, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên ứng dụng Viettel Money",
          "Bước 1: Tải ứng dụng Viettel Money từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng chọn mục “Viễn thông\" -> “Mua Data 4G/5G\" tìm gói ST70K sau đó làm theo hướng dẫn để hoàn tất đăng ký.",
          "4. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Tìm và chọn gói ST70K theo hướng dẫn và xác nhận đăng ký",
          "5. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước ST70K trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại hoặc bạn có thể đổi 70.000 điểm Viettel ++ để đăng ký",
          "6. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước ST70K. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "7. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data 4G Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện để đăng ký gói cước ST70K",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Yêu cầu này thường áp dụng cho việc quản lý thuê bao và đăng ký các dịch vụ của Viettel.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 70.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước ST70K",
        "paragraphs": [
          "Dung lượng dữ liệu: Cung cấp 15GB (500MB/ngày) giúp người dùng duy trì kết nối internet trên điện thoại.",
          "Tiết kiệm chi phí: Chỉ với 70.000đ/tháng mà vẫn đảm bảo trải nghiệm internet tốc độ cao. Phù hợp với học sinh, sinh viên.",
          "Tốc độ truy cập cao: Xem video, clip, lướt mạng xã hội hay chơi game trực tuyến mà không gặp trở ngại về tốc độ.",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ."
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước ST70K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói ST70K: Soạn \"HUY ST70K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST70K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0069.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 439b0dbd8f9ee00c892ef2a648f6e29a0c1ead97ed34ae0fdcfe5647ba9dc6e9",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST70K",
      "code": "ST70K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/ST90N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói ST90N Viettel - 120GB Data 4G Tốc Độ Cao (4GB/ngày), Chỉ 90K/tháng",
    "description": "ST90N - Gói cước 4G Viettel thông dụng chỉ với 90.000đ, người dùng sở hữu ngay 120GB data/tháng, tương đương 4GB/ngày. Đăng ký soạn tin nhắn ST90N UP gửi 290.",
    "heading": "Gói cước Viettel ST90N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "ST90N - Gói cước 4G Viettel thông dụng chỉ với 90.000đ, người dùng sở hữu ngay 120GB data/tháng, tương đương 4GB/ngày. Đăng ký soạn tin nhắn ST90N UP gửi 290",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói ST90N, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước ST90N của Viettel",
        "paragraphs": [
          "Tên gói cước: ST90N",
          "Cước phí: 90.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 120GB (4GB/ngày)",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được hưởng ưu đãi",
          "Cú pháp: ST90N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói ST90N",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp ST90N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói ST90N",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 90.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước ST90N",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói ST90N trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3ST90N",
              "360GB (4GB/ngày)",
              "270.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6ST90N",
              "720GB (4GB/ngày)",
              "540.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12ST90N",
              "1.440GB (4GB/ngày)",
              "1.080.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước ST90N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 120GB/tháng (4GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ",
          "Tiết kiệm chi phí: Chỉ với 90.000 đồng/tháng, bạn đã có một gói cước data cực kỳ hấp dẫn, tiết kiệm chi phí mà vẫn đảm bảo trải nghiệm internet tốc độ cao, phù hợp với đối tượng là học sinh, sinh viên"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước ST90N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước ST90N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói ST90N: Soạn \"HUY ST90N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST90N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0070.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 61a8282a7957f55e99f28eb9f3047d2333d2ff762cae3c745d338a2ed48960e8",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST90N",
      "code": "ST90N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/TRE90": {
    "status": "draft",
    "kind": "package",
    "title": "Gói TRE90 Viettel - 120GB Data (4GB/ngày) + Miễn Phí TikTok, Chỉ 90K/tháng",
    "description": "TRE90 - Gói cước 4G Viettel chỉ với 90.000đ sở hữu ngay 120GB(2GB/ngày), miễn phí data truy cập TikTok. Đăng ký soạn tin nhắn TRE90 UP gửi 290",
    "heading": "Gói cước Viettel TRE90",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "TRE90 - Gói cước 4G Viettel dành riêng cho học sinh - sinh viên từ 14-22 tuổi. Chỉ với 90.000đ, người dùng sở hữu ngay 120GB data/tháng, tương đương 4GB/ngày cùng ưu đãi miễn phí data truy cập TikTok. Đăng ký soạn tin nhắn TRE90 UP gửi 290",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói TRE90, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước TRE90",
        "paragraphs": [
          "Tên gói cước: TRE90",
          "Cước phí: 90.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 120GB (4GB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí data truy cập TikTok",
          "Đối tượng áp dụng: Thuê bao di động Viettel chính chủ có độ tuổi từ 14 đến 24 và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: TRE90 UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói TRE90 Viettel:",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp TRE90 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước TRE90",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 120GB/tháng (4GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí data truy cập TikTok",
          "Tiết kiệm chi phí: Chỉ với 90.000đ mỗi tháng, gói cước TRE90 cực kỳ phù hợp với học sinh, sinh viên.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói TRE90",
        "paragraphs": [
          "Thuê bao di động của Viettel chính chủ: Là học sinh, sinh viên có độ tuổi từ 12 đến 24.",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 60.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước TRE90",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói TRE90 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3TRE90",
              "360GB (4GB/ngày)- Miễn phí data truy cập TikTok",
              "270.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6TRE90",
              "720GB (4GB/ngày)- Miễn phí data truy cập TikTok",
              "540.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12TRE90",
              "1.440GB (4GB/ngày)- Miễn phí data truy cập TikTok",
              "1.080.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước TRE90",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước TRE90: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước TRE90: Soạn \"HUY TRE90\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/TRE90"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0071.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: bbf1df2a25088e6c8ebf56032be5825d7a94fc3db5ff6277b542bdca952fe9bb",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/TRE90",
      "code": "TRE90",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V120N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V120N Viettel - 120GB Data (4GB/ngày) + Miễn Phí Gọi, Chỉ 120K/tháng",
    "description": "V120N - Gói cước 4G Viettel với 120.000đ nhận ngay 120GB (4GB/ngày). Miễn cước gọi nội mạng dưới 20 phút và 50 phút gọi ngoại mạng. Đăng ký soạn V120N UP gửi 290.",
    "heading": "Gói cước Viettel V120N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V120N - Gói cước 4G Viettel với 120.000đ nhận ngay 120GB data/tháng, tương đương 4GB/ngày. Miễn phí gọi thoại. Đăng ký soạn V120N UP gửi 290.",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói V120N, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V120N của Viettel",
        "paragraphs": [
          "Tên gói cước: V120N",
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 120GB (4GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 50 phút cước gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được hưởng ưu đãi",
          "Cú pháp: V120N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói V120N",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V120N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói V120N",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 120.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V120N",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V120N trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V120N",
              "360GB (4GB/ngày)Miễn phí gọi",
              "360.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V120N",
              "720GB (4GB/ngày)Miễn phí gọi",
              "720.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V120N",
              "1.440GB (4GB/ngày)Miễn phí gọi",
              "1.440.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V120N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 120GB/tháng (4GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 50 phút gọi ngoại mạng",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V120N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V120N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V120N: Soạn \"HUY V120N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V120N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0072.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 2e578b3ecb1d980f84d60a0eabb20de0fb33acffadda8266480992a4d84793ca",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V120N",
      "code": "V120N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V120C": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V120C Viettel - 60GB Data + Miễn Phí Cước Gọi, Chỉ 120K/tháng",
    "description": "V120C - Gói cước 4G Viettel chỉ 120.000đ nhận ngay 60GB (2GB/ngày), Miễn phí cước gọi nội mạng dưới 20 phút và 50 phút gọi ngoại mạng, Miễn phí data truy cập TikTok.",
    "heading": "Gói cước Viettel V120C",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V120C - Gói cước 3G 4G Viettel thông dụng chỉ với 120.000đ, người dùng sở hữu ngay 60GB data/tháng, tương đương 2GB/ngày, cùng ưu đãi cước gọi cực kỳ hấp dẫn. Đặc biệt miễn phí 100% data ứng dụng TikTok",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói V120C, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V120C của Viettel",
        "paragraphs": [
          "Tên gói cước: V120C",
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 60GB (2GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 50 phút cước gọi ngoại mạng",
          "Miễn phí 100% data truy cập TikTok",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được hưởng ưu đãi",
          "Cú pháp: V120C UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói V120C",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V120C UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói V120C",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 120.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V120C",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V120C trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V120C",
              "180GB (2GB/ngày)Miễn phí gọiMiễn phí TikTok",
              "360.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V120C",
              "360GB (2GB/ngày)Miễn phí gọiMiễn phí TikTok",
              "720.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V120C",
              "720GB (2GB/ngày)Miễn phí gọiMiễn phí TikTok",
              "1.440.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V120C",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 60GB/tháng (2GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Youtube, Telegram, Zalo, Viber, Instagram, ...). Đặc biệt miễn phí data truy cập ứng dụng TikTok",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 10 phút và 30 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V120C",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V120C: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V120C: Soạn \"HUY V120C\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V120C"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0073.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: b97cb9d6faa5f9a20e53a04f2b670b3cf31bf790429875b9eb6df35719bad47d",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V120C",
      "code": "V120C",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/ST120K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói ST120K Viettel - 60GB Data 4G + Miễn Phí TV360, Chỉ 120K/Tháng",
    "description": "ST120K - Gói cước 4G Viettel chỉ với 120.000đ nhận ngay 60GB(2GB/ngày), Miễn phí xem TV360 và 25GB dữ liệu lưu trữ trên LifeBox. Đăng ký soạn ST120K UP gửi 290.",
    "heading": "Gói cước Viettel ST120K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "ST120K - Gói cước 4G Viettel thông dụng chỉ với 120.000đ, người dùng sở hữu ngay 60GB data/tháng, tương đương 2GB/ngày, miễn phí data khi truy cập TV360 và miễn phí 25GB dữ liệu lưu trữ trên LifeBox.",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói V120C, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước ST120K của Viettel",
        "paragraphs": [
          "Tên gói cước: ST120K",
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 60GB (2GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí data truy cập ứng dụng giải trí TV360 (Gói Basic của Viettel)",
          "Miễn phí lưu trữ 25GB dữ liệu trên LifeBox",
          "Đối tượng áp dụng: Toàn bộ thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cú pháp: ST120K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói ST120K",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp ST120K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói ST120K",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 120.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước ST120K",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói ST120K trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3ST120K",
              "180GB (2GB/ngày)Miễn phí TV360Miễn phí Lifebox",
              "360.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6ST120K",
              "360GB (2GB/ngày)Miễn phí TV360Miễn phí Lifebox",
              "720.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12ST120K",
              "720GB (2GB/ngày)Miễn phí TV360Miễn phí Lifebox",
              "1.440.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói ST120K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 60GB/tháng (2GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...) và đặc biệt miễn phí 100% data sử dụng ứng dụng TV360",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước ST120K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước ST120K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói ST120K: Soạn \"HUY ST120K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST120K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0074.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 7f05c18cc5567264e29e1e45cc04a61410fb01b747b7f13edba9a240d6ac3891",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST120K",
      "code": "ST120K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V150N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V150N Viettel - 180GB Data + Miễn Phí Gọi Nội Ngoại Mạng, Chỉ 150K/tháng",
    "description": "V150N - Gói cước 4G Viettel chỉ 150.000đ nhận ngay 180GB data/tháng, tương đương 6GB/ngày. Miễn phí cước gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng.",
    "heading": "Gói cước Viettel V150N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V150N - Gói cước 4G Viettel chỉ 150.000đ nhận ngay 180GB data/tháng, tương đương 6GB/ngày. Miễn phí cước gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng.",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói V150N, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V150N của Viettel",
        "paragraphs": [
          "Tên gói cước: V150N",
          "Cước phí: 150.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 180GB/30 ngày (4GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 100 phút cước gọi ngoại mạng",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: V150N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V150N",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V150N UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói cước V150N",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 150.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V150N",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V150N trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V150N",
              "540GB (6GB/ngày)Miễn phí gọi",
              "450.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V150N",
              "1.080GB (6GB/ngày)Miễn phí gọi",
              "900.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V150N",
              "2.160GB (6GB/ngày)Miễn phí gọi",
              "1.800.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V150N",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 180GB/tháng (6GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 100 phút gọi ngoại mạng",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V150N",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V150N: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V150N: Soạn \"HUY V150N\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V150N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0075.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 4215a1c1a6e8aee1efdc3fc4d313c9c76ab4098df9c2929fcef35ed6ba9a2d9c",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V150N",
      "code": "V150N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V150C": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V150C Viettel - 90GB Data + Miễn Phí Gọi Nội Ngoại Mạng, Chỉ 150K/tháng",
    "description": "V150C - Gói cước 4G Viettel chỉ 150.000đ nhận ngay 90GB data/tháng (3GB/ngày). Miễn phí cuộc gọi nội mạng dưới 20 phút và 50 phút gọi ngoại mạng.",
    "heading": "Gói cước Viettel V150C",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V150C - Gói cước 4G Viettel chỉ 150.000đ nhận ngay 90GB data/tháng (3GB/ngày). Miễn phí cuộc gọi nội mạng dưới 20 phút và 50 phút gọi ngoại mạng.",
          "Lưu ý: Kể từ ngày 15/06/2023 Viettel đã dừng triển khai đăng ký mới và gia hạn lại gói V150C, thay vào đó là các gói cước 4G khuyến mãi mới được cập nhật từ 15/06/2023"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V150C của Viettel",
        "paragraphs": [
          "Tên gói cước: V150C",
          "Cước phí: 150.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 90GB/30 ngày (3GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cước gọi nội mạng dưới 20 phút",
          "Miễn phí 50 phút cước gọi ngoại mạng",
          "Miễn phí lưu trữ 25GB dữ liệu trên LifeBox",
          "Miễn phí xem phim trên ứng dụng Viettel TV",
          "Đối tượng áp dụng: Thuê bao di động mạng Viettel trong danh sách được hưởng ưu đãi",
          "Đăng ký qua SMS: V150C UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước V150C",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp V150C UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói cước V150C",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 150.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V150C",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V150C trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V150C",
              "270GB (3GB/ngày)Miễn phí gọiMiễn phí Lifebox",
              "450.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V150C",
              "540GB (3GB/ngày)Miễn phí gọiMiễn phí Lifebox",
              "900.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V150C",
              "1.080GB (3GB/ngày)Miễn phí gọiMiễn phí Lifebox",
              "1.800.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V150C",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 90GB/tháng (3GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 50 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V150C",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V150C: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói V150C: Soạn \"HUY V150C\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V150C"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0076.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 27e96d099f3c2b217e9839db9359e37738724cf7ed106b7135d86ef2b74022ad",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V150C",
      "code": "V150C",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/ST150K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói ST150K Viettel - 90GB Data + Miễn Phí TV360, Chỉ 150K/tháng",
    "description": "ST150K - Gói cước 4G Viettel chỉ 150.000đ nhận ngay 90GB data/tháng (3GB/ngày), miễn phí data truy cập TV360, miễn phí 25GB dữ liệu lưu trữ trên LifeBox.",
    "heading": "Gói cước Viettel ST150K",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "ST150K - Gói cước 4G Viettel thông dụng chỉ với 150.000đ, người dùng sở hữu ngay 90GB data/tháng, tương đương 3GB/ngày, miễn phí data khi truy cập TV360 và miễn phí 25GB dữ liệu lưu trữ trên LifeBox"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước ST150K của Viettel",
        "paragraphs": [
          "Tên gói cước: ST150K",
          "Cước phí: 150.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 90GB/30 ngày (3GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí data truy cập ứng dụng giải trí TV360 (Gói Basic của Viettel)",
          "Miễn phí lưu trữ 25GB dữ liệu trên LifeBox",
          "Đối tượng áp dụng: Toàn bộ thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Đăng ký qua SMS: ST150K UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước ST150K",
        "paragraphs": [
          "Đăng ký qua tin nhắn SMS: Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp ST150K UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn."
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký gói cước ST150K",
        "paragraphs": [
          "Thuê bao Viettel nằm trong danh sách được hưởng ưu đãi",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 150.000 đồng để đăng ký gói cước."
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước ST150K",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói ST150K trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3ST150K",
              "270GB (3GB/ngày)Miễn phí TV360Miễn phí Lifebox",
              "450.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6ST150K",
              "540GB (3GB/ngày)Miễn phí TV360Miễn phí Lifebox",
              "900.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12ST150K",
              "1.080GB (3GB/ngày)Miễn phí TV360Miễn phí Lifebox",
              "1.800.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước ST150K",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 90GB/tháng (3GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...) và đặc biệt miễn phí 100% data sử dụng ứng dụng TV360",
          "Đối tượng đăng ký không giới hạn: Thuê bao di động mạng Viettel (bao gồm trả trước và trả sau)",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý đăng ký gói cước",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy dịch vụ hiện đang sử dụng: Soạn \"HUY\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước ST150K",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước ST150K: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói ST150K: Soạn \"HUY ST150K\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/ST150K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0077.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 260e71fd92c23f1bf61e69c84659333fe38ad35855016e39966dc3593668c0c8",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/ST150K",
      "code": "ST150K",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/V200C": {
    "status": "draft",
    "kind": "package",
    "title": "Gói V200C Viettel - 120GB Data (4GB/ngày) + Miễn Phí Gọi, Chỉ 200K/tháng",
    "description": "V200C - Gói cước 4G Viettel chỉ 200.000đ nhận ngay 120GB data (4GB/ngày). Miễn phí gọi nội mạng dưới 20 phút và 100 phút ngoại mạng. Miễn phí lưu trữ 25 GB trên LifeBox. Miễn phí xem TV360.",
    "heading": "Gói cước Viettel V200C",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "V200C - Gói cước 4G Viettel thông dụng chỉ với 200.000đ, người dùng sở hữu ngay 120GB data/tháng, tương đương 4GB/ngày. Miễn phí lưu trữ 25 GB trên LifeBox và miễn phí data truy cập ứng dụng TV360"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước V200C của Viettel",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [],
          "rows": [
            [
              "Tên gói cước",
              "V200C"
            ],
            [
              "Cước phí",
              "200.000đ"
            ],
            [
              "Thời gian sử dụng",
              "1 tháng"
            ],
            [
              "Dung lượng",
              "120GB (4GB/ngày)"
            ],
            [
              "Ưu đãi đặc biệt",
              "Miễn phí cước gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí data xem TV360Miễn phí 25GB lưu trữ trên LifeBox"
            ],
            [
              "Đối tượng",
              "Thuê bao di động mạng Viettel trong danh sách được hưởng ưu đãi"
            ],
            [
              "Cú pháp đăng ký",
              "V200C UP gửi 290"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước V200C",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói V200Ctrong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3V200C",
              "360GB (4GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Lifebox",
              "600.000đ(3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6V200C",
              "720GB (4GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Lifebox",
              "1.200.000đ(6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12V200C",
              "1.440GB (4GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Lifebox",
              "2.400.000đ(12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước V200C",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước V200C: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước V200C: Soạn \"HUY V200C\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước V200C",
        "paragraphs": [
          "Dung lượng dữ liệu lớn: Cung cấp 120GB/tháng (4GB/ngày) giúp người dùng thoải mái truy cập internet mà không phải lo lắng về data",
          "Tốc độ truy cập cao: Thoả sức xem video, clip, hay chơi game trực tuyến mà không gặp trở ngại về tốc độ",
          "Đa nền tảng: Đáp ứng nhu cầu tìm kiếm thông tin, giải trí trên tất cả các nền tảng (bao gồm: Google, Facebook, Tiktok, Youtube, Telegram, Zalo, Viber, Instagram, ...)",
          "Miễn phí cước viễn thông: Miễn phí cước nội mạng dưới 20 phút và 100 phút gọi ngoại mạng",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel được đăng ký nhiều nhất",
        "paragraphs": []
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger, Instagram.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/V200C"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0078.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: b14bee4b9a284e1a7f248b6d94af47a06eff606d00fe4489ca91ce33b4257dd8",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/V200C",
      "code": "V200C",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G135": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký Gói 5G Viettel 5G135: 4GB/ngày Kèm Ưu Đãi Hấp Dẫn",
    "description": "5G135 - Gói cước 5G mới nhất của Viettel chỉ 135.000đ nhận ngay 4GB/ngày. Ưu đãi miễn phí xem TV360 4K và 25GB lưu trữ Mybox. Đăng ký soạn 5G135 UP gửi 290.",
    "heading": "Gói cước Viettel 5G135",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G135 của Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Với gói cước này, bạn có thể thoải mái lướt web, xem video, chơi game online mà không lo gián đoạn."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G135 của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G135",
          "Cước phí: 135.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 120GB (4GB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí TV360 gói Basic, 20GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước hoà mạng mới và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: 5G135 UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 4GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G135 Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 135.000 đồng để đăng ký gói cước.",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G135 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G135 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G135, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G135 trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G135. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G135 của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G135 cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 120GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Giá Cả Hợp Lý: Chỉ với 135.000 VND mỗi tháng, bạn đã có thể sở hữu gói cước 5G với nhiều ưu đãi hấp dẫn.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G135",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G135 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G135",
              "720GB(4GB/ngày)Miễn phí TV360 4KMiễn phí 20GB Mybox",
              "810.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G135",
              "1.440GB(4GB/ngày)Miễn phí TV360 4KMiễn phí 20GB Mybox",
              "1.620.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G135",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G135: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G135: Soạn \"HUY 5G135\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G135, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G135"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0079.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 9222314af3586c38f1bb386826edfd6a48d3e1b64c3a3e7099b738baa6ccd900",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G135",
      "code": "5G135",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G150": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký Gói 5G Viettel 5G150 Nhận 6GB/ngày chỉ 150.000đ",
    "description": "5G150 - Đăng ký gói cước 5G Viettel siêu tốc độ chỉ 150.000đ/tháng nhận ngay 180GB (6GB/ngày). Miễn phí xem TV360 4K. Miễn phí 30GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G150",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Đăng ký gói cước 5G mới nhất của Viettel - 5G150 mang đến cho người dùng ưu đãi vượt trội với 180GB data tốc độ cao sử dụng trên nền tảng mạng 5G. Đây là lựa chọn hoàn hảo cho những ai muốn trải nghiệm kết nối internet nhanh và ổn định mọi lúc, mọi nơi."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G150 của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G150",
          "Cước phí: 150.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 180GB (6GB/ngày)",
          "Ưu đãi đặc biệt: Miễn phí TV360 gói Basic, 30GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5G150 UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 6GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G150 Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 150.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G150 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G150 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G150, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G150 trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G150. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G150 của Viettel",
        "paragraphs": [
          "Tốc độ cao: Gói cước 5G150 cung cấp tốc độ truy cập internet lên đến 1Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung lượng lớn: Với 180GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Giá cả hợp lý: Chỉ với 150.000 VND mỗi tháng, bạn đã có thể sở hữu gói cước 5G với nhiều ưu đãi hấp dẫn.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G150",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G150 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G150",
              "1.080GB(6GB/ngày)Miễn phí TV360 4KMiễn phí 30GB Mybox",
              "900.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G150",
              "2.160GB(6GB/ngày)Miễn phí TV360 4KMiễn phí 30GB Mybox",
              "1.800.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G150",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G150: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G150: Soạn \"HUY 5G150\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G150, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K20GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G150"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0080.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 6cb6d6318a4d03c4165b11145129fdb9ebce3ac7c0c93c0056a59b25ec7b04d8",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G150",
      "code": "5G150",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G160B": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5G160B Nhận 4GB/ngày + Miễn Phí Gọi",
    "description": "Đăng ký gói cước 5G Viettel 5G160B chỉ 160.000đ/tháng nhận ngay 120GB (4GB/ngày). Ưu đãi miễn phí gọi nội ngoại mạng. Miễn phí TV360 4K, 20GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G160B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G160B Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Ưu đãi miễn phí gọi nội ngoại mạng, xem TV360 thả ga chất lương 4K, 20GB lưu trữ Mybox."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G160B của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G160B",
          "Cước phí: 160.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 120GB (4GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút",
          "Miễn phí 100 phút gọi ngoại mạng",
          "Miễn phí TV360 gói Basic, 20GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước hoà mạng mới và thuê bao nằm trong danh sách được hưởng ưu đãi",
          "Cú pháp: 5G160B UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 4GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G160B Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 160.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G160B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G160B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G160B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G160B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G160B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G160B của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G160B cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 120GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn Phí Gọi: Ưu đãi cước gọi nội ngoại mạng, luôn giữ kết nối với bạn bè và người thân",
          "Giá Cả Hợp Lý: Chỉ với 165.000 VND mỗi tháng, bạn đã có thể sở hữu gói cước 5G với nhiều ưu đãi hấp dẫn.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G160B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G160B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G160B",
              "720GB(4GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "960.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G160B",
              "1.440GB(4GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "1.920.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G160B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G160B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G160B: Soạn \"HUY 5G160B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G160B, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G160B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0081.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: c509ef7f2150c04fb12f13099970b010a0417234e24b240baa69c9e9d8ef6af8",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G160B",
      "code": "5G160B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G180B": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5G180B Nhận 6GB/ngày. Miễn Phí Gọi+TV360",
    "description": "Đăng ký 5G Viettel 5G180B chỉ 180.000đ/tháng nhận ngay 180GB (6GB/ngày). Ưu đãi miễn phí cước gọi nội ngoại mạng. Miễn phí xem TV360 và 30GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G180B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G180B Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Ưu đãi miễn phí gọi nội ngoại mạng, xem TV360 thả ga chất lương 4K, 30GB lưu trữ Mybox."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G180B của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G180B",
          "Cước phí: 180.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 180GB (6GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút",
          "Miễn phí 100 phút gọi ngoại mạng",
          "Miễn phí TV360 gói Basic, 30GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5G180B UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 6GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G180B Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 180.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G180B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G180B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G180B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G180B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G180B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G180B của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G180B cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 180GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn Phí Gọi: Ưu đãi cước gọi nội ngoại mạng, luôn giữ kết nối với bạn bè và người thân.",
          "Giá Cả Hợp Lý: Chỉ với 180.000 VND mỗi tháng, bạn đã có thể sở hữu gói cước 5G với nhiều ưu đãi hấp dẫn.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G180B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G180B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G180B",
              "1.080GB(6GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "1.080.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G180B",
              "2.160GB(6GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "2.160.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G180B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G180B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G180B: Soạn \"HUY 5G180B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G180B, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G180B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0082.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 743885ebcb7b5113d65d10ddc09b6b19f1a866ba0579f4085326e8cab4126912",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G180B",
      "code": "5G180B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G230B": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5G230B Nhận 8GB/ngày. Miễn Phí Gọi+TV360",
    "description": "Đăng ký gói cước 5G Viettel 5G230B chỉ 230.000đ/tháng nhận 240GB (8GB/ngày). Miễn phí cước gọi nội ngoại mạng. Miễn phí TV360 4K. Miễn phí 50Gb lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G230B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G230B Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Ưu đãi miễn phí gọi nội ngoại mạng, xem TV360 thả ga chất lượng 4K, 50GB lưu trữ Mybox."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G230B của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G230B",
          "Cước phí: 230.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 240GB (8GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút",
          "Miễn phí 150 phút gọi ngoại mạng",
          "Miễn phí TV360 gói Standard, 50GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5G230B UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 8GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G230B Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 230.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G230B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G230B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G230B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G230B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G230B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G230B của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G230B cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 240GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn Phí Gọi: Ưu đãi cước gọi nội ngoại mạng, luôn giữ kết nối với bạn bè và người thân.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G230B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G230B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G230B",
              "1.440GB(8GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "1.380.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G230B",
              "2.880GB(8GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "2.760.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G230B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G230B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G230B: Soạn \"HUY 5G230B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G230B, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G230B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0083.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 02ebfc48ab96104536d10492607a9fb4fca874c0b95e0d32b2a8087018892f3d",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G230B",
      "code": "5G230B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G280B": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5G280B Nhận 10GB/ngày. Miễn Phí Gọi+TV360",
    "description": "Đăng ký gói cước 5G Viettel 5G280B chỉ 280.000đ/tháng nhận 300GB (10GB/ngày). Miễn phí gọi nội ngoại mạng. Miễn phí xem TV360 4K. Miễn phí 70GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G280B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G280B Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Ưu đãi miễn phí gọi nội ngoại mạng, xem TV360 thả ga chất lượng 4K, 70GB lưu trữ Mybox."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G280B của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G280B",
          "Cước phí: 280.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 300GB (10GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút",
          "Miễn phí 200 phút gọi ngoại mạng",
          "Miễn phí TV360 gói Standard, 70GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5G280B UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 10GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G280B Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 280.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G280B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G280B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G280B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G280B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G280B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G280B của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G280B cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 300GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn Phí Gọi: Ưu đãi cước gọi nội ngoại mạng, luôn giữ kết nối với bạn bè và người thân.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G280B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G280B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G280B",
              "1.800GB(10GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "1.680.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G280B",
              "3.600GB(10GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "3.360.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G280B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G280B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G280B: Soạn \"HUY 5G280B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G280B, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G280B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0084.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 35eae6722e2e328973b893492c9afb2000c167c44f3ef11c9628471c86f3fdd6",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G280B",
      "code": "5G280B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G330B": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5G330B Nhận 12GB/ngày Miễn Phí Gọi+TV360",
    "description": "5G330B - Đăng ký gói cước 5G Viettel 330.000đ/tháng nhận 360GB (12GB/ngày). Miễn phí cước gọi nội ngoại mạng. Miễn Phí TV360 4K. Miễn phí 100GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G330B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G330B Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Ưu đãi miễn phí gọi nội ngoại mạng, xem TV360 thả ga chất lượng 4K, 100GB lưu trữ Mybox."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G330B của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G330B",
          "Cước phí: 330.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 360GB (12GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút",
          "Miễn phí 300 phút gọi ngoại mạng",
          "Miễn phí TV360 gói Standard, 100GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5G330B UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 12GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G330B Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 330.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G330B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G330B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G330B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G330B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G330B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G330B của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G330B cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 360GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn Phí Gọi: Ưu đãi cước gọi nội ngoại mạng, luôn giữ kết nối với bạn bè và người thân.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G330B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G330B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G330B",
              "2.160GB(12GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "1.980.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G330B",
              "4.320GB(12GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "3.960.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G330B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G330B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G330B: Soạn \"HUY 5G330B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G330B, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G330B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0085.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: f02af6f932193ccc395603cd64892609462654fec5db23e35b9b4c5166a94bf6",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G330B",
      "code": "5G330B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G380B": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5G380B Nhận 15GB/ngày. Miễn Phí Gọi+TV360",
    "description": "5G380B - Đăng ký gói cước 5G Viettel với 380.000đ/tháng nhận 450GB (15GB/ngày). Miễn phí gọi nội ngoại mạng. Miễn phí TV360 4K. Miễn phí 150GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G380B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G380B Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Ưu đãi miễn phí gọi nội ngoại mạng, xem TV360 thả ga chất lượng 4K, 150GB lưu trữ Mybox."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G380B của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G380B",
          "Cước phí: 380.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 450GB (15GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút",
          "Miễn phí 300 phút gọi ngoại mạng",
          "Miễn phí TV360 gói Standard, 150GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5G380B UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 15GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G380B Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 380.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G380B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G380B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G380B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G380B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G380B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G380B của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G380B cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 450GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn Phí Gọi: Ưu đãi cước gọi nội ngoại mạng, luôn giữ kết nối với bạn bè và người thân.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G380B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G380B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G380B",
              "2.700GB(15GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "2.280.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G380B",
              "5.400GB(15GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "4.560.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G380B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G380B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G380B: Soạn \"HUY 5G380B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G380B, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G380B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0086.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: b339dc80c6acc3ea881766789d2a15c4c853bc69ca8c5e7cd72583ab9daa6355",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G380B",
      "code": "5G380B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G480B": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5G480B Nhận 20GB/ngày. Miễn Phí Gọi+TV360",
    "description": "5G480B - Đăng ký gói cước 5G Viettel với 480.000đ/tháng nhận 600GB (20GB/ngày). Miễn phí gọi nội ngoại mạng. Miễn phí TV360 4K. Miễn phí 200GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G480B",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5G480B Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Ưu đãi miễn phí gọi nội ngoại mạng, xem TV360 thả ga chất lượng 4K, 200GB lưu trữ Mybox."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G480B của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G480B",
          "Cước phí: 480.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 600GB (20GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút",
          "Miễn phí 300 phút gọi ngoại mạng",
          "Miễn phí TV360 gói Standard, 200GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5G480B UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 20GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5G480B Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 480.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5G480B của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G480B UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G480B, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5G480B trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G480B. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G480B của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5G480B cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 600GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn Phí Gọi: Ưu đãi cước gọi nội ngoại mạng, luôn giữ kết nối với bạn bè và người thân.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G480B",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G480B trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5G480B",
              "3.600GB(20GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "2.880.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G480B",
              "7.200GB(20GB/ngày)Miễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "5.760.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G480B",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G480B: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5G480B: Soạn \"HUY 5G480B\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5G480B, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G480B"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0087.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 44aacd976392597f5178632e3bfa8dddb58b4edbd6d806decc6c96c76f3c0d0a",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G480B",
      "code": "5G480B",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G135N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 5G135N Viettel – 6GB/ngày, Miễn phí TV360 4K & 20GB MyBox",
    "description": "Đăng ký gói 5G135N Viettel nhận 6GB/ngày, miễn phí TV360 Basic 4K và 20GB lưu trữ MyBox. Áp dụng cho thuê bao mới từ 01/01/2025 hoặc theo danh sách.",
    "heading": "Gói cước Viettel 5G135N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "5G135N là gói cước 5G Viettel ưu đãi cực lớn, dành riêng cho thuê bao trả trước kích hoạt mới từ ngày 01/01/2025 hoặc thuê bao trong danh sách khuyến mãi. Gói cước mang đến 6GB tốc độ cao mỗi ngày, kèm theo nhiều tiện ích giải trí và lưu trữ hoàn toàn miễn phí."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói 5G135N",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Dung lượng: 6GB/ngày (tổng 180GB/tháng)",
          "Cước phí: 135.000đ/30 ngày",
          "Hết dung lượng: Ngừng truy cập (không phát sinh cước ngoài gói)",
          "Ưu đãi đi kèm: Miễn phí TV360 Basic 4K, Miễn phí 20GB lưu trữ trên MyBox"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Điều kiện áp dụng:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Áp dụng cho thuê bao di động trả trước kích hoạt mới từ 01/01/2025",
          "Hoặc thuê bao thuộc danh sách được Viettel ưu đãi"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói 5G135N",
        "paragraphs": [
          "Soạn tin nhắn: 5G135N UP gửi 290",
          "Hoặc đăng ký qua My Viettel, viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5G135N",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G135N trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 3 tháng, 6 tháng, 1 năm"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "3T5G135N",
              "540GB(6GB/ngày)Miễn phí TV360 4KMiễn phí 20GB Mybox",
              "405.000đ(3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6T5G135N",
              "1.080GB(6GB/ngày)Miễn phí TV360 4KMiễn phí 20GB Mybox",
              "810.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G135N",
              "2.160GB(6GB/ngày)Miễn phí TV360 4KMiễn phí 20GB Mybox",
              "1.620.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Câu hỏi thường gặp về gói 5G135N Viettel",
        "paragraphs": [
          "1. Gói 5G135N Viettel có ưu đãi gì nổi bật?",
          "Gói 5G135N cung cấp 6GB/ngày tốc độ cao, miễn phí gói TV360 Basic 4K và 20GB dung lượng lưu trữ trên MyBox. Hết dung lượng sẽ ngừng truy cập, không phát sinh cước ngoài gói.",
          "2. Tại sao không đăng ký được 5G135N?",
          "Gói cước 5G135N áp dụng cho thuê bao di động trả trước kích hoạt mới từ ngày 01/01/2025 hoặc các thuê bao nằm trong danh sách ưu đãi của Viettel.",
          "3. Cách đăng ký gói 5G135N Viettel như thế nào?",
          "Soạn tin nhắn: 5G135N UP gửi 290",
          "Hoặc đăng ký trực tiếp qua ứng dụng My Viettel.",
          "4. Hết 6GB/ngày thì có dùng tiếp được không?",
          "Không. Sau khi sử dụng hết 6GB/ngày, gói sẽ ngừng truy cập Internet. Gói 5G135N không phát sinh cước vượt gói, giúp bạn yên tâm kiểm soát chi phí.",
          "5. Cách huỷ gói cước 5G135N",
          "Nếu không muốn tiếp tục sử dụng và muốn hủy tính năng tự động gia hạn, bạn có thể soạn tin nhắn: HUY 5G135N gửi 191. Sau đó, hệ thống sẽ gửi tin nhắn xác nhận; bạn cần phản hồi theo hướng dẫn để hoàn tất quá trình hủy."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G135N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0088.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 0d90d709e4460e0a052402620f972252131967d09f331c15f6597439180d2694",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G135N",
      "code": "5G135N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G150N": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước tháng 5G150N Viettel – 8GB/ngày, miễn phí TV360 và lưu trữ Mybox",
    "description": "Đăng ký gói 5G150N Viettel chỉ 150.000đ/tháng nhận 240GB data 5G (8GB/ngày), miễn phí TV360 4K và 30GB lưu trữ Mybox.",
    "heading": "Gói cước Viettel 5G150N",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Bạn đang tìm một gói cước 5G Viettel vừa tiết kiệm, vừa nhiều data? Gói 5G150N là lựa chọn lý tưởng: chỉ 150.000đ/tháng, bạn nhận ngay 240GB (8GB/ngày) data tốc độ cao, kèm miễn phí TV360 4K."
        ]
      },
      {
        "type": "text",
        "heading": "1. Thông tin gói cước 5G150N Viettel",
        "paragraphs": [
          "Tên gói cước: 5G150N",
          "Giá gói: 150.000đ/tháng",
          "Dung lượng: 240GB/tháng (8GB/ngày)",
          "Ưu đãi: Miễn phí xem TV360 4K và 30GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước kích hoạt sau ngày 01/01/2025 hoặc thuộc danh sách khuyến mãi",
          "Cú pháp SMS: 5G150N UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "2. Ưu điểm nổi bật",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Data khủng mỗi ngày: 8GB/ngày tốc độ cao – phù hợp cho người dùng thường xuyên xem video, học online, làm việc từ xa.",
          "Không lo vượt lưu lượng: Hết 8GB/ngày sẽ tạm dừng truy cập, không phát sinh cước ngoài gói.",
          "Tự động cộng lại lưu lượng: Mỗi ngày đều được cộng mới 8GB, đảm bảo trải nghiệm mượt mà suốt 30 ngày.",
          "Giải trí thả ga: Miễn phí truy cập TV360 Basic và MyBox, xem phim, chương trình yêu thích mọi lúc mọi nơi."
        ]
      },
      {
        "type": "text",
        "heading": "3. Cách đăng ký gói 5G150N",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Bạn có thể dễ dàng đăng ký qua các kênh sau:",
          "Qua SMS: Soạn 5G150N UP gửi 290",
          "Qua USSD: Bấm *098# → Chọn gói → Đăng ký",
          "Qua ứng dụng My Viettel: Tải app, đăng nhập → Chọn gói → Đăng ký",
          "Trên website: Truy cập https://viettel.vn để kiểm tra thuê bao và đăng ký nhanh",
          "Qua tổng đài : Gọi trực tiếp 18008098 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý: Tài khoản chính cần ≥150.000đ tại thời điểm đăng ký."
        ]
      },
      {
        "type": "text",
        "heading": "4. Gói chu kỳ dài 5G150N Viettel",
        "paragraphs": [
          "Nếu bạn muốn tiết kiệm thời gian đăng ký, Viettel cung cấp các gói chu kỳ 3, 6 và 12 tháng"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "Tên gói",
            "Ưu đãi",
            "Đơn giá",
            ""
          ],
          "rows": [
            [
              "3T5G150N",
              "720GB (8GB/ngày)Miễn phí TV360 4KMiễn phí 30GB Mybox",
              "450.000đ(3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "6T5G150N",
              "1.440GB (8GB/ngày)Miễn phí TV360 4KMiễn phí 30GB Mybox",
              "900.000đ(6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5G150N",
              "2.880GB (8GB/ngày)Miễn phí TV360 4KMiễn phí 30GB Mybox",
              "1.800.000đ(12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "5. Tại sao không đăng ký được 5G150N?",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thuê bao không thuộc danh sách khuyến mãi",
        "paragraphs": [
          "Nguyên nhân: Gói 5G150N chỉ áp dụng cho:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao trả trước Viettel kích hoạt sau 01/01/2025",
          "Hoặc thuê bao thuộc danh sách khuyến mãi riêng của Viettel"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Cách kiểm tra:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Truy cập: https://viettel.vn",
          "Hoặc gọi 18008098 (miễn phí) để tra cứu"
        ]
      },
      {
        "type": "text",
        "heading": "Thuê bao không phải là thuê bao trả trước",
        "paragraphs": [
          "Nguyên nhân: Gói này không áp dụng cho thuê bao trả sau hoặc các SIM chuyên dụng.",
          "Cách xử lý: Đổi sang thuê bao trả trước nếu muốn sử dụng gói."
        ]
      },
      {
        "type": "text",
        "heading": "Tài khoản gốc không đủ 150.000đ",
        "paragraphs": [
          "Nguyên nhân: Gói 5G150N yêu cầu tài khoản gốc ≥ 150.000đ tại thời điểm đăng ký.",
          "Cách xử lý: Nạp thêm tiền qua app My Viettel, Viettel Money, hoặc tại các điểm giao dịch."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G150N"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0089.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 7c43360d58eadc0cfd5eaf8c98344df4461fec6b69c837e22f2067657d91befc",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G150N",
      "code": "5G150N",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5GLQ190": {
    "status": "draft",
    "kind": "package",
    "title": "Đăng Ký 5G Viettel 5GLQ190 Nhận 6GB/ngày. Miễn Phí Liên Quân",
    "description": "5GLQ190 - Đăng ký gói cước 5G Viettel nhận 180GB data tốc độ cực cao (6GB/ngày). Miễn phí 2GB/ngày data chơi Liên Quân Mobile.",
    "heading": "Gói cước Viettel 5GLQ190",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5GLQ190 của Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Với gói cước này, bạn có thể thoải mái lướt web, xem video, đặc biệt ưu đãi thêm 2GB/ngày data chơi Liên Quân Mobile"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5GLQ190 của Viettel",
        "paragraphs": [
          "Tên gói cước: 5GLQ190",
          "Cước phí: 190.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 180GB (6GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 2GB/ngày chơi Liên Quân Mobile",
          "Miễn phí xem TV360 gói Basic",
          "Miễn phí 30GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5GLQ190 UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 6GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5GLQ190 Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 190.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5GLQ190 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5GLQ190 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5GLQ190, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5GLQ190 trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5GLQ190. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5GLQ190 của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5GLQ190 cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 180GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn phí Liên Quân: Ưu đãi thêm 60GB (2GB/ngày) data chơi Liên Quân",
          "Giá Cả Hợp Lý: Chỉ với 190.000 VND mỗi tháng, bạn đã có thể sở hữu gói cước 5G với nhiều ưu đãi hấp dẫn.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5GLQ190",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5GLQ190 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5GLQ190",
              "1.080GB(6GB/ngày)2GB/ngày chơi Liên QuânMiễn phí TV360 4KMiễn phí 30GB Mybox",
              "1.140.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5GLQ190",
              "2.160GB(6GB/ngày)2GB/ngày chơi Liên QuânMiễn phí TV360 4KMiễn phí 20GB Mybox",
              "2.280.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5GLQ190",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5GLQ190: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5GLQ190: Soạn \"HUY 5GLQ190\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5GLQ190, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K20GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ210",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí gọi nội mạng dưới 20 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "210.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5GLQ190"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0090.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: c0d0e3a33774061a6254c806e3a92048a5f041e7b8d311da590b09086fbd17cf",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5GLQ190",
      "code": "5GLQ190",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5GLQ210": {
    "status": "draft",
    "kind": "package",
    "title": "5GLQ210 - Gói Cước 5G Viettel 6GB/ngày + 2GB/ngày Liên Quân + Gọi",
    "description": "Đăng ký gói cước 5G Viettel 5GLQ210 chỉ 210.000đ/tháng nhận 180GB (6GB/ngày). Miễn phí 2GB/ngày data Liên Quân. Miễn phí gọi. Miễn phí TV360 4K. Miễn phí Mybox",
    "heading": "Gói cước Viettel 5GLQ210",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước 5GLQ210 của Viettel là một trong những gói cước 5G mới nhất hiện nay, mang lại nhiều lợi ích cho người dùng với tốc độ truy cập internet cực nhanh và ổn định. Chiến game Liên Quân mượt mà, giữ vững phong độ mà không lo gián đoạn vì hết dung lượng"
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5GLQ210 của Viettel",
        "paragraphs": [
          "Tên gói cước: 5GLQ210",
          "Cước phí: 210.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 180GB (6GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 2GB/ngày chơi Liên Quân Mobile",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút và 100 phút gọi ngoại mạng",
          "Miễn phí xem TV360 gói Basic",
          "Miễn phí 30GB lưu trữ Mybox",
          "Đối tượng áp dụng: Thuê bao di động trả trước toàn mạng",
          "Cú pháp: 5GLQ210 UP gửi 290",
          "Ngoài vùng phủ sóng 5G, thuê bao sẽ tự động chuyển sang 4G/LTE để tiếp tục sử dụng dung lượng trong 6GB data mỗi ngày"
        ]
      },
      {
        "type": "text",
        "heading": "Điều kiện đăng ký và sử dụng",
        "paragraphs": [
          "Thiết bị hỗ trợ 4G hoặc 5G: Với gói cước 5GLQ210 Viettel, bạn có thể yên tâm sử dụng ở mọi nơi, ngay cả khi không nằm trong vùng phủ sóng 5G. Gói cước này linh hoạt hỗ trợ trên hạ tầng 4G, tức là ngoài vùng 5G, kết nối sẽ tự động chuyển về 4G để tiếp tục sử dụng dịch vụ một cách liền mạch. Như vậy, dù ở bất kỳ đâu, bạn vẫn có thể truy cập Internet ổn định mà không bị gián đoạn, tận hưởng trải nghiệm trực tuyến mọi lúc, mọi nơi!",
          "Tài khoản chính đủ số dư: Thuê bao cần có đủ số dư trong tài khoản chính là 210.000 đồng để đăng ký gói cước",
          "Tham khảo thêm cách bật 5G trên điện thoại và vùng phủ sóng 5G"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước",
        "paragraphs": [
          "Để đăng ký gói cước 5GLQ210 của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5GLQ210 UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5GLQ210, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập",
          "Bước 3: Tìm kiếm gói cước 5GLQ210 trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại",
          "4. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5GLQ210. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "5. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel (số 1800 8098 hoặc 198). Nhấn phím 3 để đăng ký data Viettel siêu tốc độ. Hoặc phím 5 để gặp trực tiếp nhân viên tư vấn hỗ trợ trực tiếp."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5GLQ210 của Viettel",
        "paragraphs": [
          "Tốc Độ Cao: Gói cước 5GLQ210 cung cấp tốc độ truy cập internet lên đến 10Gbps, giúp bạn trải nghiệm internet mượt mà và nhanh chóng.",
          "Dung Lượng Lớn: Với 180GB dung lượng mỗi tháng, bạn có thể thoải mái sử dụng internet mà không lo hết dung lượng.",
          "Miễn phí Liên Quân: Ưu đãi thêm 60GB (2GB/ngày) data chơi Liên Quân",
          "Giá Cả Hợp Lý: Chỉ với 210.000 VND mỗi tháng, bạn đã có thể sở hữu gói cước 5G với nhiều ưu đãi hấp dẫn.",
          "Cước phí minh bạch: Hết dung lượng trong ngày, dịch vụ sẽ tạm dừng đến 00:00 ngày hôm sau. Gói cước tự động cộng thêm data khi bắt đầu ngày mới, áp dụng suốt chu kỳ"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói 5GLQ210",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5GLQ210 trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "6T5GLQ210",
              "1.080GB(6GB/ngày)2GB/ngày chơi Liên QuânMiễn phí gọiMiễn phí TV360Miễn phí Mybox",
              "1.260.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "12T5GLQ210",
              "2.160GB(6GB/ngày)2GB/ngày chơi Liên QuânMiễn phí gọiMiễn phí TV360 4KMiễn phí 20GB Mybox",
              "2.520.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5GLQ210",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5GLQ210: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói cước 5GLQ210: Soạn \"HUY 5GLQ210\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Các gói cước 5G Viettel khác",
        "paragraphs": [
          "Ngoài gói cước 5GLQ210, Viettel còn cung cấp nhiều gói cước 5G khác để phù hợp với nhu cầu và ngân sách của từng người dùng. Dưới đây là một số gói cước 5G phổ biến khác của Viettel:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "5G135",
              "4GB/ngàyMiễn phí TV360 4K20GB Mybox",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G150",
              "6GB/ngàyMiễn phí TV360 4K30GB Mybox",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G160B",
              "4GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K20GB Mybox",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G180B",
              "6GB/ngàyMiễn phí gọi nội mạng dưới 10 phútMiễn phí 100 phút gọi ngoại mạngMiễn phí TV360 4K30GB Mybox",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G230B",
              "8GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 150 phút gọi ngoại mạngMiễn phí TV360 4K50GB Mybox",
              "230.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G280B",
              "10GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 200 phút gọi ngoại mạngMiễn phí TV360 4K70GB Mybox",
              "280.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G330B",
              "12GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K100GB Mybox",
              "330.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G380B",
              "15GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K150GB Mybox",
              "380.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5G480B",
              "20GB/ngàyMiễn phí gọi nội mạng dưới 20 phútMiễn phí 300 phút gọi ngoại mạngMiễn phí TV360 4K200GB Mybox",
              "480.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "5GLQ190",
              "6GB/ngày2GB/ngày chơi Liên QuânMiễn phí TV360 4K30GB Mybox",
              "190.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "paragraphs": [
          "*Các gói 5G135, 5G160B, 5G180B áp dụng cho khách hàng di động trả trước hoà mạng mới và theo danh sách, các gói còn lại áp dụng cho khách hàng trả trước toàn mạng"
        ]
      },
      {
        "type": "text",
        "heading": "Tham khảo gói cước 4G Viettel khác",
        "paragraphs": [
          "Dưới đây là một số gói cước 4G Viettel tháng phổ biến và được đăng ký nhiều nhất"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ (tháng)",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "MXH100",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.",
              "100.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH120",
              "30GB (1GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 30 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "MXH150",
              "45GB (1.5GB/ngày)- Miễn phí data TikTok, Youtube, Facebook, Messenger.- Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD70",
              "30GB (1GB/ngày)",
              "70.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD90",
              "45GB (1.5GB/ngày)",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD120",
              "60GB (2GB/ngày)Miễn phí TV360",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD135",
              "150GB (5GB/ngày)Miễn phí TV360",
              "135.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "SD150",
              "90GB (3GB/ngày)Miễn phí TV360",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V90B",
              "30GB (1GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 30 phút gọi ngoại mạng.",
              "90.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V120B",
              "45GB (1.5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 50 phút gọi ngoại mạng.",
              "120.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V150B",
              "60GB (2GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 80 phút gọi ngoại mạng.",
              "150.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V160B",
              "120GB (4GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "160.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V180B",
              "180GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 10 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "180.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "V200B",
              "240GB (8GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút.- Miễn phí 100 phút gọi ngoại mạng.",
              "200.000đ",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "30N",
              "150GB (5GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng- Miễn phí SMS- Miễn phí TV360",
              "300.000đ",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5GLQ210"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0091.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 12717dbf82615d6ff8b352ad4e5443488b6257cf3b67f04a6b636f30ea2310e7",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5GLQ210",
      "code": "5GLQ210",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G200C": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước 5G200C Viettel – 6GB/ngày, miễn phí gọi, TV360 4K chỉ 200K/tháng!",
    "description": "Đăng ký gói 5G200C Viettel chỉ 200K/tháng, nhận ngay 6GB/ngày, miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng, xem TV360 Basic 4K.",
    "heading": "Gói cước Viettel 5G200C",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "5G200C - Gói cước 5G Viettel chỉ với 200.000đ/tháng, người dùng sở hữu ngay 180GB (6GB/ngày), miễn phí gọi, xem TV360 Basic 4K trên màn hình nhỏ."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G200C của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G200C",
          "Cước phí: 200.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 180GB (6GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút (tối đa 1000p/30 ngày).",
          "Miễn phí 150 phút gọi ngoại mạng/30 ngày.",
          "Miễn phí TV360 Basic 4K trên màn hình nhỏ.",
          "Đối tượng áp dụng: Thuê bao di động trả trước mạng Viettel theo danh sách",
          "Cú pháp: 5G200C UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước 5G200C",
        "paragraphs": [
          "Để đăng ký gói cước 5G200C của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS:",
          "Đây là cách đơn giản và nhanh nhất. Bạn chỉ cần soạn tin nhắn theo cú pháp 5G200C UP gửi 290. Sau khi gửi, bạn sẽ nhận được thông báo xác nhận đăng ký thành công và bắt đầu sử dụng gói cước. Hoặc bạn có thể click nút đăng ký trên website " + siteConfig.hostname + ", hỗ trợ bạn soạn tin nhắn nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel",
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G200C, sau đó làm theo hướng dẫn để đăng ký.",
          "3. Đăng ký qua mã USSD",
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Khuyễn mãi HOT và 5G\", sau đó tìm đến gói 5G200C và xác nhận đăng ký",
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn",
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Điền số điện thoại của bạn và xác nhận OTP để đăng nhập.",
          "Bước 3: Tìm kiếm gói cước 5G200C trong phần “Gói cước Data\". Chọn gói cước và thực hiện đăng ký qua tài khoản điện thoại.",
          "5. Đăng ký tại cửa hàng Viettel",
          "Đến trực tiếp các cửa hàng hoặc điểm giao dịch của Viettel.",
          "Nhân viên tại cửa hàng sẽ hỗ trợ bạn đăng ký gói cước 5G200C. Đừng quên mang theo giấy tờ tùy thân và số điện thoại cần đăng ký.",
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel",
          "Gọi đến tổng đài Viettel số 1800 8098 (miễn phí)"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G200C",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Siêu Data tốc độ cao – 6GB/ngày, tha hồ lướt web, xem phim, chơi game không lo gián đoạn.",
          "Miễn phí gọi nội mạng dưới 20 phút, thoải mái tám chuyện cùng người thân, bạn bè.",
          "150 phút gọi ngoại mạng – tiết kiệm chi phí, kết nối không giới hạn.",
          "Xem TV360 Basic 4K miễn phí – thưởng thức phim, giải trí, thể thao sắc nét trên màn hình nhỏ.",
          "Truy cập internet tốc độ cao 5G – nhanh, ổn định, không lo giật lag.",
          "Tiết kiệm chi phí – chỉ 200K/tháng với ưu đãi cực khủng, không lo phát sinh thêm."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Gói cước hoàn hảo cho những ai muốn tận hưởng internet tốc độ cao, giải trí không giới hạn và liên lạc tiết kiệm!"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước 5G200C",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G200C trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "35G200C",
              "540GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng (mỗi tháng)- TV360 Basic 4K",
              "600.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "65G200C",
              "1.080GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng (mỗi tháng)- TV360 Basic 4K",
              "1.200.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "125G200C",
              "2.160GB (6GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng (mỗi tháng)- TV360 Basic 4K",
              "2.400.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G200C",
        "paragraphs": [
          "Để kiểm tra dung lượng data gói cước 5G200C: Soạn \"KTTK\" gửi 191 (miễn phí)",
          "Để hủy gói 5G200C: Soạn \"HUY 5G200C\" gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G200C"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0092.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: a389cad89254a0ee4e828013718024b5e3d78db3a84dbc2b5f40cc716eceef46",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G200C",
      "code": "5G200C",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/5G300C": {
    "status": "draft",
    "kind": "package",
    "title": "Gói 5G300C Viettel – 10GB/ngày, Gọi Thoải Mái, Xem TV360 4K Miễn Phí",
    "description": "Đăng ký gói 5G300C Viettel chỉ 300K/tháng, nhận ngay 10GB/ngày, miễn phí gọi nội mạng dưới 20 phút, tặng 250 phút gọi ngoại mạng, xem TV360 Basic 4K miễn phí. Trải nghiệm tốc độ cao, không lo gián đoạn!",
    "heading": "Gói cước Viettel 5G300C",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "5G300C - Gói cước áp dụng cho cả thuê bao 4G và 5G Viettel chỉ với 300.000đ/tháng, người dùng sở hữu ngay 300GB (10GB/ngày), miễn phí gọi, xem TV360 Basic 4K trên màn hình nhỏ."
        ]
      },
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước 5G300C của Viettel",
        "paragraphs": [
          "Tên gói cước: 5G300C",
          "Cước phí: 300.000đ/tháng",
          "Dung lượng: 300GB (10GB/ngày)",
          "Ưu đãi đặc biệt:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Miễn phí cuộc gọi nội mạng dưới 20 phút (tối đa 1000 phút/tháng)",
          "Miễn phí 250 phút gọi ngoại mạng/tháng",
          "Miễn phí xem TV360 Basic 4K trên màn hình nhỏ"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Đối tượng áp dụng: Thuê bao di động trả trước Viettel theo danh sách",
          "Cú pháp đăng ký: Soạn 5G300C UP gửi 290"
        ]
      },
      {
        "type": "text",
        "heading": "Cách đăng ký gói cước 5G300C",
        "paragraphs": [
          "Để đăng ký gói cước 5G200C của Viettel, bạn có thể lựa chọn một trong các phương thức sau:",
          "1. Đăng ký qua tin nhắn SMS (Nhanh nhất)"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Soạn tin: 5G300C UP gửi 290",
          "Nhận tin nhắn xác nhận và bắt đầu sử dụng"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Hoặc nhấn nút đăng ký trên website " + siteConfig.hostname + " để soạn tin nhanh hơn.",
          "2. Đăng ký trên ứng dụng My Viettel"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Bước 1: Tải ứng dụng My Viettel từ App Store hoặc Google Play.",
          "Bước 2: Đăng nhập vào tài khoản của bạn hoặc đăng ký tài khoản mới nếu chưa có.",
          "Bước 3: Trong ứng dụng, chọn mục “Đăng ký gói cước” và tìm đến gói 5G300C, sau đó làm theo hướng dẫn để đăng ký."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "3. Đăng ký qua mã USSD"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Bước 1: Trên bàn phím điện thoại, bấm *098#, bấm nút “Gọi\" để tiếp tục",
          "Bước 2: Chọn \"Khuyễn mãi HOT và 5G\", tìm 5G300C và xác nhận đăng ký"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "4. Đăng ký trên Website portal viettel.vn/vietteltelecom.vn"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Bước 1: Truy cập Website portal của Viettel tại viettel.vn.",
          "Bước 2: Nhập số điện thoại, xác nhận OTP",
          "Bước 3: Tìm 5G300C trong mục “Gói cước Data\". Chọn và đăng ký"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "5. Đăng ký tại cửa hàng Viettel"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Đến trực tiếp cửa hàng hoặc điểm giao dịch Viettel gần nhất",
          "Nhân viên sẽ hỗ trợ đăng ký (cần mang theo giấy tờ tùy thân)"
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "6. Đăng ký qua tổng đài Chăm sóc khách hàng Viettel"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Gọi 1800 8098 (miễn phí) để được hỗ trợ đăng ký"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng gói cước 5G200C",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Siêu Data tốc độ cao – 10GB/ngày, tha hồ lướt web, xem phim, chơi game không lo gián đoạn.",
          "Miễn phí gọi nội mạng dưới 20 phút, thoải mái tám chuyện cùng người thân, bạn bè.",
          "250 phút gọi ngoại mạng – tiết kiệm chi phí, kết nối không giới hạn.",
          "Xem TV360 Basic 4K miễn phí – thưởng thức phim, giải trí, thể thao sắc nét trên màn hình nhỏ.",
          "Truy cập internet tốc độ cao 5G – nhanh, ổn định, không lo giật lag.",
          "Tiết kiệm chi phí – chỉ 300K/tháng với ưu đãi cực khủng, không lo phát sinh thêm."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Gói cước hoàn hảo cho những ai muốn tận hưởng internet tốc độ cao, giải trí không giới hạn và liên lạc tiết kiệm!"
        ]
      },
      {
        "type": "text",
        "heading": "Lựa chọn nâng cao dành riêng cho gói cước 5G300C",
        "paragraphs": [
          "Cung cấp thêm lựa chọn đăng ký gói 5G300C trong nhiều tháng, cho phép người dùng đăng ký sử dụng gói cước dài hạn, liên tục theo chu kỳ 03 tháng, 06 tháng, 12 tháng với mức giá và dung lượng data lớn hơn được chia theo từng giai đoạn, như sau:"
        ]
      },
      {
        "type": "table",
        "table": {
          "headings": [
            "GÓI CƯỚC",
            "ƯU ĐÃI",
            "ĐƠN GIÁ",
            "ĐĂNG KÝ"
          ],
          "rows": [
            [
              "35G300C",
              "900GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng (mỗi tháng)- TV360 Basic 4K",
              "900.000đ (3 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "65G300C",
              "1.800GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng (mỗi tháng)- TV360 Basic 4K",
              "1.800.000đ (6 tháng)",
              "ĐĂNG KÝĐăng ký"
            ],
            [
              "125G300C",
              "3.600GB (10GB/ngày)- Miễn phí cuộc gọi nội mạng dưới 20 phút và 250 phút gọi ngoại mạng (mỗi tháng)- TV360 Basic 4K",
              "3.600.000đ (12 tháng)",
              "ĐĂNG KÝĐăng ký"
            ]
          ]
        }
      },
      {
        "type": "text",
        "heading": "Cách quản lý gói cước 5G300C",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Kiểm tra dung lượng: Soạn KTTK gửi 191 (miễn phí)",
          "Hủy gói cước: Soạn HUY 5G300C gửi 191 (miễn phí)",
          "Tổng đài CSKH Viettel: 198 (miễn phí)"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/5G300C"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0093.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: ef7df4756a43b388b2d63df262c794f74f4fba3e085385a6530156ed35845f71",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/5G300C",
      "code": "5G300C",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS110": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS110 Viettel Money: 36GB Dùng Trong 30 Ngày, Giá Chỉ 104.500đ",
    "description": "Đăng ký gói KS110 trên Viettel Money để nhận ngay 36GB data tốc độ cao sử dụng trong 30 ngày. Giá ưu đãi chỉ 104.500đ sau khuyến mãi 5%.",
    "heading": "Gói cước Viettel KS110",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS110 trên ứng dụng Viettel Money là lựa chọn lý tưởng cho những ai cần sử dụng internet dài hạn với dung lượng lớn. Với 36GB tốc độ cao, bạn có thể thoải mái làm việc, học tập, giải trí mà không lo gián đoạn."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS110",
        "paragraphs": [
          "Dung lượng: 36GB tốc độ cao.",
          "Thời gian sử dụng: 30 ngày kể từ ngày đăng ký.",
          "Giá gốc: 110.000 VNĐ.",
          "Giá khuyến mãi: 104.500 VNĐ (giảm 5%)."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi Ích Khi Đăng Ký Gói KS110",
        "paragraphs": [
          "Dung lượng cực lớn: 36GB, đáp ứng nhu cầu sử dụng internet liên tục trong 30 ngày.",
          "Giá tiết kiệm: Chỉ 104.500đ sau khi giảm 5%.",
          "Đăng ký nhanh chóng: Thao tác dễ dàng qua ứng dụng Viettel Money.",
          "Tốc độ cao, kết nối ổn định: Phù hợp với các nhu cầu xem video, học online, làm việc, hoặc giải trí trực tuyến."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS110 Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS110.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 104.500đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Ai Nên Sử Dụng Gói KS110?",
        "paragraphs": [
          "Người dùng có nhu cầu sử dụng internet lớn hàng tháng, phục vụ cho công việc, học tập hoặc giải trí.",
          "Những ai cần kết nối ổn định để xem video, chơi game trực tuyến, hoặc họp trực tuyến."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Mọi thắc mắc, vui lòng liên hệ tổng đài Viettel qua số 18009000 (miễn phí).",
          "Đăng ký ngay gói KS110 để tận hưởng 36GB tốc độ cao chỉ với 104.500đ!!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS110"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0094.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 289e54bf82499876a53cf556502404da11150fe578f3412c9f058028cec84197",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS110",
      "code": "KS110",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS145": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS145 Viettel Money: 66GB Dùng Trong 30 Ngày, Giá Chỉ 137.750đ",
    "description": "Đăng ký gói KS145 trên Viettel Money để nhận ngay 66GB data tốc độ cao sử dụng trong 30 ngày. Giá ưu đãi chỉ 137.750đ sau khuyến mãi 5%.",
    "heading": "Gói cước Viettel KS145",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS145 trên ứng dụng Viettel Money là giải pháp hoàn hảo cho những ai cần dung lượng internet cực lớn hàng tháng. Với 66GB tốc độ cao, bạn có thể thoải mái truy cập internet suốt 30 ngày mà không lo gián đoạn."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS145",
        "paragraphs": [
          "Dung lượng: 66GB tốc độ cao.",
          "Thời gian sử dụng: 30 ngày kể từ ngày đăng ký.",
          "Giá gốc: 145.000 VNĐ.",
          "Giá khuyến mãi: 137.750 VNĐ (giảm 5%).",
          "Lợi Ích Khi Đăng Ký Gói KS145",
          "Dung lượng cực lớn: 66GB, đáp ứng mọi nhu cầu học tập, làm việc và giải trí trong 30 ngày.",
          "Giá siêu tiết kiệm: Chỉ 137.750đ sau khuyến mãi 5%.",
          "Đăng ký tiện lợi: Thực hiện nhanh chóng trên ứng dụng Viettel Money.",
          "Kết nối ổn định: Tốc độ cao phù hợp với nhu cầu họp trực tuyến, xem video 4K, chơi game hoặc lướt web."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS145 Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS145.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 137.750đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Ai Nên Sử Dụng Gói KS145?",
        "paragraphs": [
          "Người dùng có nhu cầu sử dụng internet dung lượng lớn mỗi tháng.",
          "Những ai làm việc online, xem phim, học tập trực tuyến hoặc giải trí cần kết nối tốc độ cao và ổn định."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Mọi thắc mắc, vui lòng liên hệ tổng đài Viettel Money qua số 18009000 (miễn phí).",
          "Đăng ký ngay gói KS145 để trải nghiệm 66GB data tốc độ cao chỉ với 137.750đ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS145"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0095.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: ff218a718fa34352cf517d19a11d4387ee89b5c9731bae5960e9d205b89a2be3",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS145",
      "code": "KS145",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS165": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS165 Viettel Money: 90GB Dùng Trong 30 Ngày, Giá Chỉ 156.750đ",
    "description": "Đăng ký gói KS165 trên Viettel Money để nhận ngay 90GB data tốc độ cao sử dụng trong 30 ngày. Giá ưu đãi chỉ 156.750đ sau khuyến mãi 5%.",
    "heading": "Gói cước Viettel KS165",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS165 trên ứng dụng Viettel Money là lựa chọn tối ưu cho những ai cần dung lượng internet khủng hàng tháng. Với 90GB tốc độ cao, bạn sẽ thoải mái lướt web, làm việc và giải trí suốt 30 ngày mà không lo hết dung lượng."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS165",
        "paragraphs": [
          "Dung lượng: 90GB tốc độ cao.",
          "Thời gian sử dụng: 30 ngày kể từ ngày đăng ký.",
          "Giá gốc: 165.000 VNĐ.",
          "Giá khuyến mãi: 156.750 VNĐ (giảm 5%)."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi Ích Khi Đăng Ký Gói KS165",
        "paragraphs": [
          "Dung lượng khổng lồ: 90GB đáp ứng mọi nhu cầu làm việc, học tập và giải trí.",
          "Tiết kiệm chi phí: Giá chỉ 156.750đ sau khuyến mãi 5%.",
          "Đăng ký nhanh chóng: Thao tác dễ dàng trên ứng dụng Viettel Money.",
          "Kết nối mượt mà: Tốc độ cao lý tưởng để xem video 4K, họp trực tuyến, chơi game hoặc tải dữ liệu lớn."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS165 Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS165.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 156.750đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Ai Nên Sử Dụng Gói KS165?",
        "paragraphs": [
          "Người dùng cần internet dung lượng lớn cho công việc và giải trí.",
          "Những ai thường xuyên xem phim, học tập trực tuyến, chơi game hoặc lướt web tốc độ cao."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Mọi thắc mắc, vui lòng liên hệ tổng đài Viettel Money qua số 18009000 (miễn phí)",
          "Đăng ký ngay gói KS165 để trải nghiệm 90GB tốc độ cao với giá chỉ 156.750đ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS165"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0096.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 5344a8d3a723ec3365b5045a5fbd3db450aab490acde803588aed8eacb7a2124",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS165",
      "code": "KS165",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS2H": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS2H Viettel Money: 1,2GB Dùng Trong 2 Giờ, Giá Chỉ 5.700đ",
    "description": "Đăng ký gói KS2H trên Viettel Money để nhận ngay 1,2GB tốc độ cao trong 2 giờ. Giá siêu rẻ chỉ 5.700đ sau khuyến mãi 5%. Truy cập nhanh chóng, tiện lợi!",
    "heading": "Gói cước Viettel KS2H",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS2H trên ứng dụng Viettel Money là lựa chọn hoàn hảo cho người dùng cần data tốc độ cao trong thời gian ngắn. Với 1,2GB dữ liệu, bạn thoải mái lướt web, xem video, học tập hoặc làm việc trực tuyến chỉ trong 2 giờ sử dụng."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS2H",
        "paragraphs": [
          "Dung lượng: 1,2GB tốc độ cao.",
          "Thời gian sử dụng: 2 giờ kể từ khi kích hoạt.",
          "Giá gốc: 6.000 VNĐ.",
          "Giá khuyến mãi: 5.700 VNĐ (giảm 5%)."
        ]
      },
      {
        "type": "text",
        "heading": "Ưu Điểm Của Gói KS2H",
        "paragraphs": [
          "Giá cực rẻ: Chỉ từ 5.700đ, phù hợp cho mọi đối tượng người dùng.",
          "Dung lượng lớn trong thời gian ngắn: Đảm bảo trải nghiệm mượt mà, không lo gián đoạn.",
          "Đăng ký dễ dàng: Chỉ vài thao tác đơn giản trên ứng dụng Viettel Money.",
          "Tốc độ cao: Duy trì ổn định cho các nhu cầu học tập, làm việc và giải trí."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS2H Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS2H.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 5.700đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Ai Nên Sử Dụng Gói Cước KS2H?",
        "paragraphs": [
          "Người dùng cần data ngắn hạn để họp trực tuyến, học online, hoặc xử lý công việc gấp.",
          "Phù hợp cho các bạn trẻ muốn xem phim, lướt TikTok, hoặc tra cứu thông tin trong thời gian ngắn."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Nếu cần hỗ trợ hoặc giải đáp thắc mắc về gói cước KS2H, liên hệ tổng đài Viettel Money qua số 18009000 (miễn phí).",
          "Đăng ký ngay gói KS2H để trải nghiệm dung lượng tốc độ cao với giá siêu rẻ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS2H"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0097.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 7b63a8ca37fa6730938b3065335cbce6e71125d6ab328a69eaa263b9cfd1e725",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS2H",
      "code": "KS2H",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS6H": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS6H Viettel Money: 3GB Dùng Trong 6 Giờ, Giá Chỉ 9.500đ",
    "description": "Nhận ngay 3GB data tốc độ cao dùng trong 6 giờ với gói KS6H trên Viettel Money. Giá siêu ưu đãi chỉ 9.500đ sau khuyến mãi 5%. Đăng ký dễ dàng, sử dụng tiện lợi!",
    "heading": "Gói cước Viettel KS6H",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS6H trên ứng dụng Viettel Money là giải pháp tối ưu cho người dùng cần data tốc độ cao trong 6 giờ. Với dung lượng 3GB, bạn thoải mái làm việc, học tập, hoặc giải trí trực tuyến với mức giá cực kỳ tiết kiệm."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS6H",
        "paragraphs": [
          "Dung lượng: 3GB tốc độ cao.",
          "Thời gian sử dụng: 6 giờ kể từ khi kích hoạt.",
          "Giá gốc: 10.000 VNĐ.",
          "Giá khuyến mãi: 9.500 VNĐ (giảm 5%).",
          "Lý Do Chọn Gói KS6H",
          "Giá rẻ bất ngờ: Chỉ từ 9.500đ cho 3GB tốc độ cao.",
          "Dung lượng lớn, thời gian dài: Đáp ứng mọi nhu cầu sử dụng trong 6 giờ liên tục.",
          "Dễ đăng ký, nhanh chóng: Chỉ vài thao tác đơn giản trên ứng dụng Viettel Money.",
          "Tốc độ cao, ổn định: Phù hợp cho làm việc online, học trực tuyến, xem video HD không gián đoạn."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS6H Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS6H.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 9.500đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Đối Tượng Phù Hợp",
        "paragraphs": [
          "Người cần sử dụng dung lượng lớn trong thời gian ngắn, phù hợp cho công việc, học tập, hoặc giải trí.",
          "Những ai thường xuyên xem phim, lướt mạng xã hội, chơi game trực tuyến."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Nếu cần trợ giúp hoặc thông tin thêm, hãy liên hệ tổng đài Viettel Money qua số 18009000 (miễn phí).",
          "Đăng ký gói KS6H ngay hôm nay để trải nghiệm 3GB tốc độ cao chỉ với 9.500đ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS6H"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0098.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: a52bd912762b41506c33036d26337d4f614e389af9fb387a44d9495a2b09da11",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS6H",
      "code": "KS6H",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS8": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS8 Viettel Money: 1.5GB Dùng Trong Ngày, Giá Chỉ 7.600đ",
    "description": "Đăng ký gói KS8 trên Viettel Money để nhận 1.5GB tốc độ cao dùng trong 1 ngày. Giá siêu rẻ chỉ 7.600đ sau khuyến mãi 5%. Truy cập internet nhanh chóng, tiện lợi!",
    "heading": "Gói cước Viettel KS8",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS8 trên ứng dụng Viettel Money là lựa chọn lý tưởng cho người dùng cần data tốc độ cao trong 1 ngày. Với dung lượng 1.5GB, bạn thoải mái lướt web, xem video, hoặc làm việc trực tuyến với mức giá siêu tiết kiệm."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS8",
        "paragraphs": [
          "Dung lượng: 1.5GB tốc độ cao.",
          "Thời gian sử dụng: Trong ngày (đến 23:59 ngày đăng ký).",
          "Giá gốc: 8.000 VNĐ.",
          "Giá khuyến mãi: 7.600 VNĐ (giảm 5%)."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi Ích Khi Đăng Ký Gói KS8",
        "paragraphs": [
          "Giá siêu rẻ: Chỉ từ 7.600đ cho 1.5GB data trong 1 ngày.",
          "Dung lượng lớn: Đáp ứng mọi nhu cầu sử dụng, từ làm việc đến giải trí.",
          "Dễ đăng ký: Thao tác đơn giản qua ứng dụng Viettel Money.",
          "Tốc độ cao, ổn định: Phù hợp để xem video HD, chơi game online, hoặc học tập trực tuyến."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS8 Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS8.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 7.600đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Ai Nên Sử Dụng Gói KS8?",
        "paragraphs": [
          "Người dùng cần data trong ngày để giải quyết công việc hoặc giải trí tức thời.",
          "Phù hợp cho những ai cần kết nối mạng ổn định để lướt mạng xã hội, xem phim hoặc chơi game trong ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Nếu cần hỗ trợ, hãy liên hệ tổng đài Viettel Money qua số 18009000 (miễn phí)",
          "Đăng ký ngay gói KS8 để trải nghiệm 1.5GB tốc độ cao với giá siêu tiết kiệm chỉ 7.600đ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS8"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0099.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 5a151a48ae7f5f5a670a9e84356896de335405acfb7f2331e859ce86c56d0aa6",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS8",
      "code": "KS8",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS12": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS12 Viettel Money: 2.5GB Dùng Trong Ngày, Giá Chỉ 11.400đ",
    "description": "Nhận ngay 2.5GB data tốc độ cao dùng trong ngày với gói KS12 trên Viettel Money. Giá ưu đãi chỉ 11.400đ sau khuyến mãi 5%. Đăng ký nhanh chóng, tiện lợi!",
    "heading": "Gói cước Viettel KS12",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS12 trên ứng dụng Viettel Money mang đến 2.5GB data tốc độ cao sử dụng trong ngày với mức giá siêu tiết kiệm. Đây là lựa chọn hoàn hảo cho những ai cần dung lượng lớn để làm việc, học tập, hoặc giải trí trong ngày."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS12",
        "paragraphs": [
          "Dung lượng: 2.5GB tốc độ cao.",
          "Thời gian sử dụng: Trong ngày (đến 23:59 ngày đăng ký).",
          "Giá gốc: 12.000 VNĐ.",
          "Giá khuyến mãi: 11.400 VNĐ (giảm 5%).",
          "Lợi Ích Khi Đăng Ký Gói KS12",
          "Dung lượng lớn: 2.5GB thoải mái sử dụng cho các nhu cầu trực tuyến.",
          "Giá ưu đãi hấp dẫn: Chỉ 11.400đ sau khi giảm 5%.",
          "Tiện lợi: Đăng ký dễ dàng trên ứng dụng Viettel Money.",
          "Tốc độ cao, ổn định: Phù hợp cho làm việc online, xem phim HD, chơi game trực tuyến."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS12 Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS12.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 11.400đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Đối Tượng Phù Hợp Với Gói KS12",
        "paragraphs": [
          "Người dùng cần data tốc độ cao trong ngày để giải quyết công việc, học tập, hoặc giải trí.",
          "Những ai thường xuyên sử dụng mạng xã hội, xem video HD, hoặc chơi game online."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Nếu cần hỗ trợ thêm thông tin, liên hệ ngay tổng đài Viettel Money qua số 18009000 (miễn phí).",
          "Đăng ký gói KS12 ngay hôm nay để trải nghiệm 2.5GB tốc độ cao với giá ưu đãi chỉ 11.400đ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS12"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0100.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: cc26379db76992e0ecd5d494fbf9219e59281d741f5eb0d26f05d3852f021d61",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS12",
      "code": "KS12",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS20": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS20 Viettel Money: 4GB Dùng Trong 3 Ngày, Giá Chỉ 19.000đ",
    "description": "Đăng ký gói KS20 trên Viettel Money để nhận ngay 4GB data tốc độ cao sử dụng trong 3 ngày. Giá ưu đãi chỉ 19.000đ sau khuyến mãi 5%.",
    "heading": "Gói cước Viettel KS20",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS20 trên ứng dụng Viettel Money là giải pháp hoàn hảo cho những ai cần sử dụng dung lượng lớn trong thời gian ngắn. Với 4GB data tốc độ cao trong 3 ngày, bạn thoải mái lướt web, học tập, giải trí hoặc làm việc trực tuyến với mức giá cực kỳ hấp dẫn."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS20",
        "paragraphs": [
          "Dung lượng: 4GB tốc độ cao.",
          "Thời gian sử dụng: 3 ngày kể từ ngày đăng ký.",
          "Giá gốc: 20.000 VNĐ.",
          "Giá khuyến mãi: 19.000 VNĐ (giảm 5%)."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi Ích Khi Đăng Ký Gói KS20",
        "paragraphs": [
          "Dung lượng lớn: 4GB tốc độ cao, đáp ứng mọi nhu cầu sử dụng trong 3 ngày.",
          "Giá ưu đãi hấp dẫn: Chỉ 19.000đ sau khi giảm 5%.",
          "Đăng ký dễ dàng: Chỉ cần vài thao tác trên ứng dụng Viettel Money.",
          "Kết nối ổn định: Phù hợp cho làm việc, học tập, giải trí trực tuyến mà không lo gián đoạn."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS20 Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS20.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 19.000đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Ai Nên Đăng Ký Gói KS20?",
        "paragraphs": [
          "Người dùng có nhu cầu sử dụng data liên tục trong 3 ngày, như đi công tác, du lịch, hoặc học tập ngắn hạn.",
          "Những ai cần kết nối internet ổn định để xem video, học online, hoặc giải trí trực tuyến."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Nếu có thắc mắc hoặc cần hỗ trợ, vui lòng liên hệ tổng đài Viettel Money qua số 18009000 (miễn phí).",
          "Đăng ký ngay gói KS20 và tận hưởng 4GB data tốc độ cao chỉ với 19.000đ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS20"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0101.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 2feb5d1e9e6704ce95273baa77cb7e5eec2bfa22553ccb96a3ee18d0c9c60dd7",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS20",
      "code": "KS20",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/KS36": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước KS36 Viettel Money: 8GB Dùng Trong 7 Ngày, Giá Chỉ 34.000đ",
    "description": "Đăng ký gói KS36 trên Viettel Money để nhận ngay 8GB data tốc độ cao sử dụng trong 7 ngày. Giá khuyến mãi chỉ 34.000đ sau giảm 5%.",
    "heading": "Gói cước Viettel KS36",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói cước KS36 trên ứng dụng Viettel Money cung cấp 8GB data tốc độ cao, thoải mái sử dụng trong 7 ngày với giá cực kỳ tiết kiệm. Đây là lựa chọn lý tưởng để bạn kết nối internet ổn định, đáp ứng mọi nhu cầu công việc, học tập và giải trí."
        ]
      },
      {
        "type": "text",
        "heading": "Chi Tiết Gói Cước KS36",
        "paragraphs": [
          "Dung lượng: 8GB tốc độ cao.",
          "Thời gian sử dụng: 7 ngày kể từ ngày đăng ký.",
          "Giá gốc: 36.000 VNĐ.",
          "Giá khuyến mãi: 34.000 VNĐ (giảm 5%)."
        ]
      },
      {
        "type": "text",
        "heading": "Lợi Ích Khi Đăng Ký Gói KS36",
        "paragraphs": [
          "Dung lượng lớn: 8GB thoải mái sử dụng trong 7 ngày.",
          "Tiết kiệm chi phí: Giá ưu đãi chỉ 34.000đ sau khi giảm 5%.",
          "Tiện lợi: Đăng ký dễ dàng ngay trên ứng dụng Viettel Money.",
          "Kết nối ổn định: Phù hợp với các nhu cầu online như làm việc, học tập, xem phim, chơi game."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng Dẫn Đăng Ký Gói KS36 Trên Viettel Money",
        "paragraphs": [
          "Huong-dan-dang-ky-goi-cuoc-viettel-money",
          "Bước 1: Mở app Viettel Money vào mục Viễn Thông chọn mua Data 4G/5G.",
          "Bược 2: Chọn gói cước phù hợp với nhu cầu của bạn.",
          "Bước 3: Tìm và chọn gói KS36.",
          "Xác nhận thanh toán với giá khuyến mãi chỉ 34.000đ.",
          "Hoàn tất, sử dụng ngay!"
        ]
      },
      {
        "type": "text",
        "heading": "Ai Nên Sử Dụng Gói KS36?",
        "paragraphs": [
          "Người dùng có nhu cầu sử dụng internet thường xuyên trong tuần, như làm việc, học online, hoặc giải trí.",
          "Người cần dung lượng lớn để xem video, chơi game hoặc thực hiện các hoạt động trực tuyến khác."
        ]
      },
      {
        "type": "text",
        "heading": "Liên Hệ Hỗ Trợ",
        "paragraphs": [
          "Mọi thắc mắc, vui lòng liên hệ tổng đài Viettel Money qua số 18009000 (miễn phí).",
          "Đăng ký ngay gói KS36 để tận hưởng 8GB data tốc độ cao chỉ với 34.000đ!"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/KS36"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0102.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation",
        "Some inline media assets have no verified local registry mapping"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 7c6e3883d2a2f8ed89bb46c4d4117c9ffae63a6d21430cbe0fef9cb2dff6ae45",
        "Template: mobile_detail.prepaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation.",
        "Unmapped original article/detail media preserved in data/content/source-capture-171.json."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/KS36",
      "code": "KS36",
      "subscription": "general"
    }
  },
  "/goi-cuoc-viettel/tra-sau/MXH120": {
    "status": "draft",
    "kind": "package",
    "title": "Gói Cước Trả Sau MXH120 Viettel - 30GB Data + Miễn Phí Mạng Xã Hội, Chỉ 120K/tháng",
    "description": "Gói Cước Trả Sau MXH120 Viettel - 30GB Data + Miễn Phí Mạng Xã Hội, Chỉ 120K/tháng",
    "heading": "Gói cước Viettel trả sau MXH120",
    "sections": [
      {
        "type": "text",
        "heading": "1. Thông tin chi tiết gói cước MXH120 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng data: 1GB/ngày",
          "Dung lượng data: 30GB/30 ngày"
        ]
      },
      {
        "type": "list",
        "heading": "Ưu đãi",
        "ordered": false,
        "items": [
          "Miễn phí data TikTok, YouTube, Facebook, Facebook Messenger",
          "Miễn phí gọi nội mạng dưới 10 phút/cuộc",
          "30 phút gọi ngoại mạng/tháng",
          "30 SMS trong nước"
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/MXH120"),
      "capturedAt": "2026-10-27T13:13:06+07:00",
      "evidencePaths": [
        "data/sources/ref-01/archetypes.json",
        "reference-clone/raw/ref-01/package-postpaid-MXH120.txt"
      ],
      "verifiedFields": [
        "page title",
        "H1",
        "price and cycle",
        "data allowance",
        "H2 headings",
        "visible CTA text"
      ],
      "unverifiedFields": [
        "HTTP status / redirect chain",
        "final rendered DOM / live CTA handling",
        "meta description",
        "CTA contact destination",
        "package-specific postpaid terms",
        "direct status/redirect",
        "complete original prose",
        "related-package cards",
        "media src"
      ],
      "notes": [
        "Source was a bounded public text extraction; not original HTML and not a complete DOM capture.",
        "Observed H2 sequence: 1. Thông tin chi tiết gói cước MXH120 trả sau Viettel | 2. Đăng ký gói cước MXH120 hoặc chuyển đổi SIM sang trả sau | 3. Lợi ích khi sử dụng SIM trả sau Viettel | 4. Lưu ý khi sử dụng SIM trả sau Viettel | 5. Hướng dẫn thanh toán cước trả sau Viettel | Gói cước tương tự"
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/MXH120",
      "code": "MXH120",
      "subscription": "postpaid",
      "price": {
        "amountVND": 120000,
        "sourceLabel": "120.000đ",
        "cycle": {
          "quantity": 1,
          "unit": "month",
          "label": "1 tháng"
        }
      },
      "dataAllowances": [
        {
          "value": 1,
          "unit": "GB",
          "period": "day",
          "sourceLabel": "1GB/ngày"
        },
        {
          "value": 30,
          "unit": "GB",
          "period": "30 ngày",
          "sourceLabel": "30GB/30 ngày"
        }
      ],
      "benefits": [
        "Miễn phí data TikTok, YouTube, Facebook, Facebook Messenger",
        "Miễn phí gọi nội mạng dưới 10 phút/cuộc",
        "30 phút gọi ngoại mạng/tháng",
        "30 SMS trong nước"
      ]
    }
  },
  "/goi-cuoc-viettel/tra-sau/MXH150": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau Viettel MXH150 miễn phí data truy cập TikTok, Youtube, Facebook, Messenger",
    "description": "Đăng ký gói cước MXH150 chỉ với 150.000đ/tháng nhận ngay 45GB(1.5GB/ngày) và quyền lợi miễn phí truy cập Mạng xã hội. Miễn phí gọi. Miễn phí SMS.",
    "heading": "Gói cước Viettel trả sau MXH150",
    "sections": [
      {
        "type": "text",
        "paragraphs": [
          "Gói MXH150 là sự lựa chọn hoàn hảo cho người dùng trả sau với nhiều ưu đãi vượt trội"
        ]
      },
      {
        "type": "text",
        "heading": "1. Thông tin chi tiết gói cước MXH150 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 150.000 VNĐ/tháng",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 45GB (1.5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 100% data tốc độ cao khi truy cập TikTok, YouTube, Facebook, và Facebook Messenger (không bị trừ vào 45GB data đi kèm).",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
          "Miễn phí 50 SMS trong nước."
        ]
      },
      {
        "type": "text",
        "heading": "2. Đăng ký gói cước MXH150 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "3. Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "4. Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "5. Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": [
          "Thanh toán qua ứng dụng My Viettel",
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết.",
          "ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
          "Thanh toán qua ứng dụng Viettel Money",
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/MXH150"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0104.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 662305b12b9224de41a434ad553172ef93b2ee0d3c8977c0673ad28df3f109d4",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/MXH150",
      "code": "MXH150",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/MXH200": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau Viettel MXH200 4GB/ngày + miễn phí data truy cập TikTok, Youtube, Facebook, Messenger",
    "description": "MXH200 - Gói cước trả sau Viettel chỉ 200.000đ/tháng nhận ngay 120GB(4GB/ngày) và quyền lợi miễn phí truy cập Mạng xã hội. Miễn phí gọi. Miễn phí SMS.",
    "heading": "Gói cước Viettel trả sau MXH200",
    "sections": [
      {
        "type": "text",
        "heading": "1. Thông tin chi tiết gói cước MXH200 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 200.000 VNĐ/tháng",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 120GB (4GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 100% data tốc độ cao khi truy cập TikTok, YouTube, Facebook, và Facebook Messenger (không bị trừ vào 120GB data đi kèm).",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
          "Miễn phí 100 SMS trong nước."
        ]
      },
      {
        "type": "text",
        "heading": "2. Đăng ký gói cước MXH200 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "3. Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "4. Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "5. Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": [
          "Thanh toán qua ứng dụng My Viettel",
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết.",
          "ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
          "Thanh toán qua ứng dụng Viettel Money",
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/MXH200"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0105.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 91e99e5cd5f7097bb290c44f7a531227e965281cc342c481791087a5544e87b0",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/MXH200",
      "code": "MXH200",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/MXH250": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau Viettel MXH250 5GB/ngày + miễn phí data truy cập TikTok, Youtube, Facebook, Messenger",
    "description": "Đăng ký gói cước MXH250 chỉ 250.000đ/tháng nhận ngay 150GB(5GB/ngày) và quyền lợi miễn phí truy cập Mạng xã hội. Miễn phí gọi. Miễn phí SMS.",
    "heading": "Gói cước Viettel trả sau MXH250",
    "sections": [
      {
        "type": "text",
        "heading": "1. Thông tin chi tiết gói cước MXH250 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 250.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 150GB (5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 100% data tốc độ cao khi truy cập TikTok, YouTube, Facebook, và Facebook Messenger (không bị trừ vào 150GB data đi kèm).",
          "Miễn phí cuộc gọi nội mạng dưới 10 phút và 50 phút gọi ngoại mạng.",
          "Miễn phí 150 SMS trong nước."
        ]
      },
      {
        "type": "text",
        "heading": "2. Đăng ký gói cước MXH250 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "3. Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "4. Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "5. Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": [
          "Thanh toán qua ứng dụng My Viettel",
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết.",
          "ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
          "Thanh toán qua ứng dụng Viettel Money",
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/MXH250"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0106.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 32d1b9eed885d0375ebafe074a2bc55c0448badc793273126125281ca7b2fd78",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/MXH250",
      "code": "MXH250",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/V120K": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau Viettel V120K: 120.000đ/Tháng nhận 1.5GB/ngày, Miễn Phí Gọi.",
    "description": "Đăng ký gói V120K chỉ 120.000đ/tháng, nhận 1.5GB/ngày, miễn phí 20 phút/cuộc gọi nội mạng, 50 phút gọi ngoại mạng. Thoải mái lướt web và gọi điện không lo phí!",
    "heading": "Gói cước Viettel trả sau V120K",
    "sections": [
      {
        "type": "text",
        "heading": "1. Thông tin chi tiết gói cước V120K trả sau Viettel",
        "paragraphs": [
          "Cước phí: 120.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 45GB (1.5GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 20 phút mỗi cuộc gọi nội mạng",
          "Miễn phí 50 phút gọi ngoại mạng"
        ]
      },
      {
        "type": "text",
        "heading": "2. Đăng ký gói cước V120K hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "3. Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "4. Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "5. Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": [
          "Thanh toán qua ứng dụng My Viettel",
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
          "Thanh toán qua ứng dụng Viettel Money",
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/V120K"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0107.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 3a09a7d74846c18e3ac47ddabb875ae5eabbd0b74a89d4c277310efc95758438",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/V120K",
      "code": "V120K",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/V160X": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau V160X: 160.000đ/Tháng, 4GB/Ngày, Miễn Phí Gọi & SMS",
    "description": "Đăng ký gói V160X với 160.000đ/tháng, nhận 4GB/ngày, miễn phí 20 phút/cuộc gọi nội mạng, 60 phút gọi ngoại mạng và 60 SMS nội mạng. Ưu đãi cực hấp dẫn!",
    "heading": "Gói cước Viettel trả sau V160X",
    "sections": [
      {
        "type": "text",
        "heading": "1. Thông tin chi tiết gói cước V160X trả sau Viettel",
        "paragraphs": [
          "Cước phí: 160.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 120GB (4GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 20 phút mỗi cuộc gọi nội mạng",
          "Miễn phí 50 phút gọi ngoại mạng",
          "Miễn phí 60 SMS nội mạng"
        ]
      },
      {
        "type": "text",
        "heading": "2. Đăng ký gói cước V160X hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "3. Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "4. Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "5. Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": [
          "Thanh toán qua ứng dụng My Viettel",
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
          "Thanh toán qua ứng dụng Viettel Money",
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/V160X"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0108.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: c8593823c478b3b292e6bbdb7ef12b32d6f56a967b7185e603f569e22c353267",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/V160X",
      "code": "V160X",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/V180X": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau V180X: 180.000đ/Tháng, 6GB/Ngày, Miễn Phí Gọi Hấp Dẫn",
    "description": "Đăng ký gói V180X với 180.000đ/tháng, nhận 6GB/ngày, miễn phí 10 phút/cuộc gọi nội mạng và 100 phút gọi ngoại mạng. Truy cập và liên lạc cực tiện lợi!",
    "heading": "Gói cước Viettel trả sau V180X",
    "sections": [
      {
        "type": "text",
        "heading": "1. Thông tin chi tiết gói cước V180X trả sau Viettel",
        "paragraphs": [
          "Cước phí: 180.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 180GB (6GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí 10 phút mỗi cuộc gọi nội mạng",
          "Miễn phí 100 phút gọi ngoại mạng"
        ]
      },
      {
        "type": "text",
        "heading": "2. Đăng ký gói cước V180X hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "3. Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "4. Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "5. Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": [
          "Thanh toán qua ứng dụng My Viettel",
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch.",
          "Thanh toán qua ứng dụng Viettel Money",
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/V180X"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0109.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 58761635c9c1484f1e0fe5e81dff96278ed5eba81d395aa89d85e030130f0a01",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/V180X",
      "code": "V180X",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N200": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N200 chỉ 200k/tháng nhận 8GB/ngày. Miễn phí data Youtube, Spotify.",
    "description": "N200 - Dung lượng 240GB (8GB/ngày). Miễn phí Youtube, Spotify. Miễn phí gọi. Miễn phí SMS. Chỉ 200k/tháng.",
    "heading": "Gói cước Viettel trả sau N200",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N200 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 200.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 240GB (8GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube (tối đa 50GB) và Spotify (tối đa 30GB).",
          "Miễn phí cuộc gọi nội mạng dưới 20 phút và 150 phút gọi ngoại mạng.",
          "Miễn phí 100 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan)."
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N200",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N200 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn voucher: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (tối đa 02 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N200)",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "1. Sử dụng Voucher Phòng chờ",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Khách hàng cung cấp số điện thoại đăng ký gói N200 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được chấp nhận sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "heading": "2. Sử dụng Voucher Đón tiễn sân bay",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel chủ động liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N200, không chuyển nhượng.",
          "Số lượt còn lại chỉ tính các lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N200 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại nine.vietteltelecom.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết.",
          "ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N200"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0110.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 373c628efa03854a7beaf7abf8d67259146f4a28658b72b896cf728811648ff5",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N200",
      "code": "N200",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N250": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N250 chỉ 250k/tháng nhận 10GB/ngày. Miễn phí data Youtube, Spotify.",
    "description": "N250 - Dung lượng 300GB (10GB/ngày). Miễn phí Youtube, Spotify. Miễn phí gọi. Miễn phí SMS. Chỉ 250k/tháng.",
    "heading": "Gói cước Viettel trả sau N250",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N250 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 250.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 300GB (10GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube (tối đa 50GB) và Spotify (tối đa 30GB).",
          "Miễn phí cuộc gọi nội mạng dưới 30 phút và 150 phút gọi ngoại mạng.",
          "Miễn phí 150 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan)."
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N250",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N250 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn voucher: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (tối đa 02 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N250)",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "1. Sử dụng Voucher Phòng chờ",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Khách hàng cung cấp số điện thoại đăng ký gói N250 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "heading": "2. Sử dụng Voucher Đón tiễn sân bay",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N250, không chuyển nhượng.",
          "Số lượt còn lại được tính theo số lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N250 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại nine.vietteltelecom.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết.",
          "ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N250"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0111.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 90c97168d9928737f4c36d75e09239b605747e9963f8fca392badc51cf270677",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N250",
      "code": "N250",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N300": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N300 chỉ 300k/tháng nhận 12GB/ngày. Miễn phí data Youtube, Spotify, Facebook, TikTok",
    "description": "N300 - Dung lượng 360GB (12GB/ngày). Miễn phí Youtube, Spotify, Facebook, TikTok. Miễn phí gọi. Miễn phí SMS. Chỉ 300k/tháng.",
    "heading": "Gói cước Viettel trả sau N300",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N300 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 300.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 360GB (12GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)",
          "Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi ngoại mạng.",
          "Miễn phí 200 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan).",
          "(*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook, TikTok (tối đa 50GB/ứng dụng)."
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N300",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N300 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn voucher: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (tối đa 02 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N300)",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "1. Sử dụng Voucher Phòng chờ",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Khách hàng cung cấp số điện thoại đăng ký gói N300 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "heading": "2. Sử dụng Voucher Đón tiễn sân bay",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N300, không chuyển nhượng.",
          "Số lượt còn lại được tính theo các lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N300 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết.",
          "ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N300"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0112.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 8095ec45a89d4f9908244d70c73cbf8e53b82fe85935c6e50cac26ba3e6c3595",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N300",
      "code": "N300",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N350": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N350 350k/tháng nhận 15GB/ngày. Miễn phí data Youtube, Spotify, Facebook, TikTok",
    "description": "N350 - Dung lượng 450GB (15GB/ngày). Miễn phí Youtube, Spotify, Facebook, TikTok. Miễn phí gọi. Miễn phí SMS. Chỉ 350k/tháng.",
    "heading": "Gói cước Viettel trả sau N350",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N350 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 350.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 450GB (15GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)",
          "Miễn phí cuộc gọi nội mạng dưới 60 phút và 200 phút gọi ngoại mạng.",
          "Miễn phí 200 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan).",
          "(*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook, TikTok (tối đa 50GB/ứng dụng)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N350",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N350 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn voucher: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (tối đa 02 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N350)",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "1. Sử dụng Voucher Phòng chờ",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Khách hàng cung cấp số điện thoại đăng ký gói N350 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "heading": "2. Sử dụng Voucher Đón tiễn sân bay",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N350, không chuyển nhượng.",
          "Số lượt còn lại chỉ tính các lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N350 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại nine.vietteltelecom.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N350"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0113.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: b8652df9ac63d0289e9510f72fd8620fd22a477b52a4ceb8c52b97894711aed8",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N350",
      "code": "N350",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N400": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N400 400k/tháng nhận 17GB/ngày. Miễn phí data Youtube, Spotify, Facebook, TikTok",
    "description": "N400 - Dung lượng 510GB (17GB/ngày). Miễn phí Youtube, Spotify, Facebook, TikTok. Miễn phí gọi. Miễn phí SMS. Giá 400k/tháng.",
    "heading": "Gói cước Viettel trả sau N400",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N400 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 400.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 510GB (17GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)",
          "Miễn phí cuộc gọi nội mạng dưới 60 phút và 300 phút gọi ngoại mạng.",
          "Miễn phí 200 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Nhân đổi điểm tích trên Viettel ++.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan).",
          "(*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook, Messenger, TikTok (tối đa 50GB/ứng dụng)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N400",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N400 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn sử dụng: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (tối đa 04 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Nếu thuê bao N400 đồng thời đạt hạng Viettel++ Kim Cương/Vàng, ưu đãi sân bay sẽ hiển thị tại icon VIP (không hiển thị trong gói NINE)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N400)",
        "paragraphs": [
          "1. Sử dụng Voucher Phòng chờ"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Cung cấp số điện thoại đăng ký gói N400 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "2. Sử dụng Voucher Đón tiễn sân bay"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Ghi chú quan trọng:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N400, không chuyển nhượng.",
          "Số lượt còn lại chỉ tính các lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N400 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại nine.vietteltelecom.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N400"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0114.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 8422fdd193f82f4b63b7cb8c9b9bc5bbea3ffaeff126a119a0f2f03178cfca3e",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N400",
      "code": "N400",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N500": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N500 500k/tháng nhận 20GB/ngày. Miễn phí data Youtube, Spotify, Facebook, TikTok",
    "description": "N500 - Dung lượng 600GB (20GB/ngày). Miễn phí Youtube, Spotify, Facebook, TikTok. Miễn phí gọi. Miễn phí SMS. Giá 500k/tháng.",
    "heading": "Gói cước Viettel trả sau N500",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N500 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 500.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 600GB (20GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)",
          "Miễn phí cuộc gọi nội mạng dưới 60 phút và 300 phút gọi ngoại mạng.",
          "Miễn phí 250 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Nhân đổi điểm tích trên Viettel ++.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan).",
          "(*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook, Messenger, TikTok (tối đa 50GB/ứng dụng)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N500",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N500 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn sử dụng: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (tối đa 04 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Nếu thuê bao N500 đồng thời đạt hạng Viettel++ Kim Cương/Vàng, ưu đãi sân bay sẽ hiển thị tại icon VIP (không hiển thị trong gói NINE)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N500)",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "1. Sử dụng Voucher Phòng chờ",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Khách hàng cung cấp số điện thoại đăng ký gói N500 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "heading": "2. Sử dụng Voucher Đón tiễn sân bay",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Ghi chú:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N500, không chuyển nhượng.",
          "Số lượt còn lại được tính theo các lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N500 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại viettel.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N500"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0115.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 09c5df902af443459d5f9fa275034f518abb4d41e54bf14bc02a7be8919f7e17",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N500",
      "code": "N500",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N1000": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N1000 1tr/tháng nhận 30GB/ngày. Miễn phí data Youtube, Spotify, Facebook, TikTok",
    "description": "N1000 - Dung lượng 900GB (30GB/ngày). Miễn phí Youtube, Spotify, Facebook, TikTok. Miễn phí gọi. Miễn phí SMS. Giá 1.000.000đ/tháng.",
    "heading": "Gói cước Viettel trả sau N1000",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N1000 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 1.000.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 900GB (30GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)",
          "Miễn phí cuộc gọi nội mạng dưới 60 phút và 300 phút gọi ngoại mạng.",
          "Miễn phí 250 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Nhân đổi điểm tích trên Viettel ++",
          "Ưu tiên xếp hạng sớm Hội viên Vàng khi đóng cước trước 12 tháng.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan).",
          "(*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook, Messenger, TikTok (tối đa 50GB/ứng dụng)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N1000",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N1000 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn sử dụng: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (12 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Nếu thuê bao N1000 đồng thời đạt hạng Viettel++ Kim Cương/Vàng, ưu đãi sân bay sẽ hiển thị tại icon VIP (không hiển thị trong gói NINE)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N1000)",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "1. Sử dụng Voucher Phòng chờ",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Cung cấp số điện thoại đăng ký gói N1000 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "heading": "2. Sử dụng Voucher Đón tiễn sân bay",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Ghi chú:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N1000, không chuyển nhượng.",
          "Số lượt còn lại chỉ tính các lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N1000 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại nine.vietteltelecom.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N1000"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0116.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 2edc2456fb8858ac6157a7d6bfb1a41c66e75267b490148c629f2916a6f7b258",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N1000",
      "code": "N1000",
      "subscription": "postpaid"
    }
  },
  "/goi-cuoc-viettel/tra-sau/N2000": {
    "status": "draft",
    "kind": "package",
    "title": "Gói cước trả sau N2000 2tr/tháng nhận 50GB/ngày. Miễn phí data Youtube, Spotify, Facebook, TikTok",
    "description": "N2000 - Dung lượng 1.500GB (50GB/ngày). Miễn phí Youtube, Spotify, Facebook, TikTok. Miễn phí gọi. Miễn phí SMS. Giá 2.000.000đ/tháng.",
    "heading": "Gói cước Viettel trả sau N2000",
    "sections": [
      {
        "type": "text",
        "heading": "Thông tin chi tiết gói cước N2000 trả sau Viettel",
        "paragraphs": [
          "Cước phí: 2.000.000đ",
          "Thời hạn sử dụng: 1 tháng",
          "Dung lượng: 1.500GB (50GB/ngày)",
          "Ưu đãi đặc biệt:",
          "Miễn phí truy cập Youtube, TikTok, Facebook, Messenger và Spotify (*)",
          "Miễn phí cuộc gọi nội mạng dưới 60 phút và 400 phút gọi ngoại mạng.",
          "Miễn phí 250 SMS trong nước.",
          "Miễn phí xem TV360 gói Basic và dịch vụ thông báo cuộc gọi nhỡ MCA.",
          "Nhân đổi điểm tích trên Viettel ++.",
          "Ưu tiên xếp hạng sớm Hội viên Kim Cương khi đóng cước trước 12 tháng.",
          "Voucher dịch vụ sân bay (phòng chờ thương gia/ ưu tiên check-in hải quan).",
          "(*) Data truy cập ứng dụng Spotify (tối đa 30GB). Youtube, Facebook, Messenger, TikTok (tối đa 50GB/ứng dụng)"
        ]
      },
      {
        "type": "text",
        "heading": "Cách nhận Voucher sân bay gói N2000",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Thuê bao đang sử dụng gói cước N2000 đăng nhập ứng dụng MyViettel.",
          "Chọn icon NINE để nhận voucher phòng chờ hoặc đón tiễn sân bay.",
          "Voucher được lưu tại mục Ưu đãi đã nhận trên MyViettel.",
          "Thời hạn sử dụng: 30 ngày kể từ ngày nhận.",
          "Số lượt ưu đãi: 01 lượt/tháng (12 lượt/năm)."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Lưu ý:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Nếu thuê bao N2000 đồng thời đạt hạng Viettel++ Kim Cương/Vàng, ưu đãi sân bay sẽ hiển thị tại icon VIP (không hiển thị trong gói NINE)."
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn sử dụng Voucher tại sân bay (gói N2000)",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "1. Sử dụng Voucher Phòng chờ",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Cung cấp số điện thoại đăng ký gói N2000 cho lễ tân phòng chờ.",
          "Lễ tân tra cứu voucher trên hệ thống Viettel.",
          "Voucher hợp lệ sẽ được sử dụng ngay."
        ]
      },
      {
        "type": "text",
        "heading": "2. Sử dụng Voucher Đón tiễn sân bay",
        "paragraphs": []
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Trước 01 giờ, nhân viên Viettel liên hệ xác nhận thông tin.",
          "Đối tác thực hiện đón hoặc tiễn tại sân bay theo lịch đã xác nhận.",
          "Sau khi hoàn tất dịch vụ, voucher được ghi nhận là đã sử dụng."
        ]
      },
      {
        "type": "text",
        "paragraphs": [
          "Ghi chú quan trọng:"
        ]
      },
      {
        "type": "list",
        "ordered": false,
        "items": [
          "Voucher chỉ áp dụng cho chính chủ thuê bao gói N2000, không chuyển nhượng.",
          "Số lượt còn lại được tính theo các lượt đã sử dụng thực tế."
        ]
      },
      {
        "type": "text",
        "heading": "Đăng ký gói cước N2000 hoặc chuyển đổi SIM sang trả sau",
        "paragraphs": [
          "Thủ tục đăng ký SIM trả sau Viettel:",
          "Đối với cá nhân: Mang theo bản gốc Chứng minh nhân dân (CMND) hoặc Căn cước công dân (CCCD) đến cửa hàng Viettel gần nhất để làm thủ tục hòa mạng.",
          "Đối với doanh nghiệp: Cần có giấy phép kinh doanh, giấy giới thiệu và CMND/CCCD của người đại diện.",
          "Bạn có thể tham khảo thêm kho sim số trả sau tại nine.vietteltelecom.vn"
        ]
      },
      {
        "type": "text",
        "heading": "Lợi ích khi sử dụng SIM trả sau Viettel",
        "paragraphs": [
          "Tiết kiệm chi phí: Giá cước trả sau thường ưu đãi hơn, đặc biệt khi sử dụng data và gọi thoại nhiều.",
          "Không lo gián đoạn: Thoải mái sử dụng dịch vụ mà không cần nạp tiền trước.",
          "Quản lý chi tiêu dễ dàng: Nhận hóa đơn chi tiết hàng tháng, giúp bạn kiểm soát chi phí hiệu quả.",
          "Ưu đãi độc quyền: Hưởng các chương trình khuyến mãi đặc biệt chỉ dành cho thuê bao trả sau.Thanh toán linh hoạt: Dễ dàng thanh toán qua ứng dụng hoặc các kênh khác."
        ]
      },
      {
        "type": "text",
        "heading": "Lưu ý khi sử dụng SIM trả sau Viettel:",
        "paragraphs": [
          "Kiểm tra cước phí thường xuyên: Để quản lý chi phí hiệu quả và tránh các khoản phí không mong muốn.",
          "Thanh toán đúng hạn: Đảm bảo dịch vụ không bị gián đoạn do chậm thanh toán"
        ]
      },
      {
        "type": "text",
        "heading": "Hướng dẫn thanh toán cước trả sau Viettel",
        "paragraphs": []
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng My Viettel",
        "paragraphs": [
          "Bước 1: Mở ứng dụng My Viettel và đăng nhập tài khoản.",
          "Bước 2: Tại giao diện chính, chọn mục “Thanh toán”.",
          "Bước 3: Chọn phương thức thanh toán:",
          "Thẻ cào: Nhập mã thẻ và xác nhận.",
          "Tài khoản ngân hàng: Sử dụng thẻ ATM hoặc thẻ tín dụng đã liên kết. ViettelPay: Thanh toán qua tài khoản ViettelPay.",
          "Bước 4: Xác nhận thông tin và hoàn tất giao dịch."
        ]
      },
      {
        "type": "text",
        "heading": "Thanh toán qua ứng dụng Viettel Money",
        "paragraphs": [
          "Bước 1: Mở ứng dụng Viettel Money và đăng nhập.",
          "Bước 2: Chọn mục “Viễn thông” → “Nạp tiền điện thoại”.",
          "Bước 3: Chọn dịch vụ “Thanh toán tiền điện thoại trả sau”.",
          "Bước 4: Nhập số điện thoại cần thanh toán và xác nhận thông tin.",
          "Bước 5: Xác nhận giao dịch bằng mật khẩu hoặc mã OTP để hoàn tất.",
          "Lưu ý: Đảm bảo tài khoản Viettel Money hoặc My Viettel của bạn có đủ số dư hoặc liên kết với tài khoản ngân hàng để thanh toán thuận tiện hơn."
        ]
      }
    ],
    "source": {
      "url": siteConfig.url("/goi-cuoc-viettel/tra-sau/N2000"),
      "capturedAt": "2026-10-27T08:27:55.740Z",
      "evidencePaths": [
        "work/web-clone-benchmark/raw/html/0117.html",
        "src/generated/viettelup-source-pages.json"
      ],
      "verifiedFields": [
        "title (captured meta)",
        "description (captured meta)",
        "H1 (captured DOM)",
        "kind/template (captured metadata)",
        "raw HTML SHA-256",
        "full-path route",
        "source H2-led detail text, lists and tables",
        "static CTA anchor href/label when present"
      ],
      "unverifiedFields": [
        "Live HTTP response / redirect chain",
        "Runtime CTA click, eligibility and submission outcome",
        "Independent tariff or package availability confirmation"
      ],
      "notes": [
        "Full raw HTML captured hash SHA-256: 6683b749e6047e59c83c525b5270d54ca32996bba0f9058b7ab332dd9db94cfd",
        "Template: mobile_detail.postpaid. Text/links extracted from inert DOMParser; no source scripts or CTA handlers executed.",
        "Static HTML is reference-site evidence, not official Viettel tariff validation."
      ]
    },
    "product": {
      "id": "/goi-cuoc-viettel/tra-sau/N2000",
      "code": "N2000",
      "subscription": "postpaid"
    }
  }
};
