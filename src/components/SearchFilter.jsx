import { Search, MapPin, BedDouble, Wallet } from "lucide-react";
import { locations } from "../data/locations";
import { roomTypes, budgetRanges } from "../data/rooms";

export default function SearchFilter({ filters, setFilters }) {
  const handleChange = (key) => (e) => {
    setFilters((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative z-20 container-max section-pad -mt-24 sm:-mt-20">
      <form
        onSubmit={handleSubmit}
        className="card-surface bg-white/95 dark:bg-ink-800/95 backdrop-blur-xl p-4 sm:p-5 lg:p-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <Field icon={MapPin} label="Location">
            <select
              value={filters.location}
              onChange={handleChange("location")}
              className="input-field appearance-none"
            >
              <option value="">Any location</option>
              {locations.map((loc) => (
                <option key={loc.slug} value={loc.slug}>
                  {loc.name}
                </option>
              ))}
            </select>
          </Field>

          <Field icon={BedDouble} label="Room Type">
            <select
              value={filters.roomType}
              onChange={handleChange("roomType")}
              className="input-field appearance-none"
            >
              <option value="">Any room type</option>
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </Field>

          <Field icon={Wallet} label="Budget">
            <select
              value={filters.budget}
              onChange={handleChange("budget")}
              className="input-field appearance-none"
            >
              <option value="">Any budget</option>
              {budgetRanges.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
          </Field>

          <div className="flex items-end">
            <button type="submit" className="btn-primary w-full !py-3.5">
              <Search size={17} />
              Find My PG
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

function Field({ icon: Icon, label, children }) {
  return (
    <label className="block">
      <span className="field-label flex items-center gap-1.5">
        <Icon size={14} className="text-emerald-600 dark:text-emerald-glow" />
        {label}
      </span>
      {children}
    </label>
  );
}
