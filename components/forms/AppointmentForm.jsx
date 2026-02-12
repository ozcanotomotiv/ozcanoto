"use client";

import { useMemo, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import { db } from "@/lib/firebase";
import Select from "@/components/ui/Select";
import DatePicker from "@/components/ui/DatePicker";

const serviceOptions = [
  "Boyasız Göçük",
  "Periyodik Bakım",
  "Mekanik Onarım",
];

export default function AppointmentForm({ variant = "full" }) {
  const initial = useMemo(
    () => ({ name: "", phone: "", service: "", date: "", message: "" }),
    []
  );

  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);

  const isCompact = variant === "compact";

  function onChange(e) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();

    if (!form.name.trim()) return toast.error("Lütfen adınızı yazın.");
    if (!form.phone.trim()) return toast.error("Lütfen telefon numaranızı yazın.");
    if (!form.service.trim()) return toast.error("Lütfen hizmet seçin.");
    if (!form.date.trim()) return toast.error("Lütfen tarih seçin.");

    setLoading(true);
    try {
      await addDoc(collection(db, "appointments"), {
        name: form.name.trim(),
        phone: form.phone.trim(),
        service: form.service.trim(),
        date: form.date,
        message: form.message.trim(),
        createdAt: serverTimestamp(),
        status: "new",
      });

      toast.success("Randevu talebiniz alındı. En kısa sürede dönüş yapacağız.");
      setForm(initial);
    } catch (err) {
      toast.error("Gönderim başarısız. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-[var(--radius-sm)] border border-black/10 bg-white px-4 text-sm font-semibold text-text outline-none shadow-sm transition-shadow focus:ring-2 focus:ring-[var(--color-ring)]";
  const textAreaClass =
    "w-full rounded-[var(--radius-sm)] border border-black/10 bg-white p-4 text-sm font-semibold text-text outline-none shadow-sm transition-shadow focus:ring-2 focus:ring-[var(--color-ring)]";

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        name="name"
        value={form.name}
        onChange={onChange}
        className={inputClass}
        placeholder="Ad Soyad"
        autoComplete="name"
      />
      <input
        name="phone"
        value={form.phone}
        onChange={onChange}
        className={inputClass}
        placeholder="Telefon"
        inputMode="tel"
        autoComplete="tel"
      />

      <Select
        name="service"
        value={form.service}
        onChange={onChange}
      >
        <option value="">Hizmet Seçin</option>
        {serviceOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </Select>

      <DatePicker name="date" value={form.date} onChange={onChange} />

      {!isCompact && (
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          rows={4}
          className={textAreaClass}
          placeholder="Mesaj (opsiyonel)"
        />
      )}

      <Button type="submit" disabled={loading}>
        {loading ? "Gönderiliyor..." : "Gönder"}
      </Button>
    </form>
  );
}
