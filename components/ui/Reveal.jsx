"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

function hiddenTransform(from, distance) {
  const d = Number(distance) || 18;
  if (from === "left") return `translate3d(-${d}px, 0, 0)`;
  if (from === "right") return `translate3d(${d}px, 0, 0)`;
  if (from === "down") return `translate3d(0, -${d}px, 0)`;
  return `translate3d(0, ${d}px, 0)`;
}

export default function Reveal({
  children,
  className,
  delayMs = 0,
  once = true,
  from = "up",
  distance = 18,
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) obs.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delayMs}ms`,
        transform: shown ? "translate3d(0,0,0)" : hiddenTransform(from, distance),
      }}
      className={cn(
        "transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform",
        "motion-reduce:transition-none motion-reduce:transform-none",
        shown
          ? "opacity-100 blur-0"
          : "opacity-0 blur-[2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
