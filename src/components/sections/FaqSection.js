import { motion } from "framer-motion";
import { Accordion } from "#/base";
import { SectionHeading } from "#/SectionHeading";

const ease = [0.22, 1, 0.36, 1];

export function FaqSection({ title, description, buttons, faqs, ...rest }) {
  return (
    <section className="bg-base-50 dark:bg-base-950 py-24 overflow-hidden" {...rest}>
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-12 gap-8 lg:gap-20 bg-white dark:bg-base-900 p-5 sm:p-8 md:p-16 rounded-3xl border border-base"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease }}
            className="col-span-12 lg:col-span-5"
          >
            <SectionHeading
              align="left"
              title={title}
              description={description}
              buttons={buttons}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6, ease }}
            className="col-span-12 lg:col-span-7"
          >
            <Accordion items={faqs} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
