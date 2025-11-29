<div class="text-center my-5">
    <p class="game-text">READY TO PLAY YOUR</p>
    <span class="game-title" data-text="GAMING ZONE">GAMING ZONE</span>
</div>

<!-- Game Grid Section -->
<div class="container mb-5">
    <div class="row g-3 justify-content-center">
        @foreach ($games as $game)
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
                <a href="{{ route('games.show', $game->slug) }}" class="text-decoration-none w-100">
                    <div class="game-card position-relative shadow border-0 overflow-hidden rounded-4">

                        <!-- Lazy Load Image -->
                        <img data-src="{{ asset($game->image) }}" class="lazy-game-image" alt="{{ $game->name }}">

                        <!-- Hover Info -->
                        <div class="hover-overlay d-flex align-items-center justify-content-center">
                            <span class="text-white fw-bold">{{ $game->name }}</span>
                        </div>
                    </div>
                </a>
            </div>
        @endforeach
    </div>
</div>
