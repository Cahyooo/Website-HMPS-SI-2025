<?php

use App\Models\Lecturer;
use App\Models\Specialization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::get('/specialization', function (Request $request) {
    return Specialization::all();
});

Route::get('/specialization/{code}', function (string $code) {
    return Specialization::where('code', $code)->firstOrFail();
});

Route::get('/lecturer', function (Request $request) {
    return Lecturer::all()->makeHidden(['photo']);;
});

Route::get('/lecturer/{slug}', function (string $slug) {
    return Lecturer::where('slug', $slug)->firstOrFail()->makeHidden(['photo']);
});