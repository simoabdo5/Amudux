<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApprendreMission extends Model
{
    protected $fillable = [
        'track',
        'mission_number',
        'title',
        'description',
    ];

    public function progress()
    {
        return $this->hasMany(ApprendreProgress::class, 'mission_id');
    }

    public function favorites()
    {
        return $this->hasMany(ApprendreFavorite::class, 'mission_id');
    }

    public function savedContent()
    {
        return $this->hasMany(ApprendreSavedContent::class, 'mission_id');
    }
}
