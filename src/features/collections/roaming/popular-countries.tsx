import { PopularCountryCard } from "./roaming-cards";
import { popularCountries } from "./roaming-data";
export function RoamingPopularCountries() {
  return (
    <div className="w-full bg-[linear-gradient(0deg,_#ffe8e6_0%,_#FFECE9_100%)]">
      <div className="w-full bg-[url(/images/bg-roaming-dots.webp)] bg-cover bg-center bg-no-repeat pb-10 pt-12 md:pb-[78px]">
        <div className="roaming container rounded-[40px] bg-[linear-gradient(180deg,_#FFC9B6_0%,_#F78889_100%)] pb-[46px] pt-[26px] shadow-[0px_4px_7px_0px_#EA626240] md:bg-[linear-gradient(180deg,_#FFF2F4_0%,_#FFEAED_100%)] md:py-[50px]">
          <h2 className="font-bold text-black text-center text-[26px] md:text-[36px] leading-tight md:text-center">
            Các quốc gia phổ biến
          </h2>
          <div className="mx-auto mt-6 grid w-[82%] grid-cols-1 grid-rows-4 gap-x-6 gap-y-4 md:mt-12 md:w-[79%] md:grid-cols-2">
            {popularCountries.map((item) => (
              <PopularCountryCard key={item.href} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
