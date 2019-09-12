import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  &.step {
    &--active {
      .step__status {
        border-color: ${({ theme }) => theme.colors.main};
      }
    }

    &--success {
      .step__status {
        border-color: ${({ theme }) => theme.colors.link};
      }
    }

    &--pending {
      ${({ theme }) => `
        .step__status {
          border-color: ${theme.colors['grey-2']};
        }

        .step__number {
          color: ${theme.colors['grey-2']};
        }
      `}
    }

    &--last {
      .step__content {
        border-left: 1px solid ${({ theme }) => theme.colors.white};
      }
    }
  }

  .step {
    &__title {
      font-size: 19px;
      line-height: 24px;
      font-weight: 500;

      &-holder {
        display: flex;
        align-items: center;
      }
    }

    &__status {
      margin-right: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      height: 42px;
      width: 42px;
      border-radius: 50%;
      border-width: 1px;
      border-style: solid;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        width: 24px;
        height: 24px;
        margin-right: 16px;
      `)}
    }

    &__check {
      width: 18px;
      height: 14px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        width: 10px;
        height: 7px;
      `)}
    }

    &__number {
      font: 19px/24px "Muli", sans-serif;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        font-size: 14px;
        line-height: 18px;
      `)}
    }

    &__content {
      margin-left: 20px;
      padding: 20px 0 20px 46px;

      ${({ theme }) => `
        border-left: 1px dashed ${theme.colors['grey-14']};

        ${getBreakpointDown(theme.breakpoints, 's', `
          margin-left: 11px;
          padding-left: 28px;
        `)}
      `}
    }
  }
`;