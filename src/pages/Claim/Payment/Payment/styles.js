import styled from 'styled-components';

export default styled.div`
  .claim-payment {
    &__amount {
      text-align: right;
      margin-bottom: 20px;
    }

    &__amount-label {
      font: 11px/19px "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['grey-3']};
      margin-bottom: 3px;
    }

    &__amount-value {
      font: 22px/28px "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['blue-1']};
    }
  }
`;