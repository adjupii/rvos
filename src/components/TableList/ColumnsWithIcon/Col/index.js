import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'app/components/common/Grid';
import Info from 'app/components/EntityDetails/Info';

const ColumnsWithIconCol = ({
  row,
  filters,
  title,
  getValue,
  render,
  show,
  colClassName
}) => {
  if (
    typeof show === 'function'
    && !show({
      rowData: row,
      filters
    })
  ) {
    return null;
  }

  return (
    <Col className={colClassName}>
      {
        typeof render === 'function'
          ? (
            <div className="columns-with-icon__custom-block">
              {render(row)}
            </div>
          )
          : (
            <Info
              label={title}
              value={getValue(row)}
              className="in-table-info"
            />
          )
      }
    </Col>
  );
};

ColumnsWithIconCol.propTypes = {
  row: PropTypes.object,
  filters: PropTypes.object,
  title: PropTypes.string,
  getValue: PropTypes.func,
  render: PropTypes.func,
  show: PropTypes.func,
  colClassName: PropTypes.string
};

export default ColumnsWithIconCol;