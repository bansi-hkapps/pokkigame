<hr class="border-gray mt-5">
<footer class="pt-5 pb-3">
    <div class="container">
        <div class="row gy-4">
            <div class="col-md-3 col-sm-6">
                <h5 class="fw-bold mb-3">Resources</h5>
                <ul class="list-unstyled footer-links">
                    <li><a href="{{ url('/') }}" class="text-dark text-decoration-none">HOME</a></li>
                    <li><a href="{{ url('/aboutus') }}" class="text-dark text-decoration-none">ABOUT US</a></li>
                    <li><a href="{{ url('/developer') }}" class="text-dark text-decoration-none">DEVELOPER</a></li>
                    <li><a href="{{ url('/affiliates') }}" class="text-dark text-decoration-none">AFFILIATES</a></li>
                    <li><a href="{{ url('/privacy-policy') }}" class="text-dark text-decoration-none">PRIVACY POLICY</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6">
                <h5 class="fw-bold mb-3">Recent Games</h5>
                <ul class="list-unstyled footer-links">
                    <li><a href="#" class="text-dark text-decoration-none">STRIKE BOWLING</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">KNIFE HIT EMOJI</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">BLOCK BREAKER</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">SPEED BOAT</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">GOAL MASTER</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6">
                <h5 class="fw-bold mb-3">Top Games</h5>
                <ul class="list-unstyled footer-links">
                    <li><a href="#" class="text-dark text-decoration-none">LUDO ROYAL</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">LOVE'S QUEST</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">PET MERGE</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">BASKETBALL DUNK</a></li>
                    <li><a href="#" class="text-dark text-decoration-none">EMOJI BINGO</a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6">
                <button class="btn btn-primary btn-sm rounded-pill px-4 py-2">
                    CONTACT US
                </button>
            </div>
        </div>
    </div>
</footer>
<hr class="border-gray ">
<div class="container pb-2">
    <div class="d-flex justify-content-between">
        <div class="d-flex gap-3">
            <a href="#" class="text-dark fs-5"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-dark fs-5"><i class="bi bi-instagram"></i></a>
        </div>
        <div>
            Copyright © {{ date('Y') }} Pokiigame.com
        </div>
    </div>
</div>
