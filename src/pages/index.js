import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const ease = [0.22, 1, 0.36, 1];

function HeroVisual() {
  const circumference = 2 * Math.PI * 18;
  return (
    <div className="relative w-full pb-14">

      {/* ── Browser window ── */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="mx-auto lg:w-[72%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]"
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 h-10 bg-base-900 border-b border-white/10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="flex-1 bg-white/10 rounded-md h-6 mx-3 flex items-center px-2.5 gap-1.5">
            <Icon icon="tabler:lock" className="size-3 text-green-400/70" />
            <span className="text-[10px] text-white/40 font-mono">saffronandco.com</span>
          </div>
          <Icon icon="tabler:dots" className="size-4 text-white/25" />
        </div>

        {/* Site content */}
        <div className="bg-base-950">
          {/* Site nav */}
          <nav className="flex items-center justify-between px-5 py-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <div className="size-5 rounded-md bg-primary-500 flex items-center justify-center">
                <span className="text-[7px] font-black text-white leading-none">S</span>
              </div>
              <span className="text-[11px] font-bold text-white tracking-tight">Saffron &amp; Co.</span>
            </div>
            <div className="hidden sm:flex items-center gap-5">
              {["Shop", "Collections", "Story", "Contact"].map((item) => (
                <span key={item} className="text-[9px] text-white/35">{item}</span>
              ))}
            </div>
            <div className="text-[9px] bg-primary-500 text-white px-3 py-1.5 rounded-full font-bold cursor-pointer">
              Shop Now
            </div>
          </nav>

          {/* Site hero */}
          <div className="px-5 pt-5 pb-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="inline-flex items-center gap-1.5 text-[8px] font-semibold bg-primary-500/15 border border-primary-500/25 text-primary-400 rounded-full px-2.5 py-1 mb-3"
            >
              <span className="size-1.5 rounded-full bg-primary-400" />
              Free shipping over ₹999
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, ease }}
              className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white leading-tight mb-2"
            >
              Spices That Tell<br />A Story
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25 }}
              className="text-[9px] sm:text-[10px] text-white/40 mb-4 max-w-xs leading-relaxed"
            >
              Handpicked from the finest farms across India. Delivered fresh to your kitchen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-2"
            >
              <div className="bg-primary-500 text-white text-[9px] font-bold px-4 py-1.5 rounded-full cursor-pointer">
                Shop Collection
              </div>
              <div className="border border-white/15 text-white/60 text-[9px] px-4 py-1.5 rounded-full cursor-pointer">
                Our Story
              </div>
            </motion.div>
          </div>

          {/* Product cards */}
          <div className="px-5 pb-5 grid grid-cols-3 gap-2.5">
            {[
              { name: "Kashmiri Saffron",  price: "₹899", tag: "Bestseller", bg: "from-amber-900/70 to-amber-950",    icon: "tabler:flower"        },
              { name: "Tellicherry Pepper", price: "₹349", tag: "New",        bg: "from-stone-800 to-stone-900",      icon: "tabler:circle-dotted" },
              { name: "Turmeric Gold",      price: "₹199", tag: null,         bg: "from-yellow-900/70 to-yellow-950", icon: "tabler:sun"           },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1, ease }}
                className={`rounded-xl bg-gradient-to-br ${p.bg} border border-white/10 p-2.5 cursor-pointer group`}
              >
                <div className="aspect-[4/3] rounded-lg bg-white/5 mb-2 flex items-center justify-center group-hover:bg-white/8 transition-colors">
                  <Icon icon={p.icon} className="size-5 text-white/20" />
                </div>
                {p.tag && (
                  <p className="text-[7px] font-bold text-primary-400 uppercase tracking-wider mb-0.5">{p.tag}</p>
                )}
                <p className="text-[9px] font-semibold text-white leading-tight">{p.name}</p>
                <p className="text-[9px] text-white/40 mt-0.5">{p.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Floating: Conversion chart (left) ── */}
      <motion.div
        initial={{ opacity: 0, x: -24, y: 12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.9, duration: 0.6, ease }}
        className="hidden lg:block absolute left-0 top-[28%] bg-white dark:bg-base-900 border border-base shadow-2xl rounded-2xl p-4 w-36"
      >
        <div className="flex items-center gap-1.5 mb-2.5">
          <div className="size-6 rounded-lg bg-primary-100 dark:bg-primary-950 flex items-center justify-center">
            <Icon icon="tabler:trending-up" className="size-3.5 text-primary-500" />
          </div>
          <span className="text-[8px] font-semibold text-muted uppercase tracking-wider">Conversion</span>
        </div>
        <p className="text-2xl font-bold font-display text-primary-600 dark:text-primary-400 leading-none">+38%</p>
        <p className="text-[9px] text-muted mt-1">Since launch</p>
        <div className="flex items-end gap-0.5 mt-3 h-8">
          {[25, 42, 32, 58, 48, 72, 63].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 2.1 + i * 0.06, duration: 0.4, ease }}
              className="flex-1 rounded-t-sm bg-primary-400/70"
              style={{ alignSelf: "flex-end" }}
            />
          ))}
        </div>
      </motion.div>

      {/* ── Floating: Page speed ring (right top) ── */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: -12 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6, ease }}
        className="hidden lg:block absolute right-0 top-6 bg-white dark:bg-base-900 border border-base shadow-2xl rounded-2xl p-4 w-44"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-[8px] font-semibold text-muted uppercase tracking-wider">Performance</span>
          <span className="text-[7px] bg-green-100 dark:bg-green-950/60 text-green-600 dark:text-green-400 font-bold rounded-full px-1.5 py-0.5">LIVE</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative size-12 shrink-0">
            <svg className="size-12 -rotate-90" viewBox="0 0 44 44">
              <circle cx="22" cy="22" r="18" fill="none" stroke="currentColor" strokeWidth="3.5" className="text-base-100 dark:text-base-800" />
              <motion.circle
                cx="22" cy="22" r="18" fill="none" stroke="currentColor" strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: circumference * 0.04 }}
                transition={{ delay: 2.4, duration: 1.4, ease }}
                className="text-primary-500"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-title">96</span>
          </div>
          <div>
            <p className="text-xs font-bold text-title">Page Speed</p>
            <p className="text-[9px] text-green-500 font-semibold mt-0.5">Excellent</p>
            <p className="text-[9px] text-muted mt-1">Lighthouse</p>
          </div>
        </div>
      </motion.div>

      {/* ── Floating: Deploy toast (bottom right of browser) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.5, ease }}
        className="hidden sm:flex absolute right-[2%] lg:right-[5%] bottom-1 items-center gap-3 bg-base-950 dark:bg-white border border-white/10 dark:border-base-200 rounded-xl shadow-2xl px-4 py-3"
      >
        <motion.span
          animate={{ rotate: [0, 16, -8, 0] }}
          transition={{ delay: 3, duration: 0.7 }}
          className="text-xl leading-none select-none"
        >
          🚀
        </motion.span>
        <div>
          <p className="text-xs font-bold text-white dark:text-base-900">Deployed to production</p>
          <p className="text-[9px] text-white/40 dark:text-base-500 mt-0.5">saffronandco.com · just now</p>
        </div>
        <span className="relative flex size-2 ml-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full size-2 bg-green-400" />
        </span>
      </motion.div>

    </div>
  );
}

function DashboardVisual() {
  const bars = [40, 65, 45, 80, 60, 90, 75];
  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary-400/20 dark:bg-primary-500/20 rounded-3xl blur-3xl -z-10"
      />
      {/* Browser chrome */}
      <div className="rounded-2xl border border-base bg-white dark:bg-base-900 shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-base bg-base-50 dark:bg-base-800">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-base-200 dark:bg-base-700 rounded h-5 mx-2 flex items-center px-2.5 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-base-400/60" />
            <span className="text-[9px] text-muted truncate">analytics.yoursite.com</span>
          </div>
        </div>
        {/* Dashboard content */}
        <div className="p-4 space-y-3">
          {/* 3 metric cards */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Revenue", value: "₹4.2L", trend: "+18%", color: "text-primary-600 dark:text-primary-400" },
              { label: "Visitors", value: "8,240", trend: "+31%", color: "text-blue-500" },
              { label: "Orders", value: "342", trend: "+9%", color: "text-violet-500" },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease }}
                className="rounded-xl border border-base bg-base-50 dark:bg-base-800 p-2.5"
              >
                <p className={`text-sm font-bold font-display leading-none ${m.color}`}>{m.value}</p>
                <p className="text-[9px] text-muted mt-1">{m.label}</p>
                <p className="text-[9px] text-green-500 font-semibold mt-0.5">{m.trend}</p>
              </motion.div>
            ))}
          </div>
          {/* Bar chart */}
          <div className="rounded-xl border border-base bg-base-50 dark:bg-base-800 p-3">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] font-semibold text-muted uppercase tracking-wider">Weekly Traffic</p>
              <p className="text-[9px] text-primary-500 font-semibold">↑ 24% vs last week</p>
            </div>
            <div className="flex items-end gap-1.5 h-14">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.06, duration: 0.45, ease }}
                  className="flex-1 rounded-t-sm bg-primary-400 dark:bg-primary-500 opacity-80"
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i} className="flex-1 text-center text-[8px] text-muted">{d}</span>
              ))}
            </div>
          </div>
          {/* Live activity */}
          <div className="rounded-xl border border-base bg-base-50 dark:bg-base-800 p-3 space-y-2">
            <p className="text-[9px] font-semibold text-muted uppercase tracking-wider">Live Activity</p>
            {[
              { dot: "bg-green-400", text: "New signup from Mumbai" },
              { dot: "bg-blue-400", text: "Order #2041 placed — ₹2,499" },
              { dot: "bg-primary-400", text: "Page speed: 96 / 100" },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.35, ease }}
                className="flex items-center gap-2 text-[10px] text-muted"
              >
                <span className={`size-1.5 rounded-full ${row.dot} shrink-0`} />
                {row.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.4, ease }}
        className="absolute -bottom-4 -right-3 bg-white dark:bg-base-900 border border-base rounded-xl shadow-lg px-3 py-2 flex items-center gap-2"
      >
        <span className="relative flex size-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full size-2 bg-green-400" />
        </span>
        <span className="text-xs font-semibold text-title">All systems live</span>
      </motion.div>
    </div>
  );
}

