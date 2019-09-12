import React from 'react';
import PropTypes from 'prop-types';

import Attention from 'app/components/Icons/Attention';

import Styled from './styles';

const ApiError = ({ children }) => (
  <Styled className="c-api-error">
    <Attention
      width="24"
      height="24"
    />

    <span className="c-api-error__text">
      {children}
    </span>
  </Styled>
);

ApiError.propTypes = {
  children: PropTypes.node,
};

export default ApiError;