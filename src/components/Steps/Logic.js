import React from 'react';
import {
  withStateHandlers,
  withHandlers,
  compose
} from 'recompose';

export default compose(
  withStateHandlers(
    ({
      openSteps = { 1: true },
      stepsValues = {},
      children
    }) => {
      const validSteps = {};

      React.Children.forEach(children, (child, i) => {
        validSteps[i + 1] = false;
      });

      return {
        validSteps,
        openSteps,
        stepsValues
      };
    },

    {
      toggleValidStep: ({ validSteps }) => (id, isValid = false) => {
        return {
          validSteps: {
            ...validSteps,
            [id]: isValid
          }
        };
      },

      toggleOpenStep: ({ openSteps }) => (id, isOpen = false) => {
        return {
          openSteps: {
            ...openSteps,
            [id]: isOpen
          }
        };
      },

      setStepsValues: ({ stepsValues }) => values => {
        return {
          stepsValues: {
            ...stepsValues,
            ...values
          }
        };
      }
    }
  ),

  withHandlers({
    handleAction: ({ action, stepsValues }) => () => {
      if (typeof action === 'function') {
        action(stepsValues);
      }
    },

    isValidForms: ({ validSteps }) => () => {
      const arr = Object.keys(validSteps).map(key => validSteps[key]);

      return !arr.includes(false);
    }
  })
);