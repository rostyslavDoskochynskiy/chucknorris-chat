import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Grow from '@material-ui/core/Grow';
// import { usersSelector } from '@app/store/selectors/auth/auth';
// import { notification } from '@app/store/actions';
// import { useFetchUsers } from '@app/shared';
// import { CircularProgress } from '@app/components';
// import { Center } from './style';
import Chat from './Chat/Chat';

export const Home = () => {
  return (
    <section style={{ height: 'inherit' }}>
      {/* Loading */}
      {/*<Grow in={fetching}>*/}
      {/*  <Center>*/}
      {/*    <CircularProgress disableShrink />*/}
      {/*  </Center>*/}
      {/*</Grow>*/}
      <Chat />
    </section>
  );
};
