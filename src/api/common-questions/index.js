import api from 'app/api';
import queryString from 'qs';

const getQuestionsCategories = async () => {
  try {
    const { data } = await api.get('common-questions/categories');

    return data;
  } catch (error) {
    throw error;
  }
};

const getQuestions = async (filter = null) => {
  try {
    const query = queryString.stringify(
      { filter },
      {
        addQueryPrefix: true,
        skipNulls: true
      }
    );

    const { data } = await api.get(`common-questions${query}`);

    return data;
  } catch (error) {
    throw error;
  }
};


export {
  getQuestionsCategories,
  getQuestions
};