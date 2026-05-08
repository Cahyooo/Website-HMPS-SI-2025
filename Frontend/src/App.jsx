import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar           from './components/Navbar'
import Footer           from './components/Footer'
import Home             from './pages/Home'
import Penjurusan       from './pages/Penjurusan'
import PenjurusanDetail from './pages/PenjurusanDetail'
import Dosen            from './pages/Dosen'
import Anggota          from './pages/Anggota'
import Tentang          from './pages/Tentang'

// Scroll ke atas setiap kali route berubah
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="font-sans bg-white text-slate-800 overflow-x-hidden min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="pt-[68px] flex-1">
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/penjurusan"     element={<Penjurusan />} />
          <Route path="/penjurusan/:id" element={<PenjurusanDetail />} />
          <Route path="/dosen"          element={<Dosen />} />
          <Route path="/anggota"        element={<Anggota />} />
          <Route path="/tentang"        element={<Tentang />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}