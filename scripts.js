class Progress extends HTMLElement {
  constructor() {
    super();
  }

  setValue(value) {
    if (!Number.isFinite(value)) {
      return;
    }

    if (value > 100) {
      value = 100;
    }

    if (value < 0) {
      value = 0;
    }

    this.style.setProperty('--progress-value', value);
  }

  isAnimated(isTrue) {
    this.classList.toggle('is-animated', isTrue);
  }

  isHidden(isTrue) {
    this.hidden = isTrue;
  }
}

customElements.define('my-progress', Progress);

const progress = document.getElementById('progress');
const valueInput = document.getElementById('value');
const animateCheckbox = document.getElementById('animate');
const hideCheckbox = document.getElementById('hide');

valueInput.addEventListener('input', (e) => {
  const value = Number(e.target.value);
  progress.setValue(value);
});

animateCheckbox.addEventListener('change', (e) => {
  progress.isAnimated(e.target.checked);
});

hideCheckbox.addEventListener('change', (e) => {
  progress.isHidden(e.target.checked);
});
