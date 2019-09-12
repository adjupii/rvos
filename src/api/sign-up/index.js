import api from 'app/api';
import queryString from 'qs';

const findCustomer = async (policyNo, params) => {
  try {
    const query = queryString.stringify(params, { skipNulls: true });

    const { data } = await api.get(`registration/${policyNo}/find?${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const registration = async (policyNo, params) => {
  try {
    const { data } = await api.post(`registration/${policyNo}`, { user: params });

    return data;
  } catch (error) {
    throw error;
  }
};

const tokenCheck = async token => {
  try {
    const { data } = await api.patch(`registration/${token}/confirm`);

    return data;
  } catch (error) {
    throw error;
  }
};

const resendToken = async email => {
  try {
    const { data } = await api.patch(`registration/${email}/resend`);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  findCustomer,
  registration,
  tokenCheck,
  resendToken
};