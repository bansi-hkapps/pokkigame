@extends('layouts.frontend')

@section('content')
    <div class="container my-4">
        <div class=" justify-content-center">

            {{-- <p class="text-muted text-center mb-4">
                    Published on {{ $blog->created_at->format('F d, Y') }}
                </p> --}}

            <!-- Blog Image -->
            @if ($blog->image)
                <div class="text-center">
                    <img src="{{ asset($blog->image) }}" alt="{{ $blog->title }}" class="img-fluid">
                </div>
            @endif
            
            <!-- Blog Title -->
            <h1 class="fw-bold mt-4 text-start ">{{ $blog->title }}</h1>

            <!-- Blog Description (Rich Text / HTML Supported) -->
            <div class="blog-content-box fs-5 lh-lg mt-4 ">
                {!! $blog->description !!}
            </div>

            {{-- Blog Section --}}
            <x-blog-section :blogs="$relatedBlogs" />


        </div>
    </div>
@endsection
