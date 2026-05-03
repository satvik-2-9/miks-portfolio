import React from "react";
import { ArrowUpRight } from "lucide-react";
import { experience } from "../../mock/mock";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-ink/15 bg-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood">§ 06</span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-ink/60 uppercase">Assignments</span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <h2 className="font-display text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.01em] text-ink max-w-[760px]">
            Five newsrooms, one independent venture. <span className="italic">One through&#8209;line: clarity, at speed.</span>
          </h2>
          <p className="font-serifText text-[15px] text-ink/65 max-w-[320px]">
            From wire services to broadcast, brand and a self-run civic platform &mdash; a timeline of roles that traded complexity for conviction.
          </p>
        </div>

        <ol className="relative">
          {experience.map((job, idx) => (
            <li
              key={job.id}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-t border-ink/15 hover:bg-paper/60 transition-colors duration-300 cursor-default"
            >
              <div className="lg:col-span-2">
                <div className="font-mono text-[11px] tracking-[0.22em] text-ink/60">
                  {String(idx + 1).padStart(2, "0")} / {String(experience.length).padStart(2, "0")}
                </div>
                <div className="mt-3 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/70">
                  {job.dates}
                </div>
                <div className="mt-1 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/50">
                  {job.location}
                </div>
              </div>

              <div className="lg:col-span-4">
                <h3 className="font-display text-[28px] md:text-[34px] leading-[1.05] text-ink group-hover:text-oxblood transition-colors duration-300">
                  {job.company}
                </h3>
                <p className="mt-2 font-serifText italic text-[16px] text-ink/75">{job.role}</p>
                <p className="mt-3 font-mono text-[10px] tracking-[0.25em] uppercase text-oxblood">
                  {job.kicker}
                </p>
                {job.link && (
                  <a
                    href={job.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] uppercase text-ink border-b border-ink/40 hover:text-oxblood hover:border-oxblood pb-0.5 transition-colors"
                  >
                    {job.link.label}
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>

              <div className="lg:col-span-6">
                <ul className="space-y-3">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="font-serifText text-[15.5px] md:text-[16.5px] leading-[1.7] text-ink/80 relative pl-5"
                    >
                      <span className="absolute left-0 top-[0.85em] w-2 h-px bg-oxblood" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <li className="border-t border-ink/15" />
        </ol>
      </div>
    </section>
  );
}
