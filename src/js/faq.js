import Accordion from 'accordion-js';

const accordion = new Accordion('.faq-list', {
  duration: 500,
  showMultiple: false,
});

const myStylesAcTriggerEls = document.querySelectorAll('.faq-desc');
// console.log(myStylesAcTriggerEls);

myStylesAcTriggerEls.forEach(el => {
  el.addEventListener('mousedown', function () {
    setTimeout(() => {
      this.blur();
    }, 1000); // Прибирає фокус після кліку мишею
  });
});
