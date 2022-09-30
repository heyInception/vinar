// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);
const swiper = new Swiper('.header-main__slider', {
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    speed: 300,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 1,
        }
    },
    on: {
        slideChangeTransitionStart: function() {
            document.querySelectorAll('.header-main__aos').forEach(i => {
                setTimeout(() => {
                    i.style.visibility = "hidden"
                }, 1);
                i.classList.remove('aos-init')
                i.classList.remove('aos-animate')
            })


        },
        slideChangeTransitionEnd: function() {
            document.querySelectorAll('.header-main__aos').forEach(i => {
                setTimeout(() => {
                    i.style.visibility = "visible"
                    AOS.init();
                }, 500);
            })

        },
    }
});
const swiperHit = new Swiper('.hit__slider', {
    allowTouchMove: false,
    effect: 'fade',
    autoHeight: true,
    fadeEffect: {
        crossFade: true
    },
    speed: 150,
    navigation: {
        nextEl: '.swiper-button-next-unique',
        prevEl: '.swiper-button-prev-unique'
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 1,
            spaceBetween: 40,
            navigation: {
                nextEl: '.swiper-button-next-unique',
                prevEl: '.swiper-button-prev-unique'
            },
        }
    },
    on: {
        slideChangeTransitionStart: function() {
            document.querySelectorAll('.hit__aos').forEach(i => {
                setTimeout(() => {
                    i.style.visibility = "hidden"
                }, 1);
                i.classList.remove('aos-init')
                i.classList.remove('aos-animate')
            })


        },
        slideChangeTransitionEnd: function() {
            document.querySelectorAll('.hit__aos').forEach(i => {
                setTimeout(() => {
                    i.style.visibility = "visible"
                    AOS.init();
                }, 500);
            })

        },
    }
});
const swiperBrands = new Swiper('.brands-main__slider', {
    allowTouchMove: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    }
});
const swiperBrandsMobile = new Swiper('.brands-main__slider_mobile', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 40,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 1,
        }
    }
});



document.querySelectorAll('.brands__slr_prd').forEach(n => {
    const brandsSlr = new Swiper(n.querySelector('.brands__slider'), {
        allowTouchMove: false,
        navigation: {
            nextEl: n.querySelector('.swiper-button-next'),
            prevEl: n.querySelector('.swiper-button-prev'),
        },
        slidesPerView: 1,
        spaceBetween: 40,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            998: {
                slidesPerView: 3,
            },
            // when window width is >= 480px
            1200: {
                slidesPerView: 3,
            },
            // when window width is >= 640px
            1300: {
                slidesPerView: 4,
            }
        }
    });
});


// Подключение анимаций по скроллу
import AOS from 'aos';
AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

import { burger } from './functions/gianniAccordion.min';
let product__card = new gianniAccordion({
    elements: ".card-product__card article",
    trigger: "[data-accordion-element-trigger]",
    content: "[data-accordion-element-content]",
});
let faq = new gianniAccordion({
    elements: ".faq__accordion .faq__item",
    trigger: "[data-accordion-element-trigger]",
    content: "[data-accordion-element-content]",
});
