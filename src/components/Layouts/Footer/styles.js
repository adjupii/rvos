import styled from 'styled-components';

import {
  getBreakpointDown,
  getBreakpointUp,
  getBreakpointOnly
} from 'app/styles';

export default styled.footer`
  font: 600 14px/18px "Muli", sans-serif;

  ${({ theme }) => `
    background: ${theme.colors['grey-17']};
    box-shadow: ${theme.boxShadow};

    ${getBreakpointDown(theme.breakpoints, 'm', `
      font-size: 13px;
      line-height: 16px;
    `)}
  `}

  .footer {
    &__inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      ${({ theme }) => `
        ${getBreakpointUp(theme.breakpoints, 's', `
          height: 60px;
          justify-content: space-between;
        `)}

        ${getBreakpointDown(theme.breakpoints, 's', `
          height: 80px;
          justify-content: center;
        `)}
      `}
    }
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    ${({ theme }) => `
      ${getBreakpointDown(theme.breakpoints, 's', `
        width: 100%;
        justify-content: space-between;
      `)}

      li {
        ${getBreakpointOnly(theme.breakpoints, 's', `
          margin-right: 30px;
        `)}

        ${getBreakpointUp(theme.breakpoints, 's', `
          margin-right: 50px;
        `)}

        &:last-child {
          margin-right: 0;
        }

        a {
          text-decoration: none;
          color: ${theme.colors.main};
        }
      }
    `}
  }
`;