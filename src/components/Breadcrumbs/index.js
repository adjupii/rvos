import React from 'react';
import PropTypes from 'prop-types';

import history from 'app/history';

import Styled from './styles';

import Prev from 'app/components/Icons/Prev';

const Breadcrumbs = ({
  title,
  page
}) => (
  <Styled
    className="breadcrumbs"
    page={page}
  >
    <Prev
      width="24"
      height="24"
      className="breadcrumbs__prev"
      onClick={history.goBack}
    />

    <div className="breadcrumbs__color" />

    {title}
  </Styled>
);

Breadcrumbs.propTypes = {
  page: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Breadcrumbs;