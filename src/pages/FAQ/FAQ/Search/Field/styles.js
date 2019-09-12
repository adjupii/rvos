import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
`;