import React, { useEffect, useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

// Sticky bottom-right "Get in touch" byline.
// - Slides in after the hero scrolls past
// - Hides itself when the Contact section is in view so it never overlaps the form
export default function StickyContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolledPastHero = window.scrollY > 600;
      const contact = document.getElementById("contact");
      let contactInView = false;
      if (contact) {
        const r = contact.getBoundingClientRect();
        contactInView = r.top < window.innerHeight - 80 && r.bottom > 80;
      }
      setVisible(scrolledPastHero && !contactInView);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href="#contact"
      data-testid="sticky-contact-byline"
      aria-label="Get in touch"
      className={`fixed z-40 bottom-5 right-5 md:bottom-6 md:right-6 group inline-flex items-center gap-2 md:gap-3 pl-3 md:pl-4 pr-2 md:pr-3 py-2 md:py-2.5 bg-ink text-paper border border-ink shadow-[0_8px_28px_-8px_rgba(0,0,0,0.45)] hover:bg-oxblood hover:border-oxblood transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span
        className="hidden sm:inline font-mono text-[10px] tracking-[0.32em] uppercase text-paper/70 border-r border-paper/25 pr-3"
        aria-hidden
      >
        Filed
      </span>
      <Mail size={14} className="text-paper/90 group-hover:text-paper" />
      <span className="font-display text-[14px] md:text-[15px] leading-none italic">
        Get in touch
      </span>
      <span className="ml-1 w-7 h-7 grid place-items-center bg-paper/10 group-hover:bg-paper/20 transition-colors">
        <ArrowUpRight size={13} className="text-paper" />
      </span>
    </a>
  );
}
