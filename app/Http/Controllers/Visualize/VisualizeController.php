<?php

namespace App\Http\Controllers\Visualize;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Outcome;
use App\Models\DetailOutcome;
use App\Models\OutcomeCategory;
use App\Models\Balance;


class VisualizeController extends Controller
{
    public function visualize_income() {
        return Inertia::render('visualize/visualize-income');
    }

    public function visualize_outcome() {
        return Inertia::render('visualize/visualize-outcome');
    }
}