function ProjectTrackerVisual() {
  const steps = [
    { label: "Discovery & Brief",    day: "Day 1",   done: true,  active: false },
    { label: "Wireframes & Design",  day: "Day 2–3", done: true,  active: false },
    { label: "Development",          day: "Day 3–7", done: true,  active: false },
    { label: "QA & Testing",         day: "Day 7",   done: false, active: true  },
    { label: "Go Live",              day: "Day 8",   done: false, active: false },
  ];
  return (
    <div className="relative w-full max-w-sm mx-auto select-none">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-primary-400/20 dark:bg-primary-500/15 rounded-3xl blur-3xl -z-10"
      />
      <div className="rounded-2xl border border-base bg-white dark:bg-base-900 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-base bg-base-950 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-base-400 uppercase tracking-widest">Active Project</p>
            <p className="text-sm font-bold text-white font-display mt-0.5">E-Commerce Store Build</p>
          </div>
          <div className="flex items-center gap-1.5 bg-primary-500/10 border border-primary-500/20 rounded-full px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-[10px] text-primary-400 font-semibold">In Progress</span>
          </div>
        </div>
        {/* Steps */}
        <div className="p-5 space-y-2">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease }}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 border ${
                step.active
                  ? "bg-primary-50 dark:bg-primary-950/40 border-primary-100 dark:border-primary-900"
                  : "bg-base-50 dark:bg-base-800 border-transparent"
              }`}
            >
              <span className={`flex items-center justify-center size-6 rounded-lg shrink-0 ${
                step.done
                  ? "bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400"
                  : step.active
                  ? "bg-primary-500 text-white"
                  : "bg-base-100 dark:bg-base-700 text-muted"
              }`}>
                {step.done ? (
                  <Icon icon="tabler:check" className="size-3.5" />
                ) : step.active ? (
                  <Icon icon="tabler:loader-2" className="size-3.5 animate-spin" />
                ) : (
                  <Icon icon="tabler:circle" className="size-3" />
                )}
              </span>
              <p className={`flex-1 text-xs font-semibold ${
                step.active ? "text-primary-700 dark:text-primary-400" : step.done ? "text-title" : "text-muted"
              }`}>
                {step.label}
              </p>
              <span className={`text-[9px] font-mono ${step.active ? "text-primary-500" : "text-muted"}`}>
                {step.day}
              </span>
            </motion.div>
          ))}
        </div>
        {/* Progress */}
        <div className="px-5 pb-5">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] text-muted">Progress</p>
            <p className="text-[10px] font-bold text-primary-600 dark:text-primary-400">75%</p>
          </div>
          <div className="h-1.5 bg-base-100 dark:bg-base-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.9, ease }}
              className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.4, ease }}
        className="absolute -top-4 -right-3 bg-base-900 dark:bg-white text-white dark:text-base-900 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2"
      >
        <Icon icon="tabler:rocket" className="size-3.5 text-primary-400 dark:text-primary-600" />
        <span className="text-[10px] font-bold">Ships in 5 days avg.</span>
      </motion.div>
    </div>
  );
}
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
  ProcessSection,
} from "../components/sections";

import {
  header,
  faqs,
  features,
  snipplets,
  pricing,
  clients,
  footer,
  process,
  team,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShipFactory — Digital Studio for Websites, Apps & Ecommerce</title>
      </Head>
      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />
      <HeroSection
        id="home"
        badge={{
          href: "#features",
          icon: "tabler:arrow-right",
          label: "✦ Full-Service Digital Studio",
        }}
        title="We Ship Digital Products That Never Stop Working."
        description="From landing pages to full-scale web apps, mobile apps, and ecommerce stores — ShipFactory builds digital products that help your business grow, scale, and stand out."
        buttons={[
          {
            href: "https://form.typeform.com/to/DiKznFvQ",
            label: "Start Your Project →",
            color: "dark",
          },
          {
            href: "#features",
            label: "See What We Build",
            color: "transparent",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        visual={<HeroVisual />}
        clientsLabel="Trusted by growing businesses"
        clients={clients}
        stats={[
          { value: "50+", label: "Projects Delivered" },
          { value: "5 Days", label: "Avg. Time to Live" },
          { value: "3+", label: "Years in Business" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
      />
      <FeatureSection
        id="features"
        title="Everything You Need to Go Digital"
        description="We cover the full product lifecycle — design, development, launch, and beyond. Every deliverable is built to perform and built to last."
        features={features}
      />
      <LargeFeatureSection
        title="Built for real business impact"
        description="We don't just write code — we build digital products with clear goals. Every decision from wireframe to deployment is made with your users and business outcomes in mind."
        list={features.slice(0, 3)}
        visual={<DashboardVisual />}
      />
      <LargeFeatureSection
        reverse={true}
        title="From idea to live product — fast"
        description="Whether you're launching your first website or rebuilding a legacy system, we move quickly, communicate clearly, and deliver quality you can be proud of."
        list={snipplets}
        visual={<ProjectTrackerVisual />}
      />
      <ProcessSection
        id="process"
        steps={process}
      />
      <PricingSection
        id="pricing"
        title="Transparent Pricing, Real Value"
        description="Fixed-scope packages for every stage of your business. No surprises, no hidden fees — just quality work delivered on time."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      />
      <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Have something on your mind? Find quick answers below, or reach out directly — we're happy to chat through your project."
        buttons={[
          {
            label: "Contact Us",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=shippfactory@gmail.com&su=Project%20Enquiry&body=Hi%20ShipFactory%20Team,",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />
      <CtaSection
        id="cta"
        title="Ready to build something great?"
        description="Tell us about your project — we'll get back to you within 24 hours."
        buttons={[
          { label: "Start Now!", href: "https://form.typeform.com/to/DiKznFvQ", color: "dark" },
        ]}
      />

      {/* ── Team teaser ─────────────────────────── */}
      <section className="bg-base-50 dark:bg-base-950 py-20">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">The People Behind ShipFactory</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-title leading-tight mb-4">
              Built by a passionate team
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">
              Small team, big results. We care deeply about every project we take on.
            </p>

            {/* Avatar strip */}
            <div className="flex justify-center items-center gap-3 mb-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                  title={`${member.name} — ${member.role}`}
                  className="size-14 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg font-bold font-display shadow-md border-2 border-white dark:border-base-900 ring-1 ring-primary-200 dark:ring-primary-900"
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    member.initials
                  )}
                </motion.div>
              ))}
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-base-900 dark:bg-white text-white dark:text-base-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-150"
            >
              Meet the Team
              <Icon icon="tabler:arrow-right" className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
