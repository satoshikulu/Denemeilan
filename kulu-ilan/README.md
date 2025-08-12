# Kulu İlan • Kulu Emlak Pazarı

- Frontend: `frontend/` (React + Vite + Tailwind). Netlify’ye deploy.
- Backend: `server/` (Express). Render’a deploy.
- Veritabanı: Supabase (SQL tabloları `server/README.md`).

## Geliştirme

- Frontend
  - `cd frontend && npm i`
  - `npm run dev`
- Backend
  - `cd server && cp .env.example .env` ve Supabase değişkenlerini doldur
  - `npm i && npm start`

## Önemli Akışlar
- Kayıt: Telefon + Ad Soyad -> `/register` API -> `users.is_approved=false`
- İlan: Form -> `/listings` API -> `listings.is_approved=false`
- Admin: Manuel onay -> yayın (frontend’de `/admin` sayfası maket)

## Deploy
- Netlify: `frontend` klasöründen deploy, build: `npm run build`, publish: `dist/`
- Render: `server` klasöründen Web Service, Start: `node src/index.js`
- Supabase: `server/README.md` içindeki SQL’i çalıştır

## PWA / Mobil
- Frontend Vite PWA eklentisi eklenebilir. Alternatif: Capacitor ile APK/IPA üretilebilir.