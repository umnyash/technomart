export const initContactsMapModal = (modalElement, openModal) => {
  document.querySelectorAll('[data-modal-opener="map"]').forEach((opener) => {
    opener.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal(modalElement);
    });
  });
};
