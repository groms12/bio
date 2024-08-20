const swiper1 = new Swiper(".best-slider", {
    slidesPerView: 6,
    spaceBetween: 16,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        1030: {
            slidesPerView: 6,
        },
        780: {
            slidesPerView: 4.5,
        },
        500: {
            slidesPerView: 3.5,
        },
        0: {
            slidesPerView: 1.5,
        }
    }
});
const swiper = new Swiper(".reccomend-slider", {
    slidesPerView: 6,
    spaceBetween: 16,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        1030: {
            slidesPerView: 6,
        },
        780: {
            slidesPerView: 4.5,
        },
        500: {
            slidesPerView: 3.5,
        },
        0: {
            slidesPerView: 1.5,
        }
    }
});
const swiper2 = new Swiper(".swiper-about", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        draggable: true,
    },
});
const swiper3 = new Swiper(".swiper-banner", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        draggable: true,
    },
});
const swiper4 = new Swiper(".swiper-product", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
});
// делать 1 активный слайд, подбивать высоту контейнера.
// const swiper5 = new Swiper(".swiper-preview", {
//     slidesPerView: 4,
//     direction: 'vertical',
//     spaceBetween: 6,
//     centered: true,
//     loop: true,
//     clickable: true,
//     navigation: {
//         nextEl: ".swiper-button-next4",
//         prevEl: ".swiper-button-prev4",
//     },
// });


window.onscroll = (function() {
    var lastScrollTop = 0;
    return function() {
        if (window.screen.width > 768) {
            var st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop) { // скролл вниз
                document.querySelector('header').style.background = '#fff';
                document.querySelector('.header__top').style.display = 'none';
            } else if (st < lastScrollTop) { // скролл вверх
                document.querySelector('.header__top').style.animation = 'ani 0.5s forwards';
                document.querySelector('.header__top').style.display = 'flex';
                if (document.querySelector('header').getBoundingClientRect().top == document.querySelector('body').getBoundingClientRect().top) {
                    document.querySelector('header').style.background = 'none';
                }
            }
            lastScrollTop = st;
        }
    }
})();
// соединение двух слайдеров
swiper4.on('slideChange', function() {
    var index = swiper4.activeIndex;
    $('.preview-slide').removeClass('swiper-slide-active');
    $('.preview-slide[data-index="' + index + '"]').addClass('swiper-slide-active');
    if (index == 4) {
        // вот тут надо хорошо подумать
        $('.preview-slide').css('transform', 'translateY(-300px)');
    }
    // и как-то в обратную сторону
});
$('.swiper-button-next4').click(function() {
    var index = $('.preview-slide.swiper-slide-active').data('index');
    if (index != $('.preview-slide').length - 1) {
        if (index + 1 == 4) {
            $('.preview-slide').css('transform', 'translateY(-300px)');
        }
        $('.preview-slide').removeClass('swiper-slide-active');
        $('.preview-slide[data-index="' + (index + 1) + '"]').addClass('swiper-slide-active');
        swiper4.slideTo(index + 1);
    }
})
$('.swiper-button-prev4').click(function() {
    var index = $('.preview-slide.swiper-slide-active').data('index');
    if (index != 0) {
        if (index + 1 == 5) {
            // вот тут надо хорошо подумать
            $('.preview-slide').css('transform', 'translateY(100px)');
        }
        $('.preview-slide').removeClass('swiper-slide-active');
        $('.preview-slide[data-index="' + (index - 1) + '"]').addClass('swiper-slide-active');
        swiper4.slideTo(index - 1);
    }
})
var flag = 0
$('.footer-title').click(function() {
    if (flag == 0) {
        $(this).siblings().css('display', 'block');
        $(this).children('.footer__media').css('transform', 'rotate(180deg)');
        flag = 1;
    } else {
        $(this).siblings().css('display', 'none');
        $(this).children('.footer__media').css('transform', 'rotate(0deg)');
        flag = 0;
    }
});

$('.data__filter--text').click(function() {
    $('.data__filter--text').removeClass('data__filter--active');
    $(this).addClass('data__filter--active');
    // для примера изменение (можно делать скрытие и открытие блоков)
    if ($(this).attr('data-name') == 'ingr') {
        $('.data__content').html('<div class="data__ingridients ingridients">' +
            '<div class="ingridients__item">' +
            '    <img src="assets/img/ingridients/image 97.png" alt="">' +
            '    <p>Анисовое масло</p>' +
            '</div>' +
            '<div class="ingridients__item">' +
            '    <img src="assets/img/ingridients/image 98.png" alt="">' +
            '    <p>Масло Жожоба</p>' +
            '</div>' +
            '<div class="ingridients__item">' +
            '    <img src="assets/img/ingridients/image 99.png" alt="">' +
            '    <p>Экстракт бамбука</p>' +
            '</div>' +
            '<div class="ingridients__item">' +
            '    <img src="assets/img/ingridients/image 100.png" alt="">' +
            '    <p>Экстракт хмеля</p>' +
            '</div>' +
            '<div class="ingridients__item">' +
            '    <img src="assets/img/ingridients/image 101.png" alt="">' +
            '    <p>Протеин овса</p>' +
            '</div>' +
            '</div>');
    } else {
        $('.data__content').html('Купила такую краску в магазине, долго она лежала и ждала своего часа. Тут решила покрасить брови и ресницы. Легко и просто оказалось, очень хорошо получилось. Решила купить ещё. Все пришло целое, хорошо упаковано и с хорошими сроками годности. Спасибо');
    }
})
var count = 456;
$('.filter').click(function() {
    // $('.filter').removeClass('filter--active'); // если можно только один активный фильтр
    $(this).toggleClass('filter--active');
    count = 1 + Math.floor(Math.random() * 456);
    $('.filters-block .btn').text('Показать еще ' + count + ' товаров');
})

