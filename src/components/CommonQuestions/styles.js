import styled from 'styled-components';

export default styled.div`
  .common-questions {
    &__inner {
      padding: 30px 15px;
    }

    &__item {
      display: flex;
      margin: 0 0 15px;

      &:last-child {
        margin: 0;
      }
    }

    &__item-icon {
      flex-shrink: 0;
      margin: 3px 10px 0 0;
    }

    &__item-question {
      font: 14px/21px "Muli", sans-serif;
      cursor: pointer;
    }
  }
`;