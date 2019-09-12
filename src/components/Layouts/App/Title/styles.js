import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 30px 34px;

  &.c-app-title {
    &--with-back {
      margin: 0 0 30px;
    }

    &--in-dashboard {
      margin: 0 0 14px;
    }

    &--policy-details {
      align-items: flex-start;
      margin: 0 0 21px 34px;
    }

    &--claim-center {
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        flex-direction: column;
        align-items: flex-start;

        .c-app-title__left {
          margin-bottom: 20px;
        }
      `)}
    }
  }

  .c-app-title {
    &__left {
      display: flex;
    }

    &__icon {
      margin-right: 16px;
      cursor: pointer;

      &--prev {
        align-self: center;
      }
    }
  }
`;