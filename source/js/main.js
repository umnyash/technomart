import { initSlider } from './slider.js';
import { initTaber } from './taber.js';

document.querySelectorAll('.slider').forEach(initSlider);

document.querySelectorAll('.taber').forEach((taber, index) => {
  initTaber(taber, `taber-${index + 1}`);
});
