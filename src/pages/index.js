import Head from "next/head";
import { FeatureSection } from "@/components/sections/FeatureSection";
import {
  Header,
  HeroSection,
  TestimonialSection,
  FaqSection,
  Footer,
  PricingSection,
  LargeFeatureSection,
  CtaSection,
} from "../components/sections";

import {
  header,
  faqs,
  testimonials,
  features,
  snipplets,
  pricing,
  clients,
  footer,
} from "@/data";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShipFactory</title>
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
          label: "😻 Learn What's New",
        }}
        title="We Build Stores That Never Close."
        description="We help retail businesses go digital with custom ecommerce solutions, making your store accessible anytime, anywhere, for customers worldwide."
        buttons={[
          // {
          //   href: "#",
          //   label: "Start Free Trail",
          //   color: "dark",
          // },
          // {
          //   href: "#",
          //   label: "Learn More",
          //   color: "transparent",
          //   variant: "link",
          //   icon: "tabler:arrow-right",
          // },
        ]}
        image={{
          src: "./tablet-mockup.png",
          alt: "Product Screenshot on Tablet",
          className: "w-full h-auto",
        }}
        clientsLabel="Powered by 10+ Brands"
        clients={clients}
      />
      <FeatureSection
        id="features"
        title="Discover Our Amazing Features"
        description="Explore the range of powerful services we provide to take your retail store online. From store setup to marketing, we’ve got everything you need to succeed."
        features={features}
      />
      <LargeFeatureSection
        title="Stay on top of your business"
        description="We give retail businesses the tools and support they need to thrive online. From setup to growth, we make ecommerce simple."
        list={features.slice(0, 3)}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <LargeFeatureSection
        reverse={true}
        title="Grow your store with ease"
        description="We provide the tools and support to help your business thrive online — from first click to loyal customer."
        list={snipplets}
        image={{
          src: "./phone-mockup.png",
          alt: "Image",
          className:
            "w-full aspect-square object-contain -rotate-6 hover:rotate-0 duration-300 ease-in-out",
        }}
      />
      <PricingSection
        id="pricing"
        title="Pricing for Everyone"
        description="Choose a plan that works for you. All plans include a 7-day free trial."
        badge={{
          leading: true,
          icon: "tabler:credit-card",
          label: "Plans",
        }}
        pricing={pricing}
      />
      {/* <TestimonialSection
        id="testimonials"
        title="Love from our customers"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis similique
        veritatis"
        badge={{
          leading: true,
          icon: "tabler:heart",
          label: "TESTIMONIALS",
        }}
        testimonials={testimonials}
        button={{
          icon: "tabler:brand-x",
          label: "Share Your Feedback on",
          href: "#",
          color: "white",
        }}
      /> */}
      <FaqSection
        id="faqs"
        title="Frequently Asked Questions"
        description="Here are some of our most frequently asked questions. If you have a question that isn't answered here, please feel free to contact us."
        buttons={[
          {
            label: "Contact Support",
            href: "https://mail.google.com/mail/?view=cm&fs=1&to=dennialwinj@gmail.com&su=Support%20Request&body=Hi%20ShipFactory%20Team,",
            color: "primary",
            variant: "link",
            icon: "tabler:arrow-right",
          },
        ]}
        faqs={faqs}
      />
      <CtaSection
        id="cta"
        title="Ready to get started?"
        description="From local shelves to global clicks"
        buttons={[{ label: "Start Now!", href: "https://form.typeform.com/to/DiKznFvQ", color: "dark" }]}
      />
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
