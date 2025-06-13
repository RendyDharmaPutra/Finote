<?php

namespace App\Http\Controllers\Income;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\Income;

class IncomeController extends Controller
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

        // Mengambil data Pemasukan berdasarkan ID Pengguna
        $incomes = Income::where('user_id', $userId)->get();

        // Tampilkan Halaman
        return Inertia::render('income/incomes', [
            'incomes' => $incomes
        ]);
    }

    public function store(Request $request) {
        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Tambahkan user_id ke data validasi
        $validated['user_id'] = Auth::id();

        // Simpan data ke database

        // Redirect atau respon lainnya
        return redirect()->route('income.index')->with('success', 'Pemasukan berhasil ditambahkan.');

    }

    public function update(Request $request, $id) {
        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Update data
    }

    public function destroy(Balance $balance) {
        // Hapus data

        return redirect()->back()->with('success', 'Pemasukan berhasil dihapus.');
    }
}
