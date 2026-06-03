<?php
// app/Models/User.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'image',
        'bio',
        'ville',
        'email',
        'password',
<<<<<<< HEAD
=======
        'role',
        'email_verified_at',
        'provider',        
        'provider_id', 
>>>>>>> 27cef02d8a3c291f193d74224d98c69aa22d46a8
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
<<<<<<< HEAD
=======
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function isAdmin()
>>>>>>> 27cef02d8a3c291f193d74224d98c69aa22d46a8
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    // Relation m3a profil
    public function profil()
    {
        return $this->hasOne(Profil::class);
    }

    // Relation m3a profil
    public function profil()
    {
        return $this->hasOne(Profil::class);
    }
}