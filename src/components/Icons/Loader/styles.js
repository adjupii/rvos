import styled from 'styled-components';

import Icon from 'app/components/new/Icon';

export default styled(Icon)`
  animation: loading-spinner 2s linear infinite;

  circle {
    stroke: ${({ theme, color }) => theme.colors[color]};
  }

  @keyframes loading-spinner {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;