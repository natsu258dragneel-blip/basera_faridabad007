import { MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp, generalEnquiryMessage } from "../utils/whatsapp";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="section-pad py-20 sm:py-24">
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-ink-900 px-6 py-16 sm:px-16 sm:py-20 text-center">
            <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brass-400/10 blur-3xl" />

            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-cream-100 leading-tight text-balance">
                Ready to Find Your Next Home?
              </h2>
              <p className="mt-4 text-cream-300/80 text-base sm:text-lg leading-relaxed">
                Tell us what you're looking for and we'll help you find a
                suitable PG in Faridabad — quick, direct and on your terms.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center">
                <button
                  type="button"
                  onClick={() => openWhatsApp(generalEnquiryMessage())}
                  className="btn-whatsapp"
                >
                  <MessageCircle size={18} />
                  Enquire on WhatsApp
                </button>
                <a href="#rooms" className="btn-secondary !border-cream-200/25 !text-cream-100 hover:!border-emerald-glow hover:!text-emerald-glow">
                  View Rooms
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
