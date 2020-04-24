import { USER_LOGIN, USER_LOGOUT } from '@app/store/actionTypes/auth';

/** Actions creators **/
const userLogin = (data) => ({
  type: USER_LOGIN,
  data,
});

const userLogout = () => ({
  type: USER_LOGOUT,
});

export const initialCheck = () => (dispatch) => {
  const auth = JSON.parse(localStorage.getItem('auth') || null);
  if (auth && !!Object.keys(auth).length) {
    dispatch(userLogin(auth));
  }
};

export const login = (credentials) => (dispatch) => {
  const auth = {
    credentials,
    isAuth: true,
  };
  localStorage.setItem('auth', JSON.stringify(auth));
  dispatch(userLogin(auth));
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('auth');
  localStorage.removeItem('messages');
  dispatch(userLogout());
};
