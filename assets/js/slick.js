$(".vertical-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    // arrows: true,
    infinite: true,
    nextArrow: ".swiper-button-next4",
    prevArrow: ".swiper-button-prev4",
    // dots: true,
});

// вертикальный управляет горизонтальным
$(".swiper-button-next4").click(function(e) {
    swiper4.slideNext();
});

$(".swiper-button-prev4").click(function(e) {
    swiper4.slidePrev();
});

// горизонтальный управляет вертикальным
$(".swiper-button-next1").click(function(e) {
    $(".vertical-slider").slick('slickNext');
});

$(".swiper-button-prev1").click(function(e) {
    $(".vertical-slider").slick('slickPrev');
});

// клики по миниатюрам вертикального слайдера
$(".vertical-slider .slick-slide").on("click", function() {
    var index = $(this).data("slick-index");
    $(".vertical-slider").slick('slickGoTo', index);
    var numSlides = $(".swiper-product .swiper-wrapper .swiper-slide").length;
    if (index >= numSlides)
        swiper4.slideTo(numSlides - index);
    else
        swiper4.slideTo(index);
    console.log(numSlides, index);
});