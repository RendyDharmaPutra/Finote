<?php

namespace App\Http\Controllers\Income;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Income;
use App\Models\IncomeCategory;
use App\Models\Balance;

class IncomeController extends Controller
{
    // ? Aturan Validasi -> supaya bisa digunakan kembali di banyak method
    protected array $validationRules = [
    'name' => ['required', 'string', 'min:3', 'max:100'],
    'amount' => ['required', 'numeric', 'min:500'],
    'time' => ['required', 'date'],
    'balance_id' => ['required', 'numeric'],
    'category_id' => ['required', 'numeric'],
];


    // ? Pesan dari Validasi -> karena pesan default dari Laravel menggunakan bahasa Inggris
    protected function validationMessages(): array {
        return [
            'name.required' => 'Nama wajib diisi.',
            'name.string' => 'Nama harus berupa teks.',
            'name.min' => 'Nama minimal 3 karakter.',
            'name.max' => 'Nama tidak boleh lebih dari 100 karakter.',

            'amount.required' => 'Jumlah wajib diisi.',
            'amount.numeric' => 'Jumlah harus berupa angka.',
            'amount.min' => 'Jumlah minimal adalah 500.',

            'time.required' => 'Waktu transaksi wajib diisi.',
            'time.date' => 'Format waktu tidak valid.',

            'balance_id.required' => 'Saldo wajib dipilih.',
            'balance_id.numeric' => 'Saldo tidak valid.',
            'balance_id.exists' => 'Saldo yang dipilih tidak ditemukan.',

            'category_id.required' => 'Kategori wajib dipilih.',
            'category_id.numeric' => 'Kategori tidak valid.',
            'category_id.exists' => 'Kategori yang dipilih tidak ditemukan.',
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

        // Mengambil data Saldo
        $balances = Balance::all();

        // Mengambil data Kategori Pemasukan
        $categories = IncomeCategory::all();


        // Tampilkan Halaman
        return Inertia::render('income/incomes', [
            'incomes' => $incomes,
            'balances' => $balances,
            'categories' => $categories,
        ]);
    }

    public function store(Request $request) {
        // dd($request);

        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Tambahkan user_id ke data validasi
        $validated['user_id'] = Auth::id();

        // Konversi time format
        $validated['time'] = Carbon::parse($validated['time'])->setTimeZone('Asia/Jakarta');

        // Simpan data ke database
        Income::create($validated);

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
