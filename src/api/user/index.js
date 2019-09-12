import api from 'app/api';
import queryString from 'qs';

const getUser = async () => {
  try {
    const { data } = await api.get('user');

    return data;
  } catch (error) {
    throw error;
  }
};

const getSettings = async () => {
  try {
    const { data } = await api.get('settings');

    return data;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (params, password) => {
  try {
    const query = queryString.stringify({ password });

    const { data } = await api.patch(`user?${query}`, { user: params });

    return data;
  } catch (error) {
    throw error;
  }
};

const updateUserCustomer = async params => {
  try {
    const { data } = await api.patch('user/customer', { customer: params });

    return data;
  } catch (error) {
    throw error;
  }
};

const userAccounts = async email => {
  try {
    const { data } = await api.get(`anonymous-user/${email}/accounts`);

    return data;
  } catch (error) {
    throw error;
  }
};

const uploadAvatar = async( 
  image,
  fileIndex,
  setStatus,
) => {
  const formData = new FormData();

  formData.append('image', image);

  try {
    const { data } = await api.post('user/avatar', formData);

    return data;
  } catch (error) {
    const message = (
      error.code === 405
        ? 'Sorry, we do not support this file type'
        : 'Something went wrong. Please, try again'
    );

    setStatus(fileIndex, 0, message);
  }
};

const changeEmail = async (email, password) => {
  try {
    const encodedPasssword = encodeURIComponent(password);
    const { data } = await api.patch(`user/email/update/${email}/${encodedPasssword}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const confirmEmail = async token => {
  try {
    const { data } = await api.patch(`user/email/confirm/${token}`);

    return data;
  } catch (error) {
    throw error;
  }
};

const getAgents = async () => {
  try {
    const { data } = await api.get('user/agents');

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  getUser,
  updateUser,
  updateUserCustomer,
  userAccounts,
  uploadAvatar,
  confirmEmail,
  changeEmail,
  getAgents,
  getSettings
};