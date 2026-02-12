import { NextResponse } from "next/server";
import { getAdminDb } from "@/lib/firebaseAdmin";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-dynamic";

function unauthorized() {
  return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
}

export async function POST(req) {
  const secret = process.env.SEED_SECRET;
  if (!secret) {
    return NextResponse.json(
      {
        ok: false,
        error: "missing_seed_secret",
        hint: "Add SEED_SECRET to .env.local",
      },
      { status: 500 }
    );
  }

  const header = req.headers.get("x-seed-secret") || "";
  if (header !== secret) return unauthorized();

  const db = getAdminDb();

  // 1) settings/site
  await db
    .collection("settings")
    .doc("site")
    .set(
      {
        name: siteConfig.name,
        shortName: siteConfig.shortName,
        foundedYear: siteConfig.foundedYear,
        city: siteConfig.city,
        phoneDisplay: siteConfig.phoneDisplay,
        phoneTel: siteConfig.phoneTel,
        faxDisplay: siteConfig.faxDisplay,
        faxTel: siteConfig.faxTel,
        email: siteConfig.email,
        address: siteConfig.address,
        mapsUrl: siteConfig.mapsUrl,
        workingHours: siteConfig.workingHours,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );

  // 2) services/{slug}
  const services = [
    {
      slug: "boyasiz-gocuk",
      title: "Boyasız Göçük Onarımı",
      shortDesc: "Dolu hasarı ve kapı vuruklarında hızlı, temiz işçilik.",
      image: "/images/images1.jpg",
      content:
        "Boyasız göçük onarımı, boya çatlağı olmayan göçüklerde orijinal boyayı koruyarak düzeltme işlemidir. Hasar tipine göre uygun teknikle hızlı ve temiz sonuç hedeflenir.",
    },
    {
      slug: "periyodik-bakim",
      title: "Periyodik Bakım",
      shortDesc: "Araç sağlığını koruyan bakım ve kontrol planı.",
      image: "/images/images2.jpg",
      content:
        "Periyodik bakım; yağ/filtre değişimi, sıvı kontrolleri ve güvenlik kontrolleri gibi işlemleri kapsar. Aracınızın kullanımına göre doğru bakım aralığını planlarız.",
    },
    {
      slug: "mekanik-onarim",
      title: "Mekanik Onarım",
      shortDesc: "Arıza tespiti, tamir ve güvenli sürüş için çözüm.",
      image: "/images/images3.jpg",
      content:
        "Arıza tespiti ve mekanik onarımda amaç; doğru teşhis, güvenli çözüm ve net bilgilendirmedir. İşlem öncesi kapsam ve süre konusunda bilgilendirme yapılır.",
    },
  ];

  const batch = db.batch();
  for (const s of services) {
    const ref = db.collection("services").doc(s.slug);
    batch.set(
      ref,
      {
        slug: s.slug,
        title: s.title,
        shortDesc: s.shortDesc,
        image: s.image,
        content: s.content,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
  }
  await batch.commit();

  return NextResponse.json({ ok: true, seeded: true });
}
