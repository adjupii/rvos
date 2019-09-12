import styled from 'styled-components';

import { getBreakpointsRepeatedStyles } from 'app/styles';

const STYLES = `
  &-none {
    display: none;
  }

  &-block {
    display: block;
  }

  &-flex {
    display: flex;
  }
`;

export default styled.div.attrs({
  className: 'd'
})`
  &.d {
    ${STYLES}

    ${({ theme }) => getBreakpointsRepeatedStyles(theme.breakpoints, STYLES)}
  }
`;