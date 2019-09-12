import styled from 'styled-components';

export default styled.h2.attrs({
  className: 'c-app-h2'
})`
  font-size: 23px;
  line-height: 32px;
  font-weight: 600;
  margin: 0 0 30px 34px;

  &.c-app-h2 {
    &--in-title {
      margin: 0;
    }

    &--common-questions {
      margin: 0 0 30px;

      &-dashboard {
        margin: 0 0 14px;
      }
    }

    &--policy-agent {
      margin: 0 0 30px 10px;
    }

    &--contact-us {
      margin: 0 0 30px;
    }

    &--profile {
      margin: 0 0 30px;
    }
  }
`;