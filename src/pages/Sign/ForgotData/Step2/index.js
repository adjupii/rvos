import React from 'react';
import PropTypes from 'prop-types';

import FormText from 'app/components/Layouts/FormText';
import FormMessage from 'app/components/Layouts/Sign/FormMessage';

const ForgotDataStep2 = ({ page }) => (
  <FormMessage
    title="Recover link was send"
    iconName="Letter"
  >
    <FormText>
      If there&apos;s an account linked to this email address, we&apos;ll send over
      instructions to recover your {page.name}.
    </FormText>
  </FormMessage>
);

ForgotDataStep2.propTypes = {
  page: PropTypes.object
};

export default ForgotDataStep2;