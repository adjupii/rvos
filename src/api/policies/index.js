import api from 'app/api';
import queryString from 'qs';

const getPolicies = async (params = {}) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policies${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicy = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policy/${policyNumber}${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyCoverage = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policy/${policyNumber}/coverage${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyProperty = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policy/${policyNumber}/property${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyDiscounts = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policy/${policyNumber}/discounts${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyInsureds = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policy/${policyNumber}/insureds${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyMortgagee = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policy/${policyNumber}/mortgagees${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyAgent = async policyNumber => {
  try {
    const { data } = await api.get(`policy/${policyNumber}/agent`);

    return data;
  } catch (error) {
    throw error;
  }
};

const updatePolicy = async (policyNumber, params) => {
  try {
    const apiParams = {
      policy_update_request: params
    };

    const { data } = await api.post(`policy/${policyNumber}/change`, apiParams);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyLocations = async (policyNumber, params) => {
  try {
    const query = queryString.stringify(
      params,
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`policy/${policyNumber}/locations${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyProperties = async policyNumber => {
  try {
    const { data } = await api.get(`policy/${policyNumber}/properties`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getPolicyTerms = async policyNumber => {
  try {
    const { data } = await api.get(`policy/${policyNumber}/terms`);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  getPolicies,
  getPolicy,
  getPolicyCoverage,
  getPolicyProperty,
  getPolicyDiscounts,
  getPolicyInsureds,
  getPolicyMortgagee,
  getPolicyAgent,
  updatePolicy,
  getPolicyLocations,
  getPolicyProperties,
  getPolicyTerms
};