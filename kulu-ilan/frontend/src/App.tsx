import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white font-bold">Kİ</span>
          <div className="leading-tight">
            <div className="font-semibold">Kulu İlan</div>
            <div className="text-xs text-gray-500">Kulu Emlak Pazarı</div>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/listings" className="px-3 py-2 text-sm rounded-md hover:bg-gray-100">İlanlara Bak</Link>
          <Link to="/auth" className="px-3 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">Giriş Yap / Üye Ol</Link>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
          alt="Modern ev"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-24 text-white">
        <h1 className="text-4xl md:text-5xl font-bold max-w-2xl">Kulu'da emlak alım-satım ve kiralama için en basit yol</h1>
        <p className="mt-4 max-w-xl text-white/90">Yalnızca telefon numarası ve ad-soyad ile kaydol. İlanların yayın öncesi admin onayından geçer.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/post?type=sale" className="px-5 py-3 rounded-md bg-white text-gray-900 hover:bg-gray-100">Satmak istiyorum</Link>
          <Link to="/post?type=rent" className="px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-700">Kiralamak istiyorum</Link>
          <Link to="/listings" className="px-5 py-3 rounded-md bg-white/10 ring-1 ring-white/30 hover:bg-white/20">İlanlara Bak</Link>
        </div>
      </div>
    </section>
  )
}

const mahalleler = [
  'ACIKUYU MAHALLESİ','ALPARSLAN MAHALLESİ','ALTILAR MAHALLESİ','ARŞINCI MAHALLESİ','BAHADIRLI MAHALLESİ','BEŞKARDEŞ MAHALLESİ','BOZAN MAHALLESİ','BURUNAĞIL MAHALLESİ','CAMİKEBİR MAHALLESİ','CANIMANA MAHALLESİ','CELEP MAHALLESİ','CUMHURİYET MAHALLESİ','DEĞİRMENÖZÜ MAHALLESİ','DİNEK MAHALLESİ','DİPDEDE MAHALLESİ','DOĞUTEPE MAHALLESİ','FATİH SULTAN MEHMET MAHALLESİ','FEVZİYE MAHALLESİ','GÖKLER MAHALLESİ','GÜZELYAYLA MAHALLESİ','HİSARKÖY MAHALLESİ','KARACADAĞ MAHALLESİ','KARACADERE MAHALLESİ','KARAPINAR MAHALLESİ','KARŞIYAKA MAHALLESİ','KEMALİYE MAHALLESİ','KIRKKUYU MAHALLESİ','KIRKPINAR MAHALLESİ','KOZANLI MAHALLESİ','KÖMÜŞİNİ MAHALLESİ','KÖSTENGİL MAHALLESİ','KÖŞKER MAHALLESİ','MANDIRA MAHALLESİ','ÖMERANLI MAHALLESİ','SARIYAYLA MAHALLESİ','SEYİTAHMETLİ MAHALLESİ','SOĞUKKUYU MAHALLESİ','ŞEREFLİ MAHALLESİ','TAVLIÖREN MAHALLESİ','TUZYAKA MAHALLESİ','YARAŞLI MAHALLESİ','YAZIÇAYIR MAHALLESİ','YENİ MAHALLESİ','YEŞİLTEPE MAHALLESİ','YEŞİLYURT MAHALLESİ','ZİNCİRLİKUYU MAHALLESİ'
]

function Home() {
  return (
    <main>
      <Hero />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Mahalleler</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {mahalleler.map((m) => (
            <Link key={m} to={`/listings?district=${encodeURIComponent(m)}`} className="px-3 py-2 text-sm rounded-md bg-white border hover:bg-gray-50 truncate">
              {m}
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-semibold mb-4">Örnek İlanlar</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map((i) => (
            <Link key={i} to={`/listing/${i}`} className="group overflow-hidden rounded-lg border bg-white">
              <div className="aspect-video relative">
                <img src={`https://images.unsplash.com/photo-15${i}6936416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop`} alt="Ev" className="h-full w-full object-cover group-hover:scale-105 transition" />
                <div className="absolute top-2 left-2 bg-white/90 text-gray-900 text-xs px-2 py-1 rounded">Satılık</div>
              </div>
              <div className="p-3">
                <div className="font-medium">3+1 Daire • 120 m²</div>
                <div className="text-sm text-gray-500">KEMALİYE MAHALLESİ</div>
                <div className="mt-1 font-semibold text-blue-700">2.250.000 ₺</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

function Auth() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('Gönderiliyor...')
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, phone })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Hata')
      setStatus('Kayıt alındı. Admin onayı bekleniyor.')
      setFullName('')
      setPhone('')
    } catch (err: any) {
      setStatus('Hata: ' + err.message)
    }
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-2">Giriş Yap / Üye Ol</h1>
      <p className="text-sm text-gray-500 mb-6">Yalnızca telefon numarası ile ad-soyad yeterli. Admin onayı sonrası ilan verebilirsiniz.</p>
      <form className="space-y-3" onSubmit={submit}>
        <input value={fullName} onChange={e=>setFullName(e.target.value)} type="text" placeholder="Ad Soyad" className="w-full px-3 py-2 rounded-md border" required />
        <input value={phone} onChange={e=>setPhone(e.target.value)} type="tel" placeholder="Telefon Numarası" className="w-full px-3 py-2 rounded-md border" required />
        <button className="w-full px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Devam Et</button>
        {status && <p className="text-xs text-gray-600">{status}</p>}
      </form>
    </div>
  )
}

