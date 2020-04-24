import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@app/components';
import { login } from '@app/store/actions/auth/auth';
import { LoginWrapper } from './style';

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <LoginWrapper>
      <Button
        style={{ marginTop: '10px' }}
        color="primary"
        size="large"
        variant="outlined"
        onClick={() => dispatch(login())}
      >
        Login
      </Button>
    </LoginWrapper>
  );
};
