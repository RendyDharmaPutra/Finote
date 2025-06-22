<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\DashboardController;


Route::get('/', function () {
    return redirect('dashboard');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    // Route::get('dashboard', function () {


    //     return Inertia::render('dashboard');
    // })->name('dashboard');
    Route::resource('dashboard', DashboardController::class);
});

require __DIR__.'/settings.php';
require __DIR__.'/balance.php';
require __DIR__.'/income.php';
require __DIR__.'/outcome.php';
require __DIR__.'/visualize.php';
require __DIR__.'/auth.php';
