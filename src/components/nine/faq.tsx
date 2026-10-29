import { NineFaqItem } from "./nine-cards";
import { nineFaqs } from "@/constants/nine/nine-data";
export function NineFaq() {
  return (
    <div className="container">
      <div className="mb-6 text-white md:mb-12 md:text-center">
        <h2 className="font-beausans text-22 mb-2 leading-[28px] md:mb-6 md:text-[55px] md:leading-[70px]">
          FAQ
        </h2>
        <p className="text-12 md:text-20">
          {"Câu hỏi thường gặp về gói "}
          <span className="nine-gradient font-beausans text-12 md:text-18 mx-1 rounded-t-[8px] rounded-br-[8px] px-2.5 pt-[1px] pb-0.5 leading-[20px] font-bold text-white md:rounded-t-[12px] md:rounded-br-[12px] md:px-[15px]">
            Nine
          </span>
        </p>
      </div>
      <div>
        <div
          id="nine-accordion"
          className="flex flex-col gap-3 md:gap-6"
          data-orientation="vertical"
        >
          {nineFaqs.map((item) => (
            <NineFaqItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
