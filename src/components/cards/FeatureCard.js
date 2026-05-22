import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClass,
}) => {
  return (
    <div
      className={cn(
        "group flex flex-row justify-start items-start gap-4 p-6 rounded-xl h-full",
        "bg-white dark:bg-base-950 border border-base",
        "hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800",
        "transition-all duration-200 ease-out",
        className
      )}
    >
      <Icon
        icon={icon}
        className={cn(
          "flex-shrink-0 size-12 rounded-xl p-2.5",
          "bg-primary-100 dark:bg-primary-950 text-primary-500",
          "group-hover:bg-primary-500 group-hover:text-white transition-colors duration-200",
          iconClass
        )}
      />
      <div>
        <h6 className="text-base font-semibold text-title mb-1">{title}</h6>
        <p className="text-sm text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
