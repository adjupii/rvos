import styled from 'styled-components';

export default styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;

  &.claim-details-status {
    width: 8px;
    height: 8px;
  }

  ${({ theme, color }) => `
    background: ${theme.colors[color]};
  `}
`;