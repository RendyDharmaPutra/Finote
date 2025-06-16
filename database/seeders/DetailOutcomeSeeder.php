<?php

namespace Database\Seeders;

use App\Models\DetailOutcome;
use App\Models\Outcome;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DetailOutcomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Listrik PLN',
                'outcome_id' => 1,
            ],
            [
                'name' => 'Pulsa Telkomsel',
                'outcome_id' => 2,
            ],
            [
                'name' => 'Cicilan Motor Yamaha',
                'outcome_id' => 3,
            ],
        ];

        foreach ($data as $item) {
            DetailOutcome::create($item);
        }
    }
}
