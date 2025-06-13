<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Balance;

class BalanceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Dompet',
                'amount' => 1000000,
                'user_id' => 11,

            ],
            [
                'name' => 'Tabungan',
                'amount' => 1000000,
                'user_id' => 11,

            ],
            [
                'name' => 'ATM',
                'amount' => 1000000,
                'user_id' => 11,

            ],
        ];

        foreach ($data as $item) {
            Balance::create($item);
        }
    }
}
