import styled from 'styled-components';

export default styled.label`
  display: block;
  width: 100px;
  cursor: pointer;
  margin-bottom: 24px;

  &.claim-type {
    &--selected {
      .claim-type__title {
        color: ${({ theme }) => theme.colors.link};
      }
    }
  }

  input {
    display: none;
  }

  .claim-type {
    &__title {
      font-family: "Muli", sans-serif;
      font-weight: 600;
      text-align: center;
    }
  }
`;