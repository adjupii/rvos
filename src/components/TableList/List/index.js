import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import {
  Row,
  Col
} from 'app/components/common/Grid';
import Info from 'app/components/EntityDetails/Info';

const List = ({
  rows,
  columns,
  className
}) => (
  <Styled
    className={
      classNames(
        'list',
        className,
        { 'list--except-extra-large': columns.length > 3 }
      )
    }
  >
    {
      rows.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {
            columns.map((col, colIndex) => {
              const {
                title,
                getValue,
                colClassName = 'col-6'
              } = col;

              const value = getValue(row);

              if (colIndex === 0) {
                return (
                  <Col
                    key={title}
                    className="col-12"
                  >
                    <div className="list__title">
                      {value}
                    </div>
                  </Col>
                );
              }

              return (
                <Col
                  key={title}
                  className={colClassName}
                >
                  <Info
                    label={title}
                    value={value}
                    className="in-table-info"
                  />
                </Col>
              );
            })
          }
        </Row>
      ))
    }
  </Styled>
);

List.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};

export default List;