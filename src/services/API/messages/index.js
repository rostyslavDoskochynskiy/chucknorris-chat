import MessagesAPIService from './messagesAPIService';

const messagesAPIService = new MessagesAPIService();

export const messages = {
  ...messagesAPIService,
};
