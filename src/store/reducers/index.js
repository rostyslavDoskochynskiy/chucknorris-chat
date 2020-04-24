import { combineReducers } from 'redux';
import { reducer as notifications } from 'react-notification-system-redux';
import auth from './auth';
import messages from './messages';

const rootReducer = combineReducers({
  // Libs
  notifications,

  // Auth
  ...auth,

  // Messages
  ...messages,
});

export default rootReducer;
