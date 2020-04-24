import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@app/store/actions/auth/auth';
import { Button, Input } from '@app/components';
import { LoginWrapper, FieldBox } from './style';

export const Login = () => {
  const dispatch = useDispatch();
  const [loginVal, setLoginVal] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    login: {
      state: false,
      text: '',
    },
    password: {
      state: false,
      text: '',
    },
  });

  const resetErrors = () => {
    return setError({
      login: {
        state: false,
        text: '',
      },
      password: {
        state: false,
        text: '',
      },
    });
  };

  const loginHandler = () => {
    if (!loginVal) {
      setError((prevErr) => ({
        ...prevErr,
        login: {
          state: true,
          text: 'Incorrect login',
        },
      }));
    }
    if (!password) {
      setError((prevErr) => ({
        ...prevErr,
        password: {
          state: true,
          text: 'Incorrect password',
        },
      }));
    }

    // If inputs are valid then login a user
    if (loginVal && password) {
      dispatch(
        login({
          password,
          login: loginVal,
        })
      );
    }
  };

  return (
    <LoginWrapper>
      <div>
        <FieldBox>
          {/* Login Field */}
          <Input
            value={loginVal}
            error={error.login.state}
            helperText={error.login.text}
            label="Login"
            variant="outlined"
            onChange={(e) => {
              resetErrors();
              setLoginVal(e.target.value);
            }}
          />

          {/* Password Field */}
          <Input
            type="password"
            value={password}
            error={error.password.state}
            helperText={error.password.text}
            label="Password"
            variant="outlined"
            onChange={(e) => {
              resetErrors();
              setPassword(e.target.value);
            }}
          />
        </FieldBox>

        {/* Login Button */}
        <Button
          fullWidth
          style={{ marginTop: '10px' }}
          color="primary"
          variant="contained"
          onClick={loginHandler}
        >
          Login
        </Button>
      </div>
    </LoginWrapper>
  );
};
