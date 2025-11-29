<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Game;
use App\Models\Blog;

class FrontGameController extends Controller
{
    // Show all games (Home page)
    public function index()
    {
        $games = Game::orderBy('created_at', 'desc')->get();
        $blogs = Blog::orderBy('created_at', 'desc')->get();
        return view('pages.welcome', compact('games', 'blogs'));
    }

    // Show single game page
    public function show($slug)
    {
        $game = Game::where('slug', $slug)->firstOrFail();
        $games = Game::where('id', '!=', $game->id)->orderBy('created_at', 'desc')->get();
        return view('pages.games.show', compact('game', 'games'));
    }

    //... Play page (loads game folder)
    public function play($slug)
    {
        $game = Game::where('slug', $slug)->firstOrFail();

        // Normalize path
        $folderPath = trim($game->folder_path, '/');

        // Build the full public URL
        $gameUrl = url("/{$folderPath}/index.html");
        // Redirect the user to the actual game file
        return redirect()->away($gameUrl);
    }

    public function showBlog($title)
    {
        // Find the blog by slug or title
        $blog = Blog::where('title', $title)->firstOrFail();

        // Optional: Get related blogs
        $relatedBlogs = Blog::where('id', '!=', $blog->id)
            ->latest()
            ->take(3)
            ->get();

        // Return to the view
        return view('pages.blogs.show', compact('blog', 'relatedBlogs'));
    }
}
