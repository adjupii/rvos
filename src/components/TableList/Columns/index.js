import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Info from 'app/components/EntityDetails/Info';

const Columns = ({
  rows,
  columns,
  className
}) => (
  <Styled
    className={
      classNames(
        'columns',
        className
      )
    }
  >
    {
      rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {
            columns.map(({
              title,
              getValue,
              render,
              colClassName = 'col-6'
            }) => (
              <Col
                key={title}
                className={colClassName}
              >
                {
                  typeof render === 'function'
                    ? render(row)
                    : (
                      <Info
                        label={title}
                        value={getValue(row)}
                        className="in-table-info"
                      />
                    )
                }
              </Col>
            ))
          }
        </Row>
      ))
    }
  </Styled>
);

Columns.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};

export default Columns;