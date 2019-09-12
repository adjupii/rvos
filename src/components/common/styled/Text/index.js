import styled from 'styled-components';
import {
  style,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  verticalAlign,
} from 'styled-system';

const whiteSpace = style({
  prop: 'whiteSpace',
  cssProperty: 'white-space',
});

import Box from '../Box';

export default styled(Box)`
  ${fontSize};
  ${fontFamily};
  ${fontWeight};
  ${textAlign};
  ${lineHeight};
  ${letterSpacing};
  ${verticalAlign};
  ${whiteSpace};
`;