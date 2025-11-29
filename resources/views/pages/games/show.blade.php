@extends('layouts.frontend')

@section('content')
    <div class="container my-4">

        <div class="row align-items-center mb-5">

            <!-- LEFT: IMAGE -->
            <div class="col-md-5 text-center mb-4 mb-md-0">
                <img src="{{ asset($game->image) }}" alt="{{ $game->name }}" class="img-fluid"
                    style="max-height: 300px; object-fit: cover;">
            </div>

            <!-- RIGHT: TITLE + BUTTON -->
            <div class="col-md-7 text-center">

                <h2 class="fw-semibold display-5 mb-3 text-uppercase" style="font-style: italic;">
                    {{ $game->name }}
                </h2>

                <a href="{{ route('games.play', $game->slug) }}" class="btn btn-primary rounded-pill fw-semibold"
                    style="font-size: 1rem; padding: 0.9rem 5rem; background-color:#7444FF;">
                    START GAME
                </a>

            </div>
        </div>

        <div class="game-desc">
            <p class="game-description mt-5">{{ $game->description }}</p>
            <!-- Game Tags -->
            @if (!empty($game->tags))
                <div class="game-tags  mt-3">
                    @foreach (explode(',', $game->tags) as $tag)
                        <button type="button" class="btn btn-outline-secondary rounded-pill mx-1 mb-2 tag-btn">
                            {{ trim($tag) }}
                        </button>
                    @endforeach
                </div>
            @endif
        </div>
        <!-- Game Thumbnails -->
        <x-game-grid :games="$games" />
    </div>
@endsection
