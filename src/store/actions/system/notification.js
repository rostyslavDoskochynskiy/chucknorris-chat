import * as notify from 'react-notification-system-redux';

export const notification = ({
  kind = 'info',
  ...notifyData
}) => async dispatch => {
  return dispatch(notify[kind](notifyData));
};
