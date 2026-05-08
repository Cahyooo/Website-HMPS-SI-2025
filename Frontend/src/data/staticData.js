// ─────────────────────────────────────────────────────────────────
//  CARA PAKAI GAMBAR LOKAL
//  Taruh semua gambar di folder: public/images/
//
//  Contoh struktur folder:
//  public/
//  ├── logo.png
//  └── images/
//      ├── anggota/
//      │   ├── ketua.jpg
//      │   ├── wakil.jpg
//      │   ├── sekretaris-1.jpg
//      │   ├── sekretaris-2.jpg
//      │   ├── bendahara-1.jpg
//      │   └── bendahara-2.jpg
//      ├── penjurusan/
//      │   ├── data-intelligence.jpg
//      │   ├── mobile-computing.jpg
//      │   ├── entertainment-computing.jpg
//      │   └── information-media.jpg
//      └── lulusan/
//          ├── full-stack.jpg
//          ├── system-analyst.jpg
//          ├── data-scientist.jpg
//          ├── cinematographer.jpg
//          ├── game-developer.jpg
//          ├── animator.jpg
//          └── technopreneur.jpg
//
//  Lalu isi path di bawah dengan: '/images/nama-file.jpg'
//  Contoh: foto_url: '/images/anggota/ketua.jpg'
// ─────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────
//  SLIDES  (Hero Carousel)
// ─────────────────────────────────────────────────────────────────
export const SLIDES = [
  {
    img:   'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
    title: 'Menjadi Profesional IT Masa Depan',
    sub:   'Bergabunglah dengan kami di Program Studi Sistem Informasi UIB.',
  },
  {
    img:   'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
    title: 'Wujudkan Karier IT Impianmu',
    sub:   'Gabung sekarang di Program Studi Sistem Informasi UIB!',
  },
  {
    img:   'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80',
    title: 'Siap Jadi Ahli IT Profesional?',
    sub:   'Daftar di Program Studi Sistem Informasi UIB hari ini.',
  },
]

// ─────────────────────────────────────────────────────────────────
//  PROGRAM  (Beranda — kartu program utama, statis)
// ─────────────────────────────────────────────────────────────────
export const PROGRAM = [
  {
    nama: 'Perancangan Sistem Informasi',
    img:  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
  },
  {
    nama: 'Desain Komunikasi Visual',
    img:  'https://images.unsplash.com/photo-1636633762833-5d1658f1e29b?w=800&q=80',
  },
]

// ─────────────────────────────────────────────────────────────────
//  PENJURUSAN IMAGE
//  Ganti value dengan path lokal jika ada, contoh:
//  '/images/penjurusan/data-intelligence.jpg'
//  Jika tidak diisi (null) → pakai gambar fallback dari Unsplash
// ─────────────────────────────────────────────────────────────────
export const PENJURUSAN_IMG = {
  DI: null, // Contoh: '/images/penjurusan/data-intelligence.jpg'
  MC: null, // Contoh: '/images/penjurusan/mobile-computing.jpg'
  EC: null, // Contoh: '/images/penjurusan/entertainment-computing.jpg'
  IM: null, // Contoh: '/images/penjurusan/information-media.jpg'
}

// Fallback Unsplash jika PENJURUSAN_IMG[code] == null
export const PENJURUSAN_IMG_FALLBACK = {
  DI: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  MC: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  EC: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80',
  IM: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80',
}

// Helper: ambil gambar penjurusan (lokal jika ada, fallback unsplash)
export const getPenjurusanImg = (code) =>
  PENJURUSAN_IMG[code] ?? PENJURUSAN_IMG_FALLBACK[code] ?? 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80'

