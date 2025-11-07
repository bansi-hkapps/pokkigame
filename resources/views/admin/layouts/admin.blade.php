<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Admin Panel')</title>

    {{-- Bootstrap --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

    {{-- ✅ Summernote CSS must be in <head> --}}
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote-lite.min.css" rel="stylesheet">

    <style>
        body { min-height: 100vh; background: #f8fafc; overflow-x: hidden; }

        /* Sidebar */
        .sidebar {
            width: 250px;
            background-color: #1e293b;
            color: white;
            position: fixed;
            top: 0; left: 0;
            height: 100%;
            padding: 20px;
            transition: transform 0.3s ease;
            z-index: 1050;
        }
        .sidebar a {
            color: white;
            display: block;
            padding: 10px;
            border-radius: 5px;
            text-decoration: none;
        }
        .sidebar a.active,
        .sidebar a:hover {
            background-color: #334155;
        }

        @media (max-width: 992px) {
            .sidebar { transform: translateX(-100%); }
            .sidebar.show { transform: translateX(0); }
        }
        .content { margin-left: 250px; padding: 20px; }
        @media (max-width: 992px) { .content { margin-left: 0; } }

        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            position: absolute;
            top: 15px;
            right: 15px;
            display: none;
        }
        @media (max-width: 992px) { .close-btn { display: block; } }
    </style>
</head>

<body>
    @include('admin.components.sidebar')

    <nav class="navbar navbar-light bg-white shadow-sm sticky-top">
        <div class="container-fluid">
            <button class="btn btn-outline-dark d-lg-none" id="menu-toggle">☰</button>
            <span class="navbar-text ms-2 fw-bold">Admin Panel</span>
        </div>
    </nav>

    <div class="content">
        @yield('content')
    </div>

    {{-- ✅ jQuery must come first --}}
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    {{-- ✅ Bootstrap JS --}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    {{-- ✅ Summernote JS (Lite version works well with Bootstrap 5) --}}
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.20/dist/summernote-lite.min.js"></script>

    {{-- Sidebar toggle --}}
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.getElementById('menu-toggle');
        const closeBtn = document.getElementById('close-sidebar');

        if (toggleBtn && closeBtn) {
            toggleBtn.addEventListener('click', () => sidebar.classList.add('show'));
            closeBtn.addEventListener('click', () => sidebar.classList.remove('show'));
        }
    });
    </script>

    {{-- ✅ Allow page-specific scripts --}}
    @yield('scripts')
</body>
</html>
