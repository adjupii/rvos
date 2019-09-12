import api from 'app/api';
import queryString from 'qs';

const getBillingForPolicy = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data, status } = await api.get(
      `billing/account/policy/${policyNumber}${query}`,
      {
        validateStatus: status => (
          (status >= 200 && status < 300) || status === 400
        )
      }
    );

    return status === 400 ? {} : data;
  } catch (error) {
    throw error;
  }
};

const getBillingForPolicies = async () => {
  try {
    const { data } = await api.get('billing/customer-policies');

    return data;
  } catch (error) {
    throw error;
  }
};

const getBillingAccounts = async () => {
  try {
    const { data } = await api.get('billing/accounts');

    return data;
  } catch (error) {
    throw error;
  }
};

const getBillingAccount = async accountNumber => {
  try {
    const { data } = await api.get(`billing/account/${accountNumber}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getBillingAccountUpcomingPayments = async accountNumber => {
  try {
    const { data } = await api.get(`billing/account/${accountNumber}/upcoming-payments`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getBillingAccountHistory = async accountNumber => {
  try {
    const { data } = await api.get(`billing/account/${accountNumber}/history`);

    return (
      data && data.length
        ? (
          data.map((item, i) => ({
            id: `item-${i}`,
            ...item
          }))
        )
        : data
    );
  } catch (error) {
    throw error;
  }
};

const getBillingAccountPolicies = async accountNumber => {
  try {
    const { data } = await api.get(`billing/account/${accountNumber}/policies`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getBankAccTypes = async () => {
  try {
    const { data } = await api.get('billing/payment/ach-bank-account-types');

    return data;
  } catch (error) {
    throw error;
  }
};

const makePaymentByCreditCard = async params => {
  try {
    const { data } = await api.post(
      'billing/payment/pay-by-credit-card',
      { credit_card: params }
    );

    return data;
  } catch (error) {
    throw error;
  }
};

const makePaymentByEFT = async params => {
  try {
    const { data } = await api.post(
      'billing/payment/pay-by-ach',
      { ach: params }
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  getBillingForPolicy,
  getBillingForPolicies,
  getBillingAccounts,
  getBillingAccount,
  getBillingAccountUpcomingPayments,
  getBillingAccountHistory,
  getBillingAccountPolicies,
  getBankAccTypes,
  makePaymentByCreditCard,
  makePaymentByEFT
};