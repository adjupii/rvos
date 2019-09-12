import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import { Button } from 'app/components/common/Button';

const LoadMore = ({
  onClick
}) => (
  <Styled className="l-load-more">
    <Button onClick={onClick}>
      LOAD MORE TRANSACTIONS
    </Button>
  </Styled>
);

LoadMore.propTypes = {
  onClick: PropTypes.func
};

export default LoadMore;