import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  &.columns-with-icon {
    &--documents {
      .date {
        order: 1;
      }

      .document {
        order: 2;

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          order: 3;
        `)}
      }

      .type {
        order: 3;
      }

      .download {
        text-align: right;
        order: 4;

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
          order: 2;
        `)}
      }

      .type {
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
          display: none;
        `)}
      }
    }

    &--account-history {
      .expanded,
      .c-expander {
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
          display: none;
        `)}
      }
    }
  }

  .columns-with-icon {
    &__row {
      display: flex;
      align-items: flex-start;
      padding-bottom: 15px;

      &:last-child {
        padding-bottom: 0;
      }
    }

    &__icon {
      margin: -5px 15px 20px 0;
      flex-shrink: 0;
    }

    &__inner {
      display: flex;
      align-items: center;
      flex: 1;
    }

    &__custom-block {
      margin-bottom: 20px;
    }
  }
`;