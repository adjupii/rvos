import React from 'react';
import classNames from 'classnames';

import Styled from './styles';

import Icons from 'app/components/Icons/ClaimWhatHappened';

const ClaimType = ({
  id,
  title,
  iconName,
  selected,
  ...props
}) => {
  const Icon = Icons[iconName];

  return (
    <Styled
      className={
        classNames(
          'claim-type',
          { 'claim-type--selected':  selected }
        )
      }
      htmlFor={id}
    >
      <input
        type="radio"
        id={id}
        value={id}
        checked={selected}
        {...props}
      />

      {
        Icon && (
          <Icon
            width="100"
            height="100"
            selected={selected}
            gradientId={`${iconName}-gradient`}
          />
        )
      }

      <div className="claim-type__title">
        {title}
      </div>
    </Styled>
  );
};

export default ClaimType;