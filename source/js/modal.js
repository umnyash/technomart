import { isEscapeEvent } from './util.js';

const MODAL_DISAPPEARANCE_TIME = 300;
const openedModals = [];

export const openModal = (modal) => {
  modal.classList.add('modal--open');
  openedModals.push(modal);
  document.addEventListener('keydown', onModalEscapeEvent);
  document.addEventListener('click', onModalClick);
};

export const closeModal = (modal) => {
  modal.classList.add('modal--closing');
  openedModals.pop();
  document.removeEventListener('keydown', onModalEscapeEvent);
  document.removeEventListener('click', onModalClick);

  setTimeout(() => {
    modal.classList.remove('modal--open');
    modal.classList.remove('modal--closing');
  }, MODAL_DISAPPEARANCE_TIME);
};

function onModalEscapeEvent(evt) {
  if(!isEscapeEvent(evt)) {
    return;
  }

  evt.preventDefault();
  closeModal(openedModals[openedModals.length - 1]);
}

function onModalClick({ target }) {
  if (!target.classList.contains('modal') && !target.classList.contains('modal__close')) {
    return;
  }

  closeModal(openedModals[openedModals.length - 1]);
}
