import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import Button from './Button';

const TabsSlider = ({
  titles,
  selected,
  handleChangeSelected,
  withSlider,
  registerSlider,
  handleScroll,
  handlePrev,
  handleNext,
  start,
  end,
  showButtons
}) => {
  const onScroll = withSlider ? handleScroll : undefined;

  return (
    <Styled
      className={
        classNames(
          'tabs-slider',
          { 'tabs-slider--with-buttons': showButtons }
        )
      }
    >
      {
        showButtons && (
          <Button
            name="prev"
            isDisabled={!start}
            action={handlePrev}
          />
        )
      }
  
      <div
        ref={registerSlider}
        onScroll={onScroll}
        className="tabs-slider__inner"
      >
        <div className="tabs-slider__list">
          {
            titles.map((title, i) => (
              <div
                key={title}
                className={
                  classNames(
                    'tabs-slider__tab',
                    { 'tabs-slider__tab--selected': selected === i }
                  )
                }
              >
                <div
                  onClick={handleChangeSelected(i)}
                  className="tabs-slider__tab-title"
                >
                  {title}
                </div>
  
                <div className="tabs-slider__tab-border" />
              </div>
            ))
          }
        </div>
      </div>
  
      {
        showButtons && (
          <Button
            name="next"
            isDisabled={!end}
            action={handleNext}
          />
        )
      }
    </Styled>
  );
};

TabsSlider.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.number,
  handleChangeSelected: PropTypes.func,
  withSlider: PropTypes.bool,
  registerSlider: PropTypes.func,
  handleScroll: PropTypes.func,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  start: PropTypes.bool,
  end: PropTypes.bool,
  showButtons: PropTypes.bool
};

export default TabsSlider;