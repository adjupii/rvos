import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px dashed ${({ theme }) => theme.colors.link};
  color: ${({ theme }) => theme.colors.link};
  font-size: 14px;

  height: 105px;

  .dropzone {
    &__icon {
      margin-bottom: 15px;
    }
  }
`;