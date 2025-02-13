document.addEventListener('DOMContentLoaded', function () {
  const dropbtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');
  const themeColorOpenHeaderBtnEl = document.querySelector(
    '.theme-color-open-header-btn'
  );
  const headerOrderButton = document.querySelector('.header-order-button');

  dropbtn.addEventListener('click', function () {
    if (dropdownContent.style.display === 'grid') {
      dropdownContent.style.display = 'none';
      themeColorOpenHeaderBtnEl.classList.remove('is-open');
    } else {
      dropdownContent.style.display = 'grid';
      themeColorOpenHeaderBtnEl.classList.add('is-open');
    }
    dropbtn.classList.remove('hovered');
  });

  dropbtn.addEventListener('mouseover', function () {
    dropbtn.style.color = 'var(--accent-color)';
    dropbtn.style.transform = 'scale(1.2)';
  });

  dropbtn.addEventListener('mouseout', function () {
    dropbtn.style.color = 'var(--white-color)';
    dropbtn.style.transform = 'scale(1)';
  });

  dropbtn.addEventListener('focus', function () {
    dropbtn.style.color = 'var(--accent-color)';
    dropbtn.style.transform = 'scale(1.2)';
  });

  dropbtn.addEventListener('blur', function () {
    dropbtn.style.color = 'var(--white-color)';
    dropbtn.style.transform = 'scale(1)';
  });

  // dropbtn.addEventListener('click', function () {
  //   dropbtn.style.color = 'var(--white-color)';
  //   dropbtn.style.transform = 'scale(1)';
  // });

  const dropdownLinks = dropdownContent.querySelectorAll('a');
  dropdownLinks.forEach(function (link) {
    link.addEventListener('mouseover', function () {
      link.style.color = 'var(--accent-color)';
      link.parentElement.style.transform = 'scale(1.2)';
    });

    link.addEventListener('mouseout', function () {
      link.style.color = 'var(--white-color)';
      link.parentElement.style.transform = 'scale(1)';
    });

    link.addEventListener('focus', function () {
      link.style.color = 'var(--accent-color)';
      link.parentElement.style.transform = 'scale(1.2)';
    });

    link.addEventListener('blur', function () {
      link.style.color = 'var(--white-color)';
      link.parentElement.style.transform = 'scale(1)';
    });

    link.addEventListener('click', function (event) {
      event.preventDefault(); // Перехоплюємо поведінку за замовчуванням
      const targetId = this.getAttribute('href').substring(1); // Отримуємо id секції
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        smoothScrollTo(targetElement);
      }
      dropdownContent.style.display = 'none';
      link.style.color = '';
    });
  });

  function smoothScrollTo(element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth',
    });
  }

  headerOrderButton.addEventListener('click', function () {
    const targetElement = document.getElementById('workTogether');
    if (targetElement) {
      smoothScrollTo(targetElement);
    }
  });
});
