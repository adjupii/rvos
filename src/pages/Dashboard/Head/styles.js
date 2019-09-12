import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 46px;

  .avatar {
    width: 94px;
    height: 94px;
  }

  .dashboard-head {
    &__title-holder {
      margin-left: 32px;
    }

    &__title {
      font-size: 27px;
      line-height: 34px;
      font-weight: 600;
      color: #000;
    }

    &__date {
      font-size: 14px;
      color: ${({ theme }) => theme.colors['grey-2']};
    }
  }
`;