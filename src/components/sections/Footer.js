/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Icon } from "@iconify/react";
import { SocialLinks } from "../SocialLinks";

export function Footer({ copyright, logo, links, social, ...rest }) {
  return (
    <footer className="bg-base-900 dark:bg-black" {...rest}>
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-base-800">
          <div className="flex flex-col gap-4">
            <img
              src="./logo.png"
              alt="ShipFactory"
              className="h-10 w-auto max-w-[180px] object-contain self-start invert opacity-90"
            />
            <p className="text-sm text-base-400 leading-relaxed max-w-xs">
              We design and build websites, web apps, mobile apps, and ecommerce stores for businesses across India.
            </p>
            <SocialLinks links={social} />
          </div>

          <div>
            <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h6>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-base-400 hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h6>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:shippfactory@gmail.com"
                  className="text-sm text-base-400 hover:text-white transition-colors duration-150 flex items-center gap-2"
                >
                  <Icon icon="tabler:mail" className="size-4 flex-shrink-0" />
                  shippfactory@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/shipp.factory"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-base-400 hover:text-white transition-colors duration-150 flex items-center gap-2"
                >
                  <Icon
                    icon="tabler:brand-instagram"
                    className="size-4 flex-shrink-0"
                  />
                  @shipp.factory
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-base-500">&copy; {copyright}</p>
          <p className="text-sm text-base-500">
            Built with ❤️ for Indian businesses 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
