import React, { useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { Input, Button } from '@app/components';
import { Form as FormWrapped } from './style';

const Form = ({ onEnter }) => {
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
    <FormWrapped noValidate autoComplete="off">
      {/* Message Input */}
      <Input
        value={message}
        error={error}
        placeholder="Type your message"
        variant="outlined"
        label={errorText}
        fullWidth
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />

      {/* Button Send */}
      <Button
        style={{ marginTop: '10px' }}
        color="primary"
        size="small"
        endIcon={<SendIcon />}
        onClick={sendMessage}
      >
        Send
      </Button>
    </FormWrapped>
  );
};

export default Form;
