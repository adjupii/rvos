import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import File from 'app/components/Icons/File';
import PaymentSmall from 'app/components/Icons/PaymentSmall';
import Row from './Row';

const ICONS = {
  File,
  PaymentSmall
};

const ColumnsWithIcon = ({
  iconName,
  rows,
  columns,
  expandedColumns = [],
  filters,
  className
}) => {
  const Icon = ICONS[iconName];

  return (
    <Styled
      className={
        classNames(
          'columns-with-icon',
          className
        )
      }
    >
      {
        rows.map(row => (
          <Row
            key={row.id}
            icon={Icon}
            columns={columns}
            expandedColumns={expandedColumns}
            row={row}
            filters={filters}
          />
        ))
      }
    </Styled>
  );
};

ColumnsWithIcon.propTypes = {
  iconName: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  expandedColumns: PropTypes.arrayOf(PropTypes.object),
  filters: PropTypes.object,
  className: PropTypes.string
};

export default ColumnsWithIcon;