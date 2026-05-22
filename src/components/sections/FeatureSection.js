import { motion } from "framer-motion";
import { SectionHeading } from "#/SectionHeading";
import { FeatureCard } from "../cards/FeatureCard";

const ease = [0.22, 1, 0.36, 1];

export function FeatureSection({
  title,
  description,
  badge,
  features,
  ...rest
}) {
  return (
    <section className="bg-base-100 dark:bg-base-900 py-24 overflow-hidden" {...rest}>
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.55,
                ease,
              }}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
