import { createActions } from 'redux-actions';
import * as api from 'app/api/contact-us';

const actions = createActions({
  CONTACT_US:{
    TOPICS: {
      SET_DATA: null,
      FETCHING: null
    },
    SEND_REQUEST: {
      SET_DATA: null,
      FETCHING: null
    }
  }
});

const {
  contactUs: {
    topics,
    sendRequest
  }
} = actions;

const getRequestTopics = () => dispatch => {

  const request = api.getTopics();

  dispatch(topics.fetching(true));

  request
    .then(res => {
      dispatch(topics.setData(res));
      dispatch(topics.fetching(false));
    })
    .catch(() => {
      dispatch(topics.fetching(false));
    });

  return request;
};

const sendNewRequest = values => dispatch => {

  const request = api.sendNewRequest(values);

  dispatch(sendRequest.fetching(true));

  request
    .then(res => {
      dispatch(sendRequest.setData(res));
      dispatch(sendRequest.fetching(false));
    })
    .catch(() => {
      dispatch(sendRequest.fetching(false));
    });

  return request;
};


export {
  getRequestTopics,
  sendNewRequest
};

export default actions;