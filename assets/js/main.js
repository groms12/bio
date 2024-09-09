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
    loop: true,
    autoplay: false,
    clickable: true,
    pagination: {
        el: '.swiper-pagination',
        draggable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
    },
});
const swiper4 = new Swiper(".swiper-product", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        0: {
            pagination: {
                el: '.swiper-pagination',
            },
        },
        768: {
            pagination: false
        }
    }
});
$('.search__del').click(function() {
    $('.search__inp').val('');
});
$('.search').click(function() {
    $('.header__search').toggleClass('header__search--active')
        // var top = document.querySelector('header').getBoundingClientRect().bottom;
        // $('.header__search').css('top', top);
    if ($('.header__search').hasClass("header__search--active")) {
        $('body').css('overflow-y', 'hidden');
        $('.search__close').css('display', 'block');
        $('.search__open').css('display', 'none');
    } else {
        $('body').css('overflow-y', 'auto');
        $('.search__close').css('display', 'none');
        $('.search__open').css('display', 'block');
    }
});
window.onscroll = (function() {
    var lastScrollTop = 0;
    return function() {
        if (window.screen.width > 768) {
            var st = window.scrollY || document.documentElement.scrollTop;
            if (st > lastScrollTop) { // скролл вниз
                document.querySelector('header').style.background = '#fff';
                document.querySelector('.header__top').style.display = 'none';
                document.querySelector('.header-menu').style.border = 'none';
            } else if (st < lastScrollTop) { // скролл вверх
                document.querySelector('.header__top').style.animation = 'ani 0.5s forwards';
                document.querySelector('.header__top').style.display = 'flex';
                if (document.querySelector('header').getBoundingClientRect().top == document.querySelector('body').getBoundingClientRect().top) {
                    document.querySelector('header').style.background = 'none';
                    document.querySelector('.header-menu').style.borderBottom = '1px solid var(--gray-05, rgba(18, 35, 51, 0.15)) ';
                }
            }
            lastScrollTop = st;
        }
    }
})();

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
    $('.data__item').css('display', 'none');
    switch ($(this).attr('data-name')) {
        case 'ingr':
            $('.data__ingridients').css('display', 'block');
            break;
        case 'desc':
            $('.data__description').css('display', 'block');
            break;
        case 'method':
            $('.data__method').css('display', 'block');
            break;
        case 'structure':
            $('.data__structure').css('display', 'block');
            break;
        case 'dop':
            $('.data__dop').css('display', 'block');
            break;
    }

})
var count = 456;
$('.filter').click(function() {
    if ($(this).hasClass('filter-product')) {
        $(this).toggleClass('filter--active');
        count = 1 + Math.floor(Math.random() * 456);
        $('.filters-block .btn').text('Показать еще ' + count + ' товаров');
    } else {
        $('.filter').removeClass('filter--active'); // если можно только один активный фильтр
        $(this).addClass('filter--active');
    }
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
$('.pagination__item').click(function() {
    $('.pagination__item').removeClass('pagination__item--active');
    $(this).addClass('pagination__item--active');
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
    $('.product-card__text').css('display', 'block');
});
$('.data__content--media').click(function() {
    $(this).parent('.data__item').toggleClass('data__item--nonactive');
    if ($(this).parent('.data__item').hasClass('data__ingridients')) {
        $('.ingridients').toggleClass('ingridients--nonactive');
    }
})
$('.colors__more').click(function() {
    $('.media-block').addClass('media-block--active');
    $('.media-block__colors').addClass('media-block__colors--active');

    $('body').css('overflow', 'hidden');
    $('body').addClass('body--overlay');
})
$('.media-block__close').click(function() {
    $('.media-block').removeClass('media-block--active');
    $('.media-block__colors').removeClass('media-block__colors--active');
    $('.media-block__buy').removeClass('media-block__buy--active');
    $('.media-block').css('top', '20%');
    $('body').css('overflow', 'auto');
    $('body').removeClass('body--overlay');
})
$('.shops').click(function() {
    $('.media-block').css('top', '60%');
    $('.media-block').addClass('media-block--active');
    $('.media-block__buy').addClass('media-block__buy--active');
    $('body').css('overflow', 'hidden');
    $('body').addClass('body--overlay');
})
$(document).ready(function() {

    var button = $('.fixed');
    var buttonOffsetTop = button.offset().top - $(window).height() + button.height();

    $(window).scroll(function() {

        let scrollY = $(window).scrollTop();

        if (scrollY >= buttonOffsetTop) {
            button.addClass('sticky');
            button.addClass('container');
        } else {
            button.removeClass('sticky');
            button.removeClass('container');
        }
    });
});
//  клики на краски