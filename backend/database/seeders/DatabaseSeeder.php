<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            ApprendreMissionSeeder::class,
            HotelSeeder::class,
        ]);

        // Supprimer users l9doma (optionnel)
        // User::truncate();

        // Créer admin
        User::firstOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('admin123'),
                'role' => 'admin',
            ]
        );

        // Créer user
        User::firstOrCreate(
            ['email' => 'user@gmail.com'],
            [
                'name' => 'Normal User',
                'password' => Hash::make('user123'),
                'role' => 'user',
            ]
        );
    }
}