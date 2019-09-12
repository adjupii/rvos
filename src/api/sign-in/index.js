import api from 'app/api';

const loginCheck = async params => {
  try {
    const { data } = await api.post('login_check', params);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  loginCheck
};