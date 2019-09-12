import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

import Input from '../Input';
import EyeIcon from './EyeIcon';
import ArrowDownFill from 'app/components/Icons/ArrowDownFill';
import Tooltip from 'app/components/common/Tooltip';

const Field = ({
  value,
  label,
  error,
  type,
  changeType,
  eye,
  select,
  name,
  tooltip,
  hasTooltip,
  editMode,
  mask,
  ...props
}) => (
  <Styled
    className={
      classNames(
        'form-field',
        {
          'form-field--is-not-empty': value,
          'form-field--is-error': error,
          'form-field--with-eye': eye,
          'form-field--with-select': select
        }
      )
    }
  >
    {
      editMode === 'static'
        ? (
          <div className="form-field__static">
            {value}
          </div>
        )
        : (
          <Input
            type={type}
            name={name}
            value={value}
            data-tip={tooltip}
            data-for={tooltip && `tooltip-${name}`}
            mask={mask}
            {...props}
          />
        )
    }

    {
      label && (
        <label>
          {label}
        </label>
      )
    }

    {
      eye && (
        <EyeIcon
          onClick={changeType}
          iconName={type === 'password' ? 'Visible' : 'Invisible'}
          className="form-field__eye-icon"
        />
      )
    }

    {
      select && (
        <ArrowDownFill
          width="24"
          height="24"
          className="form-field__arrow-down-icon"
        />
      )
    }

    {
      hasTooltip && (
        <Tooltip
          id={`tooltip-${name}`}
          event="focus"
          eventOff="blur"
          place="right"
          getContent={() => tooltip}
        />
      )
    }

    {
      error && (
        <div className="form-field__error">
          {error}
        </div>
      )
    }
  </Styled>
);

export default Field;