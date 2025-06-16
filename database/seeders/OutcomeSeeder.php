<?php

namespace Database\Seeders;

use App\Models\Outcome;
use Illuminate\Database\Seeder;

class OutcomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Bayar Listrik',
                'amount' => 200000,
                'user_id' => '1',
                'balance_id' => '1',
                'category_id' => '3',
                'time' => now()
            ],
            [
                'name' => 'Beli Pulsa',
                'amount' => 50000,
                'user_id' => '1',
                'balance_id' => '1',
                'category_id' => '1',
                'time' => now()
            ],
            [
                'name' => 'Cicilan Motor',
                'amount' => 1000000,
                'user_id' => '1',
                'balance_id' => '1',
                'category_id' => '12',
                'time' => now()
            ],
        ];

        foreach ($data as $item) {
            Outcome::create($item);
        }
    }
}
