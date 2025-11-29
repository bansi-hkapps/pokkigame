@extends('layouts.frontend')

@section('content')
    <div class="text-center mt-5">
        <div class="container">

            <!-- Game Thumbnails -->
            <x-game-grid :games="$games" />

            {{-- Blog Section --}}
            <x-blog-section :blogs="$blogs" />

        </div>
    </div>
@endsection
