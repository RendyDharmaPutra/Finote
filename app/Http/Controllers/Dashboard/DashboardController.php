<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\Income;
use App\Models\Outcome;
use App\Models\Balance;

class DashboardController extends Controller
{
    public function index() {
        $userId = Auth::id();

        // Ambil total pemasukan terakhir milik user
        $lastIncomeAmount = Income::where('user_id', $userId)
            ->latest('time')
            ->value('amount');

        // Ambil total pengeluaran terakhir milik user
        $lastOutcomeAmount = Outcome::where('user_id', $userId)
            ->latest('time')
            ->value('amount');

        // Ambil total saldo dari semua balance milik user
        $totalBalance = Balance::where('user_id', $userId)->sum('amount');

        return Inertia::render('dashboard', [
            'lastIncome' => $lastIncomeAmount ?? 0,
            'lastOutcome' => $lastOutcomeAmount ?? 0,
            'totalBalance' => $totalBalance,
        ]);
    }
}
