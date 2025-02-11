const scrollBtnEl = document.querySelector('.scroll-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtnEl.style.opacity = '1'; // Плавно з'являється
    scrollBtnEl.style.pointerEvents = 'auto'; // Робимо активною
  } else {
    scrollBtnEl.style.opacity = '0'; // Плавно зникає
    scrollBtnEl.style.pointerEvents = 'none'; // Блокуємо натискання
  }
});

scrollBtnEl.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});

scrollBtnEl.addEventListener('mousedown', function () {
  setTimeout(() => {
    this.blur();
  }, 1000); // Прибирає фокус після кліку мишею
});
