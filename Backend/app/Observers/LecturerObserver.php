<?php

namespace App\Observers;

use App\Models\Lecturer;
use Illuminate\Support\Str;

class LecturerObserver
{
    /**
     * Handle the Lecturer "creating" event.
     */
    public function creating(Lecturer $lecturer): void
    {
        $lecturer->slug = self::generateSlug($lecturer->full_name);
    }

    /**
     * Handle the Lecturer "updating" event.
     */
    public function updating(Lecturer $lecturer): void
    {
        if ($lecturer->isDirty('full_name')) {
            $lecturer->slug = self::generateSlug($lecturer->full_name);
        }
    }

    /**
     * Generate a clean slug from full name.
     */
    private static function generateSlug($fullName)
    {
        $name = Str::before($fullName, ',');
        $name = preg_replace('/\b(Dr|Ir|Prof|S\.Kom|M\.Kom|M\.Si|S\.Si|Ph\.D|M\.Sc|B\.Eng)\b\.?/i', '', $name);
        $name = trim(preg_replace('/\s+/', ' ', $name));

        return Str::slug($name);
    }
}
