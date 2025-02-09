'use strict';
import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';

const prevBtn = document.querySelector('.swiper-button-left');
const nextBtn = document.querySelector('.swiper-button-right');
const swiperContainer = document.querySelector('.swiper-projects-js');

const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard],
  direction:	'horizontal',
  spaceBetween: 50,
  slidesPerView: 1, 
  loop: false,
  speed: 400,
  navigation: {
    nextEl: nextBtn,
    prevEl: prevBtn,
  },
  keyboard: {
    enabled: true, 
    onlyInViewport: false,
  },
  on: {
    init: function () {
      updateButtonsState(this);
    },
    slideChange: function () {
      updateButtonsState(this);
    },
    toEdge: function () {
      updateButtonsState(this);
    },
  },
});  

function updateButtonsState(swiper) {
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;

  prevBtn.classList.toggle('disabled', swiper.isBeginning);
  nextBtn.classList.toggle('disabled', swiper.isEnd);
}

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ArrowLeft' && !prevBtn.disabled) prevBtn.click();
  if (evt.key === 'ArrowRight' && !nextBtn.disabled) nextBtn.click();
});

[prevBtn, nextBtn].forEach((button, index)  => {
  button.addEventListener('focus', () => button.classList.add('focused'));
  button.addEventListener('blur', () => button.classList.remove('focused'));

  button.addEventListener('keydown', (evt) => {
    if (evt.key === ' ' || evt.key === 'Enter') {
      evt.preventDefault();
      index === 0 ? swiper.slidePrev() : swiper.slideNext();
    }
  });
});