import { CollectionMotion } from "../collection-motion";
import { GicPlanCard } from "./plan-card";
import { gicPlans } from "./plans-data";
export function GicIntroduction() {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto pb-[42px] pt-8 md:w-[1040px] md:pb-[82px] md:pt-[54px]">
        <h1 className="pl-7 font-beausans text-16 md:text-[50px]">
          <span className="underline underline-offset-2">Đề bài</span>
          {": "}
          <span className="font-medium">GIC là gì?</span>
        </h1>
        <p className="pt-2 text-center font-bold md:text-[50px]">
          <span className="underline underline-offset-2">Bài làm</span>:
        </p>
        <p className="px-7 pt-2.5 text-10 md:px-6 md:pt-5 md:text-22">
          GIC là hệ gói cước viễn thông của Viettel được thiết kế riêng cho khách hàng trẻ
          từ 6–22 tuổi.
        </p>
        <p className="px-7 pt-2.5 text-10 md:px-6 md:pt-5 md:text-22">
          Các gói GIC tập trung vào nhu cầu học tập, giải trí và kết nối hằng ngày với ưu
          đãi data linh hoạt, miễn phí mạng xã hội và tích hợp nội dung số như sách,
          truyện, giải trí.
        </p>
        <div className="no-scrollbar flex gap-4 overflow-auto px-4 pt-4 md:gap-8 md:px-0 md:pt-[40px]">
          <GicPlanCard plan={gicPlans[0]} />
          <div className={"flex w-full items-center justify-center"}>
            <div className={"h-[180px] w-[180px] md:h-[320px] md:w-[320px]"}>
              <CollectionMotion animation="ruler" width={320} height={320} />
            </div>
          </div>
        </div>
        <div
          className={
            "no-scrollbar flex gap-4 overflow-auto px-4 pt-4 md:gap-8 md:px-0 md:pt-8"
          }
        >
          {gicPlans.slice(1).map((plan) => (
            <GicPlanCard key={plan.code} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
