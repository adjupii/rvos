import styled from 'styled-components';

export default styled.input.attrs({
  type: 'text',
  className: 'c-input'
})`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors['grey-7']};
  font-size: 16px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors['grey-5']};
  background: none;
  padding: 0 0 4px;

  &:focus {
    outline: none;
  }

  &.c-input--faq-search {
    padding: 0 20px;
    border: none;
  }

  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;