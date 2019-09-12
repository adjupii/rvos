import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  .c-billing-summary {
    &__bill-to-section {
      display: flex;
      flex-wrap: wrap;
    }

    &__bill-to-icon {
      margin-right: 30px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: none;
      `)}
    }

    &__bill-to-text {
      font-size: 14px;
      line-height: 21px;
      color: ${({ theme }) => theme.colors['grey-6']};
    }
  }
`;