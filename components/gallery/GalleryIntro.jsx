import { Award, Camera, CheckCircle2 } from "lucide-react";

export default function GalleryIntro() {
  const highlights = [
    {
      icon: Camera,
      text: "15,000+ tamamlanmış işlem",
    },
    {
      icon: Award,
      text: "Profesyonel ekipman",
    },
    {
      icon: CheckCircle2,
      text: "Garanti belgeli hizmet",
    },
  ];

  return (
    <div className="rounded-[var(--radius-md)] border border-white/10 bg-gradient-to-br from-accent/5 to-transparent p-6 ring-1 ring-white/10 md:p-8">
      <h2 className="font-[var(--font-heading)] text-2xl md:text-3xl">
        İşlerimizden Örnekler
      </h2>
      <p className="mt-3 max-w-3xl text-sm text-white/80 md:text-base">
        Boyasız göçük onarımı, kaporta & boya, far temizliği ve daha fazlası.
        Her işlemde öncesi/sonrası fotoğraflarla şeffaf hizmet sunuyoruz.
        Aşağıdaki kategorilerden işlemlerimizi inceleyebilirsiniz.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        {highlights.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-semibold text-white/90"
          >
            <item.icon className="size-4 text-accent" />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
