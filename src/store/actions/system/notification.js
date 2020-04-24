import * as notify from 'react-notification-system-redux';

export const notification = ({ kind = 'info', ...notifyData }) => async (
  dispatch
) => dispatch(notify[kind](notifyData));
