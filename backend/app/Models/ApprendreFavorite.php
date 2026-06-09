<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApprendreFavorite extends Model
{
    protected $table = 'apprendre_favorites';

    protected $fillable = [
        'user_id',
        'mission_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mission()
    {
        return $this->belongsTo(ApprendreMission::class, 'mission_id');
    }
}
