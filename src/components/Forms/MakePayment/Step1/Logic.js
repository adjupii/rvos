import { useEffect } from 'react';
import { compose } from 'redux';
import { withFormik } from 'formik';

import { notifications } from 'app/components/common/Notifications';
import {
  validateAccount,
  isPastDueAccount
} from 'app/helpers/make-payment';

import withStep from 'app/components/Steps/withStep';

import { makePaymentStep1 as schema } from 'app/schemas';

export default compose(
  withFormik({
    mapPropsToValues: ({
      account: { accountNumber }
    }) => ({
      accountNumber: accountNumber || ''
    }),
    validationSchema: schema,
    isInitialValid: ({ scenario }) => validateAccount(scenario),
    enableReinitialize: true
  }),

  withStep
);

const usePastDueNotify = scenario => {
  useEffect(
    () => {
      if (isPastDueAccount(scenario)) {
        const notify = notifications.create({
          id: 'past-due-account',
          message: 'Your account is past due. Please contact Customer Service at 1-800-792-3084 immediately to make a payment and reinstate the policy.',
          type: 'error',
          timeout: 0
        });

        notify();
      } else {
        notifications.remove({ id: 'past-due-account' });
      }

      return () => {
        notifications.remove({ id: 'past-due-account' });
      };
    },
    [ scenario ]
  );
};

export {
  usePastDueNotify
};