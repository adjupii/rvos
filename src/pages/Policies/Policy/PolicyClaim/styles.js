import styled from 'styled-components';

import {
  getBreakpointUp,
  getBreakpointDown
} from 'app/styles';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;

  ${({ theme }) => `
    border-top: 1px solid ${theme.colors['grey-7']};

    ${getBreakpointDown(theme.breakpoints, 'l', `
      padding: 24px;
    `)}
  `}

  &:last-child {
    padding-bottom: 0;
  }

  .policy-claim {
    &__status-holder {
      display: flex;
      align-items: center;
      margin-left: -6px;
      max-width: 40%;
    }

    &__status {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.colors['gradient-3']};
      border-radius: 8px;
      width: 30px;
      height: 30px;
      margin-right: 16px;
    }

    &__loss-type {
      font-weight: 500;
      line-height: 20px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'l', `
        font-size: 13px;
      `)}
    }

    &__right {
      display: flex;
      align-items: center;
    }

    &__number {
      display: flex;
      align-items: center;
      width: 105px;
      font: 14px/18px "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['grey-5']};

      &-icon {
        margin-right: 8px;
        flex-shrink: 0;
      }
    }

    &__loss-date {
      width: 80px;
      margin-left: 10px;
      text-align: right;

      ${({ theme }) => `
        color: ${theme.colors['grey-2']};

        ${getBreakpointDown(theme.breakpoints, 'l', `
          width: 90px;
          font-size: 14px;
          line-height: 18px;
        `)}
      `}
    }

    &__show-claim {
      font-family: "Muli", san-serif;
      font-weight: 700;
      line-height: 18px;
      margin-left: 24px;

      ${({ theme }) => `
        ${getBreakpointUp(theme.breakpoints, 'xl', `
          margin-left: 75px;
        `)}

        ${getBreakpointDown(theme.breakpoints, 'l', `
          font-size: 14px;
        `)}
      `}
    }
  }
`;