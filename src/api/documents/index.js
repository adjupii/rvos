import queryString from 'qs';

import api from 'app/api';

const getDocuments = async (cabinet, params = {}) => {
  try {
    const query = queryString.stringify(
      params,
      {
        addQueryPrefix: true,
        encode: false
      }
    );

    const { data } = await api.get(`files/search/${cabinet}${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  getDocuments
};