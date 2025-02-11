document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers-section');

  if (coversSection) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio >= 0.5) {
            startAnimation();
          } else {
            stopAnimation();
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // 50% елемента має бути видимим
      }
    );

    observer.observe(coversSection);
  }

  function startAnimation() {
    const marqueeItems = document.querySelectorAll('.marquee-item');
    marqueeItems.forEach(item => {
      item.style.animationPlayState = 'running';
    });
  }

  function stopAnimation() {
    const marqueeItems = document.querySelectorAll('.marquee-item');
    marqueeItems.forEach(item => {
      item.style.animationPlayState = 'paused';
    });
  }
});
