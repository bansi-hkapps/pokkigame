<div class="sidebar">
    <!-- Close button (visible on mobile) -->
    <button id="close-sidebar" class="close-btn">&times;</button>

    <h4 class="mb-4 mt-4">🛠️ Admin Panel</h4>

    <nav>
        <a href="{{ route('admin.dashboard') }}" class="{{ request()->is('admin') ? 'active' : '' }}">🏠 Dashboard</a>
        <a href="{{ route('admin.games.index') }}" class="mt-1 {{ request()->is('admin/games*') ? 'active' : '' }}">🎮 Games</a>
        <a href="{{ route('admin.blog.index') }}" class="mt-1 {{ request()->is('admin/blog*') ? 'active' : '' }}">📝 Blogs</a>
        <a href="{{ url('/') }}" class="mt-1">Logout</a>
    </nav>
</div>
