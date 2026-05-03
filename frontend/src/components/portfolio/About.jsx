import React from "react";
import { profile } from "../../mock/mock";

const disciplines = [
  "Journalism",
  "Public Relations",
  "Corporate Communications",
  "Financial Reporting",
  "Broadcast",
  "Marketing & Brand",
];

export default function About() {
  return (
    <section id="about" className="border-b border-ink/15 bg-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood">§ 02</span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-ink/60 uppercase">About the Byline</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.01em] text-ink">
              A reporter&rsquo;s discipline.
              <br />
              <span className="italic text-oxblood">A strategist&rsquo;s eye.</span>
            </h2>
            <p className="mt-6 font-serifText text-[16px] leading-[1.75] text-ink/70 max-w-[380px]">
              A multi-format communicator working across journalism, PR, corporate communications, broadcast and brand &mdash; wherever a story needs to move an audience.
            </p>
            <p className="mt-6 font-mono text-[11px] tracking-[0.25em] uppercase text-ink/60">
              &mdash; Profile
            </p>
          </div>

          <div className="lg:col-span-7 lg:pl-10 lg:border-l border-ink/15">
            <p className="font-serifText first-letter:font-display first-letter:text-[72px] first-letter:leading-[0.9] first-letter:mr-2 first-letter:float-left first-letter:text-oxblood text-[17px] md:text-[19px] leading-[1.75] text-ink/85">
              Mihika works across the full arc of modern communications &mdash; filing breaking news from a global wire one day, scripting a brand narrative the next. At Thomson Reuters she covers financial markets, IPOs and mega-deals for institutional audiences; before the newsroom she led social and brand campaigns for Shark Tank India startups, fashion labels and Indian schools.
            </p>
            <p className="mt-5 font-serifText text-[16px] md:text-[18px] leading-[1.8] text-ink/75">
              Her practice sits at the intersection of <span className="italic">journalism, public relations, corporate communications, broadcast and marketing</span>. She has anchored on-camera civic segments at Namaste Democracy, built multi-channel digital strategies for Tier&#8209;1 clients, and managed real-time stakeholder flows on high-stakes stories including NVIDIA earnings and the $110B Paramount&ndash;Warner Bros. Discovery merger.
            </p>
            <p className="mt-5 font-serifText text-[16px] md:text-[18px] leading-[1.8] text-ink/75">
              Trained at Xavier Institute of Communications with a political science grounding from Delhi University, she brings editorial craft, financial fluency and a brand-builder&rsquo;s instinct to every desk she sits at &mdash; whether that&rsquo;s a newsroom, a PR war-room, a marketing studio or a C-suite briefing.
            </p>
            <p className="mt-5 font-serifText text-[16px] md:text-[18px] leading-[1.8] text-ink/75">
              Off the wire, her work in independent civic media takes two forms: as part of the <span className="italic">Namaste Democracy</span> team, she anchored a reel that crossed <span className="font-display text-ink">1.3M+ views</span>; and on her own, she built and runs <span className="italic">Civic Lens</span> &mdash; concept, brand, scripting, shooting, editing and posting &mdash; end&#8209;to&#8209;end.
            </p>
            <p className="mt-5 font-serifText text-[16px] md:text-[18px] leading-[1.8] text-ink/75">
              Off the desk, she&rsquo;s a former Team India jump-rope athlete and national-level badminton player &mdash; habits that translate neatly to deadline environments: precision, repetition, nerve.
            </p>

            {/* Disciplines */}
            <div className="mt-10">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink/55 mb-4">
                Open to &middot; Practising across
              </div>
              <div className="flex flex-wrap gap-2">
                {disciplines.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center font-mono text-[11px] tracking-[0.18em] uppercase text-ink/80 border border-ink/20 bg-paper px-3 py-2 hover:border-oxblood hover:text-oxblood transition-colors duration-200"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-[11px] tracking-[0.2em] uppercase text-ink/70">
              <div className="border border-ink/15 px-3 py-3">
                <div className="text-ink/50 text-[9px] mb-1">Based</div>
                <div>{profile.location}</div>
              </div>
              <div className="border border-ink/15 px-3 py-3">
                <div className="text-ink/50 text-[9px] mb-1">Currently</div>
                <div>Reuters &middot; Breaking News</div>
              </div>
              <div className="border border-ink/15 px-3 py-3">
                <div className="text-ink/50 text-[9px] mb-1">Open To</div>
                <div>PR &middot; Comms &middot; Brand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
