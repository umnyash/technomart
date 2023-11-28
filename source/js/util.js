import { KeyCode } from './const.js';

export const isUpArrowEvent = (evt) => evt.code === KeyCode.UP_ARROW;
export const isRightArrowEvent = (evt) => evt.code === KeyCode.RIGHT_ARROW;
export const isDownArrowEvent = (evt) => evt.code === KeyCode.DOWN_ARROW;
export const isEscapeEvent = (evt) => evt.code === KeyCode.ESCAPE;

export const checkLocalStorageSupport = () => {
  let isSupport = true;

  try {
    localStorage.getItem('test');
  } catch (err) {
    isSupport = false;
  }

  return isSupport;
};
