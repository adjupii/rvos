import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
  padding: 14px 20px;

  .c-make-payment-head {
    &__icon {
      margin-right: 12px;
    }

    &__acc-name {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
    }

    &__acc-number {
      font-size: 14px;
      line-height: 21px;
      color: ${({ theme }) => theme.colors['grey-2']};
    }
  }
`;