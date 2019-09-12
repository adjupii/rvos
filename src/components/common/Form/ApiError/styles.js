import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 60px;
  position: absolute;
  color: ${({ theme }) => theme.colors['red-1']};

  .c-api-error{
    &__text{
      padding-left: 15px;
    }
  }
`;