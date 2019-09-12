import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

export default styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  background: #fff;
  box-shadow: 0 2px 64px 0 rgba(194, 198, 210, 0.4);
  padding: 70px 0 24px;
  height: 100%;
  width: 0;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.3s;
  
  &.nav-mobile--is-open {
    width: 100%;

    ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
      width: 250px;
    `)}
  }

  .nav-mobile {
    &__close {
      position: absolute;
      top: 23px;
      left: 30px;
      cursor: pointer;
    }
  
    &__link {
      display: flex;
      align-items: center;
      height: 46px;
      text-decoration: none;
      position: relative;
      margin-top: 24px;
      color: ${({ theme }) => theme.colors.main};
  
      &:hover,
      &--active {
        font-weight: 600;
  
        .nav-mobile__link-icon {
          fill: ${({ theme }) => theme.colors['red-2']};
        }
      }
  
      &--active {
        .nav-mobile__link-sep {
          display: block;
        }
      }

      &-icon {
        fill: ${({ theme }) => theme.colors['grey-4']};
        flex-shrink: 0;
        margin: 0 24px;
      }

      &-sep {
        width: 3px;
        height: 100%;
        background: ${({ theme }) => theme.colors['red-2']};
        position: absolute;
        border-radius: 2px;
        right: 0;
        top: 0;
        display: none;
      }
    }
  }
`;