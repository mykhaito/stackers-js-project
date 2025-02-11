// ======== Accordion

import Accordion from 'accordion-js';
// console.log(Accordion);

const accordionContainerEl = document.querySelector(
  '.accordion-container.my-styles-accordion-container'
);
// console.log(accordionContainerEl);

const aboutMeAccordion = new Accordion(accordionContainerEl, {
  duration: 500, // час в мс відкриття-закриття ак (500 дефолтне)
  showMultiple: true, // чи можуть бути всі елементи ак відкритими
  // onOpen: currEl => console.log('Open!', currEl), // функція на відкритті
  openOnInit: [0], // обирає який елемент рзкритий при завантаженні сторінки
});

const myStylesAcTriggerEls = document.querySelectorAll('.my-styles-ac-trigger');

console.log(myStylesAcTriggerEls);

myStylesAcTriggerEls.forEach(el => {
  el.addEventListener('mousedown', function () {
    setTimeout(() => {
      // console.log('setTimeoutFn for myStylesAcTriggerEls');
      this.blur();
    }, 1000); // Прибирає фокус після кліку мишею
  });
});

// ======== /Accordion

// ======== Swiper

import Swiper from 'swiper';
import {
  Navigation,
  // Pagination,
  // Autoplay,
  Keyboard,
  Mousewheel,
  // Virtual,
} from 'swiper/modules';

// const aboutMeSwiperEl = document.querySelector('.about-me-swiper');
const aboutMeSwiperBtnNextEl = document.querySelector(
  '.about-me-swiper-btn-next'
);
// console.log(aboutMeSwiperEl);
// console.log(aboutMeSwiperBtnNextEl);

aboutMeSwiperBtnNextEl.addEventListener('mousedown', function () {
  setTimeout(() => {
    // console.log('setTimeoutFn for aboutMeSwiperBtnNextEl');
    this.blur();
  }, 1000); // Прибирає фокус після кліку мишею
});

const aboutMeSwiper = new Swiper('.about-me-swiper', {
  // * configure Swiper to use modules
  modules: [Navigation, Keyboard, Mousewheel],

  // autoHeight: false,

  // * Responsive breakpoints
  breakpoints: {
    // * when window width is >= 320px
    320: {
      // slidesPerGroup: 1,
      slidesPerView: 2,
    },
    // * when window width is >= 768px
    768: {
      // slidesPerGroup: 1,
      slidesPerView: 3,
    },
    // * when window width is >= 1440px
    1440: {
      // slidesPerGroup: 1,
      slidesPerView: 6,
    },
  },

  // effect: 'slide', // Transition effect.
  // * Can be 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative' or 'cards'

  grabCursor: true, // If true, user will see the "grab" cursor when hover on Swiper

  // initialSlide: 0, // (default - 0)
  // * Index number of initial slide

  keyboard: {
    enabled: true,

    // onlyInViewport: true, // (default - true)
    // * When enabled it will control sliders that are currently in viewport
  },

  loop: true,

  mousewheel: {
    // forceToAxis: true, // (default - false)
    // * Set to true to force mousewheel swipes to axis. So in horizontal mode
    // * mousewheel will work only with horizontal mousewheel scrolling,
    // * and only with vertical scrolling in vertical mode.
    // invert: true,
  },

  navigation: {
    nextEl: '.about-me-swiper-btn-next',
    // prevEl: '',
  },

  // oneWayMovement: false, // (default - false)
  // * When enabled, will swipe slides only forward

  // ?By changing classes you will also need to change
  // ?Swiper's CSS to reflect changed classes
  // slideActiveClass: 'swiper-slide-active',
  // slideClass: 'swiper-slide',
  // wrapperClass: 'swiper-wrapper',
  // slideVisibleClass: 'swiper-slide-visible',
  // slideFullyVisibleClass: 'swiper-slide-fully-visible',
  // slideNextClass: 'swiper-slide-next',
  // slidePrevClass: 'swiper-slide-prev',

  // slideToClickedSlide: true, // (default - false)
  // * produce transition to this slide

  speed: 1000, // (default - 300)
  // * Duration of transition between slides (in ms)

  threshold: 5, // Threshold value in px.(default - 5)
  // * If "touch distance" will be lower than this value then swiper will not move
});
