import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'
import { SectionHeader, Spinner, ErrorBox } from '../components/ui'
import { LULUSAN } from '../data/staticData'
import useFetch from '../hooks/useFetch'
import { specializationApi } from '../services/api'

// Icon & gambar fallback per kode specialization
const ICON_MAP = { DI: '🤖', MC: '📱', EC: '🎮', IM: '📡' }
const IMG_MAP  = {
  DI: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  MC: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  EC: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80',
  IM: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
}

export default function Home() {
  const { data: specializations, loading, error } = useFetch(specializationApi.getAll)

  return (
    <div className="animate-fadeUp">
      <Carousel />

      {/* ── Program ── */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">


          {/* What's New — dari API specializations */}
          <h2 className="text-center text-2xl md:text-3xl font-extrabold text-navy mb-10">
            Our Program
          </h2>

          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-8 h-8 rounded-full border-[3px] border-cyan/20 border-t-cyan animate-spin" />
            </div>
          )}

          {error && (
            <p className="text-center text-slate-400 text-sm py-6">
              Gagal memuat data penjurusan.
            </p>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(specializations || []).map((s) => (
                <Link
                  key={s.id}
                  to={`/penjurusan/${s.id}`}
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
      </section>

      {/* ── Profil Lulusan (statis) ── */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-6xl mx-auto">
          <SectionHeader title="Profil" accent="Lulusan" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {LULUSAN.map((l) => (
              <div
                key={l.judul}
                className="bg-white/[0.06] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                <img
                  src={l.img}
                  alt={l.judul}
                  className="w-full h-40 object-cover object-top"
                  loading="lazy"
                />
                <div className="p-5">
                  <h3 className="text-white font-bold text-sm mb-2">{l.judul}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{l.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}