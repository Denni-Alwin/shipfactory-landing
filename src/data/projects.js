export const projects = [
  {
    slug: "gfuture",
    title: "GFuture",
    category: "Mobile & Web Development",
    icon: "tabler:layout-grid",
    logo: "/Group 24.png",
    summary:
      "A unified multi-service super-app for BlueRay International — combining commerce, service booking, education, ride-hailing, and live news into one seamless platform.",
    tags: ["React Native", "Android", "iOS", "Razorpay", "GPS Tracking", "Real-Time"],
    metrics: [
      { label: "Modules delivered", value: "5-in-1" },
      { label: "User roles", value: "6 roles" },
    ],
    year: "2026",
    href: "/projects/gfuture",
    links: [
      { label: "Visit Website", url: "https://gfuture.co/", icon: "tabler:world" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.gfuture.mobile&hl=en", icon: "tabler:brand-google-play" },
      { label: "App Store", url: "https://apps.apple.com", icon: "tabler:brand-apple" },
    ],

    client: "BlueRay International",
    industry: "Multi-Service Digital Commerce",
    timeline: "16 weeks",
    role: "Full-Stack Design & Mobile Development",
    overview:
      "BlueRay International wanted a single digital ecosystem that would replace five separate applications their customers were juggling daily — for shopping, service booking, online learning, bike rides, and news.",
    challenge:
      "Modern users depend on a different app for every need: one for shopping, one for bookings, one for courses, one for rides, one for news. Maintaining multiple apps fragments the user experience, inflates acquisition costs, and makes cross-service upsells nearly impossible.",
    solution:
      "We designed and built GFuture — a single super-app with five independently managed but interconnected modules: a product marketplace (GFuture Commerce), a service booking platform (GService), a learning management system (GCourse), a bike-taxi service (GRider), and a real-time news feed (GNews). Each module runs on its own dashboard and permission layer, unified by a single account, shared wallet, and Razorpay payment gateway.",
    services: [
      "Mobile App Development (Android & iOS)",
      "Web Application",
      "UI/UX Design",
      "Payment Integration (Razorpay)",
      "Real-Time GPS Tracking",
      "Wallet Management",
      "Role-Based Access Control",
      "Cloud Infrastructure",
    ],
    results: [
      { label: "Apps replaced by one", value: "5-in-1" },
      { label: "Distinct user roles supported", value: "6 roles" },
      { label: "Payment methods integrated", value: "5+ methods" },
    ],
    features: [
      "GFuture Commerce — product marketplace with inventory, orders & provider dashboards",
      "GService Marketplace — service booking with appointments, scheduling & reviews",
      "GCourse LMS — course creation, live classes, video conferencing & progress tracking",
      "GRider — real-time GPS ride-hailing with driver onboarding, fare & trip management",
      "GNews — live news feed with category browsing and personalised content delivery",
      "Unified wallet with top-up, refunds & cross-module transaction history",
      "Razorpay integration: UPI, cards, net banking & wallet payments",
      "Six user roles — consumers, product providers, service providers, instructors, riders & admins",
      "Role-based dashboards and permission layers per module",
      "Scalable cloud-based backend designed for future module expansion",
    ],
    testimonial: {
      quote:
        "GFuture brought our entire ecosystem into one app. Our customers no longer need to switch between multiple platforms — everything they need is right there, and our operations are easier to manage than ever.",
      author: "BlueRay International",
    },
  },
  {
    slug: "kroniq",
    title: "Kroniq",
    category: "AI Application",
    icon: "tabler:brain",
    summary:
      "An AI-powered business memory platform built in-house — replace notebooks and manual records with a conversational assistant that remembers everything.",
    tags: ["AI / LLM", "Mobile App", "Web App", "Task Management", "Inventory"],
    metrics: [
      { label: "Data entry", value: "Chat → Record" },
      { label: "Platform", value: "App + Web" },
    ],
    year: "2026",
    href: "/projects/kroniq",

    client: "ShipFactory (In-House)",
    industry: "Business Operations & Inventory",
    timeline: "12 weeks",
    role: "Product Design & Full-Stack Build",
    overview:
      "ShipFactory identified a pattern across small and medium businesses: critical operational information was still living in handwritten diaries, scattered notebooks, and manual spreadsheets. Finding a record meant physically searching through pages. Losing a notebook meant losing history.",
    challenge:
      "Manual record-keeping meant information was scattered, outdated, and hard to retrieve. Employees forgot where things were written, inventory counts drifted from reality, and managers had no single view of daily business activity. As businesses grew, the process collapsed under its own weight.",
    solution:
      "We built Kroniq — an AI-powered operations platform that lets businesses record and retrieve information through natural conversation. Users simply tell Kroniq what happened: \"We installed CCTV cameras at ABC Industries today.\" Kroniq understands, creates a structured work entry, dates it, and files it automatically. Later, asking \"What did we do this week?\" pulls an instant, accurate summary — no forms, no searching.",
    services: [
      "Product Design",
      "Mobile App Development",
      "Web Application",
      "LLM Integration",
      "AI Memory Architecture",
      "Task & Inventory Management",
    ],
    results: [
      { label: "Manual data entry", value: "Near zero" },
      { label: "Record retrieval", value: "Instant" },
      { label: "Operational visibility", value: "360°" },
    ],
    features: [
      "Conversational AI assistant — talk to your business like you'd text a colleague",
      "Auto-structured records — AI converts chat into dated, categorised work entries",
      "Contextual memory — ask \"what did I do last Tuesday?\" and get an accurate answer",
      "Task management — create, assign, and track daily tasks from one dashboard",
      "Inventory management — real-time stock levels, product tracking & movement history",
      "Activity feed — all business events stored, organised, and searchable automatically",
      "Manager dashboard — centralised view of tasks, inventory, and field activities",
      "Mobile app + web app — full access across devices for office and field teams",
    ],
    testimonial: {
      quote:
        "Kroniq turned our daily chaos into structured memory. We stopped losing information the moment it went from conversation to record — automatically.",
      author: "DJ Computer Sales & Service",
    },
  },
];
