(() => {
  const openModalBtn = document.querySelector('[data-menu-open]');
  const modal = document.querySelector('[data-menu]');
  const closeModalBtn = document.querySelector('[data-menu-close]');
  const navLinks = document.querySelectorAll('.mobile-nav-link');
  const orderButton = document.querySelector('.mobile-order-button');
  let scrollPosition = 0;

  openModalBtn.addEventListener('click', () => {
    scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add('menu-open');
    modal.classList.add('is-open');
  });

  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    document.body.style.top = '';
    window.scrollTo({ top: scrollPosition });
  });

  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Перехоплюємо поведінку за замовчуванням
      const targetId = link.getAttribute('href').substring(1); // Отримуємо id секції
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        modal.classList.remove('is-open');
        document.body.classList.remove('menu-open');
        document.body.style.top = '';
        setTimeout(() => {
          smoothScrollTo(targetElement);
        }, 300);
      }
    });
  });

  orderButton.addEventListener('click', () => {
    const targetElement = document.getElementById('workTogether');
    if (targetElement) {
      modal.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      setTimeout(() => {
        smoothScrollTo(targetElement);
      }, 300);
    }
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
      document.body.classList.remove('menu-open');
      document.body.style.top = '';
      window.scrollTo({ top: scrollPosition });
    }
  });
})();
