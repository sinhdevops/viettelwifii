import { MeshInternetCard } from "./internet-cards";
import { meshPlans } from "./internet-data";
export function InternetMeshPricing() {
  return (
    <div className="w-full bg-[#F4F4F4] py-[24px] md:py-[90px]">
      <div className="container pl-5 md:pl-0">
        <div className="md:flex md:flex-row md:items-center md:gap-12">
          <div className="text-left md:text-left">
            <div className="relative">
              <span className="border-primary absolute left-0 mr-3 h-full w-0 rounded-full border-[2px] md:hidden"></span>
              <h2 className="font-beausans text-20 ml-3.5 leading-[28px] text-[#282828] md:ml-0 md:text-[44px] md:leading-[54px]">
                {"Gói cước "}
                <br className="hidden md:inline" />
                {"toàn diện cho "}
                <br className="" />
                nhà cao tầng
              </h2>
            </div>
            <p className="text-12 md:text-20 pt-2 pr-5 text-[#444444] md:pt-4 md:pr-0">
              Đảm bảo kết nối mạnh mẽ và ổn định cho mọi tầng, mọi góc trong
              ngôi nhà của bạn
            </p>
          </div>
          <div className="no-scrollbar -ml-5 flex gap-4 overflow-auto px-5 py-6 md:ml-0 md:shrink-0 md:gap-8 md:px-0 md:pt-12">
            {meshPlans.map((item) => (
              <MeshInternetCard key={item.code} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
