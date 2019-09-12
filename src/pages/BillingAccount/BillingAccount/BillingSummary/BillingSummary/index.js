import React from 'react';
import PropTypes from 'prop-types';

import {
  joinedText,
  zipCode
} from 'app/format';

import Styled from './styles';

import TitleWithArrow from 'app/components/EntityDetails/TitleWithArrow';
import AccountContent from 'app/components/BillingAccount/Content';
import House from 'app/components/Icons/House';

const BillingSummary = ({
  billingType,
  data
}) => {
  const {
    billToAddress: {
      state = {},
      ...billToAddress
    } = {},
    ...billing
  } = data;

  return (
    <Styled className="c-billing-summary">
      <TitleWithArrow
        title="Billing"
        initialOpen
        className="title-with-arrow--in-billing-summary title-with-arrow--without-left-indent"
      >
        <AccountContent
          data={data}
          billingType={billingType}
          className="in-billing-summary"
        />
      </TitleWithArrow>

      <TitleWithArrow
        title="Bill To"
        className="title-with-arrow--without-left-indent"
      >
        <div className="c-billing-summary__bill-to-section">
          <House
            width="48"
            height="48"
            className="c-billing-summary__bill-to-icon"
          />

          <div className="c-billing-summary__bill-to-text">
            <div>
              {billing.billToName}
            </div>

            <div>
              {billToAddress.street}
            </div>

            <div>
              {
                joinedText([
                  billToAddress.city,
                  state.abbreviation,
                  zipCode(billToAddress.postalCode)
                ])
              }
            </div>
          </div>
        </div>
      </TitleWithArrow>
    </Styled>
  );
};

BillingSummary.propTypes = {
  billingType: PropTypes.string,
  data: PropTypes.object
};

export default BillingSummary;