import { MapPin, Star, MessageCircle } from "lucide-react";
import { openWhatsApp, roomEnquiryMessage } from "../utils/whatsapp";

export default function RoomCard({ room, onViewDetails }) {
  const availabilityStyles =
    room.availability === "Available"
      ? "bg-emerald-500/12 text-emerald-700 dark:text-emerald-glow"
      : "bg-brass-400/15 text-brass-700 dark:text-brass-300";

  return (
    <article className="group card-surface overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative h-56">
        <img
          src={room.images[0]}
          alt={`${room.roomType} room at ${room.name}, ${room.location}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />

        <span
          className={`absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${availabilityStyles}`}
        >
          {room.availability}
        </span>
      </div>

      <div className="relative">
        <span className="stay-tag absolute right-4 -top-[15px] z-10">{room.priceLabel}</span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 pt-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl text-ink-900 dark:text-cream-100 leading-snug">
            {room.name}
          </h3>
          <span className="flex items-center gap-1 shrink-0 text-sm font-semibold text-brass-500 mt-1">
            <Star size={14} className="fill-brass-400 text-brass-400" />
            {room.rating}
          </span>
        </div>

        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-ink-500 dark:text-cream-400/80">
          <MapPin size={14} />
          {room.location}
        </p>

        <p className="mt-3 text-sm text-ink-600 dark:text-cream-300/80 leading-relaxed line-clamp-2">
          {room.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 4).map((a) => (
            <span
              key={a}
              className="rounded-full bg-ink-900/5 dark:bg-cream-200/8 px-2.5 py-1 text-xs font-medium text-ink-600 dark:text-cream-300/80"
            >
              {a}
            </span>
          ))}
          {room.amenities.length > 4 && (
            <span className="rounded-full bg-ink-900/5 dark:bg-cream-200/8 px-2.5 py-1 text-xs font-medium text-ink-500 dark:text-cream-400/70">
              +{room.amenities.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-6 flex gap-2.5 pt-1">
          <button type="button" onClick={() => onViewDetails(room)} className="btn-secondary flex-1 !px-4 !py-2.5 text-sm">
            View Details
          </button>
          <button
            type="button"
            onClick={() => openWhatsApp(roomEnquiryMessage(room))}
            aria-label={`Enquire about ${room.name} on WhatsApp`}
            className="btn-whatsapp !px-4 !py-2.5 text-sm"
          >
            <MessageCircle size={16} />
            <span className="hidden sm:inline">Enquire</span>
          </button>
        </div>
      </div>
    </article>
  );
}
