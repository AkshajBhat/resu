$(document).ready(function () {
    // Typing Animation
    var typed = new Typed('.typing', {
        strings: ['Web Developer', 'App Designer', 'Tech Enthusiast'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl Carousel for Projects
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
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

    // Waypoints for scrolling animation
    $('.home-content, .about-content, .serv-content, .skills-content, .carousel, .contact-content').waypoint({
        handler: function (direction) {
            if (direction == "down") {
                $(this.element).addClass('fadeInUp');
            }
        },
        offset: '70%'
    });

    // Smooth Scrolling
    $('.menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});
