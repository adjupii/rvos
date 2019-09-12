import styled from 'styled-components';

import { getBreakpointDown } from 'app/styles';

export default styled.main`
  padding: 100px 0 30px;
  min-height: calc(100vh - 60px);

  ${({ theme }) => getBreakpointDown(theme.breakpoints, 's', `
    min-height: calc(100vh - 80px);
  `)}
`;