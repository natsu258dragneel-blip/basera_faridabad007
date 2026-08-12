import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { openWhatsApp, generalEnquiryMessage } from "../utils/whatsapp";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2.5">
      <span
        role="tooltip"
        className={`hidden sm:inline-block rounded-full bg-ink-900 dark:bg-cream-100 text-cream-100 dark:text-ink-900 text-sm font-medium px-4 py-2 shadow-lift transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Chat with us
      </span>
      <button
        type="button"
        onClick={() => openWhatsApp(generalEnquiryMessage())}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        aria-label="Chat with us on WhatsApp"
        className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <MessageCircle size={26} className="relative" fill="white" />
      </button>
    </div>
  );
}
