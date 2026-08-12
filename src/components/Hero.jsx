import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Smartphone } from "lucide-react";
import { openWhatsApp, generalEnquiryMessage } from "../utils/whatsapp";

const TRUST_POINTS = [
  { icon: Sparkles, label: "Comfortable Rooms" },
  { icon: ShieldCheck, label: "Safe Environment" },
  { icon: Smartphone, label: "Easy WhatsApp Enquiry" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-900 pt-[76px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-exterior.jpg"
          alt="Exterior view of a Basera Stays PG accommodation building in Faridabad"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-transparent to-ink-950/40" />
        <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay" />
      </div>

      <div className="relative container-max section-pad pt-20 pb-40 sm:pt-28 sm:pb-48 lg:pt-36 lg:pb-56">
        <div className="max-w-2xl">
          <span className="eyebrow !text-emerald-glow animate-fade-in">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow" />
            PG Accommodation in Faridabad
          </span>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-medium leading-[1.08] text-cream-100 text-balance animate-fade-up">
            Find a Place That{" "}
            <span className="italic text-emerald-glow">Feels Like Home</span>
          </h1>

          <p
            className="mt-6 max-w-lg text-base sm:text-lg text-cream-300/85 leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Comfortable, safe and affordable PG accommodation in Faridabad for
            students and working professionals — furnished rooms, home-style
            food and a stay that actually feels lived-in.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row gap-3.5 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            <a href="#rooms" className="btn-primary">
              Explore PG Rooms
              <ArrowRight size={18} />
            </a>
            <button
              type="button"
              onClick={() => openWhatsApp(generalEnquiryMessage())}
              className="btn-whatsapp"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </button>
          </div>

          <ul
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 animate-fade-up"
            style={{ animationDelay: "320ms" }}
          >
            {TRUST_POINTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm text-cream-200/90">
                <Icon size={16} className="text-emerald-glow" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
