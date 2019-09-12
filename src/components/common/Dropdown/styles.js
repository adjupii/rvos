import styled from 'styled-components';

import Card from 'app/components/common/Card';

export default styled(Card).attrs({
  className: 'c-dropdown'
})`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9996;
  border-radius: 4px;
  outline: none;

  &.c-dropdown {
    &--in-select {
      width: 164px;
    }

    &--in-select-in-form {
      width: 100%;
    }

    &--in-dropdown-menu {
      width: 156px;
    }

    &--faq-filter {
      left: 0;
      right: auto;
      width: 180px;
    }

    &--header-profile {
      width: 196px;
      top: 66px;
    }

    &--policy-terms {
      width: 250px;
    }
  }
`;