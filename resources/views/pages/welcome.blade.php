@extends('layouts.frontend')

@section('content')
    <div class="text-center mt-5">
        <div class="container">
            <div>
                <h2 class="text-dark">
                    YOUR
                    <span class="fw-bolder ">
                        <em>GAME ZONE.</em>
                    </span>
                    ALWAYS ON.
                </h2>
            </div>
            <!-- Game Thumbnails -->
            <div class="my-4">
                <div class="row g-3">
                    @foreach ($games as $game)
                        <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
                            <a href="{{ route('games.show', $game->slug) }}" class="text-decoration-none w-100">
                                <div class="game-card position-relative shadow-sm border-0 overflow-hidden"
                                    style="aspect-ratio: 1/1;">

                                    <!-- Loader Spinner -->
                                    <div class="loader position-absolute top-50 start-50 translate-middle">
                                        <div class="spinner-border text-primary" role="status"
                                            style="width: 2rem; height: 2rem;">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>

                                    <!-- Lazy Image -->
                                    <img data-src="{{ asset($game->image) }}" alt="{{ $game->name }}"
                                        class="img-fluid lazy-image"
                                        style="object-fit: cover; width: 100%; height: 100%; opacity: 0; transition: opacity 0.6s ease;">

                                    <!-- Hover Overlay -->
                                    <div
                                        class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-2">
                                        <div class="overlay-bg position-absolute top-0 start-0 w-100 h-100"></div>
                                        <span
                                            class="text-white fw-semibold small position-relative z-1">{{ $game->name }}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    @endforeach
                </div>
            </div>
            {{-- Blog Section --}}
            <section class="blog-section py-5">
                <div class="container">
                    <h2 class="fw-bold text-center mb-5">Latest Blogs</h2>

                    <div class="row g-4">
                        @foreach ($blogs as $blog)
                            <div class="col-12 col-sm-6 col-lg-4">
                                <div class="card border-0 shadow-sm h-100 rounded-4 overflow-hidden blog-card">

                                    <!-- Blog Image -->
                                    <img src="{{ asset($blog->image) }}" alt="{{ $blog->title }}" class="card-img-top"
                                        style="height: 250px; object-fit: cover;">

                                    <div class="card-body d-flex  justify-content-between align-items-center">
                                        <!-- Blog Title -->
                                        <h5 class="card-title fw-bold text-truncate" style="max-width: 300px;">
                                            {{ $blog->title }}
                                        </h5>
                                        <!-- View Button -->
                                        <div>
                                            <a href="{{ route('blogs.show', $blog->title) }}"
                                                class="btn btn-sm btn-outline-primary rounded-pill px-4 py-1">
                                                <i class="bi bi-eye"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
        </div>
    </div>
@endsection
