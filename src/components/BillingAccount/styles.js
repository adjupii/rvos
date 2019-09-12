import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  cursor: pointer;
  margin-bottom: 20px;

  &.in-dashboard,
  &.in-dashboard-half {
    display: flex;
  }

  &.in-billing-center {
    .c-account__arrow {
      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'm', `
        display: flex;
      `)}
    }
  }

  .c-account {
    &__inner {
      display: flex;
      flex: 1;
    }

    &__inner-data {
      flex: 1;
    }

    &__arrow {
      display: none;
      width: 40px;
      align-items: center;
      justify-content: center;
      border-left: 1px solid ${({ theme }) => theme.colors['grey-7']};
    }
  }
`;