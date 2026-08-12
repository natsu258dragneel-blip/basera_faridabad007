import { ArrowRight } from "lucide-react";
import { locations } from "../data/locations";
import Reveal from "./Reveal";

export default function Locations({ onViewLocation }) {
  return (
    <section className="section-pad py-20 sm:py-28">
      <div className="container-max">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Where We Are</span>
          <h2 className="section-heading mt-3">Stay Close to Where You Need to Be</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <Reveal key={loc.slug} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => onViewLocation(loc.slug)}
                className="group relative block w-full h-72 overflow-hidden rounded-3xl text-left shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <img
                  src={loc.image}
                  alt={`${loc.name}, Faridabad`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-6">
                  <h3 className="font-display text-2xl text-cream-100">{loc.name}</h3>
                  <p className="mt-1.5 text-sm text-cream-300/85 leading-relaxed">
                    {loc.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-glow">
                    View Rooms
                    <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
