import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { getBreakpointDown } from 'app/styles';

export default styled(Link)`
  display: inline-flex;
  align-items: center;

  font-family: "Muli", sans-serif;
  font-weight: 600;
  line-height: 20px;

  ${({ theme }) => `
    color: ${theme.colors['grey-6']};

    ${getBreakpointDown(theme.breakpoints, 'l', `
      font-size: 14px;
    `)}
  `}

  svg {
    margin-right: 8px;
  }
`;