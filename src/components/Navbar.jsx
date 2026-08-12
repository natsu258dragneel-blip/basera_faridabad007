import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { openWhatsApp, generalEnquiryMessage } from "../utils/whatsapp";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "PG Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/85 dark:bg-ink-900/85 backdrop-blur-lg shadow-soft border-b border-ink-900/5 dark:border-cream-200/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max section-pad flex h-[76px] items-center justify-between">
        <Logo />

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-ink-700 dark:text-cream-300 hover:text-emerald-600 dark:hover:text-emerald-glow transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => openWhatsApp(generalEnquiryMessage())}
            className="btn-whatsapp !px-5 !py-2.5 text-[15px]"
          >
            <MessageCircle size={17} />
            Enquire on WhatsApp
          </button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/5 dark:bg-cream-200/10 text-ink-800 dark:text-cream-200"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream-100 dark:bg-ink-800 shadow-lift transition-transform duration-300 ease-out flex flex-col ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-[76px] px-6 border-b border-ink-900/8 dark:border-cream-200/8">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/5 dark:bg-cream-200/10 text-ink-800 dark:text-cream-200"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className={`transition-all duration-300 ${
                  menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                }`}
                style={{ transitionDelay: menuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 text-lg font-medium text-ink-800 dark:text-cream-200 border-b border-ink-900/6 dark:border-cream-200/6"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="p-6 border-t border-ink-900/8 dark:border-cream-200/8">
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openWhatsApp(generalEnquiryMessage());
              }}
              className="btn-whatsapp w-full !py-4"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
