import { createSelector } from 'reselect';

// ====================================== Message ======================================

export const messagesSelector = createSelector(
  ({ messages }) => messages,
  (messages) => ({
    ...messages,
    data: messages.data.map(({ sent, value, icon_url, me, userName, id }) => ({
      id,
      userName: !me ? 'Chuck Norris' : userName,
      time: sent,
      text: value,
      avatar: icon_url,
      me: !!me,
    })),
  })
);