$('.product-card__color').click(function() {
    $('.product-card__color').removeClass('product-card__color--active');
    $(this).addClass('product-card__color--active');
    var name = $(this).attr('data-name');
    $('.product-card__name-color').text(name);
})
$('.catalog__brand').click(function() {
    $(this).toggleClass('catalog__brand--active');
});
// эффект при наведении на меню
$('.header .link').mouseover(function() {
    $('.header .link').css('color', '#647380');
    $(this).css('color', '#172028');
    $('.header .link--active').css('color', '#172028');
})
$('.header .link').mouseout(function() {
    $('.header .link').css('color', '#172028');
})
$('.header .link').click(function() {
    $('.header .link').removeClass('link--active');
    $(this).addClass('link--active');
})
$('.header__media').click(function() {
    $('.menu-media').addClass('menu-media--active');
    $('body').css('overflow', 'hidden');
})
$('.menu-media__img').click(function() {
    $('.menu-media').removeClass('menu-media--active');
    $('body').css('overflow', 'auto');
})
$('.filters').click(function() {
    $('.filters-block').addClass('filters-block--active');
    $('body').css('overflow', 'hidden');
    $('body').addClass('body--overlay');
})
$('.filters-block__img').click(function() {
    $('.filters-block').removeClass('filters-block--active');
    $('body').css('overflow', 'auto');
    $('body').removeClass('body--overlay');
})
$('.catalog--more').click(function() {
    $('.products').append('<div class="products__item product">' +
        '<div class="product__tags">' +
        '<div class="product__tag">ECO</div>' +
        '<div class="product__tag product__tag--fill">BEST</div>' +
        '</div>' +
        '<img src="assets/img/product/img_product.png" alt="" class="product__img">' +
        '<div class="product__info">' +
        '    <p class="product__brand">Only Bio</p>' +
        '    <p class="product__title">Скраб-гоммаж для гладкости кожи</p>' +
        '</div>' +
        '</div>' +
        '<div class="products__item product">' +
        '<div class="product__tags">' +
        '<div class="product__tag">ECO</div>' +
        '<div class="product__tag product__tag--fill">BEST</div>' +
        '</div>' +
        '<img src="assets/img/product/img_product-1.png" alt="" class="product__img">' +
        '<div class="product__info">' +
        '    <p class="product__brand">estetique</p>' +
        '    <p class="product__title">Ночной крем для лица</p>' +
        '</div>' +
        '</div>' +
        '<div class="products__item product">' +
        '<div class="product__tags">' +
        '<div class="product__tag">ECO</div>' +
        '<div class="product__tag product__tag--fill">BEST</div>' +
        '</div>' +
        '<img src="assets/img/product/img_product-2.png" alt="" class="product__img">' +
        '<div class="product__info">' +
        '    <p class="product__brand">BEAUTY FERMA</p>' +
        '    <p class="product__title">Мягкий пилинг для лица</p>' +
        '</div>' +
        '</div>' +
        '<div class="products__item product">' +
        '<div class="product__tags">' +
        '<div class="product__tag">ECO</div>' +
        '<div class="product__tag product__tag--fill">BEST</div>' +
        '</div>' +
        '<img src="assets/img/product/img_product-3.png" alt="" class="product__img">' +
        '<div class="product__info">' +
        '    <p class="product__brand">BEAUTY FERMA</p>' +
        '    <p class="product__title">Эко крем для лица</p>' +
        '</div>' +
        '</div>');
})
$('.rewievs__btn').click(function() {
    $('.rewievs__table').append('<div class="rewievs-table__item">' +
        '<div class="rewievs-table__person">' +
        '    <p class="rewievs-table__name">Марина</p>' +
        '    <p class="rewievs-table__date">23.04.23</p>' +
        '</div>' +
        '<div class="rewievs-table__rewiev">' +
        '    <div class="rewievs-table__stars product-card__stars">' +
        '        <img src="assets/img/icons/star.svg" alt="">' +
        '        <img src="assets/img/icons/star.svg" alt="">' +
        '        <img src="assets/img/icons/star.svg" alt="">' +
        '        <img src="assets/img/icons/star.svg" alt="">' +
        '        <img src="assets/img/icons/star-half.svg" alt="">' +
        '    </div>' +
        '    <div class="rewievs-table__text hide">' +
        '        Купила такую краску в магазине, долго она лежала и ждала своего часа. Тут решила покрасить брови и ресницы. Легко и просто оказалось, очень хорошо получилось. Решила купить ещё. Все пришло целое, хорошо упаковано и с хорошими сроками годности. Спасибо' +
        '        большое 🤩' +
        '    </div>' +
        '</div>' +
        '</div>');
})
$('.product-card__more').click(function() {
    $(this).css('display', 'none');
    $('.product-card__text').append('Миндальное гидрофильное масло для умывания и&nbsp;снятия макияжа. Марокканская роза на&nbsp;основе масел с&nbsp;добавлением перемолотых трав и&nbsp;цветов мягко очищает кожу, придает тонус и&nbsp;окутывает нежной цветочной дымкой.')
})