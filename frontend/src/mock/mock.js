// Mock data for Mihika Sharma's portfolio
// All content sourced from resume & LinkedIn

export const profile = {
  name: "Mihika Sharma",
  firstName: "Mihika",
  lastName: "Sharma",
  title: "Communications Strategist",
  subtitle: "Multimedia Journalist & Brand Lead",
  currentRole: "Breaking News Correspondent at Thomson Reuters",
  location: "Bengaluru, India",
  email: "mihikaasharmaa2003@gmail.com",
  phone: "+91 74895 27938",
  linkedin: "https://linkedin.com/in/mihika-sharma-05680322a",
  portrait: "/assets/mihika-portrait.jpg",
  bylineTagline:
    "Filed from Bengaluru  \u00B7  Reporting across global markets",
  leadParagraph:
    "A Multimedia Strategist and Communications Professional translating complex market data into narratives that move audiences \u2014 and markets. At Thomson Reuters, I file real\u2011time coverage that has moved equities and informed institutional desks from Mumbai to Manhattan.",
  secondaryParagraph:
    "I've been part of the Reuters team filing on \u0024110B+ mega\u2011deals \u2014 from the Paramount\u2013Warner Bros. Discovery merger to Sun Pharma\u2013Organon \u2014 and contributed market\u2011moving reports on Tier\u20111 firms like NVIDIA and Google. Off the wire, my anchored reel for <em>Namaste Democracy</em> crossed 1.3M+ views, and I built and run my own civic\u2011media platform <em>Civic Lens</em> end\u2011to\u2011end.",
  stats: [
    { value: "2M+", label: "Combined reel views" },
    { value: "80+", label: "Filed stories at Reuters" },
    { value: "\u0024110B", label: "M&A coverage managed" },
    { value: "100%", label: "First\u2011to\u2011file accuracy" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Dispatches", href: "#work" },
  { label: "On Camera", href: "#on-camera" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    id: "reuters",
    company: "Thomson Reuters",
    role: "Breaking News Correspondent",
    dates: "Aug 2025 \u2014 Present",
    location: "Bangalore, India",
    kicker: "Global Wire \u00B7 Markets & Geopolitics",
    bullets: [
      "Leading global wire coverage on real\u2011time breaking news, geopolitics and business for a high\u2011pressure, 24/7 international audience.",
      "Authored 80+ high\u2011impact stories that directly influenced equity market fluctuations and informed institutional trading decisions.",
      "Led live coverage of the Israel\u2013Iran war and critical international emergencies, ensuring 100% accuracy and first\u2011to\u2011file delivery on global wire feeds.",
      "Delivered earnings and IPO coverage across Asian and Nordic markets, tracking high\u2011profile listings and capital raises.",
      "Managed real\u2011time communication flows around the \u0024110B Paramount\u2013Warner Bros. Discovery merger, serving Tier\u20111 firms including NVIDIA and Google.",
    ],
  },
  {
    id: "namaste",
    company: "Namaste Democracy",
    role: "Broadcast Journalist & Content Strategist",
    dates: "Mar 2024 \u2014 Aug 2024",
    location: "Bangalore, India",
    kicker: "On\u2011Air Talent \u00B7 Editorial Production",
    link: { label: "Reels on Instagram", href: "https://www.instagram.com/namastedemocracy/reels/" },
    highlight: {
      metric: "1.3M+ views",
      label: "Top performing reel",
      href: "https://www.instagram.com/reel/C7WaZ8uPeyN/",
    },
    bullets: [
      "Spearheaded end\u2011to\u2011end broadcast production as primary on\u2011air talent, delivering high\u2011impact news segments with professional\u2011grade video editing and visual storytelling.",
      "Wrote, anchored and produced reels that crossed 1.3M+ views \u2014 translating civic and political stories into short\u2011form formats with proven retention.",
      "Orchestrated the full content lifecycle \u2014 from research and conceptualization to final production \u2014 ensuring every segment aligned with brand identity and audience trends.",
    ],
  },
  {
    id: "civiclens",
    company: "Civic Lens",
    role: "Founder \u00B7 Creator & Producer",
    dates: "2024 \u2014 Present",
    location: "Bengaluru, India \u00B7 Self\u2011initiated",
    kicker: "Independent Platform \u00B7 Civic Explainers",
    link: { label: "@civiclens_ on Instagram", href: "https://www.instagram.com/civiclens_?igsh=cWduYzA5MGkxMjll" },
    bullets: [
      "Founded and run an independent civic\u2011affairs Instagram platform \u2014 owning the full content lifecycle: concept, research, scripting, on\u2011camera presentation, shooting, editing, design, posting and community engagement.",
      "Built the brand identity from scratch \u2014 visual language, tone of voice, content pillars and a distinctive explainer format for urban affairs and civic literacy.",
      "Produce Reels that translate complex policy, governance and city\u2011planning issues into retention\u2011optimised, short\u2011form storytelling for a scrolling audience.",
      "Operates end\u2011to\u2011end as a one\u2011person newsroom \u2014 demonstrating ownership across editorial, creative direction, production and digital growth.",
    ],
  },
  {
    id: "dot",
    company: "The Dot Studio",
    role: "Social Media Manager",
    dates: "Aug 2023 \u2014 Jan 2024",
    location: "Bengaluru, India",
    kicker: "Brand Strategy \u00B7 Education Sector",
    bullets: [
      "Orchestrated 360\u00B0 digital branding for educational institutions across Instagram, YouTube and LinkedIn, focusing on community trust and enrolment growth.",
      "Engineered high\u2011retention video narratives bridging the communication gap between administrations, parents and prospective students.",
      "Directed platform\u2011specific content strategies that translated complex institutional values into engaging visual stories.",
    ],
  },
  {
    id: "flyrobe",
    company: "Flyrobe",
    role: "Social Media Marketing & Management",
    dates: "Jul 2023 \u2014 Jan 2024",
    location: "Delhi, India",
    kicker: "Influencer Strategy \u00B7 Fashion",
    bullets: [
      "Orchestrated influencer marketing across Instagram, Facebook and YouTube, leveraging data\u2011driven storytelling to optimise organic reach.",
      "Cultivated strategic partnerships with premier creators and celebrities, aligning digital narratives with evolving fashion cycles.",
    ],
  },
];

export const featuredWork = [
  {
    id: "w1",
    category: "M&A \u00B7 Real Estate",
    headline: "Blackstone\u2019s \u00244 billion New World talks stall over control, Bloomberg News reports",
    dek: "Inside the corporate stand\u2011off that froze one of Asia\u2019s most\u2011watched real\u2011estate deals.",
    date: "Mar 2026",
    outlet: "Thomson Reuters",
    readTime: "Byline",
    href: "https://www.reuters.com/world/asia-pacific/blackstone-talks-4-billion-new-world-deal-stall-over-control-bloomberg-news-2026-03-04/",
  },
  {
    id: "w2",
    category: "M&A \u00B7 Pharma",
    headline: "Sun Pharma to buy US drugmaker Organon for \u002411.75 billion in India\u2019s largest pharma deal",
    dek: "An all\u2011cash mega\u2011deal that reshapes Indian pharma\u2019s outbound footprint. Filed for the global wire as the news broke.",
    date: "Apr 2026",
    outlet: "Thomson Reuters",
    readTime: "Byline",
    href: "https://www.reuters.com/business/healthcare-pharmaceuticals/sun-pharma-acquire-organon-1175-bln-all-cash-deal-2026-04-27/",
  },
  {
    id: "w3",
    category: "Tech \u00B7 Cloud",
    headline: "Amazon and Google launch multicloud service for faster connectivity",
    dek: "A rare collaboration between hyperscalers \u2014 and what it signals for enterprise infrastructure economics.",
    date: "Dec 2025",
    outlet: "Thomson Reuters",
    readTime: "Byline",
    href: "https://www.reuters.com/business/retail-consumer/amazon-google-launch-multicloud-service-faster-connectivity-2025-12-01/",
  },
  {
    id: "w4",
    category: "AI \u00B7 Regulation",
    headline: "UK regulators rush to assess risks of latest Anthropic AI model, FT reports",
    dek: "How British financial watchdogs are racing to keep pace with frontier AI \u2014 and what it means for the City.",
    date: "Apr 2026",
    outlet: "Thomson Reuters",
    readTime: "Byline",
    href: "https://www.reuters.com/world/uk/uk-financial-regulators-rush-assess-risks-anthropics-latest-ai-model-ft-reports-2026-04-12/",
  },
  {
    id: "w5",
    category: "Geopolitics \u00B7 Energy",
    headline: "US probes suspicious oil trades made before Trump Iran pivots, source says",
    dek: "Tracking the trades that moved before the policy did \u2014 a window into the intersection of energy markets and statecraft.",
    date: "Apr 2026",
    outlet: "Thomson Reuters",
    readTime: "Byline",
    href: "https://www.reuters.com/business/energy/us-probes-suspicious-oil-trades-made-before-trump-iran-pivots-source-says-2026-04-15/",
  },
  {
    id: "w6",
    category: "Humanitarian \u00B7 Asia",
    headline: "Around 250 missing after Rohingya boat capsizes in Andaman Sea, UN agencies say",
    dek: "Reporting a humanitarian disaster from the Andaman Sea \u2014 verifying numbers and witness accounts under deadline.",
    date: "Apr 2026",
    outlet: "Thomson Reuters",
    readTime: "Byline",
    href: "https://www.reuters.com/world/asia-pacific/around-250-missing-after-rohingya-boat-capsizes-andaman-sea-un-agencies-say-2026-04-14/",
  },
];

export const expertise = [
  {
    title: "Public Relations",
    detail: "High\u2011stakes media and crisis management for global stakeholders.",
  },
  {
    title: "Corporate Communications",
    detail: "Strategic narratives for Tier\u20111 firms and institutional audiences.",
  },
  {
    title: "Digital Strategy",
    detail: "Multi\u2011channel social campaigns tuned for retention and reach.",
  },
  {
    title: "Content Production",
    detail: "End\u2011to\u2011end multimedia storytelling, writing and editing.",
  },
  {
    title: "Financial Analysis",
    detail: "Data\u2011driven market, earnings and IPO reporting.",
  },
  {
    title: "Crisis Response",
    detail: "Real\u2011time stakeholder management under deadline pressure.",
  },
];

export const education = [
  {
    school: "Xavier Institute of Communications",
    degree: "Post\u2011Graduation, Journalism & Media Convergence",
    dates: "2024 \u2014 2025",
    location: "Mumbai, India",
    note: "India's top\u2011ranked media school \u2014 intensive, industry\u2011aligned PG in journalism.",
  },
  {
    school: "University of Delhi",
    degree: "B.A. (Hons) Political Science",
    dates: "2021 \u2014 2023",
    location: "Delhi, India",
    note: "Rigorous study of global politics, governance and theory at India's premier university.",
  },
];

export const achievements = [
  {
    title: "Team India \u00B7 International Jump Rope",
    detail:
      "Represented India globally \u2014 elite\u2011level discipline and peak performance standards.",
  },
  {
    title: "National\u2011Level Badminton Athlete",
    detail:
      "Competed at the national level \u2014 strategic agility and resilience under pressure.",
  },
  {
    title: "Tier\u20111 Story Bylines",
    detail:
      "Broke the news on Tier\u20111 firms \u2014 NVIDIA earnings, Google\u2013Amazon multicloud, Marvell\u2013Celestial AI \u2014 reporting for Reuters, not handling their communications.",
  },
  {
    title: "2M+ Reach \u00B7 Independent Reels",
    detail:
      "Self\u2011produced content on Namaste Democracy and Civic Lens that has cumulatively crossed 2 million views \u2014 reach earned without a paid push.",
  },
];

export const socials = [
  { label: "LinkedIn", handle: "mihika\u2011sharma", href: "https://linkedin.com/in/mihika-sharma-05680322a" },
  { label: "Email", handle: "mihikaasharmaa2003@gmail.com", href: "mailto:mihikaasharmaa2003@gmail.com" },
  { label: "Reuters", handle: "Breaking News Desk", href: "#" },
];

// Featured video reel \u2014 played natively (no link, since source is private)
export const featuredReel = {
  src: "/assets/personal-reel.mp4",
  poster: "/assets/personal-reel-poster.jpg",
  category: "Personal Reel \u00B7 Independent",
  title: "A reel that crossed half\u2011a\u2011million views",
  blurb: "From the personal archive \u2014 a short\u2011form piece that hit 500K+ views, written, shot and cut end\u2011to\u2011end.",
  metric: "500K+",
  metricLabel: "views",
};

// On Camera \u2014 reels (vertical 9:16) + long-form (horizontal 16:9)
// Categories: Namaste Democracy, Civic Lens, The Raisina Hills
export const multimedia = [
  // Namaste Democracy reels (custom designed thumbnails by Mihika)
  {
    id: "nd1",
    type: "reel",
    platform: "Instagram",
    outlet: "Namaste Democracy",
    title: "What is Article 12 and how does it help us?",
    blurb: "Civic explainer breaking down the foundational definition of \u201cthe State\u201d under the Indian Constitution.",
    duration: "Reel",
    category: "Civic Explainer",
    href: "https://www.instagram.com/reel/C6gQKP1PG7o/",
    poster: "/assets/nd-tiles/secularism.jpg",
  },
  {
    id: "nd2",
    type: "reel",
    platform: "Instagram",
    outlet: "Namaste Democracy",
    title: "What\u2019s in our Constitution?",
    blurb: "A first\u2011principles tour of the Indian Constitution \u2014 anchored, scripted and produced for a scrolling audience.",
    duration: "Reel",
    category: "Constitution Corner",
    href: "https://www.instagram.com/reel/C6dt0iLIi8G/",
    poster: "/assets/nd-tiles/ambedkar.jpg",
  },
  {
    id: "nd3",
    type: "reel",
    platform: "Instagram",
    outlet: "Namaste Democracy",
    title: "17th Lok Sabha \u00B7 Women Session",
    blurb: "A reported video on women\u2019s representation in the 17th Lok Sabha.",
    duration: "Reel",
    category: "Parliament",
    href: "https://www.instagram.com/reel/C6NgxIxIGLp/",
    poster: "/assets/nd-tiles/womens-reservation.jpg",
  },
  // Civic Lens reels (Mihika\u2019s self-built platform)
  {
    id: "cl1",
    type: "reel",
    platform: "Instagram",
    outlet: "Civic Lens",
    title: "We read the drama so you don\u2019t have to",
    blurb: "Civic Lens flagship reel \u2014 cutting through the noise of the Indian political news cycle.",
    duration: "Reel",
    category: "Politics",
    href: "https://www.instagram.com/reel/DCrHDz4NW5h/",
  },
  {
    id: "cl2",
    type: "reel",
    platform: "Instagram",
    outlet: "Civic Lens",
    title: "Civic explainer \u00B7 weekly drop",
    blurb: "Solo\u2011produced short\u2011form piece \u2014 written, shot, edited and posted end\u2011to\u2011end.",
    duration: "Reel",
    category: "Civic Explainer",
    href: "https://www.instagram.com/reel/DKZkZZ6piOd/",
  },
  {
    id: "cl3",
    type: "reel",
    platform: "Instagram",
    outlet: "Civic Lens",
    title: "Reading the Indian political feed",
    blurb: "What\u2019s actually happening on the ground \u2014 unpacked in under a minute.",
    duration: "Reel",
    category: "Civic Explainer",
    href: "https://www.instagram.com/reel/DK9h3yGtRDM/",
  },
  // Long-form YouTube videos at the end
  {
    id: "rh1",
    type: "long",
    platform: "YouTube",
    outlet: "The Raisina Hills",
    title: "Will Modi stay away from Xi & Sharif?",
    blurb: "Long\u2011form anchor segment unpacking India\u2019s diplomatic posture across China and Pakistan.",
    duration: "Video",
    category: "Diplomacy",
    href: "https://youtu.be/dzzdaAgdbhU",
    youtubeId: "dzzdaAgdbhU",
    customPoster: "modi-xi",
  },
  {
    id: "rh2",
    type: "long",
    platform: "YouTube",
    outlet: "The Raisina Hills",
    title: "India has a $12B millet opportunity",
    blurb: "A reported segment on India\u2019s millet economy \u2014 export potential, policy push and farm\u2011gate impact.",
    duration: "Video",
    category: "Economy",
    href: "https://youtu.be/OiayIiq2MSM",
    youtubeId: "OiayIiq2MSM",
    customPoster: "millet",
  },
];
