import styled from 'styled-components';

const Image = styled.img`
  vertical-align: top;
`;

Image.defaultProps = {
  width: '100%',
  height: 'auto'
};

export default Image;