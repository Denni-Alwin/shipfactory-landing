export const projects = [
  {
    slug: "lumen-analytics",
    title: "Lumen Analytics",
    category: "Web Development",
    icon: "tabler:chart-dots-3",
    summary:
      "A real-time SaaS dashboard that turns messy product data into clear, actionable insight — built for speed and scale.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Charts"],
    metrics: [
      { label: "Faster load", value: "2.4s → 0.6s" },
      { label: "Uptime", value: "99.9%" },
    ],
    year: "2024",
    href: "/projects/lumen-analytics",

    // ── Case-study detail ──
    client: "Lumen, Inc.",
    industry: "B2B SaaS",
    timeline: "8 weeks",
    role: "Design & Full-Stack Build",
    overview:
      "Lumen had powerful data but a clunky internal tool that made it hard for customers to act on it. They needed a fast, modern analytics dashboard their users would actually enjoy opening every morning.",
    challenge:
      "The legacy dashboard took over two seconds to render and buckled under large datasets. Charts were slow, filtering was confusing, and churn was creeping up because users couldn't find their numbers quickly.",
    solution:
      "We rebuilt the front end in Next.js with server-side data aggregation and a streamlined charting layer, then redesigned the information hierarchy around the three questions users asked most. Heavy queries moved to a cached Node.js API backed by PostgreSQL.",
    services: ["Product Design", "Frontend (Next.js)", "API & Database", "Performance"],
    results: [
      { label: "Faster load time", value: "2.4s → 0.6s" },
      { label: "Reduction in churn", value: "-22%" },
      { label: "Uptime", value: "99.9%" },
    ],
    features: [
      "Real-time dashboards with sub-second rendering",
      "Smart filters and saved views per user",
      "Cached aggregation API that scales with data volume",
      "Fully responsive, dark-mode-ready interface",
    ],
    testimonial: {
      quote:
        "The new dashboard feels instant. Our customers finally get their answers in one glance — support tickets dropped almost overnight.",
      author: "Head of Product, Lumen",
    },
  },
  {
    slug: "saffron-and-co",
    title: "Saffron & Co.",
    category: "Store Creation",
    icon: "tabler:building-store",
    summary:
      "A premium D2C storefront for an artisanal spice brand — frictionless checkout, rich product storytelling, mobile-first.",
    tags: ["Shopify", "Headless", "Stripe", "SEO"],
    metrics: [
      { label: "Conversion", value: "+38%" },
      { label: "Launch", value: "3 weeks" },
    ],
    year: "2024",
    href: "/projects/saffron-and-co",

    client: "Saffron & Co.",
    industry: "D2C / Food & Beverage",
    timeline: "3 weeks",
    role: "Storefront Design & Build",
    overview:
      "A family spice business with incredible products wanted to go direct-to-consumer with a store that felt as premium as their packaging — and could launch before the festive season.",
    challenge:
      "They were selling through marketplaces with zero brand control and thin margins. They needed their own high-converting store fast, without a long, expensive build.",
    solution:
      "We built a headless Shopify storefront with cinematic product pages, a one-page Stripe checkout, and an SEO foundation tuned for recipe and ingredient searches. Everything was designed mobile-first, since most of their traffic comes from Instagram.",
    services: ["Storefront Design", "Headless Shopify", "Checkout & Payments", "SEO"],
    results: [
      { label: "Conversion rate", value: "+38%" },
      { label: "Time to launch", value: "3 weeks" },
      { label: "Mobile sales share", value: "71%" },
    ],
    features: [
      "Story-driven product pages with rich imagery",
      "One-page Stripe checkout with express options",
      "SEO-optimised recipe and ingredient content",
      "Instagram-ready, mobile-first design system",
    ],
    testimonial: {
      quote:
        "We launched in three weeks and beat our first-month target by the second week. The store finally looks like our brand deserves.",
      author: "Founder, Saffron & Co.",
    },
  },
  {
    slug: "kettle-and-kin",
    title: "Kettle & Kin",
    category: "Web Development",
    icon: "tabler:device-laptop",
    summary:
      "A booking-driven website for a boutique café chain with live table reservations and a slick, on-brand experience.",
    tags: ["React", "Tailwind", "Bookings API"],
    metrics: [
      { label: "Bookings", value: "+120/wk" },
      { label: "Bounce rate", value: "-41%" },
    ],
    year: "2025",
    href: "/projects/kettle-and-kin",

    client: "Kettle & Kin Cafés",
    industry: "Hospitality",
    timeline: "5 weeks",
    role: "Web Design & Development",
    overview:
      "A growing café chain wanted one beautiful website that captured their cozy brand and let guests book a table in seconds across all their locations.",
    challenge:
      "Reservations were handled over the phone and DMs, which meant missed bookings and a frustrating experience. Their old site was slow, dated, and didn't reflect the in-store vibe.",
    solution:
      "We designed a warm, photography-led site in React and Tailwind, then wired up a live bookings API so guests can reserve a table by location in real time. Menus and events update through a simple content layer the team manages themselves.",
    services: ["Brand Web Design", "Frontend (React)", "Bookings Integration", "CMS"],
    results: [
      { label: "New bookings / week", value: "+120" },
      { label: "Bounce rate", value: "-41%" },
      { label: "Locations live", value: "4" },
    ],
    features: [
      "Live, location-aware table reservations",
      "Self-managed menus and events",
      "Photography-led, mobile-first design",
      "Fast, accessible, SEO-friendly pages",
    ],
    testimonial: {
      quote:
        "Bookings now run on autopilot and the site actually feels like walking into one of our cafés. Our staff got their phones back.",
      author: "Operations Lead, Kettle & Kin",
    },
  },
  {
    slug: "verde-living",
    title: "Verde Living",
    category: "Store Creation",
    icon: "tabler:shopping-bag",
    summary:
      "A sustainable home-goods marketplace with multi-vendor support, smart search, and a checkout that just works.",
    tags: ["Next.js", "Commerce", "Algolia", "Razorpay"],
    metrics: [
      { label: "GMV / month", value: "₹12L+" },
      { label: "Vendors", value: "40+" },
    ],
    year: "2025",
    href: "/projects/verde-living",

    client: "Verde Living",
    industry: "Marketplace / Home Goods",
    timeline: "10 weeks",
    role: "Marketplace Design & Build",
    overview:
      "Verde set out to build the go-to marketplace for sustainable home products in India — connecting eco-conscious shoppers with dozens of independent makers in one trusted place.",
    challenge:
      "Launching a multi-vendor marketplace means juggling vendor onboarding, fast search across thousands of products, and a checkout that handles split orders — all without overwhelming shoppers.",
    solution:
      "We built a Next.js commerce platform with a self-serve vendor portal, Algolia-powered instant search and filtering, and a Razorpay checkout that splits payouts automatically. The catalog scales effortlessly as new makers join.",
    services: ["Marketplace UX", "Frontend (Next.js)", "Search (Algolia)", "Payments (Razorpay)"],
    results: [
      { label: "Monthly GMV", value: "₹12L+" },
      { label: "Active vendors", value: "40+" },
      { label: "Search-to-cart rate", value: "+29%" },
    ],
    features: [
      "Self-serve vendor onboarding portal",
      "Instant Algolia search and faceted filters",
      "Split-payout Razorpay checkout",
      "Scalable catalog with thousands of SKUs",
    ],
    testimonial: {
      quote:
        "ShipFactory understood the marketplace model end to end. We onboarded 40 vendors in our first quarter without a hitch.",
      author: "Co-founder, Verde Living",
    },
  },
];
