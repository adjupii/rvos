import React from 'react';
import PropTypes from 'prop-types';

import BilletTop from './BilletTop';
import BilletLeft from './BilletLeft';

const Billet = ({
  position,
  color
}) => {
  if (position === 'top') {
    return (
      <BilletTop color={color} />
    );
  }

  if (position === 'left') {
    return (
      <BilletLeft color={color} />
    );
  }

  return null;
};

Billet.defaultProps = {
  position: 'top'
};

Billet.propTypes = {
  position: PropTypes.string,
  color: PropTypes.string
};

export default Billet;