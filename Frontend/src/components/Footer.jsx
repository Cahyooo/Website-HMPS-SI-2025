import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',          label: 'Beranda' },
  { to: '/penjurusan', label: 'Penjurusan' },
  { to: '/dosen',      label: 'Dosen' },
  { to: '/anggota',    label: 'HMPS' },
  { to: '/tentang',    label: 'Tentang' },
]

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const IconYoutube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 px-6 md:px-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Maps Section - Span 2 Columns on Large Screens */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-cyan text-[11px] font-bold tracking-[2px] uppercase">Lokasi Kami</h4>
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64 w-full shadow-2xl">
              <iframe
                title="Lokasi Universitas Internasional Batam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.056687477547!2d104.00046797496533!3d1.119543098869727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98be09646b351%3A0x36a826082690c786!2sBatam%20International%20University!5e0!3m2!1sen!2sid!4v1778136999447!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-2">
              <p className="text-white font-medium text-sm">Universitas Internasional Batam</p>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Jl. Gajah Mada, Baloi Permai, Kec. Batam Kota, Kota Batam, Kepulauan Riau 29442
              </p>
            </div>
          </div>

          {/* Internal Link */}
          <div className="lg:pl-8">
            <h4 className="text-cyan text-[11px] font-bold tracking-[2px] uppercase mb-6">Navigasi</h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ to, label }) => (
                <Link key={to} to={to}
                  className="text-slate-400 text-sm hover:text-white transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-[1px] bg-cyan mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100"></span>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Sosmed & Kontak */}
          <div>
            <h4 className="text-cyan text-[11px] font-bold tracking-[2px] uppercase mb-6">Sosial Media</h4>
            <div className="flex flex-col gap-4 mb-8">
              <a href="https://www.instagram.com/sisteminformasiuib"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-pink-500/20 flex items-center justify-center transition-all text-pink-400 border border-white/5">
                  <IconInstagram />
                </span>
                Sistem Informasi UIB
              </a>
              <a href="https://www.instagram.com/cc.uib"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-pink-500/20 flex items-center justify-center transition-all text-pink-400 border border-white/5">
                  <IconInstagram />
                </span>
                CC UIB
              </a>
              <a href="https://www.youtube.com/@sisteminformasiuib6911"
                target="_blank" rel="noreferrer"
                className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors group">
                <span className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-red-500/20 flex items-center justify-center transition-all text-red-400 border border-white/5">
                  <IconYoutube />
                </span>
                Sistem Informasi UIB
              </a>
            </div>

            <h4 className="text-cyan text-[11px] font-bold tracking-[2px] uppercase mb-6">Hubungi Kami</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hmps.sisteminformasi.uib@gmail.com"
                className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                <span className="opacity-70">✉️</span> hmps.sisteminformasi.uib@gmail.com
              </a>
              <a href="https://uib.ac.id" target="_blank" rel="noreferrer"
                className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2">
                <span className="opacity-70">🌐</span> uib.ac.id
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-white/20 text-[11px] tracking-wider uppercase">© 2025 HMPS Sistem Informasi UIB.</span>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-[11px] tracking-wider uppercase underline underline-offset-4 decoration-white/10">Universitas Internasional Batam</span>
          </div>
        </div>
      </div>
    </footer>
  )
}