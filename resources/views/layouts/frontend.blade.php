<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Study IQ</title>
    <link href="https://fonts.googleapis.com/css2?family=Iceland&display=swap" rel="stylesheet">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    <style>
        :root {
            --font-sans: "myfont", sans-serif;
        }

        body {
            margin: 0;
        }
        
    </style>
</head>

<body>


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
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".lazy-game-image").forEach(img => {
                img.src = img.getAttribute("data-src");
            });
        });
    </script>
</body>

</html>
