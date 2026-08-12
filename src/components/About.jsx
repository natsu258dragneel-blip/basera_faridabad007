import { Home, Users, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  { icon: Home, text: "Comfortable, homely accommodation" },
  { icon: ShieldCheck, text: "Clean, secure and well-maintained premises" },
  { icon: Users, text: "Built for students and working professionals alike" },
];

export default function About() {
  return (
    <section id="about" className="section-pad py-20 sm:py-28">
      <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-lift aspect-[4/5]">
              <img
                src="/images/about/about-building.jpg"
                alt="Basera Stays PG accommodation building in Faridabad"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 card-surface bg-white/95 dark:bg-ink-800/95 backdrop-blur-xl px-5 py-4 max-w-[220px]">
              <p className="font-display text-3xl text-emerald-600 dark:text-emerald-glow">5+</p>
              <p className="text-xs text-ink-500 dark:text-cream-400/70 leading-snug mt-0.5">
                PG properties across Faridabad
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow">Who We Are</span>
          <h2 className="section-heading mt-3">
            More Than a Room — A Place to Actually Live
          </h2>
          <p className="mt-5 text-ink-600 dark:text-cream-300/85 leading-relaxed">
            Basera Stays runs comfortable, well-maintained PG accommodation
            across Faridabad — built around what students and working
            professionals actually need: a clean, safe room, reliable
            facilities, and people who respond when you reach out.
          </p>
          <p className="mt-4 text-ink-600 dark:text-cream-300/85 leading-relaxed">
            No confusing paperwork, no brokerage, no surprises — just a
            straightforward stay that feels less like a hostel and more like
            home.
          </p>

          <ul className="mt-7 space-y-3.5">
            {POINTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-glow">
                  <Icon size={17} />
                </span>
                <span className="text-sm sm:text-[15px] text-ink-700 dark:text-cream-200">{text}</span>
              </li>
            ))}
          </ul>

          <a href="#rooms" className="btn-primary mt-8">
            Explore Our Rooms
          </a>
        </Reveal>
      </div>
    </section>
  );
}
