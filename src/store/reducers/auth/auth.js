import { USER_LOGIN, USER_LOGOUT } from '@app/store/actionTypes/auth';

const defaultState = {
  isAuth: false,
};

const handlers = {
  [USER_LOGIN]: (state) => ({ ...state, isAuth: true }),
  [USER_LOGOUT]: (state) => ({ ...state, isAuth: false }),
  DEFAULT: (state) => state,
};

export const auth = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
