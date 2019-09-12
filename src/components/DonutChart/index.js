import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  useCircumference,
  useDashOffset
} from './logic';

import Styled from './styles';

const DonutChart = ({
  total,
  items,
  className
}) => {
  const
    circumference = useCircumference(65),
    
    dashOffset = useDashOffset(items, total, circumference);

  return (
    <Styled
      viewBox="0 0 136 136"
      className={
        classNames(
          'c-donut-chart',
          className
        )
      }
    >
      <circle
        cx="68"
        cy="68"
        r="65"
        fill="transparent"
        className="c-donut-chart__circle-main"
      />

      {
        items.map((item, index) => {
          const {
            dash,
            offset
          } = dashOffset[index];

          return (
            <circle
              key={index}
              cx="68"
              cy="68"
              r="65"
              fill="transparent"
              strokeDasharray={dash.join(' ')}
              strokeDashoffset={offset}
              className={
                classNames(
                  'c-donut-chart__circle',
                  item.className
                )
              }
            />
          );
        })
      }
    </Styled>
  );
};

DonutChart.propTypes = {
  total: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object),
  className: PropTypes.string
};

export default DonutChart;