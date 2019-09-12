import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useToggle } from 'app/hooks/toggle';

import Styled from './styles';

import Rotate from 'app/components/common/Rotate';
import ArrowRightFill from 'app/components/Icons/ArrowRightFill';

const TitleWithArrow = ({
  title,
  children,
  initialOpen,
  className
}) => {
  const [ isOpen, toggleIsOpen ] = useToggle(initialOpen);

  const componentClassName = classNames(
    'title-with-arrow',
    className
  );

  return (
    <Styled className={componentClassName}>
      <div
        onClick={toggleIsOpen}
        className="title-with-arrow__title-holder"
      >
        <Rotate to={isOpen ? 90 : 0}>
          <ArrowRightFill
            width="10"
            height="15"
            className="title-with-arrow__icon"
          />
        </Rotate>

        <div className="title-with-arrow__title">
          {title}
        </div>
      </div>

      {
        isOpen && (
          <div className="title-with-arrow__box">
            {children}
          </div>
        )
      }
    </Styled>
  );
};

TitleWithArrow.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  initialOpen: PropTypes.bool,
  className: PropTypes.string
};

export default TitleWithArrow;