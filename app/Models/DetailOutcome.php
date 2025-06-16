<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailOutcome extends Model
{
    use HasFactory;
    protected $table = 'detail_outcomes';
    protected $fillable = [
        'name',
        'outcome_id'
    ];
    public function detailoutcome()
    {
        return $this->belongsTo(Outcome::class, 'outcome_id');
    }
}
