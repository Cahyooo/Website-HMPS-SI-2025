<?php

namespace Database\Seeders;

use App\Models\Lecturer;
use App\Models\Specialization;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => 'admin',
        ]);

        // DEFAULT PEMINATAN
        Specialization::create([
            'name' => 'Data Intelligence',
            'code' => 'DI',
            'description' => 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        ]);
        Specialization::create([
            'name' => 'Mobile Computing',
            'code' => 'MC',
            'description' => 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        ]);
        Specialization::create([
            'name' => 'Entertainment Computing',
            'code' => 'EC',
            'description' => 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        ]);
        Specialization::create([
            'name' => 'Information Media',
            'code' => 'IM',
            'description' => 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
        ]);

        // Dummy Data for Lecturer
        Lecturer::create([
            'nidn' => '0123456789',
            'full_name' => 'Dr. Andika Pratama, S.Kom., M.Kom.',
            'email' => 'andika.pratama@uib.ac.id',
            'education' => 'S3 Ilmu Komputer, Universitas Indonesia',
            'research_focus' => 'Kecerdasan Buatan dan Data Mining',
            'photo' => 'lecturers/andika.jpg',
            'phone_number' => '081234567890',
            'address' => 'Jl. Sudirman No. 12, Tanjungpinang',
            'slug' => self::generateSlug('Dr. Andika Pratama, S.Kom., M.Kom.'),
        ]);
        
        Lecturer::create([
            'nidn' => '0987654321',
            'full_name' => 'Prof. Ir. Budi Santoso, Ph.D',
            'email' => 'budi.santoso@itb.ac.id',
            'education' => 'S3 Teknik Elektro, Institut Teknologi Bandung',
            'research_focus' => 'Sistem Cerdas dan Robotika',
            'photo' => 'lecturers/budi.jpg',
            'phone_number' => '081223344556',
            'address' => 'Jl. Dago No. 45, Bandung',
            'slug' => self::generateSlug('Prof. Ir. Budi Santoso, Ph.D'),
        ]);
        
        Lecturer::create([
            'nidn' => '1234567890',
            'full_name' => 'Dr. Nia Rahmawati, M.Sc',
            'email' => 'nia.rahmawati@ugm.ac.id',
            'education' => 'S3 Statistika, Universitas Gadjah Mada',
            'research_focus' => 'Analisis Data dan Pembelajaran Mesin',
            'photo' => 'lecturers/nia.jpg',
            'phone_number' => '081299988877',
            'address' => 'Jl. Kaliurang KM 5, Sleman, Yogyakarta',
            'slug' => self::generateSlug('Dr. Nia Rahmawati, M.Sc'),
        ]);
        
        Lecturer::create([
            'nidn' => '1122334455',
            'full_name' => 'Ir. Dedi Saputra, M.Eng',
            'email' => 'dedi.saputra@uns.ac.id',
            'education' => 'S2 Teknik Informatika, Universitas Sebelas Maret',
            'research_focus' => 'Jaringan Komputer dan Keamanan Siber',
            'photo' => 'lecturers/dedi.jpg',
            'phone_number' => '081311223344',
            'address' => 'Jl. Slamet Riyadi No. 77, Surakarta',
            'slug' => self::generateSlug('Ir. Dedi Saputra, M.Eng'),
        ]);
        
        Lecturer::create([
            'nidn' => '5566778899',
            'full_name' => 'Dr. Clara Wijaya, S.Si., M.Si',
            'email' => 'clara.wijaya@unair.ac.id',
            'education' => 'S3 Matematika, Universitas Airlangga',
            'research_focus' => 'Optimasi dan Sains Data',
            'photo' => 'lecturers/clara.jpg',
            'phone_number' => '082134567891',
            'address' => 'Jl. Mulyorejo No. 10, Surabaya',
            'slug' => self::generateSlug('Dr. Clara Wijaya, S.Si., M.Si'),
        ]);
    }

    private static function generateSlug($fullName)
    {
        $name = Str::before($fullName, ',');
        $name = preg_replace('/\b(Dr|Ir|Prof|S\.Kom|M\.Kom|M\.Si|S\.Si|Ph\.D|M\.Sc|B\.Eng)\b\.?/i', '', $name);
        $name = trim(preg_replace('/\s+/', ' ', $name));

        return Str::slug($name);
    }
}
