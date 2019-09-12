import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

import Card from 'app/components/common/Card';

export default styled(Card)`
  width: 500px;
  border-radius: 4px;
  margin-top: 15px;
  display: flex;
  position: relative;

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
    width: 100%;
  `)}

  .notify {
    &__type {
      width: 80px;
      display: flex;
      align-items: center;
      justify-content: center;

      &--info {
        background: ${({ theme }) => theme.colors['gradient-4']};
      }

      &--success {
        background: ${({ theme }) => theme.colors['gradient-1']};
      }

      &--error {
        background: ${({ theme }) => theme.colors['gradient-2']};
      }
    }

    &__message {
      font-size: 16px;
      line-height: 24px;
      color: ${({ theme }) => theme.colors['grey-5']};
      padding: 15px 30px;
      flex: 1;
    }

    &__close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      flex-shrink: 0;
    }
  }

  &.notify {
    &--with-close {
      .notify__message {
        padding-right: 48px;
      }
    }
  }

  &.notify-enter {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }

  &.notify-enter-active {
    visibility: visible;
    transform: translate3d(0, 0, 0);
    transition: all 0.4s;
  }

  &.notify-leave {
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }

  &.notify-leave-active {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
    transition: all 0.4s;
  }
`;