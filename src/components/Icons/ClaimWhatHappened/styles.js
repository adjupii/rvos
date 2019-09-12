import styled from 'styled-components';

import Icon from 'app/components/new/Icon';

export default styled(Icon)`
  ${({
    theme,
    selected,
    gradientId
  }) => `
    path {
      fill: ${selected ? `url(#${gradientId})` : theme.colors['grey-6']};
    }
  `}
`;