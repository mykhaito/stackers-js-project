'use strict';
import Swiper from 'swiper/bundle';
const swiperContainer = document.querySelector('.swiper-projects-js');

const swiper = new Swiper(swiperContainer, {  
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
  touchEventsTarget: 'wrapper',  
  simulateTouch: true,
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
  const prevBtn = document.querySelector('.projects-btn-prev');
  const nextBtn = document.querySelector('.projects-btn-next');

  [prevBtn, nextBtn].forEach(btn => {
    btn.addEventListener('mousedown', function () {
      setTimeout(() => {
        this.blur();
      }, 1000);
    });
  });
});
