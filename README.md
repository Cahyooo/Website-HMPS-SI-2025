🌐 WEBSITE HMPS SI 2025
========================

🧩 TECH STACK
--------------
Frontend:
- Vite
- React
- TailwindCSS

Backend:
- Laravel
- Laravel Filament

⚠️ Pastikan untuk include diatas Library/Framework bila ada yang ditambahkan.


⚙️ VERSION INFORMATION
----------------------
Tool        | Version
------------|----------
PHP         | v8.3.22
Node.js     | v22.19.0
Composer    | v2.5.8

⚠️ Jika terjadi error selama instalasi atau build, pastikan versi sesuai atau lebih dari versi itu sesuai dengan tabel di atas.


🖥️ LOCAL INSTALLATION GUIDE
----------------------------

🔹 FRONTEND SETUP
1. Buka terminal, lalu masuk ke folder Frontend:
   cd Frontend

2. Install dependencies menggunakan npm:
   npm install

3. Jalankan development server:
   npm run dev


🔹 BACKEND SETUP
1. Masuk ke folder Backend:
   cd Backend

2. Install dependencies menggunakan Composer:
   composer install

3. Install dependencies menggunakan npm:
   npm install

4. Pastikan file .env sudah dikonfigurasi dengan benar (database, app key, dsb).

5. Jalankan migration dan seeder:
   php artisan migrate --seed

6. Jalankan server Laravel:
   php artisan serve

7. Generate application key(Bila step 6 tidak jalan tampilannya dan return error), kemudian ubah di .env APP_KEY:
   php artisan key:generate


🔐 ADMIN PANEL (FILAMENT)
-------------------------
Pengelolaan data dan konten website dapat dilakukan melalui **Admin Panel Laravel Filament**.

Akses Admin Panel:
- URL: http://localhost:8000/admin

Default Akun Admin:
- Email    : admin@gmail.com
- Password : admin


🧰 TROUBLESHOOTING
------------------
Jika terjadi error:
- Pastikan Node.js dan Composer sesuai versi yang digunakan saat pengembangan.
- Cek apakah semua dependency sudah ter-install.
- Pastikan file .env sudah di-setup dengan benar di bagian Backend.


📜 LICENSE
-----------
Proyek ini dikembangkan oleh HMPS Sistem Informasi 2025.
Gunakan dengan bijak untuk tujuan pembelajaran dan pengembangan internal.
