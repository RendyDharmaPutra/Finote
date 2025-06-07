<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('balances', function (Blueprint $table) {
            $table->id();  // kolom id untuk primary key
            $table->string('name');  // nama saldo
            $table->bigInteger('amount');  // jumlah saldo
            $table->string('user_id');  // referensi ke user (menggunakan string sesuai dengan di diagram)
            $table->timestamps();  // kolom created_at dan updated_at otomatis dari Laravel
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('balances');
    }
};
