<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('lecturers', function (Blueprint $table) {
            $table->id();
            $table->string('nidn', 10)->unique();
            $table->string('full_name', 150);
            $table->string('slug', 150)->unique()->nullable();
            $table->string('email', 150)->unique();
            $table->string('education', 255)->nullable();
            $table->string('research_focus', 255)->nullable();
            $table->string('photo', 255)->nullable();
            $table->string('phone_number', 20)->nullable();
            $table->text('address')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lecturers');
    }
};
