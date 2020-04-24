import React, { useCallback, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { routes } from '@app/config/routes';
import { mainContainersRoutes } from './config';
import { initialCheck } from '@app/store/actions/auth/auth';
import { isAuthSelector } from '@app/store/selectors/auth/auth';
import { ErrorBoundary, Notification } from '@app/components';
import { Login } from './Auth/Login';
import { Main } from './style';

export const Containers = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => isAuthSelector(state));

  const initFetch = useCallback(() => {
    dispatch(initialCheck());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  if (!isAuth) {
    return (
      <Switch>
        <Route path={routes.auth.login} component={Login} />
        <Redirect to={routes.auth.login} />
      </Switch>
    );
  }

  return (
    <ErrorBoundary>
      <Main>
        <Switch>
          {mainContainersRoutes.map((route, key) => (
            <Route {...route} key={key} />
          ))}
          <Redirect to={routes.profile.chat} />
        </Switch>
        <Notification />
      </Main>
    </ErrorBoundary>
  );
};
