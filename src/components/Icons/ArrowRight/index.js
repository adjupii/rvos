import React from 'react';

import Styled from './styles';

const ArrowRight = props => (
  <Styled
    viewBox="0 0 24 24"
    className="arrow-right"
    {...props}
  >
    <path d="M8.646 6.354a.5.5 0 1 1 .708-.708L15.707 12l-6.353 6.354a.5.5 0 0 1-.708-.708L14.293 12 8.646 6.354z" />
  </Styled>
);

export default ArrowRight;