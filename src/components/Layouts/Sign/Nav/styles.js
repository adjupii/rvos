import styled from 'styled-components';
import {
  getBreakpointDown
} from 'app/styles';

export default styled.nav`
  display: flex;
  height: 100%;
  margin-left: auto;

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
    display: none;
  `)}

  .nav {
    &__item {
      display: flex;
      align-items: center;
      position: relative;
      margin-left: 50px;

      &--active {
        .nav__link {
          opacity: 1;
        }

        .nav__border {
          display: block;
          opacity: 1;
        }
      }

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        margin-right: 15px;
      `)}
    }

    &__border {
      display: none;
      position: absolute;
      width: 16px;
      height: 3px;
      bottom: 0;
      left: 50%;
      margin-left: -8px;
      background: #fff;
      opacity: 0.7;
    }

    &__link {
      cursor: pointer;
      color: #fff;
      opacity: 0.7;
      font-size: 16px;
      line-height: 22px;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        font-size: 14px;
        opacity: 1;
      `)}

      &:hover {
        opacity: 1;
      }
    }
  }
`;