<?php

namespace App\Http\Controllers\Outcome;

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

class OutcomeController extends Controller
{
    // ? Aturan Validasi -> supaya bisa digunakan kembali di banyak method
    protected array $validationRules = [
        'name' => ['required', 'string', 'min:3', 'max:100'],
        'amount' => ['required', 'numeric', 'min:500'],
        'time' => ['required', 'date'],
        'balance_id' => ['required', 'numeric'],
        'category_id' => ['required', 'numeric'],

        // Tambahan untuk validasi rincian
        'details' => ['nullable', 'array'],
        'details.*.name' => ['required_with:details', 'string', 'min:1'],
        'details.*.price' => ['required_with:details', 'numeric', 'min:0'],
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

            'details.array' => 'Rincian pengeluaran tidak valid.',
            'details.*.name.required_with' => 'Nama barang pada rincian wajib diisi.',
            'details.*.name.string' => 'Nama barang pada rincian harus berupa teks.',
            'details.*.price.required_with' => 'Harga barang pada rincian wajib diisi.',
            'details.*.price.numeric' => 'Harga barang harus berupa angka.',
            'details.*.price.min' => 'Harga barang tidak boleh negatif.',
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

    public function show($id) {
        $outcome = Outcome::findOrFail($id);

         // Lazy Eager Load relasi 'details'
        $outcome->load('detailOutcomes');

        return Inertia::render('outcome/outcome-detail', [
            'outcome' => $outcome
        ]);
    }

    public function create() {


        return Inertia::render('outcome/add-outcome', [
            'balances' => Balance::where('user_id', Auth::id())->get(),
            'categories' => OutcomeCategory::all(),
        ]);
    }


    public function store(Request $request) {
        // Validasi data input
        $validated = $request->validate($this->validationRules, $this->validationMessages());

        // Tambahkan user_id
        $validated['user_id'] = Auth::id();

        // Konversi waktu ke zona Jakarta
        $validated['time'] = Carbon::parse($validated['time'])->setTimezone('Asia/Jakarta');

        // Pisahkan data details sebelum insert Outcome
        $details = $validated['details'] ?? [];
        unset($validated['details']); // agar tidak error saat create outcome

        DB::beginTransaction();

        try {
            // Simpan Outcome utama
            $outcome = Outcome::create($validated);

            // Simpan semua detail jika ada
            if (!empty($details)) {
                foreach ($details as &$detail) {
                    $detail['outcome_id'] = $outcome->id; // assign foreign key
                }
                DetailOutcome::insert($details); // bulk insert
            }

            // Kurangi saldo
            $balance = Balance::findOrFail($validated['balance_id']);
            $balance->amount -= $validated['amount']; // karena ini pengeluaran
            $balance->save();

            DB::commit();

            return redirect()->route('outcome.index')->with('success', 'Pengeluaran berhasil ditambahkan.');
        } catch (\Throwable $e) {
            DB::rollBack();
            return back()->with('error', 'Terjadi kesalahan saat menyimpan data: ' . $e->getMessage());
        }
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
