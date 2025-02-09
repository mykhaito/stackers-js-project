import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const pageForm = document.querySelector('.footer-form');
const modalWindow = document.querySelector('.modal-window-backdrop');
const closeModalBtn = document.querySelector('.footer-modal-close-btn');

const closeModal = () => {
  modalWindow.classList.remove('is-open');
};
const formSubmit = async event => {
  try {
    event.preventDefault();

    const dataApi = {
      email: pageForm.elements.email.value,
      comment: pageForm.elements.comment.value,
    };
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      dataApi
    );
    if (response.status === 201) {
      modalWindow.classList.add('is-open');
      pageForm.reset();
    }
  } catch (error) {
    iziToast.show({
      theme: 'dark',
      icon: 'icon-person',
      message: 'Sorry, something goes wrong. Please try again!',
      position: 'center',
    });
  }
};
pageForm.addEventListener('submit', formSubmit);

closeModalBtn.addEventListener('click', closeModal);

modalWindow.addEventListener('click', event => {
  if (event.target === modalWindow) {
    closeModal();
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});
