import React from 'react';

import Styled from './styles';

const Loupe = props => (
  <Styled
    viewBox="0 0 15 15"
    className="c-loupe"
    {...props}
  >
    <path d="M9.926 10.536A5.976 5.976 0 016 12c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6a5.974 5.974 0 01-1.376 3.821.508.508 0 01.019.018l3.77 3.77a.5.5 0 11-.707.708l-3.77-3.77a.51.51 0 01-.01-.011zM6 1C3.242 1 1 3.242 1 6s2.242 5 5 5c2.759 0 5-2.241 5-5 0-2.758-2.241-5-5-5z" />
  </Styled>
);

export default Loupe;