function Listings() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const district = params.get('district')
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">İlanlar {district ? `- ${district}` : ''}</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <Link key={i} to={`/listing/${i+1}`} className="group overflow-hidden rounded-lg border bg-white">
            <div className="aspect-video relative">
              <img src={`https://images.unsplash.com/photo-150${i}693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop`} alt="Ev" className="h-full w-full object-cover group-hover:scale-105 transition" />
              <div className="absolute top-2 left-2 bg-white/90 text-gray-900 text-xs px-2 py-1 rounded">Kiralık</div>
            </div>
            <div className="p-3">
              <div className="font-medium">2+1 Daire • 95 m²</div>
              <div className="text-sm text-gray-500">YEŞİLTEPE MAHALLESİ</div>
              <div className="mt-1 font-semibold text-blue-700">12.000 ₺/ay</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function ListingDetail() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-6">
      <div>
        <img className="w-full rounded-lg border" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop" />
        <div className="mt-3 grid grid-cols-4 gap-2">
          {[1,2,3,4].map(i => (
            <img key={i} className="w-full h-24 object-cover rounded-md border" src={`https://images.unsplash.com/photo-16${i}690511511-59fe7b093d82?q=80&w=400&auto=format&fit=crop`} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold">3+1 Daire • 120 m² • Satılık</h1>
        <div className="text-gray-500">KEMALİYE MAHALLESİ</div>
        <div className="mt-2 text-2xl font-bold text-blue-700">2.250.000 ₺</div>
        <div className="mt-4 space-y-2 text-sm">
          <div>Detay: Merkezi konum, bakımlı bina, otopark.</div>
          <div>İlan no: 12345</div>
        </div>
        <button className="mt-6 px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">İletişime Geç</button>
      </div>
    </div>
  )
}

function PostListing() {
  const location = useLocation()
  const type = new URLSearchParams(location.search).get('type') || 'sale'
  const [title, setTitle] = useState('')
  const [area, setArea] = useState('')
  const [price, setPrice] = useState('')
  const [district, setDistrict] = useState(mahalleler[0])
  const [description, setDescription] = useState('')
  const [coverUrl, setCoverUrl] = useState('')
  const [ownerPhone, setOwnerPhone] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('Gönderiliyor...')
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/listings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, area: area? Number(area): null, price: Number(price), district, description, coverUrl, type, ownerPhone })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Hata')
      setStatus('İlan alındı. Admin onayı bekleniyor.')
      setTitle(''); setArea(''); setPrice(''); setDescription(''); setCoverUrl(''); setOwnerPhone('')
    } catch (err: any) {
      setStatus('Hata: ' + err.message)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">İlan Ver {type === 'rent' ? '(Kiralık)' : '(Satılık)'}</h1>
      <p className="text-sm text-gray-500 mb-6">İlanlarınız admin onayından sonra yayınlanacaktır.</p>
      <form className="space-y-3" onSubmit={submit}>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full px-3 py-2 rounded-md border" placeholder="Başlık (ör: 3+1 Daire, 120m²)" required />
        <div className="grid grid-cols-2 gap-3">
          <input value={area} onChange={e=>setArea(e.target.value)} className="px-3 py-2 rounded-md border" placeholder="m²" />
          <input value={price} onChange={e=>setPrice(e.target.value)} className="px-3 py-2 rounded-md border" placeholder="Fiyat" required />
        </div>
        <select value={district} onChange={e=>setDistrict(e.target.value)} className="w-full px-3 py-2 rounded-md border">
          {mahalleler.map(m => <option key={m}>{m}</option>)}
        </select>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} className="w-full px-3 py-2 rounded-md border" rows={4} placeholder="Açıklama" />
        <input value={coverUrl} onChange={e=>setCoverUrl(e.target.value)} type="url" className="w-full px-3 py-2 rounded-md border" placeholder="Kapak görseli URL (Unsplash)" />
        <input value={ownerPhone} onChange={e=>setOwnerPhone(e.target.value)} type="tel" className="w-full px-3 py-2 rounded-md border" placeholder="İletişim Telefonu" />
        <button className="w-full px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">İlana Gönder (Admin Onayı)</button>
        {status && <p className="text-xs text-gray-600">{status}</p>}
      </form>
    </div>
  )
}

function Admin() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">Admin Onay Paneli</h1>
      <p className="text-sm text-gray-500 mb-6">Yeni kayıtlar ve yayın bekleyen ilanlar</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-lg p-4">
          <h2 className="font-medium mb-3">Kullanıcı Kayıtları</h2>
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <div className="font-medium">Ad Soyad {i}</div>
                <div className="text-xs text-gray-500">0(5xx) xxx xx xx</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm rounded-md bg-green-600 text-white">Onayla</button>
                <button className="px-3 py-1 text-sm rounded-md bg-red-600 text-white">Reddet</button>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border rounded-lg p-4">
          <h2 className="font-medium mb-3">İlan Onayı</h2>
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
              <div>
                <div className="font-medium">3+1 Daire • 120 m²</div>
                <div className="text-xs text-gray-500">KEMALİYE MAHALLESİ • Satılık</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm rounded-md bg-green-600 text-white">Yayınla</button>
                <button className="px-3 py-1 text-sm rounded-md bg-red-600 text-white">Sil</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listing/:id" element={<ListingDetail />} />
          <Route path="/post" element={<PostListing />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Kulu İlan • Kulu Emlak Pazarı</div>
          <div className="flex gap-4">
            <Link to="/listings">İlanlar</Link>
            <Link to="/post">İlan Ver</Link>
            <Link to="/admin">Admin</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return <Layout />
}
