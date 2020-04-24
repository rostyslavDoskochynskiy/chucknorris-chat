import React, { Fragment, useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onMessage, fetchMessages } from '@app/store/actions/messages/messages';
import { notification } from '@app/store/actions/system';
import { messagesSelector } from '@app/store/selectors/message/message';
import { Logout } from '@app/containers/Auth/Logout';
import ChatForm from './ChatForm/ChatForm';
import { Message } from './Message';
import './index.css';

const Chat = () => {
  const messagesEndRef = useRef(null);
  const messages = useSelector(state => messagesSelector(state).data);
  const typing = useSelector(state => messagesSelector(state).fetching);
  const dispatch = useDispatch();

  const getMessages = useCallback(() => {
    dispatch(fetchMessages());
  }, [dispatch]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  useEffect(() => {
    messagesEndRef.current &&
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onMessageHandler = message => {
    try {
      dispatch(onMessage(message));
      dispatch(
        notification({
          kind: 'success',
          title: 'Hey!',
          message: "You've got a new message from Chuck Norris :)",
        })
      );
    } catch (e) {
      dispatch(
        notification({
          kind: 'error',
          title: 'Error!',
          message: 'Something went wrong. Try later :(',
        })
      );
    }
  };

  return (
    <section className="msger">
      <header className="msger-header">
        <div className="msger-header-title">Chat with Chuck Norris</div>
        <Logout />
      </header>

      {/* No messages */}
      {!messages.length && <p className="msger-no-results">No messages</p>}

      {/* Messages */}
      <ul className="msger-chat">
        {messages.map(({ id, avatar, time, text, me, userName }) => (
          <Fragment key={id}>
            <Message
              avatar={avatar}
              userName={userName}
              time={time}
              text={text}
              me={me}
            />
            <div ref={messagesEndRef} />
          </Fragment>
        ))}
      </ul>

      {/* typing a message to me */}
      {typing && <em style={{ margin: '10px' }}>Chuck Norris is typing...</em>}

      {/* Input */}
      <ChatForm onEnter={onMessageHandler} />
    </section>
  );
};

export default Chat;
