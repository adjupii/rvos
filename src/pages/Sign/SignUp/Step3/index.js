import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { resendToken } from 'app/api/sign-up';

import { Button } from 'app/components/common/Button';
import FormMessage from 'app/components/Layouts/Sign/FormMessage';
import FormText from 'app/components/Layouts/FormText';

import Styled from './styles';

const SignUpStep3 = ({ userEmail }) => {
  const handleResendToken = useCallback(
    () => {
      resendToken(userEmail);
    },
    [ userEmail ]
  );

  return (
    <Styled className="l-sign-up-step-3">
      <FormMessage
        title="Amazing work!"
        iconName="Amazing"
      >

        <div className="l-sign-up-step-3__text-holder">
          <FormText>
            You are almost done. Just one small step, please.
          </FormText>
        </div>

        <div className="l-sign-up-step-3__text-holder">
          <FormText>
            A verification message has been sent to your email
            {' '}
            <span className="form-text__text-link">
              {userEmail}
            </span>
            {'. '}
            Check it please
          </FormText>
        </div>
      </FormMessage>
      
      <div className="l-sign-up-step-3__link">
        <Button
          onClick={handleResendToken}
          className="button--secondary"
        >
          Resend verification link
        </Button>
      </div>
    </Styled>
  );
};

SignUpStep3.propTypes = {
  userEmail: PropTypes.string
};

export default SignUpStep3;