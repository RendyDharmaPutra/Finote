<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Income\IncomeController;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
   Route::resource('income', IncomeController::class);
});
