<section class="blog-section py-5">
    <div class="container">
        <h1 class="fw-bold mb-5" style="text-align: left;">Latest Blogs</h1>

        <div class="row g-4">
            @foreach ($blogs as $blog)
                <div class="col-12 col-sm-6 col-lg-4">
                    <div class="blog-card exact-card">
                        <div class="image-area">
                            <img src="{{ asset($blog->image) }}" class="card-img-top" alt="{{ $blog->title }}">

                            <div class="bottom-info-box">
                                <h5 class="info-title">{{ $blog->title }}</h5>
                                <a href="{{ route('blogs.show', $blog->title) }}" class="info-arrow">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
</section>
