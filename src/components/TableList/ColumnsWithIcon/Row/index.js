import React from 'react';
import PropTypes from 'prop-types';

import { useToggle } from 'app/hooks/toggle';

import { Row } from 'app/components/common/Grid';
import Col from '../Col';
import Expander from 'app/components/common/Expander';

const ColumnsWithIconRow = ({
  icon: Icon,
  columns,
  expandedColumns = [],
  row,
  filters
}) => {
  const
    [ isOpen, toggleIsOpen ] = useToggle(),

    isExpanded = !!expandedColumns.length;

  return (
    <div className="columns-with-icon__row">
      <Icon
        width="48"
        height="48"
        className="columns-with-icon__icon"
      />

      <Row className="columns-with-icon__inner">
        {
          columns.map(col => (
            <Col
              key={`${row.id}-${col.title}`}
              row={row}
              filters={filters}
              {...col}
            />
          ))
        }

        {
          isExpanded
          && (
            <div className="columns-with-icon__custom-block expander">
              <Expander
                isExpanded={isOpen}
                onClick={toggleIsOpen}
              />
            </div>
          )
        }

        {
          isExpanded
          && isOpen
          && (
            expandedColumns.map(col => (
              <Col
                key={`${row.id}-${col.title}`}
                row={row}
                filters={filters}
                {...col}
              />
            ))
          )
        }
      </Row>
    </div>
  );
};

ColumnsWithIconRow.propTypes = {
  icon: PropTypes.func,
  columns: PropTypes.arrayOf(PropTypes.object),
  expandedColumns: PropTypes.arrayOf(PropTypes.object),
  row: PropTypes.object,
  filters: PropTypes.object
};

export default ColumnsWithIconRow;