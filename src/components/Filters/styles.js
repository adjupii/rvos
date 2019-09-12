import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-18']};
`;