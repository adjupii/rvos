import styled from 'styled-components';

export default styled.div`
  font: 16px/27px "Muli", sans-serif;
  color: ${({ theme }) => theme.colors['grey-2']};

  .form-text {
    &__text-link {
      color: ${({ theme }) => theme.colors.link};
    }
  }
`;