$(function () {
    $('.head:first').next().show();
    $('.head').on('click', function () {
        $(this).next().slideToggle().siblings('.ac-content').slideUp();
    })

    // Slider
    var sliderWrap = $('.testimonials-list');
    var sliderItem = $('.testimonials-item');
    var sliderItemWidth = $(sliderItem).width();
    var count = sliderItem.length;
    var sliderWidth = (sliderItemWidth * count);
    var buttonLeft = $('.shifter-arrow.-left');
    var buttonRightt = $('.shifter-arrow.-right');
    var widthSliderWrap = $('.slider-wrap');
    widthSliderWrap.css('width', sliderItemWidth);

    var mooveWidth = sliderItemWidth;
    function moove () {
        $(sliderWrap).animate({
            left: -mooveWidth+'px'
        },600, function () {
            $(sliderItem).filter(':first-child').appendTo(sliderWrap);
            $(sliderWrap).css('left', '');
        });
    }

    $(buttonLeft).on('click', function  () {
        moove();
    });
    // console.log(buttonLeft);
    // console.log(count);
    // console.log(sliderItemWidth);
    // console.log(widthSliderWrap);
});

