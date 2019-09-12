import styled from 'styled-components';

import { getBreakpointsRepeatedStyles } from 'app/styles';

const STYLES = `
  &-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  &-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  &-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  &-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  &-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  &-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  &-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  &-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  &-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  &-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  &-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  &-12 {
    flex-basis: 100%;
    max-width: 100%;
  }
  
  &-offset-0 {
    margin-left: 0;
  }
  
  &-offset-1 {
    margin-left: 8.33333333%;
  }
  
  &-offset-2 {
    margin-left: 16.66666667%;
  }
  
  &-offset-3 {
    margin-left: 25%;
  }
  
  &-offset-4 {
    margin-left: 33.33333333%;
  }
  
  &-offset-5 {
    margin-left: 41.66666667%;
  }
  
  &-offset-6 {
    margin-left: 50%;
  }
  
  &-offset-7 {
    margin-left: 58.33333333%;
  }
  
  &-offset-8 {
    margin-left: 66.66666667%;
  }
  
  &-offset-9 {
    margin-left: 75%;
  }
  
  &-offset-10 {
    margin-left: 83.33333333%;
  }
  
  &-offset-11 {
    margin-left: 91.66666667%;
  }
`;

export default styled.div.attrs({
  className: 'col'
})`
  &.col {
    ${STYLES}

    ${({ theme }) => getBreakpointsRepeatedStyles(theme.breakpoints, STYLES)}
  }
`;