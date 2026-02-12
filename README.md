# Özcan Oto Servis Web

Next.js (App Router) + Firebase (Firestore/Storage) ile geliştirilmiş kurumsal oto servis web sitesi.

## Özellikler

- **Modern UI**
  - Scroll reveal animasyonları
  - Ekibimiz bölümü (marquee, kesintisiz akış)
  - Mobil alt navigasyon
- **Firebase**
  - Firestore: site ayarları (`settings/site`) ve hizmetler (`services/{slug}`)
  - Seed endpoint’i ile başlangıç verisi yükleme
- **SEO**
  - JSON-LD (LocalBusiness)
  - `robots.js` + `sitemap.js`

## Kurulum

```bash
npm install
```

### Ortam değişkenleri

Bu projede `.env.local` kullanılır (git’e eklenmez).

Örnek şablon için: `.env.example`

## Geliştirme (Dev)

```bash
npm run dev
```

Uygulama: http://localhost:3000

## Seed (Firestore’a başlangıç verisi)

Seed, Firestore’a aşağıdakileri ekler:

- `settings/site`
- `services/{slug}`

Çalıştırma:

PowerShell:

```powershell
Invoke-RestMethod -Method Post -Uri "http://localhost:3000/api/seed" -Headers @{ "x-seed-secret" = "$env:SEED_SECRET" }
```

Not: `SEED_SECRET` ve `FIREBASE_SERVICE_ACCOUNT` `.env.local` içinde olmalıdır.

## Route’lar

- `/services` (liste)
- `/services/[slug]` (detay)
- `/gallery`
- `/contact`
- `/faq`
- `/cookie-policy`

## Üst klasörden çalıştırma

Repo’nun üst klasöründe `package.json` yönlendiricisi vardır.

Örn. `ozcanoto/` klasöründen:

```bash
npm run dev
```

Bu komutlar otomatik olarak `ozcan_oto/` içindeki projeyi çalıştırır.
