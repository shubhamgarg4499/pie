document.write(` <header class="header ">

<!-- navbar -->
<div class="main-navigation ">
    <nav class="navbar navbar-expand-lg">
        <div class="container position-relative">
            <a class="navbar-brand" href="index.html">
                <img src="assets/company-assets/logo.png" alt="logo" />
            </a>
            <div class="mobile-menu-right">
                <!-- <div class="mobile-menu-btn">
            <button type="button" class="nav-right-link search-box-outer">
              <i class="far fa-search"></i>
            </button>
          </div> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <a href="index.html" class="offcanvas-brand" id="offcanvasNavbarLabel">
                        <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="far fa-xmark"></i>
                    </button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1">
                        <li class="nav-item dropdown">
                            <a class="nav-link active" href="#" data-bs-toggle="dropdown">Home</a>
                        </li>


                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
                            <ul class="dropdown-menu fade-down">
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Acrylic Emulsions
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="">Paper Binder</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">Paint Binder</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">Flexible packaging Binders</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Water Based Adhesives</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="">VAE Emulsion</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">ECO Bond</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">Wood Bond</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">PVC Bond</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">Piefab-45</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">Ocean Bond</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="dropdown-submenu">
                                    <a class="dropdown-item dropdown-toggle" href="#">Solvent Based Primers</a>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="">EP1010</a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="">PIE Bond</a>
                                        </li>

                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">Trade Fair
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="about.html"
                                data-bs-toggle="dropdown">About</a>
                            <ul class="dropdown-menu fade-down">
                                <li>
                                    <a class="dropdown-item" href="service.html">Director Desk</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="service-2.html">InfraStructure</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="service-single.html">Mission Vision</a>
                                </li>
                                <li>
                                    <a class="dropdown-item" href="service-single.html">Quality</a>
                                </li>
                            </ul>
                        </li>
                        <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
              <ul class="dropdown-menu fade-down">
                <li>
                  <a class="dropdown-item" href="shop.html">Shop</a>
                </li>
                <li>
                  <a class="dropdown-item" href="shop-cart.html">Shop Cart</a>
                </li>
                <li>
                  <a class="dropdown-item" href="shop-checkout.html">Shop Checkout</a>
                </li>
                <li>
                  <a class="dropdown-item" href="shop-single.html">Shop Single</a>
                </li>
              </ul>
            </li> -->
                        <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
              <ul class="dropdown-menu fade-down">
                <li>
                  <a class="dropdown-item" href="blog.html">Blog</a>
                </li>
                <li>
                  <a class="dropdown-item" href="blog-single.html">Blog Single</a>
                </li>
              </ul>
            </li> -->
                        <!-- <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact</a>
            </li> -->
                    </ul>
                    <!-- nav-right -->
                    <div class="nav-right">
                        <!-- <div class="search-btn">
              <button type="button" class="nav-right-link search-box-outer">
                <i class="far fa-search"></i>
              </button>
            </div> -->
                        <!-- <div class="shop-cart">
              <a href="shop-cart.html" class="nav-right-link"><i class="far fa-shopping-bag"></i><span>0</span></a>
            </div> -->
                        <div class="nav-btn">
                            <a href="contact.html" class="theme-btn">Contact Now<i
                                    class="fas fa-arrow-right"></i></a>
                        </div>
                        <button type="button" class="sidebar-btn nav-right-link" data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarPopup">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>
<!-- navbar end-->
</header>`)