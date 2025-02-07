import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

Swiper.use([Navigation]);

const reviewsData = [
  {
    name: "Natalia",
    text: "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations",
    avatar: {
        x1: "./img/reviews/avatar-1.jpg",
        x2: "./img/reviews/avatar-1@2x.jpg"
    }
  },
  {
    name: "Dmytro",
    text: "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.",
    avatar: {
        x1: "./img/reviews/avatar-2.jpg",
        x2: "./img/reviews/avatar-2@2x.jpg"
    }
  },
  {
    name: "Anna",
    text: "The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!",
    avatar: {
        x1: "./img/reviews/avatar-3.jpg",
        x2: "./img/reviews/avatar-3@2x.jpg"
    }
  },
  {
    name: "Ivetta",
    text: "Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development.",
    avatar: {
        x1: "./img/reviews/avatar-4.jpg",
        x2: "./img/reviews/avatar-4@2x.jpg"
    }
  },
  {
    name: "Margo",
    text: "Work with was extraordinary! He turned out to be a very competent and responsible specialist. The projects were completed on time and the result exceeded my expectations",
    avatar: {
        x1: "./img/reviews/avatar-1.jpg",
        x2: "./img/reviews/avatar-1@2x.jpg"
    }
  },
  {
    name: "Stanislav",
    text: "I have the honor to recommend him as an exceptional professional in his field. His knowledge and expertise are undeniable. Cooperation with him always brings impressive results.",
    avatar: {
        x1: "./img/reviews/avatar-2.jpg",
        x2: "./img/reviews/avatar-2@2x.jpg"
    }
  },
  {
    name: "Xena",
    text: "The developed project impresses with its quality and efficiency. The code is cleanly written and the functionality exceeds expectations. Extremely satisfied with the cooperation!",
    avatar: {
        x1: "./img/reviews/avatar-3.jpg",
        x2: "./img/reviews/avatar-3@2x.jpg"
    }
  },
  {
    name: "Tetiana",
    text: "Thanks for the excellent work on the project! His talent and professionalism deserve recognition. I recommend it to everyone who is looking for an expert in the field of software development.",
    avatar: {
        x1: "./img/reviews/avatar-4.jpg",
        x2: "./img/reviews/avatar-4@2x.jpg"
    }
  }
];

function renderReviews() {
  const list = document.querySelector('.reviews-list');
  if (!list) return;

  if (reviewsData.length === 0) {
    showError();
    return;
  }

  const reviewsHTML = reviewsData.map(review => `
    <li class="reviews-item swiper-slide">
      <img src="${review.avatar.x1}"
           srcset="${review.avatar.x1} 1x, ${review.avatar.x2} 2x"
           alt="${review.name}'s avatar"
           class="reviews-avatar"
           width="48"
           height="48">
      <div class="reviews-content">
        <h3 class="reviews-name">${review.name}</h3>
        <p class="reviews-text">${review.text}</p>
      </div>
    </li>
  `).join('');

  list.innerHTML = reviewsHTML;
}

function showError() {
  const errorContainer = document.querySelector('.reviews-error');
  const list = document.querySelector('.reviews-list');
  const nav = document.querySelector('.reviews-nav');
  
  if (errorContainer) errorContainer.classList.remove('visually-hidden');
  if (list) list.innerHTML = '';
  if (nav) nav.style.display = 'none';
}

function initSwiper() {
  new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    direction: 'horizontal',
    speed: 600,
    navigation: {
      prevEl: '.reviews-button-prev',
      nextEl: '.reviews-button-next',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 16
      }
    },
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderReviews();
  initSwiper();

  document.querySelector('.reviews-nav').style.display = 'flex';
});
