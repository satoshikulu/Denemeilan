const NEIGHBORHOODS = [
  "ACIKUYU MAHALLESİ",
  "ALPARSLAN MAHALLESİ",
  "ALTILAR MAHALLESİ",
  "ARŞINCI MAHALLESİ",
  "BAHADIRLI MAHALLESİ",
  "BEŞKARDEŞ MAHALLESİ",
  "BOZAN MAHALLESİ",
  "BURUNAĞIL MAHALLESİ",
  "CAMİKEBİR MAHALLESİ",
  "CANIMANA MAHALLESİ",
  "CELEP MAHALLESİ",
  "CUMHURİYET MAHALLESİ",
  "DEĞİRMENÖZÜ MAHALLESİ",
  "DİNEK MAHALLESİ",
  "DİPDEDE MAHALLESİ",
  "DOĞUTEPE MAHALLESİ",
  "FATİH SULTAN MEHMET MAHALLESİ",
  "FEVZİYE MAHALLESİ",
  "GÖKLER MAHALLESİ",
  "GÜZELYAYLA MAHALLESİ",
  "HİSARKÖY MAHALLESİ",
  "KARACADAĞ MAHALLESİ",
  "KARACADERE MAHALLESİ",
  "KARAPINAR MAHALLESİ",
  "KARŞIYAKA MAHALLESİ",
  "KEMALİYE MAHALLESİ",
  "KIRKKUYU MAHALLESİ",
  "KIRKPINAR MAHALLESİ",
  "KOZANLI MAHALLESİ",
  "KÖMÜŞİNİ MAHALLESİ",
  "KÖSTENGİL MAHALLESİ",
  "KÖŞKER MAHALLESİ",
  "MANDIRA MAHALLESİ",
  "ÖMERANLI MAHALLESİ",
  "SARIYAYLA MAHALLESİ",
  "SEYİTAHMETLİ MAHALLESİ",
  "SOĞUKKUYU MAHALLESİ",
  "ŞEREFLİ MAHALLESİ",
  "TAVLIÖREN MAHALLESİ",
  "TUZYAKA MAHALLESİ",
  "YARAŞLI MAHALLESİ",
  "YAZIÇAYIR MAHALLESİ",
  "YENİ MAHALLESİ",
  "YEŞİLTEPE MAHALLESİ",
  "YEŞİLYURT MAHALLESİ",
  "ZİNCİRLİKUYU MAHALLESİ"
];

// Seed example listings on first load
(function seedIfEmpty() {
  const seeded = storage.get('ki_seeded', false);
  if (seeded) return;
  const exampleListings = [
    {
      id: generateId('ilan'),
      title: 'Merkezde 3+1 geniş daire',
      price: 1250000,
      type: 'satilik',
      category: 'daire',
      rooms: '3+1',
      area: 120,
      neighborhood: 'CUMHURİYET MAHALLESİ',
      description: 'Okullara ve pazara yakın, bakımlı daire.',
      image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f?q=80&w=2070&auto=format&fit=crop',
      approved: true,
      ownerPhone: '5000000000',
      createdAt: Date.now()
    },
    {
      id: generateId('ilan'),
      title: 'Kiralık 2+1 yeni bina',
      price: 9500,
      type: 'kiralik',
      category: 'daire',
      rooms: '2+1',
      area: 90,
      neighborhood: 'ALPARSLAN MAHALLESİ',
      description: 'Asansörlü, otoparklı, merkezi konum.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
      approved: true,
      ownerPhone: '5000000001',
      createdAt: Date.now()
    },
    {
      id: generateId('ilan'),
      title: 'Satılık müstakil ev',
      price: 2950000,
      type: 'satilik',
      category: 'müstakil',
      rooms: '4+1',
      area: 180,
      neighborhood: 'KARŞIYAKA MAHALLESİ',
      description: 'Bahçeli, ferah, yatırımlık müstakil ev.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2069&auto=format&fit=crop',
      approved: true,
      ownerPhone: '5000000002',
      createdAt: Date.now()
    }
  ];
  storage.set('ki_listings', exampleListings);
  storage.set('ki_users', []);
  storage.set('ki_seeded', true);
})();