<?php

namespace Database\Seeders;

use App\Models\Income;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IncomeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'name' => 'Gaji Bulanan',
                'amount' => 5000000,
                'user_id' => '11',
                'balance_id' => '1',
                'category_id' => '1',
                'time' => now()
            ],
            [
                'name' => 'Hasil Investasi',
                'amount' => 1000000,
                'user_id' => '11',
                'balance_id' => '1',
                'category_id' => '1',
                'time' => now()
            ],
            [
                'name' => 'Freelance Desain',
                'amount' => 1500000,
                'user_id' => '11',
                'balance_id' => '1',
                'category_id' => '1',
                'time' => now()
            ],
        ];

        foreach ($data as $item) {
            Income::create($item);
        }
    }
}

?>
