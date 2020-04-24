import { createSelector } from 'reselect';
import { capitalize } from '@app/shared/utils';

// ====================================== Auth ======================================

export const isAuthSelector = createSelector(
  ({ auth }) => auth.isAuth,
  (isAuth) => isAuth
);

export const usernameSelector = createSelector(
  ({ auth }) => auth.credentials.login,
  (login) => capitalize(login)
);
