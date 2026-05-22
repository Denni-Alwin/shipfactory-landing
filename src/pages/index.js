import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
  ProcessSection,
} from "../components/sections";

import {
  header,
  faqs,
  features,
  snipplets,
  pricing,
  clients,
  footer,
  process,
  team,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShipFactory — Digital Studio for Websites, Apps & Ecommerce</title>
      </Head>
      <Header
        logo={header.logo}
        links={header.links}
        buttons={header.buttons}
      />
      <HeroSection
        id="home"
        badge={{
          href: "#features",
          icon: "tabler:arrow-right",
          label: "✦ Full-Service Digital Studio",
        }}
        title="We Ship Digital Products That Never Stop Working."
        description="From landing pages to full-scale web apps, mobile apps, and ecommerce stores — ShipFactory builds digital products that help your business grow, scale, and stand out."
        buttons={[
          {
            href: "https://form.typeform.com/to/DiKznFvQ",
            label: "Start Your Project →",
            color: "dark",
          },
          {
            href: "#features",
            label: "See What We Build",
            color: "transparent",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        image={{
          src: "./tablet-mockup.png",
          alt: "Product Screenshot on Tablet",
          className: "w-full h-auto",
        }}
        clientsLabel="Trusted by growing businesses"
        clients={clients}
        stats={[
          { value: "50+", label: "Projects Delivered" },
          { value: "5 Days", label: "Avg. Time to Live" },
          { value: "3+", label: "Years in Business" },
          { value: "98%", label: "Client Satisfaction" },
        ]}
      />
      <FeatureSection
        id="features"
        title="Everything You Need to Go Digital"
        description="We cover the full product lifecycle — design, development, launch, and beyond. Every deliverable is built to perform and built to last."
        features={features}
      />
      <LargeFeatureSection
        title="Built for real business impact"
        description="We don't just write code — we build digital products with clear goals. Every decision from wireframe to deployment is made with your users and business outcomes in mind."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "App on phone",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <LargeFeatureSection
        reverse={true}
        title="From idea to live product — fast"
        description="Whether you're launching your first website or rebuilding a legacy system, we move quickly, communicate clearly, and deliver quality you can be proud of."
        list={snipplets}
        image={{
          src: "./phone-mockup.png",
          alt: "App on phone",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <ProcessSection
        id="process"
        steps={process}
      />
      <PricingSection
        id="pricing"
        title="Transparent Pricing, Real Value"
        description="Fixed-scope packages for every stage of your business. No surprises, no hidden fees — just quality work delivered on time."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      />
      <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Have something on your mind? Find quick answers below, or reach out directly — we're happy to chat through your project."
        buttons={[
          {
            label: "Contact Us",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=shippfactory@gmail.com&su=Project%20Enquiry&body=Hi%20ShipFactory%20Team,",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />
      <CtaSection
        id="cta"
        title="Ready to build something great?"
        description="Tell us about your project — we'll get back to you within 24 hours."
        buttons={[
          { label: "Start Now!", href: "https://form.typeform.com/to/DiKznFvQ", color: "dark" },
        ]}
      />

      {/* ── Team teaser ─────────────────────────── */}
      <section className="bg-base-50 dark:bg-base-950 py-20">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-500 mb-3">The People Behind ShipFactory</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-title leading-tight mb-4">
              Built by a passionate team
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">
              Small team, big results. We care deeply about every project we take on.
            </p>

            {/* Avatar strip */}
            <div className="flex justify-center items-center gap-3 mb-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 260, damping: 18 }}
                  title={`${member.name} — ${member.role}`}
                  className="size-14 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-lg font-bold font-display shadow-md border-2 border-white dark:border-base-900 ring-1 ring-primary-200 dark:ring-primary-900"
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    member.initials
                  )}
                </motion.div>
              ))}
            </div>

            <Link
              href="/team"
              className="inline-flex items-center gap-2 bg-base-900 dark:bg-white text-white dark:text-base-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-150"
            >
              Meet the Team
              <Icon icon="tabler:arrow-right" className="size-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer
        id="footer"
        copyright={footer.copyright}
        logo={footer.logo}
        social={footer.social}
        links={footer.links}
      />
    </>
  );
}
