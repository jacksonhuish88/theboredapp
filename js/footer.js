document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <!-- Company Info -->
                <div class="col-md-6">
                    <div class="footer-brand d-flex align-items-center">
                        <i class="fa-solid fa-xl fa-hand-spock nav-overview-title icon-large"></i>
                        <h2 class="nav-overview-title ms-2">The Bored App</h2>
                    </div>
                    <p>Our squad tackles your downtime with the enthusiasm of a kid in a candy store. From boredom-busting maps to swipe-and-chat features, we coddle your leisure time like a precious gem. We're all about the laid-back fun, so leave the yawns to your favorite boring TV shows.</p>
                    <a href="#" class="btn btn-primary">Leave a Review!</a>
                </div>              
            
                <!-- Features -->
                <div class="col-md-3">
                    <h5 class="nav-overview-title">Services</h5>
                    <ul class="list-unstyled">
                        <li><a href="#map">Map</a></li>
                        <li><a href="#swipe">Swipe</a></li>
                        <li><a href="#message">Message</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-md-2">
                    <h5 class="nav-overview-title">Contact</h5>
                    <div class="footer-brand d-flex align-items-center">
                    <i style="font-size:1.5rem" class="fa-solid fa-sm fa-envelope text-white me-2 nav-overview-title"></i>
                    <p style="margin-top:12px"><a href="mailto:admin@theboredapp.com">admin@theboredapp.com</a></p>
                    </div>
                    <address>555 Country Cottage Drive, Wasatch County, UT</address>
                    <!-- Social Media Icons -->
                    <div class="social-media">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>`;

    // Assuming you want to insert this into a specific element on your page:
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
