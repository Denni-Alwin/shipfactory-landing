import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Badge, Button } from "./base";

const ease = [0.22, 1, 0.36, 1];

export function SectionHeading({
  align = "center",
  title,
  description,
  badge,
  buttons = [],
  ...rest
}) {
  const alignClass = {
    center: "items-center text-center mx-auto",
    left: "items-start text-left",
    right: "items-end text-right ml-auto",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease }}
      className={cn("flex flex-col gap-3 max-w-3xl", alignClass[align])}
      {...rest}
    >
      {badge && <Badge {...badge} />}
      <h2 className="text-4xl lg:text-5xl font-display text-title font-semibold tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted leading-relaxed">{description}</p>
      )}
      {buttons.length > 0 && (
        <div
          className={cn("flex items-center gap-4 mt-4", {
            "justify-center": align === "center",
            "justify-start": align === "left",
            "justify-end": align === "right",
          })}
        >
          {buttons.map((button, index) => (
            <Button key={index} {...button} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
