(() => {
  const openModalBtn = document.querySelector('[data-menu-open]');
  const modal = document.querySelector('[data-menu]');
  const closeModalBtn = document.querySelector('[data-menu-close]');
  const navLinks = document.querySelectorAll('.mobile-nav-link');
  const orderButton = document.querySelector('.mobile-order-button');

  openModalBtn.addEventListener('click', () => {
    modal.style.transition = 'transform 0.3s ease, opacity 0.3s ease, visibility 0.3s ease';
    modal.classList.add('is-open');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Перехоплюємо поведінку за замовчуванням
      const targetId = link.getAttribute('href').substring(1); // Отримуємо id секції
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScrollTo(targetElement);
      }
      modal.classList.remove('is-open');
    });
  });

  orderButton.addEventListener('click', () => {
    const targetElement = document.getElementById('workTogether');
    if (targetElement) {
      smoothScrollTo(targetElement);
    }
    modal.classList.remove('is-open');
  });

  function smoothScrollTo(element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }

  document.addEventListener('click', event => {
    if (event.target === modal) {
      modal.classList.remove('is-open');
    }
  });
})();
