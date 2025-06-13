<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;

     protected $with = ['balances', 'income_categories'];

    protected $table = 'incomes';
    protected $fillable = [
        'name',
        'time',
        'amount',
        'balance_id',
        'category_id',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function balance()
    {
        return $this->belongsTo(Balance::class, 'balance_id');
    }

    public function income_category()
    {
        return $this->belongsTo(IncomeCategory::class, 'category_id');
    }
}
