import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "#/base";

const ease = [0.22, 1, 0.36, 1];

export function CtaSection({ title, description, buttons, ...rest }) {
  return (
    <section className="bg-base-100 dark:bg-base-900 py-20 px-4" {...rest}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-3xl bg-base-900 dark:bg-black px-5 py-14 sm:px-8 sm:py-20 text-center"
        >
          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(163,230,53,1) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Animated lime glow — top centre */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary-400 rounded-full blur-3xl pointer-events-none"
          />
          {/* Animated lime glow — bottom right */}
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-0 right-0 w-72 h-72 bg-primary-500 rounded-full blur-3xl pointer-events-none"
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5, ease }}
              className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm px-4 py-2 mb-6"
            >
              <Icon icon="tabler:rocket" className="size-4" />
              Get Started Today
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65, ease }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.38, duration: 0.55, ease }}
              className="text-base-400 text-lg mb-8"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease }}
              className="flex justify-center items-center gap-4 flex-wrap"
            >
              {buttons.map((button, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button {...button} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
