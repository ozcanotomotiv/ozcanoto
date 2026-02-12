import { cn } from "@/lib/utils";

export default function Button({
  as: Comp = "button",
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] font-semibold tracking-tight transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)] disabled:opacity-60 disabled:pointer-events-none active:translate-y-[1px]";

  const variants = {
    primary:
      "bg-accent text-brand shadow-[var(--shadow-soft)] hover:brightness-95 hover:saturate-110",
    secondary:
      "bg-surface text-text shadow-[var(--shadow-soft)] hover:bg-muted",
    outline:
      "border border-white/20 bg-transparent text-brand-foreground hover:border-white/30 hover:bg-white/10",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-5 text-base",
    lg: "h-14 px-6 text-base",
  };

  return (
    <Comp
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
