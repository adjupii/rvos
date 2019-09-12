import styled from 'styled-components';

export default styled.div`
  &.title-with-arrow {
    &--without-left-indent {
      .title-with-arrow__box {
        margin-left: 0;
      }
    }

    &--policy-sub-section {
      padding-bottom: 30px;
    }

    &--in-billing-summary {
      margin-bottom: 35px;
    }
  }

  .title-with-arrow {
    &__title-holder {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    &__icon {
      fill: ${({ theme }) => theme.colors['red-3']};
    }

    &__title {
      font: 700 13px/18px "Muli", sans-serif;
      margin-left: 10px;
    }

    &__box {
      margin-top: 24px;
      margin-left: 20px;
    }
  }
`;