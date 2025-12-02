<div class="sidebar">
    <!-- Close button (visible on mobile) -->
    <button id="close-sidebar" class="close-btn">&times;</button>

    <h4 class="mb-4 mt-4">🛠️ Admin Panel</h4>

    <nav>
        <a href="{{ route('admin.dashboard') }}" class="{{ request()->is('admin') ? 'active' : '' }}">
            <i class="bi bi-speedometer2 me-2"></i> Dashboard
        </a>

        <a href="{{ route('admin.games.index') }}" class="mt-1 {{ request()->is('admin/games*') ? 'active' : '' }}">
            <i class="bi bi-controller me-2"></i> Games
        </a>

        <a href="{{ route('admin.blog.index') }}" class="mt-1 {{ request()->is('admin/blog*') ? 'active' : '' }}">
            <i class="bi bi-journal-text me-2"></i> Blogs
        </a>

        <a class="mt-1" href="{{ route('logout') }}"
            onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
            <i class="bi bi-box-arrow-right me-2"></i> Logout
        </a>
    </nav>
</div>

<form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
    @csrf
</form>
