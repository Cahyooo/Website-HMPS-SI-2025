import { useParams, Navigate } from 'react-router-dom'
import { BackButton, Spinner, ErrorBox } from '../components/ui'
import useFetch from '../hooks/useFetch'
import { specializationApi } from '../services/api'

const ICON_MAP = { DI: '🤖', MC: '📱', EC: '🎮', IM: '📡' }
const IMG_MAP  = {
  DI: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  MC: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  EC: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80',
  IM: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
}

export default function PenjurusanDetail() {
  const { id } = useParams()
  const { data: s, loading, error, refetch } = useFetch(
    () => specializationApi.getById(id),
    [id]
  )

  return (
    <div className="animate-fadeUp">
      {/* Header */}
      <div className="bg-gradient-to-br from-navy to-navy-3 py-14 px-6">
        <div className="max-w-4xl mx-auto">
          <BackButton to="/penjurusan" label="Kembali ke Penjurusan" />
        </div>
      </div>

      <div className="py-12 px-6 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto">

          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 rounded-full border-[3px] border-cyan/20 border-t-cyan animate-spin" />
            </div>
          )}

          {error && <ErrorBox message={error} onRetry={refetch} />}

          {s && (
            <div className="space-y-5">

              {/* Hero */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-navy to-navy-3 p-10">
                <img
                  src={IMG_MAP[s.code] ?? ''}
                  alt={s.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-15"
                />
                <div className="relative z-10">
                  <span className="text-5xl mb-4 block">
                    {ICON_MAP[s.code] ?? '📚'}
                  </span>
                  {/* Badge kode */}
                  <span className="bg-cyan text-navy text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
                    {s.code}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-3">
                    {s.name}
                  </h1>
                  <p className="text-white/80 text-base leading-relaxed max-w-xl">
                    {s.description || 'Deskripsi belum tersedia.'}
                  </p>
                </div>
              </div>

              {/* Info tambahan — kosongkan dulu,
                  bisa ditambah field baru di model Specialization
                  misal: karir, tools, mata_kuliah, dsb. */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-cyan text-xs font-bold tracking-[2px] uppercase mb-3">
                  Tentang Peminatan
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {s.description || 'Deskripsi peminatan belum tersedia.'}
                </p>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  )
}