import React from "react";
import { ArrowDownRight, MapPin, Signal, Download } from "lucide-react";
import { profile } from "../../mock/mock";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Hero() {
  const downloadCV = () => {
    fetch(`${API}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event: "download_cv", section: "hero" }),
    }).catch(() => {});
    window.location.href = `${API}/resume`;
  };
  return (
    <section id="top" className="relative border-b border-ink/15 bg-paper">
      {/* subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 pt-10 md:pt-14 pb-14 md:pb-20">
        {/* Section meta */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-ink/60 border-b border-ink/15 pb-3">
          <span>FRONT PAGE · A1</span>
          <span className="hidden sm:inline">COMMUNICATIONS · JOURNALISM · MARKETS</span>
          <span>EDITION ’26</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pt-10 md:pt-14">
          {/* Left: Editorial copy */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-oxblood mb-6 flex items-center gap-2">
              <Signal size={13} className="text-oxblood" /> Filed live · Breaking news desk
            </p>

            <h1 className="font-display text-[44px] leading-[0.98] sm:text-[62px] md:text-[78px] lg:text-[88px] tracking-[-0.02em] text-ink">
              Writing markets.
              <br />
              <span className="italic font-normal">Moving narratives.</span>
            </h1>

            <div className="mt-8 max-w-[640px] border-l-2 border-oxblood pl-5">
              <p className="font-serifText text-[17px] md:text-[19px] leading-[1.7] text-ink/85">
                {profile.leadParagraph}
              </p>
            </div>

            <p className="mt-6 font-serifText text-[15px] md:text-[17px] leading-[1.75] text-ink/70 max-w-[620px]">
              {profile.secondaryParagraph}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.25em] uppercase font-mono hover:bg-oxblood transition-colors duration-300"
              >
                Read the dispatches
                <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />
              </a>
              <button
                onClick={downloadCV}
                className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 text-[12px] tracking-[0.25em] uppercase font-mono hover:bg-ink hover:text-paper transition-colors duration-300"
              >
                <Download size={14} /> Download CV
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-ink/70 hover:text-oxblood px-3 py-3 text-[12px] tracking-[0.25em] uppercase font-mono underline-offset-4 hover:underline transition-colors duration-300"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-[11px] font-mono tracking-[0.22em] text-ink/60">
              <MapPin size={12} />
              <span>{profile.location.toUpperCase()}</span>
              <span className="w-6 h-px bg-ink/30" />
              <span>{profile.currentRole.toUpperCase()}</span>
            </div>
          </div>

          {/* Right: portrait card */}
          <div className="lg:col-span-5">
            <figure className="relative">
              <div className="relative overflow-hidden bg-ink/5 border border-ink/15">
                <img
                  src={profile.portrait}
                  alt="Portrait of Mihika Sharma"
                  className="w-full h-[460px] md:h-[560px] lg:h-[620px] object-cover object-top"
                />
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-paper">
                  <span className="bg-ink/80 px-2 py-1">PORTRAIT</span>
                  <span className="bg-ink/80 px-2 py-1">PLATE 01</span>
                </div>
              </div>
              <figcaption className="mt-4 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60 flex items-center justify-between">
                <span>Mihika Sharma, 2025</span>
                <span className="italic font-serifText tracking-normal normal-case text-ink/70">
                  {profile.bylineTagline}
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-b border-ink/15 divide-x divide-ink/15">
          {profile.stats.map((s) => (
            <div key={s.label} className="px-4 py-6 md:px-6 md:py-8">
              <div className="font-display text-[34px] md:text-[44px] leading-none text-ink">{s.value}</div>
              <div className="mt-2 font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
