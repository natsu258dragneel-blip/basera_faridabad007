import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import Logo from "./Logo";
import { locations } from "../data/locations";
import { openWhatsApp, generalEnquiryMessage } from "../utils/whatsapp";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "PG Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-300">
      <div className="container-max section-pad py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm text-cream-400/70 leading-relaxed max-w-xs">
              Comfortable, safe and affordable PG accommodation in Faridabad
              for students and working professionals.
            </p>
            <button
              type="button"
              onClick={() => openWhatsApp(generalEnquiryMessage())}
              className="btn-whatsapp mt-5 !py-2.5 !px-5 text-sm"
            >
              <MessageCircle size={16} />
              Chat with us on WhatsApp
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-100">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-cream-400/75 hover:text-emerald-glow transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-100">
              PG Locations
            </h3>
            <ul className="mt-4 space-y-2.5">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <a href="#rooms" className="text-sm text-cream-400/75 hover:text-emerald-glow transition-colors">
                    {loc.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-cream-100">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://wa.me/919599714297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-cream-400/75 hover:text-emerald-glow transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  +91 95997 14297
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-cream-400/75">
                <MapPin size={15} className="shrink-0 mt-0.5" />
                Faridabad, Haryana, India
              </li>
              <li>
                <a
                  href="mailto:hello@baserastays.example"
                  className="flex items-center gap-2.5 text-sm text-cream-400/75 hover:text-emerald-glow transition-colors"
                >
                  <Mail size={15} className="shrink-0" />
                  hello@baserastays.example
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-cream-100/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-400/50">
          <p>&copy; {new Date().getFullYear()} Basera Stays. All rights reserved.</p>
          <p>Designed for a comfortable, hassle-free stay in Faridabad.</p>
        </div>
      </div>
    </footer>
  );
}
