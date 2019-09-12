import styled from 'styled-components';

import {
  getBreakpointUp,
  getBreakpointDown,
  getBreakpointBetween
} from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
    flex-direction: column;
  `)}

  .policy {
    &__inner {
      display: flex;
      flex: 1;
      padding: 20px 0;
    }

    &__info {
      flex: 1;
    }

    &__left-right {
      display: flex;
      flex-wrap: wrap;
      padding: 0 24px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        padding: 0 16px;
      `)}
    }

    &__left-right-divider {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
        display: none;
      `)}
    }

    &__left {
      width: 100%;

      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
        width: 50%;
      `)}
    }

    &__right {
      width: 100%;

      ${({ theme }) => getBreakpointUp(theme.breakpoints, 'xl', `
        flex: 1;
      `)}
    }

    &__billing-info {
      padding-top: 30px;

      ${({ theme }) => `
        ${getBreakpointDown(theme.breakpoints, 'm', `
          display: none;
        `)}

        ${getBreakpointUp(theme.breakpoints, 'xl', `
          padding-top: 4px;
          padding-bottom: 4px;
        `)}
      `}
    }

    &__warning {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      ${({ theme }) => `
        ${getBreakpointUp(theme.breakpoints, 'xl', `
          height: 100%;
        `)}

        ${getBreakpointBetween(theme.breakpoints, 's', 'xl', `
          flex-direction: row;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'xl', `
          padding-top: 30px;
        `)}
      `}
    }

    &__warning-message {
      font-size: 14px;
      line-height: 21px;
      text-align: center; 
      padding: 11px 0 0 0;
      color: ${({ theme }) => theme.colors['red-1']};

      ${({ theme }) => getBreakpointBetween(theme.breakpoints, 's', 'xl', `
        padding: 0 0 0 8px;
      `)}
    }

    &__payment-plan {
      font: 700 13px/18px "Muli", sans-serif;
      margin-bottom: 20px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
        font-size: 14px;
      `)}
    }

    &__billing-holder {
      display: flex;
      margin-bottom: -14px;

      ${({ theme }) => `
        ${getBreakpointUp(theme.breakpoints, 'xl', `
          flex-wrap: wrap;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'xl', `
          margin-left: -25px;
        `)}
      `}
    }

    &__billing-row {
      display: flex;

      &--next-payment {
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
          display: none;
        `)}
      }
    }

    &__arrow-holder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;

      ${({ theme }) => `
        border-left: 1px solid ${theme.colors['grey-7']};

        ${getBreakpointDown(theme.breakpoints, 'm', `
          display: none;
        `)}
      `}
    }

    &__claims {
      padding: 20px 0 0;
      
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        display: none;
      `)}
    }
  }
`;