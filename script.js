function toggleNavigation() {
    const desktopNavigationElement = $('#desktop-navigation');
    const mobileNavigationElement = $('#mobile-navigation');
    const tabletWidth = 768;
    var screenWidth = $(window).width();

    if (screenWidth <= tabletWidth) {
        desktopNavigationElement.hide();
        mobileNavigationElement.show();
    } else {
        desktopNavigationElement.show();
        mobileNavigationElement.hide();
    }
}

$(function () {
    initNavigation();
});


function initNavigation() {
    toggleNavigation();
    $(window).on('resize', function () {
        toggleNavigation();
    });
    initBurger();
}

function initBurger() {
    $('.js-burger-menu').on('click', function () {
        toggleBurger($('.js-burger-menu'));
    });
}

function toggleBurger(burgerElement) {
    burgerElement.toggleClass('open');
    if (burgerElement.hasClass('open')) {
        $('#pidor').slideDown(800);
    } else {
        $('#pidor').slideUp(800);
    }

}