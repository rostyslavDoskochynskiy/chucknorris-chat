import { initialCheck, login, logout } from './auth';

export const auth = {
  ...initialCheck,
  ...login,
  ...logout,
};
