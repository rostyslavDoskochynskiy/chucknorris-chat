import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import users from "./users";

const rootReducer = combineReducers({
  // Libs
  notifications,

  // Users
  ...users,
});

export default rootReducer;
