"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import DatePicker from "@/components/ui/DatePicker";

const serviceOptions = [
  "Boyasız Göçük",
  "Periyodik Bakım",
  "Mekanik Onarım",
  "Kaporta & Boya",
  "Elektrik & Elektronik",
  "Estetik (Pasta Cila / Seramik / Kuaför)",
  "Çelik Rötuş",
  "Vale Hizmeti (Aracı evden alıp teslim)",
  "Vize Hazırlığı",
];

export default function AppointmentForm({ variant = "full" }) {
  const initial = useMemo(
    () => ({ name: "", email: "", phone: "", service: "", date: "", message: "" }),
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
    if (!form.email.trim()) return toast.error("Lütfen e-posta adresinizi yazın.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return toast.error("Lütfen geçerli bir e-posta adresi yazın.");
    }
    if (!form.phone.trim()) return toast.error("Lütfen telefon numaranızı yazın.");
    if (!form.service.trim()) return toast.error("Lütfen hizmet seçin.");
    if (!form.date.trim()) return toast.error("Lütfen tarih seçin.");

    setLoading(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service.trim(),
        date: form.date,
        message: form.message.trim(),
      };

      const r = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!r.ok) {
        let msg = "Gönderim başarısız. Lütfen tekrar deneyin.";
        try {
          const data = await r.json();
          if (data?.error === "missing_fields") {
            msg = "Lütfen tüm zorunlu alanları doldurun.";
          }
          if (data?.error === "server_error") {
            msg = "Sunucu hatası. Lütfen biraz sonra tekrar deneyin.";
          }
        } catch {
          // ignore
        }
        return toast.error(msg);
      }

      try {
        const data = await r.json();
        if (data?.emailSent === false) {
          toast.message(
            "Randevu kaydı alındı; şirkete bildirim maili gönderilemedi."
          );
        }

        if (data?.userEmailSent === false) {
          toast.message(
            "Randevu kaydı alındı; size bilgilendirme maili gönderilemedi."
          );
        }
      } catch {
        // ignore
      }

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
        name="email"
        value={form.email}
        onChange={onChange}
        className={inputClass}
        placeholder="E-posta"
        inputMode="email"
        autoComplete="email"
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
