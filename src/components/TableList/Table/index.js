import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

const Table = ({
  rows,
  columns,
  className
}) => (
  <Styled
    className={
      classNames(
        'table',
        className,
        { 'table--only-for-extra-large': columns.length > 3 }
      )
    }
  >
    <thead>
      <tr>
        {
          columns.map(({
            title,
            titleClassName
          }) => (
            <th
              key={title}
              className={titleClassName}
            >
              {title.toUpperCase()}
            </th>
          ))
        }
      </tr>
    </thead>

    <tbody>
      {
        rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {
              columns.map(col => {
                const {
                  title,
                  getValue,
                  width,
                  className
                } = col;

                const value = getValue(row);

                return (
                  <td
                    key={title}
                    width={width}
                    className={className}
                  >
                    {value}
                  </td>
                );
              })
            }
          </tr>
        ))
      }
    </tbody>
  </Styled>
);

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};

export default Table;