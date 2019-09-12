import styled from 'styled-components';

export default styled.button.attrs({
  type: 'submit'
})`
  border-radius: 8px;
  background: linear-gradient(90deg, #5317CA 0%, #26B7F8 100%);
  border: none;
  padding: 19px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  width: 100%;

  &:disabled {
    opacity: 0.5;
  }
`;