import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/',           label: 'Beranda' },
  { to: '/penjurusan', label: 'Penjurusan' },
  { to: '/dosen',      label: 'Dosen' },
  { to: '/anggota',    label: 'Anggota' },
  { to: '/tentang',    label: 'Tentang' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-50 h-[68px] flex items-center px-6 md:px-10
        bg-navy transition-shadow ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.35)]' : ''}`}>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 mr-auto">
          <img
            src="/images/logo.webp"
            alt="SI UIB"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.outerHTML = `<div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#fff,#cce8f4);display:flex;align-items:center;justify-content:center;font-weight:800;color:#0d2240;font-size:14px;flex-shrink:0;">SI</div>`
            }}
          />
          <div>
            <p className="text-white font-bold text-sm leading-tight">Sistem Informasi</p>
            <p className="text-cyan-2 text-[10px] tracking-widest">UIB · BATAM</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex gap-1">
          {NAV_ITEMS.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors
                ${isActive(to) ? 'bg-white/10 text-white' : 'text-sky-100 hover:text-white hover:bg-white/10'}`}>
              {label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(v => !v)}
          className="md:hidden text-white text-2xl ml-4 leading-none">
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-[68px] inset-x-0 z-40 bg-navy border-t border-white/10 px-6 py-4">
          {NAV_ITEMS.map(({ to, label }) => (
            <Link key={to} to={to}
              className={`block px-4 py-3 rounded-xl text-sm font-medium mb-1 transition-colors
                ${isActive(to) ? 'bg-white/10 text-white' : 'text-sky-100 hover:bg-white/10 hover:text-white'}`}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}