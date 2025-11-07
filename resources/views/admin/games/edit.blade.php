@extends('admin.layouts.admin')
@section('title', 'Edit Game')

@section('content')
    <div class="container mt-4">
        <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="mb-0">Edit Game</h4>
                <a href="{{ route('admin.games.index') }}" class="btn btn-secondary btn-sm">Back</a>
            </div>

            <div class="card-body">
                <form action="{{ route('admin.games.update', $game->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf @method('PUT')

                    <div class="mb-3">
                        <label class="form-label fw-bold">Name</label>
                        <input type="text" name="name" class="form-control" value="{{ $game->name }}" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Current Image</label><br>
                        <img src="{{ asset($game->image) }}" width="120" class="rounded mb-2">
                        <input type="file" name="image" class="form-control" accept="image/*">
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Description</label>
                        <textarea name="description" class="form-control" rows="4">{{ $game->description }}</textarea>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Tags</label>
                        <input type="text" name="tags" class="form-control" value="{{ $game->tags }}">
                    </div>

                    <!-- Category -->
                    <div class="mb-3">
                        <label class="form-label fw-bold">Category</label>
                        <select name="category" class="form-select" required>
                            <option value="" disabled>Select category</option>
                            <option value="action" {{ $game->category == 'action' ? 'selected' : '' }}>Action</option>
                            <option value="casual" {{ $game->category == 'casual' ? 'selected' : '' }}>Casual</option>
                            <option value="puzzle" {{ $game->category == 'puzzle' ? 'selected' : '' }}>Puzzle</option>
                            <option value="arcade" {{ $game->category == 'arcade' ? 'selected' : '' }}>Arcade</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Folder Path</label>
                        <input type="text" name="folder_path" class="form-control" value="{{ $game->folder_path }}">
                    </div>

                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Update Game</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
