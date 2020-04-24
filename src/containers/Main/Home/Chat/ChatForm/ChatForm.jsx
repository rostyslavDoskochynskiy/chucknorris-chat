import React, { useState } from 'react';
import { Input } from '@app/components';

const ChatForm = ({ onEnter }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const changeHandler = e => {
    setErrorText('');
    setError(false);
    setMessage(e.target.value);
  };

  const keyPressHandler = e => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (!message) {
        setError(true);
        return setErrorText('Message cannot be empty');
      }

      onEnter(message);
      setMessage('');
    }
  };

  return (
    <form noValidate autoComplete="off">
      <Input
        value={message}
        error={error}
        placeholder="Type your message"
        helperText={errorText}
        fullWidth
        variant="outlined"
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
    </form>
  );
};

export default ChatForm;
