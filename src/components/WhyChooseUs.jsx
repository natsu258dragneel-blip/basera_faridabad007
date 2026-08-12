import { Wallet, ShieldCheck, Sparkles, HandCoins, MapPinned, PackageCheck } from "lucide-react";
import Reveal from "./Reveal";

const REASONS = [
  {
    icon: Wallet,
    title: "Affordable Rent",
    description: "Transparent monthly pricing with no hidden charges, starting from ₹6,000.",
  },
  {
    icon: HandCoins,
    title: "No Brokerage",
    description: "Deal with us directly — no middlemen, no brokerage fees, ever.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "CCTV-monitored premises with secure entry and on-site staff.",
  },
  {
    icon: Sparkles,
    title: "Clean Rooms",
    description: "Regular housekeeping keeps rooms and common areas spotless.",
  },
  {
    icon: PackageCheck,
    title: "Essential Facilities",
    description: "Furnished rooms, Wi-Fi, power backup and hot water — all included.",
  },
  {
    icon: MapPinned,
    title: "Convenient Locations",
    description: "Properties close to colleges, offices and the IMT industrial belt.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad py-20 sm:py-28">
      <div className="container-max">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Why Basera Stays</span>
          <h2 className="section-heading mt-3">
            Everything You Need for a Comfortable Stay
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={(i % 3) * 90}>
                <div className="group h-full card-surface p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift hover:border-emerald-500/30">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-cream-100 shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ink-900 dark:text-cream-100">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 dark:text-cream-400/80 leading-relaxed">
                    {reason.description}
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
