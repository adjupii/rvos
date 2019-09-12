import styled from 'styled-components';
import {
  getBreakpointDown
} from 'app/styles';

export default styled.div`
  .l-sign-up-step-1{
    &__form-wrapper{
      margin-bottom: 20px;
      
      ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
        margin-top: 20px;
      `)}
    }
  }
`;