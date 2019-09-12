import styled from 'styled-components';

import {
  getBreakpointDown
} from 'app/styles';

export default styled.div`
  display: inline-flex;
  position: relative;

  &.c-select--in-form {
    width: 100%;
  }

  &.c-select--policy-terms {
    .c-select {
      &__selected {
        align-items: flex-start;
      }

      &__selected-value {
        font: 500 13px/20px "Poppins", sans-serif;
      }

      &__arrow-icon {
        margin-top: -2px;
      }

      &__items {
        max-height: 248px;
      }

      &__item {
        padding: 10px 24px;

        .term-date {
          font: 500 13px/20px "Poppins", sans-serif;
        }

        .term-type {
          font: 500 12px/18px "Poppins", sans-serif;
        }
      }
    }

    .term-date {
      margin-bottom: 2px;
    }

    .term-type {
      color: ${({ theme }) => theme.colors['grey-5']};
    }
  }

  .c-select {
    &__selected {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &__selected-value {
      font: 14px/18px "Muli", sans-serif;
      margin-right: 6px;
    }

    &__items {
      padding: 8px 0;
      max-height: 226px;
      overflow-y: auto;
    }

    &__item {
      font: 14px/18px "Muli", sans-serif;
      padding: 12px 16px;
      cursor: pointer;

      &:hover,
      &.is-active {
        background: ${({ theme }) => theme.colors['grey-8']};
      }
    }
  }

  &.c-select--signin {
    display: none;

    ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
      display: flex;
      margin-left: auto;
    `)}

    .c-select__selected-value {
      color: #fff;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;