import { onMessage, fetchMessages } from './messages';

export const messages = {
  ...onMessage,
  ...fetchMessages,
};
