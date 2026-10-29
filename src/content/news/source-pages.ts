/** Explicit route API retained for routing and offline SSR verification. */
import type { ComponentType } from "react";
import NewsListingPage from "./source-pages/tin-tuc";
import SoSanhRoamingArticle from "./source-pages/so-sanh-roaming";
import ViettelRoamingChuyenVungQuocTeArticle from "./source-pages/viettel-roaming-chuyen-vung-quoc-te";
import GoiCuocData4gViettel2026Article from "./source-pages/goi-cuoc-data-4g-viettel-2026";
import HuongDanCachBat5gTrenDongMayIphoneVaAndroidArticle from "./source-pages/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android";
import GoiCuocRoamingViettelLaGiArticle from "./source-pages/goi-cuoc-roaming-viettel-la-gi";
import GiaiDapThacMacHssvArticle from "./source-pages/giai-dap-thac-mac-hssv";
import GoiCuocViettelThang32026Article from "./source-pages/goi-cuoc-viettel-thang-3-2026";
import GoiCuocViettelChoSinhVienArticle from "./source-pages/goi-cuoc-viettel-cho-sinh-vien";
import GoiCuocData4gViettelMienPhiMangXaHoiArticle from "./source-pages/goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi";
import GoiCuocCameraAiArticle from "./source-pages/goi-cuoc-camera-ai";
import NineStyleArticle from "./source-pages/nine-style";
import CapNhatGoiCuocGICArticle from "./source-pages/cap-nhat-goi-cuoc-GIC";
import GoiCuoc5gFamilyArticle from "./source-pages/goi-cuoc-5g-family";
import GoiMangViettelArticle from "./source-pages/goi-mang-viettel";
import Dung5gCoHaoPinVaTonDataArticle from "./source-pages/dung-5g-co-hao-pin-va-ton-data";
import GoiCuocNgayViettelArticle from "./source-pages/goi-cuoc-ngay-viettel";
import GoiCuocViettelThang062025Article from "./source-pages/goi-cuoc-viettel-thang-06-2025";
import GoiCuocMydioViettelArticle from "./source-pages/goi-cuoc-mydio-viettel";
import DangKyInternetViettelWifi6MoiNhat042025Article from "./source-pages/dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025";
import GoiCuocViettelThang42025Article from "./source-pages/goi-cuoc-viettel-thang-4-2025";
import ViettelRaMatGoiCuocNgayMoiSt7k5g105g705gvs125gvs80Article from "./source-pages/viettel-ra-mat-goi-cuoc-ngay-moi-st7k-5g10-5g70-5gvs12-5gvs80";
import ViettelTaiHoiNghiDiDongTheGioiMwcBarcelona2025Article from "./source-pages/viettel-tai-hoi-nghi-di-dong-the-gioi-mwc-barcelona-2025";
import GoiCuoc4g5gViettelCapNhatThang32025Article from "./source-pages/goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025";
import LoTrinhTrienKhai5gViettelArticle from "./source-pages/lo-trinh-trien-khai-5g-viettel";
import GoiCuoc4g5gViettelCapNhatThang22025Article from "./source-pages/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025";
import Goi5gViettel3Thang6Thang12ThangArticle from "./source-pages/goi-5g-viettel-3-thang-6-thang-12-thang";
import GoiCuoc5gViettelTet5gArticle from "./source-pages/goi-cuoc-5g-viettel-tet5g";
import TongDaiViettelArticle from "./source-pages/tong-dai-viettel";
import SoSanhGoiCuoc4gVa5gArticle from "./source-pages/so-sanh-goi-cuoc-4g-va-5g";
import DangKy5gViettel2024Article from "./source-pages/dang-ky-5g-viettel-2024";
import KhuyenMaiNapTheViettel207Article from "./source-pages/khuyen-mai-nap-the-viettel-20-7";
import Viettel35NamDongChayHanhPhucArticle from "./source-pages/viettel-35-nam-dong-chay-hanh-phuc";
import KhuyenMaiNapThe156Article from "./source-pages/khuyen-mai-nap-the-15-6";
import MoAppCoQuaViettelMoneyArticle from "./source-pages/mo-app-co-qua-viettel-money";
import TongHopCachDangKyXemTronBoEuro2024TrenTv360Article from "./source-pages/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360";
export const sourceNewsRoutes: Record<string, ComponentType> = {
  "/tin-tuc": NewsListingPage,
  "/tin-tuc/so-sanh-roaming": SoSanhRoamingArticle,
  "/tin-tuc/viettel-roaming-chuyen-vung-quoc-te":
    ViettelRoamingChuyenVungQuocTeArticle,
  "/tin-tuc/goi-cuoc-data-4g-viettel-2026": GoiCuocData4gViettel2026Article,
  "/tin-tuc/huong-dan-cach-bat-5g-tren-dong-may-iphone-va-android":
    HuongDanCachBat5gTrenDongMayIphoneVaAndroidArticle,
  "/tin-tuc/goi-cuoc-roaming-viettel-la-gi": GoiCuocRoamingViettelLaGiArticle,
  "/tin-tuc/giai-dap-thac-mac-hssv": GiaiDapThacMacHssvArticle,
  "/tin-tuc/goi-cuoc-viettel-thang-3-2026": GoiCuocViettelThang32026Article,
  "/tin-tuc/goi-cuoc-viettel-cho-sinh-vien": GoiCuocViettelChoSinhVienArticle,
  "/tin-tuc/goi-cuoc-data-4g-viettel-mien-phi-mang-xa-hoi":
    GoiCuocData4gViettelMienPhiMangXaHoiArticle,
  "/tin-tuc/goi-cuoc-camera-ai": GoiCuocCameraAiArticle,
  "/tin-tuc/nine-style": NineStyleArticle,
  "/tin-tuc/cap-nhat-goi-cuoc-GIC": CapNhatGoiCuocGICArticle,
  "/tin-tuc/goi-cuoc-5g-family": GoiCuoc5gFamilyArticle,
  "/tin-tuc/goi-mang-viettel": GoiMangViettelArticle,
  "/tin-tuc/dung-5g-co-hao-pin-va-ton-data": Dung5gCoHaoPinVaTonDataArticle,
  "/tin-tuc/goi-cuoc-ngay-viettel": GoiCuocNgayViettelArticle,
  "/tin-tuc/goi-cuoc-viettel-thang-06-2025": GoiCuocViettelThang062025Article,
  "/tin-tuc/goi-cuoc-mydio-viettel": GoiCuocMydioViettelArticle,
  "/tin-tuc/dang-ky-internet-viettel-wifi-6-moi-nhat-04-2025":
    DangKyInternetViettelWifi6MoiNhat042025Article,
  "/tin-tuc/goi-cuoc-viettel-thang-4-2025": GoiCuocViettelThang42025Article,
  "/tin-tuc/viettel-ra-mat-goi-cuoc-ngay-moi-st7k-5g10-5g70-5gvs12-5gvs80":
    ViettelRaMatGoiCuocNgayMoiSt7k5g105g705gvs125gvs80Article,
  "/tin-tuc/viettel-tai-hoi-nghi-di-dong-the-gioi-mwc-barcelona-2025":
    ViettelTaiHoiNghiDiDongTheGioiMwcBarcelona2025Article,
  "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-3-2025":
    GoiCuoc4g5gViettelCapNhatThang32025Article,
  "/tin-tuc/lo-trinh-trien-khai-5g-viettel": LoTrinhTrienKhai5gViettelArticle,
  "/tin-tuc/goi-cuoc-4g-5g-viettel-cap-nhat-thang-2-2025":
    GoiCuoc4g5gViettelCapNhatThang22025Article,
  "/tin-tuc/goi-5g-viettel-3-thang-6-thang-12-thang":
    Goi5gViettel3Thang6Thang12ThangArticle,
  "/tin-tuc/goi-cuoc-5g-viettel-tet5g": GoiCuoc5gViettelTet5gArticle,
  "/tin-tuc/tong-dai-viettel": TongDaiViettelArticle,
  "/tin-tuc/so-sanh-goi-cuoc-4g-va-5g": SoSanhGoiCuoc4gVa5gArticle,
  "/tin-tuc/dang-ky-5g-viettel-2024": DangKy5gViettel2024Article,
  "/tin-tuc/khuyen-mai-nap-the-viettel-20-7": KhuyenMaiNapTheViettel207Article,
  "/tin-tuc/viettel-35-nam-dong-chay-hanh-phuc":
    Viettel35NamDongChayHanhPhucArticle,
  "/tin-tuc/khuyen-mai-nap-the-15-6": KhuyenMaiNapThe156Article,
  "/tin-tuc/mo-app-co-qua-viettel-money": MoAppCoQuaViettelMoneyArticle,
  "/tin-tuc/tong-hop-cach-dang-ky-xem-tron-bo-euro-2024-tren-tv360":
    TongHopCachDangKyXemTronBoEuro2024TrenTv360Article,
};
