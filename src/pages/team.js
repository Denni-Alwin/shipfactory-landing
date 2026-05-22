/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Header, Footer } from "@/components/sections";
import { header, footer, team } from "@/data";

const ease = [0.22, 1, 0.36, 1];

const CARD_THEMES = [
  {
    avatar: "from-primary-400 to-primary-600",
    shadow: "shadow-primary-500/30",
    glow: "rgba(132,204,22,0.25)",
  },
  {
    avatar: "from-base-500 to-base-800",
    shadow: "shadow-base-600/30",
    glow: "rgba(120,113,108,0.2)",
  },
  {
    avatar: "from-primary-500 to-base-700",
    shadow: "shadow-primary-600/25",
    glow: "rgba(101,163,13,0.22)",
  },
  {
    avatar: "from-base-600 to-base-900",
    shadow: "shadow-base-700/30",
    glow: "rgba(87,83,78,0.2)",
  },
];

function TeamCard({ member, index, onViewPhoto }) {
  const theme = CARD_THEMES[index % CARD_THEMES.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 52 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.13, type: "spring", stiffness: 200, damping: 22 }}
      whileHover={{ y: -8 }}
      className="group relative rounded-3xl overflow-hidden bg-white dark:bg-base-900 border border-base hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-2xl transition-colors duration-300 flex flex-col"
    >
      {/* ── Avatar area (dark panel — same for both variants) ── */}
      <div className="relative h-52 bg-base-950 overflow-hidden flex items-center justify-center">
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

        {member.image ? (
          /* ── Photo avatar (contained, no crop) ── */
          <>
            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className={`relative z-10 size-[96px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/10 ${theme.shadow}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* View photo button — appears on hover */}
            <button
              onClick={() => onViewPhoto(member)}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0"
            >
              <Icon icon="tabler:eye" className="size-3.5" />
              View Photo
            </button>
          </>
        ) : (
          /* ── Initials avatar (unchanged) ── */
          <motion.div
            whileHover={{ scale: 1.1, rotate: 4 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className={`relative z-10 size-[84px] rounded-2xl bg-gradient-to-br ${theme.avatar} flex items-center justify-center text-white text-3xl font-bold font-display shadow-xl ${theme.shadow}`}
          >
            {member.initials}
          </motion.div>
        )}

        {/* Role badge — top right */}
        <div className="absolute top-4 right-4 z-10 bg-white/5 border border-white/10 text-primary-300 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-md">
          {member.role}
        </div>
        {/* Bottom fade to card bg */}
        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white dark:from-base-900 to-transparent pointer-events-none" />
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-display font-bold text-title leading-tight">
          {member.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed mt-3 flex-1">{member.bio}</p>

        {/* Contact strip */}
        <div className="flex items-center gap-2 mt-5 pt-4 border-t border-base">
          <span className="text-xs text-muted mr-1 uppercase tracking-wider">Contact</span>
          {member.contacts.map((contact, ci) => (
            <motion.a
              key={ci}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              title={contact.label}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="flex items-center justify-center size-8 rounded-lg bg-base-100 dark:bg-base-800 text-base-500 hover:bg-primary-100 dark:hover:bg-primary-950 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-150"
            >
              <Icon icon={contact.icon} className="size-4" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ── Lightbox modal ── */
function Lightbox({ member, onClose }) {
  return (
    <AnimatePresence>
      {member && (
        <motion.div
          key="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            key="lightbox-panel"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-base-900 rounded-3xl overflow-hidden shadow-2xl max-w-sm w-full"
          >
            {/* Photo */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full aspect-[3/4] object-cover object-center"
            />
            {/* Name + role overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pt-16 pb-6">
              <p className="text-white font-display font-bold text-xl leading-tight">{member.name}</p>
              <p className="text-primary-400 text-sm mt-1">{member.role}</p>
            </div>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 size-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white backdrop-blur-md transition-colors duration-150"
            >
              <Icon icon="tabler:x" className="size-4" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function TeamPage() {
  const [lightboxMember, setLightboxMember] = useState(null);
  const words = "The People Behind ShipFactory".split(" ");

  return (
    <>
      <Head>
        <title>Our Team | ShipFactory</title>
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
            <Icon icon="tabler:users" className="size-4" />
            Our Team
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
            Small team, big results. We&apos;re obsessed with building digital products
            that genuinely move the needle for our clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, ease }}
            className="flex flex-wrap justify-center gap-3 mt-10"
          >
            {[
              { icon: "tabler:users", label: `${team.length} Team Members` },
              { icon: "tabler:building-store", label: "3 Stores Launched" },
              { icon: "tabler:heart", label: "100% Client Focused" },
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

      {/* ── Team grid ── */}
      <section className="bg-base-100 dark:bg-base-900 py-24">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                member={member}
                index={index}
                onViewPhoto={setLightboxMember}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Join-us CTA ── */}
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
                Work With Us
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                Want to join our team?
              </h2>
              <p className="text-base-400 mb-8 leading-relaxed">
                We&apos;re always looking for passionate people who want to help
                build great digital products.
              </p>
              <motion.a
                href="mailto:shippfactory@gmail.com"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white font-semibold px-7 py-3.5 rounded-full transition-colors duration-150"
              >
                <Icon icon="tabler:mail" className="size-4" />
                Get in touch
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

      {/* ── Lightbox ── */}
      <Lightbox member={lightboxMember} onClose={() => setLightboxMember(null)} />
    </>
  );
}
