<?php

namespace Database\Seeders;

use App\Models\IncomeCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class IncomeCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data=[
          [
            'name' => 'Gaji',
          ],
          [
            'name' => 'Pendapatan Sehari-hari',
          ],
          [
            'name' => 'Investasi',
          ],
          [
            'name' => 'Pendapatan Sampingan',
          ],
          [
            'name' => 'Pendapatan Lainnya',
          ]
        ];

        foreach ($data as $item) {
            IncomeCategory::create([
                'name' => $item['name'],
            ]);
        }
    }
}
