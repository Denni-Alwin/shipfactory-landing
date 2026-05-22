import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "#/SectionHeading";
import { PricingCard } from "#/cards";

const ease = [0.22, 1, 0.36, 1];

export function PricingSection({
  title,
  description,
  badge,
  pricing,
  ...rest
}) {
  const [tenure, setTenure] = React.useState("monthly");
  return (
    <section className="bg-base-100 dark:bg-base-900 py-24" {...rest}>
      <div className="container px-4 mx-auto">
        <SectionHeading
          align="center"
          title={title}
          description={description}
          badge={badge}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center my-10"
        >
          <div className="text-sm text-muted">15% Discount on Yearly Payment</div>
        </motion.div>
        <div className="max-w-10xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {pricing.map((price, index) => {
            const isPopular = index === 1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={
                  isPopular
                    ? {
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                      }
                    : {
                        delay: index * 0.1,
                        duration: 0.55,
                        ease,
                      }
                }
                whileHover={{ y: -6 }}
              >
                <PricingCard
                  {...price}
                  tenure={tenure}
                  popular={isPopular}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
