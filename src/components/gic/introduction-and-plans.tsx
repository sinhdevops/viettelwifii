import { GicBanner } from "./banner";
import { GicIntroduction } from "./introduction";
import { GicToppings } from "./toppings";
export function GicIntroductionAndPlans() {
  return (
    <div className="relative flex w-full flex-col items-center">
      <GicBanner />
      <GicIntroduction />
      <GicToppings />
    </div>
  );
}
