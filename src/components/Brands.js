/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";

export const Brands = ({ clients, className, ...rest }) => {
  return (
    <div className={cn("w-full overflow-hidden py-4", className)} {...rest}>
      {/*
        4 identical copies side by side.
        animate-marquee translates by -25% of total width = exactly one copy.
        When the CSS animation resets from -25% → 0%, the second copy slides
        into the exact position the first was at, so the loop is invisible.
      */}
      <div className="flex items-center w-max animate-marquee will-change-transform">
        {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
          <img
            key={i}
            src={client.src}
            alt={client.name}
            className="h-7 grayscale opacity-50 mx-10 flex-shrink-0 select-none pointer-events-none"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};
