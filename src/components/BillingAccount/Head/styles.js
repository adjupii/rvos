import styled from 'styled-components';

import {
  getBreakpointUp,
  getBreakpointDown
} from 'app/styles';

export default styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
  padding: 14px 20px;
  
  &.in-dashboard,
  &.in-dashboard-half {
    border-bottom-style: dashed;
  }

  &.in-dashboard-half {
    .c-account-head__warning {
      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
        margin-top: 20px;
        margin-left: 12px;
        width: 100%;
        order: 1;
      `)}
    }
  }

  &.with-warning {
    .c-account-head__actions {
      margin-left: 20px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        margin-left: auto;
      `)}
    }
  }

  .c-account-head {
    &__icon {
      margin: 0 10px 0 0;
      flex-shrink: 0;
    }

    &__account-number {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }

    &__warning {
      display: flex;
      align-items: center;
      margin-left: auto;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        margin-top: 20px;
        margin-left: 12px;
        width: 100%;
        order: 1;
      `)}
    }

    &__warning-icon {
      margin-right: 5px;
    }

    &__warning-message {
      font-size: 14px;
      line-height: 21px;
      color: ${({ theme }) => theme.colors['red-1']};
    }

    &__actions {
      margin-left: auto;
    }
  }
`;