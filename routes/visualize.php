<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Visualize\VisualizeController;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::get('/visualize-income', [VisualizeController::class, 'visualize_income'])->name('visualize.income');
    Route::get('/visualize-outcome', [VisualizeController::class, 'visualize_outcome'])->name('visualize.outcome');
});
