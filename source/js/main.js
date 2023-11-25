import { initSlider } from './slider.js';
import { initTaber } from './taber.js';
import { initNumberRange } from './number-range.js';
import { openModal } from './modal.js';
import { initFeedbackModal } from './feedback-modal.js';

document.querySelectorAll('.slider').forEach(initSlider);

document.querySelectorAll('.taber').forEach((taber, index) => {
  initTaber(taber, `taber-${index + 1}`);
});

document.querySelectorAll('.number-range').forEach(initNumberRange);

const feedbackModalElement = document.querySelector('.modal--feedback');
if (feedbackModalElement) {
  initFeedbackModal(feedbackModalElement, openModal);
}
