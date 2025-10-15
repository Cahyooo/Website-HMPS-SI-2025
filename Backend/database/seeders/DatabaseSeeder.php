<?php

namespace Database\Seeders;

use App\Models\Specialization;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
    }
}
