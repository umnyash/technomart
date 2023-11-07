const initNumberRange = (numberRangeElement) => {
  const rangeElement = numberRangeElement.querySelector('.number-range__range');
  const minValueFieldElement = numberRangeElement.querySelector('.number-range__min input');
  const maxValueFieldElement = numberRangeElement.querySelector('.number-range__max input');

  noUiSlider.create(rangeElement, {
    start: [minValueFieldElement.value, maxValueFieldElement.value],
    connect: true,
    range: {
      min: +minValueFieldElement.min,
      max: +maxValueFieldElement.max,
    },
    step: +rangeElement.dataset.step,
    format: {
      to(value) {
        return Math.round(value);
      },
      from(value) {
        return parseFloat(value);
      }
    }
  });

  rangeElement.noUiSlider.on('update', () => {
    minValueFieldElement.value = rangeElement.noUiSlider.get()[0];
    maxValueFieldElement.value = rangeElement.noUiSlider.get()[1];
  });

  const onValueFieldChange = (evt) => {
    rangeElement.noUiSlider.set(
      (evt.currentTarget === minValueFieldElement)
        ? [evt.currentTarget.value, null]
        : [null, evt.currentTarget.value],
      true,
      true
    );
  };

  minValueFieldElement.addEventListener('change', onValueFieldChange);
  maxValueFieldElement.addEventListener('change', onValueFieldChange);
};

export { initNumberRange };
