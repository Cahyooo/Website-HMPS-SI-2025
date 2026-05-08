
import { SectionHeader } from '../components/ui'

export default function Tentang() {
  return (
    <div className="animate-fadeUp">

      {/* ── Hero — background foto gedung UIB ── */}
      <div className="relative w-full overflow-hidden" style={{ height: '320px' }}>
        <img
          src="/images/hero/uib.webp"
          alt="Universitas Internasional Batam"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        {/* Overlay lebih gelap supaya teks terbaca */}
        <div className="absolute inset-0 bg-navy/65" />

        {/* Teks SELALU center horizontal & vertikal */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-wider uppercase text-center drop-shadow-lg">
            Tentang Kami
          </h1>
        </div>
      </div>

      <div className="py-14 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* ── Tentang Sistem Informasi UIB ── */}
          <div>
            <SectionHeader tag="Program Studi" title="Sistem" accent="Informasi UIB" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Program Studi Sistem Informasi Universitas Internasional Batam (SI UIB) adalah program studi yang berfokus pada penguasaan teknologi informasi dan penerapannya dalam dunia bisnis. Prodi SI UIB hadir untuk mencetak lulusan yang kompeten di bidang perancangan, pengembangan, dan pengelolaan sistem informasi berbasis teknologi mutakhir.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Dengan kurikulum yang terus diperbarui mengikuti perkembangan industri, mahasiswa SI UIB dibekali kemampuan di bidang pemrograman, analisis data, desain sistem, keamanan informasi, hingga kecerdasan buatan.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  SI UIB telah meraih akreditasi <strong className="text-navy">Baik Sekali</strong> dari BAN-PT, membuktikan komitmen kami dalam menghadirkan pendidikan berkualitas tinggi di bidang teknologi informasi.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '700+', label: 'Mahasiswa Aktif' },
                  { val: '15+',  label: 'Dosen Berpengalaman' },
                  { val: '4',    label: 'Peminatan' },
                  { val: '90%',  label: 'Lulusan Terserap Kerja' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100">
                    <p className="text-3xl font-extrabold text-cyan mb-1">{s.val}</p>
                    <p className="text-slate-500 text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Tentang HMPS SI ── */}
          <div>
            <SectionHeader tag="Organisasi" title="HMPS Sistem" accent="Informasi" />
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Himpunan Mahasiswa Program Studi Sistem Informasi (HMPS SI) UIB adalah organisasi kemahasiswaan yang menjadi wadah bagi seluruh mahasiswa Program Studi Sistem Informasi Universitas Internasional Batam. HMPS SI hadir untuk mendukung pengembangan diri mahasiswa di bidang akademik maupun non-akademik.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Didirikan sebagai jembatan antara mahasiswa dan institusi, HMPS SI aktif menyelenggarakan berbagai kegiatan yang relevan dengan kebutuhan mahasiswa dan industri. Mulai dari seminar, workshop, kompetisi, hingga kegiatan sosial yang mempererat kebersamaan.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dengan semangat kolaborasi dan inovasi, HMPS SI berkomitmen untuk terus berkembang dan memberikan kontribusi nyata bagi mahasiswa SI UIB agar siap bersaing di era digital yang terus berkembang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}