import styled from 'styled-components';
import {
  style,
  space,
  position,
  top,
  right,
  bottom,
  zIndex,
  left
} from 'styled-system';

const fill = style({
  prop: 'fill',
  cssProperty: 'fill',
  key: 'colors'
});

const stroke = style({
  prop: 'stroke',
  cssProperty: 'stroke',
  key: 'colors'
});

const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor'
});

const flexShrink = style({
  prop: 'flexShrink',
  cssProperty: 'flex-shrink'
});

const css = ({ css }) => css;

export default styled.svg`
  ${fill};
  ${stroke};
  ${space};
  ${cursor};
  ${position};
  ${top};
  ${right};
  ${bottom};
  ${left};
  ${zIndex};
  ${css};
  ${flexShrink};

  vertical-align: middle;
`;