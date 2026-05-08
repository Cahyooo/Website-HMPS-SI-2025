import { useNavigate } from 'react-router-dom'

// ─── Loading Spinner ──────────────────────────────────────────────
export function Spinner({ message = 'Memuat data...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4">
      <div className="w-10 h-10 rounded-full border-[3px] border-cyan/20 border-t-cyan animate-spin" />
      <span className="text-slate-400 text-sm">{message}</span>
    </div>
  )
}

// ─── Error Box ────────────────────────────────────────────────────
export function ErrorBox({ message, onRetry }) {
  return (
    <div className="text-center py-16 px-6">
      <div className="text-5xl mb-4">⚠️</div>
      <h3 className="text-lg font-bold text-navy mb-2">Gagal Memuat Data</h3>
      <p className="text-slate-500 text-sm mb-5">
        {message || 'Periksa koneksi atau pastikan backend sudah berjalan.'}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-navy text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-navy-3 transition-colors"
        >
          Coba Lagi
        </button>
      )}
    </div>
  )
}

// ─── Empty State ──────────────────────────────────────────────────
export function EmptyBox({ message = 'Belum ada data tersedia.' }) {
  return (
    <div className="text-center py-16 px-6">
      <div className="text-5xl mb-4">📭</div>
      <p className="text-slate-400 text-sm">{message}</p>
    </div>
  )
}

// ─── Skeleton Grid ────────────────────────────────────────────────
export function SkeletonGrid({ count = 4, imgClass = 'h-44', cols = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' }) {
  return (
    <div className={`grid ${cols} gap-5`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <div className={`skeleton ${imgClass}`} />
          <div className="p-4 flex flex-col gap-3">
            <div className="skeleton h-3 rounded w-4/5" />
            <div className="skeleton h-3 rounded w-3/5" />
            <div className="skeleton h-3 rounded w-full" />
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Page Header ──────────────────────────────────────────────────
export function PageHeader({ title, subtitle, children }) {
  return (
    <div className="bg-gradient-to-br from-navy to-navy-3 py-14 px-6 text-center">
      {children}
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-cyan-2 text-sm">{subtitle}</p>}
    </div>
  )
}

// ─── Section Header ───────────────────────────────────────────────
export function SectionHeader({ tag, title, accent, subtitle, light = false }) {
  return (
    <div className="text-center mb-12">
      {tag && <p className="text-cyan text-xs font-bold tracking-[3px] uppercase mb-3">{tag}</p>}
      <h2 className={`text-3xl md:text-4xl font-extrabold ${light ? 'text-white' : 'text-navy'}`}>
        {title} <span className="text-cyan">{accent}</span>
      </h2>
      {subtitle && <p className="text-slate-500 mt-3 text-sm">{subtitle}</p>}
    </div>
  )
}

// ─── Back Button ──────────────────────────────────────────────────
export function BackButton({ to, label = 'Kembali' }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(to)}
      className="inline-flex items-center gap-2 text-white/80 border border-white/25 px-4 py-2 rounded-lg text-sm mb-6 hover:bg-white/10 transition-colors"
    >
      ← {label}
    </button>
  )
}