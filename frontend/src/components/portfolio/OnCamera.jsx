import React, { useState, useMemo, useRef } from "react";
import { Play, Pause, Instagram, Youtube, FileText, Clock, Volume2, VolumeX } from "lucide-react";
import { multimedia, featuredReel } from "../../mock/mock";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "reel", label: "Reels" },
  { key: "long", label: "Long\u2011form" },
  { key: "article", label: "Essays" },
];

const PlatformIcon = ({ type, platform, size = 14 }) => {
  if (type === "article") return <FileText size={size} />;
  if (platform === "Instagram") return <Instagram size={size} />;
  if (platform === "YouTube") return <Youtube size={size} />;
  return <Play size={size} />;
};

export default function OnCamera() {
  const [filter, setFilter] = useState("all");
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const items = useMemo(
    () => (filter === "all" ? multimedia : multimedia.filter((m) => m.type === filter)),
    [filter]
  );

  return (
    <section id="on-camera" className="border-b border-ink/15 bg-cream">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood">&sect; 04</span>
          <span className="h-px flex-1 bg-ink/20" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-ink/60 uppercase">On Camera &middot; Features &amp; Reels</span>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <h2 className="font-display text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.01em] text-ink max-w-[820px]">
            The voice, the face, <span className="italic">the edit.</span>
          </h2>
          <p className="font-serifText text-[15px] text-ink/65 max-w-[360px]">
            Work from Namaste Democracy, Civic Lens and The Raisina Hills &mdash; anchoring, reporting, and scripting civic stories across formats.
          </p>
        </div>

        {/* Featured native video reel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 border-y border-ink/15 py-10">
          <div className="lg:col-span-5">
            <div
              className="relative aspect-[9/16] bg-ink overflow-hidden cursor-pointer group/v select-none"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src={featuredReel.src}
                poster={featuredReel.poster}
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* dark overlay when paused */}
              {!playing && (
                <div className="absolute inset-0 bg-ink/35 transition-opacity duration-300" />
              )}
              {/* top badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-paper">
                <span className="bg-ink/60 backdrop-blur px-2 py-1 inline-flex items-center gap-1.5">
                  <Instagram size={12} /> REEL
                </span>
                <span className="bg-oxblood text-paper px-2 py-1">FEATURED</span>
              </div>

              {/* mute toggle */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 grid place-items-center bg-ink/60 backdrop-blur text-paper hover:bg-oxblood transition-colors"
                aria-label={muted ? "unmute" : "mute"}
              >
                {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              {/* center play/pause */}
              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <span
                  className={`w-16 h-16 md:w-20 md:h-20 grid place-items-center rounded-full border border-paper/50 backdrop-blur-sm bg-paper/10 transition-all duration-300 ${
                    playing ? "opacity-0 group-hover/v:opacity-100 scale-90" : "opacity-100 scale-100"
                  }`}
                >
                  {playing ? <Pause size={26} className="text-paper" /> : <Play size={28} className="text-paper translate-x-0.5" />}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood">
              Featured Reel &middot; Plays Inline
            </div>
            <h3 className="mt-4 font-display text-[32px] md:text-[44px] leading-[1.04] tracking-[-0.01em] text-ink">
              {featuredReel.title}
            </h3>
            <p className="mt-5 font-serifText text-[16.5px] md:text-[18px] leading-[1.7] text-ink/80 max-w-[560px]">
              {featuredReel.blurb}
            </p>

            {/* Metric callout */}
            <div className="mt-7 inline-flex items-stretch border border-ink w-fit">
              <span className="flex items-baseline gap-1 px-5 py-3 bg-oxblood text-paper">
                <span className="font-display text-[30px] leading-none">{featuredReel.metric}</span>
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase opacity-90">{featuredReel.metricLabel}</span>
              </span>
              <span className="flex flex-col justify-center px-5 py-3 bg-paper">
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-ink/55">
                  Reach
                </span>
                <span className="font-serifText italic text-[14px] leading-tight mt-0.5">
                  Beyond the algorithm
                </span>
              </span>
            </div>

            <p className="mt-7 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/50">
              {featuredReel.category}
            </p>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 font-mono text-[11px] tracking-[0.22em] uppercase">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 border transition-colors duration-200 ${
                filter === f.key
                  ? "bg-ink text-paper border-ink"
                  : "bg-transparent text-ink/70 border-ink/25 hover:border-ink hover:text-ink"
              }`}
            >
              {f.label}
            </button>
          ))}
          <span className="ml-auto text-ink/50">{items.length} pieces</span>
        </div>

        {/* Masonry-like editorial grid. 12-col with variable spans based on type */}
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-5">
          {items.map((m) => {
            const isReel = m.type === "reel";
            const isLong = m.type === "long";
            const isArticle = m.type === "article";

            // Span classes
            const spanCls = isReel
              ? "col-span-1 md:col-span-2 lg:col-span-3"
              : isLong
              ? "col-span-2 md:col-span-3 lg:col-span-6"
              : "col-span-2 md:col-span-3 lg:col-span-6";

            const ratioCls = isReel ? "aspect-[9/16]" : isLong ? "aspect-[16/10]" : "aspect-[16/9]";

            return (
              <article key={m.id} className={`group ${spanCls}`}>
                <div
                  className={`relative overflow-hidden ${ratioCls} bg-ink cursor-pointer`}
                >
                  {/* Generative backdrop unique per id */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        isReel
                          ? `linear-gradient(145deg, #1a1a1a 0%, #3a1818 45%, #7c1e22 100%)`
                          : isLong
                          ? `linear-gradient(120deg, #141414 0%, #2a2220 60%, #4a2a20 100%)`
                          : `linear-gradient(160deg, #1c1c1c 0%, #222 70%)`,
                    }}
                  />
                  {/* Subtle vignette */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)]" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-paper/85">
                    <span className="inline-flex items-center gap-1.5 bg-ink/60 backdrop-blur px-2 py-1">
                      <PlatformIcon type={m.type} platform={m.platform} size={12} />
                      {m.platform.toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-ink/60 backdrop-blur px-2 py-1">
                      {isArticle ? <FileText size={11} /> : <Clock size={11} />}
                      {m.duration}
                    </span>
                  </div>

                  {/* Center play cue */}
                  {!isArticle && (
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="w-14 h-14 md:w-16 md:h-16 grid place-items-center rounded-full border border-paper/40 backdrop-blur-sm bg-paper/5 group-hover:bg-oxblood group-hover:border-oxblood transition-all duration-300">
                        <Play size={22} className="text-paper translate-x-0.5" />
                      </span>
                    </div>
                  )}

                  {/* Bottom caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-paper">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-oxblood-light uppercase mb-2">
                      {m.outlet} &middot; {m.category}
                    </div>
                    <h3 className={`font-display leading-[1.1] ${isReel ? "text-[18px] md:text-[20px]" : "text-[22px] md:text-[26px]"}`}>
                      {m.title}
                    </h3>
                    {!isReel && (
                      <p className="mt-2 font-serifText text-[13.5px] md:text-[14.5px] leading-[1.55] text-paper/75 line-clamp-2">
                        {m.blurb}
                      </p>
                    )}
                  </div>
                </div>

                {/* Below-card meta */}
                <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-ink/60">
                  <span className="inline-flex items-center gap-1.5">
                    <PlatformIcon type={m.type} platform={m.platform} size={12} />
                    {m.type === "reel" ? "Reel" : m.type === "long" ? "Video" : "Essay"}
                  </span>
                  <span>{m.outlet}</span>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-12 font-mono text-[11px] tracking-[0.22em] uppercase text-ink/50">
          Selected pieces &middot; full reels &amp; video links on request
        </p>
      </div>
    </section>
  );
}
