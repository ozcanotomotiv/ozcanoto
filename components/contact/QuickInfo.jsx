import Card from "@/components/ui/Card";
import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function QuickInfo() {
  const info = [
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      value: "Pzt-Cmt: 08:30-19:00",
      sub: "Cumartesi: 08:30-18:00",
    },
    {
      icon: MapPin,
      title: "Adres",
      value: "Dokuzkavaklar Mh.",
      sub: "Pamukkale / Denizli",
    },
    {
      icon: Phone,
      title: "Telefon",
      value: siteConfig.phoneDisplay,
      sub: "Hızlı randevu için arayın",
    },
    {
      icon: Mail,
      title: "E-posta",
      value: siteConfig.email,
      sub: "7/24 destek",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {info.map((item) => (
        <Card
          key={item.title}
          className="!border-white/10 !bg-white/5 !text-white !ring-white/10"
        >
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-accent/10 p-2 ring-1 ring-accent/20">
              <item.icon className="size-4 text-accent" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold text-white/70">
                {item.title}
              </div>
              <div className="mt-1 text-sm font-semibold text-white">
                {item.value}
              </div>
              <div className="mt-0.5 text-xs text-white/60">{item.sub}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
