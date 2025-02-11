import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const pageForm = document.querySelector('.footer-form');
const modalWindow = document.querySelector('.modal-window-backdrop');
const closeModalBtn = document.querySelector('.footer-modal-close-btn');
const emailInput = document.getElementById('email');
const validationMessage = document.querySelector('.validation-message');

const closeModal = () => {
  modalWindow.classList.remove('is-open');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', handleEscapeKey);
};

const validateEmail = () => {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (emailPattern.test(emailInput.value)) {
    emailInput.classList.remove('invalid');
    emailInput.classList.add('valid');
    validationMessage.textContent = 'Success!';
    validationMessage.classList.remove('invalid');
    validationMessage.classList.add('valid');
  } else {
    emailInput.classList.remove('valid');
    emailInput.classList.add('invalid');
    validationMessage.textContent = 'Invalid email, please try again';
    validationMessage.classList.remove('valid');
    validationMessage.classList.add('invalid');
  }
};

const formSubmit = async event => {
  try {
    event.preventDefault();

    validateEmail();
    if (!emailInput.classList.contains('valid')) {
      return;
    }

    const dataApi = {
      email: emailInput.value,
      comment: pageForm.elements.comment.value,
    };
    const response = await axios.post(
      'https://portfolio-js.b.goit.study/api/requests',
      dataApi
    );
    if (response.status === 201) {
      modalWindow.classList.add('is-open');
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleEscapeKey);
      pageForm.reset();
      emailInput.classList.remove('valid');
      validationMessage.classList.remove('valid');
      validationMessage.textContent = '';
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

emailInput.addEventListener('input', validateEmail);

pageForm.addEventListener('submit', formSubmit);

closeModalBtn.addEventListener('click', closeModal);

modalWindow.addEventListener('click', event => {
  if (event.target === modalWindow) {
    closeModal();
  }
});
const handleEscapeKey = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};
