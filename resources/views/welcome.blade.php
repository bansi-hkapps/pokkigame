@extends('layouts.app')

@section('content')
    <!-- Coin Box -->
    <div class="coin-box text-center mb-4 border border-gray rounded p-4">
        <h5><span><img src="{{ asset('images/coin-earn.png') }}" style="height: 50px; width:50px margin-right:10px;"
                    alt=""></span> <span id="totalCoins">{{ $totalCoins }}</span></h5>
        <button class="btn-earn mt-2 w-100 py-2" id="earnCoinsBtn">🪙 EARN FREE COINS</button>
    </div>


    <!-- Search Bar -->
    <form method="GET" action="{{ route('sub.home') }}">
        <div class="input-group mb-3">
            <input type="text" name="search" value="{{ request('search') }}" class="form-control shadow-sm ps-4 pe-5 "
                placeholder="Search games...">
            <button type="submit" class="input-group-text" style="background: #7444ff"><i
                    class="bi bi-search fs-5 text-white "></i></button>
        </div>
    </form>

    <!-- Category Buttons -->
    <div class="mb-4">
        <p class="text-left fw-bold pages-text ">Pick game categories which you enjoy more!</p>

        <div class="d-flex flex-wrap  gap-2">
            <a href="/category/action"
                class="btn btn-outline-secondary rounded-pill   tag-btn text-decoration-none {{ request()->is('category/action') ? 'active' : '' }}">
                Action
            </a>

            <a href="/category/casual"
                class="btn btn-outline-secondary rounded-pill   tag-btn text-decoration-none {{ request()->is('category/casual') ? 'active' : '' }}">
                Casual
            </a>

            <a href="/category/puzzle"
                class="btn btn-outline-secondary rounded-pill  tag-btn text-decoration-none {{ request()->is('category/puzzle') ? 'active' : '' }}">
                Puzzle
            </a>

            <a href="/category/arcade"
                class="btn btn-outline-secondary rounded-pill   tag-btn text-decoration-none {{ request()->is('category/arcade') ? 'active' : '' }}">
                Arcade
            </a>
        </div>
    </div>

    <!-- Game List -->
    <div class="">
        @forelse($games as $game)
            <div class="col-12">
                <div class="game-card p-2 d-flex align-items-start">
                    <!-- LEFT: ICON -->
                    <img src="{{ asset($game->image) }}" class="game-thumb me-3" alt="{{ $game['name'] }}">

                    <!-- RIGHT CONTENT -->
                    <div class="flex-grow-1 p-2">

                        <!-- NAME + ENTRY -->
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="fw-bold mb-1">{{ $game['name'] }}</h6>
                            <span class="text-muted small fw-semibold">
                                Entry
                            </span>
                        </div>

                        <!-- USERS + ENTRY FEE -->
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-success fw-semibold " style="font-size: 12px">
                                ● {{ $game['users'] }} Users
                            </small>
                            <small class="text-dark fw-semibold">
                                <img src="{{ asset('images/coin.webp') }}" alt=""> {{ $game['entry_coins'] }}
                            </small>
                        </div>

                        <!-- BUTTON -->
                        <a href="#" class="btn btn-sm play-btn mt-2 rounded-pill fw-semibold w-100"
                            data-id="{{ $game['id'] }}" data-slug="{{ $game['slug'] }}">
                            PLAY GAME
                        </a>
                    </div>
                </div>
            </div>
        @empty
            <div class="text-center py-5">No games found.</div>
        @endforelse
    </div>

    <!-- More Games Button -->
    @if (count($games) >= 6)
        <div class="text-center mt-4 ">
            <a href="/" class="btn text-white rounded-pill py-2 w-100 " style="background: #7444ff">
                MORE GAMES
            </a>
        </div>
    @endif

    <!-- About -->
    <div class="mt-4">
        <h3 class="fw-bold ">About The Study IQ</h3>
        <div class="clone-text">
            It is a long established fact that a reader will be
            distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here',
            making it look like readable English.
        </div>
       <div class="related-box p-3 mt-4">

    <!-- Header -->
    <div class="related-header text-center text-white fw-bold py-3 mb-3">
        Discover related topics
    </div>

    <!-- List Items -->
    <div class="related-list">
        <div class="related-item">
            1000 Free Games to Play Download
            <img src="{{ asset('images/Vector.png') }}" alt="">
        </div>

        <div class="related-item">
            1000 Free Games to Play
            <img src="{{ asset('images/Vector.png') }}" alt="">
        </div>

        <div class="related-item">
            1000 Free Games to Play for Boy
            <img src="{{ asset('images/Vector.png') }}" alt="">
        </div>

        <div class="related-item">
            Eureka 1000 Free Games
            <img src="{{ asset('images/Vector.png') }}" alt="">
        </div>

        <div class="related-item">
            Free Online Games
            <img src="{{ asset('images/Vector.png') }}" alt="">
        </div>
    </div>
