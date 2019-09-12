import styled from 'styled-components';

export default styled.div`
  width: 6px;
  border-radius: 8px 0 0 8px;
  background: ${({ theme, color }) => theme.colors[color]};
  flex-shrink: 0;
`;