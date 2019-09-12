import styled from 'styled-components';

export default styled.div`
  margin-top: 8px;
  text-align: center;
  font: 11px/19px "Muli", sans-serif;

  .profile-status {
    &__title {
      color: ${({ theme }) => theme.colors['grey-3']};
    }

    &__error {
      ${({ theme }) => `
        color: ${theme.colors['red-1']};
      `}
    }
  }
`;