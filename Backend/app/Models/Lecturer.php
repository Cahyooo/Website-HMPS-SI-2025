<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Lecturer extends Model
{
    /** @use HasFactory<\Database\Factories\LecturerFactory> */
    use HasFactory;

    protected $fillable = [
        'nidn',
        'full_name',
        'email',
        'education',
        'research_focus',
        'photo',
        'phone_number',
        'address',
        'slug',
    ];

    protected $appends = ['photo_url'];

    protected static function boot()
    {
        parent::boot();

        static::observe(\App\Observers\LecturerObserver::class);
    }

    public function getPhotoUrlAttribute(): ?string
{
    if (!$this->photo) {
        return '/storage/photos/default.jpg';
    }

    return env('APP_URL') . '/storage/' . ltrim($this->photo, '/');
}
}
