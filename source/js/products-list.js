const PRODUCT_BUY_URL = 'https://echo.htmlacademy.ru';
const BUTTON_PENDING_STATE_CLASS = 'button--pending';

export const initProductsList = (productsListElement, openModal, closeModal, sendData) => {
  productsListElement.addEventListener('click', (evt) => {
    const buyButtonElement = evt.target.closest('.product__buy-button');

    if (buyButtonElement) {
      evt.preventDefault();

      buyButtonElement.disabled = true;
      buyButtonElement.classList.add(BUTTON_PENDING_STATE_CLASS);

      sendData(
        PRODUCT_BUY_URL,
        'product ID',
        () => {
          const successAlertTemplateElement = document.querySelector('#add-cart-success-alert-modal-template').content.querySelector('.modal');
          const successAlertElement = successAlertTemplateElement.cloneNode(true);
          const succesAlertCloseButtonElement = successAlertElement.querySelector('.alert__close-button');
          succesAlertCloseButtonElement.addEventListener('click', (evt) => { // eslint-disable-line
            evt.preventDefault();
            closeModal(successAlertElement);
          });
          document.body.appendChild(successAlertElement);
          openModal(successAlertElement);
        },
        () => {
          const errorAlertTemplateElement = document.querySelector('#add-cart-error-alert-modal-template').content.querySelector('.modal');
          const errorAlertElement = errorAlertTemplateElement.cloneNode(true);
          document.body.appendChild(errorAlertElement);
          openModal(errorAlertElement);
        },
        () => {
          buyButtonElement.disabled = false;
          buyButtonElement.classList.remove(BUTTON_PENDING_STATE_CLASS);
        },
      );
    }
  });
};
