/*============================================================
Template Name   : Solario
Description     : Solar And Renewable Energy HTML5 Template
Author          : LunarTemp
Version         : 1.0
==============================================================*/


(function ($) {

    "use strict";

    // multi level dropdown menu
    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass('show');
        });
        return false;
    });


    //Header Search
    if ($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function () {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function () {
            $('body').removeClass('search-active');
        });
    }


    // data-background    
    $(document).on('ready', function () {
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
        });
    });


    // sidebar popup 
    $('.sidebar-btn').on('click', function () {
        $('.sidebar-popup').addClass('open');
        $('.sidebar-wrapper').addClass('open');
    });
    $('.close-sidebar-popup, .sidebar-popup').on('click', function () {
        $('.sidebar-popup').removeClass('open');
        $('.sidebar-wrapper').removeClass('open');
    });


    // wow init
    new WOW().init();


    // hero slider
    $('.hero-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        items: 1,
        navText: [
            "<i class='far fa-long-arrow-left'></i>",
            "<i class='far fa-long-arrow-right'></i>"
        ],

        onInitialized: function (event) {
            var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
            doAnimations($firstAnimatingElements);
        },

        onChanged: function (event) {
            var $firstAnimatingElements = $('.owl-item').eq(event.item.index).find("[data-animation]");
            doAnimations($firstAnimatingElements);
        }
    });

    //hero slider do animations
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationDuration = $this.data('duration');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay,
                'animation-duration': $animationDuration,
                '-webkit-animation-duration': $animationDuration,
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }



    // service-slider
    $('.service-slider').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        dots: false,
        autoplay: false,
        navText: [
            "<i class='far fa-arrow-left'></i>",
            "<i class='far fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    // portfolio-slider
    $('.portfolio-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='far fa-arrow-left'></i>",
            "<i class='far fa-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });


    // testimonial-slider
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });


    // partner-slider
    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        navText: [
            "<i class='icofont-long-arrow-left'></i>",
            "<i class='icofont-long-arrow-right'></i>"
        ],
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });



    // preloader
    $(window).on('load', function () {
        $(".preloader").fadeOut("slow");
    });


    // fun fact counter
    $('.counter').countTo();
    $('.counter-box').appear(function () {
        $('.counter').countTo();
    }, {
        accY: -100
    });


    // magnific popup init
    $(".popup-gallery").magnificPopup({
        delegate: '.popup-img',
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });



    // progress bar
    $(document).ready(function () {
        var progressBar = $('.progress');
        if (progressBar.length) {
            progressBar.each(function () {
                var Self = $(this);
                Self.appear(function () {
                    var progressValue = Self.data('value');
                    Self.find('.progress-bar').animate({
                        width: progressValue + '%'
                    }, 1000);
                });
            })
        }
    });



    // case filter
    $(window).on('load', function () {
        if ($(".filter-box").children().length > 0) {
            $(".filter-box").isotope({
                itemSelector: '.filter-item',
                masonry: {
                    columnWidth: 1
                },
            });

            $('.filter-btn').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $(".filter-box").isotope({ filter: filterValue });
            });

            $(".filter-btn li").each(function () {
                $(this).on("click", function () {
                    $(this).siblings("li.active").removeClass("active");
                    $(this).addClass("active");
                });
            });
        }
    });



    // scroll to top
    $(window).scroll(function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#scroll-top").addClass('active');
        } else {
            $("#scroll-top").removeClass('active');
        }
    });

    $("#scroll-top").on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });


    // navbar fixed top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass("fixed-top");
            // $('.navbar').removeClass("d-none");
        } else {
            // $('.navbar').addClass("d-none");
            $('.navbar').removeClass("fixed-top");
        }
    });

    // Hide navbar initially
    document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.querySelector('.header');
        // navbar.style.visibility = 'hidden';
        // navbar.style.opacity = 0;
        // navbar.style.transition = 'visibility 0s, opacity 0.5s ease-in-out';
        window.addEventListener("scroll", function () {
            navbar.style.display = "none"
            if (window.scrollY > 50) {
                navbar.style.display = "block"
                navbar.style.visibility = 'visible';
                navbar.style.opacity = 1;
            } else {
                navbar.style.display = "none"
                navbar.style.visibility = 'hidden';
                navbar.style.opacity = 0;
            }
        });
    });

    // countdown
    $('[data-countdown]').each(function () {
        let finalDate = $(this).data('countdown');
        $(this).countdown(finalDate, function (event) {
            $(this).html(event.strftime(
                '<div class="time-wrap">' + '<span class="time"><span>%-D</span><span class="unit">Day%!D</span></span>' + ' <span class="divider">:</span> ' + '<span class="time"><span>%H</span><span class="unit">Hour%!H</span></span>' + ' <span class="divider">:</span> ' + '<span class="time"><span>%M</span><span class="unit">Min%!M</span></span>' + ' <span class="divider">:</span> ' + '<span class="time"><span>%S</span><span class="unit">Sec%!S</span></span>' + '</div>'
            ));
        });
    });


    // copywrite date
    let date = new Date().getFullYear();
    $("#date").html(date);


    // nice select
    $('.select').niceSelect();


    // price range slider
    if ($(".price-range").length) {
        $(".price-range").slider({
            range: true,
            min: 0,
            max: 999,
            values: [100, 500],
            slide: function (event, ui) { $("#price-amount").val("$" + ui.values[0] + " - $" + ui.values[1]); }
        });
        $("#price-amount").val("$" + $(".price-range").slider("values", 0) + " - $" + $(".price-range").slider("values", 1));
    }


    //cart quantity
    $(".plus-btn").on("click", function () {
        var i = $(this).closest(".cart-qty").children(".quantity").get(0).value++,
            c = $(this).closest(".cart-qty").children(".minus-btn");
        i > 0 && c.removeAttr("disabled");
    }),
        $(".minus-btn").on("click", function () {
            2 == $(this).closest(".cart-qty").children(".quantity").get(0).value-- && $(this).attr("disabled", "disabled");
        })


    // flexslider
    if ($('.flexslider-thumbnails').length) {
        $('.flexslider-thumbnails').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
        });
    }


    // auth password view
    $('.password-view').on('click', function () {
        var pwd = document.getElementById('password');
        if (pwd.type === "password") {
            pwd.type = "text";
            $(this).addClass('show');
        } else {
            pwd.type = "password";
            $(this).removeClass('show');
        }
    })


    // location map
    $(".location-map").find(".location-item").on("mouseenter", function () {
        $(".location-map").find(".location-item").removeClass("active"),
            $(this).addClass("active");
    });


    // bootstrap tooltip enable
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


})(jQuery);










