import React from "react";
import { profile } from "../../mock/mock";

export default function About() {
  return (
    <section id="about" className="border-b border-ink/15 bg-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood">§ 02</span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-ink/60 uppercase">About the Correspondent</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
              A reporter's discipline.
              <br />
              <span className="italic text-oxblood">A strategist's eye.</span>
            </h2>
            <p className="mt-6 font-mono text-[11px] tracking-[0.25em] uppercase text-ink/60">
              — Profile
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-ink/15">
            <p className="font-serifText first-letter:font-display first-letter:text-[72px] first-letter:leading-[0.9] first-letter:mr-2 first-letter:float-left first-letter:text-oxblood text-[17px] md:text-[19px] leading-[1.75] text-ink/85">
              Mihika files from the intersection of markets, geopolitics and brand. At Thomson Reuters, she moves on breaking news across Asian and Nordic exchanges — earnings, IPOs, mega‑deals — and has covered live conflict reporting from the Israel–Iran war.
            </p>
            <p className="mt-5 font-serifText text-[16px] md:text-[18px] leading-[1.8] text-ink/75">
              Before the newsroom, she shaped digital identities for Shark Tank India startups, Indian schools and fashion brands — running multi‑channel campaigns that hinged on data, retention and sharp visual storytelling. A graduate of Xavier Institute of Communications with a political science background from Delhi University, her work is grounded in civic literacy and editorial craft.
            </p>
            <p className="mt-5 font-serifText text-[16px] md:text-[18px] leading-[1.8] text-ink/75">
              Off the desk, she's a former Team India jump‑rope athlete and national‑level badminton player — habits that translate neatly to deadline newsrooms: precision, repetition, nerve.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-[11px] tracking-[0.2em] uppercase text-ink/70">
              <div className="border border-ink/15 px-3 py-3">
                <div className="text-ink/50 text-[9px] mb-1">Based</div>
                <div>{profile.location}</div>
              </div>
              <div className="border border-ink/15 px-3 py-3">
                <div className="text-ink/50 text-[9px] mb-1">Desk</div>
                <div>Breaking News</div>
              </div>
              <div className="border border-ink/15 px-3 py-3">
                <div className="text-ink/50 text-[9px] mb-1">Beat</div>
                <div>Markets · Geopolitics</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
