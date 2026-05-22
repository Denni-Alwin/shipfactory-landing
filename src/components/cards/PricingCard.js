import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Button } from "../base";

export const PricingCard = ({
  popular = false,
  tenure = "monthly",
  name,
  description,
  value,
  unit,
  currency,
  features,
  button,
  className,
}) => {
  const price = value[tenure];
  const formattedPrice =
    typeof price === "number" ? price.toLocaleString("en-IN") : price;

  return (
    <div
      className={cn(
        "relative flex flex-col p-6 rounded-2xl",
        popular
          ? "bg-base-900 dark:bg-base-950 ring-2 ring-primary-400 shadow-xl shadow-primary-500/10"
          : "bg-white dark:bg-base-950 border border-base",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow whitespace-nowrap">
            Most Popular
          </span>
        </div>
      )}

      <div>
        <h5
          className={cn(
            "font-display font-semibold text-xl",
            popular ? "text-white" : "text-title"
          )}
        >
          {name}
        </h5>
        <p className={cn("text-sm mt-1", popular ? "text-base-400" : "text-muted")}>
          {description}
        </p>
      </div>

      <div
        className={cn(
          "w-full border-b my-5",
          popular ? "border-base-700" : "border-base"
        )}
      />

      <div className="inline-flex gap-1 items-baseline">
        <span className={cn("text-xl", popular ? "text-base-400" : "text-muted")}>
          {currency || "₹"}
        </span>
        <span
          className={cn(
            "text-5xl font-display font-bold leading-none",
            popular ? "text-white" : "text-title"
          )}
        >
          {formattedPrice}
        </span>
        <span className={cn("text-xs", popular ? "text-base-400" : "text-muted")}>
          {unit}
        </span>
      </div>

      <ul className="flex flex-col gap-2.5 my-6 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Icon
              icon="tabler:check"
              className={cn(
                "flex-shrink-0 size-4 mt-0.5",
                popular ? "text-primary-400" : "text-primary-500"
              )}
            />
            <span
              className={cn(
                "text-sm leading-relaxed",
                popular
                  ? "text-base-300"
                  : "text-base-600 dark:text-base-400"
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button block {...button} color={popular ? "primary" : button.color} />
    </div>
  );
};
