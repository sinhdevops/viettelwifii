import { InternetNewsCard } from "./internet-cards";
import { internetNews } from "./internet-data";
export function InternetNews() {
  return (
    <div className="container bg-[#fff1f1] px-5 pt-6 md:bg-transparent md:px-0 md:py-[90px]">
      <h2 className="font-beausans mb-12 hidden text-center text-[44px] leading-[54px] text-[#2C2F31] md:block">
        Ưu đãi &amp; khuyến mại Internet mới nhất
      </h2>
      <h2 className="font-beausans text-22 leading-[28px] text-[#2C2F31] md:hidden">
        Tin tức
      </h2>
      <div className="no-scrollbar [&amp;&gt;div]:shrink-0 -mr-5 flex gap-4 overflow-auto py-6 pr-5 md:grid md:grid-cols-3 md:gap-12 md:overflow-visible md:py-0 md:pr-0">
        {internetNews.map((item) => (
          <InternetNewsCard key={item.href} item={item} />
        ))}
      </div>
    </div>
  );
}
