import styled from 'styled-components';

export default styled.div`
  height: 6px;
  border-radius: 8px 8px 0 0;
  background: ${({ theme, color }) => theme.colors[color]};
`;