import { BroadbandInternetCard, ComboInternetCard } from "./internet-cards";
import { broadbandPlans, comboPlans } from "./internet-data";
export function InternetPricing() {
  return (
    <div className="w-full bg-[url('/images/internet-bg-mobi.png')] bg-cover bg-no-repeat pt-[calc(5.5%+24px)] md:bg-[url('/images/internet-bg.png')] md:bg-cover md:pt-[calc(6.5%+80px)] md:pb-[56px]">
      <div className="container flex flex-col gap-4 pl-5 md:gap-20 md:pl-0">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
          <div className="text-white">
            <h2 className="font-beausans text-22 leading-[28px] md:text-[44px] md:leading-[54px]">
              {"Gói cước "}
              <br className="hidden md:inline" />
              ưu đãi sốc
            </h2>
            <p className="text-12 md:text-20 w-[340px] pt-2 text-shadow-sm md:pt-4">
              Combo WiFi thế hệ thứ 6 (WiFi 6) kèm thiết bị mở rộng Mesh WiFi -
              phủ sóng mạnh, ổn định toàn bộ ngôi nhà
            </p>
          </div>
          <div className="no-scrollbar -ml-5 flex gap-4 overflow-auto px-5 py-6 md:ml-0 md:gap-8 md:overflow-visible md:px-0 md:pt-12">
            {comboPlans.map((item) => (
              <ComboInternetCard key={item.code} item={item} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-left text-white md:text-center">
            <h2 className="font-beausans text-22 leading-[28px] md:text-[44px] md:leading-[54px]">
              Gói cước cá nhân siêu tiết kiệm
            </h2>
            <p className="text-12 md:text-20 pt-2 pr-5 md:pt-4 md:pr-0">
              Kết nối mượt mà cho không gian sống gọn, vừa đủ cho nhu cầu cá
              nhân
            </p>
          </div>
          <div className="no-scrollbar -ml-5 flex gap-4 overflow-auto px-5 py-6 md:ml-0 md:gap-8 md:px-0 md:pt-12">
            {broadbandPlans.map((item) => (
              <BroadbandInternetCard key={item.code} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
