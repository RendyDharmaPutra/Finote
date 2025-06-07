<?php

namespace App\Http\Controllers\Balance;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;



class BalanceController extends Controller
{
    /**
     * Menampilkan Halmaan Daftar Saldo
     */
    public function index(): Response {
        //**
        //  TODO :
        //  Menangkap ID User yang login
        $userId = Auth::id();
        //  Mengambil data Balance berdasarkan ID User
        //  Hitung Balance yang ada (count)
        //  Totalkan semua properti amount dari Balance (count)
        //  Kirim data Balance,Total Amount, dan Jumlah Balance (count) ke Frontend
        //
        //  */



         return Inertia::render('balance/balances');
    }
}
