export default function Logo({ variant = "default", className = "" }) {
  const isLight = variant === "light";

  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Basera Stays — home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 shadow-glow transition-transform duration-300 group-hover:-rotate-6">
        <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <path
            d="M14 30V18a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v12"
            stroke="#F8F4EC"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect x="10" y="30" width="44" height="6" rx="2" fill="#F8F4EC" />
          <path d="M16 36v6M48 36v6" stroke="#F8F4EC" strokeWidth="3" strokeLinecap="round" />
          <circle cx="24" cy="24" r="2.8" fill="#C79A56" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-tight ${
            isLight ? "text-cream-100" : "text-ink-900 dark:text-cream-100"
          }`}
        >
          Basera <span className="text-emerald-500 dark:text-emerald-glow">Stays</span>
        </span>
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${
            isLight ? "text-cream-300/70" : "text-ink-400 dark:text-cream-400/60"
          }`}
        >
          PG in Faridabad
        </span>
      </span>
    </a>
  );
}
