import React from 'react';
import PropTypes from 'prop-types';

import { useTotalAmount } from 'app/hooks/claims';

import {
  currency,
  date
} from 'app/format';

import Styled from './styles';

import TitleWithIcon from 'app/components/EntityDetails/TitleWithIcon';
import TableList from 'app/components/TableList';

const Payment = ({
  data,
  columns
}) => {
  const totalAmount = useTotalAmount(data);

  return (
    <Styled className="claim-payment">
      <TitleWithIcon
        iconName="ClaimPayment"
        value="Payments Made"
      >
        <div className="claim-payment__amount">
          <div className="claim-payment__amount-label">
            Total Amount
          </div>

          <div className="claim-payment__amount-value">
            {currency(totalAmount)}
          </div>
        </div>

        <TableList
          columns={columns}
          data={data}
        />
      </TitleWithIcon>
    </Styled>
  );
};

Payment.defaultProps = {
  columns: [
    {
      title: 'Issue Date',
      getValue: ({ checkDate }) => date(checkDate, 'MM/DD/YYYY'),
      className: 'td--color-lightgray'
    },
    {
      title: 'Check Number',
      getValue: ({ checkNo }) => checkNo,
      className: 'td--color-lightgray'
    },
    {
      title: 'Paid To',
      getValue: ({ payee }) => payee,
      className: 'td--color-lightgray',
      width: '180px'
    },
    {
      title: 'Amount',
      getValue: ({ amount }) => currency(amount),
      className: 'td--bold'
    },
    {
      title: 'Description',
      getValue: ({ description }) => description,
      className: 'td--color-lightgray'
    }
  ]
};

Payment.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object)
};

export default Payment;