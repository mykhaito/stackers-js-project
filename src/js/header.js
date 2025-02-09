document.addEventListener('DOMContentLoaded', function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const headerOrderButton = document.querySelector('.header-order-button');

  dropbtn.addEventListener('click', function () {
    if (dropdownContent.style.display === 'grid') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'grid';
    }
  });

  const dropdownLinks = dropdownContent.querySelectorAll('a');
  dropdownLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Перехоплюємо поведінку за замовчуванням
      const targetId = this.getAttribute('href').substring(1); // Отримуємо id секції
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScrollTo(targetElement);
      }
      dropdownContent.style.display = 'none';
    });
  });

  headerOrderButton.addEventListener('click', function () {
    const targetElement = document.getElementById('covers'); //<!--Тимчасове посилання на секцію COVERS щоб провірити, потрібно замінити на workTogether-->
    if (targetElement) {
      smoothScrollTo(targetElement);
    }
  });

  function smoothScrollTo(element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }
});
