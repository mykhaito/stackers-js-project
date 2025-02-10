'use strict';
import Swiper from 'swiper/bundle';

const swiperContainer = document.querySelector('.swiper-projects-js');

const swiper = new Swiper(swiperContainer, {
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

document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.projects-btn-prev');
  const nextButton = document.querySelector('.projects-btn-next');

  [prevButton, nextButton].forEach(button => {
    button.addEventListener('mousedown', function () {
      setTimeout(() => {
        this.blur();
      }, 1000);
    });
  });
});
