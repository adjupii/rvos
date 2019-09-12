import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Styled from './styles';

import Expander from 'app/components/common/Expander';

const TabAccordion = ({
  title,
  order,
  isSelected,
  isFirst,
  handleClick
}) => (
  <Styled
    order={order}
    onClick={handleClick}
    className={
      classNames(
        'tab-accordion',
        {
          'tab-accordion--selected': isSelected,
          'tab-accordion--first': isFirst
        }
      )
    }
  >
    <div className="tab-accordion__title">
      {title}
    </div>

    <Expander isExpanded={isSelected} />
  </Styled>
);

TabAccordion.propTypes = {
  title: PropTypes.string,
  order: PropTypes.number,
  isSelected: PropTypes.bool,
  isFirst: PropTypes.bool,
  handleClick: PropTypes.func
};

export default TabAccordion;