import React from 'react';

const namespaces = {
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  };

const names2 ={
    "xml:space":"preserve"
            
}

const Footer = () => {
    return(
        <footer class="position-relative" id="footer-main">
        <div class="footer pt-lg-7 footer-dark bg-dark">
            {/* <!-- SVG shape -->
             */}
            <div class="shape-container shape-line shape-position-top shape-orientation-inverse">
                <svg width="2560px" height="100px" 
                xmlns="http://www.w3.org/2000/svg" 
             {...namespaces}
                preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 2560 100" 
                style={{enableBackground:"new 0 0 2560 100"}} 
                {...names2} 
                class=" fill-section-secondary">
                    <polygon points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
            {/* <!-- Footer --> */}
            <div class="container pt-4">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        {/* <!-- Theme's logo --> */}
                    <h3 style={{color:"white"}}>Elesarr</h3>
                        {/* <!-- Webpixels' mission --> */}
                        <p class="mt-4 text-sm opacity-8 pr-lg-4">
                            Webpixels attempts to bring the best development 
                            experience to designers and developers by offering the tools 
                            needed for having a quick and solid start in most web projects.</p>
                        {/* <!-- Social --> */}
                        <ul class="nav mt-4">
                            <li class="nav-item">
                                <a 
                                    class="nav-link pl-0" 
                                    href="#" target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fab fa-dribbble"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a 
                                    class="nav-link" 
                                    href="#" 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a 
                                    class="nav-link" 
                                    href="#" 
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" 
                                href="#" 
                                target="_blank"
                                rel="noopener noreferrer">
                                    <i class="fab fa-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">About</h6>
                        <ul class="list-unstyled">
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 class="heading mb-3">Company</h6>
                        <ul class="list-unstyled">
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="divider divider-fade divider-dark my-4" />
                <div class="row align-items-center justify-content-md-between pb-4">
                    <div class="col-md-6">
                        <div class="copyright text-sm font-weight-bold text-center text-md-left">
                            &copy; 2020 
                            <a href="http://aragontech.herokuapp.com/" 
                            class="font-weight-bold" target="_blank"
                            rel="noopener noreferrer">
                                AragonTechnologies</a>. All rights reserved
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Terms
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Privacy
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Cookies
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;