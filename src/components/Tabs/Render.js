import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

import TabsSlider from './TabsSlider';
import TabAccordion from './TabAccordion';

const Tabs = ({
  titles,
  selected,
  handleChangeSelected,
  children,
  className,
  ...props
}) => (
  <Styled
    className={
      classNames(
        'tabs',
        className
      )
    }
    order={(selected + 1) * 2}
  >
    <TabsSlider
      titles={titles}
      selected={selected}
      handleChangeSelected={handleChangeSelected}
      {...props}
    />

    {
      titles.map((title, i) => {
        const
          isSelected = selected === i,
          isFirst = i === 0,
          order = i + i + 1;
    
        return (
          <TabAccordion
            key={title}
            title={title}
            isSelected={isSelected}
            isFirst={isFirst}
            order={order}
            handleClick={handleChangeSelected(i)}
          />
        );
      })
    }

    <div className="tabs__content">
      {
        React.Children.map(children, (child, i) => (
          selected === i
            ? child
            : null
        ))
      }
    </div>
  </Styled>
);

export default Tabs;