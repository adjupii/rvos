import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  joinedText,
  zipCode,
  period
} from 'app/format';

import Styled from './styles';

import State from 'app/components/Icons/State';
import Calendar from 'app/components/Icons/Calendar';

const PolicyAddressDate = ({
  address,
  date,
  className
}) => (
  <Styled
    className={
      classNames(
        'policy-address-date',
        className
      )
    }
  >
    {
      address && (
        <div className="policy-address-date__address">
          <State
            width="16"
            height="16"
            className="policy-address-date__icon"
          />

          <div>   
            {
              joinedText([
                address.street,
                address.city,
                address.state.fullName,
                zipCode(address.postalCode)
              ])
            }
          </div>
        </div>
      )
    }

    <div className="policy-address-date__date">
      <Calendar
        width="16"
        height="16"
        className="policy-address-date__icon"
      />

      <div>
        {period(date.beginDate, date.endDate)}
      </div>
    </div>
  </Styled>
);

PolicyAddressDate.propTypes = {
  address: PropTypes.object,
  date: PropTypes.object,
  className: PropTypes.string
};

export default PolicyAddressDate;