import styled from 'styled-components';

export default styled.div`
  position: relative;

  .c-dropdown-menu__icon {
    cursor: pointer;
  }

  ul {
    margin: 0;
    padding: 8px 0;
    list-style: none;
    max-height: 226px;
    overflow-y: auto;

    li {
      font: 14px/18px "Muli", sans-serif;
    }

    a {
      display: block;
      padding: 12px 16px;
      color: ${({ theme }) => theme.colors.main};
      text-decoration: none;

      &:hover {
        background: ${({ theme }) => theme.colors['grey-8']};
      }
    }
  }

  &.c-dropdown-menu--header-profile {
    margin-left: auto;
  }
`;