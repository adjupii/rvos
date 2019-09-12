import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  border: none;
  margin-bottom: 16px;

  &.c-faq-item--is-open {
    .c-faq-item {
      &__head-inner {
        border-radius: 0 8px 0 0;

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          border-radius: 8px 8px 0 0;
        `)}
      }

      &__head-icon {
        border-radius: 8px 0 0;
      }
    }
  }

  .c-faq-item {
    &__head {
      display: flex;
      cursor: pointer;
    }

    &__head-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      min-height: 60px;
      border-radius: 8px 0 0 8px;
      background: ${({ theme }) => theme.colors['entity-commonQuestions']};
      flex-shrink: 0;

      svg {
        fill: ${({ theme }) => theme.colors.white};
      }

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        display: none;
      `)}
    }

    &__head-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 1;
      padding: 18px 24px;
      border-radius: 0 8px 8px 0;
      border: 1px solid ${({ theme }) => theme.colors['grey-7']};
      border-width: 1px 1px 1px 0;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        padding: 16px;
        border-width: 1px;
        border-radius: 8px;
      `)}
    }

    &__question {
      font-size: 16px;
      line-height: 25px;
      font-weight: 500;
      padding-right: 16px;
    }

    &__body {
      padding: 24px 32px 24px 94px;
      font: 14px/21px "Muli", sans-serif;
      border: 1px solid ${({ theme }) => theme.colors['grey-7']};
      border-width: 0 1px 1px;
      border-radius: 0 0 8px 8px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        padding: 20px 16px;
        font-size: 16px;
        line-height: 26px;
      `)}
    }
  }
`;