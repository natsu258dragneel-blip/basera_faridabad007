import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "../data/faq";
import Reveal from "./Reveal";

function FAQItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="border-b border-ink-900/8 dark:border-cream-200/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-[15px] sm:text-base text-ink-800 dark:text-cream-100">
          {faq.question}
        </span>
        <ChevronDown
          size={19}
          className={`shrink-0 text-emerald-600 dark:text-emerald-glow transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: isOpen ? contentRef.current?.scrollHeight : 0 }}
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
      >
        <p className="pb-5 text-sm sm:text-[15px] text-ink-500 dark:text-cream-400/80 leading-relaxed pr-8">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-pad py-20 sm:py-28 bg-white dark:bg-ink-800/40">
      <div className="container-max max-w-3xl">
        <Reveal className="text-center">
          <span className="eyebrow justify-center">Have Questions?</span>
          <h2 className="section-heading mt-3">Frequently Asked Questions</h2>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
