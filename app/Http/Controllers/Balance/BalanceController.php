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
    // ? Aturan Validasi -> supaya bisa digunakan kembali di banyak method
     protected array $validationRules = [
        'name' => ['required', 'string', 'min:3', 'max:100'],
        'amount' => ['required', 'numeric', 'min:500'],
    ];

    // ? Pesan dari Validasi -> karena pesan default dari Laravel menggunakan bahasa Inggris
    protected function validationMessages(): array {
        return [
            'name.required' => 'Nama saldo wajib diisi.',
            'name.string' => 'Nama saldo harus berupa teks.',
            'name.min' => 'Nama saldo minimal 3 karakter.',
            'name.max' => 'Nama saldo tidak boleh lebih dari 100 karakter.',
            'amount.required' => 'Jumlah saldo wajib diisi.',
            'amount.numeric' => 'Jumlah saldo harus berupa angka.',
            'amount.min' => 'Jumlah saldo minimal adalah 500.',
        ];
    }

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
        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Tambahkan user_id ke data validasi
        $validated['user_id'] = Auth::id();

        // Simpan data ke database
        Balance::create($validated);

        // Redirect atau respon lainnya
        return redirect()->route('balance.index')->with('success', 'Saldo berhasil ditambahkan.');

    }

    public function update(Request $request, $id) {
        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Update data
        $balance = Balance::findOrFail($id);
        $balance->update($validated);
    }

    public function destroy(Balance $balance) {
        $balance->delete();

        return redirect()->back()->with('success', 'Saldo berhasil dihapus.');
    }
}
