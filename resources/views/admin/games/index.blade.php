@extends('admin.layouts.admin')

@section('title', 'All Blogs')

@section('content')
    <div class="container mt-4">
        <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="mb-0">All Games</h4>
                <a href="{{ route('admin.games.create') }}" class="btn btn-primary btn-sm">+ Add New Game</a>
            </div>

            <div class="card-body">

                {{-- 🔍 Search Form --}}
                <form method="GET" action="{{ route('admin.games.index') }}" class="row g-2 mb-3">
                    <div class="col-md-4">
                        <input type="text" name="search" value="{{ request('search') }}" class="form-control"
                            placeholder="Search by name ...">
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-outline-primary w-100">Search</button>
                    </div>
                    <div class="col-md-2">
                        <a href="{{ route('admin.games.index') }}" class="btn btn-outline-secondary w-100">Reset</a>
                    </div>
                </form>

                {{-- ✅ Blogs Table --}}
                <div class="table-responsive">
                    <table class="table table-bordered table-hover align-middle">
                        <thead class="table-dark">
                            <tr>
                                <th width="20">ID</th>
                                <th width="80">Image</th>
                                <th>Name</th>
                                <th>category</th>
                                <th width="170">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            @forelse($games  as $game)
                                <tr>
                                    <td>{{ $loop->iteration + ($games->currentPage() - 1) * $games->perPage() }}</td>

                                    {{-- 🖼️ Image --}}
                                    <td>
                                        @if ($game->image && file_exists(public_path($game->image)))
                                            <img src="{{ asset($game->image) }}" alt="Game Image" width="60"
                                                height="60" class="rounded" style="object-fit: cover;">
                                        @else
                                            <span class="text-muted">No Image</span>
                                        @endif
                                    </td>

                                    <td>{{ $game->name }}</td>
                                    <td class="text-uppercase">{{ $game->category }}</td>

                                    {{-- ✏️ Actions --}}
                                    <td>
                                        <a href="{{ route('admin.games.edit', $game->id) }}"
                                            class="btn btn-sm btn-warning">✏️ Edit</a>
                                        <form action="{{ route('admin.games.destroy', $game->id) }}" method="POST"
                                            class="d-inline">
                                            @csrf @method('DELETE')
                                            <button type="submit" class="btn btn-sm btn-danger"
                                                onclick="return confirm('Delete this blog?')">
                                                🗑️ Delete
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                            @empty
                                <tr>
                                    <td colspan="5" class="text-center text-muted py-3">No Games found.</td>
                                </tr>
                            @endforelse
                        </tbody>
                    </table>
                </div>

                {{-- 📄 Pagination --}}
                <div class="d-flex justify-content-center mt-3">
                    {{ $games->appends(request()->query())->links('pagination::bootstrap-5') }}
                </div>
            </div>
        </div>
    </div>
@endsection
