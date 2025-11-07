@extends('layouts.frontend')

@section('content')
    <div class="container">
        <div
            style="background-image: url('{{ asset('images/grid_Frame.svg') }}'); 
            background-repeat: repeat; 
            background-size: contain; 
            min-height: 50vh;
            display: flex; 
            justify-content: center; 
            align-items: center;">

            <div class="text-center">
                <h2 class="fw-bold display-5 mb-4 mt-4 text-uppercase" style="font-style: italic;">
                    {{ $game->name }}
                </h2>


                <div class="d-flex justify-content-center mb-4">
                    <img src="{{ asset($game->image) }}" alt="Game Image" class="img-fluid "
                        style="max-height: 280px; object-fit: cover;">
                </div>

                <div class="mb-4">
                    <a href="{{ route('games.play', $game->slug) }}"
                        class="btn btn-primary rounded-pill fw-semibold mirror-btn"
                        style="font-size: 0.9rem; padding: 0.8rem 7rem;">
                        START GAME
                    </a>
                </div>

            </div>
        </div>
        <div class="game-desc mx-auto">
            <p class="game-description mt-5">{{ $game->description }}</p>
            <!-- Game Tags -->
            @if (!empty($game->tags))
                <div class="game-tags  mt-3">
                    @foreach (explode(',', $game->tags) as $tag)
                        <button type="button" class="btn btn-outline-secondary rounded-pill mx-1 mb-2">
                            {{ trim($tag) }}
                        </button>
                    @endforeach
                </div>
            @endif
        </div>
        <div class="mt-5">
            <div class="text-center">
                <h2 class="text-dark ">
                    YOUR
                    <span class="fw-bolder">
                        <em>GAME ZONE.</em>
                    </span>
                    ALWAYS ON.
                </h2>
            </div>
            <!-- Game Thumbnails -->
            <div class="my-4">
                <div class="row g-3">
                    @foreach ($games as $game)
                        <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
                            <a href="{{ route('games.show', $game->slug) }}" class="text-decoration-none w-100">
                                <div class="game-card position-relative shadow-sm border-0 overflow-hidden"
                                    style="aspect-ratio: 1/1;">

                                    <!-- Loader Spinner -->
                                    <div class="loader position-absolute top-50 start-50 translate-middle">
                                        <div class="spinner-border text-primary" role="status"
                                            style="width: 2rem; height: 2rem;">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>

                                    <!-- Lazy Image -->
                                    <img data-src="{{ asset($game->image) }}" alt="{{ $game->name }}"
                                        class="img-fluid lazy-image"
                                        style="object-fit: cover; width: 100%; height: 100%; opacity: 0; transition: opacity 0.6s ease;">

                                    <!-- Hover Overlay -->
                                    <div
                                        class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-2">
                                        <div class="overlay-bg position-absolute top-0 start-0 w-100 h-100"></div>
                                        <span
                                            class="text-white fw-semibold small position-relative z-1">{{ $game->name }}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection
