@extends('admin.layouts.admin')

@section('title', 'Edit Blog')

@section('content')
    <div class="container mt-4">
        <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4 class="mb-0">Edit Blog</h4>
                <a href="{{ route('admin.blog.index') }}" class="btn btn-secondary btn-sm">Back</a>
            </div>

            <div class="card-body">
                <form action="{{ route('admin.blog.update', $blog->id) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')

                    {{-- Title --}}
                    <div class="mb-3">
                        <label class="form-label fw-bold">Title</label>
                        <input type="text" name="title" class="form-control" value="{{ $blog->title }}" required>
                    </div>

                    {{-- Image --}}
                    <div class="mb-3">
                        <label class="form-label fw-bold">Featured Image</label><br>
                        @if ($blog->image)
                            <img src="{{ asset($blog->image) }}" alt="Current Image" width="150"
                                class="mb-2 rounded">
                        @endif
                        <input type="file" name="image" class="form-control" accept="image/*">
                        <small class="text-muted">Upload only if you want to change the image.</small>
                    </div>

                    {{-- Description --}}
                    <div class="mb-3">
                        <label class="form-label fw-bold">Description</label>
                        <textarea name="description" id="summernote" class="form-control" rows="8">{{ $blog->description }}</textarea>
                    </div>

                    {{-- Submit --}}
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Update Blog</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script>
        $(document).ready(function() {
            $('#summernote').summernote({
                height: 350,
                placeholder: 'Write your blog content here...',
                toolbar: [
                    ['style', ['style']],
                    ['font', ['bold', 'italic', 'underline', 'clear']],
                    ['para', ['ul', 'ol', 'paragraph']],
                    ['insert', ['link', 'picture', 'video']],
                    ['view', ['fullscreen', 'codeview', 'help']]
                ]
            });
        });
    </script>
@endsection
