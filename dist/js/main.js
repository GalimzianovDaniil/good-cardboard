$(document).ready(function() {
    $('._orange-button').click(function() {
        $('.popup').css('display', 'flex')
    });
    $('.contacts-button').click(function() {
        $('.popup').css('display', 'flex')
    });
    $('.burger-menu').click(function() {
        $('.menu').css('display', 'flex')
    });
    $('.menu-cross').click(function() {
        $('.menu').css('display', 'none')
    });
    $('.popup-cross').click(function() {
        $('.popup').css('display', 'none')
    });
    $('.production-slider_top').slick({
        arrows: false,
        autoplay: true,
        asNavFor: '.production-slider_buttom'
    });
      $('.production-slider_buttom').slick({
        arrows: true,
        slidesToShow: 4,
        asNavFor: '.production-slider_top',
        nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
        prevArrow: '<div class="slider-arrow slider-arrow_left"> </div>'
    });
      $('.feedback-slider').slick({
        arrows: true,
        slidesToShow: 3,
        autoplay: true,
        nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
        prevArrow: '<div class="slider-arrow slider-arrow_left"> </div>'
    });

    $("input").mask("+7 (999) 999-9999");

});