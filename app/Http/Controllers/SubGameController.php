<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use Illuminate\Support\Facades\Session;

class SubGameController extends Controller
{
     public function index(Request $request)
    {
        $query = Game::query();

        // 🔍 If search keyword exists, filter by game name
        if ($request->has('search') && $request->search != '') {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        // 👇 your existing logic (unchanged)
        $games = $query->take(6)->get()->map(function ($game) {
            $game->entry_coins = 10; // static
            $game->users = rand(10, 50) . 'K'; // random users
            return $game;
        });

        $totalCoins = Session::get('coins', 0);

        return view('welcome', compact('games', 'totalCoins'));
    }

    public function category($slug)
    {
        $games = Game::where('category', $slug)
            ->take(6)
            ->get() // fetch the collection first
            ->map(function ($game) {
                $game->entry_coins = 10; // static
                $game->users = rand(10, 50) . 'K'; // random users
                return $game;
            });


        $totalCoins = Session::get('coins', 0);
        return view('category', compact('games', 'slug', 'totalCoins'));
    }

    public function earnCoins()
    {
        $coins = Session::get('coins', 0) + 10;
        Session::put('coins', $coins);
        return response()->json(['coins' => $coins]);
    }

    public function playGame($id)
    {
        $coins = Session::get('coins', 0);

        if ($coins < 10) {
            return response()->json(['status' => 'insufficient']);
        }

        $coins -= 10;
        Session::put('coins', $coins);
        return response()->json(['status' => 'success', 'coins' => $coins]);
    }
}
