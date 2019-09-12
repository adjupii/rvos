import React, { useCallback } from 'react';

import { useFitersData } from './logic';
import useFilters from 'app/hooks/useFilters';
import useLoadMore from 'app/hooks/useLoadMore';

import {
  currency,
  date
} from 'app/format';

import Filters from 'app/components/Filters';
import TableList from 'app/components/TableList';

const AccountHistory = ({
  data,
  filtersList,
  ...restProps
}) => {
  const
    [
      {
        filteredData,
        filters
      },
      handleFilter
    ] = useFilters(data),

    {
      offset,
      setOffset,
      handleLoadMore
    } = useLoadMore(3),

    handeFilterChange = useCallback(
      (data, filter) => {
        setOffset(3);

        handleFilter(data, filter);
      },
      [ setOffset, handleFilter ]
    ),

    filtersData = useFitersData(data);

  return (
    <>
      {
        Object.keys(filtersData.policyNumber).length > 1 && (
          <Filters
            filters={filtersList}
            filtersData={filtersData}
            data={data}
            onChange={handeFilterChange}
          />
        )
      }

      <TableList
        renderAs="columns-with-icon"
        iconName="PaymentSmall"
        isExpander
        offset={offset}
        onLoadMore={handleLoadMore}
        data={filteredData}
        filters={filters}
        className="columns-with-icon--account-history"
        {...restProps}
      />
    </>
  );
};

AccountHistory.defaultProps = {
  filtersList: [
    {
      type: 'select',
      paramName: 'policyNumber',
      pivot: {
        id: '',
        value: 'Show for all policies'
      }
    }
  ],
  columns: [
    {
      title: 'Description',
      getValue: ({ description }) => description,
      colClassName: 'col-12 col-s-4'
    },
    {
      title: 'Date',
      getValue: ({ datePosted }) => date(datePosted, 'MM/DD/YYYY'),
      colClassName: 'col-12 col-s-4'
    },
    {
      title: 'Amount',
      getValue: ({ amountPosted }) => currency(amountPosted),
      colClassName: 'col-12 col-s-4 col-m-3'
    }
  ],
  expandedColumns: [
    {
      title: 'Balance',
      getValue: ({ runningBalance }) => currency(runningBalance),
      show: ({ filters }) => !filters.policyNumber,
      colClassName: 'col-4 expanded'
    },
    {
      title: 'Policy',
      getValue: ({ policyNumber }) => policyNumber || '-',
      colClassName: 'col-4 expanded'
    },
    {
      title: 'Policy Eff.',
      getValue: ({ effectiveDate }) => (
        effectiveDate ? date(effectiveDate, 'MM/DD/YYYY') : '-'
      ),
      colClassName: 'col-3 expanded'
    }
  ]
};

export default AccountHistory;