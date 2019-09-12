import { compose } from 'redux';
import pickBy from 'lodash/pickBy';
import mapValues from 'lodash/mapValues';

import {
  makePaymentByCreditCard,
  makePaymentByEFT
} from 'app/api/billing';

import history from 'app/history';
import { notifications } from 'app/components/common/Notifications';
import {
  fromCurrency,
  numbers,
  date,
  routingNumber
} from 'app/format';

const APIS = {
  creditCard: makePaymentByCreditCard,
  eft: makePaymentByEFT
};

const onAction = (setFetching, values) => {
  setFetching(true);

  const api = APIS[values.type];

  let
    paramKeys = [
      'accountNumber',
      'amount',
      'sendReceipt',
      'receiptEmail'
    ],
    additionalParamKeys = [];

  if (values.type === 'creditCard') {
    additionalParamKeys = [
      'creditCardNumber',
      'creditExpirationDate',
      'creditCardCVV',
      'billingFirstName',
      'billingLastName',
      'street',
      'city',
      'state',
      'postalCode'
    ];
  }

  if (values.type === 'eft') {
    additionalParamKeys = [
      'bankAccountNumber',
      'bankAccountRoutingNumber',
      'bankAccountType',
      'bankAccountName'
    ];
  }

  const params = compose(
    values => (
      mapValues(
        values,
        (value, key) => {
          if (key === 'amount') {
            return fromCurrency(value);
          }

          if (
            key === 'creditCardNumber'
            || key === 'postalCode'
          ) {
            return numbers(value);
          }

          if (key === 'creditExpirationDate') {
            return date(new Date(value[1], value[0]), 'MM/YY');
          }

          if (key === 'bankAccountRoutingNumber') {
            return routingNumber(value);
          }

          return value;
        }
      )
    ),
    values => (
      pickBy(
        values,
        (value, key) =>
          value !== ''
          && [
            ...paramKeys,
            ...additionalParamKeys
          ].includes(key)
      )
    )
  )(values);

  api(params)
    .then(() => {
      setFetching(false);

      const notify = notifications.create({
        message: 'Your payment is successfully created!',
        type: 'success'
      });

      history.goBack();
      notify();
    })
    .catch(({
      code,
      message
    }) => {
      setFetching(false);

      if (code === 405) {
        const notify = notifications.create({
          message,
          type: 'error'
        });

        notify();
      }
    });
};

export {
  onAction
};