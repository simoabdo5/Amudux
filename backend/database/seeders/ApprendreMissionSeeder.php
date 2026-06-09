<?php

namespace Database\Seeders;

use App\Models\ApprendreMission;
use Illuminate\Database\Seeder;

class ApprendreMissionSeeder extends Seeder
{
    private array $missions = [
        // Darija (7 missions)
        ['track' => 'darija', 'mission_number' => 1, 'title' => 'Airport Arrival', 'description' => 'Basic greetings and airport vocabulary'],
        ['track' => 'darija', 'mission_number' => 2, 'title' => 'Taxi Journey', 'description' => 'Transport and directions'],
        ['track' => 'darija', 'mission_number' => 3, 'title' => 'Hotel Check-In', 'description' => 'Accommodation phrases'],
        ['track' => 'darija', 'mission_number' => 4, 'title' => 'Restaurant & Café', 'description' => 'Food and ordering'],
        ['track' => 'darija', 'mission_number' => 5, 'title' => 'Souk & Bargaining', 'description' => 'Shopping and negotiation'],
        ['track' => 'darija', 'mission_number' => 6, 'title' => 'Asking Directions', 'description' => 'Navigating the city'],
        ['track' => 'darija', 'mission_number' => 7, 'title' => 'Emergency Situations', 'description' => 'Emergency phrases'],

        // Tifinagh (6 missions)
        ['track' => 'tifinagh', 'mission_number' => 1, 'title' => 'Discover Tifinagh', 'description' => 'Introduction to Tifinagh script'],
        ['track' => 'tifinagh', 'mission_number' => 2, 'title' => 'Write Your First Tifinagh Word', 'description' => 'Basic writing skills'],
        ['track' => 'tifinagh', 'mission_number' => 3, 'title' => 'Reading Common Signs', 'description' => 'Signs and public text'],
        ['track' => 'tifinagh', 'mission_number' => 4, 'title' => 'Everyday Words', 'description' => 'Common vocabulary'],
        ['track' => 'tifinagh', 'mission_number' => 5, 'title' => 'Amazigh Culture & Symbols', 'description' => 'Cultural symbols'],
        ['track' => 'tifinagh', 'mission_number' => 6, 'title' => 'Complete Tifinagh Alphabet', 'description' => 'Full alphabet mastery'],

        // Culture (6 missions)
        ['track' => 'culture', 'mission_number' => 1, 'title' => 'Moroccan Hospitality', 'description' => 'Welcoming customs'],
        ['track' => 'culture', 'mission_number' => 2, 'title' => 'Markets & Bargaining', 'description' => 'Souk etiquette'],
        ['track' => 'culture', 'mission_number' => 3, 'title' => 'Moroccan Food & Etiquette', 'description' => 'Dining customs'],
        ['track' => 'culture', 'mission_number' => 4, 'title' => 'Local Customs & Everyday Life', 'description' => 'Daily life norms'],
        ['track' => 'culture', 'mission_number' => 5, 'title' => 'Religious Etiquette', 'description' => 'Religious practices'],
        ['track' => 'culture', 'mission_number' => 6, 'title' => 'Travel Safety & Smart Travel', 'description' => 'Safety tips'],
    ];

    public function run(): void
    {
        foreach ($this->missions as $mission) {
            ApprendreMission::create($mission);
        }
    }
}
