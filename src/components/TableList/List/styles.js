import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

export default styled.div`
  ${({ theme }) => getBreakpointUp(theme.breakpoints, 'm', `
    display: none;
  `)}
  
  &.list {
    &--except-extra-large {
      display: block;

      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
        display: none;
      `)}
    }
  }

  .list {
    &__title {
      font: 500 14px/26px "Poppins", sans-serif;
      margin-bottom: 15px;
    }
  }
`;