import { USER_LOGIN, USER_LOGOUT } from '@app/store/actionTypes/auth';

const defaultState = {
  credentials: {
    login: '',
    password: '',
  },
  isAuth: false,
};

const handlers = {
  [USER_LOGIN]: (state, { data }) => ({ ...data }),
  [USER_LOGOUT]: () => defaultState,
  DEFAULT: (state) => state,
};

export const auth = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
