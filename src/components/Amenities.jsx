import {
  Wifi,
  Wind,
  Flame,
  Sofa,
  BedDouble,
  Lock,
  Camera,
  BatteryCharging,
  Droplets,
  SprayCan,
  SquareParking,
  Users,
  UtensilsCrossed,
  ChefHat,
  Check,
} from "lucide-react";
import { amenities } from "../data/amenities";
import Reveal from "./Reveal";

const ICON_MAP = {
  Wifi,
  Wind,
  Flame,
  Sofa,
  BedDouble,
  Lock,
  Camera,
  BatteryCharging,
  Droplets,
  SprayCan,
  SquareParking,
  Users,
  UtensilsCrossed,
  ChefHat,
};

export default function Amenities() {
  return (
    <section id="amenities" className="section-pad py-20 sm:py-28 bg-white dark:bg-ink-800/40">
      <div className="container-max">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow justify-center">What's Included</span>
          <h2 className="section-heading mt-3">Everything You Need, Already Here</h2>
          <p className="mt-4 text-ink-500 dark:text-cream-400/80 text-base sm:text-lg leading-relaxed">
            Every Basera Stays property is equipped for a comfortable, low-hassle stay.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {amenities.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Check;
            return (
              <Reveal key={item.name} delay={(i % 4) * 70}>
                <div className="group h-full rounded-2xl border border-ink-900/8 dark:border-cream-200/10 bg-cream-100 dark:bg-ink-700/40 p-5 transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-glow transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-cream-100">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-3.5 text-sm font-semibold text-ink-800 dark:text-cream-100">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink-500 dark:text-cream-400/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
