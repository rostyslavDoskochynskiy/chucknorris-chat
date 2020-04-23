import {
  USERS_FETCH,
  USERS_SUCCESS,
  USERS_ERROR,
} from '@app/store/actionTypes/users';

const defaultState = {
  fetching: false,
  error: null,
  data: [],
};

const handlers = {
  [USERS_FETCH]: state => ({ ...state, fetching: true }),
  [USERS_SUCCESS]: (state, { data }) => ({
    ...state,
    data,
    fetching: false,
  }),
  [USERS_ERROR]: (state, { error }) => ({
    ...state,
    error,
    fetching: false,
    data: [],
  }),
  DEFAULT: state => state,
};

export const users = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
