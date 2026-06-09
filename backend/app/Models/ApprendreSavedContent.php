<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApprendreSavedContent extends Model
{
    protected $table = 'apprendre_saved_content';

    protected $fillable = [
        'user_id',
        'mission_id',
        'category',
        'type',
        'content',
        'translation',
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
