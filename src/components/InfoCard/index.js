import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styles';

import H3 from 'app/components/Layouts/App/H3';

const InfoCard = ({
  title,
  children
}) => (
  <Styled className="info-card">
    {
      title && (
        <H3>
          {title}
        </H3>
      )
    }

    <div className="info-card__content">
      {children}
    </div>
  </Styled>
);

InfoCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default InfoCard;