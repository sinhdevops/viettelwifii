import { PopularCountryCard } from "./roaming-cards";
import { popularCountries } from "@/constants/roaming/roaming-data";
export function RoamingPopularCountries() {
  return (
    <div className="w-full bg-[linear-gradient(0deg,_#ffe8e6_0%,_#FFECE9_100%)]">
      <div className="w-full bg-[url(/images/bg-roaming-dots.webp)] bg-cover bg-center bg-no-repeat pt-12 pb-10 md:pb-[78px]">
        <div className="roaming container rounded-[40px] bg-[linear-gradient(180deg,_#FFC9B6_0%,_#F78889_100%)] pt-[26px] pb-[46px] shadow-[0px_4px_7px_0px_#EA626240] md:bg-[linear-gradient(180deg,_#FFF2F4_0%,_#FFEAED_100%)] md:py-[50px]">
          <h2 className="text-center text-[26px] leading-tight font-bold text-black md:text-center md:text-[36px]">
            Các quốc gia phổ biến
          </h2>
          <div className="mx-auto mt-6 grid w-[82%] grid-cols-1 grid-rows-4 gap-x-6 gap-y-4 md:mt-12 md:w-[79%] md:grid-cols-2">
            {popularCountries.map((item) => (
              <PopularCountryCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
