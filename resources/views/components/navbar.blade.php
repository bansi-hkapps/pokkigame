<nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container d-flex align-items-center justify-content-between">

        <!-- Left: Logo -->
        <a class="navbar-brand" href="{{ url('/') }}">
            <img src="{{ asset('images/pokiigame.svg') }}" alt="MyWebsite Logo">
        </a>

        <!-- Right: Menu + Search -->
        <div class="d-flex align-items-center" style="gap: 5px;">
            <!-- 3-dot Toggler -->
            <button class="navbar-toggler border-0 p-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="bi bi-three-dots-vertical fs-4"></i>
            </button>

            <!-- Navbar Menu -->
            <div class="collapse navbar-collapse position-absolute end-0 mt-2 bg-white shadow-sm rounded-3 p-2"
                id="navbarNav" style="min-width: 250px; z-index: 1000;">
                <ul class="navbar-nav text-end nav-separated">
                    <li class="nav-item"><a class="nav-link {{ request()->is('/') ? 'active text-primary' : '' }}"
                            href="{{ url('/') }}">Home</a></li>
                    <li class="nav-item"><a class="nav-link {{ request()->is('aboutus') ? 'active text-primary' : '' }}"
                            href="{{ url('/aboutus') }}">About Us</a></li>
                    <li class="nav-item"><a
                            class="nav-link {{ request()->is('developer') ? 'active text-primary' : '' }}"
                            href="{{ url('/developer') }}">Developer</a></li>
                    <li class="nav-item"><a
                            class="nav-link {{ request()->is('affiliates') ? 'active text-primary' : '' }}"
                            href="{{ url('/affiliates') }}">Affiliates</a></li>
                    <li class="nav-item"><a
                            class="nav-link {{ request()->is('contactus') ? 'active text-primary' : '' }}"
                            href="{{ url('/contactus') }}">Contact Us</a></li>
                </ul>
            </div>

            <!-- Search button -->
            <button
                class="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center p-0"
                style="width: 32px; height: 32px;">
                <i class="bi bi-search"></i>
            </button>
            
        </div>
    </div>
</nav>
