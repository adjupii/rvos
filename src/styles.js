import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const getBreakpointsRepeatedStyles = (bps, styles) => (
  Object.keys(bps).map(bp => `
      @media (min-width: ${bps[bp]}px) {
        &-${bp} {
          ${styles}
        }
      }
    `
  )
);

export const getBreakpointUp = (bps, bp, styles) => `
  @media (min-width: ${bps[bp]}px) {
    ${styles}
  }
`;

export const getBreakpointDown = (bps, bp, styles) => `
  @media (max-width: ${bps[bp] - 1}px) {
    ${styles}
  }
`;

export const getBreakpointOnly = (bps, min, styles) => {
  const
    keys = Object.keys(bps),
    max = keys[keys.indexOf(min) + 1];

  return `
    @media (min-width: ${bps[min]}px)
    and (max-width: ${bps[max] - 1}px) {
      ${styles}
    }
  `;
};

export const getBreakpointBetween = (bps, min, max, styles) => `
  @media (min-width: ${bps[min]}px)
  and (max-width: ${bps[max] - 1}px) {
    ${styles}
  }
`;

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: underline;

    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }

  ${normalize};

  body {
    background-color: ${({ theme }) => theme.colors['grey-1']};
    color: ${({ theme }) => theme.colors.main};
    font: 12px/16px "Poppins", sans-serif;
  }
`;