import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Wraps children in a fade-up-on-scroll animation.
 * Usage: <Reveal delay={100}><MyCard /></Reveal>
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
