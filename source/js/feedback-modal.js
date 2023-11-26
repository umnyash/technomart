const SUBMIT_BUTTON_PENDING_STATE_CLASS = 'main-button--pending';

export const initFeedbackModal = (modalElement, openModal, closeModal, sendData) => {
  const formElement = modalElement.querySelector('form');
  const nameFieldElement = formElement.querySelector('[name="name"]');
  const emailFieldElement = formElement.querySelector('[name="email"]');
  const textFieldElement = formElement.querySelector('[name="text"]');
  const submitButtonElement = formElement.querySelector('button[type="submit"]');
  const errorTextWrapperElement = formElement.querySelector('.feedback-form__error-text-wrapper');

  const actionUrl = formElement.getAttribute('action');

  document.querySelectorAll('[data-modal-opener="feedback"]').forEach((opener) => {
    opener.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalElement.classList.remove('modal--error');
      errorTextWrapperElement.innerHTML = '';
      openModal(modalElement);
    });
  });

  nameFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
  emailFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';
  emailFieldElement.dataset.pristineEmailMessage = 'Введите корректный адрес электронной почты.';
  textFieldElement.dataset.pristineRequiredMessage = 'Заполните это поле.';

  const pristine = new Pristine(formElement, { // eslint-disable-line
    classTo: 'form__item',
    errorClass: 'invalid',
    errorTextParent: 'form__item',
    errorTextTag: 'p',
    errorTextClass: 'prompt-text',
  });

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      errorTextWrapperElement.innerHTML = '';
      submitButtonElement.disabled = true;
      submitButtonElement.classList.add(SUBMIT_BUTTON_PENDING_STATE_CLASS);

      sendData(
        actionUrl,
        new FormData(evt.target),
        () => {
          formElement.reset();
          closeModal(modalElement);

          const successAlertTemplateElement = document.querySelector('#feedback-success-alert-modal-template').content.querySelector('.modal');
          const successAlertElement = successAlertTemplateElement.cloneNode(true);
          document.body.appendChild(successAlertElement);
          openModal(successAlertElement);
        },
        () => {
          const errorTextElementString = `
          <p class="feedback-form__error-text">
            ❌ Ошибка при оправке письма.<br> Проверьте подключение к интернету и попробуйте ещё раз.
          </p>
          `;
          errorTextWrapperElement.insertAdjacentHTML('beforeend', errorTextElementString);
          modalElement.classList.remove('modal--error');
          setTimeout(() => modalElement.classList.add('modal--error'), 50);
        },
        () => {
          submitButtonElement.disabled = false;
          submitButtonElement.classList.remove(SUBMIT_BUTTON_PENDING_STATE_CLASS);
        }
      );
    } else {
      modalElement.classList.remove('modal--error');
      setTimeout(() => modalElement.classList.add('modal--error'), 50);
    }
  });
};
