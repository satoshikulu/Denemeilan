# Kulu İlan — Kulu Emlak Pazarı

Basit, anlaşılır ve mobil odaklı statik web uygulaması. Demo amaçlı yerel depolama (LocalStorage) ile çalışır; gerçek sistem için Supabase ile kimlik ve veri katmanı eklenebilir.

## Özellikler
- Telefon + Ad Soyad ile üyelik başvurusu (admin onaylı)
- Onaylı kullanıcılar ilan oluşturabilir; ilanlar admin onayına düşer
- İlan listesi, filtreleme ve ilan detay sayfası
- PWA (manifest + service worker) — Kolayca APK/IPA dönüştürmeye uygun

## Geliştirme
Statik dosyalar `index.html` ile doğrudan açılabilir. Bir HTTP sunucu ile servis etmek daha sağlıklıdır.

Netlify deploy için kök dizini seçmek yeterli.

## Admin Demo
- Admin şifresi: `1234`

## Not
Bu demo sürümde veriler tarayıcı LocalStorage'ında tutulur ve sadece aynı tarayıcıda görünür. Backend eklemek için Supabase tablo şemaları ekleyin ve `assets/js/` altındaki modülleri API çağrılarına uyarlayın.