<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\GameController;
use App\Http\Controllers\FrontGameController;
use App\Http\Controllers\SubGameController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// fronted route
Route::get('/', [FrontGameController::class, 'index'])->name('home');
Route::get('/games/{slug}', [FrontGameController::class, 'show'])->name('games.show');
Route::get('/games/{slug}/play', [FrontGameController::class, 'play'])->name('games.play');
Route::get('/blog/{title}', [FrontGameController::class, 'showBlog'])->name('blogs.show');

Route::get('/aboutus', function () {
    return view('pages.aboutus');
});

Route::get('/developer', function () {
    return view('pages.developer');
});

Route::get('/affiliates', function () {
    return view('pages.affiliates');
});

Route::get('/contactus', function () {
    return view('pages.contactus');
});
Route::get('/privacy-policy', function () {
    return view('pages.privacy-policy');
});

// sub domain route
Route::domain('2002.pokkigame.com')->group(function () {
    Route::get('/', [SubGameController::class, 'index'])->name('sub.home');
    Route::get('/category/{slug}', [SubGameController::class, 'category']);
    Route::post('/earn-coins', [SubGameController::class, 'earnCoins'])->name('earn.coins');
    Route::post('/play-game/{id}', [SubGameController::class, 'playGame'])->name('play.game');
});


// Admin Routes (Protected)
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {

    Route::get('/', function () {
        return view('admin.dashboard');
    })->name('dashboard');

    Route::resource('blog', BlogController::class);
    Route::resource('games', GameController::class);
});

// Auth System Routes
Auth::routes();


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
