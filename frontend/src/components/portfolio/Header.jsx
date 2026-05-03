import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../../mock/mock";

const formatDate = () => {
  const d = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return d.toLocaleDateString("en-US", options).toUpperCase();
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink/15 bg-paper/90 backdrop-blur transition-[padding] duration-300 ${
        scrolled ? "py-2" : "py-0"
      }`}
    >
      {/* Top meta bar */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-10 pt-3 pb-2 text-[10px] tracking-[0.22em] text-ink/75 font-mono">
        <span>VOL. I · ISSUE 01</span>
        <span>{formatDate()}</span>
        <span>BENGALURU · MUMBAI · GLOBAL</span>
      </div>

      {/* Masthead */}
      <div className="px-6 lg:px-10 py-3 md:py-4 border-t border-ink/10">
        <div className="flex items-center justify-between gap-6">
          <a
            href="#top"
            className="font-display leading-none select-none"
            aria-label="Mihika Sharma — home"
          >
            <span className="block text-[22px] md:text-[30px] font-semibold tracking-tight text-ink">
              Mihika Sharma
            </span>
            <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.3em] text-ink/60 mt-1">
              THE DISPATCH · PORTFOLIO
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] tracking-[0.22em] uppercase font-mono text-ink/70 hover:text-oxblood transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[12px] tracking-[0.22em] uppercase font-mono border border-ink px-4 py-2 text-ink hover:bg-ink hover:text-paper transition-colors duration-200"
            >
              Commission
            </a>
          </nav>

          <button
            className="md:hidden text-ink p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.22em] uppercase font-mono text-ink/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.22em] uppercase font-mono border border-ink px-4 py-2 text-ink w-fit"
            >
              Commission
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
