import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import { Button } from 'app/components/common/Button';

const Steps = ({
  children,
  openSteps,
  validSteps,
  isValidForms,
  handleAction,
  buttonDisabled,
  ...props
}) => (
  <Styled className="steps">
    {
      React.Children.map(children, (child, i) => {
        const
          step = i + 1,
          nextStep = step + 1;
    
        return (
          React.cloneElement(child, {
            index: step,
            step,
            nextStep,
            isOpen: openSteps[step],
            isValidStep: validSteps[step],
            isNextOpen: openSteps[nextStep],
            last: step === React.Children.count(children),
            ...props
          })
        );
      })
    }

    <div className="steps__button-holder">
      <Button
        disabled={buttonDisabled || !isValidForms()}
        onClick={handleAction}
        className="button--size-big"
      >
        SEND
      </Button>
    </div>
  </Styled>
);

Steps.propTypes = {
  children: PropTypes.node,
  openSteps: PropTypes.object,
  validSteps: PropTypes.object,
  isValidForms: PropTypes.func,
  handleAction: PropTypes.func,
  buttonDisabled: PropTypes.bool
};

export default Steps;