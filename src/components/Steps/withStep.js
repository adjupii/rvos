import {
  lifecycle,
  withHandlers,
  compose
} from 'recompose';

export default compose(
  withHandlers(() => {
    let isValidCount = 0;

    return {
      incrementIsValidCount: () => () => {
        isValidCount++;
      },

      getIsValidCount: () => () => isValidCount
    };
  }),

  lifecycle({
    componentDidUpdate(prevProps) {
      const {
        step,
        nextStep,
        isNextOpen,
        toggleValidStep,
        toggleOpenStep,
        setStepsValues,

        getIsValidCount,
        incrementIsValidCount,

        values,
        isValid
      } = this.props;

      /**
       * Workaround for Formik 'isValid' property.
       * For second render when form is invalid, but isValid === true
       */
      if (isValid) {
        incrementIsValidCount();
      }

      if (prevProps.isValid !== isValid) {
        toggleValidStep(step, isValid);
      }
      
      if (!Object.is(prevProps.values, values)) {
        setStepsValues(values);
      }

      if (!isNextOpen && isValid && (getIsValidCount() > 2)) {
        toggleOpenStep(nextStep, true);
      }
    },

    componentDidMount() {
      const {
        isValid,
        step,
        nextStep,
        isNextOpen,
        toggleOpenStep,
        toggleValidStep,
        setStepsValues,
        values
      } = this.props;

      if (isValid) {
        toggleValidStep(step, true);

        setStepsValues(values);
      }

      if (!isNextOpen && isValid) {
        toggleOpenStep(nextStep, true);
      }
    },

    componentWillUnmount() {
      const {
        toggleValidStep,
        step
      } = this.props;

      toggleValidStep(step, false);
    }
  })
);