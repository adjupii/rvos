import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  font-family: "Muli", sans-serif;
  line-height: 19px;

  &.in-dashboard {
    ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
      .policy-address-date__address {
        margin-bottom: 0;
      }

      .policy-address-date__date {
        display: none;
      }
    `)}
  }

  &.in-claim-policy {
    font-size: 12px;
  }

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
    font-size: 15px;
  `)}

  .policy-address-date {
    &__address,
    &__date {
      display: flex;
    }

    &__address {
      margin-bottom: 16px;
    }

    &__icon {
      flex-shrink: 0;
      margin: 1px 10px 0 0;
    }
  }
`;