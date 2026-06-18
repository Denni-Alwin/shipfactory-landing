import Head from "next/head";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Header, Footer } from "@/components/sections";
import { header, footer, projects } from "@/data";

const ease = [0.22, 1, 0.36, 1];

const CARD_THEMES = [
  {
    icon: "from-primary-400 to-primary-600",
    shadow: "shadow-primary-500/30",
    glow: "rgba(132,204,22,0.25)",
  },
  {
    icon: "from-base-500 to-base-800",
    shadow: "shadow-base-600/30",
    glow: "rgba(120,113,108,0.2)",
  },
  {
    icon: "from-primary-500 to-base-700",
    shadow: "shadow-primary-600/25",
    glow: "rgba(101,163,13,0.22)",
  },
  {
    icon: "from-base-600 to-base-900",
    shadow: "shadow-base-700/30",
    glow: "rgba(87,83,78,0.2)",
  },
];

function ProjectCard({ project, index }) {
  const theme = CARD_THEMES[index % CARD_THEMES.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 22 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-base-900 border border-base hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-2xl transition-colors duration-300 flex flex-col"
    >
      {/* ── Header panel (dark) ── */}
      <div className="relative h-44 bg-base-950 overflow-hidden flex items-center justify-center">
        {/* Animated radial glow */}
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.15, 1] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 120%, ${theme.glow} 0%, transparent 65%)`,
          }}
        />
        {/* Dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(163,230,53,1) 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
          }}
        />

        {/* Icon tile */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 4 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className={`relative z-10 size-[76px] rounded-2xl bg-gradient-to-br ${theme.icon} flex items-center justify-center text-white shadow-xl ${theme.shadow}`}
        >
          <Icon icon={project.icon} className="size-9" />
        </motion.div>

        {/* Category badge — top right */}
        <div className="absolute top-4 right-4 z-10 bg-white/5 border border-white/10 text-primary-300 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
          {project.category}
        </div>
        {/* Year — top left */}
        <div className="absolute top-4 left-4 z-10 text-base-400 text-xs font-medium tracking-wider">
          {project.year}
        </div>
        {/* Bottom fade to card bg */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white dark:from-base-900 to-transparent pointer-events-none" />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-display font-bold text-title leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mt-3">{project.summary}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          {project.metrics.map((metric, mi) => (
            <div
              key={mi}
              className="rounded-xl bg-base-100 dark:bg-base-800 px-3 py-2.5"
            >
              <p className="text-base font-display font-bold text-primary-600 dark:text-primary-400 leading-none">
                {metric.value}
              </p>
              <p className="text-[11px] text-muted mt-1 uppercase tracking-wider">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tag strip */}
        <div className="flex flex-wrap items-center gap-2 mt-5 pt-4 border-t border-base flex-1 content-start">
          {project.tags.map((tag, ti) => (
            <span
              key={ti}
              className="text-xs font-medium text-base-500 dark:text-base-400 bg-base-100 dark:bg-base-800 rounded-md px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View link */}
        <motion.a
          href={project.href}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 mt-5"
        >
          View case study
          <Icon icon="tabler:arrow-right" className="size-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  const words = "Work That Ships & Sells".split(" ");

  return (
    <>
      <Head>
        <title>Our Work | ShipFactory</title>
      </Head>

      <Header logo={header.logo} links={header.links} buttons={header.buttons} />

      {/* ── Hero (dark) ── */}
      <section className="relative overflow-hidden bg-base-950 pt-36 pb-24">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, rgb(163,230,53) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-500 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-base-700 rounded-full blur-3xl pointer-events-none"
        />

        <div className="container px-4 mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm px-4 py-2 mb-8"
          >
            <Icon icon="tabler:rocket" className="size-4" />
            Our Work
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.08, duration: 0.6, ease }}
                className="inline-block mr-[0.22em] last:mr-0"
              >
                {i === words.length - 1 ? (
                  <span className="text-primary-400">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6, ease }}
            className="text-base-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            From fast, polished websites to revenue-driving online stores — here&apos;s a
            taste of what we build for our clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {[
              { icon: "tabler:device-laptop", label: "Web Development" },
              { icon: "tabler:building-store", label: "Store Creation" },
              { icon: "tabler:bolt", label: "Built to Convert" },
            ].map((chip, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-base-400 bg-white/5 border border-white/10 rounded-full px-4 py-2"
              >
                <Icon icon={chip.icon} className="size-3.5 text-primary-400" />
                {chip.label}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className="bg-base-100 dark:bg-base-900 py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Start-a-project CTA ── */}
      <section className="bg-base-50 dark:bg-base-950 py-24">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
            className="relative overflow-hidden rounded-3xl bg-base-900 dark:bg-black px-8 py-16 text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.22, 0.12] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-48 bg-primary-400 rounded-full blur-3xl pointer-events-none"
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm px-4 py-2 mb-5">
                <Icon icon="tabler:sparkles" className="size-4" />
                Start a Project
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                Got something to build?
              </h2>
              <p className="text-base-400 mb-8 leading-relaxed">
                Tell us about your idea and we&apos;ll ship a website or store that your
                customers — and your revenue — will love.
              </p>
              <motion.a
                href="https://form.typeform.com/to/DiKznFvQ"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150"
              >
                <Icon icon="tabler:rocket" className="size-4" />
                Get started
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
