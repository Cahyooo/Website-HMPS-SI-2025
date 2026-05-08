import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader, Spinner, ErrorBox, SkeletonGrid } from '../components/ui'
import useFetch from '../hooks/useFetch'
import { lecturerApi } from '../services/api'

// Helper: 2 huruf pertama dari nama
const initials = (name = '') =>
  name.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

// ─────────────────────────────────────────────────────────────────
//  Halaman Daftar Dosen
// ─────────────────────────────────────────────────────────────────
export default function Dosen() {
  const [selected, setSelected] = useState(null)
  const [search,   setSearch]   = useState('')

  const { data, loading, error, refetch } = useFetch(lecturerApi.getAll)

  if (selected) {
    return <DosenDetail dosen={selected} onBack={() => setSelected(null)} />
  }

  const filtered = (data || []).filter((d) =>
    (d.full_name      || '').toLowerCase().includes(search.toLowerCase()) ||
    (d.research_focus || '').toLowerCase().includes(search.toLowerCase()) ||
    (d.education      || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="animate-fadeUp">
      <PageHeader
        title="Profil Dosen"
        subtitle="Kenali para dosen berpengalaman Program Studi Sistem Informasi UIB"
      />

      <div className="py-12 px-6 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto">

          {/* Search */}
          <div className="max-w-sm mx-auto mb-8">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama, bidang riset, atau pendidikan..."
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl text-sm outline-none focus:border-cyan transition-colors"
            />
          </div>

          {/* Loading */}
          {loading && <SkeletonGrid count={8} imgClass="h-48" />}

          {/* Error */}
          {error && <ErrorBox message={error} onRetry={refetch} />}

          {/* Grid */}
          {!loading && !error && (
            filtered.length === 0
              ? (
                <div className="text-center py-16">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-slate-400 text-sm">Tidak ada dosen yang ditemukan.</p>
                </div>
              )
              : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {filtered.map((d) => (
                    <DosenCard key={d.id} dosen={d} onClick={() => setSelected(d)} />
                  ))}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────
//  Card Dosen
// ─────────────────────────────────────────────────────────────────
function DosenCard({ dosen: d, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-sm card-lift text-left w-full"
    >
      {/* Foto */}
      <div className="h-48 bg-gradient-to-br from-navy to-navy-3 flex items-center justify-center overflow-hidden">
        {d.photo_url
          ? (
            <img
              src={d.photo_url}
              alt={d.full_name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement.innerHTML =
                  `<span class="text-white text-4xl font-extrabold">${initials(d.full_name)}</span>`
              }}
            />
          )
          : (
            <span className="text-white text-4xl font-extrabold">
              {initials(d.full_name)}
            </span>
          )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-navy font-bold text-sm mb-1 leading-snug">{d.full_name || '-'}</h3>
        {d.research_focus && (
          <p className="text-cyan font-semibold text-xs mb-1 line-clamp-1">{d.research_focus}</p>
        )}
        {d.education && (
          <p className="text-slate-400 text-xs line-clamp-1">{d.education}</p>
        )}
      </div>
    </button>
  )
}

// ─────────────────────────────────────────────────────────────────
//  Halaman Detail Dosen
// ─────────────────────────────────────────────────────────────────
function DosenDetail({ dosen: d, onBack }) {
  return (
    <div className="animate-fadeUp">

      {/* Header */}
      <div className="bg-gradient-to-br from-navy to-navy-3 py-14 px-6">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-white/80 border border-white/25 px-4 py-2 rounded-lg text-sm mb-6 hover:bg-white/10 transition-colors"
          >
            ← Kembali ke Dosen
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">

            {/* Header card */}
            <div className="bg-gradient-to-br from-navy to-navy-3 p-8 flex flex-wrap gap-6 items-center">
              <div className="w-24 h-24 rounded-full border-[3px] border-white/30 overflow-hidden bg-white/15 flex items-center justify-center text-white text-3xl font-extrabold flex-shrink-0">
                {d.photo_url
                  ? (
                    <img
                      src={d.photo_url}
                      alt={d.full_name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.parentElement.innerHTML =
                          `<span class="text-white text-2xl font-extrabold">${initials(d.full_name)}</span>`
                      }}
                    />
                  )
                  : initials(d.full_name)}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white text-xl font-extrabold mb-1 leading-snug">
                  {d.full_name || '-'}
                </h2>
                {d.research_focus && (
                  <p className="text-cyan-2 font-semibold text-sm">{d.research_focus}</p>
                )}
              </div>
            </div>

            {/* Info grid */}
            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoItem label="NIDN"           value={d.nidn} />
              <InfoItem label="Email"          value={d.email} />
              <InfoItem label="Pendidikan"     value={d.education} />
              <InfoItem label="Bidang Riset"   value={d.research_focus} />
              {d.phone_number && (
                <InfoItem label="No. Telepon"  value={d.phone_number} />
              )}
              {d.address && (
                <InfoItem label="Alamat" value={d.address} fullWidth />
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

function InfoItem({ label, value, fullWidth = false }) {
  if (!value) return null
  return (
    <div className={`bg-slate-50 rounded-xl p-4 ${fullWidth ? 'sm:col-span-2' : ''}`}>
      <label className="text-[10px] text-slate-400 font-bold tracking-widest uppercase block mb-1">
        {label}
      </label>
      <span className="text-navy font-semibold text-sm">{value}</span>
    </div>
  )
}