import React from 'react';
import PropTypes from 'prop-types';

import {
  currency,
  date
} from 'app/format';

import TableList from 'app/components/TableList';

const UpcomingPayments = ({
  columns,
  data
}) => (
  <TableList
    columns={columns}
    data={data}
  />
);

UpcomingPayments.defaultProps = {
  columns: [
    {
      title: 'Invoice Date',
      getValue: ({ sendDate }) => date(sendDate, 'MM/DD/YYYY'),
      className: 'td--color-lightgray',
    },
    {
      title: 'Due Date',
      getValue: ({ dueDate }) => date(dueDate, 'MM/DD/YYYY'),
      className: 'td--color-lightgray',
    },
    {
      title: 'Amount',
      titleClassName: 'th--right-aligned',
      getValue: ({ amount }) => currency(amount),
      className: 'td--right-aligned td--color-lightgray',
    }
  ]
};

UpcomingPayments.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.arrayOf(PropTypes.object)
};

export default UpcomingPayments;