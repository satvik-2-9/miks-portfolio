import React from "react";
import { profile, navLinks, socials } from "../../mock/mock";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-paper text-ink">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="font-display text-[26px] leading-none">Mihika Sharma</div>
            <div className="mt-1 font-mono text-[10px] tracking-[0.3em] text-ink/55 uppercase">The Dispatch · Portfolio</div>
            <p className="mt-5 font-serifText text-[15px] leading-[1.7] text-ink/70 max-w-[420px]">
              An editorial portfolio — chronicling communications, journalism and markets from Bengaluru to the world.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.3em] text-ink/45 uppercase mb-4">Sections</div>
            <ul className="space-y-2 font-serifText text-[15px] text-ink/80">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-oxblood transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.3em] text-ink/45 uppercase mb-4">Elsewhere</div>
            <ul className="space-y-2 font-serifText text-[15px] text-ink/80">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target={s.href.startsWith("http") ? "_top" : undefined} rel="noopener noreferrer" className="hover:text-oxblood transition-colors">
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/50 mr-2">{s.label}</span>
                    {s.handle}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink/15 flex items-center justify-between flex-wrap gap-3 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/55">
          <span>© {year} Mihika Sharma · All rights reserved</span>
          <span>Set in Playfair Display, Source Serif & JetBrains Mono</span>
          <span>Bengaluru · {new Date().toLocaleDateString("en-US",{month:"short",day:"numeric"})}</span>
        </div>
      </div>
    </footer>
  );
}
