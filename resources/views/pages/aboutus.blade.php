@extends('layouts.frontend')

@section('content')
    <div class="container mt-5">
        <div class="text-center">
            <img src="{{ asset('images/aboutus.jpg') }}" alt="About Us" class="img-fluid rounded shadow-sm"
                style="width: 100%; max-height: 450px; object-fit: cover;">
        </div>
        <div class="mt-5">
            <h2 class="text-primary fw-bold">About Pokii</h2>
            <div class="mt-3">
                <div>
                    Welcome to Pokiigame.com, web based gaming platform! With over 1000+ games accross 25+ categories we
                    provide exllent gaming experience to users.
                </div>
                <div class="mt-2">
                    At Pokiigame.com, we understand the power of gaming to create memorable experiences and forge
                    connections
                    between people. Whether you're a fan of cars or bike racing, adventure games, actionable and thrilling
                    games, we've covered everything for you.
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h2 class="text-primary fw-bold">Our Mission</h2>
            <div class="mt-3">
                <div>
                    Our mission is to provide smooth gaming experience where users can instant play to all our games without
                    downloads, login, popups or other distractions.
                </div>
                <div class="mt-2">
                    We pride ourselves on delivering a seamless and user-friendly gaming experience. Our website is designed
                    with intuitive navigation and responsive interfaces, ensuring that you can dive into your favorite games
                    with just a few clicks. We also prioritize your safety and security, implementing robust measures to
                    protect your personal information and provide a safe environment for all users.
                </div>
                <div class="mt-2">
                    Pokii Game is more than just a gaming platform; it's a vibrant community. Join our growing community of
                    gamers, where you can connect with like-minded individuals, share your achievements, and participate in
                    lively discussions. Engage in friendly competitions, collaborate with fellow players, or simply find a
                    place to relax and have fun.
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h2 class="text-primary fw-bold">Have any issue?</h2>
            <div class="mt-3">
                <div>
                    Our team of passionate people is dedicated to providing you with exceptional customer support. If you
                    ever encounter any issues or have any questions, our support team is here to assist you every step of
                    the way. We value your feedback and constantly strive to improve our platform based on your suggestions
                    and needs.
                </div>
                <div class="mt-2">
                    So, whether you're seeking an adrenaline rush, a mental challenge, or simply a momentary escape,
                    Pokiigame.com is your go-to destination. Prepare to embark on unforgettable gaming adventures and unlock
                    a world of limitless possibilities. Join us today and let the games begin!
                </div>
            </div>
        </div>
    </div>
@endsection
