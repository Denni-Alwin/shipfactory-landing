import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Header, Footer } from "@/components/sections";
import { header, footer, projects } from "@/data";

const ease = [0.22, 1, 0.36, 1];

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return { props: { project, next } };
}

function StatCard({ label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5, ease }}
      className="rounded-2xl bg-white dark:bg-base-900 border border-base p-7 text-center"
    >
      <p className="text-4xl md:text-5xl font-display font-bold text-primary-600 dark:text-primary-400 leading-none mb-3">
        {value}
      </p>
      <p className="text-xs text-muted uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

function FeatureCard({ text, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.5, ease }}
      className="flex items-start gap-3 bg-white dark:bg-base-800 border border-base rounded-xl p-4"
    >
      <span className="flex items-center justify-center size-8 rounded-lg bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5">
        <Icon icon="tabler:circle-check" className="size-5" />
      </span>
      <p className="text-sm text-base-700 dark:text-base-300 leading-relaxed font-medium">
        {text}
      </p>
    </motion.div>
  );
}

export default function ProjectDetail({ project, next }) {
  return (
    <>
      <Head>
        <title>{project.title} | ShipFactory Work</title>
      </Head>

      <Header logo={header.logo} links={header.links} buttons={header.buttons} />

      {/* ── Hero ── */}
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

        <div className="container px-4 mx-auto relative max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-base-400 hover:text-primary-400 text-sm transition-colors duration-150 mb-8"
            >
              <Icon icon="tabler:arrow-left" className="size-4" />
              Back to all work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease, delay: 0.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm px-4 py-2 mb-6"
          >
            <Icon icon={project.icon} className="size-4" />
            {project.category}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6, ease }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease }}
            className="text-base-400 text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            {project.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5, ease }}
            className="flex flex-wrap gap-x-10 gap-y-4 mt-10 pt-8 border-t border-white/10"
          >
            {[
              { label: "Client", value: project.client },
              { label: "Industry", value: project.industry },
              { label: "Timeline", value: project.timeline },
              { label: "Year", value: project.year },
            ].map((meta, i) => (
              <div key={i}>
                <p className="text-xs uppercase tracking-wider text-base-500 mb-1">
                  {meta.label}
                </p>
                <p className="text-white font-medium">{meta.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Key outcomes ── */}
      <section className="bg-base-100 dark:bg-base-900 py-16 border-b border-base">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-muted text-center mb-7"
          >
            What this project achieved
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {project.results.map((r, i) => (
              <StatCard key={i} label={r.label} value={r.value} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Story: 01 Situation ── */}
      <section className="bg-white dark:bg-base-950 py-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-muted mb-10"
          >
            The full story
          </motion.p>

          {/* Step 01 — Situation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="flex gap-5 rounded-2xl border border-base bg-base-50 dark:bg-base-900 p-6 md:p-8 mb-4"
          >
            <div className="shrink-0 flex flex-col items-center gap-2 pt-0.5">
              <span className="flex items-center justify-center size-11 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400">
                <Icon icon="tabler:map" className="size-6" />
              </span>
              <span className="text-[10px] font-mono font-bold text-primary-400/60 tracking-widest">
                01
              </span>
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-title mb-2">
                The situation
              </h2>
              <p className="text-muted leading-relaxed">{project.overview}</p>
            </div>
          </motion.div>

          {/* Connector */}
          <div className="flex justify-center my-2">
            <span className="flex flex-col items-center gap-0.5">
              <span className="w-px h-5 bg-base-200 dark:bg-base-700" />
              <Icon icon="tabler:chevron-down" className="size-4 text-base-300 dark:text-base-600" />
            </span>
          </div>

          {/* Steps 02 + 03 — Before / After */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {/* Before — Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.05, duration: 0.6, ease }}
              className="flex flex-col gap-4 rounded-2xl border border-red-100 dark:border-red-950 bg-red-50/60 dark:bg-red-950/20 p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center size-11 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-500">
                  <Icon icon="tabler:alert-circle" className="size-6" />
                </span>
                <div>
                  <p className="text-[10px] font-mono font-bold text-red-400/70 tracking-widest mb-0.5">
                    02 · BEFORE
                  </p>
                  <h2 className="text-lg font-display font-bold text-title leading-tight">
                    The challenge
                  </h2>
                </div>
              </div>
              <p className="text-muted leading-relaxed text-sm">{project.challenge}</p>
            </motion.div>

            {/* After — Solution */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.12, duration: 0.6, ease }}
              className="flex flex-col gap-4 rounded-2xl border border-primary-100 dark:border-primary-900 bg-primary-50/60 dark:bg-primary-950/20 p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center size-11 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400">
                  <Icon icon="tabler:bulb" className="size-6" />
                </span>
                <div>
                  <p className="text-[10px] font-mono font-bold text-primary-400/70 tracking-widest mb-0.5">
                    03 · AFTER
                  </p>
                  <h2 className="text-lg font-display font-bold text-title leading-tight">
                    What we did
                  </h2>
                </div>
              </div>
              <p className="text-muted leading-relaxed text-sm">{project.solution}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What we delivered ── */}
      <section className="bg-base-50 dark:bg-base-900 py-20 border-t border-base">
        <div className="container px-4 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-title mb-2">
              What we delivered
            </h2>
            <p className="text-muted text-sm">
              Every feature and capability built as part of this project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {project.features.map((f, i) => (
              <FeatureCard key={i} text={f} delay={i * 0.07} />
            ))}
          </div>

          {/* Services + tech */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-7 border-t border-base"
          >
            <p className="text-xs uppercase tracking-widest text-muted mb-4">
              Services &amp; technology used
            </p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s, i) => (
                <span
                  key={i}
                  className="text-sm font-medium text-base-600 dark:text-base-300 bg-white dark:bg-base-800 border border-base rounded-lg px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
              {project.tags.map((t, i) => (
                <span
                  key={`t-${i}`}
                  className="text-sm font-medium text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/50 border border-primary-100 dark:border-primary-900 rounded-lg px-3 py-1.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-white dark:bg-base-950 py-20">
        <div className="container px-4 mx-auto max-w-3xl">
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease }}
            className="relative rounded-3xl bg-base-50 dark:bg-base-900 border border-base px-8 py-12 text-center"
          >
            <Icon
              icon="tabler:quote"
              className="size-10 text-primary-500/30 mx-auto mb-4"
            />
            <blockquote className="text-xl md:text-2xl font-display text-title leading-relaxed">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="text-muted text-sm mt-6">
              — {project.testimonial.author}
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* ── Next project + CTA ── */}
      <section className="bg-base-100 dark:bg-base-900 py-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Link href={next.href} className="group">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                whileHover={{ y: -6 }}
                className="h-full rounded-3xl bg-white dark:bg-base-900 border border-base group-hover:border-primary-200 dark:group-hover:border-primary-800 group-hover:shadow-xl transition-colors duration-300 p-7 flex flex-col"
              >
                <p className="text-xs uppercase tracking-wider text-muted mb-4">
                  Next project
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center size-11 rounded-xl bg-base-950 text-primary-400 overflow-hidden p-1.5">
                    {next.logo
                      ? <img src={next.logo} alt={next.title} className="w-full h-full object-contain" />
                      : <Icon icon={next.icon} className="size-6" />
                    }
                  </span>
                  <div>
                    <h3 className="text-lg font-display font-bold text-title leading-tight">
                      {next.title}
                    </h3>
                    <p className="text-xs text-muted">{next.category}</p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed flex-1">
                  {next.summary}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 dark:text-primary-400 mt-5 group-hover:gap-2.5 transition-all">
                  View case study
                  <Icon icon="tabler:arrow-right" className="size-4" />
                </span>
              </motion.div>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.6, ease }}
              className="relative overflow-hidden rounded-3xl bg-base-900 dark:bg-black p-7 flex flex-col justify-center text-center"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 w-56 h-40 bg-primary-400 rounded-full blur-3xl pointer-events-none"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Want results like these?
                </h3>
                <p className="text-base-400 text-sm mb-6 leading-relaxed">
                  Let&apos;s build your next website or store.
                </p>
                <motion.a
                  href="https://form.typeform.com/to/DiKznFvQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-150"
                >
                  <Icon icon="tabler:rocket" className="size-4" />
                  Start a project
                </motion.a>
              </div>
            </motion.div>
          </div>
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
