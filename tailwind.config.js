/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1B211D",
          50: "#F4F5F3",
          100: "#E4E6E1",
          200: "#C4C8C0",
          300: "#9BA195",
          400: "#6E756A",
          500: "#4D5449",
          600: "#3A4036",
          700: "#2C312A",
          800: "#20281F",
          900: "#141815",
          950: "#0D100D",
        },
        cream: {
          DEFAULT: "#F8F4EC",
          50: "#FFFFFF",
          100: "#FBF9F4",
          200: "#F8F4EC",
          300: "#F0E9D9",
          400: "#E4D9BF",
        },
        emerald: {
          DEFAULT: "#0E6B57",
          50: "#E7F3F0",
          100: "#C7E4DC",
          200: "#93C9BB",
          300: "#5CAC97",
          400: "#2F8E76",
          500: "#0E6B57",
          600: "#0A5646",
          700: "#0A4F41",
          800: "#083E33",
          900: "#062E26",
          glow: "#34A084",
        },
        brass: {
          DEFAULT: "#C79A56",
          50: "#FBF5EA",
          100: "#F2E1BF",
          200: "#E5C88C",
          300: "#D9B274",
          400: "#C79A56",
          500: "#AC8043",
          600: "#8A6635",
          700: "#7A5A2A",
        },
        stone: {
          50: "#FAF8F3",
          100: "#F0ECE1",
          200: "#DCD5C6",
          300: "#C2B9A5",
          400: "#8A8477",
          500: "#6B665B",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "ui-serif", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(20, 24, 21, 0.06), 0 12px 32px -12px rgba(20, 24, 21, 0.10)",
        lift: "0 8px 24px -8px rgba(20, 24, 21, 0.16), 0 24px 48px -20px rgba(20, 24, 21, 0.18)",
        glow: "0 0 0 1px rgba(14, 107, 87, 0.15), 0 8px 30px -6px rgba(14, 107, 87, 0.35)",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "1.75rem",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "marquee": "marquee 30s linear infinite",
        "float": "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

