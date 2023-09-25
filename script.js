$(function () {
    var tabletWidth = 768;
    var burgerMenuElement = $('#burger-menu');
    var desktopNavigationElement = $('#desktop-navigation');
    var mobileNavigationElement = $('#mobile-navigation');
    var mobileUlElement = $('#mobile-ul');

    function toggleNavigation() {
        var screenWidth = $(window).width();
        if (screenWidth <= tabletWidth) {
            initMobileNavigation();
        } else {
            initDesktopNavigation();
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

    function initMobileNavigation() {
        desktopNavigationElement.hide();
        mobileNavigationElement.show();
        mobileUlElement.hide();
        if (burgerMenuElement.hasClass('open')) {
            burgerMenuElement.removeClass('open');
        }
    }

    function initDesktopNavigation() {
        desktopNavigationElement.show();
        mobileNavigationElement.hide();
    }

    initNavigation();
});
