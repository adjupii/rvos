import styled from 'styled-components';

import Card from 'app/components/common/Card';

export default styled(Card)`
  border: none;
  padding: 20px 20px 0;

  &.terms-documents-table {
    &--no-data {
      padding-bottom: 20px;
      text-align: center;
      font: 16px/20px "Muli", sans-serif;
    }
  }
`;