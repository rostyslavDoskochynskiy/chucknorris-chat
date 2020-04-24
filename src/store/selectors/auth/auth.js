import { createSelector } from 'reselect';

// ====================================== Auth ======================================

export const isAuthSelector = createSelector(
  ({ auth }) => auth.isAuth,
  (isAuth) => isAuth
);
