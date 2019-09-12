import styled from 'styled-components';
import {
  style,
  space,
  color,
  width,
  height,
  order,
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  flex,
  display,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  position,
  top,
  right,
  bottom,
  left,
  zIndex,
  overflow,
  opacity
} from 'styled-system';

const background = style({
  prop: 'background',
  cssProperty: 'background',
  key: 'colors'
});

const outline = style({
  prop: 'outline',
  cssProperty: 'outline',
});

const overflowX = style({
  prop: 'overflowX',
  cssProperty: 'overflow-x',
});

const cursor = style({
  prop: 'cursor',
  cssProperty: 'cursor',
});

const overflowY = style({
  prop: 'overflowY',
  cssProperty: 'overflow-y',
});

const css = ({ css }) => css;

export default styled.div`
  box-sizing: border-box;

  ${space};
  ${width};
  ${height};
  ${color};
  ${background};
  ${order};
  ${borders};
  ${borderColor};
  ${borderRadius};
  ${boxShadow};
  ${flex};
  ${display};
  ${minWidth};
  ${maxWidth};
  ${minHeight};
  ${maxHeight};
  ${position};
  ${top};
  ${right};
  ${bottom};
  ${left};
  ${zIndex};
  ${opacity};
  ${overflow};
  ${overflowY};
  ${overflowX};
  ${outline}
  ${cursor}
  ${css};
`;