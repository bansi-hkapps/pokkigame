@extends('admin.layouts.admin')

@section('title', 'Create Blog')

@section('content')
<div class="container mt-4">
    <div class="card shadow-sm">
        <div class="card-header d-flex justify-content-between align-items-center">
            <h4 class="mb-0">Create New Blog</h4>
            <a href="{{ route('admin.blog.index') }}" class="btn btn-secondary btn-sm">Back</a>
        </div>

        <div class="card-body">
            <form action="{{ route('admin.blog.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                {{-- Title --}}
                <div class="mb-3">
                    <label class="form-label fw-bold">Title</label>
                    <input type="text" name="title" class="form-control" placeholder="Enter blog title" required>
                </div>

                {{-- Image --}}
                <div class="mb-3">
                    <label class="form-label fw-bold">Featured Image</label>
                    <input type="file" name="image" class="form-control" accept="image/*" required>
                </div>

                {{-- Description (WYSIWYG Editor) --}}
                <div class="mb-3">
                    <label class="form-label fw-bold">Description</label>
                    <textarea name="description" id="summernote" class="form-control" rows="8"></textarea>
                </div>

                {{-- Submit --}}
                <div class="text-end">
                    <button type="submit" class="btn btn-primary">Create Blog</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
$(document).ready(function () {
    $('#summernote').summernote({
        height: 350,
        placeholder: 'Write your blog content here...',
        toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
            ['fontname', ['fontname']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['insert', ['link', 'picture', 'video', 'table', 'hr']],
            ['view', ['fullscreen', 'codeview', 'help']]
        ]
    });
});
</script>
@endsection

