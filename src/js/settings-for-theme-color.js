const onContentLoadedFn = () => {
  const choosingThemeFormEl = document.querySelector('.choosing-theme-form');
  const themeRadioEls = document.querySelectorAll('.theme-color-js');
  const accentRadioEls = document.querySelectorAll('.accent-color-js');
  const root = document.documentElement;

  // Об'єкт для відповідності теми кольорам
  const themes = {
    dark: {
      '--background-color': '--black-color',
      '--main-text-color': '--white-color',

      '--cards-color': '--grey-color',
      '--modal-back-drop-color': '--black-color-transpent-06',

      '--color-transpent-02': '--white-color-transpent-02',
      '--color-transpent-04': '--white-color-transpent-04',
      '--color-transpent-06': '--white-color-transpent-06',

      '--inverted-color-transpent-02': '--black-color-transpent-02',
      '--inverted-color-transpent-04': '--black-color-transpent-04',
      '--inverted-color-transpent-06': '--black-color-transpent-06',
    },

    light: {
      '--background-color': '--white-color',
      '--main-text-color': '--black-color',

      '--cards-color': '--grey-non-parallel-color',
      '--modal-back-drop-color': '--white-color-transpent-06',

      '--color-transpent-02': '--black-color-transpent-02',
      '--color-transpent-04': '--black-color-transpent-04',
      '--color-transpent-06': '--black-color-transpent-06',

      '--inverted-color-transpent-02': '--white-color-transpent-02',
      '--inverted-color-transpent-04': '--white-color-transpent-04',
      '--inverted-color-transpent-06': '--white-color-transpent-06',
    },
  };

  // Об'єкт для відповідності акцентного кольору
  const accents = {
    red: '--red-theme-color',
    lime: '--lime-theme-color',
    royalBlue: '--royal-blue-theme-color',
    crimsonOrange: '--crimson-orange-theme-color',
    deepTeal: '--deep-teal-theme-color',
    brightOrange: '--bright-orange-theme-color',
  };

  const pageFooterEl = document.querySelector('.page-footer');
  const heroSectionEl = document.querySelector('.hero-section');

  // Функція для застосування теми
  function applyTheme(theme, accent) {
    // Змінюємо CSS-змінні для теми
    if (themes[theme]) {
      if (themes[theme] === themes.light) {
        pageFooterEl.classList.add('white-theme');
      } else {
        pageFooterEl.classList.remove('white-theme');
      }

      Object.entries(themes[theme]).forEach(([key, value]) => {
        root.style.setProperty(key, `var(${value})`);
      });
    }

    // Змінюємо акцентний колір
    if (accents[accent]) {
      root.style.setProperty('--accent-color', `var(${accents[accent]})`);
    }

    const removeAllClassesFromHeroSectionEl = () => {
      heroSectionEl.classList.remove('red');
      heroSectionEl.classList.remove('lime');
      heroSectionEl.classList.remove('royal-blue');
      heroSectionEl.classList.remove('crimson-orange');
      heroSectionEl.classList.remove('deep-teal');
      heroSectionEl.classList.remove('bright-orange');
    };

    switch (accent) {
      case 'red':
        removeAllClassesFromHeroSectionEl();
        heroSectionEl.classList.add('red');
        break;
      case 'lime':
        removeAllClassesFromHeroSectionEl();
        heroSectionEl.classList.add('lime');
        break;
      case 'royalBlue':
        removeAllClassesFromHeroSectionEl();
        heroSectionEl.classList.add('royal-blue');
        break;
      case 'crimsonOrange':
        removeAllClassesFromHeroSectionEl();
        heroSectionEl.classList.add('crimson-orange');
        break;
      case 'deepTeal':
        removeAllClassesFromHeroSectionEl();
        heroSectionEl.classList.add('deep-teal');
        break;
      case 'brightOrange':
        removeAllClassesFromHeroSectionEl();
        heroSectionEl.classList.add('bright-orange');
        break;
    }
  }

  const savedTheme = localStorage.getItem('theme-color') || 'dark'; // Збережена або дефолтна тема
  const savedAccent = localStorage.getItem('accent-color') || 'red'; // Збережений або дефолтний колір

  // Застосовуємо збережені налаштування
  applyTheme(savedTheme, savedAccent);

  themeRadioEls.forEach(radio => {
    if (radio.value === savedTheme) {
      radio.checked = true;
    }
  });
  accentRadioEls.forEach(radio => {
    if (radio.value === savedAccent) {
      radio.checked = true;
    }
  });

  choosingThemeFormEl.addEventListener('submit', event => {
    event.preventDefault();

    const selectedTheme = document.querySelector(
      '.theme-color-js:checked'
    ).value;
    const selectedAccent = document.querySelector(
      '.accent-color-js:checked'
    ).value;

    localStorage.setItem('theme-color', selectedTheme);
    localStorage.setItem('accent-color', selectedAccent);

    applyTheme(selectedTheme, selectedAccent);
  });

  const themeColorOpenMenuBtnEl = document.querySelector(
    '.theme-color-open-menu-btn'
  );
  const themeColorOpenHeaderBtnEl = document.querySelector(
    '.theme-color-open-header-btn'
  );
  const themeColorCloseBtnEl = document.querySelector('.theme-color-close-btn');
  const themeColorSetBtnEl = document.querySelector('.theme-color-set-btn');
  // const themeColorDefaultBtnEl = document.querySelector(
  //   '.theme-color-default-btn'
  // );

  const arrOfBtnsForBlur = [
    themeColorOpenMenuBtnEl,
    themeColorOpenHeaderBtnEl,
    themeColorCloseBtnEl,
    themeColorSetBtnEl,
    // themeColorDefaultBtnEl,
  ];

  arrOfBtnsForBlur.forEach(btn => {
    btn.addEventListener('mousedown', function () {
      setTimeout(() => {
        this.blur();
      }, 1000);
    });
  });

  const mobileMenuModalEl = document.querySelector('[data-menu]');
  const modalForThemeColorEl = document.querySelector('.modal-for-theme-color');
  const themeColorContainerEl = document.querySelector(
    '.theme-color-container'
  );

  function openThemeModal({ target }) {
    if (target === themeColorOpenMenuBtnEl) {
      mobileMenuModalEl.classList.remove('is-open');
      document.body.classList.remove('menu-open');

      document.body.classList.add('modal-for-theme-open');
      setTimeout(() => {
        modalForThemeColorEl.classList.add('is-open');
      }, 300);
    } else if (target === themeColorOpenHeaderBtnEl) {
      document.body.classList.add('modal-for-theme-open');
      modalForThemeColorEl.classList.add('is-open');
    }
  }
  function closeThemeModal() {
    modalForThemeColorEl.classList.remove('is-open');
    document.body.classList.remove('modal-for-theme-open');
  }

  themeColorOpenMenuBtnEl.addEventListener('click', openThemeModal);
  themeColorOpenHeaderBtnEl.addEventListener('click', openThemeModal);
  themeColorCloseBtnEl.addEventListener('click', closeThemeModal);
  modalForThemeColorEl.addEventListener('click', ({ target }) => {
    if (target === themeColorContainerEl || target === modalForThemeColorEl) {
      closeThemeModal();
    }
  });
};

document.addEventListener('DOMContentLoaded', onContentLoadedFn);
