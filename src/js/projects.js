'use strict';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperContainer = document.querySelector('.swiper-projects-js');

const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard],
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 1,
  loop: false,
  speed: 600,
  navigation: {
    prevEl: '.projects-btn-prev',
    nextEl: '.projects-btn-next',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
