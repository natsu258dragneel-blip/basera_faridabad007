import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Reveal from "./Reveal";

const GALLERY_IMAGES = [
  { src: "/images/hero/hero-exterior.jpg", alt: "Basera Stays building exterior", tall: true },
  { src: "/images/gallery/gallery-room-1.jpg", alt: "Furnished sharing room with twin beds" },
  { src: "/images/gallery/gallery-common-area.jpg", alt: "Common dining and seating area" },
  { src: "/images/gallery/gallery-room-2.jpg", alt: "Bedroom with study desk and chair", tall: true },
  { src: "/images/gallery/gallery-kitchen.svg", alt: "Kitchen and dining space" },
  { src: "/images/gallery/gallery-entrance.jpg", alt: "Building entrance and parking area" },
  { src: "/images/gallery/gallery-security.svg", alt: "CCTV and security coverage" },
  { src: "/images/gallery/gallery-facade.svg", alt: "Building facade" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % GALLERY_IMAGES.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="section-pad py-20 sm:py-28 bg-white dark:bg-ink-800/40">
      <div className="container-max">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Take a Look Around</span>
          <h2 className="section-heading mt-3">Life at Basera Stays</h2>
        </Reveal>

        <div className="mt-12 columns-2 sm:columns-3 lg:columns-4 gap-4 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal key={img.src + i} delay={(i % 4) * 60} className="break-inside-avoid">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className={`group relative block w-full overflow-hidden rounded-2xl shadow-soft ${
                  img.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
                aria-label={`View larger photo: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 group-hover:bg-ink-950/35 transition-colors duration-300">
                  <ZoomIn
                    size={26}
                    className="text-cream-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10 bg-ink-950/90 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close gallery"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            onClick={() => setLightboxIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20"
          >
            <ChevronLeft size={22} />
          </button>
          <img
            src={GALLERY_IMAGES[lightboxIndex].src}
            alt={GALLERY_IMAGES[lightboxIndex].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
          />
          <button
            type="button"
            onClick={() => setLightboxIndex((i) => (i + 1) % GALLERY_IMAGES.length)}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-cream-100/10 text-cream-100 hover:bg-cream-100/20"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </section>
  );
}
