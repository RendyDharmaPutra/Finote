<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Balance extends Model
{
    use HasFactory;

    // Tentukan tabel yang digunakan oleh model ini (defaultnya adalah nama model dalam bentuk plural)
    protected $table = 'balances';

    // Tentukan kolom yang dapat diisi (fillable)
    protected $fillable = [
        'name',
        'amount',
        'user_id'
    ];

    // Relasi dengan model User (Balance dimiliki oleh User)
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id'); // User memiliki banyak saldo (balance)
    }
}
