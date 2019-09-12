import React from 'react';

import Styled from './styles';

import CreditCard from './CreditCard';
import visa from 'app/images/credit-cards/visa.png';
import masterCard from 'app/images/credit-cards/mastercard.png';
import express from 'app/images/credit-cards/express.png';
import discover from 'app/images/credit-cards/discover.png';

const AcceptedCards = () => (
  <Styled className="c-accepted-cards">
    <div className="c-accepted-cards__title">
      We accept:
    </div>

    <div className="c-accepted-cards__holder">
      <CreditCard image={visa} />

      <CreditCard image={masterCard} />

      <CreditCard image={express} />

      <CreditCard image={discover} />
    </div>
  </Styled>
);

export default AcceptedCards;