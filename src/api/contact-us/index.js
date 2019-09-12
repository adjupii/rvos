import api from 'app/api';

const getTopics = async () => {
  try {
    const { data } = await api.get('communication/topics');

    return data;
  } catch (error) {
    throw error;
  }
};

const sendNewRequest = async (values) => {
  try {
    const { data } = await api.post('communication/contact-us', values);

    return data;
  } catch (error) {
    throw error;
  }
};

export {
  getTopics,
  sendNewRequest
};