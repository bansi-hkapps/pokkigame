<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Game;

class GameController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->get('search');

        $games = Game::when($search, function ($query, $search) {
            $query->where('name', 'like', "%{$search}%");
        })
            ->orderByDesc('id')
            ->paginate(10); // 10 games per page

        return view('admin.games.index', compact('games'));
    }

    public function create()
    {
        return view('admin.games.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpg,jpeg,png,webp|max:2048',
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'tags' => 'nullable|string',
            'folder_path' => 'nullable|string'
        ]);


        // ✅ Store image in public/uploads/games
        $imageName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('uploads/games'), $imageName);

        Game::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'image' => 'uploads/games/' . $imageName,
            'description' => $request->description,
            'category' => $request->category,
            'tags' => $request->tags,
            'folder_path' => $request->folder_path
        ]);



        return redirect()->route('admin.games.index')->with('success', 'Game created successfully!');
    }

    public function edit(Game $game)
    {
        return view('admin.games.edit', compact('game'));
    }

    public function update(Request $request, Game $game)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'description' => 'nullable|string',
            'category' => 'nullable|string',
            'tags' => 'nullable|string',
            'folder_path' => 'nullable|string'
        ]);

        $data = [
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'description' => $request->description,
            'category' => $request->category,
            'tags' => $request->tags,
            'folder_path' => $request->folder_path
        ];

        // ✅ Update image only if a new one is uploaded
        if ($request->hasFile('image')) {
            $imageName = time() . '.' . $request->image->extension();
            $request->image->move(public_path('uploads/games'), $imageName);
            $data['image'] = 'uploads/games/' . $imageName;


            // Optional: delete old image if exists
            if (file_exists(public_path($game->image))) {
                unlink(public_path($game->image));
            }
        }

        $game->update($data);

        return redirect()->route('admin.games.index')->with('success', 'Game updated successfully!');
    }

    public function destroy(Game $game)
    {
        $game->delete();
        return redirect()->route('admin.games.index')->with('success', 'Game deleted successfully!');
    }
}
