import React from 'react';
import { Button } from '@app/components';
import { LoginWrapper } from './style';
import { useDispatch } from 'react-redux';
import { login } from '@app/store/actions/auth/auth';

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
