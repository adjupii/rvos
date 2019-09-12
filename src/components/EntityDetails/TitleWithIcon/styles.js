import styled from 'styled-components';

import { getBreakpointUp } from 'app/styles';

export default styled.div`
  &.title-with-icon {
    &--claim-upload-files {
      margin-bottom: 40px;
    }

    &--claim-team {
      margin-bottom: 40px;
    }

    &--claim-documents {
      margin-bottom: 20px;
    }

    &--claim-property {
      margin-top: 30px;
    }

    &--policy-sub-section {
      padding-bottom: 20px;
    }
  }

  .title-with-icon {
    &__title {
      display: flex;
      align-items: center;
      margin-bottom: 15px;
    }

    &__icon {
      flex-shrink: 0;
      margin-right: 25px;
    }

    &__text {
      font-size: 13px;
      font-family: "Muli", san-serif;
      font-weight: 700;
    }

    &__box {
      ${({ theme }) => getBreakpointUp(theme.breakpoints, 's', `
        margin-left: 73px;
      `)}
    }
  }
`;