import api from 'app/api';

const getStates = async () => {
  try {
    const { data } = await api.get('states');

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  getStates
};