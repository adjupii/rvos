import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import history from 'app/history';

import Styled from './styles';

import Prev from 'app/components/Icons/Prev';
import Close from 'app/components/Icons/Close';
import H2 from 'app/components/Layouts/App/H2';

const ICONS = {
  prev: Prev,
  close: Close
};

const Title = ({
  title,
  back = false,
  iconName = 'close',
  children,
  className
}) => {
  const Icon = ICONS[iconName];

  return (
    <Styled
      className={
        classNames(
          'c-app-title',
          { 'c-app-title--with-back': back },
          className
        )
      }
    >
      <div className="c-app-title__left">
        {
          back && (
            <Icon
              width="24"
              height="24"
              onClick={history.goBack}
              className={`c-app-title__icon c-app-title__icon--${iconName}`}
            />
          )
        }

        <H2 className="c-app-h2--in-title">
          {title}
        </H2>
      </div>

      {children}
    </Styled>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  back: PropTypes.bool,
  iconName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Title;