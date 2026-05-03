import React from "react";
import { expertise, education, achievements } from "../../mock/mock";
import { GraduationCap, Trophy, ArrowRight } from "lucide-react";

export default function ExpertiseEdu() {
  return (
    <section id="expertise" className="border-b border-ink/15 bg-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood">§ 05</span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-ink/60 uppercase">Tools of the Trade</span>
        </div>

        <h2 className="font-display text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.01em] text-ink max-w-[820px]">
          Craft, disciplines <span className="italic">& credentials.</span>
        </h2>

        {/* Expertise grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/15">
          {expertise.map((e, i) => (
            <div
              key={e.title}
              className="group border-r border-b border-ink/15 p-7 md:p-9 bg-paper/50 hover:bg-paper transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="font-mono text-[11px] tracking-[0.3em] text-ink/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <ArrowRight
                  size={16}
                  className="text-ink/35 group-hover:text-oxblood group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
              <h3 className="font-display text-[24px] md:text-[26px] leading-[1.15] text-ink">
                {e.title}
              </h3>
              <p className="mt-3 font-serifText text-[15px] leading-[1.65] text-ink/70">
                {e.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Education + Achievements side by side */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink/60 mb-6">
              <GraduationCap size={14} className="text-oxblood" />
              Education
            </div>
            <div className="space-y-8">
              {education.map((ed) => (
                <div key={ed.school} className="border-t border-ink/15 pt-6">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-display text-[24px] md:text-[28px] leading-tight text-ink">
                      {ed.school}
                    </h3>
                    <span className="font-mono text-[11px] tracking-[0.22em] text-ink/55">{ed.dates}</span>
                  </div>
                  <p className="mt-2 font-serifText italic text-[16px] text-ink/80">{ed.degree}</p>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/50">{ed.location}</p>
                  <p className="mt-3 font-serifText text-[15px] leading-[1.7] text-ink/70">{ed.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink/60 mb-6">
              <Trophy size={14} className="text-oxblood" />
              Achievements
            </div>
            <div className="space-y-8">
              {achievements.map((a) => (
                <div key={a.title} className="border-t border-ink/15 pt-6">
                  <h3 className="font-display text-[22px] md:text-[26px] leading-tight text-ink">{a.title}</h3>
                  <p className="mt-3 font-serifText text-[15.5px] leading-[1.7] text-ink/75">{a.detail}</p>
                </div>
              ))}
              <div className="border-t border-ink/15 pt-6">
                <p className="font-serifText italic text-[15px] text-ink/60">
                  “The discipline of sport and the discipline of the newsroom are closer than most people imagine.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
