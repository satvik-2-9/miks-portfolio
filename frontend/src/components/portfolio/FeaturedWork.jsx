import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { featuredWork } from "../../mock/mock";

export default function FeaturedWork() {
  const [lead, ...rest] = featuredWork;

  return (
    <section id="work" className="border-b border-ink/15 bg-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood">§ 04</span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-ink/60 uppercase">Selected Dispatches</span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <h2 className="font-display text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.01em] text-ink max-w-[760px]">
            Stories filed, campaigns commissioned, — <span className="italic">a running clipboard.</span>
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-ink/55">Curated · Updated monthly</p>
        </div>

        {/* Lead story */}
        <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-y border-ink/15 py-10 cursor-pointer">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(135deg,#1a1a1a,#2a1212_60%,#1a1a1a)]" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-paper">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">Lead story</div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood/90 mb-3">{lead.category}</div>
                  <h3 className="font-display text-[30px] md:text-[38px] leading-[1.05]">{lead.headline}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood">{lead.category} · {lead.outlet}</div>
            <h3 className="mt-4 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.01em] text-ink group-hover:text-oxblood transition-colors duration-300">
              {lead.headline}
            </h3>
            <p className="mt-5 font-serifText text-[17px] md:text-[19px] leading-[1.7] text-ink/80 max-w-[620px]">
              {lead.dek}
            </p>
            <div className="mt-6 flex items-center gap-5 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/60">
              <span>{lead.date}</span>
              <span className="w-6 h-px bg-ink/25" />
              <span className="inline-flex items-center gap-1"><Clock size={12} /> {lead.readTime}</span>
              <span className="ml-auto inline-flex items-center gap-1 text-ink group-hover:text-oxblood">
                Read <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </article>

        {/* Grid of remaining */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-ink/15 mt-2">
          {rest.map((a, idx) => (
            <article
              key={a.id}
              className={`group p-6 md:p-8 border-b border-ink/15 ${idx % 3 !== 2 ? "lg:border-r" : ""} ${idx % 2 === 0 ? "md:border-r" : ""} hover:bg-cream transition-colors duration-300 cursor-pointer`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood">{a.category}</span>
                <span className="font-mono text-[10px] tracking-[0.22em] text-ink/50">{a.date}</span>
              </div>
              <h3 className="font-display text-[22px] md:text-[26px] leading-[1.15] text-ink group-hover:text-oxblood transition-colors duration-300">
                {a.headline}
              </h3>
              <p className="mt-3 font-serifText text-[15px] leading-[1.65] text-ink/70">{a.dek}</p>
              <div className="mt-5 flex items-center justify-between font-mono text-[10px] tracking-[0.25em] uppercase text-ink/55">
                <span>{a.outlet}</span>
                <span className="inline-flex items-center gap-1 text-ink group-hover:text-oxblood">
                  {a.readTime} <ArrowUpRight size={12} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
