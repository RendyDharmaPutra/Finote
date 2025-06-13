<?php

namespace Database\Seeders;

use App\Models\OutcomeCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OutcomeCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data=[
          [
            'name' => 'Belanja Sehari-hari',
          ],
          [
            'name' => 'Sewa',
          ],
          [
            'name' => 'Tagihan listrik',
          ],
          [
            'name' => 'Kesehatan',
          ],
          [
            'name' => 'Transportasi',
          ],
          [
            'name' => 'Hiburan',
          ],
          [
            'name' => 'Pendidikan',
          ],
          [
            'name' => 'Pajak',
          ],
          [
            'name' => 'Asuransi',
          ],
          [
            'name' => 'Cemilan/Makanan Ringan',
          ],
          [
            'name' => 'Makanan/Minuman',
          ],
          [
            'name' => 'Pengeluaran Lainnya',
          ]
        ];

        foreach ($data as $item) {
            OutcomeCategory::create([
                'name' => $item['name'],
            ]);
        }
    }
}
