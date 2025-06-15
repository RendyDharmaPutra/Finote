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
    public function index() {
        $incomes = Income::where('user_id', Auth::id())->latest()->get();

        return Inertia::render('income/incomes', [
            'incomes' => $incomes,
            'balances' => Balance::where('user_id', Auth::id())->get(),
            'categories' => IncomeCategory::all(),
        ]);
    }


    public function store(Request $request) {
        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Tambahkan user_id ke data validasi
        $validated['user_id'] = Auth::id();

        // Konversi time format
        $validated['time'] = Carbon::parse($validated['time'])->setTimeZone('Asia/Jakarta');

        // Simpan income baru
        $income = Income::create($validated);

        // Tambahkan jumlah income ke balance terkait
        $balance = Balance::findOrFail($validated['balance_id']);
        $balance->amount += $validated['amount'];
        $balance->save();

        return redirect()->route('income.index')->with('success', 'Pemasukan berhasil ditambahkan.');
    }


    public function update(Request $request, $id) {
        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Konversi waktu
        $validated['time'] = Carbon::parse($validated['time'])->setTimeZone('Asia/Jakarta');

        $income = Income::findOrFail($id);

        $oldAmount = $income->amount;
        $oldBalanceId = $income->balance_id;

        $newAmount = $validated['amount'];
        $newBalanceId = $validated['balance_id'];

        // 🔁 Update balance sesuai kondisi
        if ($oldBalanceId != $newBalanceId) {
            // Kurangi dari balance lama
            $oldBalance = Balance::findOrFail($oldBalanceId);
            $oldBalance->amount -= $oldAmount;
            $oldBalance->save();

            // Tambahkan ke balance baru
            $newBalance = Balance::findOrFail($newBalanceId);
            $newBalance->amount += $newAmount;
            $newBalance->save();
        } else {
            // Balance sama, update dengan selisih
            $balance = Balance::findOrFail($oldBalanceId);
            $difference = $newAmount - $oldAmount;
            $balance->amount += $difference;
            $balance->save();
        }

        // Update income
        $income->update($validated);

        return redirect()->route('income.index')->with('success', 'Pemasukan berhasil diperbarui.');
    }



    public function destroy(Income $income) {
        // Kurangi amount dari balance terkait
        $balance = Balance::findOrFail($income->balance_id);
        $balance->amount -= $income->amount;
        $balance->save();

        $income->delete();

        return redirect()->back()->with('success', 'Pemasukan berhasil dihapus.');
    }

}
