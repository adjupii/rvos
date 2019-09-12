import styled from 'styled-components';

const getSize = (direction, size) => {
  switch (direction) {
    case 'horizontal':
      return `
        height: ${size};
        width: 100%;
      `;

    case 'vertical':
      return `
        width: ${size};
      `;
  }
};

const Divider = styled.div`
  ${({
    theme,
    size,
    color,
    direction,
    indents
  }) => `
    ${getSize(direction, size)}

    background: ${theme.colors[color]};
    margin: ${indents};
  `}
`;

Divider.defaultProps = {
  size: '1px',
  color: 'grey-7',
  indents: '0',
  direction: 'vertical'
};

export default Divider;