import { Check } from "lucide-react";
import { openWhatsApp, generalEnquiryMessage } from "../utils/whatsapp";
import Reveal from "./Reveal";

const PLANS = [
  {
    title: "Monthly Stay",
    tagline: "Flexible, month to month",
    points: ["No long-term commitment", "Easy to extend or move out", "Ideal for short work assignments"],
  },
  {
    title: "3+ Month Stay",
    tagline: "A little more settled",
    highlighted: true,
    points: ["Preferred rate on select rooms", "Priority for room preferences", "Best for students & interns"],
  },
  {
    title: "6+ Month Stay",
    tagline: "Long-term comfort",
    points: ["Best long-stay value", "Priority maintenance support", "Ideal for working professionals"],
  },
];

export default function StayValue() {
  return (
    <section className="section-pad py-20 sm:py-28 bg-white dark:bg-ink-800/40">
      <div className="container-max">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow justify-center">Value for Longer Stays</span>
          <h2 className="section-heading mt-3">Stay Longer. Save More.</h2>
          <p className="mt-4 text-ink-500 dark:text-cream-400/80 text-base sm:text-lg leading-relaxed">
            Exact savings vary by property and season — message us on WhatsApp
            for current long-stay rates.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.title} delay={i * 100}>
              <div
                className={`h-full rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.highlighted
                    ? "bg-ink-900 text-cream-100 shadow-lift"
                    : "card-surface"
                }`}
              >
                {plan.highlighted && (
                  <span className="self-start mb-3 rounded-full bg-brass-400 text-ink-900 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1">
                    Most Popular
                  </span>
                )}
                <h3 className={`font-display text-xl ${plan.highlighted ? "text-cream-100" : "text-ink-900 dark:text-cream-100"}`}>
                  {plan.title}
                </h3>
                <p className={`mt-1 text-sm ${plan.highlighted ? "text-cream-300/75" : "text-ink-500 dark:text-cream-400/70"}`}>
                  {plan.tagline}
                </p>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {plan.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-emerald-glow" : "text-emerald-500"}`}
                      />
                      <span className={plan.highlighted ? "text-cream-200/90" : "text-ink-600 dark:text-cream-300/85"}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => openWhatsApp(generalEnquiryMessage())}
                  className={`mt-7 w-full ${plan.highlighted ? "btn-primary" : "btn-secondary"} !py-3`}
                >
                  Ask on WhatsApp
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
