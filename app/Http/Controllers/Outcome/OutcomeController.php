<?php

namespace App\Http\Controllers\Outcome;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Models\Outcome;
use App\Models\OutcomeCategory;
use App\Models\Balance;

class OutcomeController extends Controller
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
    public function index() {
        $outcomes = Outcome::where('user_id', Auth::id())
            ->withCount('detailOutcomes') // Ini akan menambahkan kolom detail_outcomes_count
            ->latest()
            ->get();

        return Inertia::render('outcome/outcomes', [
            'outcomes' => $outcomes
        ]);
    }


    public function store(Request $request) {
        // Validasi data input
        // $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Tambahkan user_id ke data validasi
        // $validated['user_id'] = Auth::id();

        // Konversi time format
        // $validated['time'] = Carbon::parse($validated['time'])->setTimeZone('Asia/Jakarta');

        // Simpan Pengeluaran baru
        // $income = Income::create($validated);

        // Tambahkan jumlah Pengeluaran ke balance terkait
        // $balance = Balance::findOrFail($validated['balance_id']);
        // $balance->amount += $validated['amount'];
        // $balance->save();

        // return redirect()->route('income.index')->with('success', 'Pemasukan berhasil ditambahkan.');
    }


    public function update(Request $request, $id) {
        // Validasi data input
        // $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Konversi waktu
        // $validated['time'] = Carbon::parse($validated['time'])->setTimeZone('Asia/Jakarta');

        // Periksa Eksistensi Pengeluaran yang dipilih
        // $income = Income::findOrFail($id);

        // $oldAmount = $income->amount;
        // $oldBalanceId = $income->balance_id;

        // $newAmount = $validated['amount'];
        // $newBalanceId = $validated['balance_id'];

        // 🔁 Update balance sesuai kondisi
        // if ($oldBalanceId != $newBalanceId) {
        //     // Kurangi dari balance lama
        //     $oldBalance = Balance::findOrFail($oldBalanceId);
        //     $oldBalance->amount -= $oldAmount;
        //     $oldBalance->save();

        //     // Tambahkan ke balance baru
        //     $newBalance = Balance::findOrFail($newBalanceId);
        //     $newBalance->amount += $newAmount;
        //     $newBalance->save();
        // } else {
        //     // Balance sama, update dengan selisih
        //     $balance = Balance::findOrFail($oldBalanceId);
        //     $difference = $newAmount - $oldAmount;
        //     $balance->amount += $difference;
        //     $balance->save();
        // }

        // Update Pengeluaran

        // return redirect()->route('income.index')->with('success', 'Pengeluaran berhasil diperbarui.');
    }



    public function destroy(Income $income) {
        // Tambahkan amount dari balance terkait

        // Hapus Data Pengeluaran
        // $income->delete();

        // return redirect()->back()->with('success', 'Pengeluaran berhasil dihapus.');
    }

}
