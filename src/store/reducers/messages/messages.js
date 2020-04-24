import {
  MESSAGE_FETCH,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
} from '@app/store/actionTypes/message';

const defaultState = {
  fetching: false,
  error: null,
  data: [],
};

const handlers = {
  [MESSAGE_FETCH]: (state) => ({ ...state, fetching: true }),
  [MESSAGE_SUCCESS]: (state, { data }) => {
    return {
      ...state,
      data,
      fetching: false,
    };
  },
  [MESSAGE_ERROR]: (state, { error }) => ({
    ...state,
    error,
    fetching: false,
    data: [],
  }),
  DEFAULT: (state) => state,
};

export const messages = (state = defaultState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
