<?php

namespace App\Providers;

use App\Models\Lecturer;
use App\Observers\LecturerObserver;
use Filament\Support\Colors\Color;
use Filament\Support\Facades\FilamentColor;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        FilamentColor::register([
            'di' => Color::Blue,
            'mc' => Color::Green,
            'ec' => Color::Purple,
            'im' => Color::Pink,
        ]);
        
        Lecturer::observe(LecturerObserver::class);
    }
}
