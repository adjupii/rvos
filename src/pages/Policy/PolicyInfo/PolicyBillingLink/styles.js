import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
  display: inline-flex;

  color: ${({ theme }) => theme.colors['grey-2']};
  text-decoration: none;
  font-size: 11px;

  svg {
    margin-right: 6px;
  }
`;