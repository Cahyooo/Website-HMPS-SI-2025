import { PageHeader } from '../components/ui'
import { ANGGOTA_INTI, DIVISI } from '../data/staticData'

const initials = (nama = '') =>
  nama.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

const isSpotlight = (jabatan = '') =>
  ['ketua', 'wakil'].some((k) => jabatan.toLowerCase().includes(k))

export default function Anggota() {
  const spotlight = ANGGOTA_INTI.filter((m) => isSpotlight(m.jabatan))
  const staff     = ANGGOTA_INTI.filter((m) => !isSpotlight(m.jabatan))

  return (
    <div className="animate-fadeUp">
      <PageHeader
        title="Profil Anggota"
        subtitle="Kepengurusan HMPS Sistem Informasi UIB · Periode 2025/2026"
      />

      <div className="py-14 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">

          {/* ── Pengurus Inti ── */}
          <SectionLabel>Pengurus Inti</SectionLabel>

          {/* Ketua & Wakil — card besar dengan foto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {spotlight.map((m) => (
              <SpotlightCard key={m.nama} member={m} />
            ))}
          </div>

          {/* Sekretaris & Bendahara — card kecil tanpa foto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {staff.map((m) => (
              <StaffCard key={m.nama} member={m} />
            ))}
          </div>

          {/* ── Divisi ── */}
          <SectionLabel>Divisi Kepengurusan</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {DIVISI.map((d) => (
              <DivisiCard key={d.nama} divisi={d} />
            ))}
          </div>

          

        </div>
      </div>
    </div>
  )
}

// ── Spotlight Card — Ketua & Wakil (dengan foto) ──────────────────
function SpotlightCard({ member: m }) {
  return (
    <div className="bg-gradient-to-br from-navy to-navy-3 rounded-2xl overflow-hidden shadow-lg h-96"> {/* 1. Beri tinggi kartu penuh */}
      {/* Kontainer Foto Penuh */}
      <div className="relative h-full overflow-hidden bg-navy-2">
        {m.foto_url ? (
          <img
            src={m.foto_url}
            alt={m.nama}
            className="w-full h-full object-cover" // object-cover agar penuh, object-top untuk fokus kepala
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              e.currentTarget.nextElementSibling.style.display = 'flex'
            }}
          />
        ) : null}
        
        {/* Fallback inisial jika foto tidak ada (pindah ke dalam kontainer relative) */}
        <div
          className="absolute inset-0 items-center justify-center"
          style={{ display: m.foto_url ? 'none' : 'flex' }}
        >
          <span className="text-7xl font-extrabold text-white/20">
            {initials(m.nama)}
          </span>
        </div>

        {/* 2. Gradient Overlay di Bagian Bawah untuk Teks (Penting!) */}
        {/* Kita butuh gradient yang lebih pekat di bawah agar teks putih terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-4/90 to-transparent" />

        {/* 3. Pindahkan Info Profil ke Sini (absolute bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10"> {/* z-10 agar di atas gradient */}
          <span className="inline-block bg-cyan text-navy text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
            {m.jabatan}
          </span>
          <h2 className="text-white text-2xl font-extrabold mb-1 leading-snug">{m.nama}</h2>
          <p className="text-slate-200 text-xs mb-1">NPM: {m.npm}</p>
        </div>
      </div>
    </div>
  )
}

// ── Staff Card — Sekretaris & Bendahara (tanpa foto, avatar inisial) ──
function StaffCard({ member: m }) {
  // Warna avatar berbeda per jabatan
  const avatarColor = m.jabatan.toLowerCase().includes('sekretaris')
    ? 'from-violet-600 to-navy-3'
    : 'from-emerald-600 to-navy-3'

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 flex gap-4 items-center">
      {/* Avatar inisial */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${avatarColor} flex items-center justify-center flex-shrink-0`}>
        <span className="text-white font-extrabold text-lg">
          {initials(m.nama)}
        </span>
      </div>

      {/* Info */}
      <div>
        <p className="text-cyan text-[10px] font-bold tracking-widest uppercase mb-1">
          {m.jabatan}
        </p>
        <h3 className="text-navy font-bold text-sm mb-0.5 leading-snug">{m.nama}</h3>
        <p className="text-slate-400 text-xs">NPM: {m.npm}</p>
      </div>
    </div>
  )
}

// ── Divisi Card — 2 kolom kiri-kanan ──────────────────────────────
function DivisiCard({ divisi: d }) {
  const half  = Math.ceil(d.anggota.length / 2)
  const left  = d.anggota.slice(0, half)
  const right = d.anggota.slice(half)

  return (
    <div
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm"
      style={{ borderLeft: `4px solid ${d.warna}` }}
    >
      <div className="flex flex-col items-start gap-1 mb-4">
        <h3 className="text-navy font-bold text-sm">{d.nama}</h3>
        <span className="text-xs font-semibold" style={{ color: d.warna }}>
          Ketua: {d.ketua}
        </span>
      </div>

      {/* Anggota: 2 kolom seimbang */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
        {/* Kiri */}
        <ul className="space-y-1.5">
          {left.map((nama) => (
            <li key={nama} className="flex items-start gap-2 text-slate-600 text-xs leading-snug">
              <span className="mt-0.5 flex-shrink-0" style={{ color: d.warna }}>•</span>
              <span>{nama}</span>
            </li>
          ))}
        </ul>
        {/* Kanan */}
        <ul className="space-y-1.5">
          {right.map((nama) => (
            <li key={nama} className="flex items-start gap-2 text-slate-600 text-xs leading-snug">
              <span className="mt-0.5 flex-shrink-0" style={{ color: d.warna }}>•</span>
              <span>{nama}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <p className="text-cyan text-[11px] font-bold tracking-[2px] uppercase mb-5">{children}</p>
  )
}