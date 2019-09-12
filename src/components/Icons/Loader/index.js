import React from 'react';

import Styled from './styles';

const Loader = props => (
  <Styled
    viewBox="0 0 100 100"
    {...props}
  >
    <circle
      fill="none"
      strokeWidth="3"
      cx="50"
      cy="50"
      r="44"
    />

    <circle
      fill="#fff"
      strokeWidth="2"
      cx="8"
      cy="54"
      r="6"
    />
  </Styled>
);

Loader.defaultProps = {
  color: 'link'
};

export default Loader;