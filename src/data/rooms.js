// ─────────────────────────────────────────────────────────────
// ROOM / PROPERTY DATA
// Edit this file to add, remove, or update PG listings.
// `images` paths point to /public/images — drop a real photo in
// the matching folder using the same filename to replace it.
// ─────────────────────────────────────────────────────────────

export const roomTypes = ["Single", "Double Sharing", "Triple Sharing"];

export const budgetRanges = [
  { label: "Under ₹7,000", min: 0, max: 7000 },
  { label: "₹7,000 – ₹10,000", min: 7000, max: 10000 },
  { label: "₹10,000+", min: 10000, max: Infinity },
];

export const rooms = [
  {
    id: "sector-2-boys",
    name: "Boys PG — Sector 2",
    location: "Sector 2, Faridabad",
    locationSlug: "sector-2",
    roomType: "Double Sharing",
    price: 6000,
    priceLabel: "₹6,000/month",
    availability: "Available",
    rating: 4.7,
    description:
      "A well-kept boys' PG in the heart of Sector 2, close to markets, transport and colleges. Bright rooms, home-style food and a calm, secure environment.",
    amenities: ["Wi-Fi", "Food Included", "Power Backup", "CCTV Security", "Furnished"],
    images: [
      "/images/gallery/gallery-room-1.jpg",
      "/images/gallery/gallery-room-2.jpg",
    ],
    tags: ["Boys", "Popular"],
  },
  {
    id: "ballabgarh-boys",
    name: "Boys PG — Ballabgarh",
    location: "Ballabgarh, Faridabad",
    locationSlug: "ballabgarh",
    roomType: "Triple Sharing",
    price: 6000,
    priceLabel: "₹6,000/month",
    availability: "Available",
    rating: 4.5,
    description:
      "Affordable and spacious sharing rooms in Ballabgarh, a short walk from the main market and bus stand. Great for students on a budget.",
    amenities: ["Wi-Fi", "Air Cooler", "Common Area", "Housekeeping", "Parking"],
    images: [
      "/images/gallery/gallery-common-area.jpg",
      "/images/gallery/gallery-entrance.jpg",
    ],
    tags: ["Boys", "Budget-Friendly"],
  },
  {
    id: "sector-11-pg",
    name: "PG — Sector 11",
    location: "Sector 11, Faridabad",
    locationSlug: "sector-11",
    roomType: "Single",
    price: 7000,
    priceLabel: "₹7,000/month",
    availability: "Filling Fast",
    rating: 4.8,
    description:
      "Private single rooms in a quiet residential pocket of Sector 11 — ideal for working professionals who value privacy and easy commute.",
    amenities: ["Wi-Fi", "Geyser", "Cupboard / Locker", "24-Hour Water", "CCTV Security"],
    images: [
      "/images/hero/hero-exterior.jpg",
      "/images/gallery/gallery-room-1.jpg",
    ],
    tags: ["Co-ed", "Private Room"],
  },
  {
    id: "sarurpur-pg",
    name: "PG — Sarurpur Industrial Area",
    location: "Sarurpur Industrial Area, Faridabad",
    locationSlug: "sarurpur",
    roomType: "Double Sharing",
    price: 6000,
    priceLabel: "₹6,000/month",
    availability: "Available",
    rating: 4.4,
    description:
      "Practical, no-fuss accommodation close to the industrial belt — a convenient stay for working professionals with early shifts.",
    amenities: ["Wi-Fi", "Bed & Mattress", "Power Backup", "Kitchen Facilities", "Parking"],
    images: [
      "/images/gallery/gallery-room-2.jpg",
      "/images/gallery/gallery-facade.svg",
    ],
    tags: ["Co-ed", "Near Industrial Area"],
  },
  {
    id: "sector-70-imt",
    name: "PG — Sector 70, IMT Faridabad",
    location: "Sector 70 / IMT Faridabad",
    locationSlug: "sector-70-imt",
    roomType: "Double Sharing",
    price: 6000,
    priceLabel: "₹6,000/month",
    availability: "Available",
    rating: 4.9,
    description:
      "Our flagship property in IMT Faridabad — freshly maintained rooms with proper ventilation, a shared dining hall and dedicated housekeeping staff. Minutes from IMT's industrial and corporate offices.",
    amenities: ["Wi-Fi", "Food Included", "Furnished Rooms", "CCTV Security", "Housekeeping", "Power Backup"],
    images: [
      "/images/rooms/room-imt-1.jpg",
      "/images/rooms/room-imt-2.jpg",
      "/images/gallery/gallery-room-1.jpg",
      "/images/gallery/gallery-room-2.jpg",
      "/images/gallery/gallery-common-area.jpg",
    ],
    tags: ["Co-ed", "Flagship"],
    featured: true,
  },
];
