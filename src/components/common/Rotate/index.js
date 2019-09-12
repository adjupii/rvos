import styled from 'styled-components';

const Rotate = styled.div`
  transition: transform .2s ease-out;

  ${({ to }) => `transform: rotate(${to}deg)`};
`;

Rotate.defaultProps = {
  to: 0
};

export default Rotate;