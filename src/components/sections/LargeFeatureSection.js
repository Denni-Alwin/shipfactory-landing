/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "#/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export function LargeFeatureSection({
  reverse = false,
  title,
  description,
  list,
  image,
  visual,
}) {
  return (
    <section className="bg-base-100 dark:bg-base-900 py-20 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Text panel */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
          >
            <SectionHeading
              align="left"
              title={title}
              description={description}
            />
            <div className="flex flex-col gap-4 mt-8">
              {list.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 mt-0.5 size-6 rounded-full bg-primary-100 dark:bg-primary-950 flex items-center justify-center">
                    <Icon icon="tabler:check" className="size-3.5 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-title text-sm">{item.title}</p>
                    <p className="text-sm text-muted mt-0.5">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className={cn(
              "group relative flex items-center justify-center isolate",
              { "md:order-first": reverse }
            )}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 aspect-square rounded-full bg-primary-300/50 dark:bg-primary-500/40 blur-3xl"
            />
            {visual ?? <img src={image.src} alt={image.alt} className={image.className} />}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
