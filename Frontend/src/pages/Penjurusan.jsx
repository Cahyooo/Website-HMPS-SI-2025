import { Link } from 'react-router-dom'
import { PageHeader, Spinner, ErrorBox } from '../components/ui'
import useFetch from '../hooks/useFetch'
import { specializationApi } from '../services/api'

// Icon map berdasarkan code dari seeder
const ICON_MAP = {
  DI: '🤖',
  MC: '📱',
  EC: '🎮',
  IM: '📡',
}

// Gambar default per kode penjurusan
const IMG_MAP = {
  DI: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  MC: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  EC: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80',
  IM: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
}

export default function Penjurusan() {
  const { data, loading, error, refetch } = useFetch(specializationApi.getAll)

  return (
    <div className="animate-fadeUp">
      <PageHeader
        title="Penjurusan"
        subtitle="4 peminatan unggulan Program Studi Sistem Informasi UIB"
      />

      <div className="py-14 px-6 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto">

          {loading && (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 rounded-full border-[3px] border-cyan/20 border-t-cyan animate-spin" />
            </div>
          )}

          {error && <ErrorBox message={error} onRetry={refetch} />}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(data || []).map((s) => (
                <Link
                  key={s.id}
                  to={`/penjurusan/${s.code}`}
                  className="rounded-2xl overflow-hidden shadow-md card-lift block"
                >
                  <img
                    src={IMG_MAP[s.code] ?? 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'}
                    alt={s.name}
                    className="w-full h-52 object-cover"
                    loading="lazy"
                  />
                  <div className="bg-gradient-to-br from-navy to-navy-2 p-5">
                    <h3 className="text-white font-bold text-base mb-2">
                      {ICON_MAP[s.code] ?? '📚'} {s.name}
                    </h3>
                    <p className="text-cyan-2 text-xs leading-relaxed line-clamp-2">
                      {s.description || '-'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}