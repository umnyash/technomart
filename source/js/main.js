import { initSlider } from './slider.js';
import { initTaber } from './taber.js';
import { initNumberRange } from './number-range.js';
import { openModal, closeModal } from './modal.js';
import { initFeedbackModal } from './feedback-modal.js';
import { sendData } from './api.js';
import { initProductsList } from './products-list.js';
import { initContactsMapModal } from './contacts-map-modal.js';
import { checkLocalStorageSupport } from './util.js';

document.querySelectorAll('.slider').forEach(initSlider);

document.querySelectorAll('.taber').forEach((taber, index) => {
  initTaber(taber, `taber-${index + 1}`);
});

document.querySelectorAll('.number-range').forEach(initNumberRange);

const feedbackModalElement = document.querySelector('.modal--feedback');
if (feedbackModalElement) {
  initFeedbackModal(feedbackModalElement, openModal, closeModal, sendData, checkLocalStorageSupport);
}

document.querySelectorAll('.products-list').forEach((productsListElement) => {
  initProductsList(productsListElement, openModal, closeModal, sendData);
});

const contactsMapModalElement = document.querySelector('.modal--contacts-map');
if (contactsMapModalElement) {
  initContactsMapModal(contactsMapModalElement, openModal);
}
