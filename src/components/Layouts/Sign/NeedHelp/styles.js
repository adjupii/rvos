import styled from 'styled-components';

export default styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors['grey-17']};
  font-size: 14px;
  line-height: 18px;

  .need-help {
    &__inner {
      width: 100%;
      text-align: center;
    }
  }

  a {
    color: ${({ theme }) => theme.colors['grey-2']};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;