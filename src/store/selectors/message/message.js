import { createSelector } from 'reselect';
import moment from '@app/services/moment';

// ====================================== Message ======================================

export const messagesSelector = createSelector(
  ({ messages }) => messages,
  (messages) => ({
    ...messages,
    data: messages.data.map(
      ({ created_at, value, icon_url, me, userName, id }) => ({
        id,
        userName: !me ? 'Chuck Norris' : userName,
        time: moment(created_at).format('LT'),
        text: value,
        avatar: icon_url,
        me: !!me,
      })
    ),
  })
);
