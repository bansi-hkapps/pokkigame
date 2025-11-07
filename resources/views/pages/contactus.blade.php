@extends('layouts.frontend')

@section('content')
    <div class="container mt-5">
        <div class="text-center">
            <img src="{{ asset('images/contact.jpg') }}" alt="About Us" class="img-fluid rounded shadow-sm"
                style="width: 100%; max-height: 450px; object-fit: cover;">
        </div>

        <div class="mt-5">
            <h2 class="text-primary fw-bold">Contact Us </h2>
            <div class="mt-3">
                <div>
                    help.pokiigame@gmail.com
                </div>
                <div class="mt-3">
                    <button class="btn btn-primary btn-sm rounded-pill px-4 py-2 fw-bold">
                        Write Us
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h2 class="text-primary fw-bold">Copy Right Issue</h2>
            <div class="mt-3">
                <div>
                    We own the Intellectual Property Rights (IPR) to a large number of the games on Pokiigame.com' sites,
                    and for certain games, we requested and obtained licenses from the copyright holders known to us. For
                    some games, we could not find any copyright information, or, due to general use on the internet, this
                    information can no longer be obtained.
                </div>
                <div class="mt-2">
                    Some games may be used under special conditions, considering a number of prerequisite constraints. These
                    prerequisite constraints are, as far as we could determine, met by Pokiigame.
                </div>
                <div class="mt-2">
                    We do not change anything in the source code of the games. For example, credit holders, brand names, or
                    references to websites remain unchanged. If any copyright or other IPR that you may have is possibly
                    being infringed by/on Pokkigame sites, please inform us immediately, thereby providing us with the
                    following:
                </div>
                <div class="mt-2">
                    <ul>
                        <li>the electronic or physical signature of the owner of the IPR or the person authorized to act on
                            the owner's behalf;</li>
                        <li>a description of the IP Right that has been infringed, and a description of the infringing
                            activity;</li>
                        <li>the location where the unauthorized copy of the copyrighted work exists (for example, the URL of
                            the Pokiigame website where it is posted, or the name of the book in which it has been
                            published, or, in case of a registered brand name, an excerpt of such register evidencing the
                            registry);</li>
                        <li>a copy of a license in which you are granted the right to use and to protect such IPR (if you
                            are not the owner of the IPR);</li>
                        <li>the identification of the URL or other specific location on this site where the material that
                            you claim is infringing is located; this information must be specific enough to enable us to
                            locate such material;</li>
                        <li>your name and full contact details; and</li>
                        <li>a statement by you that you have a sincere and honest belief that the disputed use is not
                            authorized by the copyright owner, its agent, or the law.</li>

                    </ul>
                </div>
                <div class="mt-2">
                    Send above details at help.pokiigame@gmail.com. We will review it and will start taking action on it as
                    soon as possible. We will reply you on any of the query within 7 days.
                </div>
            </div>
        </div>
    </div>
@endsection
