import { cn } from "@/lib/utils";

const variants = {
  bronze: {
    container: "bg-secondary-warm hover:bg-secondary",
    icon: "text-secondary group-hover:text-white",
    text: "text-body group-hover:text-white"
  },
  blue: {
    container: "bg-[#d8e7f8] hover:bg-primary-deep",
    icon: "text-primary-deep group-hover:text-white",
    text: "text-body group-hover:text-white"
  }
};

export function InfoCard({ icon, variant = "bronze", children, className, ...props }) {
  const styles = variants[variant] || variants.bronze;

  return (
    <div
      className={cn(
        "group flex items-center p-5 gap-4 transition-colors duration-300 w-full",
        styles.container,
        className
      )}
      {...props}
    >
      {icon && (
        <span className={cn("shrink-0 transition-colors duration-300", styles.icon)}>
          {icon}
        </span>
      )}
      <div className={cn("text-lg font-normal transition-colors duration-300 leading-snug", styles.text)}>
        {children}
      </div>
    </div>
  );
}
