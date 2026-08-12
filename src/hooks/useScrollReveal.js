import { useEffect, useRef, useState } from "react";

/**
 * Attaches an IntersectionObserver to reveal an element with a fade-up
 * animation the first time it scrolls into view. Respects reduced-motion
 * by revealing immediately (CSS handles the actual motion reduction too).
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
