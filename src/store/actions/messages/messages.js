import {
  MESSAGE_FETCH,
  MESSAGE_SUCCESS,
  MESSAGE_ERROR,
} from '@app/store/actionTypes/message';
import { saveMessage } from '@app/shared/utils';
import moment from '@app/services/moment';
import avatar from '@app/assets/img/ava.png';

/** Actions creators **/
const messageFetch = () => ({
  type: MESSAGE_FETCH,
});

export const messageSuccess = (data) => ({
  data,
  type: MESSAGE_SUCCESS,
});

export const messageError = (data) => ({
  data,
  type: MESSAGE_ERROR,
});

export const onMessage = (message) => (dispatch, getState, { api }) => {
  const newMessage = {
    userName: 'Rostyk',
    me: true,
    id: new Date(),
    value: message,
    icon_url: avatar,
    sent: moment().format('LT'),
  };

  // Save my new message in localstorage
  const messages = saveMessage(newMessage);

  dispatch(messageSuccess(messages));
  dispatch(messageFetch());

  return api.messages
    .getMessage()
    .then((res) => {
      // Save Chuck Norris new message in localstorage
      const messages = saveMessage({
        ...res,
        sent: moment().format('LT'),
      });
      dispatch(messageSuccess(messages));
    })
    .catch((err) => {
      dispatch(messageError(err));
      throw err;
    });
};

export const fetchMessages = () => (dispatch) => {
  try {
    dispatch(messageFetch());
    let messages = JSON.parse(localStorage.getItem('messages') || '[]');

    dispatch(messageSuccess(messages));
  } catch (e) {
    dispatch(messageError(e));
  }
};
