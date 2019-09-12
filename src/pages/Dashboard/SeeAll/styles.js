import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  getBreakpointUp,
  getBreakpointDown
} from 'app/styles';

export default styled(Link)`
  font: 14px/18px "Muli", sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.colors['grey-2']};

  .see-all {
    &__text {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        display: none;
      `)}
    }

    &__icon {
      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'm', `
        display: none;
      `)}
    }
  }
`;