import { isUpArrowEvent, isRightArrowEvent, isDownArrowEvent } from './util.js';

const initTaber = (taber, idPrefix) => { // (1)
  const listElement = taber.querySelector('.taber__list');
  const tabElements = Array.from(listElement.querySelectorAll('.taber__tab'));
  const panelElements = taber.querySelectorAll('.taber__panel');

  listElement.setAttribute('role', 'tablist');

  tabElements.forEach((tabElement, index) => {
    tabElement.role = 'tab';
    tabElement.id = `${idPrefix}-tab-${index + 1}`;
    tabElement.tabIndex = -1;
    tabElement.parentNode.role = 'presentation';
  });

  panelElements.forEach((panelElement, index) => {
    panelElement.role = 'tabpanel';
    panelElement.tabIndex = -1;
    panelElement.setAttribute('aria-labelledby', tabElements[index].id);
    panelElement.classList.add('taber__panel--hidden');
  });

  const switchTab = (oldTabElement, newTabElement, isInitialization) => {
    if (oldTabElement) {
      oldTabElement.ariaSelected = null;
      oldTabElement.tabIndex = -1;
      oldTabElement.classList.remove('taber__tab--active');
      const oldIndex = tabElements.indexOf(oldTabElement);
      panelElements[oldIndex].classList.add('taber__panel--hidden');
    }

    if (!isInitialization) {
      newTabElement.focus();
    }

    newTabElement.tabIndex = 0;
    newTabElement.ariaSelected = true;
    newTabElement.classList.add('taber__tab--active');
    const index = tabElements.indexOf(newTabElement);
    panelElements[index].classList.remove('taber__panel--hidden');
  };

  switchTab(null, tabElements[0], true);

  listElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    const tabElement = evt.target.closest('.taber__tab');

    if (!tabElement) {
      return;
    }

    const currentTabElement = listElement.querySelector('[aria-selected]');

    if (tabElement === currentTabElement) {
      return;
    }

    switchTab(currentTabElement, tabElement);
  });

  listElement.addEventListener('keydown', (evt) => {
    const index = tabElements.indexOf(evt.target);

    if (!isUpArrowEvent(evt) && !isRightArrowEvent(evt) && !isDownArrowEvent(evt)) {
      return;
    }

    evt.preventDefault();

    if (isRightArrowEvent(evt)) {
      panelElements[index].focus();
    } else {
      const newIndex = isUpArrowEvent(evt) ? index - 1 : index + 1;

      if (!tabElements[newIndex]) {
        return;
      }

      switchTab(evt.target, tabElements[newIndex]);
    }
  });
};

export { initTaber };

/*
 * Подписи к панелям (taber__panel) добавляются по id вкладок,
 * которые генерируются автоматически. Префикс к id нужен,
 * чтобы на странице не появились вкладки с одинаковыми id,
 * если на странице более одного табера.
 */
