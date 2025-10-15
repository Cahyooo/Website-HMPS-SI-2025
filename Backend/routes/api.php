<?php

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
