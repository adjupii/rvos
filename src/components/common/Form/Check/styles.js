import styled from 'styled-components';

export default styled.div`
  position: relative;

  input {
    display: none;
  }

  .form-check {
    &__icon {
      position: absolute;
      left: 0;
      top: 5px;
      flex-shrink: 0;
    }

    &__label {
      display: inline-block;
      position: relative;
      cursor: pointer;
      padding-left: 26px;
      font-size: 16px;
      line-height: 27px;
      font-family: "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['grey-6']};
    }
  }
`;