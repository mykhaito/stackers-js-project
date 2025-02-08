import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.swiper', {
    direction:	'horizontal',
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      init: function () {
        updateButtonsState(this);
        hideAllExceptCurrent(this);
      },
      slideChange: function () {
        updateButtonsState(this);
        hideAllExceptCurrent(this);
      },
    },
  });

  function updateButtonsState (swiper) {
    const prevBtn = document.querySelector('.swiper-button-left');
    const nextBtn = document.querySelector('.swiper-button-right');
  
    prevBtn.disabled = swiper.isBeginning;
    nextBtn.disabled = swiper.isEnd;
  
    prevBtn.classList.toggle('disabled', swiper.isBeginning);
    nextBtn.classList.toggle('disabled', swiper.isEnd);
  }
  function hideAllExceptCurrent (swiper) {
    const allSlides = document.querySelectorAll('.swiper-slide');
    
    allSlides.forEach((slide, index) => {
      if (index !== swiper.activeIndex) {
        slide.style.display = 'none';
      } else {
        slide.style.display = 'block';
      }
    });
  }
  