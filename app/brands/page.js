import Container from "@/components/ui/Container";

export const metadata = {
  title: "Markalar",
  description:
    "Özcan Oto Servis olarak hizmet verdiğimiz otomobil markalarından bazıları.",
};

const brands = [
  {
    src: "https://www.ozcanoto.com.tr/uploads/referans/large/MTY3ZDA5ZDBkZTI4YzE.png",
    alt: "Mercedes-Benz",
  },
  {
    src: "https://www.ozcanoto.com.tr/uploads/referans/large/MTY3ZDA5ZDQ0YmRkODE.png",
    alt: "Opel",
  },
  {
    src: "https://www.ozcanoto.com.tr/uploads/referans/large/MTY3ZDA5ZDU5M2IwM2Y.png",
    alt: "Volkswagen",
  },
  {
    src: "https://www.ozcanoto.com.tr/uploads/referans/large/MTY3ZDA5Y2ZmNTExYmY.png",
    alt: "Nissan",
  },
  {
    src: "https://www.ozcanoto.com.tr/uploads/referans/large/MTY3ZDA5ZDFmNTk5NGI.png",
    alt: "Renault",
  },
  {
    src: "https://www.ozcanoto.com.tr/uploads/referans/large/MTY3ZDA5Y2YxY2ZmYzc.png",
    alt: "Dacia",
  },
];

export default function BrandsPage() {
  return (
    <div>
      <Container className="py-10 md:py-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
            Markalar
          </div>
          <h1 className="mt-4 font-[var(--font-heading)] text-3xl md:text-5xl">
            Hizmet verdiğimiz markalar
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
            Aşağıdaki logolar, servisimizde sık karşılaştığımız markalardan
            bazılarını gösterir.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <div
              key={b.src}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 shadow-[var(--shadow-soft)] ring-1 ring-white/10"
            >
              <div className="grid aspect-[16/9] place-items-center rounded-lg bg-black">
                <img
                  src={b.src}
                  alt={b.alt}
                  loading="lazy"
                  className="max-h-[92px] w-auto transition-transform duration-700 ease-out group-hover:rotate-[360deg]"
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
