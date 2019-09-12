import api from 'app/api';

const emailSend = async (email, policyNumber) => {
  try {
    let url = `username-recovery/${email}/send`;

    if (policyNumber) {
      url = `${url}?policyNo=${policyNumber}`;
    }

    const { data } = await api.patch(url);

    return data;
  } catch (error) {
    throw error;
  }
};

const tokenCheck = async token => {
  try {
    const { data } = await api.patch(`username-recovery/${token}/check`);

    return data;
  } catch (error) {
    throw error;
  }
};

const usernameByToken = async token => {
  try {
    const { data } = await api.patch(`username-recovery/${token}/get`);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  emailSend,
  tokenCheck,
  usernameByToken
};