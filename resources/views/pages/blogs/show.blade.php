@extends('layouts.frontend')

@section('content')
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-lg-8">

                <!-- Blog Title -->
                <h1 class="fw-bold text-center mb-3">{{ $blog->title }}</h1>
                <p class="text-muted text-center mb-4">
                    Published on {{ $blog->created_at->format('F d, Y') }}
                </p>

                <!-- Blog Image -->
                @if ($blog->image)
                    <div class="text-center mb-4">
                        <img src="{{ asset($blog->image) }}" alt="{{ $blog->title }}" class="img-fluid rounded-4 shadow-sm"
                            style="max-height: 450px; object-fit: cover;">
                    </div>
                @endif

                <!-- Blog Description (Rich Text / HTML Supported) -->
                <div class="blog-content-box bg-white shadow-sm rounded-4 p-4 fs-5 lh-lg">
                    {!! $blog->description !!}
                </div>


            </div>
        </div>
    </div>
@endsection
