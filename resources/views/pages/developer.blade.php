@extends('layouts.frontend')

@section('content')
    <div class="container mt-5">
        <div class="text-center">
            <img src="{{ asset('images/developers.jpg') }}" alt="About Us" class="img-fluid rounded shadow-sm"
                style="width: 100%; max-height: 450px; object-fit: cover;">
        </div>
        <div class="mt-5">
            <h2 class="text-primary fw-bold">Developers - PokiiGame</h2>
            <div class="mt-3">
                <div>
                    PokiiGame is a top game development studio dedicated to making fun and interesting gaming experiences.
                    In addition to creating games, we also have expertise in gaming apps and responsive game design, which
                    ensures seamless platform integration.

                </div>
                <div class="mt-3">
                    Content creators on the PokiiGame platform have unparalleled control over their works. Posting,
                    publishing, tracking, and monetizing content is made simple by our user-friendly interface. But what
                    really sets us apart are the vibrant community and large number of visitors to PokiiGame.com, which give
                    creators unparalleled visibility and audience access.
                </div>
                <div class="mt-3">
                    Imagine having the ease to bring your creations to a global audience, monetize your labor of love, and
                    increase traffic to your games.
                </div>
                <div class="mt-3">
                    Developers can make a profitable business out of their passion for games with the aid of our platform.
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h2 class="text-primary fw-bold">Contact Us and Join Now</h2>
            <div class="mt-3">
                <div class="mt-3">
                    help.pokiigame@gmail.com
                </div>
            </div>
        </div>
    </div>
@endsection
