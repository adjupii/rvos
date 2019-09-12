import styled from 'styled-components';

import Box from '../Box';

const Image = styled(Box)`
  vertical-align: top;
`;

Image.defaultProps = {
  as: 'img',
  width: '100%',
  height: 'auto'
};

export default Image;