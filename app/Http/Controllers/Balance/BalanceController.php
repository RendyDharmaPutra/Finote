<?php

namespace App\Http\Controllers\Balance;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\Balance;

class BalanceController extends Controller
{
    /**
     * Menampilkan Halaman Daftar Saldo
     */
    public function index(): Response {
        // Menangkap ID User yang login
        $userId = Auth::id();

        // Mengambil data Balance berdasarkan ID User
        $balances = Balance::where('user_id', $userId)->get(); // Ambil data balance milik user

        // Menghitung jumlah saldo (count)
        $balanceCount = $balances->count();

        // Menghitung total amount dari semua balance yang ada
        $totalAmount = $balances->sum('amount');

        // Mengambil saldo tertinggi di antara semua saldo yang ada
        $highestBalance = $balances->max('amount');

        // Kirim data Balance, Total Amount, Jumlah Balance (count), dan Saldo Tertinggi ke Frontend
        return Inertia::render('balance/balances', [
            'balances' => $balances,  // Data Balance
            'totalAmount' => $totalAmount,  // Total Amount
            'balanceCount' => $balanceCount,  // Jumlah Balance
            'highestBalance' => $highestBalance, // Saldo Tertinggi
        ]);
    }

    public function store(Request $request) {
        dd($request->all());
    }
}
