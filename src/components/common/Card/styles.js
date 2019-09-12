import styled from 'styled-components';

export default styled.div`
  position: relative;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors['grey-7']};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 8px;
`;