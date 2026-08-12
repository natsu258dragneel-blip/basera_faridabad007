import { useEffect, useState } from "react";
import { X, MapPin, Star, Check, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { openWhatsApp, roomEnquiryMessage } from "../utils/whatsapp";

export default function RoomDetailsModal({ room, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [room]);

  useEffect(() => {
    if (!room) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [room, onClose]);

  if (!room) return null;

  const nextImage = () => setActiveImage((i) => (i + 1) % room.images.length);
  const prevImage = () => setActiveImage((i) => (i - 1 + room.images.length) % room.images.length);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
    >
      <div
        className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-cream-100 dark:bg-ink-800 shadow-lift animate-fade-up">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close room details"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/50 text-cream-100 backdrop-blur-sm hover:bg-ink-950/70 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Gallery */}
        <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl sm:rounded-t-3xl bg-ink-900">
          <img
            src={room.images[activeImage]}
            alt={`${room.name} — photo ${activeImage + 1} of ${room.images.length}`}
            className="h-full w-full object-cover"
          />
          {room.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/50 text-cream-100 hover:bg-ink-950/70"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/50 text-cream-100 hover:bg-ink-950/70"
              >
                <ChevronRight size={18} />
              </button>
              <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
                {room.images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`Show photo ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeImage ? "w-6 bg-cream-100" : "w-1.5 bg-cream-100/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 id="room-modal-title" className="font-display text-2xl sm:text-3xl text-ink-900 dark:text-cream-100">
                {room.name}
              </h3>
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500 dark:text-cream-400/80">
                <MapPin size={14} />
                {room.location}
              </p>
            </div>
            <span className="flex items-center gap-1 shrink-0 text-sm font-semibold text-brass-500">
              <Star size={15} className="fill-brass-400 text-brass-400" />
              {room.rating}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <InfoPill label="Room Type" value={room.roomType} />
            <InfoPill label="Price" value={room.priceLabel} />
            <InfoPill label="Availability" value={room.availability} />
          </div>

          <p className="mt-6 text-ink-600 dark:text-cream-300/85 leading-relaxed">
            {room.description}
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-ink-700 dark:text-cream-300">
              Facilities
            </h4>
            <ul className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2.5">
              {room.amenities.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm text-ink-600 dark:text-cream-300/85">
                  <Check size={15} className="text-emerald-500 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => openWhatsApp(roomEnquiryMessage(room))}
              className="btn-whatsapp flex-1"
            >
              <MessageCircle size={18} />
              Enquire on WhatsApp
            </button>
            <button type="button" onClick={onClose} className="btn-secondary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoPill({ label, value }) {
  return (
    <div className="rounded-xl bg-ink-900/5 dark:bg-cream-200/8 px-3.5 py-2">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-400 dark:text-cream-400/60">
        {label}
      </p>
      <p className="text-sm font-semibold text-ink-800 dark:text-cream-100">{value}</p>
    </div>
  );
}
