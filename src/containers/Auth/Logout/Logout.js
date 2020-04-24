import React from 'react';
import { Button } from '@app/components';
import { LogoutWrapper } from './style';
import { useDispatch } from 'react-redux';
import { logout } from '@app/store/actions/auth/auth';

export const Logout = () => {
  const dispatch = useDispatch();

  return (
    <LogoutWrapper>
      <Button
        style={{ marginTop: '10px' }}
        color="primary"
        size="large"
        onClick={() => dispatch(logout())}
      >
        Logout
      </Button>
    </LogoutWrapper>
  );
};
