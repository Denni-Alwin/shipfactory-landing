/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "#/base";
import { ThemeSwitch } from "#/ThemeSwitch";

export function Header({ logo, links, buttons, className, ...rest }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full z-50"
    >
      <div className="h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
      <nav
        className={cn(
          "bg-base-50/80 dark:bg-base-950/80 backdrop-blur-xl border-b border-base h-16 px-4",
          className
        )}
        {...rest}
      >
        <div className="container mx-auto h-full flex items-center gap-4">
          <a href={logo.href} className="flex-shrink-0">
            <img src={logo.src} alt={logo.alt} className="h-9 w-auto dark:invert" />
          </a>

          <div className="hidden md:flex items-center gap-0.5 flex-1">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-base-600 dark:text-base-400 hover:text-base-900 dark:hover:text-base-100 px-3 py-2 rounded-lg hover:bg-base-100 dark:hover:bg-base-800 transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <ThemeSwitch />
            <div className="hidden sm:flex items-center gap-2">
              {buttons.map((button, index) => (
                <Button key={index} {...button} />
              ))}
            </div>
            <Button
              icon={open ? "tabler:x" : "tabler:menu-2"}
              color="transparent"
              className="p-2 md:hidden"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-base-50 dark:bg-base-950 border-b border-base shadow-xl"
        >
          <div className="container mx-auto px-4 py-3 space-y-1">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-sm text-base-600 dark:text-base-400 hover:text-base-900 dark:hover:text-base-100 px-3 py-3 rounded-lg hover:bg-base-100 dark:hover:bg-base-800 transition-all duration-150"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 pb-1 border-t border-base flex flex-col gap-2">
              {buttons.map((button, index) => (
                <Button key={index} {...button} block />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
