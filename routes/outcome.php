<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Outcome\OutcomeController;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
   Route::resource('outcome', OutcomeController::class);
});
