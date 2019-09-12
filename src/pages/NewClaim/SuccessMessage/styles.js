import styled from 'styled-components';

export default styled.div`
  padding: 15px 0 0;
  text-align: center;

  .create-claim-success-message {
    &__icon {
      margin-bottom: 25px;
    }

    &__message {
      font-size: 16px;
      line-height: 26px;
      margin-bottom: 30px;
    }

    &__ref-number {
      font-size: 14px;
      line-height: 21px;
      font-weight: 500;
    }
  }
`;