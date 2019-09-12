import React from 'react';

import { currency } from 'app/format';

import SubSection from '../../SubSection';

const DISCOUNT_COLUMNS = [
  {
    title: 'Discounts',
    getValue: ({ description }) => description,
    className: 'td--bold'
  },
  {
    title: 'Amount',
    getValue: ({
      amount,
      appliedPercentage
    }) => (
      amount && currency(amount) || `${appliedPercentage}%`
    ),
    className: 'td--color-lightgray'
  }
];

const SURCHARGE_COLUMNS = [
  {
    title: 'Surcharges',
    getValue: ({ description }) => description,
    className: 'td--bold'
  },
  {
    title: 'Amount',
    getValue: ({ appliedPercentage }) => `${appliedPercentage}%`,
    className: 'td--color-lightgray'
  }
];

export default {
  discount: props => (
    <SubSection
      title="Discounts"
      columns={DISCOUNT_COLUMNS}
      {...props}
    />
  ),
  surcharge: props => (
    <SubSection
      title="Surcharges"
      columns={SURCHARGE_COLUMNS}
      {...props}
    />
  )
};