import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import ArrowLeft from 'app/components/Icons/ArrowLeft';
import ArrowRight from 'app/components/Icons/ArrowRight';

const SliderArrows = ({
  handlePrevious,
  handleNext,
  className
}) => (
  <Styled
    className={
      classNames(
        'slider-arrows',
        className
      )
    }
  >
    <ArrowLeft
      width="24"
      height="24"
      onClick={handlePrevious}
      className="slider-arrows__icon"
    />

    <ArrowRight
      width="24"
      height="24"
      onClick={handleNext}
      className="slider-arrows__icon slider-arrows__icon--next"
    />
  </Styled>
);

SliderArrows.propTypes = {
  handlePrevious: PropTypes.func,
  handleNext: PropTypes.func,
  className: PropTypes.string
};

export default SliderArrows;