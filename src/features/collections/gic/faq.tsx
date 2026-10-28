import { GicFaqItem } from "./gic-cards";
import { gicFaqs } from "./gic-data";
export function GicFaq() {
  return (
    <div className="mx-auto justify-between py-6 md:flex md:w-[1040px] md:pb-[100px] md:pt-0">
      <div>
        <h2 className="text-center font-beausans text-22 md:text-[80px] md:text-left">FAQ</h2>
        <p className="mt-2 hidden max-w-[483px] text-24 leading-[32px] md:block">
          Bạn thắc mắc về gói GIC? Đừng lo, mọi câu hỏi đều có lời giải ngay tại đây! Từ cách đăng
          ký, sử dụng đến topping “xịn sò” đi kèm, chúng mình đã tổng hợp sẵn để bạn tìm hiểu dễ
          dàng.
        </p>
      </div>
      <div className="relative mx-4 mt-6 max-w-[520px] md:mx-0 md:mt-0">
        <div
          id="gic-accordion"
          className="flex max-w-[685px] flex-col gap-4"
          data-orientation="vertical"
        >
          {gicFaqs.map((item) => (
            <GicFaqItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
