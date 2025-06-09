<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Balance\BalanceController;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
   Route::resource('balance', BalanceController::class);
});
