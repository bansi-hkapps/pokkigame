<footer class="container my-5">

    <div class="footer-section">

        <div class="row gy-4">
            <div class="col-md-4 col-sm-6">
                <h5 class="footer-title">Resources</h5>
                <ul class="list-unstyled footer-links">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/aboutus">ABOUT US</a></li>
                    <li><a href="/developer">DEVELOPERS</a></li>
                    <li><a href="/affiliates">AFFILIATES</a></li>
                    <li><a href="/privacy-policy">PRIVACY POLICY</a></li>
                </ul>
            </div>

            <div class="col-md-4 col-sm-6">
                <h5 class="footer-title">Recent Games</h5>
                <ul class="list-unstyled footer-links">
                    <li><a href="#">STRIKE BOWLING</a></li>
                    <li><a href="#">KNIFE HIT EMOJI</a></li>
                    <li><a href="#">BLOCK BREAKER</a></li>
                    <li><a href="#">SPEED BOAT</a></li>
                    <li><a href="#">GOAL MASTER</a></li>
                </ul>
            </div>

            <div class="col-md-4 col-sm-6">
                <h5 class="footer-title">Top Games</h5>
                <ul class="list-unstyled footer-links">
                    <li><a href="#">LUDO ROYAL</a></li>
                    <li><a href="#">LOVE'S QUEST</a></li>
                    <li><a href="#">PET MERGE</a></li>
                    <li><a href="#">BASKETBALL DUNK</a></li>
                    <li><a href="#">EMOJI BINGO</a></li>
                </ul>
            </div>


        </div>

        <!-- Logo and bottom -->
        <div class="row mt-4 align-items-center">

            <div class="col-md-6 col-sm-6 d-flex justify-content-start">
                <img src="{{ asset('images/logo.webp') }}" class="footer-logo" alt="Logo">
            </div>

            <div class="col-md-6 col-sm-6 d-flex justify-content-end">
                <button class="footer-btn">CONTACT US</button>
            </div>

        </div>


        <div class="footer-bottom d-flex justify-content-between align-items-center">
            <div class="footer-social d-flex gap-3">
                <i class="bi bi-facebook"></i>

                <i class="bi bi-instagram"></i>
            </div>

            <div>
                Copyright © {{ date('Y') }} TheStudyIQ.com
            </div>
        </div>

    </div>
</footer>
