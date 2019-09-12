import styled from 'styled-components';

export default styled.div.attrs({
  className: 'claim-pending'
})`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yellow};
`;