</div>

    </div>
    <hr>
    <!-- Footer -->
    <div class="d-flex justify-content-between" style="color:#7444ff; text-decoration: none;">
        <div>
            <a href="/privacy-policy" target="_blank" style="text-decoration:none; color:#7444ff;">Privacy Policy</a>
        </div>
        <div>
            <a href="/" target="_blank" style="text-decoration:none; color:#7444ff;">thestudyiq.com</a>
        </div>
    </div>

    <!-- Watch Video Modal -->
    <div class="modal fade" id="watchVideoModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center p-4">
                <h5>You don't have enough coins to join this contest.</h5>
                <p>Watch an ad to earn free coins</p>
                <div class="d-flex justify-content-center gap-3 mt-3">
                    <button class="btn btn-primary px-5" style="background: #7444ff" id="watchVideoBtn">WATCH VIDEO</button>
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Skip</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            // 🪙 Load coins from localStorage on page load
            let storedCoins = localStorage.getItem('totalCoins');
            if (storedCoins !== null) {
                $('#totalCoins').text(storedCoins);
            }

            // ✅ Helper function — Update both UI + localStorage
            function updateCoins(newTotal) {
                $('#totalCoins').text(newTotal);
                localStorage.setItem('totalCoins', newTotal);
            }

            // ✅ Earn Coins Button (add +10 each time)
            $('#earnCoinsBtn').click(function() {
                let current = parseInt($('#totalCoins').text());
                let newTotal = current + 10;
                updateCoins(newTotal);
                alert("You earned 10 more coins!");
            });

            // ✅ Play Game Button
            $('.play-btn').click(function(e) {
                e.preventDefault();
                let gameId = $(this).data('id');
                let gameSlug = $(this).data('slug');
                let total = parseInt($('#totalCoins').text());

                if (total <= 0) {
                    // Not enough coins → show modal
                    $('#watchVideoModal').data('slug', gameSlug).modal('show');
                } else {
                    // ✅ Deduct 10 coins
                    let newTotal = total - 10;
                    updateCoins(newTotal);

                    // ✅ Open game in new tab
                    const redirectUrl = "/games/" + gameSlug;
                    window.open(redirectUrl, '_blank');
                }
            });

            // ✅ Watch Video (earn +10 coins)
            $('#watchVideoBtn').click(function() {
                $(this).blur();
                let current = parseInt($('#totalCoins').text());
                let newTotal = current + 10;
                updateCoins(newTotal);
                $('#watchVideoModal').modal('hide');
                alert("You watched a video and earned 10 coins!");
            });

            // ✅ Skip Button → open game in new tab and deduct 10 coins
            $('#watchVideoModal .btn.btn-secondary').click(function() {
                $(this).blur();
                const gameSlug = $('#watchVideoModal').data('slug');
                if (gameSlug) {
                    let total = parseInt($('#totalCoins').text());
                    if (total > 0) {
                        let newTotal = total - 10;
                        updateCoins(newTotal);
                    }

                    const redirectUrl = "/games/" + gameSlug;
                    window.open(redirectUrl, '_blank');
                    $('#watchVideoModal').modal('hide');
                }
            });

        });
    </script>
@endsection
