@extends('admin.layouts.admin')
@section('title', 'Create Game')

@section('content')
    <div class="container mt-4">
        <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="mb-0">Create New Game</h4>
                <a href="{{ route('admin.games.index') }}" class="btn btn-secondary btn-sm">Back</a>
            </div>

            <div class="card-body">
                <form action="{{ route('admin.games.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf

                    <div class="mb-3">
                        <label class="form-label fw-bold">Name</label>
                        <input type="text" name="name" class="form-control" placeholder="Enter game name" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Game Image</label>
                        <input type="file" name="image" class="form-control" accept="image/*" required>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Description</label>
                        <textarea name="description" class="form-control" rows="4" placeholder="Enter game description"></textarea>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Tags</label>
                        <input type="text" name="tags" class="form-control" placeholder="Action, Puzzle, Racing...">
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Category</label>
                        <select name="category" class="form-select" required>
                            <option value="" disabled selected>Select category</option>
                            <option value="action">Action</option>
                            <option value="casual">Casual</option>
                            <option value="puzzle">Puzzle</option>
                            <option value="arcade">Arcade</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label fw-bold">Folder Path</label>
                        <input type="text" name="folder_path" class="form-control"
                            placeholder="e.g. games/frog-adventure">
                    </div>

                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Create Game</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
