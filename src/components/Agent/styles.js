import styled from 'styled-components';

export default styled.div`
  padding: 5px 6px;
  display: flex;

  .avatar {
    height: 64px;
    width: 64px;
  }

  .agent {
    &__avatar-holder {
      display: flex;
      align-items: center;
      background: ${({ theme }) => theme.colors['grey-15']};
      border-radius: 6px 0 0 6px;
      margin-right: 16px;
      padding: 6px;
    }

    &__avatar-box {
      border-radius: 50%;
      padding: 2px;
      border: 1px solid #d8dbe2;
    }

    &__holder {
      flex: 1;
      align-self: center;
    }

    &__phone-holder {
      display: flex;
    }

    &__name {
      font: 700 16px/20px "Muli", sans-serif;
      margin-bottom: 6px;
    }

    &__phone {
      font: 14px/19px "Muli", sans-serif;
      color: ${({ theme }) => theme.colors['grey-5']};
    }

    &__icon {
      flex-shrink: 0;
      margin-right: 10px;
    }
  }
`;