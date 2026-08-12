import { Search, CheckCircle2, MessageCircle } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Explore Rooms",
    description: "Browse our listings by location, room type and budget to see what's available.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Choose Your PG",
    description: "Shortlist the property that fits — check photos, amenities and pricing in detail.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Enquire on WhatsApp",
    description: "Send a message with one tap and our team will confirm availability and next steps.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad py-20 sm:py-28 bg-white dark:bg-ink-800/40">
      <div className="container-max">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow justify-center">Getting Started</span>
          <h2 className="section-heading mt-3">Three Simple Steps</h2>
          <p className="mt-4 text-ink-500 dark:text-cream-400/80 text-base sm:text-lg leading-relaxed">
            From browsing to booking, we've kept the whole process refreshingly simple.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 120} className="relative">
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-9 left-[60%] w-full border-t-2 border-dashed border-emerald-500/25" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full bg-emerald-500 text-cream-100 shadow-glow">
                    <Icon size={28} />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brass-400 text-ink-900 text-xs font-bold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl text-ink-900 dark:text-cream-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[260px] text-sm text-ink-500 dark:text-cream-400/80 leading-relaxed">
                    {step.description}
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
