$(function () {
    var tabletWidth = 768;
    var burgerMenuElement = $('#burger-menu');
    var desktopNavigationElement = $('#desktop-navigation');
    var mobileNavigationElement = $('#mobile-navigation');
    var mobileUlElement = $('#mobile-ul');

    function toggleNavigation() {
        var screenWidth = $(window).width();
        if (screenWidth <= tabletWidth) {
            initMobileNavigationVisibility();
        } else {
            initDesktopNavigationVisibility();
        }
    }

    function initNavigation() {
        toggleNavigation();
        initBurger();
        $(window).on('resize', toggleNavigation);
    }

    function initBurger() {
        burgerMenuElement.on('click', function () {
            burgerMenuElement.toggleClass('open');
            var slideDuration = 800;
            if (burgerMenuElement.hasClass('open')) {
                mobileUlElement.slideDown(slideDuration);
            } else {
                mobileUlElement.slideUp(slideDuration);
            }
        });
    }

    function initMobileNavigationVisibility() {
        desktopNavigationElement.hide();
        mobileNavigationElement.show();
        mobileUlElement.hide();
        if (burgerMenuElement.hasClass('open')) {
            burgerMenuElement.removeClass('open');
        }

        initMobileNavigation();
    }

    function initDesktopNavigationVisibility() {
        desktopNavigationElement.show();
        mobileNavigationElement.hide();
    }

    initNavigation();

    function initMobileNavigation() {
        $('.one_nesting_li a').on('click', function(e) {
            e.stopPropagation();
            $(this).siblings('.two_nesting_ul').slideToggle();
        });

        $('.two_nesting_li a.toggle-nested').on('click', function(e) {
            e.stopPropagation();
            $(this).siblings('.three_nesting_ul').slideToggle();
        });
    }
});
