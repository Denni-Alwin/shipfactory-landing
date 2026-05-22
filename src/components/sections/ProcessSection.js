import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionHeading } from "#/SectionHeading";
import { cn } from "@/lib/utils";

export function ProcessSection({ steps, ...rest }) {
  return (
    <section className="bg-base-50 dark:bg-base-950 py-24" {...rest}>
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title="How It Works"
          description="From first call to a live store in just days — not months."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 48, scale: 0.88 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.12,
                type: "spring",
                stiffness: 220,
                damping: 22,
              }}
              whileHover={{ y: -6 }}
              className={cn(
                "group flex flex-col items-center text-center gap-3 p-6 rounded-2xl cursor-default",
                "bg-white dark:bg-base-900 border border-base",
                "hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg",
                "transition-colors duration-200"
              )}
            >
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 dark:bg-primary-950 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200">
                <Icon icon={step.icon} className="size-7" />
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12 + 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 16,
                  }}
                  className="absolute -top-2 -right-2 size-5 rounded-full bg-primary-500 group-hover:bg-base-800 dark:group-hover:bg-base-700 text-white text-xs font-bold font-display flex items-center justify-center transition-colors duration-200"
                >
                  {index + 1}
                </motion.span>
              </div>
              <h3 className="font-display font-semibold text-title text-lg mt-1">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
