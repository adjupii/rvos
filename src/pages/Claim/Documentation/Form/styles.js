import styled from 'styled-components';

export default styled.div`
  height: calc(100% - 20px);
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.colors['grey-7']};

  .claim-form {
    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
      background: ${({ theme }) => theme.colors['grey-9']};
      padding: 19px 24px;
    }

    &__file-type {
      color: ${({ theme }) => theme.colors['grey-5']};
    }

    &__content {
      padding: 24px;
      line-height: 19px;
    }

    &__file-name {
      font-weight: 500;
      height: 54px;
    }

    &__file-desc {
      color: ${({ theme }) => theme.colors['grey-12']};
    }
  }
`;