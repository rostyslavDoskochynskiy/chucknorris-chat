import { USER_LOGIN, USER_LOGOUT } from '@app/store/actionTypes/auth';

/** Actions creators **/
const userLogin = () => ({
  type: USER_LOGIN,
});

const userLogout = () => ({
  type: USER_LOGOUT,
});

export const initialCheck = () => (dispatch) => {
  const isAuth = JSON.parse(localStorage.getItem('isAuth') || null);
  if (isAuth) {
    dispatch(userLogin());
  }
};

export const login = () => (dispatch) => {
  localStorage.setItem('isAuth', 'true');
  dispatch(userLogin());
};

export const logout = () => (dispatch) => {
  localStorage.setItem('isAuth', 'false');
  dispatch(userLogout());
};
