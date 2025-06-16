<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
        User::factory()->create([
            'name' => 'Example User',
            'email' => 'exampleuser@gmail.com',
            'password' => 'exampleuser123'
        ]);

         $this->call([
            BalanceSeeder::class,
            IncomeSeeder::class,
            OutcomeSeeder::class,
            DetailOutcomeSeeder::class,
            IncomeCategorySeeder::class,
            OutcomeCategorySeeder::class,
        ]);

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
