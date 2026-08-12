// Generates tasteful, on-brand SVG placeholder images.
// Run: node scripts/generate-placeholders.mjs
// Replace any of the output files in /public/images with real photos any time —
// same filename, same folder, no code changes needed.
import { writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

const PALETTES = {
  emerald: ["#0E6B57", "#123B32"],
  ink: ["#20281F", "#0F1410"],
  brass: ["#C79A56", "#7A5A2A"],
  clay: ["#2E4A3E", "#16241D"],
};

const ICONS = {
  bed: `<path d="M6 84V44a8 8 0 0 1 8-8h84a8 8 0 0 1 8 8v40" />
        <path d="M6 84h100" />
        <path d="M6 68h100" />
        <circle cx="26" cy="52" r="7" />
        <path d="M40 52h50v16H40z" />`,
  building: `<rect x="18" y="10" width="76" height="98" rx="2" />
        <path d="M18 108h76" />
        <path d="M34 26h10M50 26h10M66 26h10M34 42h10M50 42h10M66 42h10M34 58h10M50 58h10M66 58h10M34 74h10M50 74h10M66 74h10" />
        <rect x="48" y="90" width="16" height="18" />`,
  pin: `<path d="M56 108s34-38 34-63a34 34 0 1 0-68 0c0 25 34 63 34 63z" />
        <circle cx="56" cy="45" r="13" />`,
  camera: `<rect x="8" y="30" width="104" height="66" rx="8" />
        <path d="M40 30l8-14h16l8 14" />
        <circle cx="60" cy="63" r="20" />
        <circle cx="94" cy="44" r="3" />`,
};

function escapeXml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function svgTemplate({ w, h, title, subtitle, icon, palette }) {
  const [c1, c2] = PALETTES[palette];
  const iconPath = ICONS[icon];
  const id = Math.random().toString(36).slice(2, 8);
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${safeTitle}">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <pattern id="p${id}" width="34" height="34" patternUnits="userSpaceOnUse" patternTransform="rotate(20)">
      <line x1="0" y1="0" x2="0" y2="34" stroke="#F7F3EA" stroke-opacity="0.05" stroke-width="34"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <rect width="${w}" height="${h}" fill="url(#p${id})"/>
  <g transform="translate(${w / 2 - 60}, ${h / 2 - 100})" fill="none" stroke="#F7F3EA" stroke-opacity="0.35" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    ${iconPath}
  </g>
  <text x="${w / 2}" y="${h / 2 + 78}" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="22" font-weight="700" fill="#F7F3EA" fill-opacity="0.92" letter-spacing="0.3">${safeTitle}</text>
  ${subtitle ? `<text x="${w / 2}" y="${h / 2 + 104}" text-anchor="middle" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="13" font-weight="500" fill="#F7F3EA" fill-opacity="0.55" letter-spacing="2">${safeSubtitle.toUpperCase()}</text>` : ""}
</svg>`;
}

const jobs = [
  // Room placeholders
  { path: "public/images/rooms/room-sector2.svg", w: 800, h: 600, title: "Boys PG · Sector 2", subtitle: "Photo coming soon", icon: "bed", palette: "emerald" },
  { path: "public/images/rooms/room-ballabgarh.svg", w: 800, h: 600, title: "Boys PG · Ballabgarh", subtitle: "Photo coming soon", icon: "bed", palette: "clay" },
  { path: "public/images/rooms/room-sector11.svg", w: 800, h: 600, title: "PG · Sector 11", subtitle: "Photo coming soon", icon: "bed", palette: "ink" },
  { path: "public/images/rooms/room-sarurpur.svg", w: 800, h: 600, title: "PG · Sarurpur", subtitle: "Photo coming soon", icon: "bed", palette: "brass" },

  // Location placeholders
  { path: "public/images/locations/location-sector2.svg", w: 700, h: 560, title: "Sector 2", subtitle: "Faridabad", icon: "pin", palette: "emerald" },
  { path: "public/images/locations/location-sector11.svg", w: 700, h: 560, title: "Sector 11", subtitle: "Faridabad", icon: "pin", palette: "ink" },
  { path: "public/images/locations/location-ballabgarh.svg", w: 700, h: 560, title: "Ballabgarh", subtitle: "Faridabad", icon: "pin", palette: "clay" },
  { path: "public/images/locations/location-sarurpur.svg", w: 700, h: 560, title: "Sarurpur", subtitle: "Industrial Area", icon: "pin", palette: "brass" },

  // Gallery filler placeholders
  { path: "public/images/gallery/gallery-kitchen.svg", w: 900, h: 700, title: "Kitchen & Dining", subtitle: "Photo coming soon", icon: "building", palette: "clay" },
  { path: "public/images/gallery/gallery-security.svg", w: 900, h: 700, title: "CCTV & Security", subtitle: "Photo coming soon", icon: "camera", palette: "ink" },
  { path: "public/images/gallery/gallery-facade.svg", w: 900, h: 700, title: "Building Facade", subtitle: "Photo coming soon", icon: "building", palette: "emerald" },

  // About fallback
  { path: "public/images/about/about-fallback.svg", w: 900, h: 1100, title: "Our PG, Faridabad", subtitle: "Photo coming soon", icon: "building", palette: "emerald" },

  // Open-graph / social share fallback
  { path: "public/images/og/og-cover.svg", w: 1200, h: 630, title: "PG Accommodation, Faridabad", subtitle: "Comfortable & Affordable", icon: "building", palette: "emerald" },
];

for (const job of jobs) {
  mkdirSync(dirname(job.path), { recursive: true });
  writeFileSync(job.path, svgTemplate(job));
  console.log("wrote", job.path);
}
