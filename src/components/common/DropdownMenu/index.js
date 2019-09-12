import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useToggle } from 'app/hooks/toggle';

import Styled from './styles';

import DropdownIcon from 'app/components/Icons/Dropdown';
import Dropdown from 'app/components/common/Dropdown';

const DropdownMenu = ({
  items,
  renderIcon,
  onClick,
  className,
  dropdownClassName
}) => {
  const
    [ isOpen, toggleIsOpen ] = useToggle(),

    handlePreventDefault = useCallback(
      e => {
        e.preventDefault();
      },
      []
    ),

    handleClick = useCallback(
      onClick => () => {
        toggleIsOpen();

        if (typeof onClick === 'function') {
          onClick();
        }
      },
      [ toggleIsOpen ]
    );

  return (
    <Styled
      onClick={onClick}
      className={
        classNames(
          'c-dropdown-menu',
          className
        )
      }
    >
      <div
        onClick={toggleIsOpen}
        onMouseDown={handlePreventDefault}
        className="c-dropdown-menu__icon"
      >
        {
          typeof renderIcon === 'function'
            ? (
              renderIcon({
                isOpen
              })
            )
            : (
              <DropdownIcon
                width="24"
                height="24"
              />
            )
        }
      </div>

      {
        isOpen && (
          <Dropdown
            onBlur={toggleIsOpen}
            onMouseDown={handlePreventDefault}
            className={
              classNames(
                'c-dropdown--in-dropdown-menu',
                dropdownClassName
              )
            }
          >
            <ul>
              {
                items.map((
                  {
                    component: Component = Link,
                    onClick,
                    ...item
                  },
                  i
                ) => {
                  const handleOnClick = handleClick(onClick);

                  return (
                    <li key={i}>
                      <Component
                        onClick={handleOnClick}
                        {...item}
                      />
                    </li>
                  );
                })
              }
            </ul>
          </Dropdown>
        )
      }
    </Styled>
  );
};

DropdownMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  renderIcon: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  dropdownClassName: PropTypes.string
};

export default DropdownMenu;