import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.label`
  display: block;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['grey-11']};
  padding: 0 16px;
  cursor: pointer;

  &.claim-policy {
    &--is-selected {
      border-color: ${({ theme }) => theme.colors.link};
    }
  }

  input {
    display: none;
  }

  .claim-policy {
    &__top {
      display: flex;
      padding: 12px 0;
      border-bottom: 1px solid ${({ theme }) => theme.colors['grey-11']};
    }

    &__check-icon {
      margin: 2px 15px 0 0;
      flex-shrink: 0;
    }

    &__desc-holder {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: space-between;
      line-height: 19px;
    }

    &__desc {
      font-weight: 600;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        width: 100%;
        margin-bottom: 8px;
      `)}
    }

    &__bottom {
      padding: 15px 0;
    }
  }
`;