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
    "I've handled communications for \u0024110B+ mega\u2011deals, briefed Tier\u20111 firms like NVIDIA and Google, and built digital brand identities for Shark Tank India startups. My work lives where rigorous reporting, crisis communications and design\u2011minded storytelling meet.",
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
    category: "Markets \u00B7 M&A",
    headline: "Inside the $110B Paramount\u2013Warner Bros. Discovery Merger",
    dek: "Real\u2011time communication flows across continents for institutional clients as one of media's largest deals took shape.",
    date: "Oct 2025",
    outlet: "Thomson Reuters",
    readTime: "6 min read",
  },
  {
    id: "w2",
    category: "Geopolitics",
    headline: "Wire\u2011Side: Covering the Israel\u2013Iran War Live",
    dek: "Field dispatches, verification workflows, and the discipline of first\u2011to\u2011file reporting when every minute matters.",
    date: "Sep 2025",
    outlet: "Thomson Reuters",
    readTime: "8 min read",
  },
  {
    id: "w3",
    category: "IPO \u00B7 Asia",
    headline: "Tracking Nordic & Asian Listings for Institutional Desks",
    dek: "Earnings, capital raises and listings \u2014 packaged for traders who read markets in milliseconds.",
    date: "Aug 2025",
    outlet: "Reuters Markets",
    readTime: "5 min read",
  },
  {
    id: "w4",
    category: "Tech \u00B7 Earnings",
    headline: "Reading NVIDIA: The New Grammar of AI Earnings",
    dek: "How Tier\u20111 semiconductor disclosures are reshaping how newsrooms frame the AI economy.",
    date: "Jul 2025",
    outlet: "Reuters Business",
    readTime: "7 min read",
  },
  {
    id: "w5",
    category: "Broadcast",
    headline: "Namaste Democracy: Anchoring Civic Stories",
    dek: "A season of on\u2011air segments exploring governance, civic life and the political pulse of urban India.",
    date: "2024",
    outlet: "Namaste Democracy",
    readTime: "Video series",
  },
  {
    id: "w6",
    category: "Brand",
    headline: "Building Trust: Digital Playbooks for Indian Schools",
    dek: "Multi\u2011platform narratives engineered to bridge administrations, parents and students.",
    date: "2023\u20132024",
    outlet: "The Dot Studio",
    readTime: "Case study",
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
    title: "Tier\u20111 Client Coverage",
    detail:
      "Trusted with communications for NVIDIA, Google and other global institutional clients.",
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
  {
    id: "m1",
    type: "reel",
    platform: "Instagram",
    outlet: "Namaste Democracy",
    title: "The Anatomy of a Budget Speech",
    blurb: "Breaking down India\u2019s budget in 60 seconds \u2014 what moved, what didn\u2019t.",
    duration: "0:58",
    category: "Civic Explainer",
  },
  {
    id: "m2",
    type: "long",
    platform: "YouTube",
    outlet: "The Raisina Hills",
    title: "Coalition Math: Reading the 2024 Mandate",
    blurb: "A long-form walkthrough of seat shares, swing states and what the numbers actually say about India\u2019s political future.",
    duration: "12:34",
    category: "Politics",
  },
  {
    id: "m3",
    type: "reel",
    platform: "Instagram",
    outlet: "Civic Lens",
    title: "Bengaluru\u2019s Water Crisis, Explained",
    blurb: "Pipelines, aquifers, and a city running on borrowed time.",
    duration: "1:12",
    category: "Urban Affairs",
  },
  {
    id: "m4",
    type: "long",
    platform: "YouTube",
    outlet: "Namaste Democracy",
    title: "On-Air: The Democracy Beat Weekly",
    blurb: "A weekly anchor slot covering civic stories, policy flashpoints and the politics of everyday India.",
    duration: "18:20",
    category: "Broadcast Anchor",
  },
  {
    id: "m5",
    type: "reel",
    platform: "Instagram",
    outlet: "The Raisina Hills",
    title: "Why Parliament Looks the Way It Does",
    blurb: "From the new building to the seating plan \u2014 a tour of power, architecture and intent.",
    duration: "1:04",
    category: "Explainer",
  },
  {
    id: "m6",
    type: "article",
    platform: "Web",
    outlet: "Civic Lens",
    title: "The Quiet Power of Municipal Councils",
    blurb: "An op-ed on why the most consequential politics happens three tiers below Delhi.",
    duration: "6 min read",
    category: "Opinion",
  },
  {
    id: "m7",
    type: "reel",
    platform: "Instagram",
    outlet: "Namaste Democracy",
    title: "What a No-Confidence Motion Actually Does",
    blurb: "Procedure, precedent and political theatre \u2014 compressed into a scroll.",
    duration: "0:49",
    category: "Civic Explainer",
  },
  {
    id: "m8",
    type: "long",
    platform: "YouTube",
    outlet: "The Raisina Hills",
    title: "Field Report: Inside a Polling Booth",
    blurb: "A ground-level look at how India\u2019s election machinery runs on voting day.",
    duration: "9:47",
    category: "Field Journalism",
  },
  {
    id: "m9",
    type: "article",
    platform: "Web",
    outlet: "Namaste Democracy",
    title: "The Editor\u2019s Note: Why Civic Media Matters",
    blurb: "A short essay on building journalism that explains, not alarms.",
    duration: "4 min read",
    category: "Essay",
  },
];
