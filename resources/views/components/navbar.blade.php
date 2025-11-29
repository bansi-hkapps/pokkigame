<nav class="navbar navbar-expand-lg navbar-light bg-white  sticky-top">
    <div class="container-custom py-2 px-4 bg-purple d-flex align-items-center justify-content-between">

        <!-- Logo -->
        <a class="navbar-brand" href="/">
            <img src="{{ asset('images/logo.webp') }}" alt="Logo" style="height: 50px;">
        </a>

        <!-- Toggler -->
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
            <i class="bi bi-three-dots-vertical fs-4 text-white"></i>
        </button>

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbarMenu" style="transition: .3s;">

            <ul class="navbar-nav ms-auto mb-3 mb-lg-0 text-center text-lg-start">
                <li class="nav-item">
                    <a class="nav-link {{ request()->is('/') ? 'active text-white' : '' }}" href="{{ url('/') }}">
                        Home
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->is('aboutus') ? 'active text-white' : '' }}" href="/aboutus">
                        About Us
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->is('developer') ? 'active text-white' : '' }}" href="/developer">
                        Developer
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->is('affiliates') ? 'active text-white' : '' }}" href="/affiliates">
                        Affiliates
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link {{ request()->is('contactus') ? 'active text-white' : '' }}" href="/contactus">
                        Contact Us
                    </a>
                </li>
            </ul>

            <!-- Search input -->
            <div class="search-box position-relative mt-3 mt-lg-0 ms-lg-3">
                <input type="text" class="form-control text-white rounded-pill ps-5 border-0 custom-search"
                    style="background-color:#FFFFFF40;" placeholder="Search Games...">
                <i class="bi bi-search text-white position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            </div>
        </div>
    </div>
</nav>
