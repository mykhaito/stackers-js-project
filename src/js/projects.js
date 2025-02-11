'use strict';
import Swiper from 'swiper';
import { Navigation, Keyboard, HashNavigation, Mousewheel } from 'swiper/modules'; //ось це замінити

const swiperContainer = document.querySelector('.swiper-projects-js');

const swiper = new Swiper(swiperContainer, {
  modules: [Navigation, Keyboard, HashNavigation, Mousewheel],  // цю строчку замінити 
  direction: 'horizontal',
  spaceBetween: 50,
  slidesPerView: 1,
  grabCursor: true,  //додай це
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
  hashNavigation: {
    watchState: true, // Додай це
  },
  mousewheel: {
    invert: false, // також це
  },
  touchEventsTarget: 'wrapper',  // це також
  simulateTouch: true,
  //тут видалила on - не потрібні
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
//  додай будь-ласка ось цю функцію
  button.addEventListener('touchstart', (evt) => {   
    evt.preventDefault();
    index === 0 ? swiper.slidePrev() : swiper.slideNext();
  });
});

// Дякую
