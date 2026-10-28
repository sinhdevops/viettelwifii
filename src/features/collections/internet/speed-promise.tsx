export function InternetSpeedPromise() {
  return (
    <div className="container px-5 md:px-0">
      <div className="speed-statement flex items-center gap-8 rounded-[18px] bg-[#F4F4F4] px-4 pb-3 pt-2 md:rounded-[60px] md:bg-white md:!p-12 md:px-5">
        <div className="hidden w-[600px] md:block">
          <h2 className="leading-40 mb-[30px] font-beausans text-[44px] text-[#2C2F31]">
            {"“Tốc độ internet "}
            <br />
            <span className="text-primary">ổn định hàng đầu Việt Nam”</span>
          </h2>
          <p className="text-14 text-[#2C2F31]">
            (*)Theo dữ liệu từ i-Speed , một công cụ đo tốc độ internet do Cục Viễn thông (Bộ Thông
            tin &amp; Truyền thông Việt Nam) phát triển. Số liệu công bố vào tháng 7 năm 2024.
          </p>
        </div>
        <div className="relative flex w-full items-center justify-evenly gap-10 md:w-[unset]">
          <div>
            <p className="text-center font-magistral font-medium">
              <span className="text-[32px] text-primary md:text-[64px]">10</span>{" "}
              <span className="text-22 text-[#909090] md:pl-2 md:text-[48px] md:text-[#323232]">
                triệu
              </span>
              <br />
              <span className="text-12 font-normal text-[#444444] md:text-20 md:text-[#909090]">
                KH sử dụng Internet
              </span>
            </p>
          </div>
          <div className="absolute left-[48%] top-1/2 h-10 w-[1px] -translate-y-1/2 bg-[#909090] md:h-20"></div>
          <div>
            <p className="text-center font-magistral font-medium">
              <span className="text-[32px] text-primary md:text-[64px]">8</span>{" "}
              <span className="text-22 text-[#909090] md:pl-2 md:text-[48px] md:text-[#323232]">
                triệu
              </span>
              <br />
              <span className="text-12 font-normal text-[#444444] md:text-20 md:text-[#909090]">
                KH hài lòng về dịch vụ
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
