import queryString from 'qs';

import api from 'app/api';

const getQuickLinks = async pageName => {
  try {
    const query = queryString.stringify(
      {
        filter: {
          block_name: pageName
        }
      },
      { addQueryPrefix: true }
    );

    const { data } = await api.get(`quick-links${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  getQuickLinks
};