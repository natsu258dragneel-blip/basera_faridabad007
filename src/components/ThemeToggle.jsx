import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme.jsx";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className={`relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-ink-900/10 bg-ink-900/5 dark:border-cream-200/15 dark:bg-cream-200/10 transition-colors duration-300 ${className}`}
    >
      <span
        className={`absolute top-1 left-1 flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-ink-800 shadow-soft transition-transform duration-300 ease-out ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? (
          <Moon size={15} className="text-emerald-glow" />
        ) : (
          <Sun size={15} className="text-brass-500" />
        )}
      </span>
    </button>
  );
}
