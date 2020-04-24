import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { Input, Button } from '@app/components';
import { Form } from './style';

const ChatForm = ({ onEnter }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const changeHandler = e => {
    setErrorText('');
    setError(false);
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (!message) {
      setError(true);
      return setErrorText('Message cannot be empty');
    }

    onEnter(message);
    setMessage('');
  };

  const keyPressHandler = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Form noValidate autoComplete="off">
      <Input
        value={message}
        error={error}
        placeholder="Type your message"
        label={errorText}
        fullWidth
        variant="outlined"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <Button
        style={{ marginTop: '10px' }}
        color="primary"
        size="small"
        endIcon={<SendIcon />}
        onClick={sendMessage}
      >
        Send
      </Button>
    </Form>
  );
};

export default ChatForm;
