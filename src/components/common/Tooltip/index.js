import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import {
  getBreakpointDown,
  getBreakpointBetween
} from 'app/styles';

export default styled(ReactTooltip)`
  && {
    &.type-dark {
      box-shadow: 0 4px 28px 0 rgba(194, 198, 210, 0.4);
      background: #fff;
      border: solid 1px ${({ theme }) => theme.colors['grey-7']};
      border-radius: 4px;
      color: ${({ theme }) => theme.colors['grey-2']};
      font-family: "Muli", sans-serif;
      font-size: 12px;
      line-height: 18px;
      max-width: 272px;
      opacity: 1;

      ${({ theme }) => getBreakpointBetween(theme.breakpoints, 'm', 'l', `
        max-width: 160px;
      `)}

      ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
        margin-top: -20px;
      `)}

      &:after,
      &:before {
        right: 100%;
        top: 50%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        left: auto;
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
          right: 85%;
          top: 100%;
        `)}
      }

      &:before {
        border-right-color: ${({ theme }) => theme.colors['grey-7']};
        border-width: 9px;
        margin-top: -9px;
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
          margin-top: 0;
          border-color: transparent;
          border-top-color: ${theme.colors['grey-7']};
        `)}
      }

      &:after {
        border-right-color: #fff;
        border-width: 8px;
        margin-top: -8px;
        ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
          margin-top: -1px;
          border-width: 9px;
          border-color: transparent;
          border-top-color: #fff;
        `)}
      }
    }
  } 
`;