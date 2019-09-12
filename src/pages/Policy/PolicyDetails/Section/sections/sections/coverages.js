import React from 'react';

import { currency } from 'app/format';

import SubSection from '../../SubSection';

const DEDUCTIBLES_COLUMNS = [
  {
    title: 'Type',
    getValue: ({ description }) => description,
    className: 'td--bold'
  },
  {
    title: 'Amount',
    getValue: ({ value }) => value,
    className: 'td--color-lightgray',
    width: '150px'
  },
  {
    title: 'Premium',
    getValue: ({ premium }) => (
      currency(
        premium,
        { minimumFractionDigits: 0 }
      )
    ),
    className: 'td--color-lightgray',
    width: '150px'
  }
];

const COVERAGES_COLUMNS = [
  {
    title: 'Coverage',
    getValue: ({ description }) => description,
    className: 'td--bold'
  },
  {
    title: 'Limit',
    getValue: ({ coverageAmount }) => (
      currency(
        coverageAmount.limit,
        { minimumFractionDigits: 0 }
      )
    ),
    className: 'td--color-lightgray',
    width: '150px'
  },
  {
    title: 'Premium',
    getValue: ({ coverageAmount }) => (
      currency(
        coverageAmount.annualPremium,
        { minimumFractionDigits: 0 }
      )
    ),
    className: 'td--color-lightgray',
    width: '150px'
  }
];

const ADDITIONAL_COVERAGES_COLUMNS = [
  {
    title: 'Coverage',
    getValue: ({ description }) => description,
    className: 'td--bold'
  },
  {
    title: 'Limit',
    getValue: ({ coverageAmount }) => (
      currency(
        coverageAmount.limit,
        { minimumFractionDigits: 0 }
      )
    ),
    className: 'td--color-lightgray',
    width: '150px'
  },
  {
    title: 'Premium',
    getValue: ({ coverageAmount }) => (
      currency(
        coverageAmount.annualPremium,
        { minimumFractionDigits: 0 }
      )
    ),
    className: 'td--color-lightgray',
    width: '150px'
  }
];

const EXCLUSIONS_COLUMNS = [
  {
    title: 'Exclusions',
    getValue: ({ description }) => description,
    className: 'td--bold'
  }
];

export default {
  deductibles: props => (
    <SubSection
      title="Deductibles"
      columns={DEDUCTIBLES_COLUMNS}
      {...props}
    />
  ),
  mandatory: props => (
    <SubSection
      title="Coverages"
      columns={COVERAGES_COLUMNS}
      {...props}
    />
  ),
  additional: props => (
    <SubSection
      title="Additional Coverages"
      columns={ADDITIONAL_COVERAGES_COLUMNS}
      {...props}
    />
  ),
  exclusion: props => (
    <SubSection
      title="Exclusions"
      columns={EXCLUSIONS_COLUMNS}
      {...props}
    />
  )
};