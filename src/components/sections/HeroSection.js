/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Badge, Button } from "#/base";
import { Brands } from "#/Brands";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1];

function CountUp({ value, delay = 0 }) {
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
  const shouldCount =
    match && match[2].length >= 2 && /^[+%]*$/.test(match[3]);
  const initial = shouldCount ? `${match[1]}0${match[3]}` : value;
  const [display, setDisplay] = useState(initial);

  useEffect(() => {
    if (!shouldCount) return;
    const [, pre, numStr, post] = match;
    const end = parseInt(numStr, 10);
    let ctrl;
    const t = setTimeout(() => {
      ctrl = animate(0, end, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
        onUpdate(v) {
          setDisplay(`${pre}${Math.round(v)}${post}`);
        },
      });
    }, delay * 1000);
    return () => {
      clearTimeout(t);
      ctrl?.stop();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>{display}</span>;
}

export function HeroSection({
  badge,
  title,
  description,
  buttons,
  image,
  visual,
  clientsLabel,
  clients,
  stats,
  ...rest
}) {
  const words = title.split(" ");

  return (
    <section {...rest} className="relative overflow-hidden bg-base-50 dark:bg-base-950">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.055]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(120,113,108) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated blobs */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary-100 dark:bg-primary-950 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-base-200 dark:bg-base-900 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-full blur-3xl pointer-events-none"
      />

      <div className="container px-4 mx-auto relative">
        <div className="flex flex-col justify-center items-center min-h-screen">

          {/* --- Text block --- */}
          <div className="flex flex-col justify-center items-center gap-5 text-center max-w-4xl mx-auto mt-24 pb-10">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease }}
            >
              <Badge {...badge} />
            </motion.div>

            {/* Title — word-by-word fade+rise
                NOTE: no filter:blur here — child filters break background-clip:text on the parent h1 */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold title-gradient leading-[1.1] tracking-tight overflow-visible">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.15 + i * 0.075,
                    duration: 0.6,
                    ease,
                  }}
                  className="inline-block mr-[0.22em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6, ease }}
              className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
            >
              {description}
            </motion.p>

            {/* Buttons */}
            {buttons && buttons.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.72, duration: 0.55, ease }}
                className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-2"
              >
                {buttons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </motion.div>
            )}

            {/* Stats strip */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-items-center sm:justify-center gap-x-6 sm:gap-x-8 gap-y-5 mt-6 pt-6 border-t border-base w-full max-w-2xl">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.6, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.88 + i * 0.1,
                      type: "spring",
                      stiffness: 280,
                      damping: 22,
                    }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-2xl font-bold font-display text-title">
                      <CountUp value={stat.value} delay={0.88 + i * 0.1} />
                    </span>
                    <span className="text-xs text-muted uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* --- Product image --- */}
          <div className="w-full max-w-5xl mx-auto relative">
            {/* Glow beneath image */}
            <motion.div
              animate={{ scale: [0.75, 1.05, 0.75], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-primary-300 dark:bg-primary-700 rounded-full blur-3xl pointer-events-none"
            />
            {visual ? (
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.38, duration: 0.9, ease }}
              >
                {visual}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 64, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.38, duration: 0.9, ease }}
              >
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={cn("w-full h-auto drop-shadow-2xl", image.className)}
                  />
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Brands */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="w-full text-center"
          >
            <p className="text-sm text-muted mt-8 mb-2">{clientsLabel}</p>
            <Brands clients={clients} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
