import Accordion from 'accordion-js';

const accordion = new Accordion('.faq-list', {
  duration: 500,
  showMultiple: false,
  onOpen: (currentElement) => {
    const acTrigger = currentElement.querySelector('.ac-trigger');
    
    acTrigger.focus();
    
    acTrigger.addEventListener('mousedown', function () {
      setTimeout(() => {
        this.blur();
      }, 1000);
    });
  }
});
