import React from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { featuredWork } from "../../mock/mock";

// Bespoke editorial covers — each story gets a typographic poster tuned to its topic.
// To swap in a real header photo: drop a JPG at
//   /app/frontend/public/assets/dispatches/<posterKey>.jpg
// and the <img> below will render it on top of the designed cover.
const POSTERS = {
  blackstone: {
    gradient:
      "linear-gradient(150deg, #0a0e16 0%, #11233f 38%, #4a1d22 78%, #6b1a1a 100%)",
    eyebrow: "ASIA \u00B7 REAL ESTATE",
    word: "$4B",
    sub: "New World \u00B7 Hong Kong",
    accent: "rgba(232,170,56,0.85)",
  },
  qxo: {
    gradient:
      "linear-gradient(155deg, #1a1410 0%, #2f1f12 35%, #6b3414 75%, #b8541b 100%)",
    eyebrow: "INDUSTRIALS \u00B7 ROOFING",
    word: "$17B",
    sub: "QXO \u00B7 TopBuild",
    accent: "rgba(255,180,80,0.85)",
  },
  "amazon-google": {
    gradient:
      "linear-gradient(150deg, #08111a 0%, #102640 45%, #14365e 80%, #1c4f7a 100%)",
    eyebrow: "CLOUD \u00B7 HYPERSCALERS",
    word: "AWS \u00D7 GCP",
    sub: "Multicloud Routing",
    accent: "rgba(120,200,255,0.85)",
  },
  "sun-pharma": {
    gradient:
      "linear-gradient(150deg, #0c1014 0%, #0e2a26 40%, #14584a 75%, #1f8a72 100%)",
    eyebrow: "PHARMA \u00B7 INDIA",
    word: "$11.75B",
    sub: "Sun Pharma \u00B7 Organon",
    accent: "rgba(140,235,200,0.85)",
  },
  "uk-anthropic": {
    gradient:
      "linear-gradient(155deg, #0b0d18 0%, #181833 40%, #2a2160 75%, #6f3ad6 100%)",
    eyebrow: "AI \u00B7 UK REGULATION",
    word: "FRONTIER",
    sub: "Anthropic \u00B7 The City",
    accent: "rgba(200,170,255,0.9)",
  },
  "us-oil-iran": {
    gradient:
      "linear-gradient(155deg, #100905 0%, #261208 35%, #5b1a0e 75%, #8a2418 100%)",
    eyebrow: "ENERGY \u00B7 GEOPOLITICS",
    word: "OIL \u00B7 IRAN",
    sub: "Pre\u2011policy Trades",
    accent: "rgba(255,140,90,0.85)",
  },
};

const NoiseOverlay = () => (
  <div
    aria-hidden
    className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
    }}
  />
);

const PosterCover = ({ posterKey, variant = "lead" }) => {
  const p = POSTERS[posterKey];
  if (!p) {
    return (
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%),linear-gradient(135deg,#1a1a1a,#2a1212_60%,#1a1a1a)]" />
    );
  }
  if (variant === "lead") {
    return (
      <>
        <div className="absolute inset-0" style={{ background: p.gradient }} />
        <NoiseOverlay />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.18),transparent_55%)]" />
        {/* Accent bar */}
        <div
          className="absolute top-0 left-0 h-[3px] w-1/3"
          style={{ backgroundColor: p.accent }}
        />
        {/* Big word, bottom-anchored */}
        <div className="absolute inset-0 p-7 flex flex-col justify-between text-paper">
          <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-paper/85">
            {p.eyebrow}
          </div>
          <div>
            <div
              className="font-display tracking-[-0.03em] leading-[0.92] text-[78px] sm:text-[96px]"
              style={{ color: p.accent }}
            >
              {p.word}
            </div>
            <div className="mt-2 font-mono text-[10px] tracking-[0.3em] uppercase text-paper/80">
              {p.sub}
            </div>
          </div>
        </div>
      </>
    );
  }
  // grid variant — tighter
  return (
    <>
      <div className="absolute inset-0" style={{ background: p.gradient }} />
      <NoiseOverlay />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_60%)]" />
      <div
        className="absolute top-0 left-0 h-[2px] w-1/4"
        style={{ backgroundColor: p.accent }}
      />
      <div className="absolute inset-0 p-4 flex flex-col justify-between text-paper">
        <div className="font-mono text-[8.5px] tracking-[0.32em] uppercase text-paper/85">
          {p.eyebrow}
        </div>
        <div>
          <div
            className="font-display tracking-[-0.02em] leading-[0.95] text-[34px]"
            style={{ color: p.accent }}
          >
            {p.word}
          </div>
          <div className="mt-1 font-mono text-[8.5px] tracking-[0.3em] uppercase text-paper/75 truncate">
            {p.sub}
          </div>
        </div>
      </div>
    </>
  );
};

// Renders an <img> if a real header photo exists, else the bespoke poster.
// Detection happens at render time via image error handler.
const Cover = ({ posterKey, variant }) => {
  const [imgOk, setImgOk] = React.useState(true);
  const src = `/assets/dispatches/${posterKey}.jpg`;
  return (
    <>
      <PosterCover posterKey={posterKey} variant={variant} />
      {imgOk && (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setImgOk(false)}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </>
  );
};

export default function FeaturedWork() {
  const [lead, ...rest] = featuredWork;

  return (
    <section id="work" className="border-b border-ink/15 bg-paper">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-[11px] tracking-[0.3em] text-oxblood">§ 03</span>
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
        <a
          href={lead.href}
          target="_top"
          rel="noopener noreferrer"
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-y border-ink/15 py-10 cursor-pointer"
          data-testid="dispatch-lead"
        >
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink">
              <Cover posterKey={lead.posterKey} variant="lead" />
              <div className="absolute top-4 right-4 z-10 font-mono text-[10px] tracking-[0.3em] uppercase text-paper/85 bg-ink/55 backdrop-blur px-2 py-1">
                Lead story
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-oxblood">{lead.category} &middot; {lead.outlet}</div>
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
                Read on Reuters <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </a>

        {/* Grid of remaining */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-ink/15 mt-2">
          {rest.map((a, idx) => (
            <a
              key={a.id}
              href={a.href}
              target="_top"
              rel="noopener noreferrer"
              data-testid={`dispatch-card-${a.id}`}
              className={`group p-6 md:p-8 border-b border-ink/15 ${idx % 3 !== 2 ? "lg:border-r" : ""} ${idx % 2 === 0 ? "md:border-r" : ""} hover:bg-cream transition-colors duration-300 cursor-pointer block`}
            >
              {/* Bespoke editorial cover (with image fallback) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-ink mb-5">
                <Cover posterKey={a.posterKey} variant="grid" />
              </div>

              <div className="flex items-center justify-between mb-4">
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
                  Read <ArrowUpRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
