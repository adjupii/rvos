import styled from 'styled-components';

export default styled.svg`
  vertical-align: middle;

  ${({ fill }) => fill && `fill: ${fill}`};
`;