import api from 'app/api';

const emailSend = async (email, policyNumber) => {
  try {
    let url = `password-recovery/${email}/send`;

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
    const { data } = await api.patch(`password-recovery/${token}/check`);

    return data;
  } catch (error) {
    throw error;
  }
};

const setNewPassword = async ({ token, password }) => {
  try {
    const encodedPasssword = encodeURIComponent(password);
    const { data } = await api.patch(`password-recovery/${token}/set/${encodedPasssword}`);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  emailSend,
  tokenCheck,
  setNewPassword
};