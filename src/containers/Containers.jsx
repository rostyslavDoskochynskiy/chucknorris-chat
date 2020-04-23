import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { routes } from '@app/config/routes';
import { Notification } from '@app/components/Notification';
import { ErrorBoundary } from '@app/components/ErrorBoundary';
import { Main } from './style';

const mainContainersRoutes = [
  {
    path: routes.profile.users,
    component: () => <div>sdadq213231</div>
  },
];

const Containers = () => {
  return (
    <ErrorBoundary>
      <Main>
        <Switch>
          {mainContainersRoutes.map((route, key) => (
            <Route {...route} key={key} />
          ))}
          <Redirect to={routes.profile.users} />
        </Switch>
        <Notification />
      </Main>
    </ErrorBoundary>
  );
};

export default Containers;
