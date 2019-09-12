import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.svg`
  width: 100%;
  height: 100%;

  &.account-balance {
    .paid-balance {
      stroke: ${({ theme }) => theme.colors['green-1']};
    }

    .past-due-balance {
      stroke: ${({ theme }) => theme.colors['red-1']};
    }
  }

  &.in-dashboard {
    ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
      .c-donut-chart {
        &__circle-main {
          stroke-width: 3px;
        }

        &__circle {
          stroke-width: 5px;
        }
      }
    `)}
  }

  .c-donut-chart {
    &__circle-main {
      stroke-width: 1px;
      stroke: ${({ theme }) => theme.colors['grey-3']};
    }

    &__circle {
      stroke-width: 2px;
    }
  }
`;