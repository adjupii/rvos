import { combineReducers } from 'redux';

import * as user from 'app/Redux/reducers/user';
import sign from 'app/Redux/reducers/sign';
import tokenCheck from 'app/Redux/reducers/token-check';
import * as contactUs from 'app/Redux/reducers/contact-us';

const rootReducer = combineReducers({
  ...user,
  sign,
  tokenCheck,
  ...contactUs
});

export default rootReducer;