import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useToggle } from 'app/hooks/toggle';
import useFindItem from 'app/hooks/useFindItem';

import Styled from './styles';

import Selected from './Selected';
import Field from 'app/components/common/Form/Field';
import Dropdown from 'app/components/common/Dropdown';

const Select = ({
  place = 'default',
  inputProps = {},
  items,
  selected,
  onChange,
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

    onSelected = useCallback(
      id => () => {
        toggleIsOpen();

        if (typeof onChange === 'function') {
          onChange(id, inputProps.name);
        }
      },
      [
        toggleIsOpen,
        onChange,
        inputProps.name
      ]
    ),

    { value = '' } = useFindItem(items, selected);

  return (
    <Styled
      className={
        classNames(
          `c-select c-select--${place}`,
          className
        )
      }
    >
      {
        place === 'default' && (
          <Selected
            onClick={toggleIsOpen}
            value={value}
          />
        )
      }

      {
        place === 'in-form' && (
          <Field
            readOnly
            select
            value={value}
            onFocus={toggleIsOpen}
            {...inputProps}
          />
        )
      }

      {
        isOpen && (
          <Dropdown
            onBlur={toggleIsOpen}
            className={
              classNames(
                `c-dropdown--in-select c-dropdown--in-select-${place}`,
                dropdownClassName
              )
            }
          >
            <div className="c-select__items">
              {
                items.map(({
                  id,
                  value
                }) => {
                  const
                    handleChange = onSelected(id),

                    itemClassName = classNames(
                      'c-select__item',
                      { 'is-active': id === selected }
                    );

                  return (
                    <div
                      key={id}
                      onClick={handleChange}
                      onMouseDown={handlePreventDefault}
                      className={itemClassName}
                    >
                      {
                        typeof render === 'function'
                          ? value()
                          : value
                      }
                    </div>
                  );
                })
              }
            </div>
          </Dropdown>
        )
      }
    </Styled>
  );
};

Select.propTypes = {
  place: PropTypes.oneOf([
    'default',
    'in-form'
  ]),
  inputProps: PropTypes.object,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.node
      ])
    })
  ),
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  dropdownClassName: PropTypes.string
};

export default Select;