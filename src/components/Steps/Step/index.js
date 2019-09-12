import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

import Check from 'app/components/Icons/Check';

const getStatus = (isValid, isOpen) => {
  if (isValid && isOpen) {
    return 'success';
  }

  if (isOpen) {
    return 'active';
  }

  return 'pending';
};

const Step = ({
  isOpen,
  isValidStep,
  title,
  index,
  last,
  component: Component,
  ...props
}) => {
  const status = getStatus(isValidStep, isOpen);

  return (
    <Styled
      className={
        classNames(
          'step',
          `step--${status}`,
          { 'step--last': last }
        )
      }
    >
      <div className="step__title-holder">
        <div className="step__status">
          {
            status !== 'success'
              ? (
                <div className="step__number">
                  {index}
                </div>
              )
              : <Check className="step__check" />
          }
        </div>

        <div className="step__title">
          {title}
        </div>
      </div>

      <div className="step__content">
        {
          isOpen && (
            <Component {...props} />
          )
        }
      </div>
    </Styled>
  );
};

export default Step;