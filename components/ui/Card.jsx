import { cn } from "@/lib/utils";

export default function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-md)] bg-surface p-6 text-text shadow-[var(--shadow-soft)] ring-1 ring-black/5",
        className
      )}
    >
      {children}
    </div>
  );
}
