<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokkigame</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">

    <style>
        :root {
            --font-sans: "myfont", sans-serif;
            --color-gradient-blue: #1877f2f0;
            --color-brand-pure-white: #fff;
            --bg-gradient: linear-gradient(25deg, var(--color-gradient-blue) 10%, var(--color-brand-pure-white) 45%);
        }

        body {
            /* keeps background static */
            margin: 0;
        }

        .main-page {
            font-family: var(--font-sans);
            background: var(--bg-gradient);
            background-attachment: fixed;
        }

        .navbar-nav .nav-link {
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-size: 15px;
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .navbar-nav .nav-link:hover {
            text-decoration: underline;
            text-decoration-color: black;
        }

        /* Vertical separator between nav items */
        .nav-separated .nav-item:not(:last-child) {
            border-right: 1.5px solid #ddd;
            margin-right: 12px;
            padding-right: 12px;
        }

        /* Mobile view - separators off, stacked links */
        @media (max-width: 992px) {
            .nav-separated .nav-item {
                border-right: none;
                border-bottom: 1px solid #eee;
                margin: 0;
                padding: 8px 0;
            }

            .nav-separated .nav-item:last-child {
                border-bottom: none;
            }
        }

        /* Desktop menu inline (no absolute collapse) */
        @media (min-width: 992px) {
            #navbarNav {
                position: static !important;
                background: transparent !important;
                box-shadow: none !important;
                padding: 0 !important;
            }

            .navbar-nav {
                flex-direction: row;
                align-items: center;
            }
        }

        .game-card {
            position: relative;
            overflow: hidden;
            border-radius: 20px;
        }

        .game-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .game-card .overlay {
            position: absolute;
            inset: 0;
            opacity: 0;
            transition: all 0.3s ease;
        }

        .game-card .overlay-bg {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top right,
                    rgba(0, 136, 255, 0.85) 0%,
                    /* deep blue base */
                    rgba(0, 191, 255, 0.55) 35%,
                    /* lighter neon blue */
                    rgba(0, 191, 255, 0.0) 80%
                    /* fade to transparent */
                );
            opacity: 1;
            border-radius: inherit;
            z-index: 0;
            transition: all 0.3s ease;
        }

        .loader {
            z-index: 2;
        }

        .game-card .overlay span {
            position: absolute;
            bottom: 10px;
            left: 10px;
            color: #fff;
            font-weight: 700;
            font-size: 0.9rem;
            z-index: 1;
            text-transform: uppercase;
            line-height: 1.1;
        }

        /* Show overlay on hover */
        .game-card:hover .overlay {
            opacity: 1;
        }

        .footer-links li {
            margin-bottom: 8px;
            font-size: 15px
        }

        .footer-links li:hover {
            text-decoration: underline;
        }

        .mirror-btn {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .mirror-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -75%;
            width: 10%;
            height: 100%;
            background: linear-gradient(120deg,
                    rgba(255, 255, 255, 0.2) 0%,
                    rgba(255, 255, 255, 0.6) 50%,
                    rgba(255, 255, 255, 0.2) 100%);
            transform: skewX(-25deg);
        }

        .mirror-btn:hover::before {
            animation: shine 0.9s forwards;
        }

        @keyframes shine {
            100% {
                left: 125%;
            }
        }

        .game-description {
            white-space: pre-line;
            line-height: 1.4;
        }

        .game-desc {
            max-width: 700px;

        }
    </style>
</head>

<body class="{{ request()->is('/') ? 'main-page' : '' }}">


    {{-- Include Navbar --}}
    @include('components.navbar')

    {{-- Main Content --}}
    <main class="">
        @yield('content')
    </main>

    {{-- Include Footer --}}
    @include('components.footer')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- JS for Lazy Loading -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const lazyImages = document.querySelectorAll(".lazy-image");

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const loader = img.parentElement.querySelector('.loader');

                        // Start loading image only when it appears in view
                        img.src = img.dataset.src;

                        img.onload = () => {
                            // Hide loader and fade in image
                            img.style.opacity = "1";
                            if (loader) loader.style.display = "none";
                        };

                        // Stop observing once loaded
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: "200px 0px", // preload slightly before it appears
                threshold: 0.1
            });

            lazyImages.forEach(img => observer.observe(img));
        });
    </script>
</body>

</html>
