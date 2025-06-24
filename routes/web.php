<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Dashboard\DashboardController;
use Inertia\Inertia;



Route::get('/', function () {
    return redirect('dashboard');
})->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/balance.php';
require __DIR__.'/income.php';
require __DIR__.'/outcome.php';
require __DIR__.'/auth.php';
