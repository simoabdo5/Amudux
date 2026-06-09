<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApprendreProgress extends Model
{
    protected $table = 'apprendre_progress';

    protected $fillable = [
        'user_id',
        'mission_id',
        'completed',
        'completed_at',
    ];

    protected function casts(): array
    {
        return [
            'completed' => 'boolean',
            'completed_at' => 'datetime',
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mission()
    {
        return $this->belongsTo(ApprendreMission::class, 'mission_id');
    }
}
