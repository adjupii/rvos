import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

const DEFAULT_STYLES = `
  font-size: 13px;
  font-weight: 500;

  &.button {
    &--size-big {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &.button--secondary {
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Button = styled.button.attrs({
  type: 'button'
})`
  ${DEFAULT_STYLES};

  border: none;
  padding: 0;
  background: none;
  outline: none;
  color: ${({ theme }) => theme.colors.link};
  cursor: pointer;

  &:disabled {
    color: ${({ theme }) => theme.colors['grey-2']};
    cursor: default;
  }
`;

const Link = styled(RouterLink)`
  ${DEFAULT_STYLES};

  text-decoration: none;
`;

export {
  Button,
  Link
};