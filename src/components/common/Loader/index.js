import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import LoaderIcon from 'app/components/Icons/Loader';

const Loader = ({
  width,
  height
}) => (
  <Styled>
    <LoaderIcon
      width={width}
      height={height}
    />
  </Styled>
);

Loader.defaultProps = {
  width: '50',
  height: '50'
};

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
};

export default Loader;