// ─────────────────────────────────────────────────────────────────
//  PROFIL LULUSAN
//  Ganti img dengan path lokal jika ada, contoh:
//  '/images/lulusan/full-stack.jpg'
// ─────────────────────────────────────────────────────────────────
export const LULUSAN = [
  {
    judul:    'Full Stack Programmer',
    //img:      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    img:   '/images/lulusan/fullstack.webp',   // ← ganti ke lokal
    deskripsi: 'Bertugas untuk menghasilkan aplikasi front end dan back end baik di platform desktop , web , mobile, atau cloud sebagai sistem informasi untuk bisnis dengan tujuan berkontribusi terhadap revolusi industri 4.0.',
  },
  {
    judul:    'System Analyst',
    //img:      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    img:   '/images/lulusan/analyst.webp',   // ← ganti ke lokal
    deskripsi: 'Bertugas untuk menganalisa kebutuhan IS/IT , mengembangkan dokumen pengembangan sistem informasi dengan tujuan mengembangkan adopsi sistem informasi yang optimal di organisasi bisnis.',
  },
  {
    judul:    'Data Scientist',
    // img:      'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&q=80',
    img:   '/images/lulusan/data.webp',
    deskripsi: 'Bertugas mengelola dan menganalisa data dengan tujuan berkontribusi dalam pengembangan informasi yang berguna bagi masyarakat dan organisasi bisnis.',
  },
  {
    judul:    'Cinematographer',
    // img:      'https://images.unsplash.com/photo-1612197528428-c1b6b8b00694?w=600&q=80',
    img:   '/images/lulusan/cinema.webp',
    deskripsi: 'Bertugas untuk menghasilkan karya film dan konten multimedia sebagai media kreatif untuk kebutuhan bisnis.',
  },
  {
    judul:    'Video Game Developer',
    // img:      'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=600&q=80',
    img:   '/images/lulusan/game.webp',
    deskripsi: 'Bertugas untuk menghasilkan aplikasi video game baik bersifat entertaiment maupun serious dengan tujuan mengembangkan industri bisnis kreatif dibidang video game.',
  },
  {
    judul:    'Animator',
    // img:      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
    img:   '/images/lulusan/animator.webp',
    deskripsi: 'Bertugas untuk menghasilkan karya animasi baik 2D maupun 3D sebagai media kreatif untuk kebutuhan bisnis.',
  },
  {
    judul:    'Technopreneur',
    // img:      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    img:   '/images/lulusan/techno.webp',
    deskripsi: 'Berperan sebagai wirausaha yang dienabled oleh sistem informasi dan dengan tujuan mengembangkan usaha bisnis yang kreatif dan inovatif.',
  },
]

// ─────────────────────────────────────────────────────────────────
//  ANGGOTA INTI
//
//  foto_url: ganti dengan path lokal, contoh:
//  '/images/anggota/ketua.jpg'
//
//  Jabatan spotlight (card besar): Ketua Umum, Wakil Ketua
//  Jabatan staff   (card kecil) : Sekretaris 1, Sekretaris 2,
//                                  Bendahara 1, Bendahara 2
// ─────────────────────────────────────────────────────────────────
export const ANGGOTA_INTI = [
  // ── SPOTLIGHT (card besar dengan foto & quote) ──
  {
    nama:       'Constantine Alexios',
    jabatan:    'Ketua',
    npm:        '2431031',
    foto_url:   '/images/anggota/ketua.webp',
  },
  {
    nama:       'Sachio Alfonso Fang',
    jabatan:    'Wakil Ketua',
    npm:        '2431128',
    foto_url:   '/images/anggota/wakil.webp',
  },


  {
    nama:       'Novita Erica Angel',
    jabatan:    'Sekretaris',
    npm:        '2431173',
  },

  {
    nama:       'Ruyi Yoputri',
    jabatan:    'Sekretaris',
    npm:        '2431090',

  },
  {
    nama:       'Siska Amelia Karo Sekali',
    jabatan:    'Bendahara',
    npm:        '2431014',
    penjurusan: 'Mobile Computing',
  },
  {
    nama:       'Silvyana Lim',
    jabatan:    'Bendahara',
    npm:        '2431001',
  },
]

// ─────────────────────────────────────────────────────────────────
//  DIVISI
// ─────────────────────────────────────────────────────────────────
export const DIVISI = [
  { nama: 'Divisi Programming', ketua: 'Tiara Kasih Debrila Putri', warna: '#00b4d8', anggota:
    ['Andrew Sanjaya Cuandra', 'Wilson Lau', 'Andri Jlis', 'Darren Emerson', 'Cahya Winata', 'Ferdy', 'Keane Manuel Budiman'
      , 'Septa Banyu Prasetyo'
    ] },
  { nama: 'Divisi Multimedia', ketua: 'Celine Angeline', warna: '#7c3aed', anggota: 
    ['Afifah Viona Afra Amattullah', 'Angelina', 'Damai Alyndina', 'Jessie Marchella', 'Viona Lim', 'Andiko Damar Putra', 'Jessica Santana',
      'Mohamed Arsat', 'Aditia Winata', 'Christiano Satriani De Mosa', 'Fiolyn Angelie', 'Jesslyn Virginia', 'Melvin Addison',
      'Ricksen Lee', 'Robin Wongso', 'Sheren Pang', 'Tiyara Ferlina'
     ] },
  { nama: 'Divisi Hubungan Masyarakat', ketua: 'Desyah Harianti Hsb', warna: '#f59e0b', anggota: 
    ['Raja Nabila Putri', 'Rere Shakila Pasha', 'Tiara Rossyafitri', 'Heven Edrico', 'Siska Evita Kristiani', 'Audrey Elvina', 'Charles Lim'
      , 'Evelyn Felicia', 'Hartono', 'Linda Angellita', 'Magdalena Silaban', 'Putri Amalia', 'Raynaldo Zhong', 'Syafira Aufia Arabi', 'Sona Ria Ramadhani Sinaga'
    ] },
]
