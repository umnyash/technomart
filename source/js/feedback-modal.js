export const initFeedbackModal = (modalElement, openModal) => {
  document.querySelectorAll('[data-modal-opener="feedback"]').forEach((opener) => {
    opener.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal(modalElement);
    });
  });
};
