import styled from 'styled-components';

import {
  getBreakpointUp,
  getBreakpointDown
} from 'app/styles';

export default styled.div`
  margin-bottom: 14px;

  ${({ theme }) => `
    ${getBreakpointUp(theme.breakpoints, 'xl', `
      min-width: 132px;
    `)}

    ${getBreakpointDown(theme.breakpoints, 'xl', `
      margin-left: 25px;
    `)}
  `}

  .policy-billing {
    &__value {
      font: 18px/23px "Muli", sans-serif;
      color: ${({ theme, valueColor }) => theme.colors[valueColor]};
    }

    &__label {
      font: 10px/19px "Muli", sans-serif;

      ${({ theme }) => `
        color: ${theme.colors['grey-3']};

        ${getBreakpointDown(theme.breakpoints, 'l', `
          margin-top: 2px;
          font-size: 13px;
        `)}
      `}
    }
  }
`;