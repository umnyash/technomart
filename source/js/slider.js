const initSlider = (sliderElement) => {
  new Splide(sliderElement, { // eslint-disable-line
    type: 'fade',
    rewind: 'true',
    waitForTransition: true,
    classes: {
      arrows: 'slider__navigation',
      arrow: 'slider__navigation-button',
      prev: 'slider__navigation-button--prev',
      next: 'slider__navigation-button--next',
      pagination: 'slider__pagination',
      page: 'slider__pagination-button',
    },
  }).mount();
};

export { initSlider };
