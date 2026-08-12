import { useMemo } from "react";
import { SearchX } from "lucide-react";
import { rooms, budgetRanges } from "../data/rooms";
import { locations } from "../data/locations";
import RoomCard from "./RoomCard";
import Reveal from "./Reveal";

export default function Rooms({ filters, setFilters, onViewDetails }) {
  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      if (filters.location && room.locationSlug !== filters.location) return false;
      if (filters.roomType && room.roomType !== filters.roomType) return false;
      if (filters.budget) {
        const range = budgetRanges.find((r) => r.label === filters.budget);
        if (range && !(room.price >= range.min && room.price < range.max)) return false;
      }
      return true;
    });
  }, [filters]);

  const clearFilters = () => setFilters({ location: "", roomType: "", budget: "" });

  return (
    <section id="rooms" className="section-pad pt-24 pb-20 sm:pt-28 sm:pb-28">
      <div className="container-max">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Our Listings</span>
          <h2 className="section-heading mt-3">Find Your Perfect Stay</h2>
          <p className="mt-4 text-ink-500 dark:text-cream-400/80 text-base sm:text-lg leading-relaxed">
            Comfortable PG accommodation in convenient Faridabad locations —
            furnished rooms, transparent pricing, no brokerage.
          </p>
        </Reveal>

        {(filters.location || filters.roomType || filters.budget) && (
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <span className="text-sm text-ink-500 dark:text-cream-400/70">Filtered by:</span>
            {filters.location && (
              <FilterChip
                label={locations.find((l) => l.slug === filters.location)?.name}
                onClear={() => setFilters((p) => ({ ...p, location: "" }))}
              />
            )}
            {filters.roomType && (
              <FilterChip label={filters.roomType} onClear={() => setFilters((p) => ({ ...p, roomType: "" }))} />
            )}
            {filters.budget && (
              <FilterChip label={filters.budget} onClear={() => setFilters((p) => ({ ...p, budget: "" }))} />
            )}
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-emerald-600 dark:text-emerald-glow hover:underline"
            >
              Clear all
            </button>
          </div>
        )}

        {filteredRooms.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredRooms.map((room, i) => (
              <Reveal key={room.id} delay={(i % 3) * 90}>
                <RoomCard room={room} onViewDetails={onViewDetails} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-14 flex flex-col items-center justify-center text-center py-16 rounded-3xl border border-dashed border-ink-900/15 dark:border-cream-200/15">
            <SearchX size={36} className="text-ink-300 dark:text-cream-400/40" />
            <p className="mt-4 text-ink-600 dark:text-cream-300 font-medium">
              No rooms match those filters right now.
            </p>
            <button type="button" onClick={clearFilters} className="mt-4 btn-secondary !px-5 !py-2.5 text-sm">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterChip({ label, onClear }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-glow px-3 py-1.5 text-xs font-semibold">
      {label}
      <button type="button" onClick={onClear} aria-label={`Remove ${label} filter`} className="hover:text-emerald-900 dark:hover:text-cream-100">
        ×
      </button>
    </span>
  );
}
