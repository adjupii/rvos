import styled from 'styled-components';

import {
  getBreakpointDown,
  getBreakpointBetween
} from 'app/styles';

export default styled.div`
  position: relative;

  h2 {
    font-size: 28px;
    line-height: 42px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.main};
    margin: 0;

    ${({ theme }) => getBreakpointBetween(theme.breakpoints, 's', 'l', `
      text-align: left;
    `)}

    ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
      font-size: 20px;
    `)}
  }

  .title {
    &__icon-back {
      position: absolute;
      top: 10px;
      left: -50px;
      cursor: pointer;

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        left: -10px;
      `)}
    }
  }
`;