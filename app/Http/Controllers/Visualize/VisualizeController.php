<?php

namespace App\Http\Controllers\Visualize;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;


class VisualizeController extends Controller
{
    public function visualize_income() {
        return Inertia::render('visualize/visualize-income');
    }

    public function visualize_outcome() {
        return Inertia::render('visualize/visualize-outcome');
    }
}
