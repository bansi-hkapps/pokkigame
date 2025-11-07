<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Game extends Model
{
    use HasFactory;
     protected $fillable = [
        'name', 'slug', 'image', 'description', 'folder_path', 'tags','category'
    ];

    protected $casts = [
        'tags' => 'array',
    ];

    // Auto-generate slug when creating
    protected static function booted()
    {
        static::creating(function ($game) {
            if (empty($game->slug)) {
                $game->slug = Str::slug($game->name);
            }
        });
    }
}
