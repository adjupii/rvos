import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  width: 500px;

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
    width: 320px;
    padding: 30px 15px;
  `)}

  &.c-dialog {
    &--with-form {
      .c-dialog__content {
        padding: 0 49px;

        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
          padding: 0;
        `)}
      }
    }

    &--common-question {
      .c-dialog {
        &__title {
          font-size: 16px;
          line-height: 25px;
          font-weight: 500;
        }

        &__content {
          font: 14px/24px "Muli", sans-serif;
        }
      }
    }
  }

  .c-dialog {
    &__title-holder {
      padding-right: 24px;
    }

    &__title {
      font-size: 23px;
      line-height: 34px;
      font-weight: 600;
    }

    &__close {
      position: absolute;
      top: 30px;
      right: 30px;
      cursor: pointer;
    }
  }
`;