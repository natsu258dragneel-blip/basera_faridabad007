import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import Reveal from "./Reveal";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

const AVATAR_COLORS = [
  "bg-emerald-500",
  "bg-brass-400",
  "bg-ink-700",
  "bg-emerald-700",
  "bg-brass-600",
  "bg-ink-500",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad py-20 sm:py-28">
      <div className="container-max">
        <Reveal className="max-w-xl mx-auto text-center">
          <span className="eyebrow justify-center">Resident Stories</span>
          <h2 className="section-heading mt-3">What Our Residents Say</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 90}>
              <div className="relative h-full card-surface p-6 sm:p-7 flex flex-col">
                <Quote size={30} className="text-emerald-500/20 absolute top-5 right-5" />

                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={15}
                      className={idx < t.rating ? "fill-brass-400 text-brass-400" : "text-ink-200 dark:text-cream-400/20"}
                    />
                  ))}
                </div>

                <p className="mt-4 flex-1 text-[15px] text-ink-600 dark:text-cream-300/85 leading-relaxed">
                  "{t.review}"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-cream-100 font-semibold text-sm ${AVATAR_COLORS[i % AVATAR_COLORS.length]}`}
                  >
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-cream-100">{t.name}</p>
                    <p className="text-xs text-ink-500 dark:text-cream-400/70">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
