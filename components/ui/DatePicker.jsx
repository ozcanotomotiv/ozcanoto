"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function toYmd(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function parseYmd(ymd) {
  if (!ymd) return null;
  const [y, m, d] = ymd.split("-").map((x) => Number(x));
  if (!y || !m || !d) return null;
  const dt = new Date(y, m - 1, d);
  if (Number.isNaN(dt.getTime())) return null;
  return dt;
}

const monthNamesTr = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];

export default function DatePicker({ value, onChange, name, className }) {
  const rootRef = useRef(null);
  const selected = useMemo(() => parseYmd(value), [value]);
  const [open, setOpen] = useState(false);

  const [cursor, setCursor] = useState(() => {
    const base = selected || new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });

  useEffect(() => {
    if (!open) return;

    function onDocClick(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    }

    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const yearOptions = useMemo(() => {
    const base = selected || new Date();
    const y = base.getFullYear();
    const years = [];
    for (let i = y - 8; i <= y + 2; i += 1) years.push(i);
    return years;
  }, [selected]);

  const monthLabel = useMemo(() => {
    return cursor.toLocaleDateString("tr-TR", { month: "long", year: "numeric" });
  }, [cursor]);

  const grid = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const first = new Date(y, m, 1);
    const startDay = (first.getDay() + 6) % 7; // Monday=0
    const start = new Date(y, m, 1 - startDay);

    const days = [];
    for (let i = 0; i < 42; i += 1) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      days.push(d);
    }
    return days;
  }, [cursor]);

  const selectedYmd = value || "";

  function emit(nextYmd) {
    onChange?.({ target: { name, value: nextYmd } });
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "h-12 w-full rounded-[var(--radius-sm)] border border-black/10 bg-white px-4 text-left text-sm font-semibold text-text",
          "shadow-sm outline-none transition-shadow focus:ring-2 focus:ring-[var(--color-ring)]",
          "flex items-center justify-between gap-3"
        )}
      >
        <span className={cn(!value && "text-text-muted")}>{value || "Tarih Seçin"}</span>
        <CalendarDays size={18} className="text-text-muted" />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 rounded-[var(--radius-md)] border border-black/10 bg-surface p-4 shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] hover:bg-muted"
              aria-label="Önceki ay"
              onClick={() =>
                setCursor((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1))
              }
            >
              <ChevronLeft size={18} />
            </button>
            <div className="hidden text-sm font-semibold capitalize text-text sm:block">
              {monthLabel}
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] hover:bg-muted"
              aria-label="Sonraki ay"
              onClick={() =>
                setCursor((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1))
              }
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <label className="grid gap-1">
              <span className="text-[11px] font-semibold text-text-muted">Ay</span>
              <select
                value={cursor.getMonth()}
                onChange={(e) => {
                  const nextMonth = Number(e.target.value);
                  setCursor((d) => new Date(d.getFullYear(), nextMonth, 1));
                }}
                className={cn(
                  "h-11 w-full rounded-[var(--radius-sm)] border border-black/10 bg-white px-3 text-sm font-semibold text-text",
                  "shadow-sm outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
                )}
              >
                {monthNamesTr.map((m, idx) => (
                  <option key={m} value={idx}>
                    {m}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-1">
              <span className="text-[11px] font-semibold text-text-muted">Yıl</span>
              <select
                value={cursor.getFullYear()}
                onChange={(e) => {
                  const nextYear = Number(e.target.value);
                  setCursor((d) => new Date(nextYear, d.getMonth(), 1));
                }}
                className={cn(
                  "h-11 w-full rounded-[var(--radius-sm)] border border-black/10 bg-white px-3 text-sm font-semibold text-text",
                  "shadow-sm outline-none focus:ring-2 focus:ring-[var(--color-ring)]"
                )}
              >
                {yearOptions.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold text-text-muted">
            {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((x) => (
              <div key={x} className="py-1">
                {x}
              </div>
            ))}
          </div>

          <div className="mt-1 grid grid-cols-7 gap-1">
            {grid.map((d) => {
              const ymd = toYmd(d);
              const inMonth = d.getMonth() === cursor.getMonth();
              const isSelected = ymd === selectedYmd;

              return (
                <button
                  key={ymd}
                  type="button"
                  onClick={() => {
                    emit(ymd);
                    setOpen(false);
                  }}
                  className={cn(
                    "h-10 rounded-[var(--radius-sm)] text-sm font-semibold",
                    inMonth ? "text-text" : "text-text-muted/60",
                    isSelected
                      ? "bg-accent text-black"
                      : "hover:bg-muted"
                  )}
                >
                  {d.getDate()}
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex justify-between gap-2">
            <button
              type="button"
              className="h-10 rounded-[var(--radius-sm)] px-3 text-sm font-semibold text-text hover:bg-muted"
              onClick={() => emit("")}
            >
              Temizle
            </button>
            <button
              type="button"
              className="h-10 rounded-[var(--radius-sm)] bg-black px-3 text-sm font-semibold text-white"
              onClick={() => {
                const today = new Date();
                emit(toYmd(today));
                setCursor(new Date(today.getFullYear(), today.getMonth(), 1));
                setOpen(false);
              }}
            >
              Bugün
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
