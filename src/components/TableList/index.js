import React from 'react';
import PropTypes from 'prop-types';

import { useData } from './logic';

import Table from './Table';
import Columns from './Columns';
import ColumnsWithIcon from './ColumnsWithIcon';
import List from './List';
import LoadMore from './LoadMore';

const TableList = ({
  renderAs = 'table',
  columns,
  expandedColumns,
  iconName,
  data: allData,
  offset,
  onLoadMore,
  filters,
  className,
  listClassName
}) => {
  const data = useData(allData, offset);

  return (
    <>
      {
        renderAs === 'table' && (
          <Table
            rows={data}
            columns={columns}
            className={className}
          />
        )
      }

      {
        renderAs === 'columns' && (
          <Columns
            rows={data}
            columns={columns}
            className={className}
          />
        )
      }

      {
        renderAs === 'columns-with-icon' && (
          <ColumnsWithIcon
            iconName={iconName}
            rows={data}
            columns={columns}
            expandedColumns={expandedColumns}
            filters={filters}
            className={className}
          />
        )
      }

      {
        (renderAs === 'table' || renderAs === 'columns')
        && (
          <List
            rows={data}
            columns={columns}
            className={listClassName}
          />
        )
      }

      {
        !!offset
        && (offset < allData.length)
        && <LoadMore onClick={onLoadMore} />
      }
    </>
  );
};

TableList.propTypes = {
  renderAs: PropTypes.oneOf([
    'table',
    'columns',
    'columns-with-icon'
  ]),
  columns: PropTypes.arrayOf(PropTypes.object),
  expandedColumns: PropTypes.arrayOf(PropTypes.object),
  iconName: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  offset: PropTypes.number,
  onLoadMore: PropTypes.func,
  filters: PropTypes.object,
  className: PropTypes.string,
  listClassName: PropTypes.string
};

export default TableList;