<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Outcome extends Model
{
        use HasFactory;

    protected $with = ['balance', 'outcome_category'];

    protected $table = 'outcomes';
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

    public function outcome_category()
    {
        return $this->belongsTo(OutcomeCategory::class, 'category_id');
    }

    public function detailOutcomes() {
        return $this->hasMany(DetailOutcome::class);
    }

}
