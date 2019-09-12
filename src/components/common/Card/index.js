import React, { forwardRef } from 'react';

import Styled from './styles';

import Billet from './Billet';

const Card = forwardRef((
  {
    billet,
    billetPosition,
    children,
    ...props
  },
  ref
) => (
  <Styled
    ref={ref}
    {...props}
  >
    {
      billet && (
        <Billet
          position={billetPosition}
          color={billet}
        />
      )
    }

    {children}
  </Styled>
));

export default Card;