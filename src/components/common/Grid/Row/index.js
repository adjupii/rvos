import styled from 'styled-components';

import { getBreakpointsRepeatedStyles } from 'app/styles';

const STYLES = `
  &-top {
    align-items: flex-start;
  }

  &-middle {
    align-items: center;
  }

  &-bottom {
    align-items: flex-end;
  }

  &-start {
    justify-content: flex-start;
  }

  &-center {
    justify-content: center;
  }

  &-end {
    justify-content: flex-end;
  }

  &-around {
    justify-content: space-around;
  }

  &-between {
    justify-content: space-between;
  }
`;

export default styled.div.attrs({
  className: 'row'
})`
  display: flex;
  flex-wrap: wrap;

  margin-left: -15px;
  margin-right: -15px;

  .col {
    padding-left: 15px;
    padding-right: 15px;
  }

  &.row {
    ${STYLES}

    ${({ theme }) => getBreakpointsRepeatedStyles(theme.breakpoints, STYLES)}

    &--no-gutters {
      margin-left: 0;
      margin-right: 0;

      .col {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
`;