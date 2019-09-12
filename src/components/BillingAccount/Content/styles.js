import styled from 'styled-components';

import {
  getBreakpointUp,
  getBreakpointDown,
  getBreakpointOnly
} from 'app/styles';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;

  &.in-dashboard,
  &.in-dashboard-half {
    .c-account-content__right {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        display: none;
      `)}
    }
  }

  &.in-dashboard-half {
    .c-account-content {
      &__left {
        ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
          padding-bottom: 20px;
        `)}
      }

      &__right {
        ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
          width: 100%;
          border-width: 1px 0 0 0;
          padding: 20px 14px 0;
        `)}
      }

      &__right-inner {
        ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
          width: 100%;
          flex-direction: row;
        `)}
      }
    }
  }

  &.in-billing-center {
    .c-account-content__right {
      ${({ theme }) => getBreakpointOnly(theme.breakpoints, 's', `
        width: 100%;
        border-left: none;
        padding: 20px 20px 0 167px;
      `)}

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: none;
      `)}
    }

    .c-account-content__right-inner {
      ${({ theme }) => getBreakpointOnly(theme.breakpoints, 's', `
        width: 100%;
        flex-direction: row;
      `)}
    }
  }

  &.in-billing-summary {
    padding: 0;

    .c-account-content {
      &__left {
        padding: 0;
      }

      &__right {
        width: 50%;
        flex-direction: column;
        justify-content: space-between;

        ${({ theme }) => getBreakpointOnly(theme.breakpoints, 'l', `
          width: 100%;
          margin: 18px 0 0 156px;
          padding: 24px 0 0;
          border-width: 1px 0 0 0;
        `)}

        ${({ theme }) => getBreakpointOnly(theme.breakpoints, 'm', `
          padding-right: 0;
        `)}

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
          width: 100%;
          margin-top: 18px;
          padding: 24px 0 0;
          border-width: 1px 0 0 0;
        `)}

        ${({ theme }) => getBreakpointOnly(theme.breakpoints, 's', `
          margin-left: 156px;
        `)}

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          margin-top: 0;
          border-width: 0;
        `)}
      }

      &__right-inner {
        flex-direction: row;

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          display: none;
        `)}

        &.add-info {
          display: flex;

          ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
            align-items: flex-end;
          `)}
        }

        .entity-details-info {
          width: 45%;
        }
      }
    }
  }

  .c-account-content {
    &__balance-chart {
      width: 136px;
      height: 136px;
      position: relative;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        width: 44px;
        height: 44px;
      `)}
    }

    &__remaining-balance-in-chart {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: none;
      `)}
    }

    &__left {
      display: flex;
      flex: 1;
      padding: 0 11px;

      ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
        align-items: center;
      `)}
    }

    &__balance-info {
      flex: 1;
      padding: 0 0 0 20px;
    }

    &__right {
      width: 40%;
      display: flex;
      flex-wrap: wrap;
      border: 1px solid ${({ theme }) => theme.colors['grey-18']};
      border-width: 0 0 0 1px;
      padding: 7px 20px;
    }

    &__right-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &.add-info {
        display: none;
      }
    }

    &__remaining-balance {
      display: none;
      margin-bottom: 30px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: block;
      `)}
    }

    &__amount-due-label {
      padding-bottom: 4px;
    }

    &__amount-due-holder {
      display: flex;
      align-items: center;
    }

    &__amount-due {
      font-size: 26px;
      line-height: 34px;
      color: ${({ theme }) => theme.colors['grey-5']};
      margin-right: 7px;
    }

    &__circle-icon {
      cursor: pointer;
    }

    &__amount-date {
      line-height: 19px;
      color: ${({ theme }) => theme.colors['grey-5']};
      margin-bottom: 10px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        font-size: 14px;
      `)}
    }

    &__make-payment {
      padding-top: 10px;
    }
  }

  .entity-details-info {
    &__label {
      font-size: 12px;
      margin-bottom: 3px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        font-size: 14px;
      `)}
    }

    &__value {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        font-size: 16px;
      `)}
    }
  }
`;