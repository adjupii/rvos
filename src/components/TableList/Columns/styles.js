import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.div`
  ${({ theme }) => getBreakpointDown(theme.breakpoints, 'm', `
    display: none;
  `)}
`;