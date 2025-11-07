<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();
             $table->string('name');
            $table->string('slug')->unique(); // for clean URL like /games/feed-the-frog
            $table->string('image')->nullable(); // cover image path
            $table->text('description')->nullable();
            $table->string('folder_path'); // folder where index.html is stored
            $table->json('tags')->nullable(); // ["puzzle", "arcade", "kids"]
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
};
