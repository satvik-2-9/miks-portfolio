import React, { useState, useMemo, useRef } from "react";
import { Play, Pause, Instagram, Youtube, FileText, Clock, Volume2, VolumeX, ArrowUpRight } from "lucide-react";
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

        {/* Two featured reels (1.3M Namaste + 500K Chandni Chowk) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 mb-14 items-start">
          {/* Namaste \u2014 Instagram iframe embed (slightly larger). Cropped to hide IG header + likes/comments footer. */}
          <div className="md:col-span-5">
            <div className="relative max-w-[360px] mx-auto md:mx-0 border border-ink/15 bg-paper">
              {/* Top frame badge */}
              <div className="absolute -top-3 left-3 z-20 flex items-center gap-2">
                <span className="bg-oxblood text-paper font-mono text-[10px] tracking-[0.3em] px-2 py-1 inline-flex items-center gap-1.5">
                  <Instagram size={12} /> NO. 01
                </span>
                <span className="bg-ink text-paper font-mono text-[10px] tracking-[0.3em] px-2 py-1">
                  1.3M+ VIEWS
                </span>
              </div>

              {/* Cropped iframe: hide IG header at top + action bar at bottom */}
              <div className="relative overflow-hidden" style={{ height: 545 }}>
                <iframe
                  src="https://www.instagram.com/reel/C7WaZ8uPeyN/embed/"
                  title="Namaste Democracy reel \u2014 1.3M+ views"
                  style={{
                    position: "absolute",
                    top: -55,
                    left: 0,
                    width: "100%",
                    height: 720,
                    border: 0,
                  }}
                  allow="encrypted-media; picture-in-picture; clipboard-write"
                  scrolling="no"
                  loading="lazy"
                />
                {/* Bottom paper-color cover so the IG action bar (with stale like count) is fully hidden */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-paper" />
              </div>

              {/* Our editorial footer band over IG content */}
              <div className="border-t border-ink/15 px-4 py-3 bg-paper flex items-center justify-between">
                <div>
                  <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-oxblood">@namastedemocracy</div>
                  <div className="font-display text-[18px] leading-tight text-ink">1.3M+ views &middot; <span className="italic text-ink/70 text-[14px]">anchored</span></div>
                </div>
                <a
                  href="https://www.instagram.com/reel/C7WaZ8uPeyN/"
                  target="_top"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink border border-ink/30 px-2.5 py-1.5 hover:bg-ink hover:text-paper transition-colors inline-flex items-center gap-1"
                >
                  Open <ArrowUpRight size={11} />
                </a>
              </div>
            </div>

            <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink/55 max-w-[360px] mx-auto md:mx-0">
              Featured Reel No. 01
            </div>
          </div>

          {/* Chandni Chowk \u2014 native video player (slightly smaller) */}
          <div className="md:col-span-4">
            <div
              className="relative aspect-[9/16] bg-ink overflow-hidden cursor-pointer group/v select-none max-w-[320px] mx-auto md:mx-0"
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
              {!playing && <div className="absolute inset-0 bg-ink/30 transition-opacity duration-300" />}

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] tracking-[0.3em] text-paper">
                <span className="bg-ink/60 backdrop-blur px-2 py-1 inline-flex items-center gap-1.5">
                  <Instagram size={12} /> REEL
                </span>
                <span className="bg-paper text-ink px-2 py-1">NO. 02</span>
              </div>

              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-9 h-9 grid place-items-center bg-ink/60 backdrop-blur text-paper hover:bg-oxblood transition-colors"
                aria-label={muted ? "unmute" : "mute"}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>

              <div className="absolute inset-0 grid place-items-center pointer-events-none">
                <span
                  className={`w-14 h-14 grid place-items-center rounded-full border border-paper/50 backdrop-blur-sm bg-paper/10 transition-all duration-300 ${
                    playing ? "opacity-0 group-hover/v:opacity-100 scale-90" : "opacity-100 scale-100"
                  }`}
                >
                  {playing ? <Pause size={22} className="text-paper" /> : <Play size={24} className="text-paper translate-x-0.5" />}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 pb-14 text-paper bg-gradient-to-t from-ink/85 to-transparent">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-85 mb-1">
                  Personal Archive &middot; Chandni Chowk
                </div>
                <div className="font-display text-[20px] leading-tight">
                  500K+ views &middot; <span className="italic">plays inline</span>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-ink/65 max-w-[320px] mx-auto md:mx-0">
              <span>Featured Reel No. 02</span>
              <span className="text-oxblood">500K+ views</span>
            </div>
          </div>

          {/* Right column: editorial copy / stat callouts */}
          <div className="md:col-span-3 flex flex-col justify-center">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood mb-4">
              Featured &middot; 02 of the catalog
            </div>
            <p className="font-serifText text-[15.5px] leading-[1.7] text-ink/80">
              Two reels that found their audience on their own &mdash; one anchored at <span className="italic">Namaste Democracy</span>, one shot solo on the lanes of <span className="italic">Chandni Chowk</span>. Together, just under <span className="font-display text-ink">2M views</span>.
            </p>
            <div className="mt-6 border-t border-ink/15 pt-4 font-mono text-[10px] tracking-[0.25em] uppercase text-ink/55">
              Scroll for the full catalog &darr;
            </div>
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

        {/* Uniform editorial grid for the rest. All cards share the same 4:5 aspect for clean alignment. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {items.map((m) => {
            const isReel = m.type === "reel";
            const isLong = m.type === "long";
            const isArticle = m.type === "article";

            return (
              <article key={m.id} className="group">
                <div className="relative overflow-hidden aspect-[4/5] bg-ink cursor-pointer">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: isReel
                        ? "linear-gradient(145deg, #1a1a1a 0%, #3a1818 45%, #7c1e22 100%)"
                        : isLong
                        ? "linear-gradient(120deg, #141414 0%, #2a2220 60%, #4a2a20 100%)"
                        : "linear-gradient(160deg, #1c1c1c 0%, #222 70%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_55%)]" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] tracking-[0.3em] text-paper/85">
                    <span className="inline-flex items-center gap-1 bg-ink/60 backdrop-blur px-2 py-1">
                      <PlatformIcon type={m.type} platform={m.platform} size={10} />
                      {m.platform.toUpperCase()}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-ink/60 backdrop-blur px-2 py-1">
                      {isArticle ? <FileText size={10} /> : <Clock size={10} />}
                      {m.duration}
                    </span>
                  </div>

                  {!isArticle && (
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="w-11 h-11 md:w-12 md:h-12 grid place-items-center rounded-full border border-paper/40 backdrop-blur-sm bg-paper/5 group-hover:bg-oxblood group-hover:border-oxblood transition-all duration-300">
                        <Play size={16} className="text-paper translate-x-0.5" />
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-paper bg-gradient-to-t from-ink/85 via-ink/40 to-transparent">
                    <div className="font-mono text-[9px] tracking-[0.3em] text-oxblood-light uppercase mb-1.5">
                      {m.outlet}
                    </div>
                    <h3 className="font-display text-[16px] md:text-[18px] leading-[1.15] line-clamp-3">
                      {m.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-2.5 flex items-center justify-between font-mono text-[9.5px] tracking-[0.22em] uppercase text-ink/60">
                  <span className="inline-flex items-center gap-1">
                    <PlatformIcon type={m.type} platform={m.platform} size={10} />
                    {m.type === "reel" ? "Reel" : m.type === "long" ? "Video" : "Essay"}
                  </span>
                  <span className="truncate ml-2">{m.category}</span>
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
