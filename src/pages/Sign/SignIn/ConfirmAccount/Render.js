import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Link from 'app/components/common/Link';
import Paragraph from 'app/components/common/Paragraph';
import FormMessage from 'app/components/Layouts/Sign/FormMessage';
import FormText from 'app/components/Layouts/FormText';

const ConfirmAccount = ({
  userEmail,
  handleResendToken,
  isFetching,
  status,
  goToPage
}) => (
  <Fragment>
    <FormMessage
      title="Confirm an account"
      iconName={isFetching ? 'Loader' : 'Letter'}
    >
      {
        status === 200
          ? (
            <FormText>
              A verification message has been sent to your email
              {' '}
              <span className="form-text__text-link">
                {userEmail}
              </span>
              {'. '}
              Check it please
            </FormText>
          )
          : (
            <FormText>
              Please confirm your account by clicking on the link in the verification letter on your email
              {' '}
              <span className="form-text__text-link">
                {userEmail}
              </span>
              {'.'}
            </FormText>
          )
      }
    </FormMessage>

    <Paragraph
      textAlign="center"
      fontSize="14px"
      mb={3}
    >
      Can’t find a verification email?
      {' '}
      <Link
        color="grey.1"
        onClick={!isFetching ? handleResendToken : undefined}
      >
        Resend
      </Link>
    </Paragraph>

    <Paragraph textAlign="center">
      Entered the wrong email?
      {' '}
      <Link
        color="grey.1"
        onClick={goToPage('sign-up-step-1')}
      >
        Register again
      </Link>
    </Paragraph>
  </Fragment>
);

ConfirmAccount.propTypes = {
  userEmail: PropTypes.string,
  handleResendToken: PropTypes.func,
  isFetching: PropTypes.bool,
  status: PropTypes.number,
  goToPage: PropTypes.func
};

export default ConfirmAccount;