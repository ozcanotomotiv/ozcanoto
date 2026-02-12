import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Select({ className, ...props }) {
  return (
    <div className={cn("relative", className)}>
      <select
        {...props}
        className={cn(
          "h-12 w-full appearance-none rounded-[var(--radius-sm)] border border-black/10 bg-white pl-4 pr-10 text-sm font-semibold text-text outline-none transition-shadow focus:ring-2 focus:ring-[var(--color-ring)]",
          "shadow-sm"
        )}
      />
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-muted"
        size={18}
      />
    </div>
  );
}
