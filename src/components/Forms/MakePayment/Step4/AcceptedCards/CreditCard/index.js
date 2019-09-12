import React from 'react';
import PropTypes from 'prop-types';

import Image from 'app/components/new/Image';

const CreditCard = ({
  image
}) => (
  <div className="c-accepted-cards__card">
    <Image src={image} />
  </div>
);

CreditCard.propTypes = {
  image: PropTypes.string
};

export default CreditCard;