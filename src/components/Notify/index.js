import styled from 'styled-components';

import Card from 'app/components/common/Card';

export default styled(Card).attrs(
  ({
    type = 'info'
  }) => ({
    className: `c-notify c-notify--${type}`
  })
)`
  text-align: center;
  padding: 20px;
  border-radius: 4px;
  font-size: 16px;
  line-height: 25px;

  ${({ theme }) => `
    &.c-notify {
      &--info {
        border-color: ${theme.colors['blue-2']};
        color: ${theme.colors['grey-2']};
      }

      &--error {
        border-color: ${theme.colors['red-1']};
        color: ${theme.colors['red-1']};
      }
    }
  `};

  .c-notify__text {
    margin-bottom: 15px;
  }

  &.c-notify {
    &--policy-closed {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 30px;

      .c-notify__icon {
        margin-right: 10px;
      }
    }

    &--dashboard-warning {
      margin-bottom: 30px;
    }
  }
`;