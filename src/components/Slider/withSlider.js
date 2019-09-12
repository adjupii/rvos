import {
  compose,
  withHandlers
} from 'recompose';

export default compose(
  withHandlers(() => {
    let slider;

    return {
      registerSlider: () => ref => {
        slider = ref;
      },

      handleNext: () => () => {
        slider.slickNext();
      },

      handlePrevious: () => () => {
        slider.slickPrev();
      }
    };
  })
);